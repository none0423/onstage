#!/usr/bin/env node
/* data/concerts.js 형식 검사기 — node tools/check.mjs */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = readFileSync(join(root, "data/concerts.js"), "utf8");

let CONCERTS, DATA_UPDATED;
try {
  ({ CONCERTS, DATA_UPDATED } = new Function(src + "; return { CONCERTS, DATA_UPDATED };")());
} catch (e) {
  console.error("❌ 문법 오류 — data/concerts.js 를 파싱할 수 없습니다.\n  ", e.message);
  process.exit(1);
}

const CATS = ["japan", "visit", "asia", "domestic"];
/* data/genres.js 의 장르 키 — 데이터에 genre 를 직접 쓸 때 오탈자를 잡는다 */
const GENRE_KEYS = new Set(
  (new Function(readFileSync(join(root, "data/genres.js"), "utf8") + "; return GENRES;")() || [])
    .map(g => g.key));   // 'soon' 은 가상 필터라 데이터 값이 아니다
/* app.js 의 AIRPORT 맵에 등록된 도시 — 해외 공연의 항공권 블록 생성 여부를 함께 검사 */
const AIRPORTS = new Set(
  (readFileSync(join(root, "assets/app.js"), "utf8")
    .match(/const AIRPORT = \{([\s\S]*?)\};/) || [, ""])[1]
    .match(/"([^"]+)":\s*"[A-Z]{3}"/g) || []
).size
  ? new Set([...(readFileSync(join(root, "assets/app.js"), "utf8")
      .match(/const AIRPORT = \{([\s\S]*?)\};/) || [, ""])[1]
      .matchAll(/"([^"]+)":\s*"[A-Z]{3}"/g)].map(m => m[1]))
  : new Set();
const STATUS = ["예정", "판매중", "매진", "종료"];
const errors = [], warns = [], ids = new Set();
let noImage = 0;

for (const [i, c] of CONCERTS.entries()) {
  const at = `[${i}] ${c.artist ?? "(artist 없음)"}`;
  for (const f of ["id", "artist", "tour", "category", "country", "city", "venue", "dates", "vendor"])
    if (c[f] == null) errors.push(`${at}: 필수 항목 '${f}' 누락`);
  if (c.id) { if (ids.has(c.id)) errors.push(`${at}: id 중복 '${c.id}'`); ids.add(c.id); }
  if (c.category && !CATS.includes(c.category))
    errors.push(`${at}: category '${c.category}' 는 ${CATS.join("|")} 중 하나여야 합니다`);
  if (c.ticketStatus && !STATUS.includes(c.ticketStatus))
    errors.push(`${at}: ticketStatus '${c.ticketStatus}' 는 ${STATUS.join("|")} 중 하나여야 합니다`);
  if (!Array.isArray(c.dates) || !c.dates.length) errors.push(`${at}: dates 는 비어 있지 않은 배열이어야 합니다`);
  else {
    for (const d of c.dates) if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) errors.push(`${at}: 잘못된 날짜 '${d}' (YYYY-MM-DD)`);
    if ([...c.dates].sort().join() !== c.dates.join()) warns.push(`${at}: dates 가 오름차순이 아닙니다`);
  }
  if (c.ticketOpen) {
    if (!/[+-]\d{2}:\d{2}$|Z$/.test(c.ticketOpen)) errors.push(`${at}: ticketOpen 에 시간대가 없습니다 (예: +09:00)`);
    if (isNaN(new Date(c.ticketOpen))) errors.push(`${at}: ticketOpen 파싱 실패 '${c.ticketOpen}'`);
  } else if (!["판매중", "매진", "종료"].includes(c.ticketStatus)) {
    warns.push(`${at}: ticketOpen 없음 → '오픈일 미정'으로 표시됩니다 (ticketStatus를 '판매중'으로 두면 '예매 진행 중'으로 표시)`);
  }
  if (c.vendor && !/^https?:\/\//.test(c.vendor.url || "")) errors.push(`${at}: vendor.url 이 http(s) 주소가 아닙니다`);
  for (const v of c.otherVendors || [])
    if (!/^https?:\/\//.test(v.url || "")) errors.push(`${at}: otherVendors '${v.name}' url 오류`);
  if (!c.mapQuery) warns.push(`${at}: mapQuery 없음 → '${c.venue} ${c.city}' 로 숙소 검색`);
  if (c.stay) {
    if (!Array.isArray(c.stay.areas) || !c.stay.areas.length)
      errors.push(`${at}: stay.areas 는 비어 있지 않은 배열이어야 합니다`);
    else for (const a of c.stay.areas)
      if (!a || !a.name || !a.note) errors.push(`${at}: stay.areas 항목에 name/note 가 필요합니다`);
  } else warns.push(`${at}: stay 없음 → 공연장 이름으로만 숙소를 검색합니다`);
  if (c.source && !/^https?:\/\//.test(c.source)) errors.push(`${at}: source 는 http(s) 주소여야 합니다`);
  if (c.images !== undefined) {
    if (!Array.isArray(c.images)) errors.push(`${at}: images 는 배열이어야 합니다`);
    else for (const u of c.images)
      /* http 이미지는 https 사이트에서 혼합 콘텐츠로 차단된다 */
      if (!/^https:\/\//.test(u)) errors.push(`${at}: images 는 https 주소여야 합니다 — '${u}'`);
  } else noImage++;
  if (c.genre && !GENRE_KEYS.has(c.genre))
    errors.push(`${at}: genre '${c.genre}' 는 ${[...GENRE_KEYS].join("|")} 중 하나여야 합니다`);
  if (!c.source) warns.push(`${at}: source 없음 → 카드에 출처 링크가 표시되지 않습니다`);
  if (c.country !== "대한민국" && !AIRPORTS.has(c.city))
    warns.push(`${at}: '${c.city}' 가 app.js AIRPORT 목록에 없어 항공권 블록이 생성되지 않습니다`);
}

if (!/^\d{4}-\d{2}-\d{2}$/.test(DATA_UPDATED || "")) errors.push("DATA_UPDATED 형식 오류 (YYYY-MM-DD)");
/* 이미지는 자동 수집분에서 물려받을 수 있으므로 항목마다 경고하지 않고 한 줄로 요약한다 */
if (noImage) warns.push(`images 없는 수동 공연 ${noImage}건 → 자동 수집분에 같은 공연이 있으면 포스터를 물려받고, 없으면 그라디언트로 표시됩니다`);

/* ── 자동 수집분(data/feed.js)은 화면을 깨뜨리는 필드만 검사한다 ── */
let FEED = [];
const feedPath = join(root, "data/feed.js");
if (existsSync(feedPath)) {
  try {
    FEED = new Function(readFileSync(feedPath, "utf8") + "; return typeof FEED !== 'undefined' ? FEED : [];")() || [];
  } catch (e) {
    errors.push(`data/feed.js 파싱 실패: ${e.message}`);
  }
  const fids = new Set();
  for (const [i, c] of FEED.entries()) {
    const at = `feed[${i}] ${c?.artist ?? "?"}`;
    if (!c?.id) { errors.push(`${at}: id 없음`); continue; }
    if (fids.has(c.id)) errors.push(`${at}: id 중복 '${c.id}'`);
    fids.add(c.id);
    if (!c.artist || !c.tour) errors.push(`${at}: artist/tour 누락`);
    if (!Array.isArray(c.dates) || !c.dates.length || c.dates.some(d => !/^\d{4}-\d{2}-\d{2}$/.test(d)))
      errors.push(`${at}: dates 형식 오류`);
    if (!CATS.includes(c.category)) errors.push(`${at}: category '${c.category}' 오류`);
    if (!/^https?:\/\//.test(c.vendor?.url || "")) errors.push(`${at}: vendor.url 오류`);
    if (c.ticketOpen && isNaN(new Date(c.ticketOpen))) errors.push(`${at}: ticketOpen 파싱 실패`);
    if (c.images && (!Array.isArray(c.images) || c.images.some(u => !/^https:\/\//.test(u))))
      errors.push(`${at}: images 는 https 주소 배열이어야 합니다`);
  }
}

warns.forEach(w => console.log("⚠️ ", w));
errors.forEach(e => console.log("❌ ", e));
console.log(`\n수동 ${CONCERTS.length}건 · 자동 ${FEED.length}건 · 오류 ${errors.length} · 경고 ${warns.length}`);
if (!errors.length) console.log("✅ 형식 이상 없습니다.");
process.exit(errors.length ? 1 : 0);
