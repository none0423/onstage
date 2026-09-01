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
const CANCELLED = /공연\s?취소|취소\s?공연|\[\s?취소\s?\]|\(\s?취소\s?\)|중지|中止|延期|公演中止|払戻|CANCELL?ED|POSTPONED/i;
/* Workers 무료 플랜은 호출당 50개. 리다이렉트도 1개로 세므로 여유를 두고 40 에서 멈춘다. */
const MAX_SUBREQUESTS = 40;

/* 소스 우선순위 — 앞일수록 먼저 실행되어 요청 예산을 먼저 쓰고,
   같은 공연이 여러 소스에 있으면 앞쪽 소스의 데이터가 남는다. */
const SOURCE_ORDER = ["kopis", "jpvenues", "ticketmaster"];
const SOURCE_PREFIX = { kopis: "kopis-", jpvenues: "jp-", ticketmaster: "tm-" };
/* KOPIS 가 먼저 돌지만 뒤 소스가 굶지 않도록 요청을 남겨 둔다.
   일본 공연장 4곳 + Ticketmaster 최대 4개 + 여유 2개. 공연장을 늘리면 이 값도 올린다. */
const RESERVED_FOR_LATER_SOURCES = 10;

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
export async function collectAll({ keys = {}, previous = [], only = null, log = () => {} } = {}) {
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
      const xml = await get(`${KOPIS}?service=${keys.kopis}&stdate=${stdate}&eddate=${eddate}&cpage=${page}&rows=100&shcate=CCCD`);
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
      map.set(r.title, cur);
    }
    return [...map.values()].map(e => (e.dates.sort(), e));
  }

  /* 도쿄돔 — 월별 달력 표. 대형 공연에 イベント 태그를 달기도 해서 둘 다 받는다. */
  const TD_TAG = /c-txt-tag__item[^>]*>\s*(?:コンサート|イベント)/;
  const TD_MONTH = /^">(\d{4})年(\d{2})月/;
  const TD_DAY = /<span class="c-mod-calender__day">(\d{1,2})<\/span>/;
  const TD_LINK = /c-mod-calender__links[^>]*>\s*<a[^>]*>([\s\S]*?)<\/a>/;
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
            caption: decode((block.match(TD_CAPTION) || [])[1] || "")
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
      rows.push({ date, artist, title: tour || artist, caption: decode((box.match(KY_OPEN) || [])[1] || "") });
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
        price: /円/.test(seat) ? seat : ""                                     // 가격이 아닌 좌석 설명은 버린다
      });
    }
    return mergeByTitle(rows);
  }

  /* K-아레나 요코하마 — 콘서트 전용 홀이라 분류 필터가 필요 없다 */
  const KA_DATE = /schedule-list-item__date">\s*(\d{4})\.(\d{2})\.(\d{2})/;
  const KA_TITLE = /schedule-list-item__title">([\s\S]*?)<\/h2>/;
  const KA_ARTIST = /schedule-list-item__artist">([\s\S]*?)<\/p>/;
  const KA_OPEN = /(OPEN[^<]{0,40})</;

  function parseKArena(html) {
    const rows = [];
    for (const li of html.split('class="schedule-list-item"').slice(1)) {
      const dm = li.match(KA_DATE);
      if (!dm) continue;
      rows.push({
        date: `${dm[1]}-${dm[2]}-${dm[3]}`,
        artist: decode((li.match(KA_ARTIST) || [])[1] || ""),
        title: decode((li.match(KA_TITLE) || [])[1] || ""),
        caption: decode((li.match(KA_OPEN) || [])[1] || "")
      });
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
      url: "https://k-arena.com/schedule/",                         stay: STAY_AREAS.karena,    parse: parseKArena }
  ];

  /** 제목만 있는 공연장에서 아티스트를 분리한다 */
  function splitTitle(raw) {
    const t = raw.replace(/^20\d\d\s+/, "").trim();
    const jp = t.indexOf("「");
    if (jp > 0) return { artist: t.slice(0, jp).trim(), tour: t.slice(jp).replace(/[「」]/g, "").trim() };
    const i = t.search(/\s(?=(?:WORLD|DOME|ARENA|STADIUM|HALL|ASIA|JAPAN|LIVE|CONCERT|TOUR|ライブ|ツアー|公演))/i);
    return i > 0 ? { artist: t.slice(0, i).trim(), tour: t.slice(i).trim() } : { artist: t, tour: "" };
  }

  async function jpvenues() {
    const out = [];
    const per = {};
    for (const v of JP_VENUES) {
      try {
        /* 월 단위로만 보여 주는 곳은 몇 달치를 이어서 가져온다 */
        let found;
        if (v.monthUrl) {
          const rows = [];
          const now = new Date();
          for (let i = 0; i < (v.months || 3); i++) {
            const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
            rows.push(...v.parse(await get(v.monthUrl(d.getFullYear(), d.getMonth() + 1))));
          }
          /* 달을 걸쳐 같은 공연이 나뉘어 오므로 다시 합친다 */
          const merged = new Map();
          for (const r of rows) {
            const cur = merged.get(r.title) || { ...r, dates: [] };
            for (const dt of r.dates) if (!cur.dates.includes(dt)) cur.dates.push(dt);
            merged.set(r.title, cur);
          }
          found = [...merged.values()].map(e => (e.dates.sort(), e));
        } else {
          found = v.parse(await get(v.url));
        }
        per[v.key] = found.length;
        for (const e of found) {
          const artist = e.artist || splitTitle(e.title).artist;
          const tour = e.artist ? e.title : (splitTitle(e.title).tour || `${v.venue} 공연`);
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
            vendor: { name: "이플러스 (e+)", url: `https://eplus.jp/sf/search?keyword=${encodeURIComponent(artist)}` },
            otherVendors: [{ name: "티켓피아", url: "https://t.pia.jp/" }, { name: "로손티켓", url: "https://l-tike.com/" }],
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

  /* ── 실행 · 병합 ────────────────────────────── */
  const SOURCES = { kopis, jpvenues, ticketmaster };
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

  const today = todayISO();
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

  stats.subrequests = used;
  return { events, stats, errors };
}
