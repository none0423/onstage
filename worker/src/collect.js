/* ============================================================
   ON STAGE 수집 로직 — 플랫폼 독립 (fetch 만 사용)
   Cloudflare Worker(src/index.js)와 Node CLI(tools/collect.mjs)가 함께 씁니다.

   Workers 무료 플랜 제약에 맞춘 설계
     · 호출당 CPU 10ms   → 정규식 대신 indexOf/split 위주, 정규식은 미리 컴파일
     · 서브리퀘스트 50개 → 아래 MAX_SUBREQUESTS 로 강제, 초과분은 다음 실행으로 이월
   ============================================================ */

const UA = "onstage-collector/1.0 (personal concert dashboard; 10 users)";
const MAX_SUBREQUESTS = 45;

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

  async function get(url, { json: asJson = false } = {}) {
    if (used >= MAX_SUBREQUESTS) throw new Error("서브리퀘스트 한도 도달 — 다음 실행으로 이월");
    used++;
    const res = await fetch(url, {
      headers: { "User-Agent": UA, Accept: asJson ? "application/json" : "*/*" },
      signal: AbortSignal.timeout(20000)
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} — ${url.replace(/(service|apikey)=[^&]+/, "$1=***")}`);
    return asJson ? res.json() : res.text();
  }

  /* ── 1. KOPIS 오픈API (국내·내한) ───────────── */
  const KOPIS = "https://www.kopis.or.kr/openApi/restful/pblprfr";
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
  /* KOPIS 는 국내 아티스트의 해외 공연도 등록한다 (area === "해외") */
  const OVERSEAS = { 일본: ["japan", "일본"], 대만: ["asia", "대만"], 홍콩: ["asia", "홍콩"], 태국: ["asia", "태국"],
                     싱가포르: ["asia", "싱가포르"], 마카오: ["asia", "마카오"], 필리핀: ["asia", "필리핀"],
                     말레이시아: ["asia", "말레이시아"], 인도네시아: ["asia", "인도네시아"], 베트남: ["asia", "베트남"] };
  /* 공연 제목을 아티스트 / 투어명으로 나눈다: "쏜애플 콘서트: 나의 세기 [부산]" → 쏜애플 / 콘서트: 나의 세기 */
  const TRAILING_REGION = /\s*\[[^\]]*\]\s*$/;
  const SHOW_KIND = /\s(?=(?:단독\s?공연|전국투어|클럽\s?투어|월드투어|아시아\s?투어|팬\s?콘서트|팬미팅|내한공연|콘서트|리사이틀|공연|FAN\s?CONCERT|FANCON|CONCERT|WORLD\s?TOUR|ASIA\s?TOUR|TOUR|LIVE|SHOW|FESTIVAL))/i;
  const TRAILING_ORDINAL = /\s+\d+\s*(?:st|nd|rd|th)?$/i;
  /* 아티스트명 뒤에 붙는 수식어 ("자라 라슨 첫 단독" → "자라 라슨"). 떼어낸 말은 투어명 앞으로 옮긴다. */
  const TRAILING_MODIFIER = /\s+(첫\s*번째|첫|단독|솔로|앵콜|앙코르|ENCORE|SOLO|ASIA|WORLD|ARENA|DOME|STADIUM|JAPAN|GLOBAL)$/i;

  function splitKopisTitle(raw, city) {
    const t = raw.replace(TRAILING_REGION, "").trim();
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

      if (!detailed && used < MAX_SUBREQUESTS - 2) {
        try {
          const xml = await get(`${KOPIS}/${r.mt20id}?service=${keys.kopis}`);
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
      let category, country, city;
      if (r.area === "해외") {
        const hit = Object.keys(OVERSEAS).find(k => r.prfnm.includes(k) || (r.fcltynm || "").includes(k));
        if (!hit) continue;
        [category, country] = OVERSEAS[hit];
        const sub = r.prfnm.match(new RegExp(`\\[${hit}\\s+([^\\]]+)\\]`));
        city = (sub ? sub[1] : country).trim();
      } else {
        category = IS_VISIT.test(r.prfnm) ? "visit" : "domestic";
        country = "대한민국";
        city = (r.area || "").replace(SHORT_AREA, "") || r.area || "대한민국";
      }
      const { artist, tour } = splitKopisTitle(r.prfnm, city);

      out.push({
        id, auto: true, sourceName: "KOPIS", kopisDetail: detailed,
        period: dates.length > 1,          // 기간 공연 — 회차 수 미상
        artist, tour,
        category,
        country, city, venue: r.fcltynm,
        mapQuery: r.fcltynm,
        dates,
        doorsNote: doorsNote || "예매처 공지 참고",
        ticketOpen: null,
        /* KOPIS 는 오픈 시각을 주지 않는다. 예매 링크가 있으면 이미 판매 중으로 본다. */
        ticketStatus: r.prfstate === "공연완료" ? "종료" : vendor?.url ? "판매중" : "예정",
        price: price || "예매처 공지 참고",
        vendor: vendor?.url ? vendor
              : { name: "NOL 티켓", url: `https://tickets.interpark.com/search?keyword=${encodeURIComponent(r.prfnm)}` },
        otherVendors: others || [],
        goods: { note: "", url: null },
        tips: "",
        images: [normalizePoster(r.poster)].filter(Boolean),
        source: `https://www.kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=${r.mt20id}`,
        tags: []
      });
    }
    stats.kopis = { count: out.length, newDetails: fetched };
    return out;
  }

  /* ── 2. Ticketmaster Discovery API (아시아) ── */
  const TM_COUNTRIES = ["SG", "MY"];   // TM 운영국 중 아시아. JP·KR·TW·HK·TH 는 미운영
  const TM_KO = { SG: ["싱가포르", "싱가포르"], MY: ["말레이시아", "쿠알라룸푸르"] };

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
          out.push({
            id: `tm-${ev.id}`, auto: true, sourceName: "Ticketmaster",
            artist: ev._embedded?.attractions?.[0]?.name || ev.name,
            tour: ev.name,
            category: "asia",
            country: koCountry, city: v.city?.name || koCity, venue: v.name || "미정",
            mapQuery: [v.name, v.city?.name].filter(Boolean).join(" "),
            dates: [start],
            doorsNote: ev.dates?.start?.localTime ? `${ev.dates.start.localTime.slice(0, 5)} 시작` : "예매처 공지 참고",
            ticketOpen: ev.sales?.public?.startDateTime || null,   // ← 티켓 오픈 시각
            ticketStatus: st === "onsale" ? "판매중" : st === "offsale" ? "종료" : "예정",
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

  /* ── 3. 도쿄돔 공식 공연 일정 (요청 1회) ───── */
  const TD_URL = "https://www.tokyo-dome.co.jp/dome/event/schedule.html";
  const TD_STAY = [
    { name: "스이도바시 (水道橋)", note: "도보 3분 · JR 주오소부선" },
    { name: "이다바시·코라쿠엔 (飯田橋)", note: "도보 10분 · 지하철 4개 노선" },
    { name: "아키하바라 (秋葉原)", note: "JR 3정거장 · 숙소 선택지 많음" }
  ];
  /* 도쿄돔은 대형 공연에 イベント 태그를 달기도 해서(예: BIGBANG) 둘 다 받고 제목으로 거른다 */
  const TD_TAG = /c-txt-tag__item[^>]*>\s*(?:コンサート|イベント)/;
  const TD_MONTH = /^">(\d{4})年(\d{2})月/;
  const TD_DAY = /<span class="c-mod-calender__day">(\d{1,2})<\/span>/;
  const TD_LINK = /c-mod-calender__links[^>]*>\s*<a[^>]*>([\s\S]*?)<\/a>/;
  const TD_CAPTION = /<p class="c-txt-caption-01">([\s\S]*?)<\/p>/;
  const NOT_CONCERT = /WRESTLE|プロレス|野球|巨人|TOURNAMENT|トーナメント|ゲーム|GAME|フェア|展示|ダーツ|TOKYO DOME TOUR/i;

  function splitTitle(raw) {
    const t = raw.replace(/^20\d\d\s+/, "").trim();
    const jp = t.indexOf("「");                       // 「투어명」이면 그 앞이 아티스트
    if (jp > 0) return { artist: t.slice(0, jp).trim(), tour: t.slice(jp).replace(/[「」]/g, "").trim() };
    const i = t.search(/\s(?=(?:WORLD|DOME|ARENA|STADIUM|HALL|ASIA|JAPAN|LIVE|CONCERT|TOUR|ライブ|ツアー|公演))/i);
    return i > 0 ? { artist: t.slice(0, i).trim(), tour: t.slice(i).trim() } : { artist: t, tour: "TOKYO DOME" };
  }

  async function tokyodome() {
    const html = await get(TD_URL);
    const start = html.indexOf("c-ttl-set-calender");
    const end = html.lastIndexOf("</table>");
    if (start < 0 || end < 0) throw new Error("달력 영역을 찾지 못했습니다 (페이지 구조 변경?)");

    const byTitle = new Map();
    for (const section of html.slice(start, end).split("c-ttl-set-calender").slice(0)) {
      const mm = section.match(TD_MONTH);
      if (!mm) continue;
      const [, yy, mo] = mm;
      for (const row of section.split('<tr class="c-mod-calender__item">').slice(1)) {
        const day = (row.match(TD_DAY) || [])[1];
        if (!day) continue;
        const date = `${yy}-${mo}-${d2(day)}`;
        for (const block of row.split("c-mod-calender__detail-in").slice(1)) {
          if (!TD_TAG.test(block)) continue;
          const title = decode((block.match(TD_LINK) || [])[1] || "");
          if (!title || NOT_CONCERT.test(title)) continue;
          const caption = decode((block.match(TD_CAPTION) || [])[1] || "");
          const cur = byTitle.get(title) || { title, dates: [], caption };
          if (!cur.dates.includes(date)) cur.dates.push(date);
          if (!cur.caption && caption) cur.caption = caption;
          byTitle.set(title, cur);
        }
      }
    }

    const out = [...byTitle.values()].map(e => {
      const { artist, tour } = splitTitle(e.title);
      e.dates.sort();
      return {
        id: `td-${e.dates[0]}-${artist.replace(/[^\w가-힣ぁ-んァ-ヶ一-龠]/g, "").slice(0, 20) || "event"}`,
        auto: true, sourceName: "도쿄돔 공식",
        artist, tour,
        category: "japan",
        country: "일본", city: "도쿄", venue: "도쿄돔",
        mapQuery: "東京ドーム",
        dates: e.dates,
        doorsNote: e.caption || "공식 공지 참고",
        ticketOpen: null, ticketStatus: "예정",
        price: "예매처 공지 참고",
        vendor: { name: "이플러스 (e+)", url: `https://eplus.jp/sf/search?keyword=${encodeURIComponent(artist)}` },
        otherVendors: [{ name: "티켓피아", url: "https://t.pia.jp/" }, { name: "로손티켓", url: "https://l-tike.com/" }],
        goods: { note: "", url: null },
        stay: { areas: TD_STAY },
        images: [],            // 도쿄돔 달력 페이지에는 공연 이미지가 없다
        tips: "",
        source: TD_URL,
        tags: ["돔"]
      };
    });
    stats.tokyodome = { count: out.length };
    return out;
  }

  /* ── 실행 · 병합 ────────────────────────────── */
  const SOURCES = { tokyodome, ticketmaster, kopis };   // 요청이 적은 순서 = 한도에 안전
  let all = [];
  for (const [name, fn] of Object.entries(SOURCES)) {
    if (only && only !== name) continue;
    try {
      log(` → ${name}`);
      all.push(...await fn());
    } catch (e) {
      errors.push(`${name}: ${e.message}`);
      log(`⚠️  ${name} 실패: ${e.message}`);
    }
  }

  /* 한 소스만 돌린 경우, 나머지 소스의 이전 결과는 유지 */
  if (only) {
    const prefix = { kopis: "kopis-", ticketmaster: "tm-", tokyodome: "td-" }[only];
    all = [...previous.filter(c => !c.id.startsWith(prefix)), ...all];
  }
  /* 실패한 소스가 있으면 그 소스의 이전 결과를 살려 둔다 */
  else if (errors.length) {
    const got = new Set(all.map(c => c.id.split("-")[0]));
    all = [...previous.filter(c => !got.has(c.id.split("-")[0])), ...all];
  }

  const today = todayISO();
  const seen = new Set();
  const events = all
    .filter(c => c.dates?.length && c.dates[c.dates.length - 1] >= today)
    .filter(c => (seen.has(c.id) ? false : seen.add(c.id)))
    .sort((a, b) => a.dates[0].localeCompare(b.dates[0]));

  stats.subrequests = used;
  return { events, stats, errors };
}
