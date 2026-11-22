#!/usr/bin/env node
/* ============================================================
   SNS 공지 감시의 판정 로직을 네트워크 없이 검사합니다.
     node tools/test-sns.mjs

   걸러 내는 쪽이 특히 중요합니다 — 암표·대리티켓팅 글이 통과하면
   이 도구가 불법 거래를 띄워 주는 통로가 됩니다. 공연법 위반이고,
   알림의 신뢰도 자체가 무너집니다.
   ============================================================ */

import { isNotice, stripTags, hashLink, watchArtists, formatTelegram } from "../worker/src/sns.js";

let fail = 0;
const ok = (name, got, want) => {
  const pass = JSON.stringify(got) === JSON.stringify(want);
  if (!pass) { fail++; console.log(`❌ ${name}\n   받음: ${JSON.stringify(got)}\n   기대: ${JSON.stringify(want)}`); }
  else console.log(`✅ ${name}`);
};

/* ── 통과해야 하는 공지 ── */
for (const t of [
  "BIGBANG 추가 회차 오픈 안내",
  "[공지] 내한공연 2차 오픈 일정",
  "시야제한석 추가 예매 열렸어요",
  "잔여석 풀렸습니다 확인해보세요",
  "팬클럽 선예매 코드 안내",
  "공식 재판매 페이지 오픈",
  "취소 수수료 마감일 정리"
]) ok(`공지 통과: ${t}`, isNotice(t), true);

/* ── 막아야 하는 글 ── */
for (const t of [
  "추가 회차 잔여석 플미 양도합니다",          // 암표
  "티켓팅 대행해드립니다 잔여석 가능",          // 대리티켓팅
  "매크로 프로그램으로 추가 오픈 잡는 법",       // 매크로
  "선예매 대리 예매 디엠 주세요",               // 대리 + 거래 유도
  "잔여석 웃돈 받고 넘깁니다",                  // 암표
  "콘서트 후기 정말 좋았어요",                  // 공지어가 없음
  "공연 다녀왔습니다 사진 첨부"                 // 공지어가 없음
]) ok(`차단: ${t}`, isNotice(t), false);

/* ── 네이버가 섞어 보내는 <b> 태그와 엔티티 ── */
ok("태그·엔티티 제거", stripTags("<b>IVE</b> 추가 &amp; 회차 &quot;2차&quot;"), 'IVE 추가 & 회차 "2차"');
ok("태그 제거 후에도 판정된다", isNotice(stripTags("<b>추가</b> 회차 오픈")), true);

/* ── 링크 해시: 같은 링크는 같게, 다른 링크는 다르게 ── */
ok("같은 링크 같은 해시", hashLink("https://cafe.naver.com/a/1") === hashLink("https://cafe.naver.com/a/1"), true);
ok("다른 링크 다른 해시", hashLink("https://cafe.naver.com/a/1") === hashLink("https://cafe.naver.com/a/2"), false);

/* ── 감시 아티스트 고르기 ── */
const NOW = new Date("2026-10-29T00:00:00+09:00");
const EV = [
  { artist: "후지이 카제", dates: ["2026-11-20"] },
  { artist: "후지이 카제", dates: ["2026-11-21"] },   // 같은 아티스트는 한 번만
  { artist: "IVE",        dates: ["2026-12-05"] },
  { artist: "지난공연",    dates: ["2026-01-01"] },    // 이미 끝남
  { artist: "먼공연",      dates: ["2027-06-01"] },    // 창(60일) 밖
  { artist: "가",         dates: ["2026-11-01"] }     // 한 글자는 소음
];
ok("감시 아티스트", watchArtists(EV, NOW), ["후지이 카제", "IVE"]);
ok("개수 제한", watchArtists(EV, NOW, 1), ["후지이 카제"]);
ok("빈 목록도 견딘다", watchArtists([], NOW), []);
ok("dates 없는 항목도 견딘다", watchArtists([{ artist: "X" }], NOW), []);

/* ── 텔레그램 메시지: HTML 이스케이프와 분할 ── */
const one = formatTelegram([{ title: "A & B <주의>", link: "https://a.b/1", where: "카페", date: null, artist: null, excerpt: "추가 회차" }]);
ok("메시지 한 통", one.length, 1);
ok("HTML 이스케이프", one[0].includes("A &amp; B &lt;주의&gt;"), true);
const many = formatTelegram(Array.from({ length: 60 }, (_, i) => ({
  title: `공지 ${i} ${"가".repeat(60)}`, link: `https://a.b/${i}`, where: "카페", date: null, artist: null, excerpt: "추가 회차"
})));
ok("길면 여러 통으로 나뉜다", many.length > 1, true);
ok("각 통이 한도 안", many.every(m => m.length <= 3700), true);

console.log(fail ? `\n❌ ${fail}건 실패` : "\n✅ 전부 통과");
process.exit(fail ? 1 : 0);
