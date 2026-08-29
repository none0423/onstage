/* ============================================================
   ON STAGE — 공연 데이터
   이 파일 하나만 고치면 사이트가 갱신됩니다. 규칙은 data/GUIDE.md 참고.

   아래 항목은 2026-08-29 기준으로 공개 소스에서 확인한 실제 공연입니다.
   각 항목의 source 링크로 원문을 확인할 수 있으며,
   티켓 오픈 시각·가격은 변경될 수 있으므로 예매 전 예매처 공지를 다시 확인하세요.
   ============================================================ */

const DATA_UPDATED = "2026-08-29";

const CONCERTS = [

  /* ═══ 내한 공연 ═══════════════════════════════ */
  {
    id: "kr-vaundy-inspire",
    artist: "Vaundy",
    tour: "ASIA ARENA TOUR 2026 \"HORO\" IN SEOUL",
    category: "visit",
    country: "대한민국", city: "인천", venue: "인스파이어 아레나",
    mapQuery: "인스파이어 아레나 인천",
    dates: ["2026-09-19", "2026-09-20"],
    doorsNote: "19일 17:00 시작 / 20일 14:00 입장 · 16:00 시작",
    ticketOpen: null, ticketStatus: "판매중",
    price: "플로어(스탠딩)·R석 165,000원 / S석 154,000원",
    vendor: { name: "NOL 티켓", url: "https://nol.yanolja.com/ticket/places/26000240/products/26003199" },
    otherVendors: [{ name: "NOL World (해외 결제)", url: "https://world.nol.com/en/ticket/places/26000240/products/26003199" }],
    goods: { note: "공연장 내 공식 MD 부스 운영. 숙박이 포함된 Play&Stay 패키지가 별도 판매됩니다.", url: null },
    stay: {
      areas: [
        { name: "인스파이어 리조트", note: "공연장 직결 · 도보 5분" },
        { name: "파라다이스시티 영종도", note: "차량 10분 · 공항철도 영종역" },
        { name: "인천공항 1터미널", note: "차량 15분 · 심야 이동 편리" }
      ]
    },
    tips: "바운디의 첫 해외 단독 공연입니다. 영종도는 공연 후 대중교통이 일찍 끊기니 숙소를 섬 안에 잡는 편이 안전합니다.",
    source: "https://tickets.interpark.com/contents/notice/detail/12910",
    tags: ["아레나", "일본 아티스트"]
  },
  {
    id: "kr-postmalone-goyang",
    artist: "Post Malone",
    tour: "The BIG Stadium World Tour in Seoul",
    category: "visit",
    country: "대한민국", city: "고양", venue: "고양종합운동장 주경기장",
    mapQuery: "고양종합운동장",
    dates: ["2026-10-02"],
    doorsNote: "20:00 시작",
    ticketOpen: null, ticketStatus: "판매중",
    price: "지정석 E 99,000원 ~ EARLY ENTRY VIP 패키지 434,000원",
    vendor: { name: "NOL 티켓 (단독)", url: "https://tickets.interpark.com/contents/notice/detail/13364" },
    otherVendors: [],
    goods: { note: "EARLY ENTRY VIP 패키지에 조기 입장과 한정 MD가 포함됩니다. 일반 MD는 당일 현장 부스 판매.", url: null },
    stay: {
      areas: [
        { name: "대화·주엽", note: "3호선 대화역 · 공연장 도보 15분" },
        { name: "일산 라페스타", note: "차량 10분 · 식당 밀집" },
        { name: "서울 홍대·합정", note: "경의중앙선 약 40분" }
      ]
    },
    tips: "스타디움 공연이라 퇴장 인파가 많습니다. 대화역 대신 백석·마두역으로 걸어 나가면 훨씬 빠릅니다.",
    source: "https://tickets.interpark.com/contents/notice/detail/13364",
    tags: ["스타디움", "VIP패키지"]
  },
  {
    id: "kr-charlieputh-goyang",
    artist: "Charlie Puth",
    tour: "STADIUM TOUR IN SEOUL",
    category: "visit",
    country: "대한민국", city: "고양", venue: "고양종합운동장 주경기장",
    mapQuery: "고양종합운동장",
    dates: ["2026-10-11"],
    doorsNote: "19:00 시작",
    ticketOpen: null, ticketStatus: "판매중",
    price: "예매처 공지 참고",
    vendor: { name: "NOL 티켓", url: "https://tickets.interpark.com/contents/notice/detail/13571" },
    otherVendors: [],
    goods: { note: "현장 MD 부스 운영 예정. 상세 구성은 공연 임박 시 공지됩니다.", url: null },
    stay: {
      areas: [
        { name: "대화·주엽", note: "3호선 대화역 · 공연장 도보 15분" },
        { name: "일산 라페스타", note: "차량 10분 · 식당 밀집" },
        { name: "서울 홍대·합정", note: "경의중앙선 약 40분" }
      ]
    },
    tips: "찰리 푸스 사상 최대 규모의 스타디움 공연입니다. 4집 투어라 신곡 비중이 높습니다.",
    source: "https://tickets.interpark.com/contents/notice/detail/13571",
    tags: ["스타디움"]
  },
  {
    id: "kr-khalid-kintex",
    artist: "Khalid",
    tour: "It's Always Summer Somewhere Tour — Seoul",
    category: "visit",
    country: "대한민국", city: "고양", venue: "킨텍스 제2전시장",
    mapQuery: "킨텍스 제2전시장",
    dates: ["2026-12-05"],
    doorsNote: "예매처 공지 참고",
    ticketOpen: null, ticketStatus: "판매중",
    price: "예매처 공지 참고",
    vendor: { name: "라이브네이션 코리아", url: "https://www.livenation.kr/event/khalid-it-s-always-summer-somewhere-tour-seoul-tickets-edp1685736" },
    otherVendors: [{ name: "NOL 티켓", url: "https://tickets.interpark.com/" }],
    goods: { note: "현장 MD 부스 운영 예정.", url: null },
    stay: {
      areas: [
        { name: "킨텍스 인근", note: "경의중앙선 킨텍스역 도보 5분" },
        { name: "일산 웨스턴돔", note: "차량 10분 · 심야 식당 많음" },
        { name: "서울 홍대", note: "경의중앙선 약 40분" }
      ]
    },
    tips: "다음 날 같은 장소에서 FKJ 공연이 있어 이틀 연속 관람이 가능합니다.",
    source: "https://www.livenation.kr/event/khalid-it-s-always-summer-somewhere-tour-seoul-tickets-edp1685736",
    tags: ["킨텍스"]
  },
  {
    id: "kr-fkj-kintex",
    artist: "FKJ",
    tour: "내한공연 2026",
    category: "visit",
    country: "대한민국", city: "고양", venue: "킨텍스 제2전시장 10홀",
    mapQuery: "킨텍스 제2전시장",
    dates: ["2026-12-06"],
    doorsNote: "예매처 공지 참고 · 12세 이상 관람",
    ticketOpen: null, ticketStatus: "판매중",
    price: "스탠딩 143,000원 (1인 4매 한정)",
    vendor: { name: "NOL 티켓", url: "https://tickets.interpark.com/contents/notice/detail/14462" },
    otherVendors: [],
    goods: { note: "현장 MD 부스 운영 예정.", url: null },
    stay: {
      areas: [
        { name: "킨텍스 인근", note: "경의중앙선 킨텍스역 도보 5분" },
        { name: "일산 웨스턴돔", note: "차량 10분 · 심야 식당 많음" },
        { name: "서울 홍대", note: "경의중앙선 약 40분" }
      ]
    },
    tips: "루프 스테이션 기반의 라이브 연주가 중심이라 스탠딩 앞쪽 시야가 특히 중요합니다.",
    source: "https://tickets.interpark.com/contents/notice/detail/14462",
    tags: ["킨텍스", "스탠딩"]
  },

  /* ═══ 일본 공연 (도쿄돔 공식 스케줄) ══════════ */
  {
    id: "jp-ini-tokyodome",
    artist: "INI",
    tour: "5TH ANNIVERSARY DOME TOUR [CITY OF LIGHTS]",
    category: "japan",
    country: "일본", city: "도쿄", venue: "도쿄돔",
    mapQuery: "東京ドーム",
    dates: ["2026-09-16", "2026-09-17"],
    doorsNote: "공식 공지 참고",
    ticketOpen: null, ticketStatus: "판매중",
    price: "예매처 공지 참고",
    vendor: { name: "이플러스 (e+)", url: "https://eplus.jp/sf/search?keyword=INI" },
    otherVendors: [
      { name: "티켓피아", url: "https://t.pia.jp/" },
      { name: "로손티켓", url: "https://l-tike.com/" }
    ],
    goods: { note: "돔 공연은 공연 당일 오전부터 돔 외부 굿즈 부스가 열리며, 온라인 선행 판매가 별도로 진행되는 경우가 많습니다.", url: null },
    stay: {
      areas: [
        { name: "스이도바시 (水道橋)", note: "도보 3분 · JR 주오소부선" },
        { name: "이다바시·코라쿠엔 (飯田橋)", note: "도보 10분 · 지하철 4개 노선" },
        { name: "아키하바라 (秋葉原)", note: "JR 3정거장 · 숙소 선택지 많음" }
      ]
    },
    tips: "일본 돔 공연은 팬클럽 선행 추첨(先行抽選) → 일반 발매 순으로 진행됩니다. 일반 발매분은 소량이라 대행 서비스도 함께 알아보세요.",
    source: "https://www.tokyo-dome.co.jp/en/dome/event/schedule.html",
    tags: ["돔", "추첨제"]
  },
  {
    id: "jp-superbeaver-tokyodome",
    artist: "SUPER BEAVER",
    tour: "Urban Camel DOME TOUR 2026",
    category: "japan",
    country: "일본", city: "도쿄", venue: "도쿄돔",
    mapQuery: "東京ドーム",
    dates: ["2026-09-22", "2026-09-23"],
    doorsNote: "공식 공지 참고",
    ticketOpen: null, ticketStatus: "판매중",
    price: "예매처 공지 참고",
    vendor: { name: "이플러스 (e+)", url: "https://eplus.jp/sf/search?keyword=SUPER%20BEAVER" },
    otherVendors: [{ name: "로손티켓", url: "https://l-tike.com/" }],
    goods: { note: "밴드 공연은 투어 굿즈가 현장 판매 중심입니다. 인기 품목은 개장 직후 매진되는 경우가 많습니다.", url: null },
    stay: {
      areas: [
        { name: "스이도바시 (水道橋)", note: "도보 3분 · JR 주오소부선" },
        { name: "이다바시·코라쿠엔 (飯田橋)", note: "도보 10분 · 지하철 4개 노선" },
        { name: "아키하바라 (秋葉原)", note: "JR 3정거장 · 숙소 선택지 많음" }
      ]
    },
    tips: "일본 록밴드의 첫 도쿄돔 2days입니다. 연휴 기간과 겹쳐 항공권이 빨리 오릅니다.",
    source: "https://www.tokyo-dome.co.jp/en/dome/event/schedule.html",
    tags: ["돔", "밴드"]
  },
  {
    id: "jp-enhypen-tokyodome",
    artist: "ENHYPEN",
    tour: "WORLD TOUR 'BLOOD SAGA' IN JAPAN",
    category: "japan",
    country: "일본", city: "도쿄", venue: "도쿄돔",
    mapQuery: "東京ドーム",
    dates: ["2026-12-01", "2026-12-02"],
    doorsNote: "공식 공지 참고",
    ticketOpen: null, ticketStatus: "예정",
    price: "예매처 공지 참고",
    vendor: { name: "이플러스 (e+)", url: "https://eplus.jp/sf/search?keyword=ENHYPEN" },
    otherVendors: [
      { name: "티켓피아", url: "https://t.pia.jp/" },
      { name: "로손티켓", url: "https://l-tike.com/" }
    ],
    goods: { note: "K-pop 돔 공연은 공식 온라인 스토어 선주문 후 현장 수령 방식이 일반적입니다. 공연 2~3주 전 공지를 확인하세요.", url: null },
    stay: {
      areas: [
        { name: "스이도바시 (水道橋)", note: "도보 3분 · JR 주오소부선" },
        { name: "이다바시·코라쿠엔 (飯田橋)", note: "도보 10분 · 지하철 4개 노선" },
        { name: "아키하바라 (秋葉原)", note: "JR 3정거장 · 숙소 선택지 많음" }
      ]
    },
    tips: "12월 도쿄돔은 주말마다 대형 공연이 이어져 스이도바시 일대 숙소가 빠르게 찹니다. 티켓 확정 전이라도 무료 취소 조건으로 미리 잡아두는 편이 낫습니다.",
    source: "https://www.tokyo-dome.co.jp/en/dome/event/schedule.html",
    tags: ["돔", "K-pop"]
  },
  {
    id: "jp-yoasobi-tokyodome",
    artist: "YOASOBI",
    tour: "ASIA 10-CITY DOME & STADIUM TOUR 2026-2027「超惑星」",
    category: "japan",
    country: "일본", city: "도쿄", venue: "도쿄돔",
    mapQuery: "東京ドーム",
    dates: ["2026-12-05", "2026-12-06"],
    doorsNote: "공식 공지 참고",
    ticketOpen: null, ticketStatus: "예정",
    price: "예매처 공지 참고",
    vendor: { name: "이플러스 (e+)", url: "https://eplus.jp/sf/search?keyword=YOASOBI" },
    otherVendors: [{ name: "티켓피아", url: "https://t.pia.jp/" }],
    goods: { note: "투어 굿즈는 온라인 선행 판매 후 현장 부스에서도 판매됩니다.", url: null },
    stay: {
      areas: [
        { name: "스이도바시 (水道橋)", note: "도보 3분 · JR 주오소부선" },
        { name: "이다바시·코라쿠엔 (飯田橋)", note: "도보 10분 · 지하철 4개 노선" },
        { name: "아키하바라 (秋葉原)", note: "JR 3정거장 · 숙소 선택지 많음" }
      ]
    },
    tips: "아시아 10개 도시 돔·스타디움 투어의 도쿄 공연입니다. 서울 공연이 추가될 수 있으니 공식 발표를 확인하세요.",
    source: "https://www.tokyo-dome.co.jp/en/dome/event/schedule.html",
    tags: ["돔", "아시아투어"]
  },
  {
    id: "jp-bigbang-tokyodome",
    artist: "BIGBANG",
    tour: "2026 WORLD TOUR IN JAPAN",
    category: "japan",
    country: "일본", city: "도쿄", venue: "도쿄돔",
    mapQuery: "東京ドーム",
    dates: ["2026-12-13", "2026-12-14", "2026-12-15"],
    doorsNote: "공식 공지 참고",
    ticketOpen: null, ticketStatus: "예정",
    price: "예매처 공지 참고",
    vendor: { name: "이플러스 (e+)", url: "https://eplus.jp/sf/search?keyword=BIGBANG" },
    otherVendors: [
      { name: "티켓피아", url: "https://t.pia.jp/" },
      { name: "BIGBANG 공식 투어", url: "https://artist.ygfamily.com/ARTISTS/BIGBANG/concert/worldtour/index.html" }
    ],
    goods: { note: "데뷔 20주년 투어라 한정 MD 구성이 큽니다. 온라인 선주문 공지를 놓치지 마세요.", url: null },
    stay: {
      areas: [
        { name: "스이도바시 (水道橋)", note: "도보 3분 · JR 주오소부선" },
        { name: "이다바시·코라쿠엔 (飯田橋)", note: "도보 10분 · 지하철 4개 노선" },
        { name: "아키하바라 (秋葉原)", note: "JR 3정거장 · 숙소 선택지 많음" }
      ]
    },
    tips: "9년 만의 월드투어 3days입니다. 같은 투어의 싱가포르 공연(10/17)도 이 사이트에 등록되어 있습니다.",
    source: "https://www.tokyo-dome.co.jp/en/dome/event/schedule.html",
    tags: ["돔", "20주년", "3days"]
  },
  {
    id: "jp-fujiikaze-tokyodome",
    artist: "후지이 카제 (藤井風)",
    tour: "Prema World Tour",
    category: "japan",
    country: "일본", city: "도쿄", venue: "도쿄돔",
    mapQuery: "東京ドーム",
    dates: ["2026-12-19", "2026-12-20"],
    doorsNote: "공식 공지 참고",
    ticketOpen: null, ticketStatus: "예정",
    price: "예매처 공지 참고",
    vendor: { name: "이플러스 (e+)", url: "https://eplus.jp/sf/search?keyword=%E8%97%A4%E4%BA%95%E9%A2%A8" },
    otherVendors: [{ name: "티켓피아", url: "https://t.pia.jp/" }],
    goods: { note: "월드투어 공통 MD가 현장에서 판매됩니다.", url: null },
    stay: {
      areas: [
        { name: "스이도바시 (水道橋)", note: "도보 3분 · JR 주오소부선" },
        { name: "이다바시·코라쿠엔 (飯田橋)", note: "도보 10분 · 지하철 4개 노선" },
        { name: "아키하바라 (秋葉原)", note: "JR 3정거장 · 숙소 선택지 많음" }
      ]
    },
    tips: "연말 성수기 직전이라 12월 중순까지는 항공권이 비교적 저렴합니다.",
    source: "https://www.tokyo-dome.co.jp/en/dome/event/schedule.html",
    tags: ["돔"]
  },
  {
    id: "jp-snowman-tokyodome",
    artist: "Snow Man",
    tour: "DOME TOUR 2026-2027 ALL SUITE",
    category: "japan",
    country: "일본", city: "도쿄", venue: "도쿄돔",
    mapQuery: "東京ドーム",
    dates: ["2026-12-23", "2026-12-24", "2026-12-25", "2026-12-26"],
    doorsNote: "공식 공지 참고",
    ticketOpen: null, ticketStatus: "예정",
    price: "예매처 공지 참고",
    vendor: { name: "티켓피아", url: "https://t.pia.jp/" },
    otherVendors: [{ name: "이플러스 (e+)", url: "https://eplus.jp/" }],
    goods: { note: "사무소 소속 아티스트 공연은 굿즈가 공식 온라인 스토어에서만 판매되는 경우가 많습니다.", url: null },
    stay: {
      areas: [
        { name: "스이도바시 (水道橋)", note: "도보 3분 · JR 주오소부선" },
        { name: "이다바시·코라쿠엔 (飯田橋)", note: "도보 10분 · 지하철 4개 노선" },
        { name: "아키하바라 (秋葉原)", note: "JR 3정거장 · 숙소 선택지 많음" }
      ]
    },
    tips: "크리스마스 4days입니다. 티켓은 사실상 팬클럽 선행 추첨 전용이고, 연말 항공·숙박이 가장 비싼 시기이니 확정 전 예약은 신중히 하세요.",
    source: "https://www.tokyo-dome.co.jp/en/dome/event/schedule.html",
    tags: ["돔", "연말", "4days"]
  },
  {
    id: "jp-brunomars-tokyodome",
    artist: "Bruno Mars",
    tour: "The Romantic Tour in Japan",
    category: "japan",
    country: "일본", city: "도쿄", venue: "도쿄돔",
    mapQuery: "東京ドーム",
    dates: ["2027-01-27", "2027-01-28"],
    doorsNote: "공식 공지 참고",
    ticketOpen: null, ticketStatus: "예정",
    price: "예매처 공지 참고",
    vendor: { name: "이플러스 (e+)", url: "https://eplus.jp/sf/search?keyword=Bruno%20Mars" },
    otherVendors: [{ name: "티켓피아", url: "https://t.pia.jp/" }],
    goods: { note: "해외 아티스트 내일(來日) 공연은 현장 MD 판매가 기본입니다.", url: null },
    stay: {
      areas: [
        { name: "스이도바시 (水道橋)", note: "도보 3분 · JR 주오소부선" },
        { name: "이다바시·코라쿠엔 (飯田橋)", note: "도보 10분 · 지하철 4개 노선" },
        { name: "아키하바라 (秋葉原)", note: "JR 3정거장 · 숙소 선택지 많음" }
      ]
    },
    tips: "1월 말은 일본 여행 비수기라 항공·숙박이 가장 저렴한 시기 중 하나입니다.",
    source: "https://www.tokyo-dome.co.jp/en/dome/event/schedule.html",
    tags: ["돔", "해외 아티스트"]
  },

  /* ═══ 아시아 (일본 외) ═══════════════════════ */
  {
    id: "asia-ive-hongkong",
    artist: "IVE",
    tour: "WORLD TOUR <SHOW WHAT I AM> IN HONG KONG",
    category: "asia",
    country: "홍콩", city: "홍콩", venue: "AsiaWorld-Arena",
    mapQuery: "AsiaWorld-Expo Hong Kong",
    dates: ["2026-09-04", "2026-09-05", "2026-09-06"],
    doorsNote: "4일(금) 20:00 / 5·6일 18:00 시작",
    ticketOpen: null, ticketStatus: "판매중",
    price: "HKD 799 / 999 / 1,299 / 1,699 / VIP 2,299 (전석 지정)",
    vendor: { name: "Cityline", url: "https://shows.cityline.com/en/2026/iveshowwhatiamhk.html" },
    otherVendors: [{ name: "Live Nation Hong Kong", url: "https://www.livenation.hk/en/ive-tickets-adp1446287" }],
    goods: { note: "VIP 패키지(HKD 2,299)에 사운드체크 파티 입장, 기념 라미네이트, VIP 전용 MD 부스 이용이 포함됩니다.", url: null },
    stay: {
      areas: [
        { name: "아시아월드엑스포 인근", note: "도보 5분 · 홍콩공항 바로 옆" },
        { name: "퉁청 (東涌)", note: "MRT 1정거장 · 아웃렛 인접" },
        { name: "침사추이 (尖沙咀)", note: "공항철도 약 25분 · 시내 중심" }
      ]
    },
    tips: "공연장이 홍콩국제공항 바로 옆이라 공항 근처 숙소를 잡으면 이동이 가장 편합니다. 만 3세 이상부터 좌석 입장이 가능합니다.",
    source: "https://shows.cityline.com/en/2026/iveshowwhatiamhk.html",
    tags: ["아레나", "3days", "K-pop"]
  },
  {
    id: "asia-itzy-taipei",
    artist: "ITZY",
    tour: "3RD WORLD TOUR <TUNNEL VISION> in TAIPEI",
    category: "asia",
    country: "대만", city: "타이베이", venue: "타이베이 아레나 (台北小巨蛋)",
    mapQuery: "台北小巨蛋",
    dates: ["2026-09-05"],
    doorsNote: "공식 공지 참고",
    ticketOpen: null, ticketStatus: "판매중",
    price: "예매처 공지 참고",
    vendor: { name: "拓元 tixCraft", url: "https://tixcraft.com/" },
    otherVendors: [{ name: "Live Nation Taiwan", url: "https://www.livenation.com.tw/event/itzy-3rd-world-tour-tunnel-vision-in-taipei-taipei-tickets-edp1684394" }],
    goods: { note: "공연 당일 아레나 주변 부스에서 판매됩니다.", url: null },
    stay: {
      areas: [
        { name: "난징푸싱 (南京復興)", note: "도보 5분 · MRT 원후선" },
        { name: "중샤오둔화 (忠孝敦化)", note: "MRT 5분 · 번화가" },
        { name: "타이베이 메인스테이션 (台北車站)", note: "MRT 15분 · 교통 허브" }
      ]
    },
    tips: "대만은 拓元(tixCraft) 실명제라 티켓 1장당 본인 신분증 확인이 필요하고, 계정당 2매까지만 구매할 수 있습니다.",
    source: "https://www.livenation.com.tw/event/itzy-3rd-world-tour-tunnel-vision-in-taipei-taipei-tickets-edp1684394",
    tags: ["아레나", "실명제", "K-pop"]
  },
  {
    id: "asia-bigbang-singapore",
    artist: "BIGBANG",
    tour: "2026-2027 WORLD TOUR <XX : COSMOS> IN SINGAPORE",
    category: "asia",
    country: "싱가포르", city: "싱가포르", venue: "Singapore National Stadium",
    mapQuery: "Singapore National Stadium",
    dates: ["2026-10-17"],
    doorsNote: "19:00 시작",
    ticketOpen: null, ticketStatus: "판매중",
    price: "SGD 158 ~ 348 (6개 등급) / VIP 패키지 SGD 398 ~ 498",
    vendor: { name: "Ticketmaster Singapore", url: "https://ticketmaster.sg/" },
    otherVendors: [{ name: "BIGBANG 공식 투어", url: "https://artist.ygfamily.com/ARTISTS/BIGBANG/concert/worldtour/index.html" }],
    goods: { note: "VIP 패키지에 한정 MD가 포함됩니다. 일반 MD는 스타디움 외부 부스에서 당일 판매.", url: null },
    stay: {
      areas: [
        { name: "칼랑 (Kallang)", note: "도보 10분 · MRT 스타디움역" },
        { name: "부기스 (Bugis)", note: "MRT 10분 · 가성비 호텔 밀집" },
        { name: "마리나베이 (Marina Bay)", note: "MRT 15분 · 관광 동선 유리" }
      ]
    },
    tips: "데뷔 20주년, 9년 만의 월드투어입니다. 같은 투어의 도쿄돔 공연(12/13~15)도 등록되어 있습니다.",
    source: "https://help.ticketmaster.sg/hc/en-us/articles/49171164419345-BIGBANG-2026-2027-WORLD-TOUR-XX-COSMOS-IN-SINGAPORE",
    tags: ["스타디움", "20주년", "K-pop"]
  },
  {
    id: "asia-babymonster-bangkok",
    artist: "BABYMONSTER",
    tour: "2026-27 WORLD TOUR [춤 CHOOM] IN BANGKOK",
    category: "asia",
    country: "태국", city: "방콕", venue: "IMPACT Arena 므앙통타니",
    mapQuery: "IMPACT Arena Muang Thong Thani",
    dates: ["2026-11-07", "2026-11-08"],
    doorsNote: "18:00 시작",
    ticketOpen: null, ticketStatus: "판매중",
    price: "예매처 공지 참고",
    vendor: { name: "Live Nation Tero", url: "https://www.livenationtero.co.th/en/event/2026-27-babymonster-world-tour-%EC%B6%A4-choom-in-bangkok-bangkok-tickets-edp1673276" },
    otherVendors: [],
    goods: { note: "공연장 내 공식 MD 부스가 운영됩니다.", url: null },
    stay: {
      areas: [
        { name: "므앙통타니 (Muang Thong Thani)", note: "도보 10분 · 공연장 인근" },
        { name: "짜뚜짝·모칫 (Chatuchak)", note: "차량 30분 · BTS 연결" },
        { name: "수쿰빗 (Sukhumvit)", note: "차량 45분 · 시내 중심" }
      ]
    },
    tips: "공연장이 방콕 시내에서 멀고 종료 후 택시 대기가 깁니다. 이틀 연속 관람이면 므앙통타니 숙소가 압도적으로 편합니다.",
    source: "https://www.livenationtero.co.th/en/event/2026-27-babymonster-world-tour-%EC%B6%A4-choom-in-bangkok-bangkok-tickets-edp1673276",
    tags: ["아레나", "2days", "K-pop"]
  },

  /* ═══ 국내 ═══════════════════════════════════ */
  {
    id: "kr-leeseungchul-kspo",
    artist: "이승철",
    tour: "THE VOICE — 하반기 전국투어 서울",
    category: "domestic",
    country: "대한민국", city: "서울", venue: "KSPO DOME (올림픽공원 체조경기장)",
    mapQuery: "KSPO DOME 서울",
    dates: ["2026-12-04", "2026-12-05", "2026-12-06"],
    doorsNote: "예매처 공지 참고",
    ticketOpen: null, ticketStatus: "예정",
    price: "예매처 공지 참고",
    vendor: { name: "NOL 티켓", url: "https://tickets.interpark.com/search?keyword=%EC%9D%B4%EC%8A%B9%EC%B2%A0" },
    otherVendors: [{ name: "예스24 티켓", url: "http://ticket.yes24.com/" }],
    goods: { note: "현장 MD 부스 운영 예정.", url: null },
    stay: {
      areas: [
        { name: "잠실·석촌", note: "9호선 한성백제역 도보 10분" },
        { name: "강남", note: "지하철 약 20분" },
        { name: "건대입구", note: "차량 15분 · 심야 식당 많음" }
      ]
    },
    tips: "데뷔 40년 기념 전국투어의 서울 공연 3days입니다.",
    source: "https://view.asiae.co.kr/article/2026080409014036964",
    tags: ["돔", "3days"]
  }
];
