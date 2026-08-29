# 서버 구성 · 자동 수집 실행 가이드

전부 무료 서비스만 씁니다. **월 예상 비용 0원.**

| 항목 | 사용하는 것 | 한도 | 우리 사용량 | 비용 |
|---|---|---|---|---|
| 호스팅 | GitHub Pages | 무제한 | 정적 파일 ~200KB | 0원 |
| 자동 실행 | GitHub Actions (퍼블릭 저장소) | 무제한 | 1시간마다 ~40초 | 0원 |
| 국내·내한 데이터 | KOPIS 오픈API | 무료 | 하루 ~250콜 | 0원 |
| 아시아 데이터 | Ticketmaster Discovery API | 5,000콜/일 | 하루 ~150콜 (3%) | 0원 |
| 일본 데이터 | 도쿄돔 공식 일정 페이지 | — | 시간당 요청 1회 | 0원 |

> **프라이빗 저장소로 하면?** Actions 무료 한도가 월 2,000분입니다.
> 1시간마다 ~40초면 월 약 480분이라 무료 범위 안이지만 여유가 줄어듭니다.
> 공연 정보는 민감하지 않으니 **퍼블릭 저장소를 권장**합니다.

---

## STEP 1 — GitHub 저장소에 올리기

로컬 커밋은 이미 되어 있습니다. GitHub에서 빈 저장소를 하나 만든 뒤(README 체크 해제),
아래를 실행하세요. `<사용자명>` 만 본인 것으로 바꾸면 됩니다.

```bash
git remote add origin https://github.com/<사용자명>/onstage.git
git push -u origin main
```

`gh` CLI가 있다면 한 줄로도 됩니다.

```bash
gh repo create onstage --public --source=. --remote=origin --push
```

## STEP 2 — GitHub Pages 켜기

저장소 **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions** 로 바꿉니다.

푸시하면 `.github/workflows/deploy.yml` 이 자동으로 돌고
`https://<사용자명>.github.io/onstage/` 로 사이트가 열립니다. 이 주소를 10명에게 공유하면 됩니다.

## STEP 3 — API 키 발급

키가 하나도 없어도 **도쿄돔 일정은 수집됩니다.** 키는 나중에 추가해도 됩니다.

**Ticketmaster (즉시 발급, 아시아 공연 + 티켓 오픈 시각)**
1. https://developer.ticketmaster.com 가입
2. My Apps → Create App → 이름 아무거나
3. **Consumer Key** 복사 (이게 API 키)

**KOPIS (승인 필요, 국내·내한 공연)**
1. https://www.kopis.or.kr 회원가입
2. 상단 **오픈API → 서비스 신청**
3. 승인되면 발급된 **서비스 키** 복사 (영업일 기준 시간이 걸릴 수 있음)

## STEP 4 — 키를 저장소 Secrets에 등록

저장소 **Settings → Secrets and variables → Actions → New repository secret** 에서 두 개 등록:

| Name | Secret |
|---|---|
| `TICKETMASTER_KEY` | Ticketmaster Consumer Key |
| `KOPIS_KEY` | KOPIS 서비스 키 |

키는 저장소 코드에 절대 넣지 마세요. Secrets에만 넣으면 Actions가 알아서 씁니다.

## STEP 5 — 첫 수집 돌려보기

저장소 **Actions → Collect ticket info → Run workflow** 를 눌러 수동 실행합니다.
성공하면 `data/feed.js` 가 갱신 커밋되고, 이어서 Pages 배포까지 자동으로 이어집니다.

이후에는 **매시 07분에 자동 실행**됩니다.

---

## 동작 방식

```
매시 07분  ─→  collect.yml
                 ├ KOPIS 오픈API        (국내·내한)
                 ├ Ticketmaster API     (싱가포르·말레이시아 + 티켓 오픈 시각)
                 └ 도쿄돔 공식 일정      (일본)
                        ↓
                 data/feed.js 생성
                        ↓
                 내용이 바뀌었을 때만 커밋  ──→  deploy.yml  ──→  GitHub Pages
                 (안 바뀌면 아무 것도 안 함)
```

- `data/concerts.js` (손으로 관리) 가 `data/feed.js` (자동) 보다 **항상 우선**합니다.
  같은 공연장·같은 날짜면 같은 공연으로 보고 자동 수집분을 숨깁니다.
- 자동 수집된 공연은 카드 하단에 `AUTO` 표시가 붙습니다.
  내용이 마음에 들면 `data/concerts.js` 로 옮겨서 굿즈·숙소·팁을 채워 넣으세요.

## 로컬에서 직접 돌려보기

```bash
node tools/collect.mjs                 # 전체 수집
node tools/collect.mjs --only=tokyodome  # 한 소스만
node tools/collect.mjs --debug         # 원본 응답을 tools/.debug/ 에 저장
node tools/check.mjs                   # 데이터 형식 검사
```

키를 쓰려면 앞에 붙이세요.

```bash
TICKETMASTER_KEY=xxx KOPIS_KEY=yyy node tools/collect.mjs
```

## 운영하면서 알아둘 것

- **크론은 정시에 안 맞습니다.** GitHub 무료 크론은 몇 분에서 수십 분 밀립니다.
  티켓 오픈 1분 전 알림 같은 용도로는 못 씁니다. "새로 뜬 오픈 일정을 하루에도 여러 번 잡는" 용도입니다.
- **60일 동안 저장소에 사람 커밋이 없으면 GitHub이 스케줄을 자동으로 멈춥니다.**
  가끔 데이터에 공연을 하나 추가하거나, Actions 탭에서 수동 실행하면 유지됩니다.
- **API 응답 형식이 바뀌면** `node tools/collect.mjs --debug` 로 원본을 받아
  `tools/.debug/` 를 열어보고 파서를 고치세요. 소스별로 독립이라 하나가 실패해도 나머지는 수집됩니다.
- **예매처 크롤링은 하지 않습니다.** 인터파크·이플러스 등은 봇 차단과 약관 문제가 있어,
  공식 API(KOPIS·Ticketmaster)와 공연장 공식 페이지만 씁니다.
  이 원칙을 깨면 IP 차단이나 법적 문제가 생길 수 있습니다.

## 커버되지 않는 지역

Ticketmaster는 **일본·한국·대만·홍콩·태국에서 운영하지 않습니다.**
이 지역 공연은 지금 이렇게 채웁니다.

| 지역 | 현재 방법 |
|---|---|
| 일본 | 도쿄돔 공식 일정 자동 수집 (다른 공연장은 수동) |
| 한국 | KOPIS 오픈API 자동 수집 |
| 대만·홍콩·태국 | 수동 입력 (`data/concerts.js`) |

다른 공연장(오사카성홀, KSPO DOME 등)도 공식 일정 페이지가 있으면
`tools/collect.mjs` 에 도쿄돔과 같은 방식으로 추가할 수 있습니다.
