#!/usr/bin/env node
/* ============================================================
   ON STAGE 자동 수집기 — data/feed.js 를 생성합니다.

     node tools/collect.mjs                 전체 수집
     node tools/collect.mjs --only=kopis    한 소스만
     node tools/collect.mjs --debug         원본 응답을 tools/.debug/ 에 저장

   환경변수(없으면 해당 소스만 건너뜁니다)
     KOPIS_KEY          https://www.kopis.or.kr 오픈API 키   (국내·내한)
     TICKETMASTER_KEY   https://developer.ticketmaster.com   (싱가포르·말레이시아)

   크롤링이 아니라 공식 API를 씁니다. 예외는 도쿄돔 공식 공연 일정
   페이지 1건으로, 실행당 요청 1회뿐입니다.
   ============================================================ */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const FEED_PATH = join(ROOT, "data/feed.js");
const UA = "onstage-collector/1.0 (personal concert dashboard; 10 users)";

const args = process.argv.slice(2);
const only = (args.find(a => a.startsWith("--only=")) || "").split("=")[1] || null;
const DEBUG = args.includes("--debug");

const log = (...m) => console.log(...m);
const warn = (...m) => console.log("⚠️ ", ...m);

/* ── 공통 유틸 ───────────────────────────────── */
const d2 = n => String(n).padStart(2, "0");
const todayISO = () => new Date().toISOString().slice(0, 10);
function shiftISO(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}
const compact = s => String(s || "").replace(/\s+/g, " ").trim();
const decode = s => compact(s)
  .replace(/<[^>]+>/g, "")
  .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ")
  .replace(/&ldquo;|&rdquo;/g, '"').replace(/&lsquo;|&rsquo;/g, "'")
  .replace(/&hellip;/g, "…").replace(/&mdash;/g, "—").replace(/&ndash;/g, "–")
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));

async function get(url, { json = false } = {}) {
  const res = await fetch(url, { headers: { "User-Agent": UA, Accept: json ? "application/json" : "*/*" }, signal: AbortSignal.timeout(25000) });
  if (!res.ok) throw new Error(`HTTP ${res.status} — ${url.replace(/(service|apikey)=[^&]+/, "$1=***")}`);
  return json ? res.json() : res.text();
}
function dumpDebug(name, body) {
  if (!DEBUG) return;
  const dir = join(ROOT, "tools/.debug");
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, name), typeof body === "string" ? body : JSON.stringify(body, null, 2));
  log(`   · 원본 저장 tools/.debug/${name}`);
}

/* 얕은 XML에서 태그 값 뽑기 (KOPIS 응답 전용) */
const xTag = (xml, name) => {
  const m = xml.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`));
  return m ? decode(m[1].replace(/^\s*<!\[CDATA\[/, "").replace(/\]\]>\s*$/, "")) : "";
};
const xBlocks = (xml, name) =>
  [...xml.matchAll(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`, "g"))].map(m => m[1]);

/* 이전 수집 결과 — 상세 조회를 아낀다 */
function loadPrevious() {
  if (!existsSync(FEED_PATH)) return [];
  try {
    const src = readFileSync(FEED_PATH, "utf8");
    return new Function(src + "; return typeof FEED !== 'undefined' ? FEED : [];")() || [];
  } catch { return []; }
}
const prev = loadPrevious();
const prevById = new Map(prev.map(c => [c.id, c]));

/* ── 소스 1. KOPIS 오픈API (국내·내한) ───────── */
const KOPIS_LIST = "https://www.kopis.or.kr/openApi/restful/pblprfr";
/** 공연장 규모가 큰 대중음악 공연만 남기기 위한 최소 필터 */
const BIG_VENUE = /돔|아레나|체조경기장|경기장|스타디움|킨텍스|월드컵|올림픽|엑스코|벡스코|인스파이어|핸드볼|장충|올림픽홀|블루스퀘어|예스24|무신사|명화|악스|AX/i;

async function collectKopis() {
  const key = process.env.KOPIS_KEY;
  if (!key) { warn("KOPIS_KEY 없음 → 국내·내한 수집 건너뜀"); return []; }

  const stdate = todayISO().replace(/-/g, "");
  const eddate = shiftISO(365).replace(/-/g, "");
  const out = [];

  for (let page = 1; page <= 10; page++) {
    const url = `${KOPIS_LIST}?service=${key}&stdate=${stdate}&eddate=${eddate}&cpage=${page}&rows=100&shcate=CCCD`;
    const xml = await get(url);
    if (page === 1) dumpDebug("kopis-list.xml", xml);
    const rows = xBlocks(xml, "db");
    if (!rows.length) break;

    for (const r of rows) {
      const id = xTag(r, "mt20id");
      const name = xTag(r, "prfnm");
      const venue = xTag(r, "fcltynm");
      const from = xTag(r, "prfpdfrom").replace(/\./g, "-");
      const to = xTag(r, "prfpdto").replace(/\./g, "-");
      if (!id || !name || !from || !BIG_VENUE.test(venue)) continue;
      out.push({
        _id: id, name, venue, from, to,
        area: xTag(r, "area"),
        state: xTag(r, "prfstate"),
        poster: xTag(r, "poster")
      });
    }
    if (rows.length < 100) break;
  }

  /* 상세는 처음 보는 공연만 조회한다 (이전 수집분은 그대로 재사용) */
  const results = [];
  let fetched = 0;
  for (const e of out) {
    const id = `kopis-${e._id}`;
    const cached = prevById.get(id);
    let price = cached?.price, vendor = cached?.vendor, doorsNote = cached?.doorsNote;

    if (!cached) {
      try {
        const xml = await get(`${KOPIS_LIST}/${e._id}?service=${key}`);
        if (fetched === 0) dumpDebug("kopis-detail.xml", xml);
        price = xTag(xml, "pcseguidance") || "예매처 공지 참고";
        doorsNote = xTag(xml, "dtguidance") || "";
        const rel = xBlocks(xml, "relate")[0];
        if (rel) vendor = { name: xTag(rel, "relatenm"), url: xTag(rel, "relateurl") };
        fetched++;
        await new Promise(r => setTimeout(r, 120));   // 예의상 간격
      } catch (err) { warn(`KOPIS 상세 실패 ${e._id}: ${err.message}`); }
    }

    const dates = [];
    for (let d = new Date(e.from + "T00:00:00"), end = new Date(e.to + "T00:00:00"); d <= end; d.setDate(d.getDate() + 1)) {
      dates.push(`${d.getFullYear()}-${d2(d.getMonth() + 1)}-${d2(d.getDate())}`);
      if (dates.length >= 12) break;
    }

    results.push({
      id, auto: true, sourceName: "KOPIS",
      artist: e.name, tour: "KOPIS 등록 공연",
      category: /내한|IN SEOUL|IN KOREA|WORLD TOUR/i.test(e.name) ? "visit" : "domestic",
      country: "대한민국", city: e.area || "대한민국", venue: e.venue,
      mapQuery: e.venue,
      dates,
      doorsNote: doorsNote || "예매처 공지 참고",
      ticketOpen: null,
      ticketStatus: e.state === "공연중" ? "판매중" : "예정",
      price: price || "예매처 공지 참고",
      vendor: vendor?.url ? vendor : { name: "NOL 티켓", url: `https://tickets.interpark.com/search?keyword=${encodeURIComponent(e.name)}` },
      otherVendors: [],
      goods: { note: "", url: null },
      tips: "",
      source: `https://www.kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=${e._id}`,
      tags: []
    });
  }
  log(`   KOPIS ${results.length}건 (상세 신규 조회 ${fetched}건)`);
  return results;
}

/* ── 소스 2. Ticketmaster Discovery API (아시아) ── */
const TM_COUNTRIES = ["SG", "MY"];   // Ticketmaster 운영국 중 아시아. JP·KR·TW·HK·TH는 미운영
const TM_COUNTRY_KO = { SG: ["싱가포르", "싱가포르"], MY: ["말레이시아", "쿠알라룸푸르"] };

async function collectTicketmaster() {
  const key = process.env.TICKETMASTER_KEY;
  if (!key) { warn("TICKETMASTER_KEY 없음 → 아시아 수집 건너뜀"); return []; }

  const results = [];
  for (const cc of TM_COUNTRIES) {
    for (let page = 0; page < 3; page++) {
      const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${key}`
        + `&countryCode=${cc}&classificationName=Music&size=100&page=${page}&sort=date,asc`
        + `&startDateTime=${todayISO()}T00:00:00Z&endDateTime=${shiftISO(365)}T00:00:00Z`;
      let data;
      try { data = await get(url, { json: true }); }
      catch (err) { warn(`Ticketmaster ${cc} 실패: ${err.message}`); break; }
      if (page === 0) dumpDebug(`ticketmaster-${cc}.json`, data);

      const events = data?._embedded?.events || [];
      for (const ev of events) {
        const v = ev._embedded?.venues?.[0] || {};
        const start = ev.dates?.start?.localDate;
        if (!start) continue;
        const [koCountry, koCityFallback] = TM_COUNTRY_KO[cc] || [cc, cc];
        const open = ev.sales?.public?.startDateTime || null;    // 티켓 오픈 시각
        const pr = ev.priceRanges?.[0];
        results.push({
          id: `tm-${ev.id}`, auto: true, sourceName: "Ticketmaster",
          artist: ev._embedded?.attractions?.[0]?.name || ev.name,
          tour: ev.name,
          category: "asia",
          country: koCountry, city: v.city?.name || koCityFallback, venue: v.name || "미정",
          mapQuery: [v.name, v.city?.name].filter(Boolean).join(" "),
          dates: [start],
          doorsNote: ev.dates?.start?.localTime ? `${ev.dates.start.localTime.slice(0, 5)} 시작` : "예매처 공지 참고",
          ticketOpen: open,
          ticketStatus: ev.dates?.status?.code === "onsale" ? "판매중"
                      : ev.dates?.status?.code === "offsale" ? "종료" : "예정",
          price: pr ? `${pr.currency} ${pr.min} ~ ${pr.max}` : "예매처 공지 참고",
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
  log(`   Ticketmaster ${results.length}건`);
  return results;
}

/* ── 소스 3. 도쿄돔 공식 공연 일정 (요청 1회) ── */
const TOKYO_DOME_URL = "https://www.tokyo-dome.co.jp/dome/event/schedule.html";
const TD_STAY = [
  { name: "스이도바시 (水道橋)", note: "도보 3분 · JR 주오소부선" },
  { name: "이다바시·코라쿠엔 (飯田橋)", note: "도보 10분 · 지하철 4개 노선" },
  { name: "아키하바라 (秋葉原)", note: "JR 3정거장 · 숙소 선택지 많음" }
];

/* 공연이 아닌 도쿄돔 이벤트를 제목으로 걸러낸다 */
const NOT_CONCERT = /WRESTLE|\u30d7\u30ed\u30ec\u30b9|\u91ce\u7403|\u5de8\u4eba|TOURNAMENT|\u30c8\u30fc\u30ca\u30e1\u30f3\u30c8|\u30b2\u30fc\u30e0|GAME|\u30d5\u30a7\u30a2|\u5c55\u793a|\u30c0\u30fc\u30c4|TOKYO DOME TOUR/i;

function splitTitle(raw) {
  const t = raw.replace(/^20\d\d\s+/, "").trim();          // 앞에 붙은 연도 제거
  const jp = t.indexOf("\u300c");                            // 「투어명」 형태면 그 앞이 아티스트
  if (jp > 0) return { artist: t.slice(0, jp).trim(), tour: t.slice(jp).replace(/[\u300c\u300d]/g, "").trim() };
  const i = t.search(/\s(?=(?:WORLD|DOME|ARENA|STADIUM|HALL|ASIA|JAPAN|LIVE|CONCERT|TOUR|\u30e9\u30a4\u30d6|\u30c4\u30a2\u30fc|\u516c\u6f14))/i);
  return i > 0 ? { artist: t.slice(0, i).trim(), tour: t.slice(i).trim() } : { artist: t, tour: "TOKYO DOME" };
}

async function collectTokyoDome() {
  let html;
  try { html = await get(TOKYO_DOME_URL); }
  catch (err) { warn(`도쿄돔 실패: ${err.message}`); return []; }
  dumpDebug("tokyodome.html", html);

  /* 월 섹션 → 일자 행 → 콘서트 태그가 붙은 항목만 */
  const months = [...html.matchAll(/<p class="c-ttl-set-calender">(\d{4})年(\d{2})月<\/p>([\s\S]*?)(?=<p class="c-ttl-set-calender">|<\/main>)/g)];
  const byTitle = new Map();

  for (const [, yy, mm, body] of months) {
    for (const row of body.split(/<tr class="c-mod-calender__item">/).slice(1)) {
      const day = (row.match(/<span class="c-mod-calender__day">(\d{1,2})<\/span>/) || [])[1];
      if (!day) continue;
      const date = `${yy}-${mm}-${d2(day)}`;
      for (const block of row.split(/c-mod-calender__detail-in/).slice(1)) {
        /* 도쿄돔은 대형 공연도 イベント 태그를 다는 경우가 있어(예: BIGBANG) 둘 다 받고
           명백히 공연이 아닌 것만 제목으로 걸러낸다. 野球·スポーツ 태그는 애초에 제외. */
        if (!/c-txt-tag__item[^>]*>\s*(?:\u30b3\u30f3\u30b5\u30fc\u30c8|\u30a4\u30d9\u30f3\u30c8)/.test(block)) continue;
        const a = block.match(/c-mod-calender__links[^>]*>\s*<a[^>]*>([\s\S]*?)<\/a>/);
        const title = decode(a?.[1] || "");
        if (!title) continue;
        if (NOT_CONCERT.test(title)) continue;
        const caption = decode((block.match(/<p class="c-txt-caption-01">([\s\S]*?)<\/p>/) || [])[1] || "");
        const cur = byTitle.get(title) || { title, dates: [], caption };
        if (!cur.dates.includes(date)) cur.dates.push(date);
        if (!cur.caption && caption) cur.caption = caption;
        byTitle.set(title, cur);
      }
    }
  }

  const results = [...byTitle.values()].map(e => {
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
      tips: "",
      source: TOKYO_DOME_URL,
      tags: ["돔"]
    };
  });
  log(`   도쿄돔 ${results.length}건`);
  return results;
}

/* ── 실행 ───────────────────────────────────── */
const SOURCES = {
  kopis: collectKopis,
  ticketmaster: collectTicketmaster,
  tokyodome: collectTokyoDome
};

log(`ON STAGE 수집 시작 · ${new Date().toISOString()}`);
let all = [];
let failed = 0;
for (const [name, fn] of Object.entries(SOURCES)) {
  if (only && only !== name) continue;
  log(` → ${name}`);
  try { all.push(...await fn()); }
  catch (err) { failed++; warn(`${name} 전체 실패: ${err.message}`); }
}

/* 이번에 돌리지 않은 소스의 이전 결과는 유지 */
if (only) {
  const keep = prev.filter(c => !all.some(n => n.id === c.id) && !c.id.startsWith(({ kopis: "kopis-", ticketmaster: "tm-", tokyodome: "td-" })[only]));
  all = [...keep, ...all];
}

/* 지난 공연 제거 + id 중복 제거 + 날짜순 */
const today = todayISO();
const seen = new Set();
all = all
  .filter(c => c.dates?.length && c.dates[c.dates.length - 1] >= today)
  .filter(c => (seen.has(c.id) ? false : seen.add(c.id)))
  .sort((a, b) => a.dates[0].localeCompare(b.dates[0]));

if (!all.length && failed) {
  console.error("❌ 모든 소스가 실패했습니다. 기존 data/feed.js 를 유지합니다.");
  process.exit(1);
}

const body = `/* 자동 생성 파일 — 직접 수정하지 마세요.
   생성: node tools/collect.mjs  (GitHub Actions 가 1시간마다 실행)
   손으로 관리하는 공연은 data/concerts.js 에 넣으면 이 파일보다 우선합니다. */

const FEED_UPDATED = ${JSON.stringify(new Date().toISOString())};

const FEED = ${JSON.stringify(all, null, 2)};
`;

const before = existsSync(FEED_PATH) ? readFileSync(FEED_PATH, "utf8") : "";
const strip = s => s.replace(/const FEED_UPDATED = "[^"]*";/, "");   // 타임스탬프는 비교에서 제외
if (strip(before) === strip(body)) {
  log(`\n변경 없음 · ${all.length}건 (커밋하지 않습니다)`);
} else {
  writeFileSync(FEED_PATH, body);
  log(`\n✅ data/feed.js 갱신 · ${all.length}건`);
}
