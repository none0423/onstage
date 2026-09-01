# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

**ON STAGE** — a Korean-language static dashboard summarizing concert ticketing info (내한 / 일본 / 아시아 / 국내) for ~10 private users. All UI text, data, and docs are in Korean — keep it that way.

## Commands

There is no package manager, no build step, no test framework, and no dependencies.

```bash
open index.html                          # run the site (works over file://, no server needed)
node tools/check.mjs                     # the only check — validates both data files, exits 1 on error
node tools/collect.mjs                   # run the collector locally (writes data/feed.js)
node tools/collect.mjs --only=tokyodome  # one source
cd worker && npx wrangler deploy         # deploy the cron Worker
cd worker && npx wrangler tail           # live Worker logs
```

`tools/check.mjs` runs in the deploy workflow. Run it after any edit to `data/concerts.js`.
Collection needs `KOPIS_KEY` / `TICKETMASTER_KEY` (env locally, Wrangler secrets in the Worker); without them those sources are skipped with a warning rather than failing, and Tokyo Dome still collects. Deployment and key setup are documented in `SETUP.md`.

## Hard constraints

- **Zero recurring cost** is a product requirement, not an accident. No backend, no database, no paid APIs. Lodging/map/flight info is produced as *search deep links*, never fetched.
- **No scraping of ticket vendors.** Interpark, e+, ticket pia etc. block bots and forbid automated collection. Automated collection goes through official APIs only (KOPIS, Ticketmaster Discovery), plus one venue's own public schedule page (Tokyo Dome, one request per run, no robots.txt restrictions). Never add a vendor scraper — it breaks both the cost constraint and the sites' terms.
- **Must keep working over `file://`.** That is why `data/concerts.js` declares plain globals (`CONCERTS`, `DATA_UPDATED`) loaded via `<script>` instead of JSON + `fetch`, and why there are no ES modules in `assets/`. Converting to modules or `fetch` breaks double-click-to-open. The Pretendard webfont from jsDelivr is the only external resource; it degrades to the system Korean stack offline, so never make layout depend on it.

## Architecture

Four files matter: `index.html` (static shell with fixed element IDs), `assets/app.js` (all logic), `data/concerts.js` (hand-curated content), `data/feed.js` (generated). Page order: nav → hero → stats → search/chips → UP NEXT → 오픈 임박 → card grid → 원정 가이드 → footer.

**Two data sources, one merge.** `data/concerts.js` is authored by hand; `data/feed.js` is overwritten by `tools/collect.mjs` and must never be edited by hand. `app.js` merges them once at load into `EVENTS`, and every render function reads `EVENTS`, not `CONCERTS`. Manual entries always win: a feed entry is dropped if its `id`, its normalized `artist|firstDate`, **or** its `venue|firstDate` already exists in `CONCERTS` — the venue key exists because the same show appears under different spellings (`후지이 카제 (藤井風)` vs `Fujii Kaze`). Feed entries carry `auto: true` and `sourceName`, which render as an `AUTO` chip in the card footer.

**Collection runs hourly on Cloudflare Workers, not in CI.** `worker/src/index.js` has the `scheduled` handler (cron `0 * * * *` in `worker/wrangler.toml`), stores the result in Workers KV, and serves it at `GET /feed.json` with permissive CORS. The site fetches that at load, so **fresh data needs no redeploy** — GitHub Pages only rebuilds when the design or `data/concerts.js` changes. `data/config.js` holds the Worker URL; an empty string disables the fetch and the site runs on the bundled `data/feed.js` alone.

**Free-tier limits shaped the collector.** Workers Free allows **10 ms CPU and 50 subrequests per invocation**. Parsing is therefore `indexOf`/`split` with pre-compiled module-level regexes (measured ~0.4 ms for Tokyo Dome's 233 KB page), and `MAX_SUBREQUESTS = 45` hard-caps requests — KOPIS detail lookups stop when the budget runs low and resume next hour. Never move regex construction inside a loop, and never raise the cap without checking the plan.

**`worker/src/collect.js` is the single collection implementation**, shared by the Worker and `tools/collect.mjs`. It touches no platform APIs beyond `fetch`, so it must stay free of `node:*` imports. `worker/package.json` (`type: module`) is what makes Node treat it as ESM.

**KOPIS quirks, all verified against the live API.** The detail response's outer element is `<dbs>`, so parsing the whole document flat matches `dbs` itself and yields nothing — slice `<db>` out first, then use `pick()` (indexOf-based) rather than the flat regex, because fields like `sty` contain HTML. The detail's `<relates>` block is where real vendor product URLs come from (ticketlink `/product/…`, interpark `GoodsInfo.asp`), ranked by `VENDOR_RANK`; entries that never got a detail fall back to an Interpark search URL. `kopisDetail: true` marks entries whose detail fetch actually completed — the subrequest cap means a run only fills part of the list, and without that flag a capped-out entry would count as "cached" and never be retried. KOPIS gives a performance *period*, not a per-show schedule, so `dates` holds only `[from, to]` and `period: true` suppresses the misleading "N회차" label. `area === "해외"` marks Korean artists playing abroad; those are re-routed by country or dropped rather than mislabeled 국내, and they carry `kopisOverseas: true` so the dedup step ranks them *behind* every other source — the venue's own page describes its own show better than a Korean registry's secondhand record. Their `fcltynm` also arrives noisy (`K-Arena Yokohama(K-아레나 요코하마) [일본]`), so `cleanVenue()` strips the trailing country bracket, prefers a parenthesised Korean name, and drops a leading country word; `cityFromVenue()` then recovers a real city when `area` gave only the country. `IS_VISIT` deliberately excludes "WORLD TOUR" — Korean acts use it constantly.

**Ticketmaster quirks, verified against the live API.** `dates.status.code` is `offsale` both for a sale that has ended *and* for one that has not started, so status must be read together with `sales.public.startDateTime` — a future open time means 예정, not 예매 마감 (this silently mislabeled 8 of 63 Singapore events before it was caught). It is the only source that supplies ticket-open times (63/63 in SG), which is what makes the 오픈 임박 section work at all; it supplies no `priceRanges` for SG (0/63). `TM_COUNTRIES` was set by querying Discovery for every Asian country code rather than by assumption: SG and PH return events, MY returns zero today but costs one request to keep, and TW·HK·TH·ID·VN·JP·KR return zero because Ticketmaster does not operate there. Re-run that check before adding a country. Its images are 16:9, unlike KOPIS's 3:4 posters, so the card detects orientation on load and swaps between a right-aligned poster and a full-bleed fill.

**Images are hotlinked, https-only.** KOPIS returns poster URLs as `http://www.kopis.or.kr/...`, which 301s and would be blocked as mixed content on the Pages site — `normalizePoster()` rewrites them to `https://kopis.or.kr/...`. `check.mjs` rejects any `http://` image. Tokyo Dome's calendar carries no images, so Japan cards stay on the gradient. The merge step also donates images: a hand-written entry with no `images` inherits them from the feed entry it deduplicated, which is why curated shows aren't the only ones left blank.

**`data/artists.js` is auto-filled from MusicBrainz once a week.** `tools/artists.mjs` (run by `.github/workflows/artists.yml`, not the Worker — its subrequest budget is already tight) looks up artists nothing else has classified and records `country` and `genre`. Country is the stronger signal: it settles 내한 vs 국내 even when no genre tag exists. Three guards keep it honest, and all three earned their place in testing: the search's top hit is never trusted (`G2A` matched `for %f in (in/*.*) do` at score 100), a name must match exactly against name/sort-name/aliases, and **exactly one** exact match must exist (`PERSONA` and `VIBES` are common words with homonyms). Misses are recorded too, so a failed lookup is not retried every week. Precedence runs manual → auto → keyword, so a hand-written entry in `genres.js` always wins — that is how `Jay Chou` was corrected after a `pop rap` tag put him in 힙합.

**Genre is curated, not collected.** No source supplies usable genre: KOPIS labels everything 대중음악, and Ticketmaster returns "Pop" for 54 of 63 Singapore events including Stray Kids and BIGBANG. `data/genres.js` therefore holds a hand-maintained `ARTIST_GENRE` table, and `genreOf()` resolves in order: an explicit `genre` on the event → the artist table → title keywords → the Ticketmaster genre (last precisely because it is unreliable) → `null` for 미분류. `GENRE_KEYWORDS` is ordered so specific genres beat `festival` — 대구 힙합 페스티벌 is more usefully 힙합 than 페스티벌, and `OBJET K-POP FESTA` is K-POP. Table lookup is length-aware: keys of 4+ characters match as substrings of the normalized artist, while 2–3 character keys must match the whole name or a single word — otherwise `IVE` matches inside `live`. Adding an artist to the table covers all of that artist's shows across every source, now and in future collections, which is why per-event `genre` should stay rare. Roughly 16% remain 미분류; the 미분류 chip exists so gaps are findable rather than hidden.

**Japanese venues are a pluggable list.** `JP_VENUES` in `worker/src/collect.js` holds one entry per venue — URL, Korean venue/city names, lodging areas, and its own `parse()` — because every venue's HTML differs. Adding a venue means adding one entry and one parser; a venue that throws is recorded per-venue and the rest still collect. Tokyo Dome and K-Arena render a whole schedule in one page; Kyocera Dome shows one month at a time, so its entry sets `months`/`monthUrl` and the collector stitches the months back together. Osaka-jo Hall looks paginated but `?ym=` does not change the server response (the month switch is client-side), so it deliberately fetches once — don't "fix" it by adding `monthUrl`. Each venue page costs one subrequest, so `RESERVED_FOR_LATER_SOURCES` must grow with the list.

**Source priority is `kopis > jpvenues > ticketmaster`**, declared once in `SOURCE_ORDER` and used for two different things. It sets execution order, so KOPIS claims the subrequest budget first — but `RESERVED_FOR_LATER_SOURCES` (6) stops its detail loop early so the sources behind it can never be starved. It also breaks cross-source ties: when the same artist appears on the same date from two sources, the higher-priority source's entry survives. That tie-break compares `artist|date` **only across different sources** — never within one. KOPIS reports several halls under a single `fcltynm` (올림픽공원), so deduplicating by venue+date inside a source silently deletes distinct concerts; an earlier version dropped 박지현 because 전유진 played 올림픽공원 the same day.

**Cancelled shows are dropped, not shown.** Sources signal cancellation differently: Ticketmaster has `dates.status.code` (`cancelled` and `postponed` are both dropped — a postponed show's old date is meaningless; `rescheduled` is kept because TM moves the date), KOPIS has no cancelled state at all and simply stops returning the performance, and venue pages append a marker to the title. The shared `CANCELLED` regex therefore matches title markers (`[취소]`, `공연취소`, `中止`, `延期`, `CANCELLED`, `POSTPONED`) and is applied **only to titles** — a bare `취소` does not match, because tip and guidance text legitimately contains phrases like "무료 취소 조건".

**Each collector source is independent.** A source that throws is recorded in `errors` and its *previous* entries are carried over, so one broken parser can't wipe a category; an all-sources failure leaves KV (and `data/feed.js`) untouched rather than publishing an empty feed.

**Asset URLs carry a `?v=` version and `init()` is failure-isolated.** GitHub Pages serves HTML with a short TTL but assets with a longer one, so a deploy can pair *new* HTML with a browser's *cached* `app.js`. That combination once blanked the whole page: the stale script touched an element the new HTML no longer had, `init()` threw on its first line, and `render()` never ran. Bump the `?v=` string in `index.html` whenever `app.js`/`styles.css` change alongside markup, and keep every `init()` step wrapped in `step()` so one broken piece can never stop the grid from rendering.

**The default sort interleaves countries.** `mix` (the default) sorts by date, groups by `country`, then round-robins one show per country per round — so a 싱가포르 show, then a 한국 show, then a 일본 show, rather than a run of one country. Rotation order is set by whichever country has the earliest show, and each country keeps its internal date order. A country with a single distant show still claims a slot in round one; that is intended, not a bug. `open`/`date`/`artist` remain available and are plain comparators.

**`renderCollect()` is a second view of the same list, not a second data source.** The 공연 정보 모아보기 section re-renders from whatever `visibleList()` already returned, sorted by date and grouped under month header rows, plus a month-distribution bar. It adds no fetch and no new field — changing filters updates both the card grid and the table in one `render()` pass.

**Rendering** is a full re-render: `render()` rebuilds `#grid` and `#tabs` from `innerHTML`, driven by the module-level `state` object (`cat`, `q`, `sort`, `hidePast`). Every event handler mutates `state` then calls `render()`. `renderUpNext()` and `renderSummary()` run once at init. All interpolated data goes through `esc()`.

**Authored vs. derived data** — this split is the main thing to understand before editing `data/concerts.js`:

| Derived at render time (never store) | Source |
|---|---|
| Status badge text/tone, "공연 종료" | `statusOf()` / `daysToOpen()` / `isPast()` from `dates` + `ticketOpen` + today |
| Card art panel gradient | `artOf(id)` — hash of `id` picks from the `ART` palette, so **changing an id changes the card's color** |
| Country code in the mono footer (`JP`, `SG`) | `COUNTRY_CODE` map in app.js; add an entry when adding a country |
| Flight search links + the suggested trip dates | `flightPlan()` — skipped only for `country: "대한민국"`; departs the day before the first show and returns the day after the last. `airportFor()` resolves the city case-insensitively against `AIRPORT`, which carries **both Korean and English keys** because KOPIS says 싱가포르 and Ticketmaster says `Singapore`, then falls back to `COUNTRY_AIRPORT` for entries whose city is unknown or a country name. Rendered on the card face, not inside the details toggle. |
| Card artwork | `images[0]` renders as a poster on the right of the 16:9 panel over a blurred copy of itself; absent or failed images fall back to the `artOf(id)` gradient via an `onerror` that strips `.has-img` |
| Lodging search links per area | `stayAreas()` from `stay.areas`, preferring the parenthesised local-language name (`스이도바시 (水道橋)` → searches `水道橋`) |
| Venue map link | `mapLink()` from `mapQuery` (falls back to `venue` + `city`) |
| Chip counts, stat tiles, UP NEXT, 오픈 임박 | recomputed from `CONCERTS` |

`ticketStatus` in the data is only a **manual override** for states that can't be inferred from dates (`판매중`, `매진`, `종료`); `statusOf()` otherwise ignores it and computes from `ticketOpen`. `판매중` exists because most real entries are already on sale with no recorded open time — without it they would render as "오픈일 미정". `ticketOpen` must include a UTC offset (`+09:00`) — `check.mjs` enforces this — and is rendered in the viewer's local timezone, which assumes the viewer is in KST.

**Labels are deduplicated on purpose.** Four surfaces once said some form of "오픈 임박" — a nav link, the lime CTA (same anchor), the section heading, a chip, and a sort option. The nav link was dropped (the CTA keeps the anchor), the sort reads `오픈 빠른 순`, and the chip reads `곧 오픈 (14일)` so only the section owns the plain phrase. The stat tiles are strictly a time/scale axis (신규 · 이번 달 · 다음 달 · 전체) because 예매 진행 중 and 7일 내 오픈 previously repeated a chip's exact number. Card bodies never restate the badge — the badge owns status, the body owns price. When adding UI, check no other surface already says the same thing.

**`categoryOf()` overrides the collector's 내한/국내 guess.** KOPIS cannot say whether an artist is foreign — its `IS_VISIT` regex only fires on `내한`/`IN SEOUL` appearing in the title, so acts like &TEAM, YUURI, 제이슨 므라즈 and SPYAIR arrived as `domestic`. The site corrects this at render time using the curated genre table: `jpop` and `pop` are only ever assigned to foreign artists, and `FOREIGN_ARTISTS` in `data/genres.js` covers the rock/hiphop acts where the genre alone is ambiguous (Korean and foreign bands share those keys). A name containing kana — or han with no hangul — is also treated as foreign, which catches new Japanese and Chinese acts with no table entry at all. Compare against `categoryOf(c)`, never `c.category`, anywhere the UI filters or counts by region.

**The three filter rows each carry a label (지역 · 장르 · 상태) and `renderActiveFilters()` summarises what is applied.** With three orthogonal axes plus search, a narrow result set otherwise looks like missing data rather than an active filter; the summary line names every active axis and offers one button that clears all of them.

**Three independent filter axes, one chip row each.** `CATEGORIES` (지역: japan | visit | asia | domestic) are real `category` values in the data; `GENRES` comes from `data/genres.js`; `STATES` (곧 오픈 | 예매 진행 중) is derived from dates at render time and is deliberately *not* stored. They are orthogonal — an event can match all three — so each row's counts are computed with the **other two** axes applied, which is why no chip ever shows a count you cannot click. `티켓 오픈 임박` used to sit in the category row and was the one non-exclusive chip there; keep status out of `CATEGORIES`. Adding a real category means touching `CATEGORIES` *and* the `CATS` whitelist in `tools/check.mjs`.

**`firstSeen` powers 이번 주 신규 등록.** The collector stamps an event the first run it appears and carries the value forward from KV afterwards; entries that predate the field stay `null` and are never counted, so the tile reads 0 on the first run rather than claiming every show is new. It replaced 오늘 티켓 오픈, which sat at 0 permanently because only Ticketmaster supplies open times.

**Card click → ticket vendor.** `openVendor()` is delegated on both `#grid` and `#briefing-list`, keyed off `data-url`, and deliberately ignores clicks on `a`, `button`, and `summary` so the inner links (other vendors, lodging, the `<details>` toggle, the CTA) still work. `vendor.url` should be the specific event page when known; the vendor homepage is the fallback.

**The 오픈 임박 section falls back.** `renderSummary()` shows imminent *ticket opens* when any exist, and otherwise switches its own heading and rows to a *concert* countdown. Real data usually has no future open times, so the fallback is the normal path — don't "fix" the empty state by deleting the section.

**Design.** Modeled on a reference layout the user supplied: warm paper background, heavy Pretendard headlines with a pink highlight, lime accents, monospace micro-labels, and flush bordered grids (containers carry `border-top`/`border-left`, children carry `border-right`/`border-bottom` — this is what makes an incomplete last row look right). All colors and both font stacks are tokens in `:root` in `assets/styles.css`; don't hardcode hex values in `app.js` except inside the `ART` palette.

## Editing data

`data/concerts.js` is the only file a human edits during normal operation; `data/feed.js` is machine-owned. Bump `DATA_UPDATED` (YYYY-MM-DD) whenever entries change — it is shown in the hero eyebrow. Field-by-field rules and vendor URLs are in `data/GUIDE.md`.

The entries in the file are **real concerts** collected from public sources on 2026-08-29; each carries a `source` URL rendered at the bottom of its card. Never add or edit a concert from memory — dates, prices, venues, and ticket-open times must come from the user or from a source you actually fetched, and the `source` field must point at it. When a fact isn't in the source, write "예매처 공지 참고" rather than guessing. Tokyo Dome entries come from the venue's own schedule page, which is the most authoritative source available for Japan.
