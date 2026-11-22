#!/usr/bin/env node
/* ============================================================
   SNS 공지 감시를 로컬에서 돌려 봅니다.
   정기 실행은 Cloudflare Worker 가 15분마다 합니다(worker/wrangler.toml).
   이 스크립트는 같은 로직(worker/src/sns.js)을 그대로 씁니다.

     node tools/sns.mjs            무엇이 걸리는지만 출력 (아무것도 보내지 않음)
     node tools/sns.mjs --send     실제로 텔레그램으로 보내고 본 글을 기록
     node tools/sns.mjs --json     결과를 JSON 으로

   키는 저장소 루트의 .env.local 에 넣어 두면 자동으로 읽습니다(git 제외됨).
     NAVER_CLIENT_ID=...
     NAVER_CLIENT_SECRET=...
     TELEGRAM_TOKEN=...            (--send 일 때만 필요)
     TELEGRAM_CHAT_ID=...

   기본이 '보내지 않음'인 이유: 키워드를 손볼 때마다 결과를 눈으로 확인해야
   하는데, 그때마다 알림이 날아가면 쓸모 없는 알림에 익숙해져 버린다.
   ============================================================ */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { collectSns, formatTelegram, sendTelegram } from "../worker/src/sns.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SEEN_PATH = join(ROOT, ".sns-seen.json");

/* .env.local 이 있으면 환경변수로 읽어들인다 (tools/collect.mjs 와 같은 방식) */
const ENV_PATH = join(ROOT, ".env.local");
if (existsSync(ENV_PATH)) {
  for (const line of readFileSync(ENV_PATH, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/);
    if (!m) continue;
    const v = m[2].trim().replace(/^["']|["']$/g, "");
    if (v && !process.env[m[1]]) process.env[m[1]] = v;
  }
  console.log(".env.local 에서 키를 읽었습니다.");
}

const args = process.argv.slice(2);
const send = args.includes("--send");
const asJson = args.includes("--json");

/* 감시할 공연 목록은 수집 결과에서 가져온다 */
function loadEvents() {
  const p = join(ROOT, "data/feed.js");
  if (!existsSync(p)) return [];
  try {
    return new Function(readFileSync(p, "utf8") + "; return typeof FEED !== 'undefined' ? FEED : [];")() || [];
  } catch { return []; }
}

const seen = send && existsSync(SEEN_PATH)
  ? (JSON.parse(readFileSync(SEEN_PATH, "utf8")).seen || [])
  : [];                                  /* 미리보기에서는 비워 두고 전부 보여 준다 */

const events = loadEvents();
if (!asJson) console.log(`ON STAGE SNS 감시 · ${new Date().toISOString()} · 공연 ${events.length}건 · ${send ? "전송" : "미리보기"}`);

const r = await collectSns({
  keys: { id: process.env.NAVER_CLIENT_ID, secret: process.env.NAVER_CLIENT_SECRET },
  events, seen,
  log: (...m) => { if (!asJson) console.log(...m); }
});

if (asJson) {
  const { seen: _drop, ...rest } = r;
  console.log(JSON.stringify(rest, null, 2));
} else {
  r.errors.forEach(e => console.log("⚠️ ", e));
  r.warnings.forEach(w => console.log("🔶 경고:", w));
  if (!r.hits.length) console.log("\n걸린 공지가 없습니다.");
  for (const h of r.hits) {
    console.log(`\n· ${h.title}`);
    console.log(`  ${h.where}${h.date ? ` · ${h.date}` : ""}${h.artist ? ` · ${h.artist}` : ""}  [질의: ${h.query}]`);
    console.log(`  ${h.excerpt}`);
    console.log(`  ${h.link}`);
  }
  console.log(`\n새 공지 ${r.hits.length}건 · 질의 성공 ${r.queried}건`);
}

if (send && r.hits.length) {
  const { TELEGRAM_TOKEN: token, TELEGRAM_CHAT_ID: chat } = process.env;
  if (!token || !chat) {
    console.error("❌ TELEGRAM_TOKEN · TELEGRAM_CHAT_ID 가 없어 보내지 못했습니다.");
    process.exit(1);
  }
  let sent = 0;
  for (const msg of formatTelegram(r.hits)) {
    await sendTelegram(token, chat, msg);
    sent++;
  }
  writeFileSync(SEEN_PATH, JSON.stringify({ at: new Date().toISOString(), seen: r.seen }, null, 0));
  console.log(`✅ 텔레그램 ${sent}통 전송 · 본 글 ${r.seen.length}건 기록`);
}

if (!r.queried && !r.warnings.length) process.exit(1);
