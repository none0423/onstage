#!/usr/bin/env node
/* ============================================================
   일본 공연장 파서 회귀 테스트

   tools/fixtures/ 에 저장한 실제 페이지를 fetch 대신 먹여 수집 로직을 그대로
   돌리고, 각 공연장이 예상 건수 이상을 정확한 형태로 내는지 확인합니다.
   공연장 페이지가 리뉴얼되면 실전에서는 0건이 조용히 이월되므로, 파서를 고칠 때
   기존 페이지에서 깨지지 않았는지 여기서 먼저 잡습니다.

     node tools/test-parsers.mjs

   픽스처를 새로 뜨면 FIXTURE_DATE 와 MIN 값을 함께 갱신하세요.
   ============================================================ */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { collectAll } from "../worker/src/collect.js";

const HERE = dirname(fileURLToPath(import.meta.url));
const FIX = name => readFileSync(join(HERE, "fixtures", name), "utf8");

/* 픽스처를 뜬 날. 수집 로직은 이 날짜 기준으로 '지난 공연'을 거르므로 고정해야
   1년 뒤에도 같은 결과가 나온다. */
const FIXTURE_DATE = "2026-09-14";

/* 공연장별 최소 건수 — 픽스처를 뜬 시점의 실제 건수보다 조금 낮게 잡는다.
   월·연 단위 공연장은 같은 픽스처가 반복 반환돼 병합되므로 한 페이지 분량이 기준이다.
   ssa 는 2027-03 까지 개수 휴관이라 0 이 정상 — 파서가 죽지 않는 것만 본다. */
const MIN = { td: 15, kar: 8, joh: 2, kyo: 2, yka: 3, ssa: 0, vdn: 5, fuk: 8 };

const ROUTES = [
  [/tokyo-dome\.co\.jp/, "tokyodome.html"],
  [/k-arena\.com/, "karena.html"],
  [/osaka-johall\.com/, "johall.html"],
  [/kyoceradome-osaka\.jp/, "kyocera.html"],
  [/yokohama-arena\.co\.jp/, "yokohama.json"],
  [/saitama-arena\.co\.jp/, "saitama.html"],
  [/nagoya-dome\.co\.jp/, "vantelin.html"],
  [/softbankhawks\.co\.jp/, "paypaydome.html"]
];

/* 네트워크 대신 픽스처를 돌려준다. 모르는 URL 은 실패시켜 테스트가 밖으로 나가지 않게 한다. */
globalThis.fetch = async url => {
  const hit = ROUTES.find(([re]) => re.test(String(url)));
  if (!hit) return new Response("not in fixtures: " + url, { status: 404 });
  return new Response(FIX(hit[1]), { status: 200, headers: { "content-type": "text/html; charset=utf-8" } });
};

const { events, stats, errors, warnings } = await collectAll({ only: "jpvenues", today: FIXTURE_DATE });

/* ── Live Nation Korea: 홈 → 상세 2장, KOPIS 항목과의 조인까지 ──
   홈 픽스처에는 15개 공연이 있지만 상세 픽스처는 두 장뿐이라, 모르는 슬러그는 404 로 돌려
   '실패해도 나머지는 산다'는 경로도 함께 지난다. */
const LN_ROUTES = [
  [/livenation\.kr\/?$/, "livenation-home.html"],
  [/livenation\.kr\/slowdive-/, "livenation-slowdive.html"],
  [/livenation\.kr\/yung-kai-/, "livenation-yungkai.html"]
];
const lnFetch = async url => {
  const hit = LN_ROUTES.find(([re]) => re.test(String(url)));
  if (!hit) return new Response("not in fixtures: " + url, { status: 404 });
  return new Response(FIX(hit[1]), { status: 200, headers: { "content-type": "text/html; charset=utf-8" } });
};
/* KOPIS 가 이미 가진 슬로우다이브(한글 표기, 오픈 시각 없음) — 상품 번호 26012276 으로 이어져야 한다 */
const fakeKopis = {
  id: "kopis-PF299778", auto: true, artist: "슬로우다이브", tour: "내한공연", category: "visit",
  country: "대한민국", city: "서울", venue: "KBS스포츠월드(아레나)", dates: ["2026-12-08"],
  ticketOpen: null, price: "예매처 공지 참고",
  vendor: { name: "놀유니버스", url: "http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=26012276" },
  otherVendors: [], images: [], source: "https://kopis.or.kr/", tags: []
};
const realFetch = globalThis.fetch;
globalThis.fetch = lnFetch;
/* 처음 보는 슬러그 우선이라 알파벳순으로 앞선 것들이 먼저 잡힌다 → state 로 슬로우다이브·영 카이만 '안 읽은 것'으로 남긴다 */
const seenAll = {};
for (const sl of FIX("livenation-home.html").matchAll(/href="\/([a-z0-9-]+-tickets-adp\d+)"/g))
  if (!/^(slowdive|yung-kai)-/.test(sl[1])) seenAll[sl[1]] = new Date().toISOString();
const ln = await collectAll({ only: "livenation", today: FIXTURE_DATE, previous: [fakeKopis], state: { livenation: seenAll } });
globalThis.fetch = realFetch;

let failed = 0;
const fail = m => { failed++; console.log("❌", m); };
const ok = m => console.log("✅", m);

/* 1. 소스 자체가 죽지 않았다 */
if (errors.length) fail(`수집 오류: ${errors.join(" / ")}`); else ok("오류 없음");

/* 2. 공연장별 건수 */
for (const [key, min] of Object.entries(MIN)) {
  const n = stats.jpvenues?.[key] ?? 0;
  if (n < min) fail(`${key}: ${n}건 (최소 ${min})`); else ok(`${key}: ${n}건`);
}

/* 3. 항목 형태 */
const ISO = /^\d{4}-\d{2}-\d{2}$/;
const bad = [];
for (const e of events) {
  if (!e.id?.startsWith("jp-")) bad.push(`${e.id}: id 접두사`);
  if (!e.artist?.trim()) bad.push(`${e.id}: 아티스트 없음`);
  if (!e.dates?.length || !e.dates.every(d => ISO.test(d))) bad.push(`${e.id}: 날짜 형식`);
  if (!/^https?:\/\//.test(e.vendor?.url || "")) bad.push(`${e.id}: 예매처 URL`);
  if (e.vendor.name === "공식 공연 페이지" && /eplus\.jp/.test(e.vendor.url)) bad.push(`${e.id}: 공식 페이지라면서 e+ 검색`);
  const ov = e.otherVendors || [];
  if (ov.some(v => !/keyword=|kw=/.test(v.url))) bad.push(`${e.id}: 보조 예매처가 검색이 아님`);
}
if (bad.length) bad.slice(0, 10).forEach(fail); else ok(`${events.length}건 모두 형태 정상`);

/* 4. 예매처 링크 — 네 곳 모두 공연별 페이지를 내야 한다 */
const noLink = events.filter(e => e.vendor.name !== "공식 공연 페이지");
if (noLink.length) fail(`공식 페이지 없이 검색으로 떨어진 항목 ${noLink.length}건: ${noLink.slice(0, 3).map(e => e.id).join(", ")}`);
else ok("전 항목 공연별 공식 페이지 연결");

/* 5. 제목 분리 — 일반명사가 아티스트로 남으면 안 된다 */
const generic = events.filter(e => /^(?:LIVE|CONCERT|TOUR|ライブ|公演)$/i.test(e.artist.trim()));
if (generic.length) fail(`일반명사 아티스트: ${generic.map(e => e.id).join(", ")}`); else ok("일반명사 아티스트 없음");

/* 5-b. 제목 분리 — 실제로 빗나갔던 사례들이 다시 깨지지 않는지 */
const byArtist = new Map(events.map(e => [e.artist, e]));
const expectArtist = [
  ["Number_i", "日本公演「Number_i LIVE TOUR No.III」→ Number_i (후쿠오카)"],
  ["BIGBANG", "BIGBANG 2026 WORLD TOUR → BIGBANG (연도는 투어명으로)"],
  ["Bruno Mars", "Bruno Mars - The Romantic Tour → 대시 앞이 아티스트"],
  ["君と歩いた青春2026", "LIVE「君と歩いた青春2026」→ 공연명이 아티스트 (오사카성홀)"]
];
for (const [name, why] of expectArtist) {
  if (byArtist.has(name)) ok(`제목 분리: ${why}`); else fail(`제목 분리 회귀: ${why} — '${name}' 이 없음`);
}

/* 7. Live Nation Korea — 파싱과 KOPIS 조인 */
if (ln.errors.length) fail(`Live Nation 오류: ${ln.errors.join(" / ")}`);
const lnStat = ln.stats.livenation || {};
if (lnStat.slugs !== 15) fail(`LN 홈 슬러그 ${lnStat.slugs} (기대 15)`); else ok("LN 홈: 공연 15개");
if (lnStat.fetched !== 2) fail(`LN 상세 ${lnStat.fetched}장 읽음 (기대 2)`); else ok("LN 상세: 실행당 2장");
const yung = ln.events.find(e => e.id.startsWith("ln-yung-kai-"));
if (!yung) fail("LN: yung kai 서울 회차가 없음");
else if (yung.ticketOpen !== "2026-09-15T12:00:00+09:00") fail(`LN: yung kai 오픈 시각 ${yung.ticketOpen} (기대 2026-09-15T12:00:00+09:00 — UTC 03:00 → KST)`);
else ok(`LN: yung kai 11-16 명화 라이브홀 · 오픈 ${yung.ticketOpen.slice(5, 16)}`);
const slow = ln.events.find(e => e.id === "kopis-PF299778");
if (!slow) fail("LN 조인: KOPIS 슬로우다이브 항목이 사라짐");
else if (slow.ticketOpen !== "2026-08-28T11:00:00+09:00") fail(`LN 조인: KOPIS 슬로우다이브에 오픈 시각이 안 채워짐 (${slow.ticketOpen})`);
else if (ln.events.some(e => e.id.startsWith("ln-slowdive-"))) fail("LN 조인: 이어진 뒤에도 LN 슬로우다이브 항목이 남아 중복");
else if (!slow.images?.length) fail("LN 조인: 이미지가 안 채워짐");
else ok("LN 조인: 상품 번호 26012276 으로 KOPIS 슬로우다이브에 오픈 시각·이미지 채움, LN 항목 제거");
if (lnStat.enriched !== 1) fail(`LN 보강 수 ${lnStat.enriched} (기대 1)`);

/* 6. 수집기 자체 경고는 여기선 0이어야 한다(이전 상태 없이 한 번 돈 것이므로) */
if (warnings.length) fail(`경고: ${warnings.join(" / ")}`); else ok("수집기 경고 없음");

console.log(failed ? `\n${failed}개 실패` : "\n파서 회귀 테스트 통과");
process.exit(failed ? 1 : 0);
