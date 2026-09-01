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
const MAX_LOOKUPS = Number(process.env.MAX_LOOKUPS || 40);   // 1초에 1건 — 한 번에 너무 오래 돌지 않게

const sleep = ms => new Promise(r => setTimeout(r, ms));
const norm = s => String(s || "").toLowerCase().replace(/[\s.\-_'"()\[\]:·,!?&/]/g, "");

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

function genreFrom(tags, country) {
  const joined = tags.join(" ");
  for (const [re, g] of TAG_RULES) if (re.test(joined)) return g;
  if (/\bpop\b/i.test(joined)) return country === "JP" ? "jpop" : country === "KR" ? "kpop" : "pop";
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
  /* 같은 이름이 둘 이상이면 어느 쪽인지 알 수 없다. PERSONA·VIBES 처럼 흔한 단어에서
     동명이인이 나오므로, 후보가 하나일 때만 채택한다. */
  if (exact.length !== 1) return null;
  const hit = exact[0];
  if (!hit.country) return null;                 // 국적 없는 항목은 신뢰하지 않는다
  /* 태그도 없고 설명도 없으면 근거가 약하다 — 두 글자 이하 차이의 우연일 수 있다 */
  if (!(hit.tags || []).length && !hit.disambiguation && norm(hit.name) !== q) return null;
  const tags = (hit.tags || []).map(t => t.name);
  return { country: hit.country, genre: genreFrom(tags, hit.country), name: hit.name, tags: tags.slice(0, 4) };
}

/* 조회 대상: 아직 아는 게 없는 아티스트 */
const artists = [...new Set([...CONCERTS, ...FEED].map(c => c.artist).filter(Boolean))]
  .filter(a => a.length >= 2 && !inManual(a) && !(a in KNOWN));

console.log(`전체 아티스트 중 조회 대상 ${artists.length}명 (이번 실행 최대 ${MAX_LOOKUPS}명)`);
const info = { ...KNOWN };
let ok = 0, miss = 0;
for (const a of artists.slice(0, MAX_LOOKUPS)) {
  try {
    const r = await lookup(a);
    if (r) { info[a] = { country: r.country, genre: r.genre }; ok++;
      console.log(`  ✅ ${a.slice(0, 28).padEnd(30)} ${r.country}  ${r.genre || "(장르 미상)"}  ${r.tags.join(",").slice(0, 30)}`); }
    else { info[a] = { country: null, genre: null }; miss++;      // 다시 조회하지 않도록 기록
      console.log(`  —  ${a.slice(0, 28).padEnd(30)} 매칭 없음`); }
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
