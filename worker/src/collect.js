/* ============================================================
   ON STAGE 수집 로직 — 플랫폼 독립 (fetch 만 사용)
   Cloudflare Worker(src/index.js)와 Node CLI(tools/collect.mjs)가 함께 씁니다.

   Workers 무료 플랜 제약에 맞춘 설계
     · 호출당 CPU 10ms   → 정규식 대신 indexOf/split 위주, 정규식은 미리 컴파일
     · 서브리퀘스트 50개 → 아래 MAX_SUBREQUESTS 로 강제, 초과분은 다음 실행으로 이월
   ============================================================ */

const UA = "onstage-collector/1.0 (personal concert dashboard; 10 users)";

/* 취소·연기 공연은 제목에 표시가 붙는다. 공연 제목에만 적용한다
   (팁이나 안내문에는 "무료 취소" 같은 무관한 표현이 들어갈 수 있다). */
/* 제목에만 적용한다. 맨 '연기'는 넣지 않는다 — 배우의 연기와 구분되지 않는다. */
const CANCELLED = /공연\s?취소|취소\s?공연|\[\s?취소\s?\]|\(\s?취소\s?\)|공연\s?연기|\[\s?연기\s?\]|순연|중지|中止|延期|公演中止|払戻|CANCELL?ED|POSTPONED/i;
/* Workers 무료 플랜은 호출당 50개. 리다이렉트도 1개로 세므로 여유를 두고 40 에서 멈춘다. */
const MAX_SUBREQUESTS = 40;

/* 소스 우선순위 — 앞일수록 먼저 실행되어 요청 예산을 먼저 쓰고,
   같은 공연이 여러 소스에 있으면 앞쪽 소스의 데이터가 남는다. */
const SOURCE_ORDER = ["kopis", "jpvenues", "ticketmaster", "livenation"];
const SOURCE_PREFIX = { kopis: "kopis-", jpvenues: "jp-", ticketmaster: "tm-", livenation: "ln-" };
/* KOPIS 가 먼저 돌지만 뒤 소스가 굶지 않도록 요청을 남겨 둔다.
   일본 공연장 8곳 = 18요청(도쿄돔 1 · 교세라 4 · 오사카성홀 1 · K아레나 1 · 요코하마 4 · 사이타마 4 · 반텔린 1 · 후쿠오카 2)
   + Ticketmaster 3 + Live Nation Korea 3(홈 1 + 상세 2) + 여유 2. 공연장을 늘리면 이 값도 올린다. */
const RESERVED_FOR_LATER_SOURCES = 26;
/* Live Nation Korea 상세 페이지는 실행당 이 개수만 새로 읽는다. 15개 안팎이라 5시간이면 한 바퀴 돈다. */
const LN_DETAILS_PER_RUN = 2;                 // 상세 한 장 파싱이 ≈0.9ms(CPU) — 10ms 예산을 생각해 둘로 제한
const LN_REFRESH_MS = 24 * 3600 * 1000;

/* ── 공통 유틸 ───────────────────────────────── */
const d2 = n => String(n).padStart(2, "0");
const isoOf = d => `${d.getFullYear()}-${d2(d.getMonth() + 1)}-${d2(d.getDate())}`;
const todayISO = () => new Date().toISOString().slice(0, 10);
function shiftISO(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

const TAGS = /<[^>]+>/g;
const SPACES = /\s+/g;
const NUM_ENT = /&#(\d+);/g;
const HEX_ENT = /&#x([0-9a-f]+);/gi;
const NAMED = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", ldquo: "“", rdquo: "”", lsquo: "‘", rsquo: "’", hellip: "…", mdash: "—", ndash: "–" };
const NAMED_RE = new RegExp(`&(${Object.keys(NAMED).join("|")});`, "g");

function decode(s) {
  return String(s || "")
    .replace(TAGS, "")
    .replace(NAMED_RE, (_, n) => NAMED[n])
    .replace(NUM_ENT, (_, n) => String.fromCodePoint(+n))
    .replace(HEX_ENT, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(SPACES, " ")
    .trim();
}

/** <db> 같은 얕은 블록을 한 번의 스캔으로 객체화 (KOPIS 전용) */
const FLAT_FIELD = /<(\w+)>([\s\S]*?)<\/\1>/g;
const CDATA_OPEN = /^\s*<!\[CDATA\[/;
const CDATA_CLOSE = /\]\]>\s*$/;
function flatParse(block) {
  const o = {};
  FLAT_FIELD.lastIndex = 0;
  let m;
  while ((m = FLAT_FIELD.exec(block))) {
    o[m[1]] = decode(m[2].replace(CDATA_OPEN, "").replace(CDATA_CLOSE, ""));
  }
  return o;
}
/** 블록에서 <name>…</name> 값 하나만 안전하게 꺼낸다.
    값 안에 HTML 이나 다른 태그가 들어 있어도(KOPIS 의 sty 등) 어긋나지 않는다. */
function pick(block, name) {
  const open = `<${name}>`;
  const a = block.indexOf(open);
  if (a < 0) return "";
  const b = block.indexOf(`</${name}>`, a);
  if (b < 0) return "";
  return decode(block.slice(a + open.length, b).replace(CDATA_OPEN, "").replace(CDATA_CLOSE, ""));
}

/** <name>…</name> 블록들을 문자열로 잘라내기 (정규식 없이) */
function slices(xml, name) {
  const open = `<${name}>`, close = `</${name}>`;
  const out = [];
  let i = 0;
  for (;;) {
    const s = xml.indexOf(open, i);
    if (s < 0) break;
    const e = xml.indexOf(close, s);
    if (e < 0) break;
    out.push(xml.slice(s + open.length, e));
    i = e + close.length;
  }
  return out;
}

/* KOPIS 포스터는 http 로 오고 www 도메인은 301 이다. 혼합 콘텐츠 차단과
   리다이렉트를 피하려고 정규 https 주소로 바꾼다. */
function normalizePoster(url) {
  if (!url) return null;
  const u = String(url).trim().replace(/^http:\/\//, "https://").replace("https://www.kopis.or.kr", "https://kopis.or.kr");
  return /^https:\/\//.test(u) ? u : null;
}

/* ── 수집 본체 ───────────────────────────────── */
/* health: 이전 실행이 남긴 소스별 건강 상태(연속 0건·연속 실패 횟수). 파서가 조용히 죽는 걸 잡는다.
   today:  테스트가 고정 날짜를 넣기 위한 훅. 실전에서는 비워 둔다. */
/* state: 소스가 실행 사이에 기억해야 할 작은 것들(예: Live Nation 상세 페이지를 마지막으로 읽은 시각).
   health 처럼 status 에 실려 다음 실행으로 넘어온다. */
export async function collectAll({ keys = {}, previous = [], only = null, log = () => {}, health: prevHealth = {}, state: prevState = {}, today: todayOverride = null } = {}) {
  const state = { ...prevState };
  const prevById = new Map(previous.map(c => [c.id, c]));
  const stats = {};
  const errors = [];
  let used = 0;

  const safeUrl = u => String(u).replace(/(service|apikey)=[^&]+/, "$1=***");

  /* retry: 일시적 실패(4xx/5xx·네트워크)에 한해 한 번 더 시도한다.
     KOPIS 상세는 같은 요청이 Worker 에서 간헐적으로 400 을 반환하는 일이 있다. */
  async function get(url, { json: asJson = false, retry = 0 } = {}) {
    for (let attempt = 0; ; attempt++) {
      if (used >= MAX_SUBREQUESTS) throw new Error("서브리퀘스트 한도 도달 — 다음 실행으로 이월");
      used++;
      try {
        const res = await fetch(url, {
          headers: { "User-Agent": UA, Accept: asJson ? "application/json" : "*/*" },
          signal: AbortSignal.timeout(20000)
        });
        if (res.ok) return asJson ? res.json() : res.text();
        const body = (await res.text().catch(() => "")).replace(/\s+/g, " ").slice(0, 160);
        throw new Error(`HTTP ${res.status} — ${safeUrl(url)}${body ? ` · ${body}` : ""}`);
      } catch (e) {
        if (attempt >= retry) throw e;
        await new Promise(r => setTimeout(r, 400));
      }
    }
  }

  /* ── 1. KOPIS 오픈API (국내·내한) ───────────── */
  /* www 는 301 로 apex 로 넘긴다. Workers 는 리다이렉트 한 번도 서브리퀘스트로 세므로
     호출마다 2개씩 소모돼 한도를 넘긴다. 반드시 apex 도메인을 직접 쓴다. */
  const KOPIS = "https://kopis.or.kr/openApi/restful/pblprfr";
  /* 수집 범위 손잡이 — KOPIS 대중음악은 1년에 수백 건이라 공연장으로 거른다.
     넓히려면 키워드를 추가하고, 대형 공연만 보려면 앞쪽 몇 개만 남기면 된다. */
  const BIG_VENUE = new RegExp([
    "돔", "아레나", "체조경기장", "경기장", "스타디움", "월드컵", "올림픽", "핸드볼",   // 대형
    "킨텍스", "엑스코", "벡스코", "세텍", "SETEC",                                     // 전시장
    "블루스퀘어", "장충", "인스파이어", "KBS", "예스24", "무신사", "명화", "악스", "AX"  // 중형·라이브홀
  ].join("|"));
  /* 해외 아티스트의 내한 공연 판별.
     'WORLD TOUR' 는 국내 아티스트(PLAVE·ARTMS 등)도 흔히 쓰므로 넣지 않는다. */
  const IS_VISIT = /내한|IN SEOUL|IN KOREA/i;
  /* KOPIS 해외 등록분은 공연장 이름이 지저분하게 온다.
     "K-Arena Yokohama(K-아레나 요코하마) [일본]" → "K-아레나 요코하마"
     "일본 요코하마 피아 아레나 MM"                → "요코하마 피아 아레나 MM" */
  const CLEAN_TAIL = /\s*\[[^\]]*\]\s*$/;
  const KO_PAREN = /^(.+?)\s*\(([^)]*[가-힣][^)]*)\)\s*$/;
  function cleanVenue(v, country) {
    let out = String(v || "").replace(CLEAN_TAIL, "").trim();
    const m = out.match(KO_PAREN);
    if (m) out = m[2].trim();
    if (country) out = out.replace(new RegExp(`^${country}\\s+`), "").trim();
    return out;
  }
  /* 도시가 국가명으로만 올 때 공연장 이름에서 도시를 찾아낸다 */
  const JP_CITIES = ["도쿄", "오사카", "요코하마", "나고야", "후쿠오카", "삿포로", "고베", "사이타마", "가나가와", "지바", "교토"];
  function cityFromVenue(venue, fallback) {
    return JP_CITIES.find(c => venue.includes(c)) || fallback;
  }

  /* KOPIS 는 국내 아티스트의 해외 공연도 등록한다 (area === "해외") */
  const OVERSEAS = { 일본: ["japan", "일본"], 대만: ["asia", "대만"], 홍콩: ["asia", "홍콩"], 태국: ["asia", "태국"],
                     싱가포르: ["asia", "싱가포르"], 마카오: ["asia", "마카오"], 필리핀: ["asia", "필리핀"],
                     말레이시아: ["asia", "말레이시아"], 인도네시아: ["asia", "인도네시아"], 베트남: ["asia", "베트남"] };
  /* 공연 제목을 아티스트 / 투어명으로 나눈다: "쏜애플 콘서트: 나의 세기 [부산]" → 쏜애플 / 콘서트: 나의 세기 */
  const TRAILING_REGION = /\s*\[[^\]]*\]\s*$/;
  /* FESTIVAL 은 넣지 않는다 — "NOL FESTIVAL" 처럼 행사 이름 자체에 들어가는 경우가 많아
     여기서 자르면 아티스트가 "NOL" 로 남는다. 페스티벌은 제목 전체가 행사명이다. */
  const SHOW_KIND = /\s(?=(?:단독\s?공연|단독\s?콘서트|전국투어|클럽\s?투어|월드\s?투어|아시아\s?투어|팬\s?콘서트|팬미팅|내한공연|콘서트|리사이틀|공연|FAN\s?CONCERT|FANCON|CONCERT|WORLD\s?TOUR|ASIA\s?TOUR|TOUR|LIVE|SHOW))/i;
  const TRAILING_ORDINAL = /\s+\d+\s*(?:st|nd|rd|th)?$/i;
  /* 아티스트명 뒤에 붙는 수식어 ("자라 라슨 첫 단독" → "자라 라슨"). 떼어낸 말은 투어명 앞으로 옮긴다. */
  const TRAILING_MODIFIER = /\s+(첫\s*번째|첫|단독|솔로|내한|앵콜|앙코르|ENCORE|SOLO|ASIA|WORLD|ARENA|DOME|STADIUM|JAPAN|GLOBAL)$/i;

  const IS_FESTIVAL = /FESTIVAL|FESTA|페스티벌|페스타/i;

  function splitKopisTitle(raw, city) {
    const t = raw.replace(TRAILING_REGION, "").trim();
    /* 페스티벌은 제목 전체가 행사 이름이다. 아무 데서나 자르면
       "NOL FESTIVAL: DAY 1, SUPER" / "LIVE STAGE" 처럼 엉뚱하게 쪼개진다. */
    if (IS_FESTIVAL.test(t)) return { artist: t, tour: `${city} 공연` };
    let artist = t, tour = "";
    const i = t.search(SHOW_KIND);
    if (i > 0) { artist = t.slice(0, i).trim(); tour = t.slice(i).trim(); }
    else {
      const c = t.indexOf(":");
      if (c > 0) { artist = t.slice(0, c).trim(); tour = t.slice(c + 1).trim(); }
    }
    const moved = [];
    for (const re of [TRAILING_ORDINAL, TRAILING_MODIFIER, TRAILING_MODIFIER, TRAILING_MODIFIER]) {
      const m = artist.match(re);
      if (!m) continue;
      moved.unshift(m[0].trim());
      artist = artist.slice(0, m.index).trim();
    }
    if (moved.length) tour = `${moved.join(" ")} ${tour}`.trim();
    /* "힙합 콘서트, …" 처럼 앞부분이 아티스트가 아닌 경우가 있다.
       2자 이하로 잘렸으면 잘못 자른 것으로 보고 제목을 그대로 쓴다. */
    if (artist.replace(/\s/g, "").length <= 2) return { artist: t, tour: `${city} 공연` };
    return { artist: artist || t, tour: tour || `${city} 공연` };
  }
  /* KOPIS 상세의 relates 에서 고를 예매처 우선순위 (앞일수록 우선) */
  const VENDOR_RANK = ["놀유니버스", "인터파크", "NOL", "티켓링크", "예스24", "YES24", "멜론", "네이버"];
  const rankOf = n => { const i = VENDOR_RANK.findIndex(k => n.includes(k)); return i < 0 ? 99 : i; };
  /* area 는 '서울특별시' 같은 시·도 단위로 온다 */
  const SHORT_AREA = /특별자치도|특별자치시|특별시|광역시|(?<=[가-힣])도$/;

  async function kopis() {
    if (!keys.kopis) { log("⚠️  KOPIS_KEY 없음 → 국내·내한 건너뜀"); return []; }
    const stdate = todayISO().replace(/-/g, "");
    const eddate = shiftISO(365).replace(/-/g, "");
    const rows = [];

    for (let page = 1; page <= 6; page++) {
      /* 목록도 간헐적으로 522 를 낸다(2026-09-14 실측). 한 페이지가 죽으면 그 시간의
         국내 수집이 통째로 이월되므로 한 번은 다시 시도한다. */
      const xml = await get(`${KOPIS}?service=${keys.kopis}&stdate=${stdate}&eddate=${eddate}&cpage=${page}&rows=100&shcate=CCCD`, { retry: 1 });
      const blocks = slices(xml, "db");
      if (!blocks.length) break;
      for (const b of blocks) {
        const r = flatParse(b);
        if (!r.mt20id || !r.prfnm || !r.prfpdfrom || !BIG_VENUE.test(r.fcltynm || "")) continue;
        if (CANCELLED.test(r.prfnm)) continue;                                   // 취소·연기 공연 제외
        rows.push(r);
      }
      if (blocks.length < 100) break;
    }

    const out = [];
    let fetched = 0;
    for (const r of rows) {
      const id = `kopis-${r.mt20id}`;
      const cached = prevById.get(id);
      let price = cached?.price, vendor = cached?.vendor, doorsNote = cached?.doorsNote;

      let others = cached?.otherVendors;
      /* 상세 조회를 실제로 끝냈는지 표시. 서브리퀘스트 한도로 못 받은 항목은
         다음 실행에서 다시 시도해야 하므로 '캐시에 있음'만으로 건너뛰면 안 된다. */
      let detailed = cached?.kopisDetail === true;

      /* 재시도가 요청 1개를 더 쓸 수 있으므로 여유를 하나 더 본다 */
      if (!detailed && used < MAX_SUBREQUESTS - RESERVED_FOR_LATER_SOURCES - 1) {
        try {
          const xml = await get(`${KOPIS}/${r.mt20id}?service=${keys.kopis}`, { retry: 1 });
          /* 응답 최외곽이 <dbs> 라서 통째로 파싱하면 안 된다. <db> 를 먼저 자른다. */
          const db = slices(xml, "db")[0] || "";
          price = pick(db, "pcseguidance") || "예매처 공지 참고";
          doorsNote = pick(db, "dtguidance") || "";
          /* relates 가 실제 예매 페이지 URL 을 준다 — 카드 클릭 시 여기로 간다 */
          const links = slices(slices(db, "relates")[0] || "", "relate")
            .map(x => ({ name: pick(x, "relatenm"), url: pick(x, "relateurl") }))
            .filter(v => v.name && /^https?:\/\//.test(v.url))
            .sort((a, b) => rankOf(a.name) - rankOf(b.name));
          if (links.length) { vendor = links[0]; others = links.slice(1, 4); }
          detailed = true;
          fetched++;
        } catch (e) { log(`⚠️  KOPIS 상세 ${r.mt20id}: ${e.message}`); }
      }

      /* KOPIS 는 공연 '기간'만 준다. 그 사이 실제 회차가 며칠인지는 알 수 없으므로
         날마다 펼치지 않고 시작·종료만 담고 period 로 표시한다. */
      const from = r.prfpdfrom.replace(/\./g, "-");
      const to = (r.prfpdto || r.prfpdfrom).replace(/\./g, "-");
      const dates = from === to ? [from] : [from, to];

      /* 해외 등록분은 제목의 [국가 …] 로 나라를 판별한다. 못 알아보면 버린다(오분류 방지). */
      let category, country, city, overseas = false;
      if (r.area === "해외") {
        const hit = Object.keys(OVERSEAS).find(k => r.prfnm.includes(k) || (r.fcltynm || "").includes(k));
        if (!hit) continue;
        [category, country] = OVERSEAS[hit];
        const sub = r.prfnm.match(new RegExp(`\\[${hit}\\s+([^\\]]+)\\]`));
        city = (sub ? sub[1] : country).trim();
        overseas = true;
      } else {
        category = IS_VISIT.test(r.prfnm) ? "visit" : "domestic";
        country = "대한민국";
        city = (r.area || "").replace(SHORT_AREA, "") || r.area || "대한민국";
      }
      const { artist, tour } = splitKopisTitle(r.prfnm, city);

      out.push({
        id, auto: true, sourceName: "KOPIS", kopisDetail: detailed,
        /* 해외 등록분은 그 공연장 공식 페이지보다 정보가 거칠다 — 중복 시 뒤로 밀린다 */
        ...(overseas ? { kopisOverseas: true } : {}),
        period: dates.length > 1,          // 기간 공연 — 회차 수 미상
        artist, tour,
        category,
        country,
        city: overseas ? cityFromVenue(cleanVenue(r.fcltynm, country), city) : city,
        venue: overseas ? cleanVenue(r.fcltynm, country) : r.fcltynm,
        mapQuery: overseas ? cleanVenue(r.fcltynm, country) : r.fcltynm,
        dates,
        doorsNote: doorsNote || "예매처 공지 참고",
        ticketOpen: null,
        /* KOPIS 는 판매가 시작된 공연을 등록하고 오픈 시각은 주지 않는다.
           공연완료가 아니면 판매중으로 본다. (예전에는 vendor 유무로 판단했는데,
           상세를 못 받은 항목도 대체 vendor 가 채워져 사실상 늘 판매중이 되었다.) */
        ticketStatus: r.prfstate === "공연완료" ? "종료" : "판매중",
        price: price || "예매처 공지 참고",
        vendor: vendor?.url ? vendor
              : { name: "NOL 티켓", url: `https://tickets.interpark.com/search?keyword=${encodeURIComponent(r.prfnm)}` },
        otherVendors: others || [],
        goods: { note: "", url: null },
        tips: "",
        images: [normalizePoster(r.poster)].filter(Boolean),
        source: `https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=${r.mt20id}`,
        tags: []
      });
    }
    stats.kopis = { count: out.length, newDetails: fetched };
    return out;
  }

  /* ── 2. Ticketmaster Discovery API (아시아) ── */
  /* Discovery API 로 국가별 건수를 실제 조회해 확인한 목록이다.
     TW·HK·TH·ID·VN·JP·KR 은 0건 — Ticketmaster 가 운영하지 않는다.
     MY 도 현재 0건이지만 요청 1개라 남겨 둔다. */
  const TM_COUNTRIES = ["SG", "PH", "MY"];
  const TM_KO = {
    SG: ["싱가포르", "싱가포르"],
    PH: ["필리핀", "마닐라"],
    MY: ["말레이시아", "쿠알라룸푸르"]
  };

  /* 가로형(16_9 → 3_2) 중 폭 640 이상을 우선해 최대 2장 */
  function pickTmImages(list) {
    if (!Array.isArray(list)) return [];
    const score = i => (i.ratio === "16_9" ? 0 : i.ratio === "3_2" ? 1 : 2) * 100
                     + Math.abs((i.width || 0) - 1024) / 100;
    return [...new Set(list
      .filter(i => i.url && /^https:\/\//.test(i.url) && (i.width || 0) >= 640)
      .sort((a, b) => score(a) - score(b))
      .map(i => i.url))].slice(0, 2);
  }

  async function ticketmaster() {
    if (!keys.ticketmaster) { log("⚠️  TICKETMASTER_KEY 없음 → 아시아 건너뜀"); return []; }
    const out = [];
    for (const cc of TM_COUNTRIES) {
      for (let page = 0; page < 2; page++) {
        const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${keys.ticketmaster}`
          + `&countryCode=${cc}&classificationName=Music&size=100&page=${page}&sort=date,asc`
          + `&startDateTime=${todayISO()}T00:00:00Z&endDateTime=${shiftISO(365)}T00:00:00Z`;
        let data;
        try { data = await get(url, { json: true }); }
        catch (e) { errors.push(`ticketmaster/${cc}: ${e.message}`); break; }

        const events = data?._embedded?.events || [];
        for (const ev of events) {
          const v = ev._embedded?.venues?.[0] || {};
          const start = ev.dates?.start?.localDate;
          if (!start) continue;
          const [koCountry, koCity] = TM_KO[cc] || [cc, cc];
          const pr = ev.priceRanges?.[0];
          const st = ev.dates?.status?.code;
          /* cancelled 는 취소, postponed 는 새 날짜가 정해지지 않아 기존 날짜가 무의미하다.
             rescheduled 는 TM 이 새 날짜로 갱신해 주므로 그대로 둔다. */
          if (st === "cancelled" || st === "postponed") continue;
          if (CANCELLED.test(ev.name || "")) continue;
          /* TM 은 '아직 판매 시작 전' 도 offsale 로 준다. 오픈 시각이 미래면 예정으로 봐야
             '예매 마감' 으로 잘못 표시되지 않는다. */
          const openAt = ev.sales?.public?.startDateTime || null;
          const notYet = openAt && new Date(openAt) > new Date();
          out.push({
            id: `tm-${ev.id}`, auto: true, sourceName: "Ticketmaster",
            artist: ev._embedded?.attractions?.[0]?.name || ev.name,
            tour: ev.name,
            category: "asia",
            country: koCountry, city: v.city?.name || koCity, venue: v.name || "미정",
            mapQuery: [v.name, v.city?.name].filter(Boolean).join(" "),
            dates: [start],
            doorsNote: ev.dates?.start?.localTime ? `${ev.dates.start.localTime.slice(0, 5)} 시작` : "예매처 공지 참고",
            ticketOpen: openAt,                                    // ← 티켓 오픈 시각 (UTC)
            ticketStatus: notYet ? "예정"
                        : st === "onsale" ? "판매중"
                        : st === "offsale" ? "종료" : "예정",
            price: pr ? `${pr.currency} ${pr.min} ~ ${pr.max}` : "예매처 공지 참고",
            images: pickTmImages(ev.images),
            vendor: { name: `Ticketmaster ${cc}`, url: ev.url },
            otherVendors: [],
            goods: { note: "", url: null },
            tips: "",
            source: ev.url,
            tags: [ev.classifications?.[0]?.genre?.name].filter(g => g && g !== "Undefined")
          });
        }
        if (events.length < 100) break;
      }
    }
    stats.ticketmaster = { count: out.length };
    return out;
  }

  /* ── 3. 일본 주요 공연장 공식 일정 ──────────
     공연장마다 HTML 이 달라 파서를 하나씩 둔다.
     새 공연장을 추가하려면 JP_VENUES 에 항목 하나 + parse 함수 하나만 더하면 된다.
     한 곳이 실패해도 나머지 공연장은 그대로 수집된다. */

  const STAY_AREAS = {
    tokyodome: [
      { name: "스이도바시 (水道橋)", note: "도보 3분 · JR 주오소부선" },
      { name: "이다바시·코라쿠엔 (飯田橋)", note: "도보 10분 · 지하철 4개 노선" },
      { name: "아키하바라 (秋葉原)", note: "JR 3정거장 · 숙소 선택지 많음" }
    ],
    kyocera: [
      { name: "돔마에 (ドーム前)", note: "도보 3분 · 한신 난바선" },
      { name: "난바 (なんば)", note: "지하철 10분 · 심야 식당 많음" },
      { name: "신사이바시 (心斎橋)", note: "지하철 12분 · 쇼핑 중심" }
    ],
    johall: [
      { name: "오사카비즈니스파크 (大阪ビジネスパーク)", note: "도보 5분 · 지하철 나가호리선" },
      { name: "교바시 (京橋)", note: "도보 15분 · JR·게이한 환승" },
      { name: "우메다 (梅田)", note: "지하철 15분 · 오사카 중심" }
    ],
    karena: [
      { name: "미나토미라이 (みなとみらい)", note: "도보 8분 · 야경 명소" },
      { name: "요코하마역 (横浜駅)", note: "도보 15분 · 공항버스 직결" },
      { name: "사쿠라기초 (桜木町)", note: "도보 10분 · JR 네기시선" }
    ],
    yokoarena: [
      { name: "신요코하마 (新横浜)", note: "도보 5분 · 신칸센 정차역" },
      { name: "요코하마역 (横浜駅)", note: "JR 요코하마선 2역 · 공항버스 직결" },
      { name: "기쿠나 (菊名)", note: "1역 · 도큐 도요코선 환승" }
    ],
    saitama: [
      { name: "사이타마신토신 (さいたま新都心)", note: "도보 3분 · JR 게이힌토호쿠선" },
      { name: "오미야 (大宮)", note: "1역 · 신칸센 정차역, 숙소 많음" },
      { name: "이케부쿠로 (池袋)", note: "JR 쇼난신주쿠라인 30분" }
    ],
    vantelin: [
      { name: "나고야돔마에야다 (ナゴヤドーム前矢田)", note: "도보 5분 · 지하철 메이조선" },
      { name: "사카에 (栄)", note: "지하철 15분 · 번화가" },
      { name: "나고야역 (名古屋駅)", note: "지하철 25분 · 신칸센·공항 직결" }
    ],
    paypaydome: [
      { name: "도진마치 (唐人町)", note: "도보 15분 · 지하철 공항선" },
      { name: "텐진 (天神)", note: "지하철 10분 · 번화가, 셔틀버스" },
      { name: "하카타 (博多)", note: "지하철 15분 · 신칸센·공항 직결" }
    ]
  };

  /* 공연이 아닌 행사를 제목으로 걸러낸다 */
  const NOT_CONCERT = /WRESTLE|プロレス|野球|巨人|オリックス|バファローズ|TOURNAMENT|トーナメント|ゲーム|GAME|フェア|展示|ダーツ|見学|TOKYO DOME TOUR/i;

  const d2s = s => s.replace(/[年月./]/g, "-").replace(/日/g, "").replace(/-+$/, "");

  /** 같은 제목이 연달아 있으면 한 공연으로 묶는다 */
  function mergeByTitle(rows) {
    const map = new Map();
    for (const r of rows) {
      if (!r.title || !r.date || NOT_CONCERT.test(r.title)) continue;
      if (CANCELLED.test(r.title) || CANCELLED.test(r.artist || "")) continue;   // 취소·연기 공연 제외
      const cur = map.get(r.title) || { ...r, dates: [] };
      if (!cur.dates.includes(r.date)) cur.dates.push(r.date);
      if (!cur.caption && r.caption) cur.caption = r.caption;
      if (!cur.artist && r.artist) cur.artist = r.artist;
      if (!cur.price && r.price) cur.price = r.price;
      if (!cur.link && r.link) cur.link = r.link;
      map.set(r.title, cur);
    }
    return [...map.values()].map(e => (e.dates.sort(), e));
  }

  /* 도쿄돔 — 월별 달력 표. 대형 공연에 イベント 태그를 달기도 해서 둘 다 받는다. */
  const TD_TAG = /c-txt-tag__item[^>]*>\s*(?:コンサート|イベント)/;
  const TD_MONTH = /^">(\d{4})年(\d{2})月/;
  const TD_DAY = /<span class="c-mod-calender__day">(\d{1,2})<\/span>/;
  const TD_LINK = /c-mod-calender__links[^>]*>\s*<a[^>]*>([\s\S]*?)<\/a>/;
/* 공연 제목에 붙은 <a> 는 그 공연의 공식 페이지다 — 아티스트명 검색보다 훨씬 정확하다 */
  const TD_HREF = /c-mod-calender__links[^>]*>\s*<a[^>]*href="(https?:\/\/[^"]+)"/;
  const TD_CAPTION = /<p class="c-txt-caption-01">([\s\S]*?)<\/p>/;

  function parseTokyoDome(html) {
    const start = html.indexOf("c-ttl-set-calender");
    const end = html.lastIndexOf("</table>");
    if (start < 0 || end < 0) throw new Error("달력 영역을 찾지 못했습니다 (페이지 구조 변경?)");
    const rows = [];
    for (const section of html.slice(start, end).split("c-ttl-set-calender")) {
      const mm = section.match(TD_MONTH);
      if (!mm) continue;
      const [, yy, mo] = mm;
      for (const row of section.split('<tr class="c-mod-calender__item">').slice(1)) {
        const day = (row.match(TD_DAY) || [])[1];
        if (!day) continue;
        for (const block of row.split("c-mod-calender__detail-in").slice(1)) {
          if (!TD_TAG.test(block)) continue;
          rows.push({
            date: `${yy}-${mo}-${d2(day)}`,
            title: decode((block.match(TD_LINK) || [])[1] || ""),
            caption: decode((block.match(TD_CAPTION) || [])[1] || ""),
            link: decode((block.match(TD_HREF) || [])[1] || "").replace(/#.*$/, "")
          });
        }
      }
    }
    return mergeByTitle(rows);
  }

  /* 교세라돔 오사카 — 아티스트(h1)·투어명(h2)·분류(span)가 분리돼 있다 */
  const KY_DATE = /id="event(\d{4}-\d{2}-\d{2})"/;
  const KY_H1 = /<h1>([\s\S]*?)<\/h1>/;
  const KY_H2 = /<h2>([\s\S]*?)<\/h2>/;
  const KY_CAT = /<span>([^<]{1,12})<\/span>/;
  const KY_OPEN = /開場時間[：:]\s*([0-9:～\-　 ]{4,20})/;

  function parseKyocera(html) {
    const rows = [];
    for (const box of html.split('class="event-box').slice(1)) {
      const date = (box.match(KY_DATE) || [])[1];
      if (!date) continue;
      const cat = decode((box.match(KY_CAT) || [])[1] || "");
      if (!/コンサート|ライブ|イベント/.test(cat)) continue;
      const artist = decode((box.match(KY_H1) || [])[1] || "");
      const tour = decode((box.match(KY_H2) || [])[1] || "");
      /* 교세라돔은 공연별 외부 링크를 달지 않지만, 일정 페이지 자체에 날짜 앵커가 있다.
         그 앵커로 보내면 최소한 '이 공연'의 안내로 정확히 떨어진다. */
      const [ky, km] = date.split("-");
      const link = `https://www.kyoceradome-osaka.jp/schedule/?yearId=${ky}&monthId=${Number(km)}&cat=#event${date}`;
      rows.push({ date, artist, title: tour || artist, link,
                  caption: decode((box.match(KY_OPEN) || [])[1] || "") });
    }
    return mergeByTitle(rows);
  }

  /* 오사카성홀 — dt.event-genre(날짜+분류) + dt.event-ttl(제목) */
  const JH_DATE = /<span class="date">\s*(\d{4}\/\d{1,2}\/\d{1,2})/;
  const JH_GENRE = /<span class="bg">([^<]*)<\/span>/;
  const JH_TITLE = /class="event-ttl"[^>]*>\s*(?:<a[^>]*>)?([\s\S]*?)(?:<\/a>)?\s*<\/dt>/;
/* 일본 공연장 4곳 중 가격을 싣는 곳은 오사카성홀뿐이다.
   <span class="d-ttl">座席</span><span class="d-txt">…円</span> 형태로 온다. */
  const JH_SEAT = /d-ttl">座席<\/span>\s*<span class="d-txt">([\s\S]*?)<\/span>/;
  const JH_HREF = /href="(https?:\/\/(?!www\.osaka-johall\.com)[^"]+)"/;

  function parseJoHall(html) {
    const rows = [];
    for (const blk of html.split('class="event-genre"').slice(1)) {
      const dm = blk.match(JH_DATE);
      if (!dm) continue;
      if (!/音楽|芸能/.test(decode((blk.match(JH_GENRE) || [])[1] || ""))) continue;
      const [y, m, d] = dm[1].split("/");
      const seat = decode((blk.match(JH_SEAT) || [])[1] || "").replace(/\s+/g, " ").trim();
      rows.push({
        date: `${y}-${d2(m)}-${d2(d)}`,
        title: decode((blk.match(JH_TITLE) || [])[1] || ""),
        caption: "",
        price: /円/.test(seat) ? seat : "",                                    // 가격이 아닌 좌석 설명은 버린다
        link: (blk.match(JH_HREF) || [])[1] || ""
      });
    }
    return mergeByTitle(rows);
  }

  /* K-아레나 요코하마 — 콘서트 전용 홀이라 분류 필터가 필요 없다 */
  const KA_DATE = /schedule-list-item__date">\s*(\d{4})\.(\d{2})\.(\d{2})/;
  const KA_TITLE = /schedule-list-item__title">([\s\S]*?)<\/h2>/;
  const KA_ARTIST = /schedule-list-item__artist">([\s\S]*?)<\/p>/;
  const KA_OPEN = /(OPEN[^<]{0,40})</;
  const KA_HREF = /href="(https:\/\/k-arena\.com\/schedule\/[^"]+)"/;

  function parseKArena(html) {
    const rows = [];
    for (const li of html.split('class="schedule-list-item"').slice(1)) {
      const dm = li.match(KA_DATE);
      if (!dm) continue;
      rows.push({
        date: `${dm[1]}-${dm[2]}-${dm[3]}`,
        artist: decode((li.match(KA_ARTIST) || [])[1] || ""),
        title: decode((li.match(KA_TITLE) || [])[1] || ""),
        caption: decode((li.match(KA_OPEN) || [])[1] || ""),
        link: (li.match(KA_HREF) || [])[1] || ""
      });
    }
    return mergeByTitle(rows);
  }

  /* 요코하마 아레나 — 표를 같은 사이트의 JSON(/event/YYYYMM?_format=json)으로 채운다.
     HTML 에는 표가 비어 있고, JSON 이 아티스트·날짜·개연 시각·공식 URL 을 그대로 준다.
     category 1 = 콘서트. 2 는 패션쇼·TV 이벤트, 3 식전, 5 체험, 6 물판, 7 기타(실측). */
  function parseYokohama(text) {
    let arr;
    try { arr = JSON.parse(text); } catch { throw new Error("JSON 이 아닙니다 (엔드포인트 변경?)"); }
    if (!Array.isArray(arr)) throw new Error("배열이 아닙니다 (응답 형식 변경?)");
    const rows = [];
    for (const o of arr) {
      if (String(o.category) !== "1" || !/^\d{4}-\d{2}-\d{2}$/.test(o.date1 || "")) continue;
      const artist = decode(o.artist || "");
      const title = decode(o.title || "") || artist;
      const start = Array.isArray(o.ev_start) && o.ev_start[0] ? `개연 ${o.ev_start[0]}` : "";
      const link = /^https?:\/\//.test(o.url || "") ? o.url
        : (o.path ? `https://www.yokohama-arena.co.jp${o.path}` : "");
      rows.push({ date: o.date1, artist, title, caption: start, link });
    }
    return mergeByTitle(rows);
  }

  /* GMO아리나 사이타마(구 사이타마 슈퍼아레나) — <li id=eventN class="concert-show …">.
     클래스에 keyaki-plaza·toiro 가 붙으면 야외 광장·부속 홀 행사라 뺀다(길거리 라이브·재즈데이).
     2026-01-13 ~ 2027-03-31 은 대규모 개수로 휴관이라 그동안 0건이 정상이다. */
  const SA_DATE = /<dl class="date">\s*<dt>[^<]*<\/dt>\s*<dd>\s*(\d{4})\/(\d{1,2})\/(\d{1,2})[^<]*?(?:～\s*(\d{4})\/(\d{1,2})\/(\d{1,2}))?/;
  const SA_TITLE = /<h3><a[^>]*>([\s\S]*?)<\/a><\/h3>/;
  const SA_LINK = /class="photo">\s*<a href="(https?:\/\/(?!www\.saitama-arena\.co\.jp)[^"]+)"/;
  function parseSaitama(html) {
    const rows = [];
    for (const li of html.split(/<li id=event\d+ class="/).slice(1)) {
      const cls = li.slice(0, li.indexOf('"'));
      if (!/\bconcert-show\b/.test(cls) || /keyaki-plaza|toiro/.test(cls)) continue;
      const dm = li.match(SA_DATE);
      if (!dm) continue;
      const title = decode((li.match(SA_TITLE) || [])[1] || "");
      const link = (li.match(SA_LINK) || [])[1] || "";
      const from = `${dm[1]}-${d2(dm[2])}-${d2(dm[3])}`;
      rows.push({ date: from, title, caption: "", link });
      if (dm[4]) {
        const to = `${dm[4]}-${d2(dm[5])}-${d2(dm[6])}`;
        if (to !== from) rows.push({ date: to, title, caption: "", link });
      }
    }
    return mergeByTitle(rows);
  }

  /* 반텔린돔 나고야 — 3년치 달력이 한 페이지(≈630KB)에 있다.
     <div id="tabs-N" class="events"> 가 첫 연도 1월부터의 월 연번이고, 첫 연도는 class="tabYear" 에 있다.
     행의 아이콘 번호가 종류: 1 프로야구, 2 콘서트, 3 스포츠, 8 기타(실측). 2 만 남긴다. */
  const VD_BASE_YEAR = /class="tabYear"[^>]*>\s*(20\d\d)年/;
  const VD_TAB = /<div id="tabs-(\d+)" class="events">/;
  const VD_ROW = /width:45px">(\d{1,2})\/(\d{1,2})<br>[\s\S]*?<p class="eventname"><img src='\.\.\/icon\/icon(\d)\.png'[^>]*>\s*(?:<a href="([^"]*)"[^>]*>)?([^<]*)/g;
  function parseVantelin(html) {
    const by = html.match(VD_BASE_YEAR);
    if (!by) throw new Error("연도 탭을 찾지 못했습니다 (페이지 구조 변경?)");
    const base = +by[1];
    const rows = [];
    const parts = html.split(VD_TAB);                 // [앞, N, 본문, N, 본문, …]
    for (let i = 1; i < parts.length; i += 2) {
      const n = +parts[i], body = parts[i + 1];
      const y = base + Math.floor(n / 12), mo = (n % 12) + 1;
      VD_ROW.lastIndex = 0;
      let m;
      while ((m = VD_ROW.exec(body))) {
        const [, mm, dd, icon, url, title] = m;
        if (icon !== "2" || +mm !== mo) continue;
        rows.push({ date: `${y}-${d2(mm)}-${d2(dd)}`, title: decode(title), caption: "", link: decode(url || "") });
      }
    }
    return mergeByTitle(rows);
  }

  /* 미즈호 PayPay돔 후쿠오카 — 연 단위 페이지(/stadium/event_schedule/YYYY/).
     <dt>2026/12/26（土）</dt> 뒤 표의 イベント 행에 제목과 공식 링크가 있다.
     야구 외 행사가 전부 실리므로(취업 박람회·마라톤·필드 무료 개방) 콘서트 단어가 있는 것만 남긴다. */
  const FD_ROW = /<dt>(20\d\d)\/(\d{1,2})\/(\d{1,2})（[\s\S]*?<th>イベント<\/th>\s*<td>(?:<a href="([^"]*)"[^>]*>)?\s*(?:<span>)?([^<]*)/g;
  const FD_CONCERT = /LIVE|TOUR|FES\b|MUSIC|ROCK|CONCERT|SHOT|ANISAMA|CIRCUS|PRESENTS|SMTOWN|ライブ|ツアー|コンサート|公演/i;
  const FD_NOT = /就職|EXPO|無料開放|マラソン|サッカー|うまいもん|Pet博|MATCH|トヨタ|フィールド|野球/i;
  function parseFukuoka(html) {
    const rows = [];
    FD_ROW.lastIndex = 0;
    let m;
    while ((m = FD_ROW.exec(html))) {
      const [, y, mo, d, url, raw] = m;
      const title = decode(raw);
      if (!FD_CONCERT.test(title) || FD_NOT.test(title)) continue;
      rows.push({ date: `${y}-${d2(mo)}-${d2(d)}`, title, caption: "", link: decode(url || "") });
    }
    return mergeByTitle(rows);
  }

  const JP_VENUES = [
    { key: "td",  venue: "도쿄돔",            city: "도쿄",     mapQuery: "東京ドーム",
      url: "https://www.tokyo-dome.co.jp/dome/event/schedule.html", stay: STAY_AREAS.tokyodome, parse: parseTokyoDome },
    /* 교세라돔은 한 달치만 보여주고 ?yearId=&monthId= 로 월을 넘긴다 */
    { key: "kyo", venue: "교세라돔 오사카",     city: "오사카",   mapQuery: "京セラドーム大阪",
      url: "https://www.kyoceradome-osaka.jp/schedule/",            stay: STAY_AREAS.kyocera,   parse: parseKyocera,
      months: 4, monthUrl: (y, m) => `https://www.kyoceradome-osaka.jp/schedule/?yearId=${y}&monthId=${m}` },
    /* 오사카성홀은 ?ym= 이 서버 응답을 바꾸지 않는다(월 전환이 JS). 당월치만 얻는다. */
    { key: "joh", venue: "오사카성홀",         city: "오사카",   mapQuery: "大阪城ホール",
      url: "https://www.osaka-johall.com/event/",                   stay: STAY_AREAS.johall,    parse: parseJoHall },
    { key: "kar", venue: "K-아레나 요코하마",   city: "요코하마", mapQuery: "Kアリーナ横浜",
      url: "https://k-arena.com/schedule/",                         stay: STAY_AREAS.karena,    parse: parseKArena },
    /* 요코하마 아레나는 월별 JSON. 한 달에 요청 하나 */
    { key: "yka", venue: "요코하마 아레나",     city: "요코하마", mapQuery: "横浜アリーナ",
      url: "https://www.yokohama-arena.co.jp/event/",              stay: STAY_AREAS.yokoarena, parse: parseYokohama,
      months: 4, monthUrl: (y, m) => `https://www.yokohama-arena.co.jp/event/${y}${d2(m)}?_format=json` },
    /* GMO아리나 사이타마는 월별 페이지. 이벤트 없는 달은 404 라 첫 페이지(/schedule/ = 당월)만 필수 */
    { key: "ssa", venue: "GMO아리나 사이타마",   city: "사이타마", mapQuery: "さいたまスーパーアリーナ",
      url: "https://www.saitama-arena.co.jp/schedule/",             stay: STAY_AREAS.saitama,   parse: parseSaitama,
      pages: now => ["https://www.saitama-arena.co.jp/schedule/", ...[1, 2, 3].map(i => {
        const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
        return `https://www.saitama-arena.co.jp/schedule/${d.getFullYear()}/${d2(d.getMonth() + 1)}/`;
      })] },
    /* 반텔린돔은 3년치가 한 페이지 */
    { key: "vdn", venue: "반텔린돔 나고야",     city: "나고야",   mapQuery: "バンテリンドーム ナゴヤ",
      url: "https://www.nagoya-dome.co.jp/enjoy/index.php",        stay: STAY_AREAS.vantelin,  parse: parseVantelin },
    /* 미즈호PayPay돔은 연 단위. 다음 해 페이지는 아직 없으면 404 */
    { key: "fuk", venue: "미즈호PayPay돔 후쿠오카", city: "후쿠오카", mapQuery: "みずほPayPayドーム福岡",
      url: "https://www.softbankhawks.co.jp/stadium/event_schedule/", stay: STAY_AREAS.paypaydome, parse: parseFukuoka,
      pages: now => [now.getFullYear(), now.getFullYear() + 1].map(y => `https://www.softbankhawks.co.jp/stadium/event_schedule/${y}/`) }
  ];

  /** e+ 검색은 이름이 정확해야 걸린다. 멤버 나열·기념 문구·합동 라인업을 떼어 낸다.
      (예: 'FANTASTICS (世界・佐藤大樹…)' → 'FANTASTICS', 'INI 5TH ANNIVERSARY' → 'INI') */
  function searchKeyword(name) {
    const t = String(name || "")
      .split(/\s*\/\s*/)[0]                                  // 합동 공연은 첫 팀만
      .replace(/[（(][^）)]*[）)]\s*$/, "")                     // 뒤에 붙은 멤버 나열
      .replace(/\s+\d+(?:ST|ND|RD|TH)\s+ANNIVERSARY.*$/i, "")
      .replace(/\.{3}\s*and\s+more$/i, "")
      .trim();
    return t || String(name || "");
  }

  /** 제목만 있는 공연장에서 아티스트를 분리한다 */
  /* 'LIVE「君と歩いた青春2026」' 처럼 앞 단어가 공연 종류일 뿐이면 그건 아티스트가 아니다.
     이런 합동·기획 공연은 공연명 자체를 아티스트 자리에 쓴다. */
  const GENERIC_ARTIST = /^(?:LIVE|CONCERT|TOUR|FES(?:TIVAL)?|SHOW|EVENT|ライブ|コンサート|(?:日本|来日|単独|追加)?公演|イベント|フェス)$/i;
  function splitTitle(raw) {
    const t = raw.replace(/^20\d\d\s+/, "").trim();
    const jp = t.indexOf("「");
    if (jp > 0) {
      const head = t.slice(0, jp).trim(), body = t.slice(jp).replace(/[「」]/g, "").trim();
      /* '日本公演「Number_i LIVE TOUR No.III」' — 괄호 안을 다시 나눠 Number_i 를 얻는다 */
      if (GENERIC_ARTIST.test(head)) return splitTitle(body);
      return { artist: head, tour: body };
    }
    /* 'Bruno Mars - The Romantic Tour in Japan' — 대시 구분자가 있으면 그게 가장 확실한 경계다 */
    const dash = t.match(/^(.+?\S)\s+[-–—]\s+(\S.+)$/);
    if (dash && dash[1].length <= 40) return { artist: dash[1], tour: dash[2] };
    const i = t.search(/\s(?=(?:WORLD|DOME|ARENA|STADIUM|HALL|ASIA|JAPAN|LIVE|CONCERT|TOUR|ライブ|ツアー|公演))/i);
    if (i <= 0) return { artist: t, tour: "" };
    let artist = t.slice(0, i).trim(), tour = t.slice(i).trim();
    /* 'BIGBANG 2026 WORLD TOUR' — 연도는 아티스트가 아니라 투어 이름의 일부다 */
    const yr = artist.match(/^(.*\S)\s+(20\d\d)$/);
    if (yr) { artist = yr[1]; tour = `${yr[2]} ${tour}`; }
    return { artist, tour };
  }

  async function jpvenues() {
    const out = [];
    const per = {};
    for (const v of JP_VENUES) {
      try {
        /* 가져올 페이지 목록. 한 페이지에 다 있는 곳은 url 하나, 월 단위인 곳은 monthUrl 로
           몇 달치, 연 단위인 곳은 pages() 로 직접 나열한다. */
        const now = new Date();
        let urls;
        if (v.pages) urls = v.pages(now);
        else if (v.monthUrl) urls = Array.from({ length: v.months || 3 }, (_, i) => {
          const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
          return v.monthUrl(d.getFullYear(), d.getMonth() + 1);
        });
        else urls = [v.url];

        /* 첫 페이지는 반드시 있어야 한다. 그 뒤 페이지는 '아직 없는 달·해'라 404 가 정상인 곳이
           있으므로(GMO아리나 사이타마·미즈호PayPay돔) 실패해도 그 페이지만 건너뛴다. */
        const rows = [];
        for (let i = 0; i < urls.length; i++) {
          try {
            rows.push(...v.parse(await get(urls[i])));
          } catch (e) {
            if (i === 0 || used >= MAX_SUBREQUESTS) throw e;
            log(`   ${v.venue} 부가 페이지 건너뜀: ${e.message.slice(0, 80)}`);
          }
        }
        /* 달·해를 걸쳐 같은 공연이 나뉘어 오므로 다시 합친다 */
        const merged = new Map();
        for (const r of rows) {
          const cur = merged.get(r.title) || { ...r, dates: [] };
          for (const dt of r.dates) if (!cur.dates.includes(dt)) cur.dates.push(dt);
          if (!cur.link && r.link) cur.link = r.link;
          merged.set(r.title, cur);
        }
        const found = [...merged.values()].map(e => (e.dates.sort(), e));
        per[v.key] = found.length;
        for (const e of found) {
          const artist = e.artist || splitTitle(e.title).artist;
          const tour = e.artist ? e.title : (splitTitle(e.title).tour || `${v.venue} 공연`);
          /* 일본은 공연마다 취급 예매처가 갈린다(e+ · ぴあ · ローソン). 한 곳만 걸어 두면
             그 예매처가 안 파는 공연은 검색 결과가 비어 막다른 길이 된다. 셋 다 검색으로 건다.
             URL 형식은 각 사이트의 검색 폼에서 확인했다. */
          const kw = encodeURIComponent(searchKeyword(artist));
          const eplus = `https://eplus.jp/sf/search?keyword=${kw}`;
          const jpSearches = [
            { name: "티켓피아", url: `https://t.pia.jp/pia/search_all.do?kw=${kw}` },
            { name: "로손티켓", url: `https://l-tike.com/search/?keyword=${kw}` }
          ];
          out.push({
            id: `jp-${v.key}-${e.dates[0]}-${artist.replace(/[^\w가-힣ぁ-んァ-ヶ一-龠]/g, "").slice(0, 20) || "event"}`,
            auto: true, sourceName: `${v.venue} 공식`,
            artist, tour,
            category: "japan",
            country: "일본", city: v.city, venue: v.venue, mapQuery: v.mapQuery,
            dates: e.dates,
            doorsNote: e.caption || "공식 공지 참고",
            ticketOpen: null, ticketStatus: "예정",
            price: e.price || "예매처 공지 참고",
            /* 공연장이 그 공연의 공식 페이지를 알려 주면 그리로 보낸다. 아티스트명으로 e+ 를
               검색시키면 동명 공연이나 빈 결과가 나와 공연과 링크가 어긋난다. */
            vendor: e.link
              ? { name: "공식 공연 페이지", url: e.link }
              : { name: "이플러스 (e+)", url: eplus },
            otherVendors: [
              ...(e.link ? [{ name: "이플러스 (e+)", url: eplus }] : []),
              ...jpSearches
            ],
            goods: { note: "", url: null },
            stay: { areas: v.stay },
            images: [],            // 공연장 일정 페이지에는 공연 이미지가 없다
            tips: "",
            source: v.url,
            tags: []
          });
        }
      } catch (e) {
        errors.push(`jpvenues/${v.key}: ${e.message}`);
        log(`⚠️  ${v.venue} 실패: ${e.message}`);
      }
    }
    stats.jpvenues = { count: out.length, ...per };
    return out;
  }

  /* ── Live Nation Korea — 내한 공연의 티켓 오픈 시각 ────────────────
     KOPIS 는 오픈 시각을 아예 주지 않고(34개 필드 전부 확인), 예매처 RSS 는 모두 죽었다.
     Live Nation Korea 는 예매처가 아니라 프로모터라 제약에 걸리지 않고, robots.txt 도 공연 페이지를 허용한다.
     아티스트 페이지(Next.js RSC 페이로드)에 월드투어 전 회차가 있고, 회차마다 tickets[] 에
     typeId(2 일반예매 · 13/266/363 선예매 · 74 VIP) · validFromUtc(판매 시작) · ticketUrl(실제 상품 페이지)이 있다.
     한국 회차만 고른다(venue.country === "South Korea").

     KOPIS 항목과의 조인 키는 예매 상품 번호다 — 인터파크 GoodsCode 와 NOL 상품번호가 같은 번호다(8/8 실측).
     이름은 못 쓴다(KOPIS 는 '벤슨 분', LN 은 'Benson Boone'). 번호가 아직 없으면 공연장+날짜로 맞춘다. */
  const LN_HOME = "https://www.livenation.kr/";
  const LN_SLUG = /href="\/([a-z0-9-]+-tickets-adp\d+)"/g;
  const LN_CHUNK = /self\.__next_f\.push\(\[1,"((?:[^"\\]|\\.)*)"\]\)/g;
  const LN_EVENT_SPLIT = /\{"id":"\d+","allTicketStatus":(\d+)/;
  /* 회차 상태. 1 = 판매(정상), 6 = TBC — 사이트가 날짜 자리에 'TBC' 를 찍는 연기 상태다
     (2026-09-25 Post Malone 고양 10/02 로 확인). 연기된 공연은 옛 날짜가 의미 없으므로
     티켓마스터의 postponed 와 같은 규칙으로 버린다. 취소 상태 코드는 아직 실물을 못 봤다 —
     취소되면 보통 페이지에서 회차가 통째로 사라지고, 그건 24시간 갱신이 지운다. */
  const LN_DROP_STATUS = new Set([6]);
  const LN_TICKET_SPLIT = /\{"id":\d+,"currencySymbol"/;
  const LN_PRESALE = new Set([13, 266, 363]);
  const pick1 = (src, key) => { const m = src.match(new RegExp(`"${key}":"((?:[^"\\\\]|\\\\.)*)"`)); return m ? JSON.parse(`"${m[1]}"`) : ""; };
  const pickN = (src, key) => { const m = src.match(new RegExp(`"${key}":(-?\\d+)`)); return m ? +m[1] : null; };
  /* "2026-08-28T02:00:00Z" → "2026-08-28T11:00:00+09:00" (사이트의 ticketOpen 형식) */
  const toKST = iso => {
    const d = new Date(iso); if (isNaN(d)) return null;
    const k = new Date(d.getTime() + 9 * 3600 * 1000);
    return `${k.getUTCFullYear()}-${d2(k.getUTCMonth() + 1)}-${d2(k.getUTCDate())}T${d2(k.getUTCHours())}:${d2(k.getUTCMinutes())}:00+09:00`;
  };
  const LN_CITY = [[/KINTEX|킨텍스|고양/i, "고양"], [/인천|Incheon/i, "인천"], [/부산|Busan/i, "부산"]];
  const lnCity = (venue, city) => (LN_CITY.find(([re]) => re.test(venue)) || [])[1] || ({ Seoul: "서울", Incheon: "인천", Busan: "부산" }[city] || city || "서울");
  const vendorNameOf = url =>
    /nol\.yanolja/.test(url) ? "NOL 티켓" : /interpark/.test(url) ? "인터파크" : /ticketlink/.test(url) ? "티켓링크"
    : /yes24/.test(url) ? "예스24" : /melon/.test(url) ? "멜론티켓" : /29cm/.test(url) ? "29CM" : "예매처";
  /** 예매 URL 에서 상품 번호를 뽑는다 — KOPIS 와 LN 을 잇는 키 */
  const productIdOf = url => {
    const m = String(url || "").match(/GoodsCode=(\d+)|\/goods\/(\d+)|\/products\/(\d+)|ticketlink\.co\.kr\/product\/(\d+)/i);
    return m ? (m[1] || m[2] || m[3] || m[4]) : null;
  };

  function parseLiveNation(html, slug) {
    /* RSC 청크를 이어 붙이면 JSON 문자열이 된다. 전체를 JSON.parse 하지 않고
       회차 객체 경계로 잘라 정규식으로 필요한 것만 뽑는다(10ms CPU 예산). */
    if (!html.includes("South Korea")) return [];                     // 한국 회차가 없으면 디코드할 이유가 없다
    let blob = "";
    LN_CHUNK.lastIndex = 0;
    let m;
    while ((m = LN_CHUNK.exec(html))) {
      if (!m[1].includes("allTicketStatus") && !m[1].includes('attraction')) continue;   // 회차 데이터가 없는 청크(라우팅·CSS)는 건너뜀
      try { blob += JSON.parse(`"${m[1]}"`); } catch { /* 깨진 청크는 건너뜀 */ }
    }
    if (!blob.includes('"attraction"')) throw new Error("attraction 페이로드가 없습니다 (페이지 구조 변경?)");
    const out = [];
    const seenDates = new Set();                      // RSC 페이로드에는 같은 회차가 두 번 실린다
    const chunks = blob.split(LN_EVENT_SPLIT);        // [앞, 상태, 본문, 상태, 본문, …]
    for (let i = 1; i < chunks.length; i += 2) {
      const status = +chunks[i], part = chunks[i + 1] || "";
      if (LN_DROP_STATUS.has(status)) continue;       // 연기 — 날짜가 무의미하다
      const venueAt = part.indexOf('"venue":{');
      if (venueAt < 0) continue;
      const venueBlk = part.slice(venueAt, part.indexOf("}", venueAt) + 1);
      if (pick1(venueBlk, "country") !== "South Korea") continue;
      const date = pick1(part, "eventDate").slice(0, 10);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || seenDates.has(date)) continue;
      seenDates.add(date);
      const lineupAt = part.indexOf('"lineup":[');
      const artist = lineupAt >= 0 ? pick1(part.slice(lineupAt, lineupAt + 600), "name") : "";
      const nameAt = part.indexOf('"promoter"');                          // 회차 이름은 promoter 바로 뒤에 온다
      const title = nameAt >= 0 ? pick1(part.slice(nameAt, nameAt + 400), "name") : "";
      const tickets = [];
      const tAt = part.indexOf('"tickets":[');
      const tEnd = part.indexOf('"mainEventInformation"', tAt);
      const tBlk = tAt >= 0 ? part.slice(tAt, tEnd > tAt ? tEnd : undefined) : "";
      for (const t of tBlk.split(LN_TICKET_SPLIT).slice(1)) {
        const typeId = pickN(t, "typeId"), from = pick1(t, "validFromUtc");
        if (typeId == null || !from) continue;
        tickets.push({ typeId, status: pickN(t, "ticketStatus"), url: pick1(t, "ticketUrl"), from, label: pick1(t, "displayLabel") });
      }
      const general = tickets.filter(t => t.typeId === 2).sort((a, b) => a.from.localeCompare(b.from));
      const presales = tickets.filter(t => LN_PRESALE.has(t.typeId)).sort((a, b) => a.from.localeCompare(b.from));
      const buy = general.find(t => t.url) || tickets.find(t => t.url);
      out.push({
        slug, date, artist, title,
        venue: pick1(venueBlk, "name"), city: lnCity(pick1(venueBlk, "name"), pick1(venueBlk, "city")),
        image: pick1(part, "image"),
        ticketOpen: general[0] ? toKST(general[0].from) : null,
        presales: presales.map(t => ({ at: toKST(t.from), label: t.label || "선예매" })),
        buyUrl: buy ? buy.url : "",
        otherUrls: [...new Set(tickets.map(t => t.url).filter(u => u && u !== (buy && buy.url)))]
      });
    }
    return out;
  }

  async function livenation() {
    const home = await get(LN_HOME);
    LN_SLUG.lastIndex = 0;
    const slugs = [];
    let m;
    while ((m = LN_SLUG.exec(home))) if (!slugs.includes(m[1])) slugs.push(m[1]);
    if (!slugs.length) throw new Error("홈에서 공연 링크를 찾지 못했습니다 (페이지 구조 변경?)");

    /* 슬러그별 기억: { at: 마지막으로 읽은 시각, kr: 파싱한 한국 회차 }.
       파싱 결과를 여기 두는 이유 — KOPIS 항목에 보강하고 나면 LN 항목은 피드에서 빠지는데,
       KOPIS 는 매 실행 API 로 항목을 새로 만들어 보강분(ticketOpen)이 사라진다.
       그래서 LN 회차를 상태에 보관하고 매 실행 다시 내보내 보강을 매번 다시 건다.
       (초기 버전은 시각 문자열만 저장했다 — 그 형식은 '아직 안 읽음'으로 취급해 다시 읽는다.) */
    const seen = {};
    for (const [sl, rec] of Object.entries(state.livenation || {}))
      if (rec && typeof rec === "object" && Array.isArray(rec.kr)) seen[sl] = rec;
    const nowMs = Date.now();
    const readAt = sl => (seen[sl] ? Date.parse(seen[sl].at) || 0 : 0);
    /* 처음 보는 공연이 먼저, 그다음 오래 안 읽은 순. 실행당 LN_DETAILS_PER_RUN 개까지만. */
    const todo = slugs
      .filter(sl => !seen[sl] || nowMs - readAt(sl) > LN_REFRESH_MS)
      .sort((a, b) => readAt(a) - readAt(b))
      .slice(0, LN_DETAILS_PER_RUN);

    const fetched = new Set();
    for (const sl of todo) {
      if (used >= MAX_SUBREQUESTS - 1) break;
      try {
        seen[sl] = { at: new Date().toISOString(), kr: parseLiveNation(await get(`${LN_HOME}${sl}`), sl) };
        fetched.add(sl);
      } catch (e) { log(`⚠️  Live Nation ${sl}: ${e.message}`); }
    }
    /* 홈에서 사라진 공연은 기억도 지운다 — 다시 나타나면 새로 읽는다 */
    for (const sl of Object.keys(seen)) if (!slugs.includes(sl)) delete seen[sl];
    state.livenation = seen;

    const remembered = Object.values(seen).flatMap(rec => rec.kr);
    const out = remembered.map(e => ({
      id: `ln-${e.slug}-${e.date}`,
      auto: true, sourceName: "Live Nation Korea", lnSlug: e.slug,
      artist: e.artist || e.title, tour: e.title,
      category: "visit",
      country: "대한민국", city: e.city, venue: e.venue,
      dates: [e.date],
      doorsNote: "",
      ticketOpen: e.ticketOpen, ticketStatus: null,
      price: "예매처 공지 참고",
      vendor: e.buyUrl ? { name: vendorNameOf(e.buyUrl), url: e.buyUrl } : { name: "Live Nation Korea", url: `${LN_HOME}${e.slug}` },
      otherVendors: [
        ...e.otherUrls.map(u => ({ name: vendorNameOf(u), url: u })),
        ...(e.buyUrl ? [{ name: "Live Nation Korea 공연 페이지", url: `${LN_HOME}${e.slug}` }] : [])
      ],
      presales: e.presales,
      tips: e.presales.length ? e.presales.map(p => `${p.label} ${p.at.slice(5, 16).replace("T", " ")}`).join(" · ") : "",
      goods: { note: "", url: null },
      stay: { areas: [] },
      images: /^https:\/\//.test(e.image) ? [e.image] : [],
      source: `${LN_HOME}${e.slug}`,
      tags: []
    }));
    stats.livenation = { count: out.length, slugs: slugs.length, fetched: fetched.size, remembered: Object.keys(seen).length };
    return out;
  }

  /* ── 실행 · 병합 ────────────────────────────── */
  const SOURCES = { kopis, jpvenues, ticketmaster, livenation };
  let all = [];
  for (const name of SOURCE_ORDER) {
    if (only && only !== name) continue;
    try {
      log(` → ${name}`);
      all.push(...await SOURCES[name]());
    } catch (e) {
      errors.push(`${name}: ${e.message}`);
      log(`⚠️  ${name} 실패: ${e.message}`);
    }
  }

  /* 한 소스만 돌린 경우, 나머지 소스의 이전 결과는 유지 */
  if (only) {
    const prefix = SOURCE_PREFIX[only];
    all = [...previous.filter(c => !c.id.startsWith(prefix)), ...all];
  }
  /* 실패한 소스가 있으면 그 소스의 이전 결과를 살려 둔다 */
  else if (errors.length) {
    const got = new Set(all.map(c => c.id.split("-")[0]));
    all = [...previous.filter(c => !got.has(c.id.split("-")[0])), ...all];
  }

  /* 소스 간 중복 제거 — 같은 공연이 두 소스에 잡히면 우선순위가 높은 쪽만 남긴다.
     (예: 한국 아티스트의 해외 공연이 KOPIS 해외 등록분과 Ticketmaster 양쪽에 있는 경우)

     같은 소스 안에서는 절대 합치지 않는다. KOPIS 는 올림픽공원처럼 여러 홀을 한 이름으로
     주기 때문에, 공연장·날짜로 묶으면 같은 날 다른 공연이 지워진다(전유진/박지현 사례). */
  const srcOf = id => SOURCE_ORDER.find(n => id.startsWith(SOURCE_PREFIX[n])) || "?";
  const dedupRank = c => {
    if (c.kopisOverseas) return 90;               // 해외 등록분은 공연장 공식 페이지에 양보
    const i = SOURCE_ORDER.indexOf(srcOf(c.id));
    return i < 0 ? 99 : i;
  };
  const norm = v => String(v || "").toLowerCase().replace(/[\s.\-_'"()\[\]]/g, "");

  /* 처음 수집된 시각을 기록해 '신규 등록' 지표에 쓴다.
     이 기능이 생기기 전부터 있던 항목은 시점을 알 수 없으므로 null 로 두고 세지 않는다.
     그래야 배포 첫 주에 전부 신규로 잡히는 일이 없다. */
  const nowISO = new Date().toISOString();
  const stamp = c => ({ ...c, firstSeen: prevById.has(c.id) ? (prevById.get(c.id).firstSeen ?? null) : nowISO });

  const today = todayOverride || todayISO();
  const seenId = new Set();
  const claimed = new Map();                                  // 아티스트|날짜 → 선점한 소스
  const events = all
    .filter(c => c.dates?.length && c.dates[c.dates.length - 1] >= today)
    .sort((a, b) => dedupRank(a) - dedupRank(b))          // 우선순위 높은 소스가 먼저 선점
    .filter(c => {
      if (seenId.has(c.id)) return false;
      const key = `${norm(c.artist)}|${c.dates[0]}`;
      const owner = claimed.get(key);
      if (owner && owner !== srcOf(c.id)) return false;        // 다른 소스가 이미 가진 공연
      claimed.set(key, srcOf(c.id));
      seenId.add(c.id);
      return true;
    })
    .map(stamp)
    .sort((a, b) => a.dates[0].localeCompare(b.dates[0]));

  /* ── Live Nation 보강 ──────────────────────────────
     같은 내한 공연이 KOPIS(한글 표기, 오픈 시각 없음)와 LN(영문, 오픈 시각·상품 URL 있음) 양쪽에 있으면
     이름으로는 못 잇는다. 예매 상품 번호로 잇고, 없으면 공연장+날짜로 잇는다.
     이어지면 KOPIS 항목에 오픈 시각·선예매·상품 URL·이미지를 채우고 LN 항목은 뺀다. 못 이으면 LN 항목이 그대로 남는다. */
  const normVenue = v => norm(v).replace(/kintex/g, "킨텍스").replace(/\(.*?\)|hall\d+|홀\d+|\d+홀/g, "");
  const lnList = events.filter(c => c.id.startsWith("ln-"));
  const enriched = new Set();
  if (lnList.length) {
    const byPid = new Map(), byVenueDate = new Map();
    for (const c of events) {
      if (c.id.startsWith("ln-") || c.country !== "대한민국") continue;
      for (const u of [c.vendor?.url, ...(c.otherVendors || []).map(v => v.url)]) { const id = productIdOf(u); if (id) byPid.set(id, c); }
      for (const dt of c.dates) byVenueDate.set(`${normVenue(c.venue)}|${dt}`, c);
      if (c.dates.length === 2 && c.period) {            // KOPIS 기간형은 사이 날짜도 같은 공연이다
        for (let d = new Date(c.dates[0] + "T00:00:00Z"); d.toISOString().slice(0, 10) <= c.dates[1]; d.setUTCDate(d.getUTCDate() + 1))
          byVenueDate.set(`${normVenue(c.venue)}|${d.toISOString().slice(0, 10)}`, c);
      }
    }
    for (const L of lnList) {
      const pids = [L.vendor?.url, ...(L.otherVendors || []).map(v => v.url)].map(productIdOf).filter(Boolean);
      const target = pids.map(id => byPid.get(id)).find(Boolean) || byVenueDate.get(`${normVenue(L.venue)}|${L.dates[0]}`);
      if (!target) continue;
      if (!target.ticketOpen && L.ticketOpen) target.ticketOpen = L.ticketOpen;
      if (L.presales?.length) { target.presales = L.presales; if (!target.tips) target.tips = L.tips; }
      /* KOPIS 예매 링크가 검색 URL 이면 LN 의 상품 페이지가 낫다 */
      if (productIdOf(L.vendor?.url) && /search/.test(target.vendor?.url || "")) target.vendor = L.vendor;
      const have = new Set([target.vendor?.url, ...(target.otherVendors || []).map(v => v.url)]);
      target.otherVendors = [...(target.otherVendors || []), ...(L.otherVendors || []).filter(v => !have.has(v.url))];
      if (!(target.images || []).length && L.images?.length) target.images = L.images;
      target.lnSlug = L.lnSlug;
      enriched.add(L.id);
    }
  }
  const finalEvents = enriched.size ? events.filter(c => !enriched.has(c.id)) : events;
  if (stats.livenation) stats.livenation.enriched = enriched.size;

  stats.subrequests = used;

  /* ── 소스 건강 상태 ──────────────────────────────
     소스가 통째로 실패하면 이전 결과가 이월되므로 화면만 봐서는 모른다.
     공연장 페이지가 리뉴얼돼 파서가 0건을 내거나, 절반만 파싱되는 경우도 같다.
     단위(소스·공연장)별로 연속 0건·연속 실패를 세고, 문턱을 넘으면 warnings 에 적는다.
     이 값은 KV 의 status 에 저장돼 다음 실행으로 넘어오고, 감시 워크플로가 읽는다. */
  const health = {};
  const warnings = [];
  const failedSources = new Set(errors.map(e => e.split(":")[0].split("/")[0]));
  const unit = (key, label, count, failed) => {
    const prev = prevHealth[key] || {};
    const zero = failed ? (prev.zero || 0) : (count === 0 ? (prev.zero || 0) + 1 : 0);
    const fail = failed ? (prev.fail || 0) + 1 : 0;
    const peak = Math.max(prev.peak || 0, count || 0);
    health[key] = { count: failed ? (prev.count ?? null) : count, zero, fail, peak, at: nowISO };
    if (fail >= 3) warnings.push(`${label}: ${fail}회 연속 실패`);
    if (zero >= 3 && peak > 0) warnings.push(`${label}: ${zero}회 연속 0건 (이전 최고 ${peak}건)`);   // 한 번도 안 나온 곳은 신규·휴관일 수 있다
    /* 한 실행 만에 절반 아래로 떨어지면 부분 파싱 실패일 가능성이 크다.
       기준은 '직전 실행'이지 '역대 최고'가 아니다 — 당월치만 보여 주는 공연장(오사카성홀)은
       달이 흐르며 지난 공연이 하나씩 빠져 자연히 줄고, 최고치와 비교하면 매시 오탐이 난다
       (2026-09-23~24 에 이걸로 실패 메일이 6번 갔다). 파서가 깨지면 한 번에 뚝 떨어진다. */
    const was = prev.count;
    if (!failed && typeof was === "number" && was >= 6 && count < was / 2)
      warnings.push(`${label}: ${was}건 → ${count}건 (한 실행 만에 절반 미만)`);
  };
  if (!only || only === "kopis") unit("kopis", "KOPIS", stats.kopis?.count ?? 0, failedSources.has("kopis") || !stats.kopis);
  if (!only || only === "ticketmaster") unit("ticketmaster", "Ticketmaster", stats.ticketmaster?.count ?? 0, failedSources.has("ticketmaster") || !stats.ticketmaster);
  if (!only || only === "livenation") unit("livenation", "Live Nation Korea", stats.livenation?.count ?? 0, failedSources.has("livenation") || !stats.livenation);
  if (!only || only === "jpvenues") {
    const jpFailed = new Set(errors.filter(e => e.startsWith("jpvenues/")).map(e => e.slice(9).split(":")[0]));
    for (const v of JP_VENUES) unit(`jp-${v.key}`, v.venue, stats.jpvenues?.[v.key] ?? 0, jpFailed.has(v.key));
  }
  /* 제목 분리가 빗나가 'LIVE' 같은 일반명사가 아티스트로 남은 항목 */
  const generic = finalEvents.filter(c => GENERIC_ARTIST.test(String(c.artist || "").trim()));
  if (generic.length) warnings.push(`아티스트명이 일반명사인 항목 ${generic.length}건: ${generic.slice(0, 3).map(c => c.id).join(", ")}`);
  /* 이전 상태의 다른 단위는 그대로 보존한다(--only 로 일부만 돌렸을 때) */
  for (const k of Object.keys(prevHealth)) if (!(k in health)) health[k] = prevHealth[k];

  return { events: finalEvents, stats, errors, health, warnings, state };
}
