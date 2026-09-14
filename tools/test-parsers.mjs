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

/* 공연장별 최소 건수 — 픽스처를 뜬 시점의 실제 건수보다 조금 낮게 잡는다 */
const MIN = { td: 15, kar: 8, joh: 2, kyo: 2 };

const ROUTES = [
  [/tokyo-dome\.co\.jp/, "tokyodome.html"],
  [/k-arena\.com/, "karena.html"],
  [/osaka-johall\.com/, "johall.html"],
  [/kyoceradome-osaka\.jp/, "kyocera.html"]
];

/* 네트워크 대신 픽스처를 돌려준다. 모르는 URL 은 실패시켜 테스트가 밖으로 나가지 않게 한다. */
globalThis.fetch = async url => {
  const hit = ROUTES.find(([re]) => re.test(String(url)));
  if (!hit) return new Response("not in fixtures: " + url, { status: 404 });
  return new Response(FIX(hit[1]), { status: 200, headers: { "content-type": "text/html; charset=utf-8" } });
};

const { events, stats, errors, warnings } = await collectAll({ only: "jpvenues", today: FIXTURE_DATE });

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

/* 6. 수집기 자체 경고는 여기선 0이어야 한다(이전 상태 없이 한 번 돈 것이므로) */
if (warnings.length) fail(`경고: ${warnings.join(" / ")}`); else ok("수집기 경고 없음");

console.log(failed ? `\n${failed}개 실패` : "\n파서 회귀 테스트 통과");
process.exit(failed ? 1 : 0);
