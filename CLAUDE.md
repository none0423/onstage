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

**KOPIS quirks, all verified against the live API.** The detail response's outer element is `<dbs>`, so parsing the whole document flat matches `dbs` itself and yields nothing — slice `<db>` out first, then use `pick()` (indexOf-based) rather than the flat regex, because fields like `sty` contain HTML. The detail's `<relates>` block is where real vendor product URLs come from (ticketlink `/product/…`, interpark `GoodsInfo.asp`), ranked by `VENDOR_RANK`; entries that never got a detail fall back to an Interpark search URL. `kopisDetail: true` marks entries whose detail fetch actually completed — the subrequest cap means a run only fills part of the list, and without that flag a capped-out entry would count as "cached" and never be retried. KOPIS gives a performance *period*, not a per-show schedule, so `dates` holds only `[from, to]` and `period: true` suppresses the misleading "N회차" label. `area === "해외"` marks Korean artists playing abroad; those are re-routed by country or dropped rather than mislabeled 국내. `IS_VISIT` deliberately excludes "WORLD TOUR" — Korean acts use it constantly.

**Ticketmaster quirks, verified against the live API.** `dates.status.code` is `offsale` both for a sale that has ended *and* for one that has not started, so status must be read together with `sales.public.startDateTime` — a future open time means 예정, not 예매 마감 (this silently mislabeled 8 of 63 Singapore events before it was caught). It is the only source that supplies ticket-open times (63/63 in SG), which is what makes the 오픈 임박 section work at all; it supplies no `priceRanges` for SG (0/63). Malaysia currently returns zero music events but is kept in `TM_COUNTRIES` at a cost of one request. Its images are 16:9, unlike KOPIS's 3:4 posters, so the card detects orientation on load and swaps between a right-aligned poster and a full-bleed fill.

**Images are hotlinked, https-only.** KOPIS returns poster URLs as `http://www.kopis.or.kr/...`, which 301s and would be blocked as mixed content on the Pages site — `normalizePoster()` rewrites them to `https://kopis.or.kr/...`. `check.mjs` rejects any `http://` image. Tokyo Dome's calendar carries no images, so Japan cards stay on the gradient. The merge step also donates images: a hand-written entry with no `images` inherits them from the feed entry it deduplicated, which is why curated shows aren't the only ones left blank.

**Genre is curated, not collected.** No source supplies usable genre: KOPIS labels everything 대중음악, and Ticketmaster returns "Pop" for 54 of 63 Singapore events including Stray Kids and BIGBANG. `data/genres.js` therefore holds a hand-maintained `ARTIST_GENRE` table, and `genreOf()` resolves in order: an explicit `genre` on the event → the artist table → title keywords → the Ticketmaster genre (last precisely because it is unreliable) → `null` for 미분류. Table lookup is length-aware: keys of 4+ characters match as substrings of the normalized artist, while 2–3 character keys must match the whole name or a single word — otherwise `IVE` matches inside `live`. Adding an artist to the table covers all of that artist's shows across every source, now and in future collections, which is why per-event `genre` should stay rare. Roughly 16% remain 미분류; the 미분류 chip exists so gaps are findable rather than hidden.

**Japanese venues are a pluggable list.** `JP_VENUES` in `worker/src/collect.js` holds one entry per venue — URL, Korean venue/city names, lodging areas, and its own `parse()` — because every venue's HTML differs. Adding a venue means adding one entry and one parser; a venue that throws is recorded per-venue and the rest still collect. Tokyo Dome and K-Arena render a whole schedule in one page; Kyocera Dome shows one month at a time, so its entry sets `months`/`monthUrl` and the collector stitches the months back together. Osaka-jo Hall looks paginated but `?ym=` does not change the server response (the month switch is client-side), so it deliberately fetches once — don't "fix" it by adding `monthUrl`. Each venue page costs one subrequest, so `RESERVED_FOR_LATER_SOURCES` must grow with the list.

**Source priority is `kopis > jpvenues > ticketmaster`**, declared once in `SOURCE_ORDER` and used for two different things. It sets execution order, so KOPIS claims the subrequest budget first — but `RESERVED_FOR_LATER_SOURCES` (6) stops its detail loop early so the sources behind it can never be starved. It also breaks cross-source ties: when the same artist appears on the same date from two sources, the higher-priority source's entry survives. That tie-break compares `artist|date` **only across different sources** — never within one. KOPIS reports several halls under a single `fcltynm` (올림픽공원), so deduplicating by venue+date inside a source silently deletes distinct concerts; an earlier version dropped 박지현 because 전유진 played 올림픽공원 the same day.

**Each collector source is independent.** A source that throws is recorded in `errors` and its *previous* entries are carried over, so one broken parser can't wipe a category; an all-sources failure leaves KV (and `data/feed.js`) untouched rather than publishing an empty feed.

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

**Categories and chips.** The `CATEGORIES` array in `assets/app.js` drives the chip row. Four keys (`japan` | `visit` | `asia` | `domestic`) are real `category` values in the data; `soon` is a **pseudo-category** — a filter for "opens within 14 days", handled by `matchCat()`/`isSoon()` and deliberately absent from the `CATS` whitelist in `tools/check.mjs`. Adding a real category means touching `CATEGORIES` *and* `CATS`; adding another pseudo-filter means touching `CATEGORIES` and `matchCat()` only.

**Card click → ticket vendor.** `openVendor()` is delegated on both `#grid` and `#briefing-list`, keyed off `data-url`, and deliberately ignores clicks on `a`, `button`, and `summary` so the inner links (other vendors, lodging, the `<details>` toggle, the CTA) still work. `vendor.url` should be the specific event page when known; the vendor homepage is the fallback.

**The 오픈 임박 section falls back.** `renderSummary()` shows imminent *ticket opens* when any exist, and otherwise switches its own heading and rows to a *concert* countdown. Real data usually has no future open times, so the fallback is the normal path — don't "fix" the empty state by deleting the section.

**Design.** Modeled on a reference layout the user supplied: warm paper background, heavy Pretendard headlines with a pink highlight, lime accents, monospace micro-labels, and flush bordered grids (containers carry `border-top`/`border-left`, children carry `border-right`/`border-bottom` — this is what makes an incomplete last row look right). All colors and both font stacks are tokens in `:root` in `assets/styles.css`; don't hardcode hex values in `app.js` except inside the `ART` palette.

## Editing data

`data/concerts.js` is the only file a human edits during normal operation; `data/feed.js` is machine-owned. Bump `DATA_UPDATED` (YYYY-MM-DD) whenever entries change — it is shown in the hero eyebrow. Field-by-field rules and vendor URLs are in `data/GUIDE.md`.

The entries in the file are **real concerts** collected from public sources on 2026-08-29; each carries a `source` URL rendered at the bottom of its card. Never add or edit a concert from memory — dates, prices, venues, and ticket-open times must come from the user or from a source you actually fetched, and the `source` field must point at it. When a fact isn't in the source, write "예매처 공지 참고" rather than guessing. Tokyo Dome entries come from the venue's own schedule page, which is the most authoritative source available for Japan.
