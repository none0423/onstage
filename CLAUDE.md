# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

**ON STAGE** — a Korean-language static dashboard summarizing concert ticketing info (내한 / 일본 / 아시아 / 국내) for ~10 private users. All UI text, data, and docs are in Korean — keep it that way.

## Commands

There is no package manager, no build step, no test framework, and no dependencies.

```bash
open index.html        # run the site (works over file://, no server needed)
node tools/check.mjs   # the only check — validates data/concerts.js, exits 1 on error
```

`tools/check.mjs` is what CI runs (`.github/workflows/deploy.yml`) before deploying to GitHub Pages. Run it after any edit to `data/concerts.js`.

## Hard constraints

- **Zero recurring cost** is a product requirement, not an accident. No backend, no database, no paid APIs. Lodging/map/flight info is produced as *search deep links*, never fetched.
- **No scraping of ticket vendors.** Interpark, e+, ticket pia etc. block bots and forbid automated collection; working around that requires paid proxies and breaks the cost constraint. Data is curated by hand. This decision is documented in README.md — don't quietly reverse it.
- **Must keep working over `file://`.** That is why `data/concerts.js` declares plain globals (`CONCERTS`, `DATA_UPDATED`) loaded via `<script>` instead of JSON + `fetch`, and why there are no ES modules in `assets/`. Converting to modules or `fetch` breaks double-click-to-open. The Pretendard webfont from jsDelivr is the only external resource; it degrades to the system Korean stack offline, so never make layout depend on it.

## Architecture

Three files matter: `index.html` (static shell with fixed element IDs), `assets/app.js` (all logic), `data/concerts.js` (all content). Page order: nav → hero → stats → search/chips → UP NEXT → 오픈 임박 → card grid → 원정 가이드 → footer.

**Rendering** is a full re-render: `render()` rebuilds `#grid` and `#tabs` from `innerHTML`, driven by the module-level `state` object (`cat`, `q`, `sort`, `hidePast`). Every event handler mutates `state` then calls `render()`. `renderUpNext()` and `renderSummary()` run once at init. All interpolated data goes through `esc()`.

**Authored vs. derived data** — this split is the main thing to understand before editing `data/concerts.js`:

| Derived at render time (never store) | Source |
|---|---|
| Status badge text/tone, "공연 종료" | `statusOf()` / `daysToOpen()` / `isPast()` from `dates` + `ticketOpen` + today |
| Card art panel gradient | `artOf(id)` — hash of `id` picks from the `ART` palette, so **changing an id changes the card's color** |
| Country code in the mono footer (`JP`, `SG`) | `COUNTRY_CODE` map in app.js; add an entry when adding a country |
| Flight search links + the suggested trip dates | `flightPlan()` — skipped for `country: "대한민국"` and for any `city` missing from the `AIRPORT` map; departs the day before the first show and returns the day after the last |
| Lodging search links per area | `stayAreas()` from `stay.areas`, preferring the parenthesised local-language name (`스이도바시 (水道橋)` → searches `水道橋`) |
| Venue map link | `mapLink()` from `mapQuery` (falls back to `venue` + `city`) |
| Chip counts, stat tiles, UP NEXT, 오픈 임박 | recomputed from `CONCERTS` |

`ticketStatus` in the data is only a **manual override** for states that can't be inferred from dates (`판매중`, `매진`, `종료`); `statusOf()` otherwise ignores it and computes from `ticketOpen`. `판매중` exists because most real entries are already on sale with no recorded open time — without it they would render as "오픈일 미정". `ticketOpen` must include a UTC offset (`+09:00`) — `check.mjs` enforces this — and is rendered in the viewer's local timezone, which assumes the viewer is in KST.

**Categories and chips.** The `CATEGORIES` array in `assets/app.js` drives the chip row. Four keys (`japan` | `visit` | `asia` | `domestic`) are real `category` values in the data; `soon` is a **pseudo-category** — a filter for "opens within 14 days", handled by `matchCat()`/`isSoon()` and deliberately absent from the `CATS` whitelist in `tools/check.mjs`. Adding a real category means touching `CATEGORIES` *and* `CATS`; adding another pseudo-filter means touching `CATEGORIES` and `matchCat()` only.

**Card click → ticket vendor.** `openVendor()` is delegated on both `#grid` and `#briefing-list`, keyed off `data-url`, and deliberately ignores clicks on `a`, `button`, and `summary` so the inner links (other vendors, lodging, the `<details>` toggle, the CTA) still work. `vendor.url` should be the specific event page when known; the vendor homepage is the fallback.

**The 오픈 임박 section falls back.** `renderSummary()` shows imminent *ticket opens* when any exist, and otherwise switches its own heading and rows to a *concert* countdown. Real data usually has no future open times, so the fallback is the normal path — don't "fix" the empty state by deleting the section.

**Design.** Modeled on a reference layout the user supplied: warm paper background, heavy Pretendard headlines with a pink highlight, lime accents, monospace micro-labels, and flush bordered grids (containers carry `border-top`/`border-left`, children carry `border-right`/`border-bottom` — this is what makes an incomplete last row look right). All colors and both font stacks are tokens in `:root` in `assets/styles.css`; don't hardcode hex values in `app.js` except inside the `ART` palette.

## Editing data

`data/concerts.js` is the only file that changes during normal operation. Bump `DATA_UPDATED` (YYYY-MM-DD) whenever entries change — it is shown in the hero eyebrow. Field-by-field rules and vendor URLs are in `data/GUIDE.md`.

The entries in the file are **real concerts** collected from public sources on 2026-08-29; each carries a `source` URL rendered at the bottom of its card. Never add or edit a concert from memory — dates, prices, venues, and ticket-open times must come from the user or from a source you actually fetched, and the `source` field must point at it. When a fact isn't in the source, write "예매처 공지 참고" rather than guessing. Tokyo Dome entries come from the venue's own schedule page, which is the most authoritative source available for Japan.
