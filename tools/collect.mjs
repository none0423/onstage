#!/usr/bin/env node
/* ============================================================
   로컬에서 수집을 돌려 data/feed.js 를 갱신합니다.
   실제 정기 수집은 Cloudflare Worker(worker/)가 매시 정각에 합니다.
   이 스크립트는 같은 수집 로직(worker/src/collect.js)을 그대로 씁니다.

     node tools/collect.mjs
     node tools/collect.mjs --only=tokyodome
     TICKETMASTER_KEY=xxx KOPIS_KEY=yyy node tools/collect.mjs
   ============================================================ */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { collectAll } from "../worker/src/collect.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const FEED_PATH = join(ROOT, "data/feed.js");

const args = process.argv.slice(2);
const only = (args.find(a => a.startsWith("--only=")) || "").split("=")[1] || null;

function loadPrevious() {
  if (!existsSync(FEED_PATH)) return [];
  try {
    return new Function(readFileSync(FEED_PATH, "utf8") + "; return typeof FEED !== 'undefined' ? FEED : [];")() || [];
  } catch { return []; }
}

console.log(`ON STAGE 수집 · ${new Date().toISOString()}`);
const { events, stats, errors } = await collectAll({
  keys: { kopis: process.env.KOPIS_KEY, ticketmaster: process.env.TICKETMASTER_KEY },
  previous: loadPrevious(),
  only,
  log: (...m) => console.log(...m)
});

errors.forEach(e => console.log("⚠️ ", e));
console.log(" 통계", JSON.stringify(stats));

if (!events.length && errors.length) {
  console.error("❌ 모든 소스 실패 — data/feed.js 를 그대로 둡니다.");
  process.exit(1);
}

const body = `/* 자동 생성 파일 — 직접 수정하지 마세요.
   평소에는 Cloudflare Worker 가 매시 갱신하고, 사이트가 /feed.json 으로 읽어갑니다.
   이 파일은 Worker 가 닿지 않을 때(오프라인·미배포) 쓰이는 예비 데이터입니다.
   갱신: node tools/collect.mjs
   손으로 관리하는 공연은 data/concerts.js 에 넣으면 이 파일보다 우선합니다. */

const FEED_UPDATED = ${JSON.stringify(new Date().toISOString())};

const FEED = ${JSON.stringify(events, null, 2)};
`;

const before = existsSync(FEED_PATH) ? readFileSync(FEED_PATH, "utf8") : "";
const strip = s => s.replace(/const FEED_UPDATED = "[^"]*";/, "");
if (strip(before) === strip(body)) console.log(`\n변경 없음 · ${events.length}건`);
else { writeFileSync(FEED_PATH, body); console.log(`\n✅ data/feed.js 갱신 · ${events.length}건`); }
