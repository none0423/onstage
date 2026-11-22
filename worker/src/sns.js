/* ============================================================
   SNS·커뮤니티 공지 감시 — 네이버 검색 API 하나로 돌아간다.

   왜 네이버뿐인가 (2026-10-29 확인)
     · X(트위터)는 2026년 2월부터 pay-per-use 로 바뀌었다. 포스트 읽기당
       약 $0.005 이고 신규 개발자용 무료 등급이 없다 — 이 프로젝트의
       '정기 비용 0원'과 정면으로 어긋나므로 쓰지 않는다.
     · 블루스카이 공개 API 는 app.bsky.actor.getProfile 은 200 을 주지만
       app.bsky.feed.searchPosts 는 403 이다(직접 호출로 확인). 포스트
       검색에는 인증이 필요하고, 한국 공연 이야기도 거의 없다.
     · 디시인사이드·더쿠 등은 RSS·API 가 없어 스크래핑뿐이라 제외한다.
     · 남는 것이 네이버 검색 API — 공식·무료(일 25,000회)이고 카페글과
       블로그를 함께 읽는다. 팬카페 공지가 실제로 올라오는 곳이다.
       비공개 카페는 검색에 잡히지 않는다는 한계가 있다.

   왜 '취소표 실시간 알림'이 아닌가
     누군가 "취소표 떴다"고 글을 쓰는 시점은 이미 그 사람이 잡은 뒤다.
     거기에 네이버 색인 지연까지 붙으니, 이 경로로 좌석을 잡는 일은
     구조적으로 불가능하다. 그래서 감시 대상을 '지연이 있어도 쓸모가
     남는 공지'로 한정했다 — 추가 회차, 추가 오픈, 잔여석, 시야제한석,
     공식 재판매, 선예매. 놓치면 손해가 크고 몇십 분 늦어도 유효한 것들.

   카페글 응답에는 날짜가 없다 (title·link·description·cafename·cafeurl 뿐).
   블로그만 postdate 를 준다. 그래서 '새 글' 판정을 시각으로 할 수 없고
   링크 해시를 KV 에 쌓아 중복을 거른다.

   이 파일은 Worker 와 tools/sns.mjs 가 함께 쓴다. collect.js 와 같은
   규칙으로 node:* 를 import 하지 않는다.
   ============================================================ */

/* 수집 크론과 구분되는 전용 크론. index.js 가 이 값으로 분기한다. */
export const SNS_CRON = "*/15 * * * *";

const NAVER = "https://openapi.naver.com/v1/search/";

/* 한 번 실행에 쓰는 예산. Workers 무료는 호출당 10ms CPU · 50 subrequest 이고
   수집 크론과는 별도 호출이라 예산을 나눠 쓰지 않는다. 그래도 네이버 일
   한도(25,000)를 생각해 넉넉히 잡지 않는다 — 고정 질의 + 공연별 질의로
   최대 20개면 15분마다 돌려도 하루 2,000회 아래다. */
const MAX_QUERIES = 20;
const DISPLAY = 20;           // 질의당 가져올 글 수 (최대 100)
const SEEN_CAP = 1500;        // KV 에 쌓아 두는 링크 해시 개수
const WATCH_ARTISTS = 8;      // 공연별 질의를 붙일 아티스트 수
const WATCH_WINDOW_DAYS = 60; // 앞으로 며칠 안의 공연을 감시할지

/* 고정 질의 — 어느 공연인지 모르는 상태에서 공지를 긁는 쪽.
   네이버 검색은 공백을 엄격한 AND 로 묶지 않으므로 이 질의만으로는
   관계없는 글이 섞인다. 아래 NOTICE 로 한 번 더 거른다. */
const BASE_QUERIES = [
  { q: "콘서트 추가 회차", type: "cafearticle" },
  { q: "콘서트 추가 오픈", type: "cafearticle" },
  { q: "콘서트 잔여석", type: "cafearticle" },
  { q: "내한공연 티켓 오픈", type: "cafearticle" },
  { q: "공연 시야제한석 오픈", type: "cafearticle" },
  { q: "콘서트 공식 재판매", type: "cafearticle" },
  { q: "콘서트 추가 회차", type: "blog" },
  { q: "내한공연 추가 오픈", type: "blog" }
];

/* 지연이 있어도 값이 남는 공지만 통과시킨다.
   '취소표 떴다' 같은 즉시성 글은 일부러 넣지 않았다 — 위 주석 참고. */
const NOTICE = /(추가\s*회차|회차\s*추가|추가\s*공연|추가\s*오픈|추가\s*티켓|추가\s*예매|[2２]차\s*오픈|이차\s*오픈|좌석\s*추가|잔여석|잔여\s*티켓|시야\s*제한|제한\s*시야|취소\s*기간|취소\s*수수료|공식\s*재판매|리세일|resale|선예매|티켓\s*오픈)/i;

/* 암표·대리티켓팅은 걸러 낸다. 불법이고(공연법) 이 도구가 그런 글을
   띄워 주는 통로가 되면 안 된다. 광고·구인 글도 같이 막는다. */
const NOISE = /(대리\s*티켓팅|티켓팅\s*대행|대리\s*예매|매크로|암표|플미|프리미엄\s*가격|웃돈|되팔이|구인|알바|후불|계좌\s*입금|디엠\s*주세요|dm\s*주세요|제휴|협찬|광고\s*문의)/i;

/* ── 작은 도구들 ───────────────────────────── */

/** 네이버는 검색어와 일치한 부분을 <b> 로 감싸 준다. 태그와 엔티티를 벗긴다. */
export function stripTags(s) {
  return String(s || "")
    .replace(/<[^>]*>/g, "")
    .replace(/&quot;/g, '"').replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'").replace(/&nbsp;/g, " ")
    .trim();
}

/** 링크를 짧은 해시로 줄인다 — 본 글 목록을 KV 에 담기 위해. FNV-1a 32bit. */
export function hashLink(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = (h + (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24)) >>> 0;
  }
  return h.toString(36);
}

const esc = s => String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** 공지로 볼 글인지 — 제목과 본문 요약을 합쳐 판정한다. */
export function isNotice(text) {
  return NOTICE.test(text) && !NOISE.test(text);
}

/* ── 감시할 공연 고르기 ─────────────────────── */

/** 앞으로 WATCH_WINDOW_DAYS 안에 열리는 공연의 아티스트. 공지가 실제로
    도는 시기가 이 구간이다. 중복을 지우고 가까운 순서로 자른다. */
export function watchArtists(events, now, max = WATCH_ARTISTS) {
  const t0 = now.getTime();
  const t1 = t0 + WATCH_WINDOW_DAYS * 86400000;

  const rows = (events || [])
    .filter(e => e.artist && Array.isArray(e.dates) && e.dates.length)
    .map(e => ({
      artist: String(e.artist).trim(),
      start: new Date(e.dates[0] + "T00:00:00").getTime(),
      end: new Date(e.dates[e.dates.length - 1] + "T23:59:59").getTime()
    }))
    .filter(r => r.end >= t0 && r.start <= t1)      // 아직 안 끝났고, 창 안에서 시작하는 공연
    .sort((a, b) => a.start - b.start);

  const seen = new Set();
  const out = [];
  for (const r of rows) {
    /* 한 글자 이름은 질의로 쓰면 소음만 늘어난다 */
    if (r.artist.length < 2) continue;
    const k = r.artist.toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(r.artist);
    if (out.length >= max) break;
  }
  return out;
}

/* ── 네이버 호출 ───────────────────────────── */

async function naverSearch(keys, type, q, display = DISPLAY) {
  const url = `${NAVER}${type}.json?query=${encodeURIComponent(q)}&display=${display}&sort=date`;
  const res = await fetch(url, {
    headers: {
      "X-Naver-Client-Id": keys.id,
      "X-Naver-Client-Secret": keys.secret
    }
  });
  if (!res.ok) {
    /* 정렬을 sort=date 로 보냈을 때 거부하는 경우가 있어 한 번만 되돌려 본다 */
    if (res.status === 400) {
      const retry = await fetch(`${NAVER}${type}.json?query=${encodeURIComponent(q)}&display=${display}`, {
        headers: { "X-Naver-Client-Id": keys.id, "X-Naver-Client-Secret": keys.secret }
      });
      if (retry.ok) return retry.json();
      throw new Error(`네이버 ${type} ${retry.status} (${q})`);
    }
    throw new Error(`네이버 ${type} ${res.status} (${q})`);
  }
  return res.json();
}

/* ── 본체 ──────────────────────────────────── */

/**
 * 공지성 키워드를 긁어 '아직 보지 못한' 글만 돌려준다.
 * @param {{id:string,secret:string}} keys  네이버 애플리케이션 키
 * @param {Array}  events  수집된 공연 목록 (공연별 질의를 만드는 데 쓴다)
 * @param {string[]} seen  이미 알린 링크 해시
 * @param {Date}   now
 */
export async function collectSns({ keys, events = [], seen = [], now = new Date(), log = () => {} }) {
  const errors = [];
  const warnings = [];
  if (!keys?.id || !keys?.secret) {
    warnings.push("네이버 키가 없어 SNS 감시를 건너뜁니다 (NAVER_CLIENT_ID · NAVER_CLIENT_SECRET)");
    return { hits: [], seen, queried: 0, errors, warnings };
  }

  const artists = watchArtists(events, now);
  const queries = [
    ...BASE_QUERIES,
    /* 공연별 질의 — 고정 질의보다 정확도가 훨씬 높다 */
    ...artists.map(a => ({ q: `${a} 추가 회차`, type: "cafearticle", artist: a })),
    ...artists.slice(0, 4).map(a => ({ q: `${a} 잔여석`, type: "cafearticle", artist: a }))
  ].slice(0, MAX_QUERIES);

  log(`SNS 감시 · 질의 ${queries.length}개 (공연별 ${artists.length}명)`);

  const seenSet = new Set(seen);
  const hits = [];
  const fresh = [];
  let queried = 0;

  for (const spec of queries) {
    let data;
    try {
      data = await naverSearch(keys, spec.type, spec.q);
      queried++;
    } catch (e) {
      errors.push(String(e.message || e));
      continue;
    }
    for (const item of data?.items || []) {
      const link = String(item.link || "");
      if (!link) continue;
      const h = hashLink(link);
      if (seenSet.has(h)) continue;

      const title = stripTags(item.title);
      const desc = stripTags(item.description);
      if (!isNotice(`${title} ${desc}`)) continue;

      seenSet.add(h);
      fresh.push(h);
      hits.push({
        title, link,
        where: stripTags(item.cafename) || stripTags(item.bloggername) || (spec.type === "blog" ? "블로그" : "카페"),
        date: String(item.postdate || "").replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3") || null,
        artist: spec.artist || null,
        query: spec.q,
        excerpt: desc.slice(0, 120)
      });
    }
  }

  if (!queried && queries.length) warnings.push("네이버 질의가 모두 실패했습니다");

  /* 최근 것부터 SEEN_CAP 개만 남긴다 — KV 값이 무한정 자라지 않게 */
  const nextSeen = [...fresh, ...seen].slice(0, SEEN_CAP);
  log(`SNS 감시 완료 · 새 공지 ${hits.length}건 / 질의 성공 ${queried}건`);
  return { hits, seen: nextSeen, queried, errors, warnings };
}

/* ── 텔레그램 ──────────────────────────────── */

const TG_LIMIT = 3600;        // 실제 한도는 4096 — 여유를 둔다

/** 새 공지들을 한 통(필요하면 여러 통)으로 묶는다. 건당 한 통씩 보내면
    알림이 쏟아져 오히려 안 보게 된다. */
export function formatTelegram(hits) {
  const msgs = [];
  let buf = `🎟 <b>공연 공지 ${hits.length}건</b>`;
  for (const h of hits) {
    const line = `\n\n<b>${esc(h.title)}</b>\n${esc(h.where)}${h.date ? ` · ${esc(h.date)}` : ""}${h.artist ? ` · ${esc(h.artist)}` : ""}\n${esc(h.excerpt)}\n${esc(h.link)}`;
    if (buf.length + line.length > TG_LIMIT) { msgs.push(buf); buf = "🎟 <b>(이어서)</b>"; }
    buf += line;
  }
  if (buf) msgs.push(buf);
  return msgs;
}

export async function sendTelegram(token, chatId, text) {
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId, text, parse_mode: "HTML",
      link_preview_options: { is_disabled: true }
    })
  });
  if (!res.ok) throw new Error(`텔레그램 ${res.status} ${(await res.text()).slice(0, 200)}`);
  return res.json();
}
