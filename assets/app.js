/* ON STAGE — 프론트 로직 (외부 라이브러리 없음) */

const CATEGORIES = [
  { key: "all",      label: "전체" },
  { key: "visit",    label: "내한 공연" },
  { key: "japan",    label: "일본" },
  { key: "asia",     label: "아시아" },
  { key: "domestic", label: "국내" },
  { key: "soon",     label: "티켓 오픈 임박" }   // 카테고리가 아닌 가상 필터(14일 이내 오픈)
];

/* 카드 상단 아트 패널 팔레트 — id 해시로 결정되어 항상 같은 공연은 같은 색 */
const ART = [
  { bg: "#1e5138,#0c2b1d", orb: "216,255,62",  x: "74%", y: "22%" },
  { bg: "#7e1236,#48091f", orb: "255,194,58",  x: "34%", y: "24%" },
  { bg: "#6e2412,#371107", orb: "255,106,61",  x: "42%", y: "30%" },
  { bg: "#232a6e,#121844", orb: "185,200,255", x: "68%", y: "26%" },
  { bg: "#2a2a29,#0e0e0d", orb: "255,255,255", x: "52%", y: "18%" },
  { bg: "#0e4a4a,#052528", orb: "216,255,62",  x: "62%", y: "26%" },
  { bg: "#4a1450,#250a2c", orb: "255,138,208", x: "66%", y: "22%" },
  { bg: "#10375e,#061c35", orb: "127,227,255", x: "38%", y: "28%" }
];

const COUNTRY_CODE = {
  "대한민국": "KR", "일본": "JP", "대만": "TW", "홍콩": "HK", "싱가포르": "SG",
  "태국": "TH", "중국": "CN", "필리핀": "PH", "인도네시아": "ID",
  "말레이시아": "MY", "베트남": "VN", "마카오": "MO"
};

/* 도시 → 취항 공항. 여기 없는 도시는 항공권 블록이 생성되지 않는다. */
const HOME_AIRPORT = "ICN";
const AIRPORT = {
  "도쿄": "HND", "요코하마": "HND", "사이타마": "HND", "지바": "NRT",
  "오사카": "KIX", "고베": "KIX", "교토": "KIX", "나고야": "NGO",
  "후쿠오카": "FUK", "삿포로": "CTS", "오키나와": "OKA", "센다이": "SDJ", "히로시마": "HIJ",
  "타이베이": "TPE", "가오슝": "KHH", "타이중": "RMQ",
  "홍콩": "HKG", "마카오": "MFM", "싱가포르": "SIN",
  "방콕": "BKK", "치앙마이": "CNX", "마닐라": "MNL", "자카르타": "CGK",
  "쿠알라룸푸르": "KUL", "호치민": "SGN", "하노이": "HAN",
  "상하이": "PVG", "베이징": "PEK", "타이페이": "TPE"
};

const DAY = ["일", "월", "화", "수", "목", "금", "토"];
const DAY_EN = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
const MS_DAY = 86400000;

const state = { cat: "all", q: "", sort: "open", hidePast: true };

/* ── 수동 데이터(concerts.js) + 자동 수집 병합 ──────────
   자동 수집분은 두 곳에서 온다.
     1) data/feed.js  — 저장소에 들어 있는 예비 데이터 (오프라인에서도 동작)
     2) Cloudflare Worker /feed.json — 매시 갱신되는 최신 데이터 (있으면 이쪽 우선)
   같은 공연이 겹치면 손으로 쓴 concerts.js 가 언제나 이긴다. */
let FEED_LIST = typeof FEED !== "undefined" ? FEED : [];
let FEED_AT = typeof FEED_UPDATED !== "undefined" ? FEED_UPDATED : null;
let FEED_LIVE = false;

function mergeEvents(feed) {
  const norm = s => String(s).toLowerCase().replace(/[\s.\-_'"()\[\]]/g, "");
  /* 아티스트 표기가 달라도(후지이 카제 / Fujii Kaze) 같은 공연장·같은 날이면 같은 공연 */
  const keys = c => [`a:${norm(c.artist)}|${c.dates[0]}`, `v:${norm(c.venue)}|${c.dates[0]}`];
  const ids = new Set(CONCERTS.map(c => c.id));
  const seen = new Set(CONCERTS.flatMap(keys));
  const valid = feed.filter(c => c && c.dates?.length && c.vendor?.url);

  /* 중복으로 가려진 자동 항목에 포스터가 있으면 수동 항목이 물려받는다.
     손으로 쓴 공연이 이미지 없이 남는 걸 막는다. */
  const byKey = new Map();
  for (const c of valid) for (const k of keys(c)) if (!byKey.has(k)) byKey.set(k, c);
  const manual = CONCERTS.map(c => {
    if (c.images?.length) return c;
    const donor = keys(c).map(k => byKey.get(k)).find(x => x?.images?.length);
    return donor ? { ...c, images: donor.images } : c;
  });

  return [...manual, ...valid.filter(c => !ids.has(c.id) && !keys(c).some(k => seen.has(k)))];
}
let EVENTS = mergeEvents(FEED_LIST);

/* ── 날짜 유틸 ───────────────────────────────── */
const startOfToday = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
const d2 = n => String(n).padStart(2, "0");
const iso = d => `${d.getFullYear()}-${d2(d.getMonth() + 1)}-${d2(d.getDate())}`;
function addDays(isoStr, n) {
  const d = new Date(isoStr + "T00:00:00");
  d.setDate(d.getDate() + n);
  return iso(d);
}

function fmtDate(s) {
  const d = new Date(s + "T00:00:00");
  return `${d.getFullYear()}. ${d2(d.getMonth() + 1)}. ${d2(d.getDate())}`;
}
function fmtDateRange(dates, period) {
  if (!dates || !dates.length) return "-";
  const first = fmtDate(dates[0]);
  if (dates.length === 1) return first;
  const last = new Date(dates[dates.length - 1] + "T00:00:00");
  const tail = `${d2(last.getMonth() + 1)}. ${d2(last.getDate())}`;
  /* period 는 '기간만 아는' 공연 — 회차 수를 모르므로 표시하지 않는다 */
  return period ? `${first} – ${tail}` : `${first}–${d2(last.getDate())} (${dates.length}회차)`;
}
const mmdd = s => { const d = new Date(s + "T00:00:00"); return `${d2(d.getMonth() + 1)}.${d2(d.getDate())}`; };

/** 티켓 오픈 시각을 보는 사람의 로컬 시간으로 표시 (한국에서 본다는 전제) */
function fmtOpen(s) {
  if (!s) return "미정";
  const d = new Date(s);
  return `${d.getFullYear()}.${d2(d.getMonth() + 1)}.${d2(d.getDate())}(${DAY[d.getDay()]}) ${d2(d.getHours())}:${d2(d.getMinutes())}`;
}
function daysToOpen(c) {
  if (!c.ticketOpen) return null;
  const open = new Date(c.ticketOpen); open.setHours(0, 0, 0, 0);
  return Math.round((open - startOfToday()) / MS_DAY);
}
/** 아직 남아 있는 가장 이른 공연일. 이미 시작된 다일 공연이면 오늘 이후의 회차를 가리킨다. */
function nextDate(c) {
  const t = startOfToday();
  return c.dates.find(d => new Date(d + "T00:00:00") >= t) || c.dates[c.dates.length - 1];
}
function daysToShow(c) {
  return Math.round((new Date(nextDate(c) + "T00:00:00") - startOfToday()) / MS_DAY);
}
function isPast(c) { return new Date(c.dates[c.dates.length - 1] + "T23:59:59") < new Date(); }

/** 데이터의 ticketStatus(수동 오버라이드)가 우선, 없으면 날짜로 계산 */
function statusOf(c) {
  if (isPast(c)) return { badge: "공연 종료", tone: "done", phase: "past" };
  if (c.ticketStatus === "매진") return { badge: "매진", tone: "done", phase: "soldout" };
  if (c.ticketStatus === "종료") return { badge: "예매 마감", tone: "done", phase: "closed" };
  if (c.ticketStatus === "판매중") return { badge: "예매 진행 중", tone: "", phase: "onsale" };
  const d = daysToOpen(c);
  if (d === null) return { badge: "오픈일 미정", tone: "done", phase: "tbd" };
  if (d > 0) {
    const o = new Date(c.ticketOpen);
    return { badge: `${d2(o.getMonth() + 1)}.${d2(o.getDate())} 오픈`, tone: d <= 7 ? "hot" : "", phase: "upcoming", d };
  }
  if (d === 0) return { badge: "오늘 오픈", tone: "hot", phase: "today", d: 0 };
  return { badge: "예매 진행 중", tone: "", phase: "onsale" };
}

/* ── 항공권 (유료 API 없이 검색 딥링크만 생성) ── */
/** 공연 전날 출발 / 마지막 공연 다음 날 귀국을 기본 일정으로 잡는다 */
function flightPlan(c) {
  if (c.country === "대한민국") return null;
  const dest = AIRPORT[c.city];
  if (!dest) return null;
  const out = addDays(c.dates[0], -1);
  const back = addDays(c.dates[c.dates.length - 1], 1);
  const yy = s => s.slice(2).replace(/-/g, "");        // 261016
  const ymd = s => s.replace(/-/g, "");                // 20261016
  return {
    dest, out, back,
    links: [
      { t: "스카이스캐너", u: `https://www.skyscanner.co.kr/transport/flights/${HOME_AIRPORT.toLowerCase()}/${dest.toLowerCase()}/${yy(out)}/${yy(back)}/` },
      { t: "네이버 항공권", u: `https://flight.naver.com/flights/international/${HOME_AIRPORT}-${dest}-${ymd(out)}/${dest}-${HOME_AIRPORT}-${ymd(back)}?adult=1&fareType=Y` },
      { t: "구글 항공", u: `https://www.google.com/travel/flights?q=${encodeURIComponent(`Flights from ${HOME_AIRPORT} to ${dest} on ${out} returning ${back}`)}`}
    ]
  };
}

/* ── 숙소 (지역별 검색 딥링크) ── */
function stayAreas(c) {
  const areas = (c.stay && c.stay.areas) || [{ name: c.venue, note: "공연장 기준" }];
  return areas.map(a => {
    const local = (a.name.match(/\(([^)]+)\)/) || [])[1] || a.name;   // 괄호 안 현지 표기를 우선 사용
    const q = encodeURIComponent(`${local} ${c.city}`);
    return {
      name: a.name, note: a.note,
      links: [
        { t: "부킹닷컴", u: `https://www.booking.com/searchresults.ko.html?ss=${q}` },
        { t: "에어비앤비", u: `https://www.airbnb.co.kr/s/${q}/homes` }
      ]
    };
  });
}
const mapLink = c => `https://www.google.com/maps/search/${encodeURIComponent(c.mapQuery || `${c.venue} ${c.city}`)}`;

/* ── 필터 / 정렬 ─────────────────────────────── */
const isSoon = c => { const d = daysToOpen(c); return !isPast(c) && d !== null && d >= 0 && d <= 14; };

function matchCat(c, cat) {
  if (cat === "all") return true;
  if (cat === "soon") return isSoon(c);
  return c.category === cat;
}

function visibleList() {
  let list = EVENTS.slice();
  if (state.hidePast) list = list.filter(c => !isPast(c));
  list = list.filter(c => matchCat(c, state.cat));
  if (state.q.trim()) {
    const q = state.q.trim().toLowerCase();
    list = list.filter(c =>
      [c.artist, c.tour, c.city, c.venue, c.country, c.vendor.name, (c.tags || []).join(" ")]
        .join(" ").toLowerCase().includes(q));
  }
  const rank = c => {                       // 오픈예정 → 예매중 → 미정 → 종료
    const d = daysToOpen(c);
    if (isPast(c)) return 9e9;
    if (d === null) return 5e5 + daysToShow(c);
    return d >= 0 ? d : 1e5 + daysToShow(c);
  };
  const sorters = {
    open:   (a, b) => rank(a) - rank(b),
    date:   (a, b) => a.dates[0].localeCompare(b.dates[0]),
    artist: (a, b) => a.artist.localeCompare(b.artist, "ko")
  };
  return list.sort(sorters[state.sort]);
}

/* ── 렌더링 ─────────────────────────────────── */
function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, m =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}
function artOf(id) {
  let h = 0;
  for (const ch of String(id)) h = (h * 31 + ch.codePointAt(0)) >>> 0;
  const a = ART[h % ART.length];
  const [c1, c2] = a.bg.split(",");
  return `background:radial-gradient(circle at ${a.x} ${a.y}, rgba(${a.orb},.92) 0%, rgba(${a.orb},.45) 9%, rgba(${a.orb},0) 26%), linear-gradient(155deg, ${c1}, ${c2})`;
}
const code = c => COUNTRY_CODE[c.country] || c.country.slice(0, 2).toUpperCase();
const linkRow = arr => `<div class="links">${arr.map(l =>
  `<a href="${esc(l.u)}" target="_blank" rel="noopener">${esc(l.t)}</a>`).join("")}</div>`;

function cardHTML(c) {
  const st = statusOf(c);
  const flight = flightPlan(c);
  const areas = stayAreas(c);

  const shots = (c.images || []).filter(u => /^https:\/\//.test(u)).slice(0, 2);
  const poster = shots[0];
  /* 포스터 로드에 실패하면 has-img 를 떼어 생성 그라디언트로 되돌린다 */
  const art = poster ? `
      <img class="ev-blur" src="${esc(poster)}" alt="" aria-hidden="true" loading="lazy"
           onerror="this.remove()">
      <img class="ev-poster" src="${esc(poster)}" alt="${esc(c.artist)} 공연 이미지" loading="lazy" decoding="async"
           onload="this.parentElement.classList.toggle('wide', this.naturalWidth > this.naturalHeight)"
           onerror="this.parentElement.classList.remove('has-img');this.remove()">` : "";


  const openLine =
    st.phase === "onsale"  ? `<span class="on">예매 진행 중</span> · ${esc(c.price || "가격 미정")}`
    : st.phase === "upcoming" || st.phase === "today"
      ? `티켓오픈 <b>${esc(fmtOpen(c.ticketOpen))}</b>`
      : `${esc(st.badge)} · ${esc(c.price || "가격 미정")}`;

  /* 상세 */
  const det = [];
  if (c.price) det.push(`<p><b>가격</b> ${esc(c.price)}</p>`);
  if (c.doorsNote) det.push(`<p><b>시간</b> ${esc(c.doorsNote)}</p>`);
  if (c.goods && c.goods.note) det.push(`<p><b>굿즈</b> ${esc(c.goods.note)}</p>`);
  if (c.tips) det.push(`<p><b>팁</b> ${esc(c.tips)}</p>`);

  if (flight) det.push(`
    <div class="det-blk">
      <p class="det-h">✈ 항공 · ${HOME_AIRPORT} → ${esc(flight.dest)}</p>
      <p class="det-note">${esc(mmdd(flight.out))} 출발 – ${esc(mmdd(flight.back))} 귀국 기준 (공연 전날 출발 / 마지막 공연 다음 날 귀국)</p>
      ${linkRow(flight.links)}
    </div>`);

  if (shots.length > 1) det.push(`
    <div class="det-blk">
      <p class="det-h">🖼 포스터</p>
      <div class="shots">${shots.map((u, i) =>
        `<img src="${esc(u)}" alt="${esc(c.artist)} 이미지 ${i + 1}" loading="lazy" onerror="this.remove()">`).join("")}</div>
    </div>`);

  det.push(`
    <div class="det-blk">
      <p class="det-h">🏨 숙소</p>
      <ul class="stay">
        ${areas.map(a => `<li>
          <span class="s-name">${esc(a.name)}</span>
          <span class="s-note">${esc(a.note)}</span>
          ${linkRow(a.links)}
        </li>`).join("")}
      </ul>
    </div>`);

  const more = [
    ...(c.otherVendors || []).map(v => ({ t: `${v.name} ↗`, u: v.url })),
    ...(c.goods && c.goods.url ? [{ t: "굿즈 스토어 ↗", u: c.goods.url }] : []),
    { t: "공연장 지도", u: mapLink(c) }
  ];
  det.push(`<div class="det-blk"><p class="det-h">🔗 예매처 · 지도</p>${linkRow(more)}</div>`);
  if (c.source) det.push(`<p class="det-src">출처 <a href="${esc(c.source)}" target="_blank" rel="noopener">${esc(new URL(c.source).hostname)} ↗</a></p>`);

  const buyable = st.phase === "onsale" || st.phase === "soldout";
  const trip = [];
  if (flight) trip.push(`✈ ${HOME_AIRPORT} → ${esc(flight.dest)}`);
  if (areas[0]) trip.push(`🏨 ${esc(areas[0].name)} ${esc(areas[0].note)}`);

  return `
  <article class="ev" data-url="${esc(c.vendor.url)}">
    <div class="ev-art${poster ? " has-img" : ""}" style="${artOf(c.id)}">
      ${art}
      <span class="ev-badge ${st.tone}">${esc(st.badge)}</span>
      <span class="ev-tour">${esc(c.tour)}</span>
      <h3 class="ev-name">${esc(c.artist)}</h3>
    </div>
    <div class="ev-body">
      <p class="ev-title">${esc(c.artist)} · ${esc(c.city)}</p>
      <p class="ev-sub">${esc(fmtDateRange(c.dates, c.period))} · ${esc(c.venue)}</p>
      <p class="ev-open">${openLine}</p>
      <div class="ev-foot">
        <span>${esc(code(c))}</span><span class="sep">·</span>
        <span>${esc(mmdd(c.dates[0]))}</span><span class="sep">·</span>
        <span>${esc(c.vendor.name)}</span>
        ${c.auto ? `<span class="sep">·</span><span class="auto">AUTO ${esc(c.sourceName || "")}</span>` : ""}
      </div>
      ${trip.length ? `<p class="ev-trip">${trip.map(t => `<span>${t}</span>`).join("")}</p>` : ""}
      <details class="ev-more">
        <summary>항공 · 숙소 · 굿즈 상세</summary>
        <div class="ev-det">${det.join("")}</div>
      </details>
      <a class="ev-cta${buyable ? "" : " soft"}" href="${esc(c.vendor.url)}" target="_blank" rel="noopener">
        ${buyable ? "예매하러 가기 →" : "예매처 바로가기 →"}
      </a>
    </div>
  </article>`;
}

function renderChips() {
  const base = state.hidePast ? EVENTS.filter(c => !isPast(c)) : EVENTS;
  document.getElementById("tabs").innerHTML = CATEGORIES.map(k => {
    const n = base.filter(c => matchCat(c, k.key)).length;
    return `<button class="chip" role="tab" data-cat="${k.key}" aria-selected="${state.cat === k.key}">
      ${k.label}<span class="n">${n}</span></button>`;
  }).join("");
}

function renderUpNext() {
  const box = document.getElementById("upnext");
  const next = EVENTS.filter(c => !isPast(c))
    .sort((a, b) => nextDate(a).localeCompare(nextDate(b)))[0];
  if (!next) { box.hidden = true; return; }
  const st = statusOf(next);
  const d = new Date(nextDate(next) + "T00:00:00");
  const f = flightPlan(next);
  box.hidden = false;
  box.innerHTML = `
    <div class="un-date">
      <span class="k">UP<br>NEXT</span>
      <span class="d">${d2(d.getMonth() + 1)}.${d2(d.getDate())}</span>
      <span class="w">${DAY_EN[d.getDay()]}</span>
    </div>
    <div class="un-body">
      <span class="ev-badge ${st.tone}" style="position:static;align-self:flex-start">${esc(st.badge)}</span>
      <h3>${esc(next.artist)} · ${esc(next.city)}</h3>
      <p>${esc(next.tour)} · ${esc(next.venue)}${f ? ` · ✈ ${HOME_AIRPORT} → ${esc(f.dest)}` : ""}</p>
    </div>
    <div class="un-cta">
      <p>모든 공연 카드는<br>공식 예매처로 연결됩니다.</p>
      <a href="${esc(next.vendor.url)}" target="_blank" rel="noopener">공연 보러가기 →</a>
    </div>`;
}

function renderSummary() {
  const live = EVENTS.filter(c => !isPast(c));
  const set = (id, v) => document.getElementById(id).textContent = v;
  set("sum-today", live.filter(c => daysToOpen(c) === 0).length);
  set("sum-week", live.filter(c => { const d = daysToOpen(c); return d !== null && d > 0 && d <= 7; }).length);
  set("sum-onsale", live.filter(c => statusOf(c).phase === "onsale").length);
  set("sum-total", live.filter(c => daysToShow(c) <= 30).length);   // 30일 내 공연

  /* 오픈 임박 건이 있으면 그것을, 없으면 가장 가까운 공연 카운트다운을 보여준다 */
  /* 같은 아티스트가 같은 시각에 여러 회차를 열면 목록에서는 한 줄로 묶는다 */
  const opensSeen = new Set();
  const opens = live.filter(isSoon)
    .sort((a, b) => daysToOpen(a) - daysToOpen(b) || a.dates[0].localeCompare(b.dates[0]))
    .filter(c => {
      const k = `${c.artist}|${c.ticketOpen}`;
      return opensSeen.has(k) ? false : opensSeen.add(k);
    })
    .slice(0, 6);
  const openMode = opens.length > 0;
  const rows = openMode
    ? opens.map(c => {
        const n = live.filter(x => x.artist === c.artist && x.ticketOpen === c.ticketOpen).length;
        return { c, d: daysToOpen(c),
          text: `${fmtOpen(c.ticketOpen)} 오픈 · ${c.vendor.name} · ${c.city} ${c.venue}${n > 1 ? ` 외 ${n - 1}회차` : ""}` };
      })
    : live.sort((a, b) => nextDate(a).localeCompare(nextDate(b))).slice(0, 6)
        .map(c => ({ c, d: daysToShow(c), text: `${fmtDate(nextDate(c))} · ${c.city} ${c.venue} · ${c.vendor.name}` }));

  const sec = document.getElementById("soon");
  if (!rows.length) { sec.hidden = true; return; }
  sec.hidden = false;
  sec.querySelector(".sec-head h2").textContent = openMode ? "티켓 오픈 임박" : "공연 카운트다운";
  sec.querySelector(".sec-head .mono-label").textContent = openMode ? "NEXT 14 DAYS" : "NEXT UP";
  document.getElementById("briefing-list").innerHTML = rows.map(({ c, d, text }) => `
    <li data-url="${esc(c.vendor.url)}">
      <span class="soon-d${d === 0 ? " today" : ""}">${d === 0 ? "TODAY" : "D-" + d}</span>
      <span class="soon-name">${esc(c.artist)}</span>
      <span class="soon-meta">${esc(text)}</span>
      <span class="soon-go">${esc(c.vendor.name)} ↗</span>
    </li>`).join("");
}

function render() {
  renderChips();
  const list = visibleList();
  document.getElementById("grid").innerHTML = list.map(cardHTML).join("");
  document.getElementById("empty").hidden = list.length > 0;
  document.getElementById("result-count").textContent = `${list.length} EVENTS`;
}

/* ── 이벤트 ─────────────────────────────────── */
document.getElementById("tabs").addEventListener("click", e => {
  const b = e.target.closest(".chip");
  if (b) { state.cat = b.dataset.cat; render(); }
});
document.getElementById("search").addEventListener("input", e => { state.q = e.target.value; render(); });
document.getElementById("sort").addEventListener("change", e => { state.sort = e.target.value; render(); });
document.getElementById("hide-past").addEventListener("change", e => { state.hidePast = e.target.checked; render(); });

/* 카드·임박 목록 클릭 → 예매처로 이동 (내부 링크/토글 클릭은 제외) */
function openVendor(e) {
  if (e.target.closest("a, button, summary")) return;
  const el = e.target.closest("[data-url]");
  if (el) window.open(el.dataset.url, "_blank", "noopener");
}
document.getElementById("grid").addEventListener("click", openVendor);
document.getElementById("briefing-list").addEventListener("click", openVendor);

function paintFeedLabel() {
  const el = document.getElementById("feed-updated");
  if (!el) return;
  if (!FEED_LIST.length || !FEED_AT) { el.textContent = ""; return; }
  const d = new Date(FEED_AT);
  el.textContent = `${FEED_LIVE ? "LIVE" : "AUTO"} ${d2(d.getMonth() + 1)}.${d2(d.getDate())} `
    + `${d2(d.getHours())}:${d2(d.getMinutes())} 수집 ${FEED_LIST.length}건`;
}

function repaint() {
  EVENTS = mergeEvents(FEED_LIST);
  paintFeedLabel();
  renderUpNext();
  renderSummary();
  render();
}

/* Cloudflare Worker 에서 최신 수집분을 받아온다. 실패하면 조용히 예비 데이터를 쓴다. */
async function refreshLiveFeed() {
  const base = (typeof FEED_ENDPOINT !== "undefined" ? FEED_ENDPOINT : "").replace(/\/+$/, "");
  if (!base) return;
  try {
    const res = await fetch(`${base}/feed.json`, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (!Array.isArray(data.events) || !data.events.length) return;
    FEED_LIST = data.events;
    FEED_AT = data.updated || FEED_AT;
    FEED_LIVE = true;
    repaint();
  } catch (e) {
    console.warn("실시간 피드를 못 받아 예비 데이터를 사용합니다:", e.message);
  }
}

/* ── 초기화 ─────────────────────────────────── */
(function init() {
  document.getElementById("data-updated").textContent = DATA_UPDATED.replace(/-/g, ".");
  paintFeedLabel();
  renderUpNext();
  renderSummary();
  render();
  refreshLiveFeed();
})();
