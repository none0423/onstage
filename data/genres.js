/* ============================================================
   장르 분류표 — 손으로 관리하는 파일입니다.

   왜 표로 관리하나
     · KOPIS 는 모든 공연을 "대중음악" 하나로만 준다
     · Ticketmaster 장르는 63건 중 54건이 "Pop" 이라 변별력이 없다
       (Stray Kids·BIGBANG 도 Pop 으로 온다)
     · 결국 아티스트를 아는 사람이 채우는 게 가장 정확하다

   추가하는 법 — 아래 ARTIST_GENRE 에 한 줄 넣으면 됩니다.
     "아티스트명": "kpop",
   아티스트 기준이라 한 번 넣으면 그 아티스트의 모든 공연(자동 수집분 포함)에 적용됩니다.
   이름은 공백·기호를 무시하고 부분 일치로 찾으므로 짧은 대표 이름을 넣으세요.
   ============================================================ */

const GENRES = [
  { key: "kpop",     label: "K-POP" },
  { key: "jpop",     label: "J-POP" },
  { key: "pop",      label: "팝" },
  { key: "rock",     label: "록·밴드" },
  { key: "hiphop",   label: "힙합·R&B" },
  { key: "ballad",   label: "발라드" },
  { key: "trot",     label: "트로트" },
  { key: "festival", label: "페스티벌" },
  { key: "etc",      label: "기타" }
];

const ARTIST_GENRE = {
  /* ── 기타 (음악 장르로 나누기 어려운 행사) ─ */
  "Byeon WooSeok": "etc", "변우석": "etc",      /* 배우 팬미팅 */

  /* ── K-POP ─────────────────────────── */
  "BIGBANG": "kpop", "IVE": "kpop", "ITZY": "kpop", "ENHYPEN": "kpop",
  "Stray Kids": "kpop", "BABYMONSTER": "kpop", "ARTMS": "kpop", "PLAVE": "kpop",
  "TREASURE": "kpop", "TWS": "kpop", "NCT": "kpop", "SUPER JUNIOR": "kpop",
  "DONGHAE": "kpop", "XG": "kpop", "CORTIS": "kpop", "LE SSERAFIM": "kpop",
  "aespa": "kpop", "SEVENTEEN": "kpop", "TXT": "kpop", "투모로우바이투게더": "kpop",
  "ONE OR EIGHT": "kpop", "씨야": "kpop", "INFINITE": "kpop", "MAMAMOO": "kpop",
  "tripleS": "kpop", "izna": "kpop", "AKMU": "kpop", "악동뮤지션": "kpop",
  "CLICK-B": "kpop", "KATSEYE": "kpop", "OMEGA X": "kpop", "EXO": "kpop",
  "BOYNEXTDOOR": "kpop",

  /* ── J-POP ─────────────────────────── */
  "YOASOBI": "jpop", "Vaundy": "jpop", "바운디": "jpop",
  "Fujii Kaze": "jpop", "후지이 카제": "jpop", "藤井風": "jpop",
  "Snow Man": "jpop", "INI": "jpop", "Number_i": "jpop", "BE:FIRST": "jpop",
  "back number": "jpop", "백넘버": "jpop", "Da-iCE": "jpop", "超特急": "jpop",
  "야마다 료스케": "jpop", "TAKUYA KIMURA": "jpop", "오시오 코타로": "jpop",
  "新しい地図": "jpop", "桑田佳祐": "jpop", "광자": "jpop",
  "DREAMS COME TRUE": "jpop", "星街すいせい": "jpop", "호시마치 스이세이": "jpop",
  "FANTASTICS": "jpop", "EXILE": "jpop", "AKB48": "jpop", "&TEAM": "jpop",
  "ano": "jpop", "카와사키 타카야": "jpop", "CUTIE STREET": "jpop",
  "IDOL1ST": "jpop", "나카지마 켄토": "jpop",   /* Sexy Zone 출신 */
  "YUURI": "jpop", "優里": "jpop", "JUJU": "jpop", "斉藤和義": "jpop", "사이토 카즈요시": "jpop",

  /* ── 팝 ────────────────────────────── */
  "Bruno Mars": "pop", "Charlie Puth": "pop", "찰리 푸스": "pop",
  "Maroon 5": "pop", "마룬5": "pop", "5 Seconds Of Summer": "pop",
  "Benson Boone": "pop", "벤슨 분": "pop", "Zara Larsson": "pop", "자라 라슨": "pop",
  "LANY": "pop", "레이니": "pop", "Dua Lipa": "pop", "Westlife": "pop",
  "Jane Zhang": "pop", "The Click Five": "pop", "yung kai": "pop", "영 카이": "pop",
  "Henry Moodie": "pop", "레이첼 야마가타": "pop", "Rachael Yamagata": "pop",
  "Jason Mraz": "pop", "제이슨 므라즈": "pop", "Firdhaus": "pop", "Song Dongye": "pop",
  "Sienna Spiro": "pop", "시에나 스파이로": "pop",
  "Jay Chou": "pop", "저우제룬": "pop",   /* 만다린 팝 — 자동 조회가 pop rap 태그로 힙합에 넣었다 */

  /* ── 록·밴드 ───────────────────────── */
  "SUPER BEAVER": "rock", "King Gnu": "rock", "BUMP OF CHICKEN": "rock",
  "NELL": "rock", "넬": "rock", "쏜애플": "rock", "너드커넥션": "rock",
  "나상현씨밴드": "rock", "센티밀리멘탈": "rock", "LUCY": "rock", "루시": "rock",
  "Paul Gilbert": "rock", "폴 길버트": "rock", "잔나비": "rock", "데이식스": "rock",
  "The Weeknd": "pop", "Young K": "rock", "TETRAPOD": "rock",
  "CNBLUE": "rock", "씨엔블루": "rock", "Silica Gel": "rock", "실리카겔": "rock",
  "SPYAIR": "rock", "ONEWE": "rock", "FTISLAND": "rock", "엔플라잉": "rock",
  "Touche Amore": "rock", "잔다리": "rock", "KANA-BOON": "rock",
  "THE VOLUNTEERS": "rock", "슬로우다이브": "rock", "Slowdive": "rock",
  "Redoor": "rock", "리도어": "rock", "홈커밍스": "rock", "Homecomings": "rock",
  "APF": "rock",                    /* Sunny Day Service 내한을 APF 가 주최 — 아티스트명이 주최사로 파싱됨 */
  "Sunny Day Service": "rock", "S,LO,W SERIES": "rock",

  /* ── 힙합·R&B ──────────────────────── */
  "Post Malone": "hiphop", "포스트 말론": "hiphop", "MC몽": "hiphop",
  "HIPHOPPLAYA": "hiphop", "Khalid": "hiphop", "칼리드": "hiphop",
  "FKJ": "hiphop", "Ezra Collective": "hiphop", "에즈라 콜렉티브": "hiphop",
  "존박": "hiphop", "크러쉬": "hiphop", "자이언티": "hiphop", "Morgenshtern": "hiphop",

  /* ── 발라드 ────────────────────────── */
  "이승철": "ballad", "엠씨더맥스": "ballad", "성시경": "ballad",
  "김건모": "ballad", "김장훈": "ballad", "조관우": "ballad", "박효신": "ballad",
  "이수": "ballad", "규현": "ballad", "김범수": "ballad", "이승기": "ballad",
  "스테이지 네임": "ballad", "정승환": "ballad", "김필": "ballad", "홍이삭": "ballad",
  "더 스카웃": "ballad", "10CM": "ballad", "소수빈": "ballad",
  "THE MAIN VOCALS": "ballad",      /* 보컬리스트 프리미엄 라이브 */

  /* ── 트로트 ────────────────────────── */
  "전유진": "trot", "박지현": "trot", "임영웅": "trot", "영탁": "trot",
  "김희재": "trot", "정동원": "trot", "이찬원": "trot", "송가인": "trot",
  "김용빈": "trot", "무명전설": "trot", "장민호": "trot", "진성": "trot",
  "장윤정": "trot", "홍진영": "trot"
};

/* ============================================================
   해외 아티스트 — 국내 공연을 '내한'으로 분류하는 데 쓴다.

   KOPIS 는 제목에 '내한' 이 없으면 해외 아티스트인지 알려주지 않는다.
   J-POP·팝 장르는 해외 아티스트에게만 붙이므로 그것만으로 판별되고,
   록·힙합처럼 국내외가 섞이는 장르만 여기에 따로 적는다.
   ============================================================ */
const FOREIGN_ARTISTS = [
  "SPYAIR", "KANA-BOON", "Sunny Day Service", "Homecomings", "홈커밍스",
  "Touche Amore", "Slowdive", "슬로우다이브", "Paul Gilbert", "폴 길버트",
  "Ezra Collective", "에즈라 콜렉티브", "Morgenshtern", "모르겐슈테른",
  "AKASAKI", "AKANE YONEZAWA", "칸호 야쿠시지", "Shi Shi"
];

/* 대응표에 없을 때 공연 제목에서 잡아내는 규칙 (앞에서부터 먼저 맞는 것) */
const GENRE_KEYWORDS = [
  ["etc",      /어워즈|AWARDS|시상식|가요제|VMAJ|\bMAMA\b|뮤직어워드/i],
  /* 구체적인 장르를 먼저 본다. '대구 힙합 페스티벌' 은 페스티벌보다 힙합이 쓸모 있다. */
  ["kpop",     /K-?POP|케이팝/i],
  ["trot",     /트로트|미스터트롯|미스트롯/i],
  ["hiphop",   /힙합|HIPHOP|HIP-?HOP|\bRAP\b|\bR&B\b/i],
  ["rock",     /밴드|\bBAND\b|\bROCK\b|\bPUNK\b|메탈|\bMETAL\b|스카\b|\bSKA\b/i],
  ["etc",      /클래식|오케스트라|필하모닉|재즈|\bJAZZ\b|국악/i],
  /* 장르를 못 잡은 행사만 페스티벌로 */
  ["festival", /페스티벌|페스타|FESTIVAL|\bFES\b|\bFEST\b|\bFESTA\b/i]
];

/* Ticketmaster classifications.genre → 우리 분류.
   대부분 "Pop" 으로만 와서 변별력이 낮으므로 위 두 단계 다음에만 쓴다. */
const TM_GENRE_MAP = {
  "K-Pop": "kpop", "J-Pop": "jpop",
  "Pop": "pop", "Ballads/Romantic": "ballad",
  "Rock": "rock", "Alternative": "rock", "Metal": "rock", "Punk": "rock",
  "Hip-Hop/Rap": "hiphop", "Rap": "hiphop", "R&B": "hiphop", "Soul": "hiphop",
  "Dance": "etc", "Dance/Electronic": "etc", "Electronic": "etc",
  "Jazz": "etc", "Blues": "etc", "Classical": "etc", "Country": "etc",
  "World": "etc", "Folk": "etc", "Religious": "etc", "Latin": "etc"
};
