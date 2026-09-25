#!/usr/bin/env node
/* ============================================================
   아티스트 국적·장르 자동 조회 — data/artists.js 를 생성합니다.

   무엇을 해결하나
     KOPIS 는 해외 아티스트인지 알려주지 않고 장르도 '대중음악' 하나뿐이라,
     새 아티스트가 들어올 때마다 사람이 data/genres.js 에 한 줄씩 넣어야 했다.
     MusicBrainz(무료 공개 음악 DB, 키 불필요)에서 국적과 장르 태그를 받아
     그 수고를 대신한다.

   정확도 장치
     · 검색 1위를 그냥 믿지 않는다. 이름·정렬명·별칭 중 하나가 정확히 일치해야 채택.
       (이 검증이 없으면 'G2A' 가 엉뚱한 항목에 점수 100 으로 매칭된다)
     · 국적이 없는 항목은 버린다.
     · 손으로 쓴 data/genres.js 가 언제나 우선. 이 파일은 그 다음이다.

     node tools/artists.mjs
   ============================================================ */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "data/artists.js");
const UA = "onstage-collector/1.0 (personal concert dashboard; github.com/none0423/onstage)";
const MAX_LOOKUPS = Number(process.env.MAX_LOOKUPS || 80);   // 1초에 1건 — 한 번에 너무 오래 돌지 않게
/* 판정 규칙을 바꾸면 이 값을 올린다. 예전 규칙으로 '매칭 없음' 이 된 이름을 다시 조회한다 —
   그렇게 하지 않으면 규칙을 고쳐도 이미 기록된 실패가 영원히 남는다. */
const RULE_VERSION = 3;

const sleep = ms => new Promise(r => setTimeout(r, ms));
/* 『』～… 까지 지운다. 공연장 제목에서 온 이름에 이런 장식이 붙어 오고,
   app.js 의 gnorm 과 같은 집합이어야 표·자동 조회가 같은 키로 맞물린다. */
const norm = s => String(s || "").toLowerCase().replace(/[\s.\-_'"()\[\]:·,!?&/『』「」〈〉《》…～~]/g, "");

/* 검색어 정리 — 조회는 정리한 이름으로 하고, 결과는 원래 이름을 키로 저장한다.
   'Jane Remover:' · '『TOMORROW X TOGETHER' · '산들 단독 콘서트: 바람결' 처럼
   제목에서 잘려 온 부스러기가 붙어 있으면 MusicBrainz 가 못 찾는다. */
function searchName(raw) {
  let t = String(raw || "").trim()
    .replace(/^[\[({『「〈《]+|[\])}』」〉》]+$/g, "")
    .replace(/\s*[:：,]\s*.*$/, "")                       // 콜론·쉼표 뒤 부제
    .replace(/\s+(단독\s?콘서트|팬\s?콘서트|콘서트|내한공연|리사이틀).*$/, "")
    .replace(/\s+\d+(st|nd|rd|th)\s+(anniversary|concert|tour).*$/i, "")
    .replace(/\s+(fan\s?con|tour\s?concert|world\s?tour|live\s?tour)\b.*$/i, "")
    .replace(/[…~～]+$/, "")
    .trim();
  return t.length >= 2 ? t : String(raw || "").trim();
}

function load(file, name) {
  const p = join(ROOT, file);
  if (!existsSync(p)) return null;
  try { return new Function(readFileSync(p, "utf8") + `; return typeof ${name} !== "undefined" ? ${name} : null;`)(); }
  catch { return null; }
}

const CONCERTS = load("data/concerts.js", "CONCERTS") || [];
const FEED = load("data/feed.js", "FEED") || [];
const MANUAL = load("data/genres.js", "ARTIST_GENRE") || {};
const KNOWN = load("data/artists.js", "ARTIST_INFO") || {};

/* 손으로 쓴 표에 이미 있는 이름은 건너뛴다 */
const manualKeys = Object.keys(MANUAL).map(norm);
const inManual = a => { const n = norm(a); return manualKeys.some(k => k.length >= 4 ? n.includes(k) : n === k); };

/* MusicBrainz 태그 → 우리 장르 */
const TAG_RULES = [
  [/k-?pop/i,                         "kpop"],
  [/j-?pop/i,                         "jpop"],
  [/trot|트로트/i,                     "trot"],
  [/mandopop|cantopop|c-?pop/i,       "pop"],      /* 'pop rap' 태그 때문에 힙합으로 새지 않게 */
  [/hip ?hop|\brap\b|r&b|soul/i,      "hiphop"],
  [/rock|punk|metal|alternative|emo|shoegaze|j-?rock/i, "rock"],
  [/folk|acoustic|ballad|singer-songwriter/i, "ballad"],
  [/electronic|edm|techno|house|dance/i, "etc"],
  [/jazz|classical|blues|world/i,     "etc"]
];

/* 태그를 이어 붙여 첫 규칙을 적용하면 소수 태그가 전체를 뒤집는다 —
   UVERworld 는 태그 6개가 전부 *rock 인데 1표짜리 'rap rock' 의 \brap\b 가 걸려 힙합이 됐다.
   그래서 태그마다 장르를 정하고 MusicBrainz 투표 수로 합산한다. 동점이면 규칙 순서.
   태그가 아예 없으면 설명문을 본다 — MC TYSON 은 태그 0개에 'Japanese rapper' 만 있었다. */
const DISAMB_RULES = [
  [/rapper|hip ?hop/i,                "hiphop"],
  [/idol|girl group|boy group|k-pop/i, null],    /* 국적으로 정해지므로 아래 pop 처리에 맡긴다 */
  [/rock band|punk|metal/i,           "rock"],
  [/singer-songwriter|folk/i,         "ballad"]
];

function genreFrom(tags, country, disambiguation = "") {
  const score = new Map();
  for (const t of tags) {
    const name = typeof t === "string" ? t : t.name;
    const votes = (typeof t === "string" ? 1 : t.count) || 1;
    for (const [re, g] of TAG_RULES) if (re.test(name)) { score.set(g, (score.get(g) || 0) + votes); break; }
  }
  if (score.size) {
    const order = TAG_RULES.map(([, g]) => g);
    return [...score].sort((a, b) => b[1] - a[1] || order.indexOf(a[0]) - order.indexOf(b[0]))[0][0];
  }
  for (const [re, g] of DISAMB_RULES) if (re.test(disambiguation) && g) return g;
  const joined = tags.map(t => (typeof t === "string" ? t : t.name)).join(" ") + " " + disambiguation;
  if (/\bpop\b|idol|group/i.test(joined)) return country === "JP" ? "jpop" : country === "KR" ? "kpop" : "pop";
  return null;                                   // 장르는 못 정해도 국적은 쓸 수 있다
}

async function lookup(name, tries = 3) {
  const url = `https://musicbrainz.org/ws/2/artist?query=${encodeURIComponent(name)}&limit=8&fmt=json&inc=aliases`;
  let data;
  for (let i = 0; ; i++) {
    const res = await fetch(url, { headers: { "User-Agent": UA, Accept: "application/json" }, signal: AbortSignal.timeout(25000) });
    if (res.ok) { data = await res.json(); break; }
    if (i >= tries - 1) throw new Error(`HTTP ${res.status}`);
    await sleep(2500 * (i + 1));                 // 503 은 일시적이다 — 간격을 늘려 재시도
  }
  const q = norm(name);
  const exact = (data.artists || []).filter(a => {
    const cands = [a.name, a["sort-name"], ...(a.aliases || []).map(x => x.name)].filter(Boolean);
    return cands.some(c => norm(c) === q);       // 이름이 정확히 맞아야만 후보
  });
  /* 동명이인이 나오면 채택하지 않는다. 한때 '대소문자까지 같은 이름' 으로 가려 봤는데
     ILLIT·POW·최유리는 맞혔지만 실측 6건 중 3건이 틀렸다:
       GUMMY(거미, 장충체육관 전국투어) → 일본 비주얼계 밴드. country 까지 JP 가 되어 내한으로 밀릴 뻔했다.
       Baby Dolls(마닐라) → 이탈리아 유로비트.  BINI(필리핀 P-pop) → 장르 hiphop.
     의도한 아티스트가 후보에 아예 없을 수 있다는 게 근본 문제라, 이름만으로는 가릴 수 없다.
     동명이인은 data/genres.js 에 한 줄 적는 편이 빠르고 확실하다. */
  if (exact.length !== 1) return null;
  const hit = exact[0];
  if (!hit.country) return null;                 // 국적 없는 항목은 신뢰하지 않는다
  /* 태그도 없고 설명도 없으면 근거가 약하다 — 두 글자 이하 차이의 우연일 수 있다 */
  if (!(hit.tags || []).length && !hit.disambiguation && norm(hit.name) !== q) return null;
  /* 투표 수까지 보관한다. 규칙을 고쳤을 때 다시 조회하지 않고 다시 계산할 수 있다. */
  const tags = (hit.tags || []).map(t => ({ name: t.name, count: t.count || 1 }))
    .sort((a, b) => b.count - a.count).slice(0, 6);
  const disamb = hit.disambiguation || "";
  return { country: hit.country, genre: genreFrom(tags, hit.country, disamb), name: hit.name, tags, disamb };
}

/* 조회 대상: 아직 아는 게 없는 아티스트 */
/* 규칙만 바뀐 경우, 태그를 보관해 둔 항목은 다시 조회하지 않고 장르만 다시 계산한다. */
let recomputed = 0;
for (const [name, e] of Object.entries(KNOWN)) {
  if (!e || (e.rule || 1) >= RULE_VERSION || !Array.isArray(e.tags)) continue;
  const g = genreFrom(e.tags, e.country, e.disamb || "");
  if (g !== e.genre) { console.log(`  ↻ ${name.slice(0, 26).padEnd(28)} ${e.genre || "(없음)"} → ${g || "(없음)"}`); recomputed++; }
  KNOWN[name] = { ...e, genre: g, rule: RULE_VERSION };
}
if (recomputed) console.log(`보관한 태그로 ${recomputed}명 재계산 (조회 없음)\n`);

/* 다시 조회할 항목:
     · 아직 모르는 이름
     · 규칙이 바뀌었는데 태그를 보관해 두지 않아 다시 계산할 수 없는 항목 (이번 한 번뿐)
     · 예전 규칙에서 '매칭 없음' 이었던 항목 */
const stale = e => !e
  || ((e.rule || 1) < RULE_VERSION && !Array.isArray(e.tags))
  || (e.genre == null && e.country == null && (e.rule || 1) < RULE_VERSION);
const artists = [...new Set([...CONCERTS, ...FEED].map(c => c.artist).filter(Boolean))]
  .filter(a => a.length >= 2 && !inManual(a) && stale(KNOWN[a]));

console.log(`전체 아티스트 중 조회 대상 ${artists.length}명 (이번 실행 최대 ${MAX_LOOKUPS}명)`);
const info = { ...KNOWN };
let ok = 0, miss = 0;
for (const a of artists.slice(0, MAX_LOOKUPS)) {
  const query = searchName(a);
  try {
    const r = await lookup(query);
    if (r) { info[a] = { country: r.country, genre: r.genre, rule: RULE_VERSION, tags: r.tags, ...(r.disamb ? { disamb: r.disamb } : {}) }; ok++;
      console.log(`  ✅ ${a.slice(0, 26).padEnd(28)}${query !== a ? `→${query.slice(0, 16)}` : "".padEnd(17)} ${r.country}  ${(r.genre || "(장르 미상)").padEnd(9)} ${r.tags.join(",").slice(0, 26)}`); }
    else { info[a] = { country: null, genre: null, rule: RULE_VERSION }; miss++;   // 규칙이 바뀌기 전까진 다시 조회하지 않는다
      console.log(`  —  ${a.slice(0, 26).padEnd(28)}${query !== a ? `→${query.slice(0, 16)}` : ""} 매칭 없음`); }
  } catch (e) { console.log(`  ⚠️  ${a.slice(0, 28).padEnd(30)} ${e.message}`); }
  await sleep(1300);                              // MusicBrainz 권장 1초 간격 + 여유
}

writeFileSync(OUT, `/* 자동 생성 파일 — 직접 수정하지 마세요. 갱신: node tools/artists.mjs

   MusicBrainz 에서 받은 아티스트 국적·장르입니다.
   손으로 쓴 data/genres.js 가 언제나 우선하고, 이 파일은 그 다음에 쓰입니다.
   country 가 KR 이 아니면 국내 공연은 '내한' 으로 분류됩니다. */

const ARTIST_INFO = ${JSON.stringify(info, null, 2)};
`);
console.log(`\n✅ data/artists.js · 확인 ${ok}명 · 매칭 없음 ${miss}명 · 누적 ${Object.keys(info).length}명`);
