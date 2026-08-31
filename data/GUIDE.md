# 공연 데이터 입력 가이드

모든 정보는 `data/concerts.js` 안의 `CONCERTS` 배열에만 들어갑니다.
파일 맨 위 `DATA_UPDATED` 값을 갱신한 날짜로 바꿔 주세요.

## 항목 하나 예시

```js
{
  id: "jp-yoasobi-tokyodome",       // 아무 문자열, 중복만 없으면 됨 (카드 색상이 이 값으로 결정됨)
  artist: "YOASOBI",
  tour: "ASIA 10-CITY DOME & STADIUM TOUR 2026-2027",
  category: "japan",                // japan | visit | asia | domestic
  country: "일본",
  city: "도쿄",                      // 항공권 링크는 이 도시명으로 공항을 찾음
  venue: "도쿄돔",
  mapQuery: "東京ドーム",            // 지도·숙소 검색용 (현지어가 정확)
  dates: ["2026-12-05", "2026-12-06"],   // 오름차순, YYYY-MM-DD
  doorsNote: "17:00 개장 / 19:00 시작",
  ticketOpen: "2026-09-05T20:00:00+09:00", // 모르면 null. 쓸 거면 반드시 시간대(+09:00) 포함
  ticketStatus: "예정",             // 예정 | 판매중 | 매진 | 종료
  price: "S석 ¥13,800",
  vendor:  { name: "이플러스 (e+)", url: "https://eplus.jp/..." },   // 카드 클릭 시 이동
  otherVendors: [ { name: "티켓피아", url: "https://t.pia.jp/" } ],
  goods: { note: "굿즈 판매 요약", url: null },   // url 있으면 굿즈 스토어 링크 생성
  stay: {                           // 공연장 근처 추천 숙박 지역
    areas: [
      { name: "스이도바시 (水道橋)", note: "도보 3분 · JR 주오소부선" },
      { name: "아키하바라 (秋葉原)", note: "JR 3정거장 · 숙소 선택지 많음" }
    ]
  },
  images: [                         // 공연 포스터 · 아티스트 사진. 반드시 https, 최대 2장
    "https://kopis.or.kr/upload/pfmPoster/PF_....jpg"
  ],
  genre: "kpop",                    // 생략 가능. 보통은 data/genres.js 표가 알아서 판단합니다
  tips: "예매 팁 한두 문장",
  source: "https://www.tokyo-dome.co.jp/...",     // 정보 출처. 카드 하단에 표시됨
  tags: ["돔", "추첨제"]
}
```

## 카테고리 기준

| 값 | 의미 |
|---|---|
| `japan` | 일본에서 열리는 모든 공연 (요청대로 별도 카테고리) |
| `visit` | 해외 아티스트의 한국 내한 공연 |
| `asia` | 일본·한국을 제외한 아시아 공연 (대만·홍콩·태국·싱가포르 등) |
| `domestic` | 한국 아티스트의 국내 공연 |

`전체` 옆의 **티켓 오픈 임박** 칩은 카테고리가 아니라 "14일 이내 오픈" 가상 필터입니다. 데이터에 쓰지 마세요.

## ticketStatus 와 ticketOpen

상태 배지는 기본적으로 `ticketOpen` 과 오늘 날짜로 자동 계산됩니다.
`ticketStatus` 는 **날짜로 알 수 없는 상태를 손으로 덮어쓸 때만** 씁니다.

| ticketStatus | 화면 표시 | 언제 쓰나 |
|---|---|---|
| `예정` | ticketOpen 으로 자동 계산 (`09.05 오픈`, `오늘 오픈`, `예매 진행 중`) | 기본값 |
| `판매중` | `예매 진행 중` | 이미 오픈했는데 정확한 오픈 시각을 모를 때 |
| `매진` | `매진` | 매진됐을 때 |
| `종료` | `예매 마감` | 판매가 끝났을 때 |

공연 자체가 **취소**되면 항목을 지우세요. 자동 수집분은 소스에서 사라지거나
제목에 취소 표시(`[취소]`, `공연취소`, `中止`, `延期`, `CANCELLED`)가 붙으면 자동으로 빠집니다.

`ticketOpen` 이 `null` 이고 `ticketStatus` 도 `예정` 이면 `오픈일 미정` 으로 표시됩니다.

## 자동으로 처리되는 것 — 직접 입력하지 마세요

- **D-day / 상태 배지 / 공연 종료** : 날짜로 자동 계산
- **카드 상단 아트 색상** : `id` 해시로 결정 (같은 공연은 항상 같은 색)
- **국가 코드** (`JP`, `SG`) : `country` → app.js 의 `COUNTRY_CODE`
- **✈ 항공권 링크** : `country` 가 대한민국이 아니고 `city` 가 app.js 의 `AIRPORT` 맵에 있으면 자동 생성
  - 인천(ICN) 출발, **공연 전날 출발 / 마지막 공연 다음 날 귀국** 일정으로 스카이스캐너·네이버 항공권·구글 항공 링크를 만듭니다
  - 노선·일정·검색 링크가 **카드 앞면에 바로** 표시됩니다
  - 새 도시를 추가하려면 `assets/app.js` 의 `AIRPORT` 에 `"도시": "IATA"` 를 넣으세요.
    소스마다 표기가 달라 한글·영문 키를 모두 넣어 두었습니다(`"싱가포르"` / `"Singapore"`)
  - 표에 없으면 `COUNTRY_AIRPORT` 의 대표 관문으로 대체되고, 그것도 없으면
    항공 블록이 생기지 않으며 `node tools/check.mjs` 가 경고합니다
- **🏨 숙소 링크** : `stay.areas` 각 항목마다 부킹닷컴·에어비앤비 검색 링크 생성
  - 괄호 안 현지 표기(`(水道橋)`)가 있으면 그 표기로 검색합니다
  - `stay` 를 생략하면 공연장 이름으로만 검색합니다
- **🖼 카드 이미지** : `images[0]` 이 카드 상단 패널 오른쪽에 포스터로 들어가고,
  같은 이미지를 흐리게 깐 배경 위에 아티스트명이 올라갑니다
  - `images` 가 없으면 `id` 해시로 만든 그라디언트가 표시됩니다 (지금까지와 동일)
  - 이미지 로딩에 실패해도 자동으로 그라디언트로 되돌아갑니다
  - 2장 이상이면 카드 상세에 포스터 갤러리가 생깁니다
  - **`http://` 주소는 넣지 마세요.** https 사이트에서 혼합 콘텐츠로 차단됩니다
  - 손으로 안 넣어도, 같은 공연이 자동 수집분에 있으면 그쪽 포스터를 물려받습니다
- **장르** : `data/genres.js` 의 아티스트 표 → 제목 키워드 → Ticketmaster 장르 순으로 판단
  - 공연 하나만 예외 처리하려면 그 항목에 `genre: "rock"` 을 직접 적으면 최우선으로 적용됩니다
  - 보통은 **아티스트 표에 한 줄 넣는 편이 낫습니다.** 그 아티스트의 모든 공연에 적용되고
    앞으로 자동 수집되는 공연에도 계속 적용됩니다
- **요약 숫자, UP NEXT, 오픈 임박/카운트다운, 카테고리별 개수**

## 주요 예매처 URL

| 지역 | 예매처 |
|---|---|
| 한국 | NOL 티켓(인터파크) `https://tickets.interpark.com/` · 예스24 `http://ticket.yes24.com/` · 멜론티켓 `https://ticket.melon.com/` · 티켓링크 `https://www.ticketlink.co.kr/` · 라이브네이션 코리아 `https://www.livenation.kr/` |
| 일본 | 이플러스 `https://eplus.jp/` · 로손티켓 `https://l-tike.com/` · 티켓피아 `https://t.pia.jp/` |
| 대만 | 拓元 tixCraft `https://tixcraft.com/` · KKTIX `https://kktix.com/` · Live Nation TW `https://www.livenation.com.tw/` |
| 홍콩 | Cityline `https://www.cityline.com/` · Live Nation HK `https://www.livenation.hk/` |
| 태국 | Live Nation Tero `https://www.livenationtero.co.th/` · Ticketmelon `https://www.ticketmelon.com/` |
| 싱가포르 | Ticketmaster SG `https://ticketmaster.sg/` · SISTIC `https://www.sistic.com.sg/` |

`vendor.url` 은 가능하면 **해당 공연 상세/예매 페이지 URL**을 넣으세요. 카드를 클릭하면 그 주소로 바로 이동합니다.

## 장르를 채우는 법

장르는 `data/genres.js` 의 `ARTIST_GENRE` 표로 정해집니다. 한 줄만 넣으면 됩니다.

```js
"아티스트명": "kpop",
```

쓸 수 있는 값: `kpop` `jpop` `pop` `rock` `hiphop` `ballad` `trot` `festival` `etc`

이름은 공백·기호를 무시하고 찾습니다. 4자 이상이면 부분 일치(`NELL` → `NELL'S SEASON` 도 매칭),
2~3자면 정확히 일치하거나 한 단어로 떨어질 때만 매칭합니다(`IVE` 가 `live` 안에서 걸리지 않도록).

사이트 장르 칩에서 **미분류**를 누르면 아직 안 채운 공연만 모아 볼 수 있습니다.

## 입력 후 검사

```bash
node tools/check.mjs
```

경고(⚠️)는 배포를 막지 않지만, 오류(❌)가 하나라도 있으면 GitHub Actions 배포가 실패합니다.
