/* ON STAGE 수집 Worker
   - 매시 정각 크론으로 수집해 KV 에 저장
   - GET /feed.json  사이트가 읽어가는 공개 엔드포인트 (CORS 허용)
   - GET /status     마지막 실행 결과
   - GET /collect?token=…  수동 실행 (COLLECT_TOKEN 시크릿이 있을 때만)

   크론이 두 개다. 매시 정각은 공연 수집, 15분마다는 SNS 공지 감시 —
   Workers 무료는 '호출당' 10ms CPU · 50 subrequest 이므로 따로 돌리면
   서로의 예산을 깎지 않는다. 둘은 event.cron 으로 구분한다.
   SNS 상태는 별도 KV 키에 둔다 — status 를 건드리면 tools/watch.mjs 의
   판정에 영향이 가기 때문이다.                                             */

import { collectAll } from "./collect.js";
import { SNS_CRON, collectSns, formatTelegram, sendTelegram } from "./sns.js";

const FEED_KEY = "feed";
const STATUS_KEY = "status";
const SNS_KEY = "sns";

const CORS = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, OPTIONS",
  "access-control-max-age": "86400"
};

const json = (body, status = 200, extra = {}) =>
  new Response(typeof body === "string" ? body : JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", ...CORS, ...extra }
  });

async function run(env) {
  const stored = await env.FEED.get(FEED_KEY, "json");
  const previous = stored?.events || [];
  /* 소스별 건강 상태(연속 0건·실패 횟수)는 status 에 실려 다음 실행으로 넘어온다 */
  const prevStatus = await env.FEED.get(STATUS_KEY, "json");

  const { events, stats, errors, health, warnings, state } = await collectAll({
    keys: { kopis: env.KOPIS_KEY, ticketmaster: env.TICKETMASTER_KEY },
    previous,
    health: prevStatus?.health || {},
    state: prevStatus?.state || {},
    log: (...m) => console.log(...m)
  });

  const at = new Date().toISOString();

  /* 전부 실패했으면 이전 데이터를 유지한다 — 빈 화면을 배포하지 않기 위해 */
  if (!events.length && errors.length) {
    await env.FEED.put(STATUS_KEY, JSON.stringify({ at, ok: false, kept: previous.length, stats, errors, warnings, health, state }));
    return { ok: false, kept: previous.length, errors, warnings };
  }

  await env.FEED.put(FEED_KEY, JSON.stringify({ updated: at, count: events.length, events }));
  await env.FEED.put(STATUS_KEY, JSON.stringify({ at, ok: true, count: events.length, stats, errors, warnings, health, state }));
  return { ok: true, count: events.length, stats, errors, warnings };
}

/* SNS 공지 감시 — 네이버 검색 API 로 긁어 새 글만 텔레그램으로 보낸다.
   보내기가 실패하면 seen 을 갱신하지 않는다. 갱신해 버리면 그 공지는
   '이미 본 것'이 되어 영원히 다시 알리지 않는다. */
async function runSns(env) {
  const stored = await env.FEED.get(SNS_KEY, "json");
  const feed = await env.FEED.get(FEED_KEY, "json");

  const { hits, seen, queried, errors, warnings } = await collectSns({
    keys: { id: env.NAVER_CLIENT_ID, secret: env.NAVER_CLIENT_SECRET },
    events: feed?.events || [],
    seen: stored?.seen || [],
    log: (...m) => console.log(...m)
  });

  let sent = 0;
  if (hits.length) {
    if (env.TELEGRAM_TOKEN && env.TELEGRAM_CHAT_ID) {
      for (const msg of formatTelegram(hits)) {
        try { await sendTelegram(env.TELEGRAM_TOKEN, env.TELEGRAM_CHAT_ID, msg); sent++; }
        catch (e) { errors.push(String(e.message || e)); }
      }
    } else {
      warnings.push("텔레그램 설정이 없어 알림을 보내지 못했습니다 (TELEGRAM_TOKEN · TELEGRAM_CHAT_ID)");
    }
  }

  const delivered = !hits.length || sent > 0;
  const at = new Date().toISOString();
  await env.FEED.put(SNS_KEY, JSON.stringify({
    at, queried, found: hits.length, sent, errors, warnings,
    recent: [...hits, ...(stored?.recent || [])].slice(0, 50),
    seen: delivered ? seen : (stored?.seen || [])
  }));
  return { at, queried, found: hits.length, sent, delivered, errors, warnings };
}

export default {
  async scheduled(event, env, ctx) {
    /* SNS 크론만 명시로 가른다. 크론 문자열을 고치더라도 수집은 계속 돌게. */
    if (event.cron === SNS_CRON)
      ctx.waitUntil(runSns(env).then(r => console.log("SNS 감시 완료", JSON.stringify(r))));
    else
      ctx.waitUntil(run(env).then(r => console.log("수집 완료", JSON.stringify(r))));
  },

  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });

    if (url.pathname === "/feed.json") {
      const body = await env.FEED.get(FEED_KEY);
      return json(body || JSON.stringify({ updated: null, count: 0, events: [] }), 200, {
        "cache-control": "public, max-age=300"    // 5분 CDN 캐시
      });
    }

    if (url.pathname === "/status") {
      const body = await env.FEED.get(STATUS_KEY);
      return json(body || JSON.stringify({ at: null, ok: null }));
    }

    if (url.pathname === "/sns") {
      const body = await env.FEED.get(SNS_KEY, "json");
      /* seen 은 링크 해시 수천 개라 내보내지 않는다 — 개수만 알려준다 */
      const { seen, ...rest } = body || {};
      return json({ ...rest, seenCount: (seen || []).length });
    }

    if (url.pathname === "/sns/run") {
      if (!env.COLLECT_TOKEN || url.searchParams.get("token") !== env.COLLECT_TOKEN)
        return json({ error: "unauthorized" }, 401);
      return json(await runSns(env));
    }

    if (url.pathname === "/collect") {
      if (!env.COLLECT_TOKEN || url.searchParams.get("token") !== env.COLLECT_TOKEN)
        return json({ error: "unauthorized" }, 401);
      return json(await run(env));
    }

    return new Response("ON STAGE collector\n\n  GET /feed.json\n  GET /status\n  GET /sns\n", {
      headers: { "content-type": "text/plain; charset=utf-8", ...CORS }
    });
  }
};
