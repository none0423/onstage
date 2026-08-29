/* ON STAGE 수집 Worker
   - 매시 정각 크론으로 수집해 KV 에 저장
   - GET /feed.json  사이트가 읽어가는 공개 엔드포인트 (CORS 허용)
   - GET /status     마지막 실행 결과
   - GET /collect?token=…  수동 실행 (COLLECT_TOKEN 시크릿이 있을 때만)     */

import { collectAll } from "./collect.js";

const FEED_KEY = "feed";
const STATUS_KEY = "status";

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

  const { events, stats, errors } = await collectAll({
    keys: { kopis: env.KOPIS_KEY, ticketmaster: env.TICKETMASTER_KEY },
    previous,
    log: (...m) => console.log(...m)
  });

  const at = new Date().toISOString();

  /* 전부 실패했으면 이전 데이터를 유지한다 — 빈 화면을 배포하지 않기 위해 */
  if (!events.length && errors.length) {
    await env.FEED.put(STATUS_KEY, JSON.stringify({ at, ok: false, kept: previous.length, stats, errors }));
    return { ok: false, kept: previous.length, errors };
  }

  await env.FEED.put(FEED_KEY, JSON.stringify({ updated: at, count: events.length, events }));
  await env.FEED.put(STATUS_KEY, JSON.stringify({ at, ok: true, count: events.length, stats, errors }));
  return { ok: true, count: events.length, stats, errors };
}

export default {
  async scheduled(event, env, ctx) {
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

    if (url.pathname === "/collect") {
      if (!env.COLLECT_TOKEN || url.searchParams.get("token") !== env.COLLECT_TOKEN)
        return json({ error: "unauthorized" }, 401);
      return json(await run(env));
    }

    return new Response("ON STAGE collector\n\n  GET /feed.json\n  GET /status\n", {
      headers: { "content-type": "text/plain; charset=utf-8", ...CORS }
    });
  }
};
