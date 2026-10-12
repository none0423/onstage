#!/usr/bin/env node
/* ============================================================
   중계 수집 — Cloudflare 대역에서 막힌 공연장을 GitHub Actions 가 대신 읽습니다.

   왜 필요한가
     미즈호PayPay돔(softbankhawks.co.jp)이 Worker 에서만 HTTP 403 을 냅니다.
     같은 User-Agent 로 집 회선에서는 200 이 오고, 브라우저형 헤더를 갖춰도
     Worker 에서는 여전히 403 이라 IP 대역 차단으로 보입니다.
     그래서 러너가 같은 수집 로직을 그대로 돌려 결과만 저장소에 올리고,
     Worker 는 GitHub Pages 에 올라간 그 JSON 을 한 번 읽습니다.

   구조상 지켜야 할 것
     · 수집 로직은 worker/src/collect.js 하나뿐이다. 여기서 파서를 복사하지 않는다.
     · useRelay:false 로 불러야 한다 — 안 그러면 자기가 만든 파일을 다시 읽는다.
     · 결과가 비면 기존 파일을 덮지 않는다. 빈 파일을 올리면 Worker 가 그걸 믿는다.

     node tools/relay.mjs
   ============================================================ */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { collectAll } from "../worker/src/collect.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = join(ROOT, "data/relay");

/* 중계할 공연장: 파일 이름 ↔ 항목 id 접두사 */
const RELAYED = [{ key: "fuk", file: "paypaydome.json", name: "미즈호PayPay돔 후쿠오카", min: 5 }];

const { events, stats, errors } = await collectAll({
  only: "jpvenues",
  useRelay: false,
  log: (...m) => console.log(...m)
});

errors.forEach(e => console.log("⚠️ ", e));
console.log(" 통계", JSON.stringify(stats.jpvenues));

mkdirSync(OUT_DIR, { recursive: true });
let failed = 0;

for (const r of RELAYED) {
  const mine = events.filter(c => c.id.startsWith(`jp-${r.key}-`));
  const path = join(OUT_DIR, r.file);

  if (mine.length < r.min) {
    /* 러너까지 막혔거나 페이지 구조가 바뀐 경우. 기존 파일을 지키고 실패로 알린다 —
       Worker 는 72시간이 지나면 스스로 '묵었다'고 경고한다. */
    console.log(`❌ ${r.name}: ${mine.length}건 (최소 ${r.min}) — 기존 파일 유지`);
    failed++;
    continue;
  }

  const body = JSON.stringify({ updated: new Date().toISOString(), count: mine.length, events: mine }, null, 1);
  /* 내용이 같으면 커밋하지 않되, 하루에 한 번은 updated 를 새로 찍는다.
     Worker 는 이 값으로 '중계가 살아 있는지' 를 판단하므로, 내용이 안 바뀐다고
     계속 건너뛰면 멀쩡히 도는 중계가 72시간 뒤 '묵었다' 로 보인다 —
     실제로 그렇게 7일간 경고가 났다(2026-10-12). */
  const before = existsSync(path) ? readFileSync(path, "utf8") : "";
  const strip = t => t.replace(/"updated": "[^"]*",/, "");
  let prevAt = 0;
  try { prevAt = Date.parse(JSON.parse(before).updated) || 0; } catch { /* 없거나 깨졌으면 새로 쓴다 */ }
  const ageH = (Date.now() - prevAt) / 3600000;
  if (strip(before) === strip(body) && ageH < 24) {
    console.log(`   ${r.name}: 변경 없음 · ${mine.length}건 (${ageH.toFixed(1)}시간 전 기록 유지)`);
  } else {
    writeFileSync(path, body);
    console.log(`✅ ${r.name}: ${mine.length}건 저장${strip(before) === strip(body) ? " (내용 동일 · 생존 표시 갱신)" : ""} → data/relay/${r.file}`);
  }
}

process.exit(failed ? 1 : 0);
