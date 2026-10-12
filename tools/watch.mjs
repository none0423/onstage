#!/usr/bin/env node
/* ============================================================
   수집 감시 — Worker 의 /status 를 읽고, 문제가 있으면 원인 후보까지 적어 실패시킵니다.
   .github/workflows/watch.yml 이 6시간마다 이 스크립트를 돌립니다.

   왜 원인까지 적나
     메일이 "후쿠오카 96회 연속 실패" 만 말하면 받는 사람이 할 수 있는 게 없습니다.
     실제로 그 96회의 원인은 공연장이 아니라 'GITHUB_TOKEN 커밋이 Pages 배포를
     깨우지 않는다' 였고, 로그만 봐서는 알 수 없었습니다. 그래서 감시가 스스로
     몇 가지를 더 확인해 "저장소는 최신인데 Pages 가 옛 파일을 준다" 까지 적습니다.

     node tools/watch.mjs
   ============================================================ */

const STATUS_URL = process.env.STATUS_URL || "https://onstage-collector.onstage-collector.workers.dev/status";
const PAGES = process.env.PAGES_URL || "https://none0423.github.io/onstage";
const REPO = process.env.GITHUB_REPOSITORY || "none0423/onstage";
const TOKEN = process.env.GITHUB_TOKEN || "";

const hours = ms => ms / 3600000;
const ago = iso => {
  const h = hours(Date.now() - Date.parse(iso));
  return h < 1 ? `${Math.round(h * 60)}분 전` : h < 48 ? `${h.toFixed(1)}시간 전` : `${(h / 24).toFixed(1)}일 전`;
};

async function getJSON(url, headers = {}) {
  const res = await fetch(url, { headers: { Accept: "application/json", ...headers }, signal: AbortSignal.timeout(25000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

/* /status 를 한 번 더 시도한다 — Worker 가 잠깐 안 닿는 것도 일시 오류일 수 있다 */
let st;
try { st = await getJSON(STATUS_URL); }
catch { await new Promise(r => setTimeout(r, 20000)); st = await getJSON(STATUS_URL); }

const problems = [], notes = [], diagnosis = [];
const ageMin = st.at ? Math.round((Date.now() - Date.parse(st.at)) / 60000) : Infinity;

if (ageMin > 180) problems.push(`마지막 수집이 ${isFinite(ageMin) ? ageMin + "분" : "기록 없음"} 전 — 크론이 멈췄을 수 있음`);
if (st.ok !== true) problems.push(`ok=${st.ok} — 전 소스 실패, 이전 데이터 ${st.kept ?? "?"}건 유지 중`);

/* 경고에는 '언제부터' 를 붙인다. 수집은 매시 도므로 연속 횟수가 곧 시간이다. */
for (const w of st.warnings || []) {
  const m = w.match(/^(.+?): (\d+)회 연속/);
  const since = m ? ` — ${(Number(m[2]) / 24).toFixed(1)}일 전부터` : "";
  problems.push(`경고: ${w}${since}`);
}
/* 이번 실행의 오류는 그 소스가 연속으로 실패 중일 때만 문제로 본다 */
for (const e of st.errors || []) {
  const unit = e.split(":")[0].replace(/^jpvenues\//, "jp-");
  const streak = st.health?.[unit]?.fail ?? 0;
  (streak >= 2 ? problems : notes).push(`오류${streak >= 2 ? ` (${streak}회 연속)` : " (이번 1회)"}: ${e}`);
}

/* ── 자가 진단 ──────────────────────────────────
   문제가 있을 때만 돈다. 평소에는 요청을 더 쓰지 않는다. */
if (problems.length) {
  /* 중계 파일: 저장소와 Pages 가 다르면 배포가 안 걸린 것이다 */
  if ((st.errors || []).some(e => /중계/.test(e)) || (st.warnings || []).some(w => /PayPay/.test(w))) {
    let pagesAt = null, repoAt = null;
    try {
      const j = await getJSON(`${PAGES}/data/relay/paypaydome.json?x=${Date.now()}`);
      pagesAt = j.updated;
    } catch (e) { diagnosis.push(`Pages 의 중계 파일을 읽지 못했습니다 (${e.message}) — 파일이 배포되지 않았을 수 있습니다.`); }
    try {
      const c = await getJSON(`https://api.github.com/repos/${REPO}/commits?path=data/relay&per_page=1`,
        TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {});
      repoAt = c?.[0]?.commit?.committer?.date || null;
    } catch { /* API 한도 등 — 진단일 뿐이므로 조용히 넘어간다 */ }

    if (pagesAt) diagnosis.push(`Pages 가 주는 중계 파일: ${pagesAt} (${ago(pagesAt)})`);
    if (repoAt) diagnosis.push(`저장소 최신 중계 커밋: ${repoAt} (${ago(repoAt)})`);
    if (pagesAt && repoAt && Date.parse(repoAt) - Date.parse(pagesAt) > 2 * 3600000)
      diagnosis.push("→ 저장소는 최신인데 Pages 가 옛 파일을 줍니다. 중계 커밋이 배포를 깨우지 못한 것입니다 —"
        + " relay-jp.yml 의 deploy 작업(workflow_call)이 붙어 있는지 확인하세요."
        + " GITHUB_TOKEN 으로 민 커밋은 push 트리거를 발동시키지 않습니다.");
    else if (pagesAt && hours(Date.now() - Date.parse(pagesAt)) > 24 && repoAt && hours(Date.now() - Date.parse(repoAt)) > 24)
      diagnosis.push("→ 저장소도 Pages 도 오래됐습니다. 중계 워크플로 자체가 돌지 않았습니다 (Actions 탭에서 비활성화 여부 확인).");
  }

  /* 최근 워크플로 결과 — 어느 쪽이 멈췄는지 바로 보이게 */
  if (TOKEN) {
    try {
      const runs = await getJSON(`https://api.github.com/repos/${REPO}/actions/runs?per_page=20`,
        { Authorization: `Bearer ${TOKEN}` });
      const by = {};
      for (const r of runs.workflow_runs || []) (by[r.name] ||= []).push(r);
      for (const [name, list] of Object.entries(by)) {
        if (name === "Watch collector") continue;
        const last = list[0];
        diagnosis.push(`워크플로 ${name}: 최근 ${list.length}회 중 실패 ${list.filter(r => r.conclusion === "failure").length}회`
          + ` · 마지막 ${last.conclusion || last.status} (${ago(last.created_at)})`);
      }
    } catch { /* 진단일 뿐 */ }
  }
}

/* ── 출력 ──────────────────────────────────── */
console.log(`마지막 수집: ${st.at} (${ageMin}분 전) · ${st.count ?? st.kept ?? "?"}건 · 서브리퀘스트 ${st.stats?.subrequests ?? "?"}`);
for (const [k, h] of Object.entries(st.health || {}))
  console.log(`  ${k.padEnd(14)} ${String(h.count ?? "-").padStart(4)}건  연속0건:${h.zero}  연속실패:${h.fail}  최고:${h.peak}`);

if (notes.length) console.log("\n" + notes.map(n => `ℹ️  ${n} — 다음 실행에서 회복되면 무시`).join("\n"));

if (problems.length) {
  console.log("\n" + problems.map(p => `❌ ${p}`).join("\n"));
  if (diagnosis.length) console.log("\n── 진단 ──\n" + diagnosis.map(d => `   ${d}`).join("\n"));
  console.log(`\n확인: ${STATUS_URL}`);
  process.exit(1);
}
console.log("\n✅ 수집 정상");
