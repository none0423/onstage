# 서버 구성 · 자동 수집 실행 가이드

전부 무료 플랜만 씁니다. **월 예상 비용 0원.**

| 항목 | 사용하는 것 | 무료 한도 | 우리 사용량 |
|---|---|---|---|
| 사이트 호스팅 | GitHub Pages | 무제한 | 정적 파일 ~250KB |
| 수집 크론 | Cloudflare Workers | 10만 요청/일, 크론 5개 | 하루 24회 + 방문자 조회 |
| 수집 결과 저장 | Cloudflare Workers KV | 쓰기 1,000/일 · 읽기 10만/일 | 쓰기 48회/일 |
| 국내·내한 데이터 | KOPIS 오픈API | 무료 | 하루 ~150콜 |
| 아시아 데이터 | Ticketmaster Discovery API | 5,000콜/일 | 하루 ~100콜 (2%) |
| 일본 데이터 | 도쿄돔 공식 일정 | — | 하루 24요청 |

Workers 무료 플랜의 빡빡한 제약(**호출당 CPU 10ms, 서브리퀘스트 50개**)에 맞춰 만들었습니다.
파싱은 실측 0.4ms, 요청은 최대 45개로 제한되어 있어 무료 범위 안에서 동작합니다.

---

## 전체 그림

```
Cloudflare Workers 크론 (매시 정각, 거의 정시)
        │   우선순위 순으로 실행 — 앞쪽이 요청 예산을 먼저 쓴다
        ├─ 1. KOPIS 오픈API       국내·내한
        ├─ 2. 도쿄돔 공식 일정     일본
        └─ 3. Ticketmaster API    싱가포르·말레이시아 (+ 티켓 오픈 시각)
                ↓
        Workers KV 에 저장
                ↓
        GET /feed.json  ←── 사이트가 페이지 열 때마다 읽어감
                            (실패하면 저장소의 data/feed.js 로 조용히 대체)
```

사이트는 **다시 배포하지 않아도** 최신 데이터를 보여줍니다.
GitHub Pages는 디자인·수동 데이터가 바뀔 때만 배포하면 됩니다.

---

## STEP 1 — 사이트 올리기 (GitHub Pages)

로컬 커밋은 이미 되어 있습니다. GitHub에서 빈 저장소를 만든 뒤(README 체크 해제) 실행하세요.

```bash
gh repo create onstage --public --source=. --remote=origin --push
```

`gh` CLI가 없다면,

```bash
git remote add origin https://github.com/<사용자명>/onstage.git
git push -u origin main
```

그다음 저장소 **Settings → Pages → Source** 를 **GitHub Actions** 로 바꿉니다.
`https://<사용자명>.github.io/onstage/` 로 열립니다. 이 주소를 10명에게 공유하세요.

## STEP 2 — Cloudflare Worker 배포

Cloudflare 계정만 있으면 됩니다(무료 가입).

```bash
cd worker
npx wrangler login
npx wrangler kv namespace create FEED
```

마지막 명령이 출력하는 `id = "abc123..."` 를 복사해 **`worker/wrangler.toml`** 의
`PUT_YOUR_KV_NAMESPACE_ID_HERE` 자리에 붙여넣습니다.

```bash
npx wrangler deploy
```

배포되면 `https://onstage-collector.<계정>.workers.dev` 주소가 출력됩니다.

## STEP 3 — 사이트에 Worker 주소 연결

`data/config.js` 한 줄만 고칩니다.

```js
const FEED_ENDPOINT = "https://onstage-collector.<계정>.workers.dev";
```

커밋해서 푸시하면 끝입니다.

```bash
git add data/config.js && git commit -m "chore: Worker 엔드포인트 연결" && git push
```

## STEP 4 — API 키 (승인 나면 추가)

**키가 하나도 없어도 도쿄돔 일정은 수집됩니다.** 나중에 넣어도 됩니다.

| 키 | 발급처 | 소요 | 담당 |
|---|---|---|---|
| `TICKETMASTER_KEY` | https://developer.ticketmaster.com → My Apps → Create App → **Consumer Key** | 즉시 | 싱가포르·말레이시아 + **티켓 오픈 시각** |
| `KOPIS_KEY` | https://www.kopis.or.kr 가입 → 오픈API → 서비스 신청 | 승인 대기 | 국내·내한 |

발급되면 `worker/` 폴더에서 등록합니다.

```bash
cd worker
npx wrangler secret put TICKETMASTER_KEY     # 붙여넣기 후 Enter
npx wrangler secret put KOPIS_KEY
```

시크릿은 즉시 반영되며 **재배포가 필요 없습니다.** 다음 정시 실행부터 그 소스가 붙습니다.
키는 저장소 코드에 절대 넣지 마세요.

## STEP 5 — 잘 도는지 확인

```bash
curl https://onstage-collector.<계정>.workers.dev/status
curl -s https://onstage-collector.<계정>.workers.dev/feed.json | head -c 400
```

`/status` 는 마지막 실행 시각, 소스별 건수, 오류를 보여줍니다.

바로 한 번 돌려보고 싶으면 수동 실행 토큰을 만드세요.

```bash
cd worker
npx wrangler secret put COLLECT_TOKEN        # 아무 문자열
curl "https://onstage-collector.<계정>.workers.dev/collect?token=아무문자열"
```

실시간 로그는 `npx wrangler tail` 로 볼 수 있습니다.

---

## 로컬에서 직접 돌려보기

Worker와 **똑같은 수집 로직**(`worker/src/collect.js`)을 Node로 돌려
저장소의 예비 데이터(`data/feed.js`)를 갱신합니다.

```bash
node tools/collect.mjs                    # 전체
node tools/collect.mjs --only=tokyodome   # 한 소스만
node tools/check.mjs                      # 데이터 형식 검사

TICKETMASTER_KEY=xxx KOPIS_KEY=yyy node tools/collect.mjs
```

## 데이터 우선순위

```
data/concerts.js  (손으로 관리)      ← 언제나 최우선
      ↓ 없으면
Worker /feed.json (매시 갱신)        ← 평소 여기서 옴
      ↓ 못 받으면
data/feed.js      (저장소 예비본)    ← 오프라인·Worker 미배포 시
```

같은 공연장·같은 날짜면 표기가 달라도 같은 공연으로 보고 중복을 숨깁니다
(`후지이 카제 (藤井風)` 와 `Fujii Kaze` 를 같은 공연으로 처리).
자동 수집된 공연은 카드 하단에 `AUTO` 표시가 붙습니다. 마음에 들면
`data/concerts.js` 로 옮겨 굿즈·숙소·팁을 채워 넣으세요.

## 운영하면서 알아둘 것

- **Cloudflare 크론은 거의 정시에 돕니다.** 다만 티켓 오픈 1분 전 알림 용도는 아닙니다.
  "새로 뜬 오픈 일정을 한 시간 안에 잡는" 용도입니다.
- **한 소스가 실패해도 나머지는 수집됩니다.** 실패한 소스는 직전 결과를 유지하고,
  전부 실패하면 KV를 덮어쓰지 않아 빈 화면이 뜨지 않습니다.
- **요청 예산은 KOPIS 가 먼저 씁니다.** 다만 뒤 소스(도쿄돔·Ticketmaster)를 위해 6개를 남겨 두므로
  KOPIS 가 예산을 다 써도 나머지 소스는 항상 실행됩니다. 못 받은 KOPIS 상세는 다음 정시로 이월되어
  보통 서너 번 안에 다 채워집니다.
- **같은 공연이 두 소스에 잡히면** 우선순위가 높은 KOPIS 데이터가 남습니다.
- **페이지 구조가 바뀌면** `node tools/collect.mjs --only=tokyodome` 로 재현하고
  `worker/src/collect.js` 의 파서를 고치세요. Node와 Worker가 같은 파일을 씁니다.
- **예매처 크롤링은 하지 않습니다.** 인터파크·이플러스는 봇 차단과 약관 문제가 있어
  공식 API(KOPIS·Ticketmaster)와 공연장 공식 페이지만 사용합니다.

## 커버되지 않는 지역

Ticketmaster는 **일본·한국·대만·홍콩·태국에서 운영하지 않습니다.**

| 지역 | 현재 방법 |
|---|---|
| 한국 | KOPIS 오픈API 자동 |
| 일본 | 도쿄돔 공식 일정 자동 (다른 공연장은 수동) |
| 싱가포르·말레이시아 | Ticketmaster 자동 |
| 대만·홍콩·태국 | 수동 (`data/concerts.js`) |

다른 공연장(오사카성홀, KSPO DOME 등)도 공식 일정 페이지가 있으면
`worker/src/collect.js` 에 도쿄돔과 같은 방식으로 추가할 수 있습니다.
