# 🎫 ON STAGE — 콘서트 티켓팅 브리핑

내한 공연 · 일본 공연 · 아시아 공연의 **티켓 오픈 일정, 예매처, 굿즈, 숙박 정보**를
한 페이지에서 요약해서 보는 한국어 개인용 대시보드입니다.

- 카드 아무 곳이나 클릭 → **해당 공연 예매처로 바로 이동**
- 카테고리 칩: 전체 / 내한 공연 / **일본(별도)** / 아시아 / 국내 / 티켓 오픈 임박
- 상단에 오늘 오픈·7일 내 오픈·예매 진행 중 건수, **UP NEXT**, **오픈 임박 목록** 자동 표시
- 카드 상세를 열면 **✈ 항공권**(해외 공연) · **🏨 지역별 숙소** · 굿즈 · 다른 예매처 · 지도 · 출처 링크가 나옵니다

## 바로 보기

`index.html` 파일을 더블클릭하면 끝입니다. 서버도, 빌드도, 설치도 필요 없습니다.

```bash
open index.html
```

## 운영 비용: 월 0원

| 항목 | 방식 | 비용 |
|---|---|---|
| 호스팅 | 정적 파일 → GitHub Pages 또는 Cloudflare Pages | **0원** |
| 서버 / DB | 없음 (데이터가 `data/concerts.js` 한 파일) | **0원** |
| 항공·숙박·지도 정보 | 유료 API 대신 **검색 딥링크 생성** | **0원** |
| 배포 자동화 | GitHub Actions 무료 티어 (퍼블릭 저장소 무제한) | **0원** |
| 사용자 관리 | 10명 이하 → 로그인 없이 URL만 공유 | **0원** |

## 배포와 자동 수집

전체 실행 절차는 **[SETUP.md](SETUP.md)** 에 단계별로 정리해 두었습니다.
GitHub 저장소 만들기 → Pages 켜기 → API 키 발급 → Secrets 등록 → 첫 수집까지 순서대로 따라 하시면 됩니다.

요약하면,

- `.github/workflows/collect.yml` 이 **매시 07분**에 KOPIS·Ticketmaster·도쿄돔에서 정보를 모아 `data/feed.js` 를 갱신
- 내용이 바뀌었을 때만 커밋하고, 그때만 Pages를 재배포
- `data/concerts.js`(손으로 관리)가 자동 수집분보다 항상 우선

## 배포 (수동으로 할 경우 둘 중 하나만)

**A. Cloudflare Pages — 가장 간단**
1. GitHub에 이 폴더를 그대로 push
2. Cloudflare Pages → *Create a project* → 저장소 연결
3. 빌드 명령 **비움**, 출력 디렉터리 `/` → Deploy

**B. GitHub Pages**
1. GitHub에 push
2. 저장소 Settings → Pages → Source를 **GitHub Actions**로 설정
3. `.github/workflows/deploy.yml`이 push마다 자동 배포 (데이터 형식 검사 포함)

> 링크를 아는 사람만 들어오게 하려면 Cloudflare Pages의 **Access** 기능으로
> 이메일 화이트리스트(50명까지 무료)를 걸 수 있습니다.

## 항공 · 숙소

해외 공연 카드에는 항공·숙소 블록이 자동으로 붙습니다.

- **✈ 항공** — 인천(ICN) 출발 기준으로 **공연 전날 출발 / 마지막 공연 다음 날 귀국** 일정을 잡아
  스카이스캐너 · 네이버 항공권 · 구글 항공 검색 링크를 만듭니다.
  도시→공항 매핑은 `assets/app.js` 의 `AIRPORT` 에 있고, 없는 도시는 `node tools/check.mjs` 가 경고합니다.
- **🏨 숙소** — `stay.areas` 에 적어 둔 지역마다 부킹닷컴·에어비앤비 검색 링크를 만듭니다.
  괄호 안 현지 표기(`스이도바시 (水道橋)`)가 있으면 그 표기로 검색해 결과가 정확합니다.

둘 다 API 키나 제휴 계약 없이 **검색 URL만 조립**하므로 비용이 들지 않습니다.

## 현재 들어 있는 데이터

2026-08-29 기준으로 공개 소스에서 확인한 **실제 공연 18건**이 들어 있습니다.

| 카테고리 | 건수 | 예시 |
|---|---|---|
| 내한 공연 | 5 | Vaundy(인스파이어 아레나), Post Malone·Charlie Puth(고양종합운동장), Khalid·FKJ(킨텍스) |
| 일본 | 8 | 도쿄돔 공식 스케줄 — ENHYPEN, YOASOBI, BIGBANG, 후지이 카제, Snow Man, Bruno Mars 등 |
| 아시아 | 4 | IVE(홍콩), ITZY(타이베이), BIGBANG(싱가포르), BABYMONSTER(방콕) |
| 국내 | 1 | 이승철 THE VOICE (KSPO DOME) |

각 카드 하단의 **출처** 링크로 원문을 확인할 수 있습니다.
티켓 오픈 시각·가격은 바뀔 수 있으니 예매 전 예매처 공지를 반드시 다시 확인하세요.

## 정보 갱신하는 법

1. `data/concerts.js` 를 열고 `CONCERTS` 배열에 공연을 추가/수정
2. 맨 위 `DATA_UPDATED` 날짜 변경
3. 형식 검사 후 push

```bash
node tools/check.mjs
```

입력 항목 설명은 [data/GUIDE.md](data/GUIDE.md)에 있습니다.

### 자동 수집은 무엇을 긁어오나

예매처를 크롤링하지 않습니다. 인터파크·이플러스·티켓피아는 봇 차단과 약관 문제가 있어서,
**공식 API와 공연장 공식 페이지만** 사용합니다.

| 소스 | 담당 | 방식 |
|---|---|---|
| KOPIS 오픈API | 국내·내한 | 정부 공연예술통합전산망 공식 API (무료) |
| Ticketmaster Discovery API | 싱가포르·말레이시아 | 공식 API (무료 5,000콜/일) — **티켓 오픈 시각까지 제공** |
| 도쿄돔 공식 일정 | 일본 | 공연장 자체 공개 페이지, 실행당 요청 1회 |

대만·홍콩·태국은 무료 공식 API가 없어 `data/concerts.js` 에 손으로 넣습니다.

## 폴더 구조

```
index.html            화면 구조
assets/styles.css     디자인 토큰 + 레이아웃
assets/app.js         필터·정렬·상태 계산·카드 아트·숙소 링크 생성
data/concerts.js      ← 공연 데이터 (여기만 고치면 됨)
data/GUIDE.md         입력 가이드
tools/check.mjs       데이터 형식 검사기
.github/workflows/    GitHub Pages 자동 배포
```

## 디자인

크림색 배경 + 헤비 타이포 + 핑크/라임 액센트 + 모노스페이스 라벨 조합입니다.
색상과 폰트는 전부 `assets/styles.css`의 `:root` 변수로 정의되어 있어 한 곳만 바꾸면 전체 톤이 바뀝니다.

본문 폰트는 Pretendard를 jsDelivr CDN에서 불러오고, 오프라인이거나 CDN이 막히면
macOS 기본 한글 폰트로 자연스럽게 대체됩니다. (외부 리소스는 이것 하나뿐입니다.)

## 참고

현재 들어 있는 12건은 **형식을 보여주기 위한 예시 데이터**입니다.
실제 아티스트·날짜·가격으로 교체한 뒤 사용하세요.
