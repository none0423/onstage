/* 자동 생성 파일 — 직접 수정하지 마세요.
   평소에는 Cloudflare Worker 가 매시 갱신하고, 사이트가 /feed.json 으로 읽어갑니다.
   이 파일은 Worker 가 닿지 않을 때(오프라인·미배포) 쓰이는 예비 데이터입니다.
   갱신: node tools/collect.mjs
   손으로 관리하는 공연은 data/concerts.js 에 넣으면 이 파일보다 우선합니다. */

const FEED_UPDATED = "2026-09-24T22:30:00.247Z";

const FEED = [
  {
    "id": "kopis-PF299727",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": true,
    "artist": "Redoor",
    "tour": "단독콘서트: Memory",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "올림픽공원",
    "mapQuery": "올림픽공원",
    "dates": [
      "2026-09-26",
      "2026-09-27"
    ],
    "doorsNote": "토요일(18:00), 일요일(17:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "스탠딩 132,000원, 지정석 132,000원",
    "vendor": {
      "name": "놀유니버스",
      "url": "http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=26012498"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF299727_260831_135139.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF299727",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF294960",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "TAKUYA KIMURA",
    "tour": "Live Tour: Checkpoint in Seoul",
    "category": "visit",
    "country": "대한민국",
    "city": "인천",
    "venue": "인스파이어 엔터테인먼트 리조트",
    "mapQuery": "인스파이어 엔터테인먼트 리조트",
    "dates": [
      "2026-09-26"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=TAKUYA%20KIMURA%20Live%20Tour%3A%20Checkpoint%20in%20Seoul"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF294960_260630_134909.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF294960",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF293136",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "Silica Gel",
    "tour": "Asia Tour, Syn.THE.Size: Ballad of You",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "올림픽공원",
    "mapQuery": "올림픽공원",
    "dates": [
      "2026-09-26",
      "2026-09-27"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=Silica%20Gel%20Asia%20Tour%2C%20Syn.THE.Size%3A%20Ballad%20of%20You%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF293136_260608_154813.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF293136",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-joh-2026-09-26-EXILETHESECOND",
    "auto": true,
    "sourceName": "오사카성홀 공식",
    "artist": "EXILE THE SECOND",
    "tour": "오사카성홀 공연",
    "category": "japan",
    "country": "일본",
    "city": "오사카",
    "venue": "오사카성홀",
    "mapQuery": "大阪城ホール",
    "dates": [
      "2026-09-26",
      "2026-09-27"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.sound-c.co.jp/schedule/detail/10019/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=EXILE%20THE%20SECOND"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=EXILE%20THE%20SECOND"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=EXILE%20THE%20SECOND"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "오사카비즈니스파크 (大阪ビジネスパーク)",
          "note": "도보 5분 · 지하철 나가호리선"
        },
        {
          "name": "교바시 (京橋)",
          "note": "도보 15분 · JR·게이한 환승"
        },
        {
          "name": "우메다 (梅田)",
          "note": "지하철 15분 · 오사카 중심"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.osaka-johall.com/event/",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "jp-kar-2026-09-26-AKB48",
    "auto": true,
    "sourceName": "K-아레나 요코하마 공식",
    "artist": "AKB48",
    "tour": "Supported by ローソンチケット AKB48 THREE CONCEPTS LIVE in K-Arena Yokohama“新曲「好きish」コンサート”",
    "category": "japan",
    "country": "일본",
    "city": "요코하마",
    "venue": "K-아레나 요코하마",
    "mapQuery": "Kアリーナ横浜",
    "dates": [
      "2026-09-26"
    ],
    "doorsNote": "OPEN 11:00 / START 12:30",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://k-arena.com/schedule/20260926-1/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=AKB48"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=AKB48"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=AKB48"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "미나토미라이 (みなとみらい)",
          "note": "도보 8분 · 야경 명소"
        },
        {
          "name": "요코하마역 (横浜駅)",
          "note": "도보 15분 · 공항버스 직결"
        },
        {
          "name": "사쿠라기초 (桜木町)",
          "note": "도보 10분 · JR 네기시선"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://k-arena.com/schedule/",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-yka-2026-09-26-DREAMSCOMETRUE",
    "auto": true,
    "sourceName": "요코하마 아레나 공식",
    "artist": "DREAMS COME TRUE",
    "tour": "DREAMS COME TRUE CONCERT TOUR 2026 THE BLACK ◯ ALBUM",
    "category": "japan",
    "country": "일본",
    "city": "요코하마",
    "venue": "요코하마 아레나",
    "mapQuery": "横浜アリーナ",
    "dates": [
      "2026-09-26",
      "2026-09-27"
    ],
    "doorsNote": "개연 17:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.red-hot.ne.jp/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=DREAMS%20COME%20TRUE"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=DREAMS%20COME%20TRUE"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=DREAMS%20COME%20TRUE"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "신요코하마 (新横浜)",
          "note": "도보 5분 · 신칸센 정차역"
        },
        {
          "name": "요코하마역 (横浜駅)",
          "note": "JR 요코하마선 2역 · 공항버스 직결"
        },
        {
          "name": "기쿠나 (菊名)",
          "note": "1역 · 도큐 도요코선 환승"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.yokohama-arena.co.jp/event/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7Av7",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "EMPAT",
    "tour": "EMPAT Live In Singapore 2026",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "The Star Theatre",
    "mapQuery": "The Star Theatre Singapore",
    "dates": [
      "2026-09-26"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-05-22T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_empat/3403"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_empat/3403",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZgcZ71ee",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Josh Cullen",
    "tour": "LIKE ME Showcase",
    "category": "asia",
    "country": "필리핀",
    "city": "마닐라",
    "venue": "Samsung Hall",
    "mapQuery": "Samsung Hall",
    "dates": [
      "2026-09-26"
    ],
    "doorsNote": "19:00 시작",
    "ticketOpen": "2026-09-20T11:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster PH",
      "url": "https://ticketmaster.ph/ticket/area/26ph_likeme/3911"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.ph/ticket/area/26ph_likeme/3911",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF297823",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "kopisOverseas": true,
    "period": true,
    "artist": "PLAVE",
    "tour": "World Tour: KEEP IT MANIC",
    "category": "japan",
    "country": "일본",
    "city": "요코하마",
    "venue": "요코하마 피아 아레나 MM",
    "mapQuery": "요코하마 피아 아레나 MM",
    "dates": [
      "2026-09-26",
      "2026-09-27"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=PLAVE%20World%20Tour%3A%20KEEP%20IT%20MANIC%20%5B%EC%9D%BC%EB%B3%B8%20%EA%B0%80%EB%82%98%EA%B0%80%EC%99%80%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF297823_260806_105207.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF297823",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-kar-2026-09-27-AKB48",
    "auto": true,
    "sourceName": "K-아레나 요코하마 공식",
    "artist": "AKB48",
    "tour": "Supported by ローソンチケット AKB48 THREE CONCEPTS LIVE in K-Arena Yokohama“推しが「好きish」コンサート”",
    "category": "japan",
    "country": "일본",
    "city": "요코하마",
    "venue": "K-아레나 요코하마",
    "mapQuery": "Kアリーナ横浜",
    "dates": [
      "2026-09-27"
    ],
    "doorsNote": "OPEN 14:30 / START 16:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://k-arena.com/schedule/20260927-1/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=AKB48"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=AKB48"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=AKB48"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "미나토미라이 (みなとみらい)",
          "note": "도보 8분 · 야경 명소"
        },
        {
          "name": "요코하마역 (横浜駅)",
          "note": "도보 15분 · 공항버스 직결"
        },
        {
          "name": "사쿠라기초 (桜木町)",
          "note": "도보 10분 · JR 네기시선"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://k-arena.com/schedule/",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7kAd",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Henry Moodie",
    "tour": "Henry Moodie: Mood Swings World Tour in Singapore",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "The Theatre at Mediacorp",
    "mapQuery": "The Theatre at Mediacorp Singapore",
    "dates": [
      "2026-09-30"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-07-03T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/5fd/53fd086c-3b78-4e69-bf5f-87c55d46a5fd_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/5fd/53fd086c-3b78-4e69-bf5f-87c55d46a5fd_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_henrymoodie/3542"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_henrymoodie/3542",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF301302",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "HIPHOPPLAYA",
    "tour": "SHOW VOL.64",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "예스24 원더로크홀",
    "mapQuery": "예스24 원더로크홀",
    "dates": [
      "2026-10-02"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=HIPHOPPLAYA%20SHOW%20VOL.64"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301302_260918_133546.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301302",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF300985",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "DOH KYUNG SOO",
    "tour": "CONCERT TOUR: DAY OFF",
    "category": "domestic",
    "country": "대한민국",
    "city": "경기",
    "venue": "킨텍스",
    "mapQuery": "킨텍스",
    "dates": [
      "2026-10-02",
      "2026-10-04"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=DOH%20KYUNG%20SOO%20CONCERT%20TOUR%3A%20DAY%20OFF%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300985_260915_134748.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300985",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7Ade",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "The Weeknd",
    "tour": "The Weeknd: After Hours Til Dawn Tour",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "National Stadium",
    "mapQuery": "National Stadium Singapore",
    "dates": [
      "2026-10-02"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-05-21T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/e3c/6956af17-d9fa-453f-a9df-4031917d9e3c_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/e3c/6956af17-d9fa-453f-a9df-4031917d9e3c_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_theweeknd/3421"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_theweeknd/3421",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF300961",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "nafla instinct",
    "tour": "tour",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "예스24 원더로크홀",
    "mapQuery": "예스24 원더로크홀",
    "dates": [
      "2026-10-03"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=nafla%20instinct%20tour"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300961_260915_122132.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300961",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF300164",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "산들 단독 콘서트: 바람결",
    "tour": "서울 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "블루스퀘어",
    "mapQuery": "블루스퀘어",
    "dates": [
      "2026-10-03",
      "2026-10-04"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%82%B0%EB%93%A4%20%EB%8B%A8%EB%8F%85%20%EC%BD%98%EC%84%9C%ED%8A%B8%3A%20%EB%B0%94%EB%9E%8C%EA%B2%B0"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300164_260904_134550.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300164",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF299945",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "최유리",
    "tour": "콘서트: 머무름",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "장충체육관",
    "mapQuery": "장충체육관",
    "dates": [
      "2026-10-03",
      "2026-10-04"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%B5%9C%EC%9C%A0%EB%A6%AC%20%EC%BD%98%EC%84%9C%ED%8A%B8%3A%20%EB%A8%B8%EB%AC%B4%EB%A6%84%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF299945_260902_154201.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF299945",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF299879",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "울림콘서트, 10월항쟁 80주년 헌정콘서트",
    "tour": "시월에 울다, 시대를 울리다",
    "category": "domestic",
    "country": "대한민국",
    "city": "대구",
    "venue": "엑스코(exco)",
    "mapQuery": "엑스코(exco)",
    "dates": [
      "2026-10-03"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%9A%B8%EB%A6%BC%EC%BD%98%EC%84%9C%ED%8A%B8%2C%2010%EC%9B%94%ED%95%AD%EC%9F%81%2080%EC%A3%BC%EB%85%84%20%ED%97%8C%EC%A0%95%EC%BD%98%EC%84%9C%ED%8A%B8%3A%20%EC%8B%9C%EC%9B%94%EC%97%90%20%EC%9A%B8%EB%8B%A4%2C%20%EC%8B%9C%EB%8C%80%EB%A5%BC%20%EC%9A%B8%EB%A6%AC%EB%8B%A4%20%5B%EB%8C%80%EA%B5%AC%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF299879_260902_121537.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF299879",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF298230",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "&TEAM",
    "tour": "CONCERT TOUR: BLAZE THE WAY",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "올림픽공원",
    "mapQuery": "올림픽공원",
    "dates": [
      "2026-10-03",
      "2026-10-04"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%26TEAM%20CONCERT%20TOUR%3A%20BLAZE%20THE%20WAY%20%5B%EC%84%9C%EC%9A%B8%20(%EC%95%B5%EC%BD%9C)%20%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF298230_260811_133611.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF298230",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF297045",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "PERSONA",
    "tour": "LIVE TOUR: Resonance",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "예스24 라이브홀 (구. 악스코리아)",
    "mapQuery": "예스24 라이브홀 (구. 악스코리아)",
    "dates": [
      "2026-10-03"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=PERSONA%20LIVE%20TOUR%3A%20Resonance%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF297045_260727_145817.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF297045",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF292945",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "IDOL1ST KENTY",
    "tour": "ASIA TOUR",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "올림픽공원",
    "mapQuery": "올림픽공원",
    "dates": [
      "2026-10-03",
      "2026-10-04"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=IDOL1ST%20KENTY%20ASIA%20TOUR%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF292945_260605_101827.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF292945",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF288377",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "레이니",
    "tour": "내한공연 LANY: soft world tour",
    "category": "visit",
    "country": "대한민국",
    "city": "경기",
    "venue": "킨텍스",
    "mapQuery": "킨텍스",
    "dates": [
      "2026-10-03"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EB%A0%88%EC%9D%B4%EB%8B%88%20%EB%82%B4%ED%95%9C%EA%B3%B5%EC%97%B0%20LANY%3A%20soft%20world%20tour"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF288377_260331_133834.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF288377",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-joh-2026-10-03-マカロニえんぴつ",
    "auto": true,
    "sourceName": "오사카성홀 공식",
    "artist": "マカロニえんぴつ",
    "tour": "오사카성홀 공연",
    "category": "japan",
    "country": "일본",
    "city": "오사카",
    "venue": "오사카성홀",
    "mapQuery": "大阪城ホール",
    "dates": [
      "2026-10-03",
      "2026-10-04"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "[プレミアムチケット(GOODS付)] 26,400円 [プレミアムチケット] 19,800円 [全席指定] 13,200円",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.shimizuonsen.com/schedule/detail/4504/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=%E3%83%9E%E3%82%AB%E3%83%AD%E3%83%8B%E3%81%88%E3%82%93%E3%81%B4%E3%81%A4"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=%E3%83%9E%E3%82%AB%E3%83%AD%E3%83%8B%E3%81%88%E3%82%93%E3%81%B4%E3%81%A4"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=%E3%83%9E%E3%82%AB%E3%83%AD%E3%83%8B%E3%81%88%E3%82%93%E3%81%B4%E3%81%A4"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "오사카비즈니스파크 (大阪ビジネスパーク)",
          "note": "도보 5분 · 지하철 나가호리선"
        },
        {
          "name": "교바시 (京橋)",
          "note": "도보 15분 · JR·게이한 환승"
        },
        {
          "name": "우메다 (梅田)",
          "note": "지하철 15분 · 오사카 중심"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.osaka-johall.com/event/",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7kA7",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "ITZY",
    "tour": "ITZY 3RD WORLD TOUR < TUNNEL VISION > in SINGAPORE",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Singapore Indoor Stadium",
    "mapQuery": "Singapore Indoor Stadium Singapore",
    "dates": [
      "2026-10-03"
    ],
    "doorsNote": "18:00 시작",
    "ticketOpen": "2026-07-02T08:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/6e7/78d0c8b5-e611-4c4b-9562-c0b87eea16e7_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/6e7/78d0c8b5-e611-4c4b-9562-c0b87eea16e7_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_itzy/3543"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_itzy/3543",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7Add",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "The Weeknd",
    "tour": "The Weeknd: After Hours Til Dawn Tour",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "National Stadium",
    "mapQuery": "National Stadium Singapore",
    "dates": [
      "2026-10-03"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-05-21T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/e3c/6956af17-d9fa-453f-a9df-4031917d9e3c_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/e3c/6956af17-d9fa-453f-a9df-4031917d9e3c_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_theweeknd/3422"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_theweeknd/3422",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF296475",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "씨야 20주년 전국 투어",
    "tour": "콘서트: THE FAN",
    "category": "domestic",
    "country": "대한민국",
    "city": "경기",
    "venue": "킨텍스",
    "mapQuery": "킨텍스",
    "dates": [
      "2026-10-04"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%94%A8%EC%95%BC%2020%EC%A3%BC%EB%85%84%20%EC%A0%84%EA%B5%AD%20%ED%88%AC%EC%96%B4%20%EC%BD%98%EC%84%9C%ED%8A%B8%3A%20THE%20FAN%20%5B%EA%B3%A0%EC%96%91%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF296475_260720_174200.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF296475",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF293346",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "자라 라슨",
    "tour": "첫 단독 내한공연",
    "category": "visit",
    "country": "대한민국",
    "city": "서울",
    "venue": "명화라이브홀",
    "mapQuery": "명화라이브홀",
    "dates": [
      "2026-10-04",
      "2026-10-05"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%9E%90%EB%9D%BC%20%EB%9D%BC%EC%8A%A8%20%EC%B2%AB%20%EB%8B%A8%EB%8F%85%20%EB%82%B4%ED%95%9C%EA%B3%B5%EC%97%B0"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF293346_260610_165851.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF293346",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZgcZ7aee",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Moira Dela Torre",
    "tour": "Moira: Where It All Started Concert",
    "category": "asia",
    "country": "필리핀",
    "city": "Pasay",
    "venue": "SM Mall of Asia Arena",
    "mapQuery": "SM Mall of Asia Arena Pasay",
    "dates": [
      "2026-10-04"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-08-04T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/239/ddde4044-87b1-444e-a51d-89d96e2c6239_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/239/ddde4044-87b1-444e-a51d-89d96e2c6239_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster PH",
      "url": "https://ticketmaster.ph/ticket/area/26ph_moira/3811"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.ph/ticket/area/26ph_moira/3811",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T09:01:35.069Z"
  },
  {
    "id": "kopis-PF299753",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": false,
    "artist": "데미소다",
    "tour": "콘서트, DEMI-CON!",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "예스24 라이브홀 (구. 악스코리아)",
    "mapQuery": "예스24 라이브홀 (구. 악스코리아)",
    "dates": [
      "2026-10-05"
    ],
    "doorsNote": "월요일(17:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "스탠딩석 55,000원",
    "vendor": {
      "name": "예스24",
      "url": "https://ticket.yes24.com/Perf/59743"
    },
    "otherVendors": [
      {
        "name": "네이버N예약",
        "url": "https://booking.naver.com/booking/12/bizes/1725278"
      },
      {
        "name": "2TM(우리은행)",
        "url": "https://www.2tm.co.kr/ticket/10663"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF299753_260831_144921.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF299753",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF298494",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "힙합 콘서트, ASMBL CRSH: SEOUL",
    "tour": "서울 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "KBS스포츠월드(아레나)",
    "mapQuery": "KBS스포츠월드(아레나)",
    "dates": [
      "2026-10-05"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%ED%9E%99%ED%95%A9%20%EC%BD%98%EC%84%9C%ED%8A%B8%2C%20ASMBL%20CRSH%3A%20SEOUL"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF298494_260813_162955.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF298494",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-yka-2026-10-06-NEWS",
    "auto": true,
    "sourceName": "요코하마 아레나 공식",
    "artist": "NEWS",
    "tour": "NEWS LIVE TOUR 2026 /// KMK",
    "category": "japan",
    "country": "일본",
    "city": "요코하마",
    "venue": "요코하마 아레나",
    "mapQuery": "横浜アリーナ",
    "dates": [
      "2026-10-06",
      "2026-10-07",
      "2026-10-08"
    ],
    "doorsNote": "개연 18:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://starto.jp/s/p/live/10507?ima=1238&ct=concert"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=NEWS"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=NEWS"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=NEWS"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "신요코하마 (新横浜)",
          "note": "도보 5분 · 신칸센 정차역"
        },
        {
          "name": "요코하마역 (横浜駅)",
          "note": "JR 요코하마선 2역 · 공항버스 직결"
        },
        {
          "name": "기쿠나 (菊名)",
          "note": "1역 · 도큐 도요코선 환승"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.yokohama-arena.co.jp/event/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "kopis-PF300959",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "윤수일 BAND",
    "tour": "전국투어 콘서트",
    "category": "domestic",
    "country": "대한민국",
    "city": "부산",
    "venue": "벡스코 (BEXCO)",
    "mapQuery": "벡스코 (BEXCO)",
    "dates": [
      "2026-10-08"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%9C%A4%EC%88%98%EC%9D%BC%20BAND%20%EC%A0%84%EA%B5%AD%ED%88%AC%EC%96%B4%20%EC%BD%98%EC%84%9C%ED%8A%B8%20%5B%EB%B6%80%EC%82%B0%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300959_260915_114242.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300959",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF292331",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "에즈라 콜렉티브",
    "tour": "첫 단독 내한공연 Ezra Collective Live",
    "category": "visit",
    "country": "대한민국",
    "city": "서울",
    "venue": "예스24 라이브홀 (구. 악스코리아)",
    "mapQuery": "예스24 라이브홀 (구. 악스코리아)",
    "dates": [
      "2026-10-08"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%97%90%EC%A6%88%EB%9D%BC%20%EC%BD%9C%EB%A0%89%ED%8B%B0%EB%B8%8C%20%EC%B2%AB%20%EB%8B%A8%EB%8F%85%20%EB%82%B4%ED%95%9C%EA%B3%B5%EC%97%B0%20Ezra%20Collective%20Live%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF292331_260527_130919.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF292331",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF300722",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "JX TOUR CONCERT: CORE",
    "tour": "인천 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "인천",
    "venue": "인스파이어 엔터테인먼트 리조트",
    "mapQuery": "인스파이어 엔터테인먼트 리조트",
    "dates": [
      "2026-10-09",
      "2026-10-11"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=JX%20TOUR%20CONCERT%3A%20CORE%20%5B%EC%9D%B8%EC%B2%9C%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300722_260911_143216.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300722",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF300687",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "JUNE",
    "tour": "1ST CONCERT: DEAR MY BLUE",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "무신사 개러지 (구. 왓챠홀)",
    "mapQuery": "무신사 개러지 (구. 왓챠홀)",
    "dates": [
      "2026-10-09"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=JUNE%201ST%20CONCERT%3A%20DEAR%20MY%20BLUE"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300687_260911_131022.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300687",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF300440",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "PENTAGON 10th Anniversary",
    "tour": "Tour: 101010",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "블루스퀘어",
    "mapQuery": "블루스퀘어",
    "dates": [
      "2026-10-09",
      "2026-10-10"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=PENTAGON%2010th%20Anniversary%20Tour%3A%20101010%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300440_260909_105143.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300440",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF300140",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "POW",
    "tour": "CONCERT: COLOR ON",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "예스24 원더로크홀",
    "mapQuery": "예스24 원더로크홀",
    "dates": [
      "2026-10-09",
      "2026-10-10"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=POW%20CONCERT%3A%20COLOR%20ON%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300140_260904_125537.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300140",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF299306",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": false,
    "artist": "10CM",
    "tour": "FAN CONCERT: THE MISSING TRACKS 사라진 곡들의 행방, CASE No.1009",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "올림픽공원",
    "mapQuery": "올림픽공원",
    "dates": [
      "2026-10-09"
    ],
    "doorsNote": "금요일(18:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "전석 132,000원",
    "vendor": {
      "name": "놀유니버스",
      "url": "http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=26011325"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF299306_260825_110332.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF299306",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF298986",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": false,
    "artist": "CLICK-B, RE",
    "tour": "CLICK: 한여름밤의 꿈 VOL.2",
    "category": "domestic",
    "country": "대한민국",
    "city": "부산",
    "venue": "KBS홀 [부산]",
    "mapQuery": "KBS홀 [부산]",
    "dates": [
      "2026-10-09"
    ],
    "doorsNote": "금요일(17:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "R석 149,000원, S석 139,000원",
    "vendor": {
      "name": "놀유니버스",
      "url": "http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=26012055"
    },
    "otherVendors": [
      {
        "name": "예스24",
        "url": "https://ticket.yes24.com/Perf/59772"
      },
      {
        "name": "네이버N예약",
        "url": "https://booking.naver.com/booking/12/bizes/1719461"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF298986_260820_143043.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF298986",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF297875",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "AKMU",
    "tour": "CONCERT: 소문의 낙원 (Paradise of Rumors)",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "올림픽공원",
    "mapQuery": "올림픽공원",
    "dates": [
      "2026-10-09",
      "2026-10-11"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=AKMU%20CONCERT%3A%20%EC%86%8C%EB%AC%B8%EC%9D%98%20%EB%82%99%EC%9B%90%20(Paradise%20of%20Rumors)"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF297875_260806_135017.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF297875",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF292543",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "G2A",
    "tour": "경기 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "경기",
    "venue": "킨텍스",
    "mapQuery": "킨텍스",
    "dates": [
      "2026-10-09"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=G2A"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF292543_260529_172146.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF292543",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF301535",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "DJMAX MIRACLE",
    "tour": "서울 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "예스24 라이브홀 (구. 악스코리아)",
    "mapQuery": "예스24 라이브홀 (구. 악스코리아)",
    "dates": [
      "2026-10-10"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=DJMAX%20MIRACLE"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301535_260922_110647.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301535",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF299654",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": false,
    "artist": "김건모. 35TH ANNIVERSARY",
    "tour": "LIVE TOUR",
    "category": "domestic",
    "country": "대한민국",
    "city": "대구",
    "venue": "엑스코(exco)",
    "mapQuery": "엑스코(exco)",
    "dates": [
      "2026-10-10"
    ],
    "doorsNote": "토요일(17:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "VIP석 165,000원, R석 154,000원, S석 143,000원, A석 121,000원",
    "vendor": {
      "name": "예스24",
      "url": "https://ticket.yes24.com/Perf/59876"
    },
    "otherVendors": [
      {
        "name": "네이버N예약",
        "url": "https://booking.naver.com/booking/12/bizes/1723629"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF299654_260828_144449.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF299654",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF299371",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": false,
    "artist": "10CM",
    "tour": "FAN CONCERT: THE MISSING TRACKS 사라진 곡들의 행방, CASE No.1010",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "올림픽공원",
    "mapQuery": "올림픽공원",
    "dates": [
      "2026-10-10"
    ],
    "doorsNote": "토요일(18:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "전석 132,000원",
    "vendor": {
      "name": "놀유니버스",
      "url": "http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=26011968"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF299371_260826_102156.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF299371",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF298950",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": true,
    "artist": "tripleS",
    "tour": "World Tour: ANDLESS",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "장충체육관",
    "mapQuery": "장충체육관",
    "dates": [
      "2026-10-10",
      "2026-10-11"
    ],
    "doorsNote": "토요일 ~ 일요일(18:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "SSS석 165,000원, S석 30,000원",
    "vendor": {
      "name": "NHN티켓링크",
      "url": "http://www.ticketlink.co.kr/product/64906"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF298950_260820_132246.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF298950",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-yka-2026-10-10-HeySayJUMP",
    "auto": true,
    "sourceName": "요코하마 아레나 공식",
    "artist": "Hey! Say! JUMP",
    "tour": "JUMPdate!",
    "category": "japan",
    "country": "일본",
    "city": "요코하마",
    "venue": "요코하마 아레나",
    "mapQuery": "横浜アリーナ",
    "dates": [
      "2026-10-10",
      "2026-10-11",
      "2026-10-12"
    ],
    "doorsNote": "개연 17:30",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://starto.jp/s/p/live/10575?ima=3848&artist=15"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=Hey!%20Say!%20JUMP"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=Hey!%20Say!%20JUMP"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=Hey!%20Say!%20JUMP"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "신요코하마 (新横浜)",
          "note": "도보 5분 · 신칸센 정차역"
        },
        {
          "name": "요코하마역 (横浜駅)",
          "note": "JR 요코하마선 2역 · 공항버스 직결"
        },
        {
          "name": "기쿠나 (菊名)",
          "note": "1역 · 도큐 도요코선 환승"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.yokohama-arena.co.jp/event/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "kopis-PF300768",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "재즈, 이야기를 노래하다",
    "tour": "4인의 아티스트가 전하는 이야기",
    "category": "domestic",
    "country": "대한민국",
    "city": "경기",
    "venue": "인스파이어 컬쳐홀",
    "mapQuery": "인스파이어 컬쳐홀",
    "dates": [
      "2026-10-11",
      "2026-12-12"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%9E%AC%EC%A6%88%2C%20%EC%9D%B4%EC%95%BC%EA%B8%B0%EB%A5%BC%20%EB%85%B8%EB%9E%98%ED%95%98%EB%8B%A4%3A%204%EC%9D%B8%EC%9D%98%20%EC%95%84%ED%8B%B0%EC%8A%A4%ED%8A%B8%EA%B0%80%20%EC%A0%84%ED%95%98%EB%8A%94%20%EC%9D%B4%EC%95%BC%EA%B8%B0%20%5B%ED%99%94%EC%84%B1%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300768_260914_105032.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300768",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF299563",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": false,
    "artist": "10CM",
    "tour": "FAN CONCERT: THE MISSING TRACKS 사라진 곡들의 행방, CASE No.1011",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "올림픽공원",
    "mapQuery": "올림픽공원",
    "dates": [
      "2026-10-11"
    ],
    "doorsNote": "일요일(18:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "전석 132,000원",
    "vendor": {
      "name": "놀유니버스",
      "url": "http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=26011969"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF299563_260827_155224.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF299563",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF298424",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "Shi Shi, The Taste Of…",
    "tour": "World Tour",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "예스24 원더로크홀",
    "mapQuery": "예스24 원더로크홀",
    "dates": [
      "2026-10-11"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=Shi%20Shi%2C%20The%20Taste%20Of%E2%80%A6%20World%20Tour%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF298424_260813_132720.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF298424",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF300389",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "HIGHLIGHT FAN CON",
    "tour": "18년차 아이돌인 내가 이세계에선 데뷔조 연습생?!",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "장충체육관",
    "mapQuery": "장충체육관",
    "dates": [
      "2026-10-16",
      "2026-10-18"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=HIGHLIGHT%20FAN%20CON%3A%2018%EB%85%84%EC%B0%A8%20%EC%95%84%EC%9D%B4%EB%8F%8C%EC%9D%B8%20%EB%82%B4%EA%B0%80%20%EC%9D%B4%EC%84%B8%EA%B3%84%EC%97%90%EC%84%A0%20%EB%8D%B0%EB%B7%94%EC%A1%B0%20%EC%97%B0%EC%8A%B5%EC%83%9D%3F!%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300389_260908_125817.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300389",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7Adv",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "SUPER JUNIOR-83z",
    "tour": "2026 SUPER JUNIOR-83z FANCON TOUR [1983] in SINGAPORE",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "The Star Theatre",
    "mapQuery": "The Star Theatre Singapore",
    "dates": [
      "2026-10-16"
    ],
    "doorsNote": "19:30 시작",
    "ticketOpen": "2026-05-26T06:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/de9/72533105-77ad-4ffb-ae66-fd0663a79de9_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/de9/72533105-77ad-4ffb-ae66-fd0663a79de9_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_sj83z/3420"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_sj83z/3420",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF301107",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "NEXZ",
    "tour": "1ST ASIA TOUR: SAUCIN’ THE WORLD",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "올림픽공원",
    "mapQuery": "올림픽공원",
    "dates": [
      "2026-10-17",
      "2026-10-18"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=NEXZ%201ST%20ASIA%20TOUR%3A%20SAUCIN%E2%80%99%20THE%20WORLD%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301107_260916_153552.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301107",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF301014",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "ILLIT",
    "tour": "LIVE: PRESS START",
    "category": "domestic",
    "country": "대한민국",
    "city": "인천",
    "venue": "인스파이어 엔터테인먼트 리조트",
    "mapQuery": "인스파이어 엔터테인먼트 리조트",
    "dates": [
      "2026-10-17",
      "2026-10-18"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=ILLIT%20LIVE%3A%20PRESS%20START%20%5B%EC%84%9C%EC%9A%B8%20(%EC%95%B5%EC%BD%9C)%20%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301014_260915_152856.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301014",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF298971",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": false,
    "artist": "하루 첫 팬 콘서트: 오늘, 하루: 처음 들려주는 이야기",
    "tour": "부산 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "부산",
    "venue": "벡스코 (BEXCO)",
    "mapQuery": "벡스코 (BEXCO)",
    "dates": [
      "2026-10-17"
    ],
    "doorsNote": "토요일(17:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "전석 110,000원",
    "vendor": {
      "name": "예스24",
      "url": "https://ticket.yes24.com/Perf/59770"
    },
    "otherVendors": [
      {
        "name": "네이버N예약",
        "url": "https://booking.naver.com/booking/12/bizes/1719430"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF298971_260820_140434.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF298971",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF297855",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "장윤정 라이브",
    "tour": "콘서트: THE MASTER",
    "category": "domestic",
    "country": "대한민국",
    "city": "부산",
    "venue": "KBS홀 [부산]",
    "mapQuery": "KBS홀 [부산]",
    "dates": [
      "2026-10-17"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%9E%A5%EC%9C%A4%EC%A0%95%20%EB%9D%BC%EC%9D%B4%EB%B8%8C%20%EC%BD%98%EC%84%9C%ED%8A%B8%3A%20THE%20MASTER%20%5B%EB%B6%80%EC%82%B0%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF297855_260806_130841.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF297855",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF296665",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "ano",
    "tour": "LIVE",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "블루스퀘어",
    "mapQuery": "블루스퀘어",
    "dates": [
      "2026-10-17",
      "2026-10-18"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=ano%20LIVE%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF296665_260722_143755.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF296665",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF296199",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "Spot the GIG by Wanderloch, Michael Mayo 마이클 마요",
    "tour": "서울 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "예스24 원더로크홀",
    "mapQuery": "예스24 원더로크홀",
    "dates": [
      "2026-10-17"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=Spot%20the%20GIG%20by%20Wanderloch%2C%20Michael%20Mayo%20%EB%A7%88%EC%9D%B4%ED%81%B4%20%EB%A7%88%EC%9A%94"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF296199_260716_101219.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF296199",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF295656",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "NOL FESTIVAL: DAY 1, SUPER LIVE STAGE",
    "tour": "경기 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "경기",
    "venue": "킨텍스",
    "mapQuery": "킨텍스",
    "dates": [
      "2026-10-17"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=NOL%20FESTIVAL%3A%20DAY%201%2C%20SUPER%20LIVE%20STAGE"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF295656_260708_151724.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF295656",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF295653",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "NOL FESTIVAL: DAY 1, K-POP STAGE",
    "tour": "경기 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "경기",
    "venue": "킨텍스",
    "mapQuery": "킨텍스",
    "dates": [
      "2026-10-17"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=NOL%20FESTIVAL%3A%20DAY%201%2C%20K-POP%20STAGE"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF295653_260708_151216.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF295653",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF295650",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "NOL FESTIVAL: DAY 1, EDM STAGE",
    "tour": "경기 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "경기",
    "venue": "킨텍스",
    "mapQuery": "킨텍스",
    "dates": [
      "2026-10-17"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=NOL%20FESTIVAL%3A%20DAY%201%2C%20EDM%20STAGE"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF295650_260708_150722.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF295650",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7FAF",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Plave",
    "tour": "2026 PLAVE World Tour [KEEP IT MANIC] in Singapore",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "APEX @ EXPO",
    "mapQuery": "APEX @ EXPO Singapore",
    "dates": [
      "2026-10-17"
    ],
    "doorsNote": "15:00 시작",
    "ticketOpen": "2026-07-31T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/d32/0880454a-94a2-461d-ba6a-1b40e48f3d32_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/d32/0880454a-94a2-461d-ba6a-1b40e48f3d32_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_plave/3747"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_plave/3747",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7Fkv",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "BIGBANG",
    "tour": "BIGBANG 2026-2027 WORLD TOUR < XX : COSMOS > IN SINGAPORE",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "National Stadium",
    "mapQuery": "National Stadium Singapore",
    "dates": [
      "2026-10-17"
    ],
    "doorsNote": "19:00 시작",
    "ticketOpen": "2026-08-13T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/b72/65ea89f1-6d42-4904-a3e8-c05dd0b5ab72_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/b72/65ea89f1-6d42-4904-a3e8-c05dd0b5ab72_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_bigbang2026/3750"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_bigbang2026/3750",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7adv",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Rock of Ages",
    "tour": "GOLD 905's Rock of Ages Night",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Hard Rock Café, Cuscaden Road",
    "mapQuery": "Hard Rock Café, Cuscaden Road Singapore",
    "dates": [
      "2026-10-17"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-08-17T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_rockofages26/3820"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_rockofages26/3820",
    "tags": [
      "Dance/Electronic"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF300588",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "TAKASE TOYA",
    "tour": "ASIA TOUR: ∞",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "예스24 원더로크홀",
    "mapQuery": "예스24 원더로크홀",
    "dates": [
      "2026-10-18"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=TAKASE%20TOYA%20ASIA%20TOUR%3A%20%E2%88%9E%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300588_260910_123330.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300588",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF295661",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "NOL FESTIVAL: DAY 2, SUPER LIVE STAGE",
    "tour": "경기 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "경기",
    "venue": "킨텍스",
    "mapQuery": "킨텍스",
    "dates": [
      "2026-10-18"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=NOL%20FESTIVAL%3A%20DAY%202%2C%20SUPER%20LIVE%20STAGE"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF295661_260708_152555.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF295661",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF295657",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "NOL FESTIVAL: DAY 2, K-POP STAGE",
    "tour": "경기 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "경기",
    "venue": "킨텍스",
    "mapQuery": "킨텍스",
    "dates": [
      "2026-10-18"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=NOL%20FESTIVAL%3A%20DAY%202%2C%20K-POP%20STAGE"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF295657_260708_152132.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF295657",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF294975",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "폴 길버트",
    "tour": "내한공연 Paul Gilbert WROC World Tour",
    "category": "visit",
    "country": "대한민국",
    "city": "서울",
    "venue": "무신사 개러지 (구. 왓챠홀)",
    "mapQuery": "무신사 개러지 (구. 왓챠홀)",
    "dates": [
      "2026-10-18"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%ED%8F%B4%20%EA%B8%B8%EB%B2%84%ED%8A%B8%20%EB%82%B4%ED%95%9C%EA%B3%B5%EC%97%B0%20Paul%20Gilbert%20WROC%20World%20Tour"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF294975_260701_100956.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF294975",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7FFA",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "NCT 127",
    "tour": "NCT 127 5TH TOUR 'NEO CITY : SINGAPORE - THE REDLINE'",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Singapore Indoor Stadium",
    "mapQuery": "Singapore Indoor Stadium Singapore",
    "dates": [
      "2026-10-18"
    ],
    "doorsNote": "19:00 시작",
    "ticketOpen": "2026-08-21T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/3cd/27d8be83-ad42-4bf4-a346-46295a6a43cd_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/3cd/27d8be83-ad42-4bf4-a346-46295a6a43cd_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_nct127/3774"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_nct127/3774",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7Fke",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "BIGBANG",
    "tour": "BIGBANG 2026-2027 WORLD TOUR < XX : COSMOS > IN SINGAPORE",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "National Stadium",
    "mapQuery": "National Stadium Singapore",
    "dates": [
      "2026-10-18"
    ],
    "doorsNote": "19:00 시작",
    "ticketOpen": "2026-09-03T08:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/b72/65ea89f1-6d42-4904-a3e8-c05dd0b5ab72_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/b72/65ea89f1-6d42-4904-a3e8-c05dd0b5ab72_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_bigbang2026/3751"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_bigbang2026/3751",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7ak1",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "ONE OR EIGHT",
    "tour": "ONE OR EIGHT Special SHOW CASE 2026 in ASIA -V8- in Singapore",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Victoria Theatre",
    "mapQuery": "Victoria Theatre Singapore",
    "dates": [
      "2026-10-21"
    ],
    "doorsNote": "19:30 시작",
    "ticketOpen": "2026-08-31T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/745/b74a7881-df5d-4080-8457-f748ba0db745_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/745/b74a7881-df5d-4080-8457-f748ba0db745_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_oneoreight/3859"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_oneoreight/3859",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF301572",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": false,
    "artist": "잔나비 발라드 컬렉션",
    "tour": "10월의 어느 멋진 날에",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "올림픽공원",
    "mapQuery": "올림픽공원",
    "dates": [
      "2026-10-23"
    ],
    "doorsNote": "금요일(19:30)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "Floor석(현장수령) 178,000원, M석 178,000원, J석 169,000원, F석 139,000원",
    "vendor": {
      "name": "NHN티켓링크",
      "url": "http://www.ticketlink.co.kr/product/65772"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301572_260922_134911.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301572",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF300839",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "이승기",
    "tour": "콘서트, 기승전: 樂",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "블루스퀘어",
    "mapQuery": "블루스퀘어",
    "dates": [
      "2026-10-23",
      "2026-10-25"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%9D%B4%EC%8A%B9%EA%B8%B0%20%EC%BD%98%EC%84%9C%ED%8A%B8%2C%20%EA%B8%B0%EC%8A%B9%EC%A0%84%3A%20%E6%A8%82"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300839_260914_142043.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300839",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF299464",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": false,
    "artist": "THE MAIN VOCALS",
    "tour": "Season 1",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "KBS스포츠월드(아레나)",
    "mapQuery": "KBS스포츠월드(아레나)",
    "dates": [
      "2026-10-23"
    ],
    "doorsNote": "금요일(19:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "1층 R석 110,000원, 2층 A석 110,000원, 3층 B석 99,000원",
    "vendor": {
      "name": "NHN티켓링크",
      "url": "http://www.ticketlink.co.kr/product/65009"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF299464_260827_104645.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF299464",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7ae6",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Qiu Feng Ze",
    "tour": "2026 邱鋒澤 Feng Ze Bend The Lines Concert - Singapore",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Esplanade Concert Hall",
    "mapQuery": "Esplanade Concert Hall Singapore",
    "dates": [
      "2026-10-23"
    ],
    "doorsNote": "19:30 시작",
    "ticketOpen": "2026-08-06T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_qiufengze/3816"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_qiufengze/3816",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZgcZ71ve",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Zephanie",
    "tour": "SHINE Zephanie First Fan Meet",
    "category": "asia",
    "country": "필리핀",
    "city": "마닐라",
    "venue": "Skydome, SM City North Edsa",
    "mapQuery": "Skydome, SM City North Edsa",
    "dates": [
      "2026-10-23"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-09-15T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster PH",
      "url": "https://ticketmaster.ph/ticket/area/26ph_zephanie/3901"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.ph/ticket/area/26ph_zephanie/3901",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZgcZ7aF7",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "ONE OR EIGHT",
    "tour": "ONE OR EIGHT Special SHOW CASE 2026 in ASIA -V8- Tour in Manila",
    "category": "asia",
    "country": "필리핀",
    "city": "마닐라",
    "venue": "Samsung Hall",
    "mapQuery": "Samsung Hall",
    "dates": [
      "2026-10-23"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-08-31T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/745/b74a7881-df5d-4080-8457-f748ba0db745_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/745/b74a7881-df5d-4080-8457-f748ba0db745_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster PH",
      "url": "https://ticketmaster.ph/ticket/area/26ph_oneoreight/3873"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.ph/ticket/area/26ph_oneoreight/3873",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T09:01:35.069Z"
  },
  {
    "id": "kopis-PF301580",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": true,
    "artist": "잔나비",
    "tour": "ASIA TOUR FINAL: 스웨트 앤 스타더스트",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "올림픽공원",
    "mapQuery": "올림픽공원",
    "dates": [
      "2026-10-24",
      "2026-10-25"
    ],
    "doorsNote": "토요일(18:00), 일요일(17:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "f'I'oor(현장수령)석 189,000원, M석 189,000원, J석 169,000원, F석 139,000원",
    "vendor": {
      "name": "NHN티켓링크",
      "url": "http://www.ticketlink.co.kr/product/65735"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301580_260922_140529.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301580",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF301012",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "82MAJOR",
    "tour": "6th CONCERT, 82CLUB: out of control",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "예스24 라이브홀 (구. 악스코리아)",
    "mapQuery": "예스24 라이브홀 (구. 악스코리아)",
    "dates": [
      "2026-10-24",
      "2026-10-25"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=82MAJOR%206th%20CONCERT%2C%2082CLUB%3A%20out%20of%20control"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301012_260915_152002.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301012",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF300711",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "데이먼스 이어",
    "tour": "콘서트: 죽은 연인에게로",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "장충체육관",
    "mapQuery": "장충체육관",
    "dates": [
      "2026-10-24",
      "2026-10-25"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EB%8D%B0%EC%9D%B4%EB%A8%BC%EC%8A%A4%20%EC%9D%B4%EC%96%B4%20%EC%BD%98%EC%84%9C%ED%8A%B8%3A%20%EC%A3%BD%EC%9D%80%20%EC%97%B0%EC%9D%B8%EC%97%90%EA%B2%8C%EB%A1%9C"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300711_260911_141228.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300711",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF300627",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "심규선",
    "tour": "단독 콘서트: SANCTUARY",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "올림픽공원",
    "mapQuery": "올림픽공원",
    "dates": [
      "2026-10-24",
      "2026-11-01"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%8B%AC%EA%B7%9C%EC%84%A0%20%EB%8B%A8%EB%8F%85%20%EC%BD%98%EC%84%9C%ED%8A%B8%3A%20SANCTUARY"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300627_260910_142935.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300627",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF300115",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "최항석과 부기몬스터",
    "tour": "Human Scramble",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "무신사 개러지 (구. 왓챠홀)",
    "mapQuery": "무신사 개러지 (구. 왓챠홀)",
    "dates": [
      "2026-10-24"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%B5%9C%ED%95%AD%EC%84%9D%EA%B3%BC%20%EB%B6%80%EA%B8%B0%EB%AA%AC%EC%8A%A4%ED%84%B0%3A%20Human%20Scramble"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300115_260904_105322.jpeg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300115",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF299842",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": true,
    "artist": "소수빈",
    "tour": "단독공연: 늘 그래왔던 것처럼 앞으로도",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "올림픽공원",
    "mapQuery": "올림픽공원",
    "dates": [
      "2026-10-24",
      "2026-10-25"
    ],
    "doorsNote": "토요일(18:00), 일요일(17:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "전석 132,000원",
    "vendor": {
      "name": "놀유니버스",
      "url": "http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=26012327"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF299842_260901_135312.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF299842",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF299310",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": false,
    "artist": "스카 페스티벌 10주년 기념공연 SKA FESTIVAL: Super-Swag",
    "tour": "서울 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "KBS스포츠월드(아레나)",
    "mapQuery": "KBS스포츠월드(아레나)",
    "dates": [
      "2026-10-24"
    ],
    "doorsNote": "토요일(17:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "1층 스탠딩석 88,000원, 2층 A석 88,000원, 3층 B석 77,000원",
    "vendor": {
      "name": "네이버N예약",
      "url": "https://booking.naver.com/booking/12/bizes/1721787"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF299310_260825_111501.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF299310",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-kyo-2026-10-24-YOASOBI",
    "auto": true,
    "sourceName": "교세라돔 오사카 공식",
    "artist": "YOASOBI",
    "tour": "YOASOBI ASIA 10-CITY DOME & STADIUM TOUR 2026-2027 “超惑星”",
    "category": "japan",
    "country": "일본",
    "city": "오사카",
    "venue": "교세라돔 오사카",
    "mapQuery": "京セラドーム大阪",
    "dates": [
      "2026-10-24",
      "2026-10-25"
    ],
    "doorsNote": "15:30",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.kyoceradome-osaka.jp/schedule/?yearId=2026&monthId=10&cat=#event2026-10-24"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=YOASOBI"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=YOASOBI"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=YOASOBI"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "돔마에 (ドーム前)",
          "note": "도보 3분 · 한신 난바선"
        },
        {
          "name": "난바 (なんば)",
          "note": "지하철 10분 · 심야 식당 많음"
        },
        {
          "name": "신사이바시 (心斎橋)",
          "note": "지하철 12분 · 쇼핑 중심"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.kyoceradome-osaka.jp/schedule/",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-fuk-2026-10-24-StrayKids",
    "auto": true,
    "sourceName": "미즈호PayPay돔 후쿠오카 공식",
    "artist": "Stray Kids",
    "tour": "World Tour <RUN IT JAPAN>",
    "category": "japan",
    "country": "일본",
    "city": "후쿠오카",
    "venue": "미즈호PayPay돔 후쿠오카",
    "mapQuery": "みずほPayPayドーム福岡",
    "dates": [
      "2026-10-24"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.straykidsjapan.com/info/archive/?584436"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=Stray%20Kids"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=Stray%20Kids"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=Stray%20Kids"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "도진마치 (唐人町)",
          "note": "도보 15분 · 지하철 공항선"
        },
        {
          "name": "텐진 (天神)",
          "note": "지하철 10분 · 번화가, 셔틀버스"
        },
        {
          "name": "하카타 (博多)",
          "note": "지하철 15분 · 신칸센·공항 직결"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.softbankhawks.co.jp/stadium/event_schedule/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7k1v",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Bobby Chen",
    "tour": "陳昇《荷包蛋去远⾜了》巡回演唱会—远⾜第⼆站 - 新加坡 Bobby Chen’s “Sunny-side Up Goes Hiking” Concert Tour 2026 – Singapore",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Esplanade Concert Hall",
    "mapQuery": "Esplanade Concert Hall Singapore",
    "dates": [
      "2026-10-24"
    ],
    "doorsNote": "19:30 시작",
    "ticketOpen": "2026-07-06T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_bobbychen/3590"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_bobbychen/3590",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF300240",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "브로콜리너마저의 전국 인디 교류 투어",
    "tour": "서울 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "예스24 원더로크홀",
    "mapQuery": "예스24 원더로크홀",
    "dates": [
      "2026-10-25"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EB%B8%8C%EB%A1%9C%EC%BD%9C%EB%A6%AC%EB%84%88%EB%A7%88%EC%A0%80%EC%9D%98%20%EC%A0%84%EA%B5%AD%20%EC%9D%B8%EB%94%94%20%EA%B5%90%EB%A5%98%20%ED%88%AC%EC%96%B4%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300240_260907_122046.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300240",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "jp-yka-2026-10-25-withMAMOSTAR",
    "auto": true,
    "sourceName": "요코하마 아레나 공식",
    "artist": "with MAMO～STAR～",
    "tour": "요코하마 아레나 공연",
    "category": "japan",
    "country": "일본",
    "city": "요코하마",
    "venue": "요코하마 아레나",
    "mapQuery": "横浜アリーナ",
    "dates": [
      "2026-10-25"
    ],
    "doorsNote": "개연 16:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://event.1242.com/events/miyanomamoru/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=with%20MAMO%EF%BD%9ESTAR%EF%BD%9E"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=with%20MAMO%EF%BD%9ESTAR%EF%BD%9E"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=with%20MAMO%EF%BD%9ESTAR%EF%BD%9E"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "신요코하마 (新横浜)",
          "note": "도보 5분 · 신칸센 정차역"
        },
        {
          "name": "요코하마역 (横浜駅)",
          "note": "JR 요코하마선 2역 · 공항버스 직결"
        },
        {
          "name": "기쿠나 (菊名)",
          "note": "1역 · 도큐 도요코선 환승"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.yokohama-arena.co.jp/event/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7Aee",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "BINI",
    "tour": "BINI: SIGNALS WORLD TOUR 2026 SINGAPORE",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Arena @ EXPO",
    "mapQuery": "Arena @ EXPO Singapore",
    "dates": [
      "2026-10-25"
    ],
    "doorsNote": "17:00 시작",
    "ticketOpen": "2026-05-15T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/42e/1fe7b8ff-1cb8-49a4-8284-a3c5b06a742e_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/42e/1fe7b8ff-1cb8-49a4-8284-a3c5b06a742e_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_bini/3411"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_bini/3411",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF296524",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "벤슨 분",
    "tour": "내한공연",
    "category": "visit",
    "country": "대한민국",
    "city": "경기",
    "venue": "킨텍스",
    "mapQuery": "킨텍스",
    "dates": [
      "2026-10-26"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EB%B2%A4%EC%8A%A8%20%EB%B6%84%20%EB%82%B4%ED%95%9C%EA%B3%B5%EC%97%B0"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF296524_260721_112323.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF296524",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF300665",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "FLOW NARUTO THE ROCK",
    "tour": "WORLD TOUR",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "예스24 라이브홀 (구. 악스코리아)",
    "mapQuery": "예스24 라이브홀 (구. 악스코리아)",
    "dates": [
      "2026-10-28"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=FLOW%20NARUTO%20THE%20ROCK%20WORLD%20TOUR%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300665_260911_110435.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300665",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "jp-td-2026-10-29-MTVVMAJ2026",
    "auto": true,
    "sourceName": "도쿄돔 공식",
    "artist": "MTV VMAJ 2026",
    "tour": "도쿄돔 공연",
    "category": "japan",
    "country": "일본",
    "city": "도쿄",
    "venue": "도쿄돔",
    "mapQuery": "東京ドーム",
    "dates": [
      "2026-10-29"
    ],
    "doorsNote": "開場 16:00／開演 18:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.mtvjapan.com/event/vmaj/2026/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=MTV%20VMAJ%202026"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=MTV%20VMAJ%202026"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=MTV%20VMAJ%202026"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "스이도바시 (水道橋)",
          "note": "도보 3분 · JR 주오소부선"
        },
        {
          "name": "이다바시·코라쿠엔 (飯田橋)",
          "note": "도보 10분 · 지하철 4개 노선"
        },
        {
          "name": "아키하바라 (秋葉原)",
          "note": "JR 3정거장 · 숙소 선택지 많음"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.tokyo-dome.co.jp/dome/event/schedule.html",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF301089",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "ONEW",
    "tour": "CONCERT: ONEW THE LIVE: Q",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "올림픽공원",
    "mapQuery": "올림픽공원",
    "dates": [
      "2026-10-30",
      "2026-11-01"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=ONEW%20CONCERT%3A%20ONEW%20THE%20LIVE%3A%20Q%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301089_260916_144800.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301089",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF298096",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "칸호 야쿠시지",
    "tour": "첫 내한공연, 10주년 월드투어: Circle of Harmony",
    "category": "visit",
    "country": "대한민국",
    "city": "서울",
    "venue": "예스24 원더로크홀",
    "mapQuery": "예스24 원더로크홀",
    "dates": [
      "2026-10-30"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%B9%B8%ED%98%B8%20%EC%95%BC%EC%BF%A0%EC%8B%9C%EC%A7%80%20%EC%B2%AB%20%EB%82%B4%ED%95%9C%EA%B3%B5%EC%97%B0%2C%2010%EC%A3%BC%EB%85%84%20%EC%9B%94%EB%93%9C%ED%88%AC%EC%96%B4%3A%20Circle%20of%20Harmony"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF298096_260810_141117.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF298096",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF301629",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": true,
    "artist": "까치산",
    "tour": "클럽 투어: 여기, 까치산입니다.",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "무신사 개러지 (구. 왓챠홀)",
    "mapQuery": "무신사 개러지 (구. 왓챠홀)",
    "dates": [
      "2026-10-31",
      "2026-11-01"
    ],
    "doorsNote": "토요일(19:00), 일요일(17:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "전석 77,000원",
    "vendor": {
      "name": "29CM",
      "url": "https://ticket.29cm.co.kr/catalog/4225812"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301629_260923_102738.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301629",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF300574",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "이창섭",
    "tour": "단독 콘서트: Unknown",
    "category": "domestic",
    "country": "대한민국",
    "city": "부산",
    "venue": "벡스코 (BEXCO)",
    "mapQuery": "벡스코 (BEXCO)",
    "dates": [
      "2026-10-31",
      "2026-11-01"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%9D%B4%EC%B0%BD%EC%84%AD%20%EB%8B%A8%EB%8F%85%20%EC%BD%98%EC%84%9C%ED%8A%B8%3A%20Unknown%20%5B%EB%B6%80%EC%82%B0%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300574_260910_111914.png"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300574",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF300499",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "김재환",
    "tour": "콘서트: 여백: 餘白",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "블루스퀘어",
    "mapQuery": "블루스퀘어",
    "dates": [
      "2026-10-31",
      "2026-11-01"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EA%B9%80%EC%9E%AC%ED%99%98%20%EC%BD%98%EC%84%9C%ED%8A%B8%3A%20%EC%97%AC%EB%B0%B1%3A%20%E9%A4%98%E7%99%BD"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300499_260909_144219.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300499",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF299469",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": false,
    "artist": "EverBlue Festival 에버블루 페스티벌",
    "tour": "대구 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "대구",
    "venue": "엑스코(exco)",
    "mapQuery": "엑스코(exco)",
    "dates": [
      "2026-10-31"
    ],
    "doorsNote": "토요일(14:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "스탠딩 121,000원",
    "vendor": {
      "name": "놀유니버스",
      "url": "http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=26012230"
    },
    "otherVendors": [
      {
        "name": "NHN티켓링크",
        "url": "http://www.ticketlink.co.kr/product/65183"
      },
      {
        "name": "네이버N예약",
        "url": "https://booking.naver.com/booking/12/bizes/1725330"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF299469_260828_104613.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF299469",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-yka-2026-10-31-UKNOW東方神起",
    "auto": true,
    "sourceName": "요코하마 아레나 공식",
    "artist": "U-KNOW (東方神起)",
    "tour": "U-KNOW PROJECT 26 : SCENE ♯1 – EDIT",
    "category": "japan",
    "country": "일본",
    "city": "요코하마",
    "venue": "요코하마 아레나",
    "mapQuery": "横浜アリーナ",
    "dates": [
      "2026-10-31",
      "2026-11-01"
    ],
    "doorsNote": "개연 18:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://toho-jp.net/news/detail.php?id=1134229"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=U-KNOW"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=U-KNOW"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=U-KNOW"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "신요코하마 (新横浜)",
          "note": "도보 5분 · 신칸센 정차역"
        },
        {
          "name": "요코하마역 (横浜駅)",
          "note": "JR 요코하마선 2역 · 공항버스 직결"
        },
        {
          "name": "기쿠나 (菊名)",
          "note": "1역 · 도큐 도요코선 환승"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.yokohama-arena.co.jp/event/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7kaF",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Benson Boone",
    "tour": "Benson Boone – Live in Singapore",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "The Star Theatre",
    "mapQuery": "The Star Theatre Singapore",
    "dates": [
      "2026-11-02"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-07-22T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/c0a/a7e08bf4-8576-49ab-a813-3b0bf5609c0a_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/c0a/a7e08bf4-8576-49ab-a813-3b0bf5609c0a_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_bensonboone/3587"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_bensonboone/3587",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-yka-2026-11-03-iRis",
    "auto": true,
    "sourceName": "요코하마 아레나 공식",
    "artist": "i☆Ris",
    "tour": "i☆Ris 14th Anniversary Live",
    "category": "japan",
    "country": "일본",
    "city": "요코하마",
    "venue": "요코하마 아레나",
    "mapQuery": "横浜アリーナ",
    "dates": [
      "2026-11-03"
    ],
    "doorsNote": "개연 18:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://iris.dive2ent.com/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=i%E2%98%86Ris"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=i%E2%98%86Ris"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=i%E2%98%86Ris"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "신요코하마 (新横浜)",
          "note": "도보 5분 · 신칸센 정차역"
        },
        {
          "name": "요코하마역 (横浜駅)",
          "note": "JR 요코하마선 2역 · 공항버스 직결"
        },
        {
          "name": "기쿠나 (菊名)",
          "note": "1역 · 도큐 도요코선 환승"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.yokohama-arena.co.jp/event/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7Fk1",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "yung kai",
    "tour": "yung kai - stay with the ocean, i’ll find you: asia tour 2026 in Singapore",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Capitol Theatre",
    "mapQuery": "Capitol Theatre Singapore",
    "dates": [
      "2026-11-03"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-08-06T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/567/40621880-876b-4c9d-93a6-2f5722728567_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/567/40621880-876b-4c9d-93a6-2f5722728567_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_yungkai/3759"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_yungkai/3759",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ777v",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "LANY",
    "tour": "LANY: soft world tour in  Singapore",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Singapore Indoor Stadium",
    "mapQuery": "Singapore Indoor Stadium Singapore",
    "dates": [
      "2026-11-04"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-03-27T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/1f2/b3e4faa9-84a5-4d0a-b420-d637804bc1f2_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/1f2/b3e4faa9-84a5-4d0a-b420-d637804bc1f2_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_lany/3330"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_lany/3330",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF301501",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "MAX CHANGMIN",
    "tour": "LIVE SESSION: RESONANCE in SEOUL",
    "category": "visit",
    "country": "대한민국",
    "city": "서울",
    "venue": "예스24 라이브홀 (구. 악스코리아)",
    "mapQuery": "예스24 라이브홀 (구. 악스코리아)",
    "dates": [
      "2026-11-06",
      "2026-11-08"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=MAX%20CHANGMIN%20LIVE%20SESSION%3A%20RESONANCE%20in%20SEOUL"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301501_260921_172252.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301501",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF300994",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "KWON JIN AH",
    "tour": "LIVE TOUR SAVE ME IN SEOUL",
    "category": "visit",
    "country": "대한민국",
    "city": "서울",
    "venue": "명화라이브홀",
    "mapQuery": "명화라이브홀",
    "dates": [
      "2026-11-06",
      "2026-11-08"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=KWON%20JIN%20AH%20LIVE%20TOUR%20SAVE%20ME%20IN%20SEOUL"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300994_260915_141800.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300994",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF299607",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": true,
    "artist": "EXO PLANET #6, EXhOrizon",
    "tour": "서울 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "올림픽공원",
    "mapQuery": "올림픽공원",
    "dates": [
      "2026-11-06",
      "2026-11-08"
    ],
    "doorsNote": "금요일(19:00), 토요일(18:00), 일요일(17:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "VIP(STANDING)석 198,000원, VIP(SEATED)석 198,000원, 일반(STANDING)석 165,000원, 일반(SEATED)석 165,000원",
    "vendor": {
      "name": "멜론티켓",
      "url": "https://ticket.melon.com/performance/index.htm?prodId=213773"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF299607_260828_130100.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF299607",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-td-2026-11-06-StrayKids",
    "auto": true,
    "sourceName": "도쿄돔 공식",
    "artist": "Stray Kids",
    "tour": "World Tour <RUN IT JAPAN>",
    "category": "japan",
    "country": "일본",
    "city": "도쿄",
    "venue": "도쿄돔",
    "mapQuery": "東京ドーム",
    "dates": [
      "2026-11-06",
      "2026-11-07",
      "2026-11-08"
    ],
    "doorsNote": "開場 16:00／開演 18:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.straykidsjapan.com/runitjapan/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=Stray%20Kids"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=Stray%20Kids"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=Stray%20Kids"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "스이도바시 (水道橋)",
          "note": "도보 3분 · JR 주오소부선"
        },
        {
          "name": "이다바시·코라쿠엔 (飯田橋)",
          "note": "도보 10분 · 지하철 4개 노선"
        },
        {
          "name": "아키하바라 (秋葉原)",
          "note": "JR 3정거장 · 숙소 선택지 많음"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.tokyo-dome.co.jp/dome/event/schedule.html",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-yka-2026-11-06-バズリズム",
    "auto": true,
    "sourceName": "요코하마 아레나 공식",
    "artist": "バズリズム",
    "tour": "LIVE 2026 supported by 日本郵政",
    "category": "japan",
    "country": "일본",
    "city": "요코하마",
    "venue": "요코하마 아레나",
    "mapQuery": "横浜アリーナ",
    "dates": [
      "2026-11-06",
      "2026-11-07",
      "2026-11-08"
    ],
    "doorsNote": "개연 17:00(予定)",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://buzzrhythm.live/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=%E3%83%90%E3%82%BA%E3%83%AA%E3%82%BA%E3%83%A0"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=%E3%83%90%E3%82%BA%E3%83%AA%E3%82%BA%E3%83%A0"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=%E3%83%90%E3%82%BA%E3%83%AA%E3%82%BA%E3%83%A0"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "신요코하마 (新横浜)",
          "note": "도보 5분 · 신칸센 정차역"
        },
        {
          "name": "요코하마역 (横浜駅)",
          "note": "JR 요코하마선 2역 · 공항버스 직결"
        },
        {
          "name": "기쿠나 (菊名)",
          "note": "1역 · 도큐 도요코선 환승"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.yokohama-arena.co.jp/event/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "kopis-PF301470",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "PARK JINYOUNG",
    "tour": "1ST CONCERT TOUR: CODE#",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "장충체육관",
    "mapQuery": "장충체육관",
    "dates": [
      "2026-11-07",
      "2026-11-08"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=PARK%20JINYOUNG%201ST%20CONCERT%20TOUR%3A%20CODE%23%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301470_260921_153828.png"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301470",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF300893",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "AKMU",
    "tour": "CONCERT: 소문의 낙원 (Paradise of Rumors)",
    "category": "domestic",
    "country": "대한민국",
    "city": "강원",
    "venue": "강릉 올림픽파크",
    "mapQuery": "강릉 올림픽파크",
    "dates": [
      "2026-11-07"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=AKMU%20CONCERT%3A%20%EC%86%8C%EB%AC%B8%EC%9D%98%20%EB%82%99%EC%9B%90%20(Paradise%20of%20Rumors)%20%5B%EA%B0%95%EB%A6%89%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300893_260914_163047.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300893",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF299965",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "최유리",
    "tour": "콘서트: 머무름",
    "category": "domestic",
    "country": "대한민국",
    "city": "부산",
    "venue": "벡스코 (BEXCO)",
    "mapQuery": "벡스코 (BEXCO)",
    "dates": [
      "2026-11-07",
      "2026-11-08"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%B5%9C%EC%9C%A0%EB%A6%AC%20%EC%BD%98%EC%84%9C%ED%8A%B8%3A%20%EB%A8%B8%EB%AC%B4%EB%A6%84%20%5B%EB%B6%80%EC%82%B0%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF299965_260902_161957.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF299965",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF299827",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": false,
    "artist": "AKANE YONEZAWA, Black Pasta",
    "tour": "TOUR",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "예스24 원더로크홀",
    "mapQuery": "예스24 원더로크홀",
    "dates": [
      "2026-11-07"
    ],
    "doorsNote": "토요일(18:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "VIP석 160,000원, GA석 110,000원",
    "vendor": {
      "name": "예스24",
      "url": "https://ticket.yes24.com/Perf/59781"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF299827_260901_131413.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF299827",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF296308",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "Touche Amore, Stage Four 10 Year Anniversary",
    "tour": "서울 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "무신사 개러지 (구. 왓챠홀)",
    "mapQuery": "무신사 개러지 (구. 왓챠홀)",
    "dates": [
      "2026-11-07"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=Touche%20Amore%2C%20Stage%20Four%2010%20Year%20Anniversary%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF296308_260720_110352.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF296308",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-vdn-2026-11-07-YOASOBI",
    "auto": true,
    "sourceName": "반텔린돔 나고야 공식",
    "artist": "YOASOBI",
    "tour": "ASIA 10-CITY DOME & STADIUM TOUR 2026-2027 “超惑星”",
    "category": "japan",
    "country": "일본",
    "city": "나고야",
    "venue": "반텔린돔 나고야",
    "mapQuery": "バンテリンドーム ナゴヤ",
    "dates": [
      "2026-11-07",
      "2026-11-08"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.yoasobi-music.jp/live/54776"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=YOASOBI"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=YOASOBI"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=YOASOBI"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "나고야돔마에야다 (ナゴヤドーム前矢田)",
          "note": "도보 5분 · 지하철 메이조선"
        },
        {
          "name": "사카에 (栄)",
          "note": "지하철 15분 · 번화가"
        },
        {
          "name": "나고야역 (名古屋駅)",
          "note": "지하철 25분 · 신칸센·공항 직결"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.nagoya-dome.co.jp/enjoy/index.php",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7aA7",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "William So",
    "tour": "SO IN LOVE - 苏永康演唱会2026",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Esplanade Theatre Studio",
    "mapQuery": "Esplanade Theatre Studio Singapore",
    "dates": [
      "2026-11-08"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-08-18T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/96b/aa85e68f-c258-4939-9b76-e1cb7528d96b_894711_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/96b/aa85e68f-c258-4939-9b76-e1cb7528d96b_894711_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_williamso/3843"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_williamso/3843",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZgcZ71vd",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Baby Dolls",
    "tour": "BabyDolls: Ooh La Live! Sa Skydome",
    "category": "asia",
    "country": "필리핀",
    "city": "마닐라",
    "venue": "Skydome, SM City North Edsa",
    "mapQuery": "Skydome, SM City North Edsa",
    "dates": [
      "2026-11-08"
    ],
    "doorsNote": "00:00 시작",
    "ticketOpen": "2026-09-16T08:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster PH",
      "url": "https://ticketmaster.ph/ticket/area/26ph_babydolls/3902"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.ph/ticket/area/26ph_babydolls/3902",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ71ev",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "D’MASIV",
    "tour": "D'MASIV ASIA HOME RUN IN SINGAPORE",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Capitol Theatre",
    "mapQuery": "Capitol Theatre Singapore",
    "dates": [
      "2026-11-09"
    ],
    "doorsNote": "16:00 시작",
    "ticketOpen": "2026-09-26T02:00:00Z",
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/c/548/5fefbd1c-973b-4b0e-9b2e-d78e4ce37548_106111_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_dmasiv/3910"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_dmasiv/3910",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "tm-Z7r9jZ1A7OUP6",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "My Chemical Romance",
    "tour": "My Chemical Romance",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Singapore Indoor Stadium",
    "mapQuery": "Singapore Indoor Stadium Singapore",
    "dates": [
      "2026-11-10"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "1900-01-01T18:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/b67/0aae6aa9-4e17-482b-81d9-5282ff937b67_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/b67/0aae6aa9-4e17-482b-81d9-5282ff937b67_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://www.ticketmaster.com/event/Z7r9jZ1A7OUP6"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://www.ticketmaster.com/event/Z7r9jZ1A7OUP6",
    "tags": [
      "Alternative"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF296425",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "Morgenshtern Alisher",
    "tour": "World Tour Part 2",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "명화라이브홀",
    "mapQuery": "명화라이브홀",
    "dates": [
      "2026-11-11"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=Morgenshtern%20Alisher%20World%20Tour%20Part%202%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF296425_260720_154149.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF296425",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF300706",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "Awesome Stage, N.Flying x Hi-Fi Un!corn",
    "tour": "부산 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "부산",
    "venue": "벡스코 (BEXCO)",
    "mapQuery": "벡스코 (BEXCO)",
    "dates": [
      "2026-11-14",
      "2026-11-15"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=Awesome%20Stage%2C%20N.Flying%20x%20Hi-Fi%20Un!corn"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300706_260911_135907.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300706",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF300653",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "김필 콘서트: JOURNEY",
    "tour": "서울 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "블루스퀘어",
    "mapQuery": "블루스퀘어",
    "dates": [
      "2026-11-14",
      "2026-11-15"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EA%B9%80%ED%95%84%20%EC%BD%98%EC%84%9C%ED%8A%B8%3A%20JOURNEY"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300653_260911_103357.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300653",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF299977",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "최유리",
    "tour": "콘서트: 머무름",
    "category": "domestic",
    "country": "대한민국",
    "city": "대구",
    "venue": "엑스코(exco)",
    "mapQuery": "엑스코(exco)",
    "dates": [
      "2026-11-14"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%B5%9C%EC%9C%A0%EB%A6%AC%20%EC%BD%98%EC%84%9C%ED%8A%B8%3A%20%EB%A8%B8%EB%AC%B4%EB%A6%84%20%5B%EB%8C%80%EA%B5%AC%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF299977_260902_164612.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF299977",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF291507",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "제이슨 므라즈 (Jason Mraz)",
    "tour": "아시아 투어",
    "category": "domestic",
    "country": "대한민국",
    "city": "경기",
    "venue": "킨텍스",
    "mapQuery": "킨텍스",
    "dates": [
      "2026-11-14"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%A0%9C%EC%9D%B4%EC%8A%A8%20%EB%AF%80%EB%9D%BC%EC%A6%88%20(Jason%20Mraz)%20%EC%95%84%EC%8B%9C%EC%95%84%20%ED%88%AC%EC%96%B4"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF291507_260515_134504.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF291507",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-kyo-2026-11-14-INI",
    "auto": true,
    "sourceName": "교세라돔 오사카 공식",
    "artist": "INI",
    "tour": "2026 INI DOME LIVE TOUR",
    "category": "japan",
    "country": "일본",
    "city": "오사카",
    "venue": "교세라돔 오사카",
    "mapQuery": "京セラドーム大阪",
    "dates": [
      "2026-11-14",
      "2026-11-15"
    ],
    "doorsNote": "16:30～",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.kyoceradome-osaka.jp/schedule/?yearId=2026&monthId=11&cat=#event2026-11-14"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=INI"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=INI"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=INI"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "돔마에 (ドーム前)",
          "note": "도보 3분 · 한신 난바선"
        },
        {
          "name": "난바 (なんば)",
          "note": "지하철 10분 · 심야 식당 많음"
        },
        {
          "name": "신사이바시 (心斎橋)",
          "note": "지하철 12분 · 쇼핑 중심"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.kyoceradome-osaka.jp/schedule/",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-yka-2026-11-14-aiko",
    "auto": true,
    "sourceName": "요코하마 아레나 공식",
    "artist": "aiko",
    "tour": "aiko Live Tour「Love Like Pop vol.26」",
    "category": "japan",
    "country": "일본",
    "city": "요코하마",
    "venue": "요코하마 아레나",
    "mapQuery": "横浜アリーナ",
    "dates": [
      "2026-11-14",
      "2026-11-15"
    ],
    "doorsNote": "개연 17:30",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "http://aiko.com/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=aiko"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=aiko"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=aiko"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "신요코하마 (新横浜)",
          "note": "도보 5분 · 신칸센 정차역"
        },
        {
          "name": "요코하마역 (横浜駅)",
          "note": "JR 요코하마선 2역 · 공항버스 직결"
        },
        {
          "name": "기쿠나 (菊名)",
          "note": "1역 · 도큐 도요코선 환승"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.yokohama-arena.co.jp/event/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "jp-vdn-2026-11-14-LoveLiveSeries15thAn",
    "auto": true,
    "sourceName": "반텔린돔 나고야 공식",
    "artist": "LoveLive! Series 15th Anniversary ラブライブ！フェス",
    "tour": "반텔린돔 나고야 공연",
    "category": "japan",
    "country": "일본",
    "city": "나고야",
    "venue": "반텔린돔 나고야",
    "mapQuery": "バンテリンドーム ナゴヤ",
    "dates": [
      "2026-11-14",
      "2026-11-15"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.lovelive-anime.jp/special/live/live_detail.php?p=15th_lovelivefest"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=LoveLive!%20Series"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=LoveLive!%20Series"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=LoveLive!%20Series"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "나고야돔마에야다 (ナゴヤドーム前矢田)",
          "note": "도보 5분 · 지하철 메이조선"
        },
        {
          "name": "사카에 (栄)",
          "note": "지하철 15분 · 번화가"
        },
        {
          "name": "나고야역 (名古屋駅)",
          "note": "지하철 25분 · 신칸센·공항 직결"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.nagoya-dome.co.jp/enjoy/index.php",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "jp-fuk-2026-11-14-Prema",
    "auto": true,
    "sourceName": "미즈호PayPay돔 후쿠오카 공식",
    "artist": "Prema",
    "tour": "World Tour",
    "category": "japan",
    "country": "일본",
    "city": "후쿠오카",
    "venue": "미즈호PayPay돔 후쿠오카",
    "mapQuery": "みずほPayPayドーム福岡",
    "dates": [
      "2026-11-14",
      "2026-11-15"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://hehn.fujiikaze.com/pwt/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=Prema"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=Prema"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=Prema"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "도진마치 (唐人町)",
          "note": "도보 15분 · 지하철 공항선"
        },
        {
          "name": "텐진 (天神)",
          "note": "지하철 10분 · 번화가, 셔틀버스"
        },
        {
          "name": "하카타 (博多)",
          "note": "지하철 15분 · 신칸센·공항 직결"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.softbankhawks.co.jp/stadium/event_schedule/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7aA6",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Lucy",
    "tour": "2026 LUCY 9TH CONCERT < ISLAND > ENCORE IN SINGAPORE",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Capitol Theatre",
    "mapQuery": "Capitol Theatre Singapore",
    "dates": [
      "2026-11-14"
    ],
    "doorsNote": "18:00 시작",
    "ticketOpen": "2026-08-26T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_lucy/3846"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_lucy/3846",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7akk",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "YoungCaptain 队长",
    "tour": "队长 YoungCaptain《I AM WHAT I AM》世界巡回演唱会 - 新加坡站",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Resorts World Ballroom",
    "mapQuery": "Resorts World Ballroom Singapore",
    "dates": [
      "2026-11-14"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-08-24T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_youngcaptain/3855"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_youngcaptain/3855",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7aA1",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Songs That Keep Us Together 3",
    "tour": "Songs That Keep Us Together 3 Concert",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Resorts World Ballroom",
    "mapQuery": "Resorts World Ballroom Singapore",
    "dates": [
      "2026-11-15"
    ],
    "doorsNote": "17:00 시작",
    "ticketOpen": "2026-08-21T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_songs3/3849"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_songs3/3849",
    "tags": [
      "Ballads/Romantic"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZgcZ7AA6",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Wave To Earth",
    "tour": "wave to earth - the pieces tour",
    "category": "asia",
    "country": "필리핀",
    "city": "Pasay",
    "venue": "SM Mall of Asia Arena",
    "mapQuery": "SM Mall of Asia Arena Pasay",
    "dates": [
      "2026-11-15"
    ],
    "doorsNote": "00:00 시작",
    "ticketOpen": "2026-05-26T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/834/37641215-ed2e-4ecb-b34a-1c837d74b834_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/834/37641215-ed2e-4ecb-b34a-1c837d74b834_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster PH",
      "url": "https://ticketmaster.ph/ticket/area/26ph_wavetoearth/3446"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.ph/ticket/area/26ph_wavetoearth/3446",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T09:01:35.069Z"
  },
  {
    "id": "kopis-PF301121",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "영 카이",
    "tour": "첫 내한공연 yung kai asia tour: stay with the ocean, i'll find you",
    "category": "visit",
    "country": "대한민국",
    "city": "서울",
    "venue": "무신사 개러지 (구. 왓챠홀)",
    "mapQuery": "무신사 개러지 (구. 왓챠홀)",
    "dates": [
      "2026-11-16"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%98%81%20%EC%B9%B4%EC%9D%B4%20%EC%B2%AB%20%EB%82%B4%ED%95%9C%EA%B3%B5%EC%97%B0%20yung%20kai%20asia%20tour%3A%20stay%20with%20the%20ocean%2C%20i'll%20find%20you%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301121_260916_161747.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301121",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7717",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "5 Seconds of Summer",
    "tour": "5 SECONDS OF SUMMER: EVERYONE’S A STAR! WORLD TOUR",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "The Star Theatre",
    "mapQuery": "The Star Theatre Singapore",
    "dates": [
      "2026-11-16"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-05-08T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/ce2/922873d9-c41f-461b-9486-5c5adab78ce2_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/ce2/922873d9-c41f-461b-9486-5c5adab78ce2_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_5sos/3393"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_5sos/3393",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF290915",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "5 Seconds Of Summer",
    "tour": "내한공연",
    "category": "visit",
    "country": "대한민국",
    "city": "경기",
    "venue": "킨텍스",
    "mapQuery": "킨텍스",
    "dates": [
      "2026-11-19"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=5%20Seconds%20Of%20Summer%20%EB%82%B4%ED%95%9C%EA%B3%B5%EC%97%B0"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF290915_260508_113002.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF290915",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF299948",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "WONDERLIVET (원더리벳)",
    "tour": "경기 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "경기",
    "venue": "킨텍스",
    "mapQuery": "킨텍스",
    "dates": [
      "2026-11-20",
      "2026-11-22"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=WONDERLIVET%20(%EC%9B%90%EB%8D%94%EB%A6%AC%EB%B2%B3)"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF299948_260902_154833.png"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF299948",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "jp-td-2026-11-20-藤井風ピアノリサイタル",
    "auto": true,
    "sourceName": "도쿄돔 공식",
    "artist": "藤井風 ピアノリサイタル",
    "tour": "도쿄돔 공연",
    "category": "japan",
    "country": "일본",
    "city": "도쿄",
    "venue": "도쿄돔",
    "mapQuery": "東京ドーム",
    "dates": [
      "2026-11-20",
      "2026-11-21"
    ],
    "doorsNote": "開場 17:00／開演 19:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://hehn.fujiikaze.com/fpr/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=%E8%97%A4%E4%BA%95%E9%A2%A8%20%E3%83%94%E3%82%A2%E3%83%8E%E3%83%AA%E3%82%B5%E3%82%A4%E3%82%BF%E3%83%AB"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=%E8%97%A4%E4%BA%95%E9%A2%A8%20%E3%83%94%E3%82%A2%E3%83%8E%E3%83%AA%E3%82%B5%E3%82%A4%E3%82%BF%E3%83%AB"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=%E8%97%A4%E4%BA%95%E9%A2%A8%20%E3%83%94%E3%82%A2%E3%83%8E%E3%83%AA%E3%82%B5%E3%82%A4%E3%82%BF%E3%83%AB"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "스이도바시 (水道橋)",
          "note": "도보 3분 · JR 주오소부선"
        },
        {
          "name": "이다바시·코라쿠엔 (飯田橋)",
          "note": "도보 10분 · 지하철 4개 노선"
        },
        {
          "name": "아키하바라 (秋葉原)",
          "note": "JR 3정거장 · 숙소 선택지 많음"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.tokyo-dome.co.jp/dome/event/schedule.html",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "jp-kyo-2026-11-20-MAMAAWARDS",
    "auto": true,
    "sourceName": "교세라돔 오사카 공식",
    "artist": "MAMA AWARDS",
    "tour": "교세라돔 오사카 공연",
    "category": "japan",
    "country": "일본",
    "city": "오사카",
    "venue": "교세라돔 오사카",
    "mapQuery": "京セラドーム大阪",
    "dates": [
      "2026-11-20",
      "2026-11-21"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.kyoceradome-osaka.jp/schedule/?yearId=2026&monthId=11&cat=#event2026-11-20"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=MAMA%20AWARDS"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=MAMA%20AWARDS"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=MAMA%20AWARDS"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "돔마에 (ドーム前)",
          "note": "도보 3분 · 한신 난바선"
        },
        {
          "name": "난바 (なんば)",
          "note": "지하철 10분 · 심야 식당 많음"
        },
        {
          "name": "신사이바시 (心斎橋)",
          "note": "지하철 12분 · 쇼핑 중심"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.kyoceradome-osaka.jp/schedule/",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-yka-2026-11-20-東武鉄道presentsANIMAXMU",
    "auto": true,
    "sourceName": "요코하마 아레나 공식",
    "artist": "東武鉄道 presents ANIMAX MUSIX 2026 supported by Lemino",
    "tour": "요코하마 아레나 공연",
    "category": "japan",
    "country": "일본",
    "city": "요코하마",
    "venue": "요코하마 아레나",
    "mapQuery": "横浜アリーナ",
    "dates": [
      "2026-11-20",
      "2026-11-21"
    ],
    "doorsNote": "개연 18:30",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.animax.co.jp/events/animaxmusix/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=%E6%9D%B1%E6%AD%A6%E9%89%84%E9%81%93%20presents%20ANIMAX%20MUSIX%202026%20supported%20by%20Lemino"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=%E6%9D%B1%E6%AD%A6%E9%89%84%E9%81%93%20presents%20ANIMAX%20MUSIX%202026%20supported%20by%20Lemino"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=%E6%9D%B1%E6%AD%A6%E9%89%84%E9%81%93%20presents%20ANIMAX%20MUSIX%202026%20supported%20by%20Lemino"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "신요코하마 (新横浜)",
          "note": "도보 5분 · 신칸센 정차역"
        },
        {
          "name": "요코하마역 (横浜駅)",
          "note": "JR 요코하마선 2역 · 공항버스 직결"
        },
        {
          "name": "기쿠나 (菊名)",
          "note": "1역 · 도큐 도요코선 환승"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.yokohama-arena.co.jp/event/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7AdF",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Wave To Earth",
    "tour": "wave to earth – the pieces tour",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Singapore Indoor Stadium",
    "mapQuery": "Singapore Indoor Stadium Singapore",
    "dates": [
      "2026-11-20"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-05-26T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/834/37641215-ed2e-4ecb-b34a-1c837d74b834_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/834/37641215-ed2e-4ecb-b34a-1c837d74b834_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_wavetoearth/3427"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_wavetoearth/3427",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF301507",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "더 보컬",
    "tour": "대구 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "대구",
    "venue": "엑스코(exco)",
    "mapQuery": "엑스코(exco)",
    "dates": [
      "2026-11-21"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EB%8D%94%20%EB%B3%B4%EC%BB%AC%20%5B%EB%8C%80%EA%B5%AC%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301507_260921_175711.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301507",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF301234",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "로이킴",
    "tour": "LIVE TOUR, R: O: Y in SEOUL",
    "category": "visit",
    "country": "대한민국",
    "city": "서울",
    "venue": "올림픽공원",
    "mapQuery": "올림픽공원",
    "dates": [
      "2026-11-21",
      "2026-11-22"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EB%A1%9C%EC%9D%B4%ED%82%B4%20LIVE%20TOUR%2C%20R%3A%20O%3A%20Y%20in%20SEOUL"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301234_260917_152554.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301234",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF301190",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "이창섭",
    "tour": "단독 콘서트: Unknown",
    "category": "domestic",
    "country": "대한민국",
    "city": "울산",
    "venue": "KBS홀 [울산]",
    "mapQuery": "KBS홀 [울산]",
    "dates": [
      "2026-11-21",
      "2026-11-22"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%9D%B4%EC%B0%BD%EC%84%AD%20%EB%8B%A8%EB%8F%85%20%EC%BD%98%EC%84%9C%ED%8A%B8%3A%20Unknown%20%5B%EC%9A%B8%EC%82%B0%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301190_260917_131239.png"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301190",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF301177",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "김장훈",
    "tour": "전국투어 콘서트: 원맨쇼",
    "category": "domestic",
    "country": "대한민국",
    "city": "경상남",
    "venue": "KBS홀 [창원]",
    "mapQuery": "KBS홀 [창원]",
    "dates": [
      "2026-11-21"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EA%B9%80%EC%9E%A5%ED%9B%88%20%EC%A0%84%EA%B5%AD%ED%88%AC%EC%96%B4%20%EC%BD%98%EC%84%9C%ED%8A%B8%3A%20%EC%9B%90%EB%A7%A8%EC%87%BC%20%5B%EC%B0%BD%EC%9B%90%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301177_260917_114339.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301177",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF300854",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "AKMU",
    "tour": "CONCERT: 소문의 낙원 (Paradise of Rumors)",
    "category": "domestic",
    "country": "대한민국",
    "city": "대구",
    "venue": "엑스코(exco)",
    "mapQuery": "엑스코(exco)",
    "dates": [
      "2026-11-21",
      "2026-11-22"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=AKMU%20CONCERT%3A%20%EC%86%8C%EB%AC%B8%EC%9D%98%20%EB%82%99%EC%9B%90%20(Paradise%20of%20Rumors)%20%5B%EB%8C%80%EA%B5%AC%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300854_260914_145607.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300854",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF297573",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "무명전설",
    "tour": "전국투어 콘서트",
    "category": "domestic",
    "country": "대한민국",
    "city": "대구",
    "venue": "엑스코(exco)",
    "mapQuery": "엑스코(exco)",
    "dates": [
      "2026-11-21"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EB%AC%B4%EB%AA%85%EC%A0%84%EC%84%A4%20%EC%A0%84%EA%B5%AD%ED%88%AC%EC%96%B4%20%EC%BD%98%EC%84%9C%ED%8A%B8%20%5B%EB%8C%80%EA%B5%AC%20(%EC%95%B5%EC%BD%9C)%20%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF297573_260803_165506.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF297573",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF297380",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "AKASAKI",
    "tour": "1st WORLD TOUR: ONIGIRI",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "명화라이브홀",
    "mapQuery": "명화라이브홀",
    "dates": [
      "2026-11-21"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=AKASAKI%201st%20WORLD%20TOUR%3A%20ONIGIRI%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF297380_260731_130159.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF297380",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ77Fk",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Joji",
    "tour": "JOJI: SOLARIS",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Arena @ EXPO",
    "mapQuery": "Arena @ EXPO Singapore",
    "dates": [
      "2026-11-21"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-04-30T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/5ea/21cc5630-a6aa-492c-9c8d-03951757f5ea_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/5ea/21cc5630-a6aa-492c-9c8d-03951757f5ea_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_joji/3375"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_joji/3375",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF301235",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "김수희",
    "tour": "전국투어 콘서트: 우리 다시, 김수희",
    "category": "domestic",
    "country": "대한민국",
    "city": "경상남",
    "venue": "KBS홀 [창원]",
    "mapQuery": "KBS홀 [창원]",
    "dates": [
      "2026-11-22"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EA%B9%80%EC%88%98%ED%9D%AC%20%EC%A0%84%EA%B5%AD%ED%88%AC%EC%96%B4%20%EC%BD%98%EC%84%9C%ED%8A%B8%3A%20%EC%9A%B0%EB%A6%AC%20%EB%8B%A4%EC%8B%9C%2C%20%EA%B9%80%EC%88%98%ED%9D%AC%20%5B%EC%B0%BD%EC%9B%90%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301235_260917_153407.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301235",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF301191",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "조항조",
    "tour": "전국투어 콘서트: 생각",
    "category": "domestic",
    "country": "대한민국",
    "city": "경상남",
    "venue": "KBS홀 [창원]",
    "mapQuery": "KBS홀 [창원]",
    "dates": [
      "2026-11-22"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%A1%B0%ED%95%AD%EC%A1%B0%20%EC%A0%84%EA%B5%AD%ED%88%AC%EC%96%B4%20%EC%BD%98%EC%84%9C%ED%8A%B8%3A%20%EC%83%9D%EA%B0%81%20%5B%EC%B0%BD%EC%9B%90%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301191_260917_131455.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301191",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ77F6",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Joji",
    "tour": "JOJI: SOLARIS",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Arena @ EXPO",
    "mapQuery": "Arena @ EXPO Singapore",
    "dates": [
      "2026-11-22"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-04-30T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/5ea/21cc5630-a6aa-492c-9c8d-03951757f5ea_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/5ea/21cc5630-a6aa-492c-9c8d-03951757f5ea_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_joji/3376"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_joji/3376",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7k1k",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Khalid",
    "tour": "Khalid: It's Always Summer Somewhere Tour in Singapore",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "The Star Theatre",
    "mapQuery": "The Star Theatre Singapore",
    "dates": [
      "2026-11-24"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-07-16T08:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/8f8/ccbf6555-c6df-4ddf-870a-a3aa8510e8f8_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/8f8/ccbf6555-c6df-4ddf-870a-a3aa8510e8f8_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_khalid/3595"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_khalid/3595",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-td-2026-11-25-超特急",
    "auto": true,
    "sourceName": "도쿄돔 공식",
    "artist": "超特急",
    "tour": "도쿄돔 공연",
    "category": "japan",
    "country": "일본",
    "city": "도쿄",
    "venue": "도쿄돔",
    "mapQuery": "東京ドーム",
    "dates": [
      "2026-11-25",
      "2026-11-26"
    ],
    "doorsNote": "開場 16:00／開演 18:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://bullettrain.jp/BT-1125-tokyo-dome/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=%E8%B6%85%E7%89%B9%E6%80%A5"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=%E8%B6%85%E7%89%B9%E6%80%A5"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=%E8%B6%85%E7%89%B9%E6%80%A5"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "스이도바시 (水道橋)",
          "note": "도보 3분 · JR 주오소부선"
        },
        {
          "name": "이다바시·코라쿠엔 (飯田橋)",
          "note": "도보 10분 · 지하철 4개 노선"
        },
        {
          "name": "아키하바라 (秋葉原)",
          "note": "JR 3정거장 · 숙소 선택지 많음"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.tokyo-dome.co.jp/dome/event/schedule.html",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ77vd",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Guns N' Roses",
    "tour": "Guns N' Roses World Tour 2026",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "National Stadium",
    "mapQuery": "National Stadium Singapore",
    "dates": [
      "2026-11-25"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-03-20T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/ff0/bfc0ce5a-c7ad-4584-a30e-795584aeeff0_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/ff0/bfc0ce5a-c7ad-4584-a30e-795584aeeff0_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_gunsnroses/3302"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_gunsnroses/3302",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-vdn-2026-11-26-SnowMan",
    "auto": true,
    "sourceName": "반텔린돔 나고야 공식",
    "artist": "Snow Man",
    "tour": "DOME TOUR 2026-2027 ALL SUITE",
    "category": "japan",
    "country": "일본",
    "city": "나고야",
    "venue": "반텔린돔 나고야",
    "mapQuery": "バンテリンドーム ナゴヤ",
    "dates": [
      "2026-11-26",
      "2026-11-27",
      "2026-11-28",
      "2026-11-29"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://starto.jp/s/p/live/10578"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=Snow%20Man"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=Snow%20Man"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=Snow%20Man"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "나고야돔마에야다 (ナゴヤドーム前矢田)",
          "note": "도보 5분 · 지하철 메이조선"
        },
        {
          "name": "사카에 (栄)",
          "note": "지하철 15분 · 번화가"
        },
        {
          "name": "나고야역 (名古屋駅)",
          "note": "지하철 25분 · 신칸센·공항 직결"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.nagoya-dome.co.jp/enjoy/index.php",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZgcZ71eF",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Undivided",
    "tour": "Undivided",
    "category": "asia",
    "country": "필리핀",
    "city": "마닐라",
    "venue": "Skydome, SM City North Edsa",
    "mapQuery": "Skydome, SM City North Edsa",
    "dates": [
      "2026-11-26"
    ],
    "doorsNote": "19:30 시작",
    "ticketOpen": "2026-09-25T04:00:00Z",
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/c/f6d/6f417e97-2981-4605-a837-a307d33e3f6d_105491_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/c/f6d/6f417e97-2981-4605-a837-a307d33e3f6d_105491_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster PH",
      "url": "https://ticketmaster.ph/ticket/area/26ph_undivided/3917"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.ph/ticket/area/26ph_undivided/3917",
    "tags": [
      "Religious"
    ],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF301499",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "조용필 & 위대한 탄생",
    "tour": "전국투어 콘서트",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "올림픽공원",
    "mapQuery": "올림픽공원",
    "dates": [
      "2026-11-27",
      "2026-11-29"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%A1%B0%EC%9A%A9%ED%95%84%20%26%20%EC%9C%84%EB%8C%80%ED%95%9C%20%ED%83%84%EC%83%9D%20%EC%A0%84%EA%B5%AD%ED%88%AC%EC%96%B4%20%EC%BD%98%EC%84%9C%ED%8A%B8%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301499_260921_170434.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301499",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "jp-kyo-2026-11-27-BIGBANG",
    "auto": true,
    "sourceName": "교세라돔 오사카 공식",
    "artist": "BIGBANG",
    "tour": "BIGBANG 2026-2027 WORLD TOUR IN JAPAN",
    "category": "japan",
    "country": "일본",
    "city": "오사카",
    "venue": "교세라돔 오사카",
    "mapQuery": "京セラドーム大阪",
    "dates": [
      "2026-11-27",
      "2026-11-28",
      "2026-11-29"
    ],
    "doorsNote": "16:00～",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.kyoceradome-osaka.jp/schedule/?yearId=2026&monthId=11&cat=#event2026-11-27"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=BIGBANG"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=BIGBANG"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=BIGBANG"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "돔마에 (ドーム前)",
          "note": "도보 3분 · 한신 난바선"
        },
        {
          "name": "난바 (なんば)",
          "note": "지하철 10분 · 심야 식당 많음"
        },
        {
          "name": "신사이바시 (心斎橋)",
          "note": "지하철 12분 · 쇼핑 중심"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.kyoceradome-osaka.jp/schedule/",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF301318",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "GUMMY",
    "tour": "Tour Concert: LOVE",
    "category": "domestic",
    "country": "대한민국",
    "city": "부산",
    "venue": "KBS홀 [부산]",
    "mapQuery": "KBS홀 [부산]",
    "dates": [
      "2026-11-28",
      "2026-11-29"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=GUMMY%20Tour%20Concert%3A%20LOVE%20%5B%EB%B6%80%EC%82%B0%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301318_260918_140818.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301318",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF299935",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "ELLEGARDEN, Bad For Education",
    "tour": "Tour Ⅱ",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "예스24 라이브홀 (구. 악스코리아)",
    "mapQuery": "예스24 라이브홀 (구. 악스코리아)",
    "dates": [
      "2026-11-28",
      "2026-11-29"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=ELLEGARDEN%2C%20Bad%20For%20Education%20Tour%20%E2%85%A1"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF299935_260902_151618.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF299935",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF298491",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "이승철 40주년",
    "tour": "콘서트: THE VOICE: LEE SEUNG CHUL",
    "category": "domestic",
    "country": "대한민국",
    "city": "대구",
    "venue": "엑스코(exco)",
    "mapQuery": "엑스코(exco)",
    "dates": [
      "2026-11-28"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%9D%B4%EC%8A%B9%EC%B2%A0%2040%EC%A3%BC%EB%85%84%20%EC%BD%98%EC%84%9C%ED%8A%B8%3A%20THE%20VOICE%3A%20LEE%20SEUNG%20CHUL%20%5B%EB%8C%80%EA%B5%AC%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF298491_260813_160812.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF298491",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF297133",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "LET ME KNOW",
    "tour": "LIVE TOUR, -Re: Still Romance-",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "명화라이브홀",
    "mapQuery": "명화라이브홀",
    "dates": [
      "2026-11-28"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=LET%20ME%20KNOW%20LIVE%20TOUR%2C%20-Re%3A%20Still%20Romance-"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF297133_260728_131659.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF297133",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-yka-2026-11-28-LArcenCiel",
    "auto": true,
    "sourceName": "요코하마 아레나 공식",
    "artist": "L'Arc～en～Ciel",
    "tour": "L'Arc-en-Ciel 35th L'Anniversary TOUR",
    "category": "japan",
    "country": "일본",
    "city": "요코하마",
    "venue": "요코하마 아레나",
    "mapQuery": "横浜アリーナ",
    "dates": [
      "2026-11-28",
      "2026-11-29"
    ],
    "doorsNote": "개연 17:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.larc-en-ciel.com/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=L'Arc%EF%BD%9Een%EF%BD%9ECiel"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=L'Arc%EF%BD%9Een%EF%BD%9ECiel"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=L'Arc%EF%BD%9Een%EF%BD%9ECiel"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "신요코하마 (新横浜)",
          "note": "도보 5분 · 신칸센 정차역"
        },
        {
          "name": "요코하마역 (横浜駅)",
          "note": "JR 요코하마선 2역 · 공항버스 직결"
        },
        {
          "name": "기쿠나 (菊名)",
          "note": "1역 · 도큐 도요코선 환승"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.yokohama-arena.co.jp/event/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "jp-fuk-2026-11-28-YOASOBI",
    "auto": true,
    "sourceName": "미즈호PayPay돔 후쿠오카 공식",
    "artist": "YOASOBI",
    "tour": "ASIA 10-CITY DOME & STADIUM TOUR 2026-2027",
    "category": "japan",
    "country": "일본",
    "city": "후쿠오카",
    "venue": "미즈호PayPay돔 후쿠오카",
    "mapQuery": "みずほPayPayドーム福岡",
    "dates": [
      "2026-11-28",
      "2026-11-29"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.yoasobi-music.jp/live/54776"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=YOASOBI"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=YOASOBI"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=YOASOBI"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "도진마치 (唐人町)",
          "note": "도보 15분 · 지하철 공항선"
        },
        {
          "name": "텐진 (天神)",
          "note": "지하철 10분 · 번화가, 셔틀버스"
        },
        {
          "name": "하카타 (博多)",
          "note": "지하철 15분 · 신칸센·공항 직결"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.softbankhawks.co.jp/stadium/event_schedule/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7aev",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "LE SSERAFIM",
    "tour": "2026 LE SSERAFIM TOUR “PUREFLOW” IN SINGAPORE",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "APEX @ EXPO",
    "mapQuery": "APEX @ EXPO Singapore",
    "dates": [
      "2026-11-28"
    ],
    "doorsNote": "17:00 시작",
    "ticketOpen": "2026-08-05T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/077/92f1b636-8ec5-4f5e-8194-e67157ec0077_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/077/92f1b636-8ec5-4f5e-8194-e67157ec0077_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_lsf/3810"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_lsf/3810",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7Akd",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "BABYMONSTER",
    "tour": "2026-27 BABYMONSTER WORLD TOUR [춤 (CHOOM)] IN SINGAPORE",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Singapore Indoor Stadium",
    "mapQuery": "Singapore Indoor Stadium Singapore",
    "dates": [
      "2026-11-28"
    ],
    "doorsNote": "18:00 시작",
    "ticketOpen": "2026-06-11T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/992/39d8882e-d5fb-4c8b-aed6-bd448b53e992_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/992/39d8882e-d5fb-4c8b-aed6-bd448b53e992_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_babymonster/3452"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_babymonster/3452",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7Aak",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "BABYMONSTER",
    "tour": "2026-27 BABYMONSTER WORLD TOUR [춤 (CHOOM)] IN SINGAPORE",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Singapore Indoor Stadium",
    "mapQuery": "Singapore Indoor Stadium Singapore",
    "dates": [
      "2026-11-29"
    ],
    "doorsNote": "18:00 시작",
    "ticketOpen": "2026-06-11T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/992/39d8882e-d5fb-4c8b-aed6-bd448b53e992_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/992/39d8882e-d5fb-4c8b-aed6-bd448b53e992_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_babymonster/3485"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_babymonster/3485",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7a17",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Mahiru",
    "tour": "Mahiru ONE-MAN LIVE TOUR 2026-2027 \"Auralisia\" in Singapore",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Victoria Theatre",
    "mapQuery": "Victoria Theatre Singapore",
    "dates": [
      "2026-11-29"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-09-18T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_mahiru/3893"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_mahiru/3893",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7kak",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "FKJ",
    "tour": "FKJ – Tyber Tour in Singapore",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Arena @ EXPO",
    "mapQuery": "Arena @ EXPO Singapore",
    "dates": [
      "2026-11-29"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-07-09T08:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/edb/13ccd785-bef5-455a-9733-13385879bedb_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/edb/13ccd785-bef5-455a-9733-13385879bedb_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_fkj/3585"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_fkj/3585",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZgcZ7k7k",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "5 Seconds of Summer",
    "tour": "5 SECONDS OF SUMMER: EVERYONE'S A STAR! WORLD TOUR",
    "category": "asia",
    "country": "필리핀",
    "city": "Pasay",
    "venue": "SM Mall of Asia Arena",
    "mapQuery": "SM Mall of Asia Arena Pasay",
    "dates": [
      "2026-11-29"
    ],
    "doorsNote": "00:00 시작",
    "ticketOpen": "2026-06-23T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/ce2/922873d9-c41f-461b-9486-5c5adab78ce2_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/ce2/922873d9-c41f-461b-9486-5c5adab78ce2_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster PH",
      "url": "https://ticketmaster.ph/ticket/area/26ph_5sos/3535"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.ph/ticket/area/26ph_5sos/3535",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T09:01:35.069Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZgcZ7kAA",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "5 Seconds of Summer",
    "tour": "UPGRADE-BITE THE APPLE",
    "category": "asia",
    "country": "필리핀",
    "city": "Pasay",
    "venue": "SM Mall of Asia Arena",
    "mapQuery": "SM Mall of Asia Arena Pasay",
    "dates": [
      "2026-11-29"
    ],
    "doorsNote": "00:00 시작",
    "ticketOpen": "2026-06-23T05:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/ce2/922873d9-c41f-461b-9486-5c5adab78ce2_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/ce2/922873d9-c41f-461b-9486-5c5adab78ce2_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster PH",
      "url": "https://ticketmaster.ph/ticket/area/26ph_5sos/3544"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.ph/ticket/area/26ph_5sos/3544",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T09:01:35.069Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7a11",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Malcolm Todd",
    "tour": "Malcolm Todd: Do That Again Tour in Singapore",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "The Star Theatre",
    "mapQuery": "The Star Theatre Singapore",
    "dates": [
      "2026-11-30"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-09-23T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/afa/2c60ea90-b4b6-4b71-b49e-71235545eafa_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/afa/2c60ea90-b4b6-4b71-b49e-71235545eafa_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_malcolmtodd/3899"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_malcolmtodd/3899",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "jp-td-2026-12-01-ENHYPEN",
    "auto": true,
    "sourceName": "도쿄돔 공식",
    "artist": "ENHYPEN",
    "tour": "WORLD TOUR 'BLOOD SAGA' IN JAPAN",
    "category": "japan",
    "country": "일본",
    "city": "도쿄",
    "venue": "도쿄돔",
    "mapQuery": "東京ドーム",
    "dates": [
      "2026-12-01",
      "2026-12-02"
    ],
    "doorsNote": "開場 16:30／開演 18:30",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.hybejapan-concert.com/statics/enhypen_blood_saga"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=ENHYPEN"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=ENHYPEN"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=ENHYPEN"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "스이도바시 (水道橋)",
          "note": "도보 3분 · JR 주오소부선"
        },
        {
          "name": "이다바시·코라쿠엔 (飯田橋)",
          "note": "도보 10분 · 지하철 4개 노선"
        },
        {
          "name": "아키하바라 (秋葉原)",
          "note": "JR 3정거장 · 숙소 선택지 많음"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.tokyo-dome.co.jp/dome/event/schedule.html",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF301556",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "말콤 토드",
    "tour": "첫 내한공연",
    "category": "visit",
    "country": "대한민국",
    "city": "서울",
    "venue": "명화라이브홀",
    "mapQuery": "명화라이브홀",
    "dates": [
      "2026-12-02"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": "2026-09-22T11:00:00+09:00",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://nol.yanolja.com/ticket/products/26013394"
    },
    "otherVendors": [
      {
        "name": "Live Nation Korea 공연 페이지",
        "url": "https://www.livenation.kr/malcolm-todd-tickets-adp1610806"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301556_260922_131218.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301556",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z",
    "lnSlug": "malcolm-todd-tickets-adp1610806"
  },
  {
    "id": "jp-kyo-2026-12-02-Number_i",
    "auto": true,
    "sourceName": "교세라돔 오사카 공식",
    "artist": "Number_i",
    "tour": "Number_i LIVE TOUR No.III",
    "category": "japan",
    "country": "일본",
    "city": "오사카",
    "venue": "교세라돔 오사카",
    "mapQuery": "京セラドーム大阪",
    "dates": [
      "2026-12-02"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.kyoceradome-osaka.jp/schedule/?yearId=2026&monthId=12&cat=#event2026-12-02"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=Number_i"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=Number_i"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=Number_i"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "돔마에 (ドーム前)",
          "note": "도보 3분 · 한신 난바선"
        },
        {
          "name": "난바 (なんば)",
          "note": "지하철 10분 · 심야 식당 많음"
        },
        {
          "name": "신사이바시 (心斎橋)",
          "note": "지하철 12분 · 쇼핑 중심"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.kyoceradome-osaka.jp/schedule/",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-yka-2026-12-02-MrChildren",
    "auto": true,
    "sourceName": "요코하마 아레나 공식",
    "artist": "Mr.Children",
    "tour": "Mr.Children Tour 2026 “Saturday in the park”",
    "category": "japan",
    "country": "일본",
    "city": "요코하마",
    "venue": "요코하마 아레나",
    "mapQuery": "横浜アリーナ",
    "dates": [
      "2026-12-02",
      "2026-12-03"
    ],
    "doorsNote": "개연 18:30",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.mrchildren.jp/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=Mr.Children"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=Mr.Children"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=Mr.Children"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "신요코하마 (新横浜)",
          "note": "도보 5분 · 신칸센 정차역"
        },
        {
          "name": "요코하마역 (横浜駅)",
          "note": "JR 요코하마선 2역 · 공항버스 직결"
        },
        {
          "name": "기쿠나 (菊名)",
          "note": "1역 · 도큐 도요코선 환승"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.yokohama-arena.co.jp/event/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ76dv",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Queens of the Stone Age",
    "tour": "You’ll see Queens of the Stone Age World Tour in Singapore",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "The Star Theatre",
    "mapQuery": "The Star Theatre Singapore",
    "dates": [
      "2026-12-02"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-07-24T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/748/1ac0ade0-c5af-40b5-b156-b8b0e45bd748_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/748/1ac0ade0-c5af-40b5-b156-b8b0e45bd748_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_qotsa/3620"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_qotsa/3620",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF298542",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "APF",
    "tour": "CONCERTS PRESENTS, Sunny Day Service TOUR in SEOUL",
    "category": "visit",
    "country": "대한민국",
    "city": "서울",
    "venue": "무신사 개러지 (구. 왓챠홀)",
    "mapQuery": "무신사 개러지 (구. 왓챠홀)",
    "dates": [
      "2026-12-03"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=APF%20CONCERTS%20PRESENTS%2C%20Sunny%20Day%20Service%20TOUR%20in%20SEOUL"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF298542_260814_131523.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF298542",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7k7v",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "5 Seconds of Summer",
    "tour": "5 SECONDS OF SUMMER: EVERYONE’S A STAR! WORLD TOUR",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "The Star Theatre",
    "mapQuery": "The Star Theatre Singapore",
    "dates": [
      "2026-12-03"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-06-19T06:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/ce2/922873d9-c41f-461b-9486-5c5adab78ce2_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/ce2/922873d9-c41f-461b-9486-5c5adab78ce2_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_5sos/3530"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_5sos/3530",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF300972",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "정승환 10주년",
    "tour": "콘서트: 발라드 좋아하세요?",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "올림픽공원",
    "mapQuery": "올림픽공원",
    "dates": [
      "2026-12-04",
      "2026-12-06"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%A0%95%EC%8A%B9%ED%99%98%2010%EC%A3%BC%EB%85%84%20%EC%BD%98%EC%84%9C%ED%8A%B8%3A%20%EB%B0%9C%EB%9D%BC%EB%93%9C%20%EC%A2%8B%EC%95%84%ED%95%98%EC%84%B8%EC%9A%94%3F"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300972_260915_131845.png"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300972",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF297746",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "이승철 40주년",
    "tour": "콘서트, THE VOICE: LEE SEUNG CHU",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "올림픽공원",
    "mapQuery": "올림픽공원",
    "dates": [
      "2026-12-04",
      "2026-12-06"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%9D%B4%EC%8A%B9%EC%B2%A0%2040%EC%A3%BC%EB%85%84%20%EC%BD%98%EC%84%9C%ED%8A%B8%2C%20THE%20VOICE%3A%20LEE%20SEUNG%20CHU%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF297746_260805_132158.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF297746",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-fuk-2026-12-04-SnowMan",
    "auto": true,
    "sourceName": "미즈호PayPay돔 후쿠오카 공식",
    "artist": "Snow Man",
    "tour": "DOME TOUR",
    "category": "japan",
    "country": "일본",
    "city": "후쿠오카",
    "venue": "미즈호PayPay돔 후쿠오카",
    "mapQuery": "みずほPayPayドーム福岡",
    "dates": [
      "2026-12-04",
      "2026-12-05",
      "2026-12-06"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://starto.jp/s/p/live/10578"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=Snow%20Man"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=Snow%20Man"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=Snow%20Man"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "도진마치 (唐人町)",
          "note": "도보 15분 · 지하철 공항선"
        },
        {
          "name": "텐진 (天神)",
          "note": "지하철 10분 · 번화가, 셔틀버스"
        },
        {
          "name": "하카타 (博多)",
          "note": "지하철 15분 · 신칸센·공항 직결"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.softbankhawks.co.jp/stadium/event_schedule/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "kopis-PF298220",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "KANA-BOON, CRITICAL HIT PARADE",
    "tour": "Asian Adventure",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "예스24 라이브홀 (구. 악스코리아)",
    "mapQuery": "예스24 라이브홀 (구. 악스코리아)",
    "dates": [
      "2026-12-05"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=KANA-BOON%2C%20CRITICAL%20HIT%20PARADE%3A%20Asian%20Adventure"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF298220_260811_131418.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF298220",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF297519",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "YUURI",
    "tour": "LIVE",
    "category": "domestic",
    "country": "대한민국",
    "city": "인천",
    "venue": "인스파이어 엔터테인먼트 리조트",
    "mapQuery": "인스파이어 엔터테인먼트 리조트",
    "dates": [
      "2026-12-05",
      "2026-12-06"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=YUURI%20LIVE%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF297519_260803_134855.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF297519",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF296039",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "칼리드",
    "tour": "내한공연",
    "category": "visit",
    "country": "대한민국",
    "city": "경기",
    "venue": "킨텍스",
    "mapQuery": "킨텍스",
    "dates": [
      "2026-12-05"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%B9%BC%EB%A6%AC%EB%93%9C%20%EB%82%B4%ED%95%9C%EA%B3%B5%EC%97%B0%20%5B%EA%B3%A0%EC%96%91%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF296039_260714_111653.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF296039",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-td-2026-12-05-YOASOBI",
    "auto": true,
    "sourceName": "도쿄돔 공식",
    "artist": "YOASOBI",
    "tour": "ASIA 10-CITY DOME & STADIUM TOUR 2026-2027 “超惑星”",
    "category": "japan",
    "country": "일본",
    "city": "도쿄",
    "venue": "도쿄돔",
    "mapQuery": "東京ドーム",
    "dates": [
      "2026-12-05",
      "2026-12-06"
    ],
    "doorsNote": "開場 15:30／開演 18:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.yoasobi-music.jp/live/54776"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=YOASOBI"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=YOASOBI"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=YOASOBI"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "스이도바시 (水道橋)",
          "note": "도보 3분 · JR 주오소부선"
        },
        {
          "name": "이다바시·코라쿠엔 (飯田橋)",
          "note": "도보 10분 · 지하철 4개 노선"
        },
        {
          "name": "아키하바라 (秋葉原)",
          "note": "JR 3정거장 · 숙소 선택지 많음"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.tokyo-dome.co.jp/dome/event/schedule.html",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-kyo-2026-12-05-EXILE",
    "auto": true,
    "sourceName": "교세라돔 오사카 공식",
    "artist": "EXILE",
    "tour": "EXILE 25th ANNIVERSARY BEST LIVE ～LDH PERFECT YEAR 2026～",
    "category": "japan",
    "country": "일본",
    "city": "오사카",
    "venue": "교세라돔 오사카",
    "mapQuery": "京セラドーム大阪",
    "dates": [
      "2026-12-05",
      "2026-12-06"
    ],
    "doorsNote": "14:00～",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.kyoceradome-osaka.jp/schedule/?yearId=2026&monthId=12&cat=#event2026-12-05"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=EXILE"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=EXILE"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=EXILE"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "돔마에 (ドーム前)",
          "note": "도보 3분 · 한신 난바선"
        },
        {
          "name": "난바 (なんば)",
          "note": "지하철 10분 · 심야 식당 많음"
        },
        {
          "name": "신사이바시 (心斎橋)",
          "note": "지하철 12분 · 쇼핑 중심"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.kyoceradome-osaka.jp/schedule/",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-yka-2026-12-05-緑黄色社会",
    "auto": true,
    "sourceName": "요코하마 아레나 공식",
    "artist": "緑黄色社会",
    "tour": "緑黄色社会 ARENA TOUR 2026 \"あたまご\"",
    "category": "japan",
    "country": "일본",
    "city": "요코하마",
    "venue": "요코하마 아레나",
    "mapQuery": "横浜アリーナ",
    "dates": [
      "2026-12-05",
      "2026-12-06"
    ],
    "doorsNote": "개연 18:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.yokohama-arena.co.jp/event/detail/%E7%B7%91%E9%BB%84%E8%89%B2%E7%A4%BE%E4%BC%9A-arena-tour-2026-%E3%81%82%E3%81%9F%E3%81%BE%E3%81%94"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=%E7%B7%91%E9%BB%84%E8%89%B2%E7%A4%BE%E4%BC%9A"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=%E7%B7%91%E9%BB%84%E8%89%B2%E7%A4%BE%E4%BC%9A"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=%E7%B7%91%E9%BB%84%E8%89%B2%E7%A4%BE%E4%BC%9A"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "신요코하마 (新横浜)",
          "note": "도보 5분 · 신칸센 정차역"
        },
        {
          "name": "요코하마역 (横浜駅)",
          "note": "JR 요코하마선 2역 · 공항버스 직결"
        },
        {
          "name": "기쿠나 (菊名)",
          "note": "1역 · 도큐 도요코선 환승"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.yokohama-arena.co.jp/event/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "jp-vdn-2026-12-05-BIGBANG",
    "auto": true,
    "sourceName": "반텔린돔 나고야 공식",
    "artist": "BIGBANG",
    "tour": "2026 WORLD TOUR IN JAPAN",
    "category": "japan",
    "country": "일본",
    "city": "나고야",
    "venue": "반텔린돔 나고야",
    "mapQuery": "バンテリンドーム ナゴヤ",
    "dates": [
      "2026-12-05",
      "2026-12-06"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://ygex.jp/bigbang/20th-anniv/live/tour.php?id=1003005&fdate=2026-12-05&ldate=2026-12-06"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=BIGBANG"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=BIGBANG"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=BIGBANG"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "나고야돔마에야다 (ナゴヤドーム前矢田)",
          "note": "도보 5분 · 지하철 메이조선"
        },
        {
          "name": "사카에 (栄)",
          "note": "지하철 15분 · 번화가"
        },
        {
          "name": "나고야역 (名古屋駅)",
          "note": "지하철 25분 · 신칸센·공항 직결"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.nagoya-dome.co.jp/enjoy/index.php",
    "tags": [],
    "firstSeen": "2026-09-14T09:32:41.937Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7a1e",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Yesung",
    "tour": "2026 YESUNG 10TH ANNIVERSARY TOUR – ABOUT THE THINGS WE CALLED ORDINARY IN SINGAPORE",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "The Theatre at Mediacorp",
    "mapQuery": "The Theatre at Mediacorp Singapore",
    "dates": [
      "2026-12-05"
    ],
    "doorsNote": "19:00 시작",
    "ticketOpen": "2026-09-10T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_yesung/3891"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_yesung/3891",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF300590",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "ZAZEN BOYS MATSURI SESSION",
    "tour": "서울 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "무신사 개러지 (구. 왓챠홀)",
    "mapQuery": "무신사 개러지 (구. 왓챠홀)",
    "dates": [
      "2026-12-06"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=ZAZEN%20BOYS%20MATSURI%20SESSION%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300590_260910_124229.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300590",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF295528",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "FKJ",
    "tour": "내한공연",
    "category": "visit",
    "country": "대한민국",
    "city": "경기",
    "venue": "킨텍스",
    "mapQuery": "킨텍스",
    "dates": [
      "2026-12-06"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=FKJ%20%EB%82%B4%ED%95%9C%EA%B3%B5%EC%97%B0%20%5B%EA%B3%A0%EC%96%91%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF295528_260707_141435.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF295528",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-yka-2026-12-07-MCTYSON",
    "auto": true,
    "sourceName": "요코하마 아레나 공식",
    "artist": "MC TYSON",
    "tour": "“BAYSIDE STORY” in YOKOHAMA ARENA",
    "category": "japan",
    "country": "일본",
    "city": "요코하마",
    "venue": "요코하마 아레나",
    "mapQuery": "横浜アリーナ",
    "dates": [
      "2026-12-07"
    ],
    "doorsNote": "개연 18:30",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.creativeman.co.jp/event/mc-tyson/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=MC%20TYSON"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=MC%20TYSON"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=MC%20TYSON"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "신요코하마 (新横浜)",
          "note": "도보 5분 · 신칸센 정차역"
        },
        {
          "name": "요코하마역 (横浜駅)",
          "note": "JR 요코하마선 2역 · 공항버스 직결"
        },
        {
          "name": "기쿠나 (菊名)",
          "note": "1역 · 도큐 도요코선 환승"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.yokohama-arena.co.jp/event/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "kopis-PF299778",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": false,
    "artist": "슬로우다이브",
    "tour": "내한 공연",
    "category": "visit",
    "country": "대한민국",
    "city": "서울",
    "venue": "KBS스포츠월드(아레나)",
    "mapQuery": "KBS스포츠월드(아레나)",
    "dates": [
      "2026-12-08"
    ],
    "doorsNote": "화요일(20:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "P석 143,000원, R석 132,000원, 스탠딩 132,000원",
    "vendor": {
      "name": "놀유니버스",
      "url": "http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=26012276"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF299778_260831_160438.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF299778",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-td-2026-12-09-Number_i",
    "auto": true,
    "sourceName": "도쿄돔 공식",
    "artist": "Number_i",
    "tour": "LIVE TOUR No.III",
    "category": "japan",
    "country": "일본",
    "city": "도쿄",
    "venue": "도쿄돔",
    "mapQuery": "東京ドーム",
    "dates": [
      "2026-12-09",
      "2026-12-10"
    ],
    "doorsNote": "開場 16:30／開演 18:30",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://tobe-official.jp/artists/number_i/news/2318?page=1"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=Number_i"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=Number_i"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=Number_i"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "스이도바시 (水道橋)",
          "note": "도보 3분 · JR 주오소부선"
        },
        {
          "name": "이다바시·코라쿠엔 (飯田橋)",
          "note": "도보 10분 · 지하철 4개 노선"
        },
        {
          "name": "아키하바라 (秋葉原)",
          "note": "JR 3정거장 · 숙소 선택지 많음"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.tokyo-dome.co.jp/dome/event/schedule.html",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-kyo-2026-12-10-藤井風",
    "auto": true,
    "sourceName": "교세라돔 오사카 공식",
    "artist": "藤井風",
    "tour": "Fujii Kaze Prema World Tour",
    "category": "japan",
    "country": "일본",
    "city": "오사카",
    "venue": "교세라돔 오사카",
    "mapQuery": "京セラドーム大阪",
    "dates": [
      "2026-12-10",
      "2026-12-12",
      "2026-12-13"
    ],
    "doorsNote": "17:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.kyoceradome-osaka.jp/schedule/?yearId=2026&monthId=12&cat=#event2026-12-10"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=%E8%97%A4%E4%BA%95%E9%A2%A8"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=%E8%97%A4%E4%BA%95%E9%A2%A8"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=%E8%97%A4%E4%BA%95%E9%A2%A8"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "돔마에 (ドーム前)",
          "note": "도보 3분 · 한신 난바선"
        },
        {
          "name": "난바 (なんば)",
          "note": "지하철 10분 · 심야 식당 많음"
        },
        {
          "name": "신사이바시 (心斎橋)",
          "note": "지하철 12분 · 쇼핑 중심"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.kyoceradome-osaka.jp/schedule/",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF301636",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": false,
    "artist": "Jane Remover:",
    "tour": "Live Exhibit in Seoul",
    "category": "visit",
    "country": "대한민국",
    "city": "서울",
    "venue": "무신사 개러지 (구. 왓챠홀)",
    "mapQuery": "무신사 개러지 (구. 왓챠홀)",
    "dates": [
      "2026-12-11"
    ],
    "doorsNote": "금요일(20:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "전석 99,000원",
    "vendor": {
      "name": "예스24",
      "url": "https://ticket.yes24.com/Perf/60113"
    },
    "otherVendors": [
      {
        "name": "29CM",
        "url": "https://ticket.29cm.co.kr/catalog/4209721"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301636_260923_104058.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301636",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "jp-yka-2026-12-11-モニング娘26コンサトツア秋",
    "auto": true,
    "sourceName": "요코하마 아레나 공식",
    "artist": "モーニング娘。'26 コンサートツアー秋",
    "tour": "超 Heartful 11 コスモス～小田さくら FINAL～",
    "category": "japan",
    "country": "일본",
    "city": "요코하마",
    "venue": "요코하마 아레나",
    "mapQuery": "横浜アリーナ",
    "dates": [
      "2026-12-11"
    ],
    "doorsNote": "개연 18:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://helloproject.com/morningmusume/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=%E3%83%A2%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0%E5%A8%98%E3%80%82'26%20%E3%82%B3%E3%83%B3%E3%82%B5%E3%83%BC%E3%83%88%E3%83%84%E3%82%A2%E3%83%BC%E7%A7%8B"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=%E3%83%A2%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0%E5%A8%98%E3%80%82'26%20%E3%82%B3%E3%83%B3%E3%82%B5%E3%83%BC%E3%83%88%E3%83%84%E3%82%A2%E3%83%BC%E7%A7%8B"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=%E3%83%A2%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0%E5%A8%98%E3%80%82'26%20%E3%82%B3%E3%83%B3%E3%82%B5%E3%83%BC%E3%83%88%E3%83%84%E3%82%A2%E3%83%BC%E7%A7%8B"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "신요코하마 (新横浜)",
          "note": "도보 5분 · 신칸센 정차역"
        },
        {
          "name": "요코하마역 (横浜駅)",
          "note": "JR 요코하마선 2역 · 공항버스 직결"
        },
        {
          "name": "기쿠나 (菊名)",
          "note": "1역 · 도큐 도요코선 환승"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.yokohama-arena.co.jp/event/",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF301584",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": true,
    "artist": "KWON JIN AH",
    "tour": "LIVE TOUR: THIS WINTER",
    "category": "domestic",
    "country": "대한민국",
    "city": "대구",
    "venue": "엑스코(exco)",
    "mapQuery": "엑스코(exco)",
    "dates": [
      "2026-12-12",
      "2026-12-13"
    ],
    "doorsNote": "토요일(18:00), 일요일(17:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "전석 143,000원",
    "vendor": {
      "name": "놀유니버스",
      "url": "http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=26013115"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301584_260922_141734.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301584",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF301534",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "조용필 & 위대한탄생",
    "tour": "콘서트",
    "category": "domestic",
    "country": "대한민국",
    "city": "부산",
    "venue": "벡스코 (BEXCO)",
    "mapQuery": "벡스코 (BEXCO)",
    "dates": [
      "2026-12-12",
      "2026-12-13"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%A1%B0%EC%9A%A9%ED%95%84%20%26%20%EC%9C%84%EB%8C%80%ED%95%9C%ED%83%84%EC%83%9D%20%EC%BD%98%EC%84%9C%ED%8A%B8%20%5B%EB%B6%80%EC%82%B0%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301534_260922_110614.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301534",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF301303",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "GUMMY",
    "tour": "Tour Concert: LOVE",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "장충체육관",
    "mapQuery": "장충체육관",
    "dates": [
      "2026-12-12",
      "2026-12-13"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=GUMMY%20Tour%20Concert%3A%20LOVE%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301303_260918_133748.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301303",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF301059",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "베니싱스",
    "tour": "내한공연 BENNY SINGS LIVE IN SEOUL",
    "category": "visit",
    "country": "대한민국",
    "city": "서울",
    "venue": "무신사 개러지 (구. 왓챠홀)",
    "mapQuery": "무신사 개러지 (구. 왓챠홀)",
    "dates": [
      "2026-12-12"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EB%B2%A0%EB%8B%88%EC%8B%B1%EC%8A%A4%20%EB%82%B4%ED%95%9C%EA%B3%B5%EC%97%B0%20BENNY%20SINGS%20LIVE%20IN%20SEOUL"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301059_260916_133638.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301059",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF298469",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "이승철 40주년",
    "tour": "콘서트, THE VOICE: LEE SEUNG CHUL",
    "category": "domestic",
    "country": "대한민국",
    "city": "인천",
    "venue": "인스파이어 엔터테인먼트 리조트",
    "mapQuery": "인스파이어 엔터테인먼트 리조트",
    "dates": [
      "2026-12-12"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%9D%B4%EC%8A%B9%EC%B2%A0%2040%EC%A3%BC%EB%85%84%20%EC%BD%98%EC%84%9C%ED%8A%B8%2C%20THE%20VOICE%3A%20LEE%20SEUNG%20CHUL%20%5B%EC%9D%B8%EC%B2%9C%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF298469_260813_151004.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF298469",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF299848",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": false,
    "artist": "홈커밍스",
    "tour": "내한 공연: You are you, even if no one fill in about you.",
    "category": "visit",
    "country": "대한민국",
    "city": "서울",
    "venue": "무신사 개러지 (구. 왓챠홀)",
    "mapQuery": "무신사 개러지 (구. 왓챠홀)",
    "dates": [
      "2026-12-13"
    ],
    "doorsNote": "일요일(17:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "전석 스탠딩 88,000원",
    "vendor": {
      "name": "멜론티켓",
      "url": "https://ticket.melon.com/performance/index.htm?prodId=213806"
    },
    "otherVendors": [
      {
        "name": "29CM",
        "url": "https://ticket.29cm.co.kr/catalog/4173556"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF299848_260901_141354.png"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF299848",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-td-2026-12-13-BIGBANG",
    "auto": true,
    "sourceName": "도쿄돔 공식",
    "artist": "BIGBANG",
    "tour": "2026 WORLD TOUR IN JAPAN",
    "category": "japan",
    "country": "일본",
    "city": "도쿄",
    "venue": "도쿄돔",
    "mapQuery": "東京ドーム",
    "dates": [
      "2026-12-13",
      "2026-12-14",
      "2026-12-15"
    ],
    "doorsNote": "開場 15:00／開演 17:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://ygex.jp/bigbang/20th-anniv/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=BIGBANG"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=BIGBANG"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=BIGBANG"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "스이도바시 (水道橋)",
          "note": "도보 3분 · JR 주오소부선"
        },
        {
          "name": "이다바시·코라쿠엔 (飯田橋)",
          "note": "도보 10분 · 지하철 4개 노선"
        },
        {
          "name": "아키하바라 (秋葉原)",
          "note": "JR 3정거장 · 숙소 선택지 많음"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.tokyo-dome.co.jp/dome/event/schedule.html",
    "tags": [],
    "firstSeen": "2026-09-14T09:32:41.937Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7FA6",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "brb",
    "tour": "brb. “half/lives” Tour in Singapore",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "*SCAPE The Ground Theatre",
    "mapQuery": "*SCAPE The Ground Theatre Singapore",
    "dates": [
      "2026-12-13"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-07-31T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/c/48b/2352e3b5-8496-496b-97a3-e605177e848b_105851_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/c/48b/2352e3b5-8496-496b-97a3-e605177e848b_105851_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/26sg_brb/3746"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/26sg_brb/3746",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF301562",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": false,
    "artist": "조용필 & 위대한탄생",
    "tour": "콘서트",
    "category": "domestic",
    "country": "대한민국",
    "city": "대구",
    "venue": "엑스코(exco)",
    "mapQuery": "엑스코(exco)",
    "dates": [
      "2026-12-19"
    ],
    "doorsNote": "토요일(18:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "VIP석 176,000원, R석 165,000원, S석 143,000원, A석 110,000원",
    "vendor": {
      "name": "예스24",
      "url": "https://ticket.yes24.com/Perf/60208"
    },
    "otherVendors": [
      {
        "name": "네이버N예약",
        "url": "https://booking.naver.com/booking/12/bizes/1739997"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301562_260922_132420.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301562",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF301450",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "GUMMY",
    "tour": "Tour Concert: LOVE",
    "category": "domestic",
    "country": "대한민국",
    "city": "대구",
    "venue": "엑스코(exco)",
    "mapQuery": "엑스코(exco)",
    "dates": [
      "2026-12-19",
      "2026-12-20"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=GUMMY%20Tour%20Concert%3A%20LOVE%20%5B%EB%8C%80%EA%B5%AC%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301450_260921_145529.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301450",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF300887",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "AKMU",
    "tour": "CONCERT: 소문의 낙원 (Paradise of Rumors)",
    "category": "domestic",
    "country": "대한민국",
    "city": "부산",
    "venue": "벡스코 (BEXCO)",
    "mapQuery": "벡스코 (BEXCO)",
    "dates": [
      "2026-12-19",
      "2026-12-20"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=AKMU%20CONCERT%3A%20%EC%86%8C%EB%AC%B8%EC%9D%98%20%EB%82%99%EC%9B%90%20(Paradise%20of%20Rumors)%20%5B%EB%B6%80%EC%82%B0%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300887_260914_161938.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300887",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF299887",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "펜트하우스",
    "tour": "내한 공연: Penthouse ONE MAN LIVE TOUR Neon Garden in Seoul",
    "category": "visit",
    "country": "대한민국",
    "city": "서울",
    "venue": "예스24 라이브홀 (구. 악스코리아)",
    "mapQuery": "예스24 라이브홀 (구. 악스코리아)",
    "dates": [
      "2026-12-19"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%ED%8E%9C%ED%8A%B8%ED%95%98%EC%9A%B0%EC%8A%A4%20%EB%82%B4%ED%95%9C%20%EA%B3%B5%EC%97%B0%3A%20Penthouse%20ONE%20MAN%20LIVE%20TOUR%20Neon%20Garden%20in%20Seoul"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF299887_260902_131457.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF299887",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "jp-td-2026-12-19-FujiiKaze",
    "auto": true,
    "sourceName": "도쿄돔 공식",
    "artist": "Fujii Kaze",
    "tour": "Prema World Tour",
    "category": "japan",
    "country": "일본",
    "city": "도쿄",
    "venue": "도쿄돔",
    "mapQuery": "東京ドーム",
    "dates": [
      "2026-12-19",
      "2026-12-20"
    ],
    "doorsNote": "開場 16:00／開演 18:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://hehn.fujiikaze.com/pwt/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=Fujii%20Kaze"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=Fujii%20Kaze"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=Fujii%20Kaze"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "스이도바시 (水道橋)",
          "note": "도보 3분 · JR 주오소부선"
        },
        {
          "name": "이다바시·코라쿠엔 (飯田橋)",
          "note": "도보 10분 · 지하철 4개 노선"
        },
        {
          "name": "아키하바라 (秋葉原)",
          "note": "JR 3정거장 · 숙소 선택지 많음"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.tokyo-dome.co.jp/dome/event/schedule.html",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-kyo-2026-12-19-LESSERAFIM",
    "auto": true,
    "sourceName": "교세라돔 오사카 공식",
    "artist": "LE SSERAFIM",
    "tour": "2026 LE SSERAFIM TOUR ‘PUREFLOW’ IN KYOCERA DOME OSAKA",
    "category": "japan",
    "country": "일본",
    "city": "오사카",
    "venue": "교세라돔 오사카",
    "mapQuery": "京セラドーム大阪",
    "dates": [
      "2026-12-19",
      "2026-12-20"
    ],
    "doorsNote": "15:00～",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.kyoceradome-osaka.jp/schedule/?yearId=2026&monthId=12&cat=#event2026-12-19"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=LE%20SSERAFIM"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=LE%20SSERAFIM"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=LE%20SSERAFIM"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "돔마에 (ドーム前)",
          "note": "도보 3분 · 한신 난바선"
        },
        {
          "name": "난바 (なんば)",
          "note": "지하철 10분 · 심야 식당 많음"
        },
        {
          "name": "신사이바시 (心斎橋)",
          "note": "지하철 12분 · 쇼핑 중심"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.kyoceradome-osaka.jp/schedule/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "jp-fuk-2026-12-19-TOMORROWXTOGETHER",
    "auto": true,
    "sourceName": "미즈호PayPay돔 후쿠오카 공식",
    "artist": "『TOMORROW X TOGETHER",
    "tour": "WORLD TOUR ＜STEAL THE WIND＞ IN JAPAN』",
    "category": "japan",
    "country": "일본",
    "city": "후쿠오카",
    "venue": "미즈호PayPay돔 후쿠오카",
    "mapQuery": "みずほPayPayドーム福岡",
    "dates": [
      "2026-12-19",
      "2026-12-20"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://txt-official.jp/schedule/48c51480efd9"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=%E3%80%8ETOMORROW%20X%20TOGETHER"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=%E3%80%8ETOMORROW%20X%20TOGETHER"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=%E3%80%8ETOMORROW%20X%20TOGETHER"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "도진마치 (唐人町)",
          "note": "도보 15분 · 지하철 공항선"
        },
        {
          "name": "텐진 (天神)",
          "note": "지하철 10분 · 번화가, 셔틀버스"
        },
        {
          "name": "하카타 (博多)",
          "note": "지하철 15분 · 신칸센·공항 직결"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.softbankhawks.co.jp/stadium/event_schedule/",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF300124",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "Rain Tree",
    "tour": "Concert",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "예스24 원더로크홀",
    "mapQuery": "예스24 원더로크홀",
    "dates": [
      "2026-12-20"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=Rain%20Tree%20Concert%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF300124_260904_111331.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF300124",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF298903",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "카와사키 타카야",
    "tour": "내한공연 KAWASAKI TAKAYA LIVE",
    "category": "visit",
    "country": "대한민국",
    "city": "서울",
    "venue": "예스24 라이브홀 (구. 악스코리아)",
    "mapQuery": "예스24 라이브홀 (구. 악스코리아)",
    "dates": [
      "2026-12-20"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%B9%B4%EC%99%80%EC%82%AC%ED%82%A4%20%ED%83%80%EC%B9%B4%EC%95%BC%20%EB%82%B4%ED%95%9C%EA%B3%B5%EC%97%B0%20KAWASAKI%20TAKAYA%20LIVE%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF298903_260820_103019.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF298903",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-yka-2026-12-20-UVERworld",
    "auto": true,
    "sourceName": "요코하마 아레나 공식",
    "artist": "UVERworld",
    "tour": "UVERworld LIVE “危ない” TOUR 2026",
    "category": "japan",
    "country": "일본",
    "city": "요코하마",
    "venue": "요코하마 아레나",
    "mapQuery": "横浜アリーナ",
    "dates": [
      "2026-12-20"
    ],
    "doorsNote": "개연 16:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.uverworld.jp/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=UVERworld"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=UVERworld"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=UVERworld"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "신요코하마 (新横浜)",
          "note": "도보 5분 · 신칸센 정차역"
        },
        {
          "name": "요코하마역 (横浜駅)",
          "note": "JR 요코하마선 2역 · 공항버스 직결"
        },
        {
          "name": "기쿠나 (菊名)",
          "note": "1역 · 도큐 도요코선 환승"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.yokohama-arena.co.jp/event/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "jp-yka-2026-12-21-UVERworld",
    "auto": true,
    "sourceName": "요코하마 아레나 공식",
    "artist": "UVERworld",
    "tour": "UVERworld LIVE “危ない” TOUR 2026 ～TAKUYA∞ 生誕祭～",
    "category": "japan",
    "country": "일본",
    "city": "요코하마",
    "venue": "요코하마 아레나",
    "mapQuery": "横浜アリーナ",
    "dates": [
      "2026-12-21"
    ],
    "doorsNote": "개연 18:30",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.uverworld.jp/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=UVERworld"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=UVERworld"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=UVERworld"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "신요코하마 (新横浜)",
          "note": "도보 5분 · 신칸센 정차역"
        },
        {
          "name": "요코하마역 (横浜駅)",
          "note": "JR 요코하마선 2역 · 공항버스 직결"
        },
        {
          "name": "기쿠나 (菊名)",
          "note": "1역 · 도큐 도요코선 환승"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.yokohama-arena.co.jp/event/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "jp-td-2026-12-23-SnowMan",
    "auto": true,
    "sourceName": "도쿄돔 공식",
    "artist": "Snow Man",
    "tour": "DOME TOUR 2026-2027 ALL SUITE",
    "category": "japan",
    "country": "일본",
    "city": "도쿄",
    "venue": "도쿄돔",
    "mapQuery": "東京ドーム",
    "dates": [
      "2026-12-23",
      "2026-12-24",
      "2026-12-25",
      "2026-12-26"
    ],
    "doorsNote": "開演 17:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://starto.jp/s/p/live/10578"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=Snow%20Man"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=Snow%20Man"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=Snow%20Man"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "스이도바시 (水道橋)",
          "note": "도보 3분 · JR 주오소부선"
        },
        {
          "name": "이다바시·코라쿠엔 (飯田橋)",
          "note": "도보 10분 · 지하철 4개 노선"
        },
        {
          "name": "아키하바라 (秋葉原)",
          "note": "JR 3정거장 · 숙소 선택지 많음"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.tokyo-dome.co.jp/dome/event/schedule.html",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF298473",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "이승철 40주년",
    "tour": "콘서트: THE VOICE: LEE SEUNG CHUL",
    "category": "domestic",
    "country": "대한민국",
    "city": "부산",
    "venue": "벡스코 (BEXCO)",
    "mapQuery": "벡스코 (BEXCO)",
    "dates": [
      "2026-12-24"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%9D%B4%EC%8A%B9%EC%B2%A0%2040%EC%A3%BC%EB%85%84%20%EC%BD%98%EC%84%9C%ED%8A%B8%3A%20THE%20VOICE%3A%20LEE%20SEUNG%20CHUL%20%5B%EB%B6%80%EC%82%B0%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF298473_260813_151514.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF298473",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-yka-2026-12-24-IdolXmasFes2026",
    "auto": true,
    "sourceName": "요코하마 아레나 공식",
    "artist": "Idol Xmas Fes 2026",
    "tour": "요코하마 아레나 공연",
    "category": "japan",
    "country": "일본",
    "city": "요코하마",
    "venue": "요코하마 아레나",
    "mapQuery": "横浜アリーナ",
    "dates": [
      "2026-12-24"
    ],
    "doorsNote": "개연 15:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://idol-xmas-fes.com/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=Idol%20Xmas%20Fes%202026"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=Idol%20Xmas%20Fes%202026"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=Idol%20Xmas%20Fes%202026"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "신요코하마 (新横浜)",
          "note": "도보 5분 · 신칸센 정차역"
        },
        {
          "name": "요코하마역 (横浜駅)",
          "note": "JR 요코하마선 2역 · 공항버스 직결"
        },
        {
          "name": "기쿠나 (菊名)",
          "note": "1역 · 도큐 도요코선 환승"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.yokohama-arena.co.jp/event/",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF301575",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": true,
    "artist": "KWON JIN AH",
    "tour": "LIVE TOUR: THIS WINTER",
    "category": "domestic",
    "country": "대한민국",
    "city": "부산",
    "venue": "KBS홀 [부산]",
    "mapQuery": "KBS홀 [부산]",
    "dates": [
      "2026-12-25",
      "2026-12-26"
    ],
    "doorsNote": "금요일(18:00), 토요일(17:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "R석 143,000원, S석 132,000원",
    "vendor": {
      "name": "놀유니버스",
      "url": "http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=26013067"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301575_260922_135700.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301575",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF298256",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "대구 힙합 페스티벌",
    "tour": "대구 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "대구",
    "venue": "엑스코(exco)",
    "mapQuery": "엑스코(exco)",
    "dates": [
      "2026-12-25",
      "2026-12-26"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EB%8C%80%EA%B5%AC%20%ED%9E%99%ED%95%A9%20%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF298256_260811_144755.png"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF298256",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF301332",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "김건모. 35TH ANNIVERSARY",
    "tour": "LIVE TOUR",
    "category": "domestic",
    "country": "대한민국",
    "city": "경기",
    "venue": "킨텍스",
    "mapQuery": "킨텍스",
    "dates": [
      "2026-12-26"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EA%B9%80%EA%B1%B4%EB%AA%A8.%2035TH%20ANNIVERSARY%20LIVE%20TOUR%20%5B%EA%B3%A0%EC%96%91%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF301332_260918_143733.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF301332",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF298787",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": true,
    "artist": "원웨이 페스티벌",
    "tour": "경기 공연",
    "category": "domestic",
    "country": "대한민국",
    "city": "경기",
    "venue": "킨텍스",
    "mapQuery": "킨텍스",
    "dates": [
      "2026-12-26",
      "2026-12-27"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%9B%90%EC%9B%A8%EC%9D%B4%20%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF298787_260819_101528.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF298787",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-vdn-2026-12-26-ENHYPEN",
    "auto": true,
    "sourceName": "반텔린돔 나고야 공식",
    "artist": "ENHYPEN",
    "tour": "WORLD TOUR 'BLOOD SAGA' IN JAPAN",
    "category": "japan",
    "country": "일본",
    "city": "나고야",
    "venue": "반텔린돔 나고야",
    "mapQuery": "バンテリンドーム ナゴヤ",
    "dates": [
      "2026-12-26",
      "2026-12-27"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.hybejapan-concert.com/statics/enhypen_blood_saga"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=ENHYPEN"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=ENHYPEN"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=ENHYPEN"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "나고야돔마에야다 (ナゴヤドーム前矢田)",
          "note": "도보 5분 · 지하철 메이조선"
        },
        {
          "name": "사카에 (栄)",
          "note": "지하철 15분 · 번화가"
        },
        {
          "name": "나고야역 (名古屋駅)",
          "note": "지하철 25분 · 신칸센·공항 직결"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.nagoya-dome.co.jp/enjoy/index.php",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "jp-fuk-2026-12-26-BIGBANG",
    "auto": true,
    "sourceName": "미즈호PayPay돔 후쿠오카 공식",
    "artist": "BIGBANG",
    "tour": "2026 WORLD TOUR",
    "category": "japan",
    "country": "일본",
    "city": "후쿠오카",
    "venue": "미즈호PayPay돔 후쿠오카",
    "mapQuery": "みずほPayPayドーム福岡",
    "dates": [
      "2026-12-26",
      "2026-12-27"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://ygex.jp/bigbang/20th-anniv/#live"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=BIGBANG"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=BIGBANG"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=BIGBANG"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "도진마치 (唐人町)",
          "note": "도보 15분 · 지하철 공항선"
        },
        {
          "name": "텐진 (天神)",
          "note": "지하철 10분 · 번화가, 셔틀버스"
        },
        {
          "name": "하카타 (博多)",
          "note": "지하철 15분 · 신칸센·공항 직결"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.softbankhawks.co.jp/stadium/event_schedule/",
    "tags": [],
    "firstSeen": "2026-09-14T09:32:41.937Z"
  },
  {
    "id": "jp-yka-2026-12-28-桑田佳祐",
    "auto": true,
    "sourceName": "요코하마 아레나 공식",
    "artist": "桑田佳祐",
    "tour": "桑田佳祐 夏祭りツアー 2026 supported by カンロ",
    "category": "japan",
    "country": "일본",
    "city": "요코하마",
    "venue": "요코하마 아레나",
    "mapQuery": "横浜アリーナ",
    "dates": [
      "2026-12-28",
      "2026-12-30",
      "2026-12-31"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://southernallstars.jp/feature/kuwata2026live"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=%E6%A1%91%E7%94%B0%E4%BD%B3%E7%A5%90"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=%E6%A1%91%E7%94%B0%E4%BD%B3%E7%A5%90"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=%E6%A1%91%E7%94%B0%E4%BD%B3%E7%A5%90"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "신요코하마 (新横浜)",
          "note": "도보 5분 · 신칸센 정차역"
        },
        {
          "name": "요코하마역 (横浜駅)",
          "note": "JR 요코하마선 2역 · 공항버스 직결"
        },
        {
          "name": "기쿠나 (菊名)",
          "note": "1역 · 도큐 도요코선 환승"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.yokohama-arena.co.jp/event/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "kopis-PF298249",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "무명전설",
    "tour": "전국투어 콘서트",
    "category": "domestic",
    "country": "대한민국",
    "city": "부산",
    "venue": "벡스코 (BEXCO)",
    "mapQuery": "벡스코 (BEXCO)",
    "dates": [
      "2026-12-31"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EB%AC%B4%EB%AA%85%EC%A0%84%EC%84%A4%20%EC%A0%84%EA%B5%AD%ED%88%AC%EC%96%B4%20%EC%BD%98%EC%84%9C%ED%8A%B8%20%5B%EB%B6%80%EC%82%B0%20(%EC%95%B5%EC%BD%9C)%20%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF298249_260811_142226.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF298249",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7F7F",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Eric Moo",
    "tour": "巫启贤《一起走过40的日子》演唱会 Eric Moo - Our Journey Through 40 Years Concert",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Resorts World Ballroom",
    "mapQuery": "Resorts World Ballroom Singapore",
    "dates": [
      "2027-01-03"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-07-21T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/2b6/5b28818a-d7bc-4b03-9f2a-3aedb27742b6_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/2b6/5b28818a-d7bc-4b03-9f2a-3aedb27742b6_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/27sg_ericmoo/3737"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/27sg_ericmoo/3737",
    "tags": [
      "Ballads/Romantic"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-vdn-2027-01-04-BrunoMars",
    "auto": true,
    "sourceName": "반텔린돔 나고야 공식",
    "artist": "Bruno Mars",
    "tour": "The Romantic Tour in Japan",
    "category": "japan",
    "country": "일본",
    "city": "나고야",
    "venue": "반텔린돔 나고야",
    "mapQuery": "バンテリンドーム ナゴヤ",
    "dates": [
      "2027-01-04",
      "2027-01-05"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.livenationhip.co.jp/all-events/bruno-mars-tickets-ae147754"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=Bruno%20Mars"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=Bruno%20Mars"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=Bruno%20Mars"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "나고야돔마에야다 (ナゴヤドーム前矢田)",
          "note": "도보 5분 · 지하철 메이조선"
        },
        {
          "name": "사카에 (栄)",
          "note": "지하철 15분 · 번화가"
        },
        {
          "name": "나고야역 (名古屋駅)",
          "note": "지하철 25분 · 신칸센·공항 직결"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.nagoya-dome.co.jp/enjoy/index.php",
    "tags": [],
    "firstSeen": "2026-09-14T09:33:21.382Z"
  },
  {
    "id": "kopis-PF294000",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "시에나 스파이로",
    "tour": "첫 내한공연",
    "category": "visit",
    "country": "대한민국",
    "city": "서울",
    "venue": "명화라이브홀",
    "mapQuery": "명화라이브홀",
    "dates": [
      "2027-01-07"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EC%8B%9C%EC%97%90%EB%82%98%20%EC%8A%A4%ED%8C%8C%EC%9D%B4%EB%A1%9C%20%EC%B2%AB%20%EB%82%B4%ED%95%9C%EA%B3%B5%EC%97%B0"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF294000_260617_170101.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF294000",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-td-2027-01-07-TOMORROWXTOGETHER",
    "auto": true,
    "sourceName": "도쿄돔 공식",
    "artist": "TOMORROW X TOGETHER",
    "tour": "WORLD TOUR <STEAL THE WIND> IN JAPAN",
    "category": "japan",
    "country": "일본",
    "city": "도쿄",
    "venue": "도쿄돔",
    "mapQuery": "東京ドーム",
    "dates": [
      "2027-01-07",
      "2027-01-08"
    ],
    "doorsNote": "開場 16:00／開演 18:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.hybejapan-concert.com/statics/txt_steal_the_wind_in_japan"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=TOMORROW%20X%20TOGETHER"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=TOMORROW%20X%20TOGETHER"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=TOMORROW%20X%20TOGETHER"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "스이도바시 (水道橋)",
          "note": "도보 3분 · JR 주오소부선"
        },
        {
          "name": "이다바시·코라쿠엔 (飯田橋)",
          "note": "도보 10분 · 지하철 4개 노선"
        },
        {
          "name": "아키하바라 (秋葉原)",
          "note": "JR 3정거장 · 숙소 선택지 많음"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.tokyo-dome.co.jp/dome/event/schedule.html",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7Avk",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Jay Chou",
    "tour": "Jay Chou “Carnival Ⅱ” World Tour 2027 in Singapore 「晴天 新加坡 嘉年华Ⅱ」2027 周杰伦世界巡回演唱会",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "National Stadium",
    "mapQuery": "National Stadium Singapore",
    "dates": [
      "2027-01-08"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-05-21T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/fae/b55259e7-6361-4c03-918a-156b1bf13fae_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/fae/b55259e7-6361-4c03-918a-156b1bf13fae_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/27sg_jaychou/3405"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/27sg_jaychou/3405",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "kopis-PF294073",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "후지이 카제 Prema",
    "tour": "월드 투어",
    "category": "domestic",
    "country": "대한민국",
    "city": "서울",
    "venue": "고척스카이돔",
    "mapQuery": "고척스카이돔",
    "dates": [
      "2027-01-09"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%ED%9B%84%EC%A7%80%EC%9D%B4%20%EC%B9%B4%EC%A0%9C%20Prema%20%EC%9B%94%EB%93%9C%20%ED%88%AC%EC%96%B4%20%5B%EC%84%9C%EC%9A%B8%5D"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF294073_260618_162911.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF294073",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-vdn-2027-01-09-Number_i",
    "auto": true,
    "sourceName": "반텔린돔 나고야 공식",
    "artist": "Number_i",
    "tour": "LIVE TOUR No.III",
    "category": "japan",
    "country": "일본",
    "city": "나고야",
    "venue": "반텔린돔 나고야",
    "mapQuery": "バンテリンドーム ナゴヤ",
    "dates": [
      "2027-01-09",
      "2027-01-10",
      "2027-01-11"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://tobe-official.jp/artists/number_i/concert/364"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=Number_i"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=Number_i"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=Number_i"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "나고야돔마에야다 (ナゴヤドーム前矢田)",
          "note": "도보 5분 · 지하철 메이조선"
        },
        {
          "name": "사카에 (栄)",
          "note": "지하철 15분 · 번화가"
        },
        {
          "name": "나고야역 (名古屋駅)",
          "note": "지하철 25분 · 신칸센·공항 직결"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.nagoya-dome.co.jp/enjoy/index.php",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ71vF",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Doh Kyung-soo",
    "tour": "2026 – 2027 DOH KYUNG SOO  CONCERT TOUR [DAY OFF] IN SINGAPORE",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Singapore Indoor Stadium",
    "mapQuery": "Singapore Indoor Stadium Singapore",
    "dates": [
      "2027-01-09"
    ],
    "doorsNote": "19:00 시작",
    "ticketOpen": "2026-09-23T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/f19/a2717f9e-dc48-4d5c-9266-9b75ca602f19_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/f19/a2717f9e-dc48-4d5c-9266-9b75ca602f19_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/27sg_dohkyungsoo/3907"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/27sg_dohkyungsoo/3907",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7Av6",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Jay Chou",
    "tour": "Jay Chou “Carnival Ⅱ” World Tour 2027 in Singapore 「晴天 新加坡 嘉年华Ⅱ」2027 周杰伦世界巡回演唱会",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "National Stadium",
    "mapQuery": "National Stadium Singapore",
    "dates": [
      "2027-01-09"
    ],
    "doorsNote": "19:30 시작",
    "ticketOpen": "2026-05-21T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/fae/b55259e7-6361-4c03-918a-156b1bf13fae_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/fae/b55259e7-6361-4c03-918a-156b1bf13fae_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/27sg_jaychou/3406"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/27sg_jaychou/3406",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7AvF",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Jay Chou",
    "tour": "Jay Chou “Carnival Ⅱ” World Tour 2027 in Singapore 「晴天 新加坡 嘉年华Ⅱ」2027 周杰伦世界巡回演唱会",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "National Stadium",
    "mapQuery": "National Stadium Singapore",
    "dates": [
      "2027-01-10"
    ],
    "doorsNote": "19:30 시작",
    "ticketOpen": "2026-05-21T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/fae/b55259e7-6361-4c03-918a-156b1bf13fae_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/fae/b55259e7-6361-4c03-918a-156b1bf13fae_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/27sg_jaychou/3407"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/27sg_jaychou/3407",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-td-2027-01-11-BEFIRST5thAnniversar",
    "auto": true,
    "sourceName": "도쿄돔 공식",
    "artist": "BE:FIRST 5th Anniversary",
    "tour": "DOME TOUR 2027",
    "category": "japan",
    "country": "일본",
    "city": "도쿄",
    "venue": "도쿄돔",
    "mapQuery": "東京ドーム",
    "dates": [
      "2027-01-11",
      "2027-01-12"
    ],
    "doorsNote": "開場 15:00／開演 17:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://befirst.tokyo/tour/dometour2027/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=BE%3AFIRST"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=BE%3AFIRST"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=BE%3AFIRST"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "스이도바시 (水道橋)",
          "note": "도보 3분 · JR 주오소부선"
        },
        {
          "name": "이다바시·코라쿠엔 (飯田橋)",
          "note": "도보 10분 · 지하철 4개 노선"
        },
        {
          "name": "아키하바라 (秋葉原)",
          "note": "JR 3정거장 · 숙소 선택지 많음"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.tokyo-dome.co.jp/dome/event/schedule.html",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7kdk",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "SIENNA SPIRO",
    "tour": "Sienna Spiro: My House Tour",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Capitol Theatre",
    "mapQuery": "Capitol Theatre Singapore",
    "dates": [
      "2027-01-11"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-06-18T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/b07/09e0979d-7b3d-4cd4-badf-67d6ced79b07_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/b07/09e0979d-7b3d-4cd4-badf-67d6ced79b07_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/27sg_siennaspiro/3525"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/27sg_siennaspiro/3525",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-fuk-2027-01-16-Number_i",
    "auto": true,
    "sourceName": "미즈호PayPay돔 후쿠오카 공식",
    "artist": "Number_i",
    "tour": "LIVE TOUR No.III",
    "category": "japan",
    "country": "일본",
    "city": "후쿠오카",
    "venue": "미즈호PayPay돔 후쿠오카",
    "mapQuery": "みずほPayPayドーム福岡",
    "dates": [
      "2027-01-16",
      "2027-01-17"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://tobe-official.jp/artists/number_i/news/2318"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=Number_i"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=Number_i"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=Number_i"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "도진마치 (唐人町)",
          "note": "도보 15분 · 지하철 공항선"
        },
        {
          "name": "텐진 (天神)",
          "note": "지하철 10분 · 번화가, 셔틀버스"
        },
        {
          "name": "하카타 (博多)",
          "note": "지하철 15분 · 신칸센·공항 직결"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.softbankhawks.co.jp/stadium/event_schedule/",
    "tags": [],
    "firstSeen": "2026-09-14T09:32:41.937Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7A7e",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Westlife",
    "tour": "Westlife 25: The Anniversary World Tour",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Singapore Indoor Stadium",
    "mapQuery": "Singapore Indoor Stadium Singapore",
    "dates": [
      "2027-01-18"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-09-21T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/5ca/3e2ebb32-67b9-4bfa-b22e-8c6c078be5ca_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/5ca/3e2ebb32-67b9-4bfa-b22e-8c6c078be5ca_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/27sg_westlife/3431"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/27sg_westlife/3431",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZgcZ7aaa",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Carpenters Reborn",
    "tour": "Carpenters Reborn with Chloe Foston-DAVAO",
    "category": "asia",
    "country": "필리핀",
    "city": "마닐라",
    "venue": "SMX Convention Center - Davao",
    "mapQuery": "SMX Convention Center - Davao",
    "dates": [
      "2027-01-22"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-09-05T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster PH",
      "url": "https://ticketmaster.ph/ticket/area/27ph_carpenters/3888"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.ph/ticket/area/27ph_carpenters/3888",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF299233",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": true,
    "period": false,
    "artist": "CUTIE STREET WINTER",
    "tour": "Live",
    "category": "domestic",
    "country": "대한민국",
    "city": "경기",
    "venue": "킨텍스",
    "mapQuery": "킨텍스",
    "dates": [
      "2027-01-23"
    ],
    "doorsNote": "토요일(18:00)",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "전석 135,000원",
    "vendor": {
      "name": "멜론티켓",
      "url": "https://ticket.melon.com/performance/index.htm?prodId=213705"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF299233_260824_143416.jpg"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF299233",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-fuk-2027-01-23-BrunoMarsTheRomantic",
    "auto": true,
    "sourceName": "미즈호PayPay돔 후쿠오카 공식",
    "artist": "Bruno Mars The Romantic",
    "tour": "Tour in Japan",
    "category": "japan",
    "country": "일본",
    "city": "후쿠오카",
    "venue": "미즈호PayPay돔 후쿠오카",
    "mapQuery": "みずほPayPayドーム福岡",
    "dates": [
      "2027-01-23",
      "2027-01-24"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.livenationhip.co.jp/all-events/bruno-mars-tickets-ae147754"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=Bruno%20Mars%20The%20Romantic"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=Bruno%20Mars%20The%20Romantic"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=Bruno%20Mars%20The%20Romantic"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "도진마치 (唐人町)",
          "note": "도보 15분 · 지하철 공항선"
        },
        {
          "name": "텐진 (天神)",
          "note": "지하철 10분 · 번화가, 셔틀버스"
        },
        {
          "name": "하카타 (博多)",
          "note": "지하철 15분 · 신칸센·공항 직결"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.softbankhawks.co.jp/stadium/event_schedule/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7aAA",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Young K",
    "tour": "Young K Solo Tour < YOUNGEST > In SINGAPORE",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "The Star Theatre",
    "mapQuery": "The Star Theatre Singapore",
    "dates": [
      "2027-01-23"
    ],
    "doorsNote": "17:00 시작",
    "ticketOpen": "2026-08-28T06:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/27sg_youngk/3844"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/27sg_youngk/3844",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7aF1",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "BOYNEXTDOOR",
    "tour": "BOYNEXTDOOR TOUR ‘KNOCK ON VOL. 2’ IN SINGAPORE",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Singapore Indoor Stadium",
    "mapQuery": "Singapore Indoor Stadium Singapore",
    "dates": [
      "2027-01-23"
    ],
    "doorsNote": "17:00 시작",
    "ticketOpen": "2026-09-04T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/341/5d9feaa5-e9a3-4559-a1f0-0d7413c2d341_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/341/5d9feaa5-e9a3-4559-a1f0-0d7413c2d341_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/27sg_boynextdoor/3879"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/27sg_boynextdoor/3879",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZgcZ7aaF",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Carpenters Reborn",
    "tour": "Carpenters Reborn with Chloe Foston-CEBU",
    "category": "asia",
    "country": "필리핀",
    "city": "마닐라",
    "venue": "Waterfront Cebu City Hotel & Casino",
    "mapQuery": "Waterfront Cebu City Hotel & Casino",
    "dates": [
      "2027-01-23"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-09-05T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster PH",
      "url": "https://ticketmaster.ph/ticket/area/27ph_carpenters/3887"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.ph/ticket/area/27ph_carpenters/3887",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "kopis-PF298279",
    "auto": true,
    "sourceName": "KOPIS",
    "kopisDetail": false,
    "period": false,
    "artist": "마룬5",
    "tour": "내한공연",
    "category": "visit",
    "country": "대한민국",
    "city": "경기",
    "venue": "킨텍스",
    "mapQuery": "킨텍스",
    "dates": [
      "2027-01-27"
    ],
    "doorsNote": "예매처 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "NOL 티켓",
      "url": "https://tickets.interpark.com/search?keyword=%EB%A7%88%EB%A3%AC5%20%EB%82%B4%ED%95%9C%EA%B3%B5%EC%97%B0"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "images": [
      "https://kopis.or.kr/upload/pfmPoster/PF_PF298279_260812_100446.gif"
    ],
    "source": "https://kopis.or.kr/por/db/pblprfr/pblprfrView.do?menuId=MNU_00020&mt20Id=PF298279",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-td-2027-01-27-BrunoMars",
    "auto": true,
    "sourceName": "도쿄돔 공식",
    "artist": "Bruno Mars",
    "tour": "The Romantic Tour in Japan",
    "category": "japan",
    "country": "일본",
    "city": "도쿄",
    "venue": "도쿄돔",
    "mapQuery": "東京ドーム",
    "dates": [
      "2027-01-27",
      "2027-01-28"
    ],
    "doorsNote": "開場 16:00／開演 18:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.livenationhip.co.jp/all-events/bruno-mars-tickets-ae147754"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=Bruno%20Mars"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=Bruno%20Mars"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=Bruno%20Mars"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "스이도바시 (水道橋)",
          "note": "도보 3분 · JR 주오소부선"
        },
        {
          "name": "이다바시·코라쿠엔 (飯田橋)",
          "note": "도보 10분 · 지하철 4개 노선"
        },
        {
          "name": "아키하바라 (秋葉原)",
          "note": "JR 3정거장 · 숙소 선택지 많음"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.tokyo-dome.co.jp/dome/event/schedule.html",
    "tags": [],
    "firstSeen": "2026-09-14T09:33:21.382Z"
  },
  {
    "id": "jp-td-2027-01-30-Maroon5",
    "auto": true,
    "sourceName": "도쿄돔 공식",
    "artist": "Maroon 5",
    "tour": "Asia 2027",
    "category": "japan",
    "country": "일본",
    "city": "도쿄",
    "venue": "도쿄돔",
    "mapQuery": "東京ドーム",
    "dates": [
      "2027-01-30",
      "2027-01-31",
      "2027-02-02"
    ],
    "doorsNote": "開場 16:00／開演 18:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.livenationhip.co.jp/all-events/maroon-5-tickets-ae618"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=Maroon%205"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=Maroon%205"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=Maroon%205"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "스이도바시 (水道橋)",
          "note": "도보 3분 · JR 주오소부선"
        },
        {
          "name": "이다바시·코라쿠엔 (飯田橋)",
          "note": "도보 10분 · 지하철 4개 노선"
        },
        {
          "name": "아키하바라 (秋葉原)",
          "note": "JR 3정거장 · 숙소 선택지 많음"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.tokyo-dome.co.jp/dome/event/schedule.html",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-fuk-2027-01-30-FUKUOKAMUSICFES2027s",
    "auto": true,
    "sourceName": "미즈호PayPay돔 후쿠오카 공식",
    "artist": "FUKUOKA MUSIC FES.2027 supported by Trunk",
    "tour": "미즈호PayPay돔 후쿠오카 공연",
    "category": "japan",
    "country": "일본",
    "city": "후쿠오카",
    "venue": "미즈호PayPay돔 후쿠오카",
    "mapQuery": "みずほPayPayドーム福岡",
    "dates": [
      "2027-01-30",
      "2027-01-31"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://fukuokamusic-fes.com/2027/index.html"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=FUKUOKA%20MUSIC%20FES.2027%20supported%20by%20Trunk"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=FUKUOKA%20MUSIC%20FES.2027%20supported%20by%20Trunk"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=FUKUOKA%20MUSIC%20FES.2027%20supported%20by%20Trunk"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "도진마치 (唐人町)",
          "note": "도보 15분 · 지하철 공항선"
        },
        {
          "name": "텐진 (天神)",
          "note": "지하철 10분 · 번화가, 셔틀버스"
        },
        {
          "name": "하카타 (博多)",
          "note": "지하철 15분 · 신칸센·공항 직결"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.softbankhawks.co.jp/stadium/event_schedule/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "jp-td-2027-02-04-DaiCEDAY",
    "auto": true,
    "sourceName": "도쿄돔 공식",
    "artist": "Da-iCE DAY",
    "tour": "DOME PHASE 2027",
    "category": "japan",
    "country": "일본",
    "city": "도쿄",
    "venue": "도쿄돔",
    "mapQuery": "東京ドーム",
    "dates": [
      "2027-02-04"
    ],
    "doorsNote": "開場 16:00／開演 18:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://da-ice.jp/schedule/tour.php?id=1003011&fdate=2027-02-04&ldate=2027-02-14"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=Da-iCE%20DAY"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=Da-iCE%20DAY"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=Da-iCE%20DAY"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "스이도바시 (水道橋)",
          "note": "도보 3분 · JR 주오소부선"
        },
        {
          "name": "이다바시·코라쿠엔 (飯田橋)",
          "note": "도보 10분 · 지하철 4개 노선"
        },
        {
          "name": "아키하바라 (秋葉原)",
          "note": "JR 3정거장 · 숙소 선택지 많음"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.tokyo-dome.co.jp/dome/event/schedule.html",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-td-2027-02-06-BUMPOFCHICKEN",
    "auto": true,
    "sourceName": "도쿄돔 공식",
    "artist": "BUMP OF CHICKEN",
    "tour": "TOUR 2026-2027 Ratio Clavis",
    "category": "japan",
    "country": "일본",
    "city": "도쿄",
    "venue": "도쿄돔",
    "mapQuery": "東京ドーム",
    "dates": [
      "2027-02-06",
      "2027-02-07"
    ],
    "doorsNote": "開場 16:00／開演 18:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.bumpofchicken.com/live_information/2799"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=BUMP%20OF%20CHICKEN"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=BUMP%20OF%20CHICKEN"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=BUMP%20OF%20CHICKEN"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "스이도바시 (水道橋)",
          "note": "도보 3분 · JR 주오소부선"
        },
        {
          "name": "이다바시·코라쿠엔 (飯田橋)",
          "note": "도보 10분 · 지하철 4개 노선"
        },
        {
          "name": "아키하바라 (秋葉原)",
          "note": "JR 3정거장 · 숙소 선택지 많음"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.tokyo-dome.co.jp/dome/event/schedule.html",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-fuk-2027-02-06-ENHYPEN",
    "auto": true,
    "sourceName": "미즈호PayPay돔 후쿠오카 공식",
    "artist": "ENHYPEN",
    "tour": "WORLD TOUR 'BLOOD SAGA' IN JAPAN",
    "category": "japan",
    "country": "일본",
    "city": "후쿠오카",
    "venue": "미즈호PayPay돔 후쿠오카",
    "mapQuery": "みずほPayPayドーム福岡",
    "dates": [
      "2027-02-06",
      "2027-02-07"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://enhypen-jp.weverse.io/news/932a12458df2"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=ENHYPEN"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=ENHYPEN"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=ENHYPEN"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "도진마치 (唐人町)",
          "note": "도보 15분 · 지하철 공항선"
        },
        {
          "name": "텐진 (天神)",
          "note": "지하철 10분 · 번화가, 셔틀버스"
        },
        {
          "name": "하카타 (博多)",
          "note": "지하철 15분 · 신칸센·공항 직결"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.softbankhawks.co.jp/stadium/event_schedule/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZgcZ7aek",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Maroon 5",
    "tour": "Maroon 5 Asia 2027 Tour in Manila",
    "category": "asia",
    "country": "필리핀",
    "city": "Pasay",
    "venue": "SM Mall of Asia Arena",
    "mapQuery": "SM Mall of Asia Arena Pasay",
    "dates": [
      "2027-02-07"
    ],
    "doorsNote": "00:00 시작",
    "ticketOpen": "2026-08-15T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/2ab/f42abc1a-368b-4c68-91f3-fa853004e2ab_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/2ab/f42abc1a-368b-4c68-91f3-fa853004e2ab_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster PH",
      "url": "https://ticketmaster.ph/ticket/area/27ph_maroon5/3815"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.ph/ticket/area/27ph_maroon5/3815",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T09:01:35.069Z"
  },
  {
    "id": "jp-td-2027-02-10-XG",
    "auto": true,
    "sourceName": "도쿄돔 공식",
    "artist": "XG",
    "tour": "WORLD TOUR: THE CORE FINAL \"1\"",
    "category": "japan",
    "country": "일본",
    "city": "도쿄",
    "venue": "도쿄돔",
    "mapQuery": "東京ドーム",
    "dates": [
      "2027-02-10"
    ],
    "doorsNote": "開場 16:30／開演 18:30",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://xgalx.com/xg/news/detail.php?id=1134940"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=XG"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=XG"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=XG"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "스이도바시 (水道橋)",
          "note": "도보 3분 · JR 주오소부선"
        },
        {
          "name": "이다바시·코라쿠엔 (飯田橋)",
          "note": "도보 10분 · 지하철 4개 노선"
        },
        {
          "name": "아키하바라 (秋葉原)",
          "note": "JR 3정거장 · 숙소 선택지 많음"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.tokyo-dome.co.jp/dome/event/schedule.html",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-td-2027-02-11-XG",
    "auto": true,
    "sourceName": "도쿄돔 공식",
    "artist": "XG",
    "tour": "WORLD TOUR: THE CORE FINAL \"7\"",
    "category": "japan",
    "country": "일본",
    "city": "도쿄",
    "venue": "도쿄돔",
    "mapQuery": "東京ドーム",
    "dates": [
      "2027-02-11"
    ],
    "doorsNote": "開場 15:00／開演 17:00",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://xgalx.com/xg/news/detail.php?id=1134940"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=XG"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=XG"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=XG"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "스이도바시 (水道橋)",
          "note": "도보 3분 · JR 주오소부선"
        },
        {
          "name": "이다바시·코라쿠엔 (飯田橋)",
          "note": "도보 10분 · 지하철 4개 노선"
        },
        {
          "name": "아키하바라 (秋葉原)",
          "note": "JR 3정거장 · 숙소 선택지 많음"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.tokyo-dome.co.jp/dome/event/schedule.html",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7FFd",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Maroon 5",
    "tour": "Maroon 5 Asia 2027 in Singapore",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "National Stadium",
    "mapQuery": "National Stadium Singapore",
    "dates": [
      "2027-02-12"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-08-14T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/ce9/807d7d19-0c35-42ed-9106-7748553aece9_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/ce9/807d7d19-0c35-42ed-9106-7748553aece9_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/27sg_maroon5/3772"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/27sg_maroon5/3772",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-td-2027-02-13-TOKYOSPACESHIP2027",
    "auto": true,
    "sourceName": "도쿄돔 공식",
    "artist": "TOKYO SPACESHIP 2027",
    "tour": "도쿄돔 공연",
    "category": "japan",
    "country": "일본",
    "city": "도쿄",
    "venue": "도쿄돔",
    "mapQuery": "東京ドーム",
    "dates": [
      "2027-02-13",
      "2027-02-14"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.event-td.com/tokyospaceship/"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=TOKYO%20SPACESHIP%202027"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=TOKYO%20SPACESHIP%202027"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=TOKYO%20SPACESHIP%202027"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "스이도바시 (水道橋)",
          "note": "도보 3분 · JR 주오소부선"
        },
        {
          "name": "이다바시·코라쿠엔 (飯田橋)",
          "note": "도보 10분 · 지하철 4개 노선"
        },
        {
          "name": "아키하바라 (秋葉原)",
          "note": "JR 3정거장 · 숙소 선택지 많음"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.tokyo-dome.co.jp/dome/event/schedule.html",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-fuk-2027-02-13-BEFIRST5thAnniversar",
    "auto": true,
    "sourceName": "미즈호PayPay돔 후쿠오카 공식",
    "artist": "BE:FIRST 5th Anniversary",
    "tour": "DOME TOUR 2027",
    "category": "japan",
    "country": "일본",
    "city": "후쿠오카",
    "venue": "미즈호PayPay돔 후쿠오카",
    "mapQuery": "みずほPayPayドーム福岡",
    "dates": [
      "2027-02-13",
      "2027-02-14"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://befirst.tokyo/tour/dometour2027/#ticket"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=BE%3AFIRST"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=BE%3AFIRST"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=BE%3AFIRST"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "도진마치 (唐人町)",
          "note": "도보 15분 · 지하철 공항선"
        },
        {
          "name": "텐진 (天神)",
          "note": "지하철 10분 · 번화가, 셔틀버스"
        },
        {
          "name": "하카타 (博多)",
          "note": "지하철 15분 · 신칸센·공항 직결"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.softbankhawks.co.jp/stadium/event_schedule/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ71ed",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Freya Skye",
    "tour": "Freya Skye - Stars Align Tour in Singapore",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Capitol Theatre",
    "mapQuery": "Capitol Theatre Singapore",
    "dates": [
      "2027-02-14"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-10-01T02:00:00Z",
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/bd1/4bf9a435-fa2b-4157-a4c9-add083e81bd1_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/bd1/4bf9a435-fa2b-4157-a4c9-add083e81bd1_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/27sg_freyaskye/3912"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/27sg_freyaskye/3912",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "jp-td-2027-02-17-KingGnu10thAnniversa",
    "auto": true,
    "sourceName": "도쿄돔 공식",
    "artist": "King Gnu 10th Anniversary Opening",
    "tour": "Live “KICKOFF”",
    "category": "japan",
    "country": "일본",
    "city": "도쿄",
    "venue": "도쿄돔",
    "mapQuery": "東京ドーム",
    "dates": [
      "2027-02-17",
      "2027-02-18"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://kinggnu.jp/live/in.html?55547"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=King%20Gnu"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=King%20Gnu"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=King%20Gnu"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "스이도바시 (水道橋)",
          "note": "도보 3분 · JR 주오소부선"
        },
        {
          "name": "이다바시·코라쿠엔 (飯田橋)",
          "note": "도보 10분 · 지하철 4개 노선"
        },
        {
          "name": "아키하바라 (秋葉原)",
          "note": "JR 3정거장 · 숙소 선택지 많음"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.tokyo-dome.co.jp/dome/event/schedule.html",
    "tags": [],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-vdn-2027-02-20-TOMORROWXTOGETHER",
    "auto": true,
    "sourceName": "반텔린돔 나고야 공식",
    "artist": "TOMORROW X TOGETHER",
    "tour": "WORLD TOUR ＜STEAL THE WIND＞ IN JAPAN",
    "category": "japan",
    "country": "일본",
    "city": "나고야",
    "venue": "반텔린돔 나고야",
    "mapQuery": "バンテリンドーム ナゴヤ",
    "dates": [
      "2027-02-20",
      "2027-02-21"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://www.hybejapan-concert.com/statics/txt_steal_the_wind_in_japan"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=TOMORROW%20X%20TOGETHER"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=TOMORROW%20X%20TOGETHER"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=TOMORROW%20X%20TOGETHER"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "나고야돔마에야다 (ナゴヤドーム前矢田)",
          "note": "도보 5분 · 지하철 메이조선"
        },
        {
          "name": "사카에 (栄)",
          "note": "지하철 15분 · 번화가"
        },
        {
          "name": "나고야역 (名古屋駅)",
          "note": "지하철 25분 · 신칸센·공항 직결"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.nagoya-dome.co.jp/enjoy/index.php",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7aAd",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "YOASOBI",
    "tour": "YOASOBI 10-CITY DOME & STADIUM TOUR 2026-2027 超惑星 “SUPER PLANET” in SINGAPORE",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "National Stadium",
    "mapQuery": "National Stadium Singapore",
    "dates": [
      "2027-02-20"
    ],
    "doorsNote": "19:00 시작",
    "ticketOpen": "2026-08-19T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/e84/eadfbc89-b3a7-4e96-a344-3e255b21ce84_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/e84/eadfbc89-b3a7-4e96-a344-3e255b21ce84_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/27sg_yoasobi/3842"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/27sg_yoasobi/3842",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZgcZ7aFd",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "BIGBANG",
    "tour": "BIGBANG 2026-2027 WORLD TOUR < XX : COSMOS > IN MANILA",
    "category": "asia",
    "country": "필리핀",
    "city": "마닐라",
    "venue": "SMDC Festival Grounds",
    "mapQuery": "SMDC Festival Grounds",
    "dates": [
      "2027-02-20"
    ],
    "doorsNote": "19:00 시작",
    "ticketOpen": "2026-09-21T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/b72/65ea89f1-6d42-4904-a3e8-c05dd0b5ab72_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/b72/65ea89f1-6d42-4904-a3e8-c05dd0b5ab72_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster PH",
      "url": "https://ticketmaster.ph/ticket/area/27ph_bigbang2027/3872"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.ph/ticket/area/27ph_bigbang2027/3872",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T09:01:35.069Z"
  },
  {
    "id": "ln-freya-skye-tickets-adp1645713-2027-02-20",
    "auto": true,
    "sourceName": "Live Nation Korea",
    "lnSlug": "freya-skye-tickets-adp1645713",
    "artist": "Freya Skye",
    "tour": "Freya Skye - Stars Align Tour",
    "category": "visit",
    "country": "대한민국",
    "city": "서울",
    "venue": "명화 라이브홀",
    "dates": [
      "2027-02-20"
    ],
    "doorsNote": "",
    "ticketOpen": "2026-09-29T12:00:00+09:00",
    "ticketStatus": null,
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "Live Nation Korea",
      "url": "https://www.livenation.kr/freya-skye-tickets-adp1645713"
    },
    "otherVendors": [],
    "presales": [
      {
        "at": "2026-09-28T12:00:00+09:00",
        "label": "티켓 구매"
      }
    ],
    "tips": "티켓 구매 09-28 12:00",
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": []
    },
    "images": [
      "https://dynamicmedia.livenationinternational.com/i/i/m/f58e223c-4b55-466f-8087-525995e96214.jpg"
    ],
    "source": "https://www.livenation.kr/freya-skye-tickets-adp1645713",
    "tags": [],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7a1a",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "milet",
    "tour": "milet ASIA TOUR 2027 in SINGAPORE",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "The Star Theatre",
    "mapQuery": "The Star Theatre Singapore",
    "dates": [
      "2027-02-27"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-09-18T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/27sg_milet/3898"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/27sg_milet/3898",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7akv",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Stray Kids",
    "tour": "Stray Kids World Tour < RUN IT SINGAPORE >",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Singapore Indoor Stadium",
    "mapQuery": "Singapore Indoor Stadium Singapore",
    "dates": [
      "2027-03-06"
    ],
    "doorsNote": "18:00 시작",
    "ticketOpen": "2026-09-02T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/00a/83b98844-f154-4089-95bc-1e907a97300a_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/00a/83b98844-f154-4089-95bc-1e907a97300a_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/27sg_straykids/3850"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/27sg_straykids/3850",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7ake",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Stray Kids",
    "tour": "Stray Kids World Tour < RUN IT SINGAPORE >",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "Singapore Indoor Stadium",
    "mapQuery": "Singapore Indoor Stadium Singapore",
    "dates": [
      "2027-03-07"
    ],
    "doorsNote": "18:00 시작",
    "ticketOpen": "2026-09-02T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/00a/83b98844-f154-4089-95bc-1e907a97300a_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/00a/83b98844-f154-4089-95bc-1e907a97300a_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/27sg_straykids/3851"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/27sg_straykids/3851",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "jp-fuk-2027-03-13-ANISAMAFUKUOKA2027",
    "auto": true,
    "sourceName": "미즈호PayPay돔 후쿠오카 공식",
    "artist": "ANISAMA FUKUOKA 2027",
    "tour": "미즈호PayPay돔 후쿠오카 공연",
    "category": "japan",
    "country": "일본",
    "city": "후쿠오카",
    "venue": "미즈호PayPay돔 후쿠오카",
    "mapQuery": "みずほPayPayドーム福岡",
    "dates": [
      "2027-03-13",
      "2027-03-14"
    ],
    "doorsNote": "공식 공지 참고",
    "ticketOpen": null,
    "ticketStatus": "예정",
    "price": "예매처 공지 참고",
    "vendor": {
      "name": "공식 공연 페이지",
      "url": "https://anisama.tv/2026/index.html"
    },
    "otherVendors": [
      {
        "name": "이플러스 (e+)",
        "url": "https://eplus.jp/sf/search?keyword=ANISAMA%20FUKUOKA%202027"
      },
      {
        "name": "티켓피아",
        "url": "https://t.pia.jp/pia/search_all.do?kw=ANISAMA%20FUKUOKA%202027"
      },
      {
        "name": "로손티켓",
        "url": "https://l-tike.com/search/?keyword=ANISAMA%20FUKUOKA%202027"
      }
    ],
    "goods": {
      "note": "",
      "url": null
    },
    "stay": {
      "areas": [
        {
          "name": "도진마치 (唐人町)",
          "note": "도보 15분 · 지하철 공항선"
        },
        {
          "name": "텐진 (天神)",
          "note": "지하철 10분 · 번화가, 셔틀버스"
        },
        {
          "name": "하카타 (博多)",
          "note": "지하철 15분 · 신칸센·공항 직결"
        }
      ]
    },
    "images": [],
    "tips": "",
    "source": "https://www.softbankhawks.co.jp/stadium/event_schedule/",
    "tags": [],
    "firstSeen": "2026-09-14T09:31:46.043Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ76ek",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "ENHYPEN",
    "tour": "2027 ENHYPEN WORLD TOUR 'BLOOD SAGA' IN SINGAPORE",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "National Stadium",
    "mapQuery": "National Stadium Singapore",
    "dates": [
      "2027-03-14"
    ],
    "doorsNote": "19:00 시작",
    "ticketOpen": "2026-07-17T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/cb9/394fd3cf-e31f-4c92-8cb0-2dc186475cb9_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/cb9/394fd3cf-e31f-4c92-8cb0-2dc186475cb9_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/27sg_enhypen/3615"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/27sg_enhypen/3615",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7a6v",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Bruno Mars",
    "tour": "Bruno Mars - The Romantic Tour",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "National Stadium",
    "mapQuery": "National Stadium Singapore",
    "dates": [
      "2027-04-13"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-09-14T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/386/bdd143e5-4726-49af-9523-7927682c9386_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/386/bdd143e5-4726-49af-9523-7927682c9386_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/27sg_brunomars/3860"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/27sg_brunomars/3860",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7a6e",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Bruno Mars",
    "tour": "Bruno Mars - The Romantic Tour",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "National Stadium",
    "mapQuery": "National Stadium Singapore",
    "dates": [
      "2027-04-14"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-09-14T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/386/bdd143e5-4726-49af-9523-7927682c9386_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/386/bdd143e5-4726-49af-9523-7927682c9386_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/27sg_brunomars/3861"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/27sg_brunomars/3861",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7a6d",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Bruno Mars",
    "tour": "Bruno Mars - The Romantic Tour",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "National Stadium",
    "mapQuery": "National Stadium Singapore",
    "dates": [
      "2027-04-17"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-09-14T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/386/bdd143e5-4726-49af-9523-7927682c9386_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/386/bdd143e5-4726-49af-9523-7927682c9386_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/27sg_brunomars/3862"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/27sg_brunomars/3862",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZziZ7a67",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Bruno Mars",
    "tour": "Bruno Mars - The Romantic Tour",
    "category": "asia",
    "country": "싱가포르",
    "city": "Singapore",
    "venue": "National Stadium",
    "mapQuery": "National Stadium Singapore",
    "dates": [
      "2027-04-18"
    ],
    "doorsNote": "20:00 시작",
    "ticketOpen": "2026-09-14T02:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/386/bdd143e5-4726-49af-9523-7927682c9386_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/386/bdd143e5-4726-49af-9523-7927682c9386_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster SG",
      "url": "https://ticketmaster.sg/ticket/area/27sg_brunomars/3863"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.sg/ticket/area/27sg_brunomars/3863",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T08:25:55.377Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZgcZ7a66",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Bruno Mars",
    "tour": "Bruno Mars - The Romantic Tour",
    "category": "asia",
    "country": "필리핀",
    "city": "마닐라",
    "venue": "Philippine Arena",
    "mapQuery": "Philippine Arena",
    "dates": [
      "2027-05-15"
    ],
    "doorsNote": "00:00 시작",
    "ticketOpen": "2026-09-14T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/386/bdd143e5-4726-49af-9523-7927682c9386_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/386/bdd143e5-4726-49af-9523-7927682c9386_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster PH",
      "url": "https://ticketmaster.ph/ticket/area/27ph_brunomars/3866"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.ph/ticket/area/27ph_brunomars/3866",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T09:01:35.069Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZgcZ7a6F",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Bruno Mars",
    "tour": "Bruno Mars - The Romantic Tour",
    "category": "asia",
    "country": "필리핀",
    "city": "마닐라",
    "venue": "Philippine Arena",
    "mapQuery": "Philippine Arena",
    "dates": [
      "2027-05-16"
    ],
    "doorsNote": "00:00 시작",
    "ticketOpen": "2026-09-14T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/386/bdd143e5-4726-49af-9523-7927682c9386_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/386/bdd143e5-4726-49af-9523-7927682c9386_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster PH",
      "url": "https://ticketmaster.ph/ticket/area/27ph_brunomars/3867"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.ph/ticket/area/27ph_brunomars/3867",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-01T09:01:35.069Z"
  },
  {
    "id": "tm-Z8ymWIMJlyZgcZ7a1k",
    "auto": true,
    "sourceName": "Ticketmaster",
    "artist": "Bruno Mars",
    "tour": "Bruno Mars - The Romantic Tour",
    "category": "asia",
    "country": "필리핀",
    "city": "마닐라",
    "venue": "Philippine Arena",
    "mapQuery": "Philippine Arena",
    "dates": [
      "2027-05-18"
    ],
    "doorsNote": "00:00 시작",
    "ticketOpen": "2026-09-14T04:00:00Z",
    "ticketStatus": "판매중",
    "price": "예매처 공지 참고",
    "images": [
      "https://s1.ticketm.net/dam/a/386/bdd143e5-4726-49af-9523-7927682c9386_TABLET_LANDSCAPE_16_9.jpg",
      "https://s1.ticketm.net/dam/a/386/bdd143e5-4726-49af-9523-7927682c9386_RETINA_LANDSCAPE_16_9.jpg"
    ],
    "vendor": {
      "name": "Ticketmaster PH",
      "url": "https://ticketmaster.ph/ticket/area/27ph_brunomars/3895"
    },
    "otherVendors": [],
    "goods": {
      "note": "",
      "url": null
    },
    "tips": "",
    "source": "https://ticketmaster.ph/ticket/area/27ph_brunomars/3895",
    "tags": [
      "Pop"
    ],
    "firstSeen": "2026-09-24T22:30:00.224Z"
  }
];
