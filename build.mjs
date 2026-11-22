// Builds index.html (EN) and es/index.html (ES) from i18n/*.json.
// Run: node build.mjs   — no dependencies.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const BASE = 'https://sunset-blvd-405.pages.dev/';
const WA = '50661448011';
const AIRBNB = 'https://www.airbnb.com/rooms/1527613334489602829';
const GTAG = 'G-701SCTSRCR';
const PRICE = 365000;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Read JPEG pixel size from the SOF marker, so every <img> gets width/height (no layout shift).
function jpegSize(file) {
  const b = readFileSync(file);
  let i = 2;
  while (i < b.length) {
    if (b[i] !== 0xff) { i++; continue; }
    const m = b[i + 1];
    const len = b.readUInt16BE(i + 2);
    if (m >= 0xc0 && m <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(m)) {
      return { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7) };
    }
    i += 2 + len;
  }
  throw new Error('no size for ' + file);
}

// Page order of photos. The lightbox walks them in this order.
const P = {
  hero: 'jaco-condo-ocean-sunset-palm-trees-view',
  view: ['jaco-ocean-view-condo-living-room-sunset'],
  viewBand: 'jaco-condo-living-room-ocean-view-day',
  viewPair: ['jaco-condo-living-room-sofa-sunset', 'jaco-condo-dining-island-sunset-view'],
  home: ['jaco-condo-kitchen-island-ocean-view', 'jaco-condo-quartz-island-kitchen', 'jaco-condo-kitchen-tile-backsplash', 'jaco-condo-kitchen-washer-dryer', 'jaco-condo-living-room-sofa-artwork'],
  rooms: ['jaco-condo-master-bedroom-king-bed-ocean-view', 'jaco-condo-second-bedroom-twin-beds', 'jaco-condo-bathroom-walk-in-shower'],
  roomsExtra: ['jaco-condo-master-bedroom-teal-wall', 'jaco-condo-master-bedroom-evening-view', 'jaco-condo-second-bathroom'],
  terraceBand: 'jaco-condo-private-balcony-ocean-sunset',
  terrace: ['jaco-condo-balcony-dining-ocean-view', 'jaco-condo-balcony-glass-railing-jungle', 'jaco-condo-balcony-table-living-room', 'jaco-condo-balcony-living-room-dusk'],
  building: ['jaco-condo-pool-stone-waterfall-wall', 'jaco-condo-swimming-pool-jungle', 'jaco-condo-covered-pool-lounge', 'jaco-condo-covered-lounge-garden-view', 'jaco-condo-covered-parking', 'jaco-condo-building-walkway-ocean-air'],
  rooftopBand: 'jaco-condo-rooftop-terrace-ocean-sunset',
  rooftop: ['jaco-condo-rooftop-lounge-chairs-sunset', 'jaco-condo-rooftop-deck-bay-view', 'jaco-condo-rooftop-chairs-ocean-view-day', 'jaco-condo-rooftop-view-jungle-sunset'],
  location: 'jaco-condo-view-jungle-to-ocean',
};
const ORDER = [P.hero, ...P.view, P.viewBand, ...P.viewPair, ...P.home, ...P.rooms, ...P.roomsExtra, P.terraceBand, ...P.terrace, ...P.building, P.rooftopBand, ...P.rooftop, P.location];
if (new Set(ORDER).size !== ORDER.length) throw new Error('duplicate photo in ORDER');
const SIZE = Object.fromEntries(ORDER.map((n) => [n, jpegSize(`img/full/${n}.jpg`)]));

function render(t) {
  const pre = t.path ? '../' : '';
  const other = t.lang === 'en' ? 'es' : 'en';
  const url = BASE + t.path;
  const wa = `https://wa.me/${WA}?text=${encodeURIComponent(t.ui.waText)}`;
  const alt = (n) => {
    if (!t.alt[n]) throw new Error(`missing alt for ${n} in ${t.lang}`);
    return t.alt[n];
  };
  const idx = (n) => ORDER.indexOf(n);
  const src = (n) => `${pre}img/md/${n}.jpg`;
  const srcset = (n) => `${pre}img/md/${n}.jpg 1100w, ${pre}img/full/${n}.jpg 2400w`;

  // A clickable photo. `sizes` tells the browser how wide it renders.
  const ph = (n, cls = '', sizes = '(min-width: 60em) 50vw, 100vw', eager = false) => {
    const { w, h } = SIZE[n];
    return `<button type="button" class="ph ${cls}" data-i="${idx(n)}" aria-label="${esc(t.ui.openPhoto)}: ${esc(alt(n))}"><img src="${src(n)}" srcset="${srcset(n)}" sizes="${sizes}" width="${w}" height="${h}" alt="${esc(alt(n))}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></button>`;
  };
  const head = (s, cls = '') => `<p class="tag ${cls}">${esc(s.tag)}</p><h2>${esc(s.h2)}</h2>`;

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: t.seo.ldName,
    description: t.seo.ldDescription,
    url,
    inLanguage: t.lang,
    image: [P.hero, P.rooftopBand, P.building[0]].map((n) => `${BASE}img/full/${n}.jpg`),
    offers: { '@type': 'Offer', price: PRICE, priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
    about: {
      '@type': 'Apartment',
      name: 'Sunset Boulevard, Unit 405',
      numberOfRooms: 2,
      numberOfBedrooms: 2,
      numberOfBathroomsTotal: 2,
      occupancy: { '@type': 'QuantitativeValue', maxValue: 4 },
      floorLevel: '4',
      floorSize: { '@type': 'QuantitativeValue', value: 74, unitCode: 'MTK' },
      amenityFeature: t.seo.ldAmenities.map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
      address: { '@type': 'PostalAddress', addressLocality: 'Jacó', addressRegion: 'Puntarenas', addressCountry: 'CR' },
    },
  };

  const lightboxData = ORDER.map((n) => ({ s: `${pre}img/full/${n}.jpg`, m: `${pre}img/md/${n}.jpg`, a: alt(n) }));

  return `<!DOCTYPE html>
<html lang="${t.lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(t.seo.title)}</title>
<meta name="description" content="${esc(t.seo.description)}">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="en" href="${BASE}">
<link rel="alternate" hreflang="es" href="${BASE}es/">
<link rel="alternate" hreflang="x-default" href="${BASE}">
<meta property="og:type" content="website">
<meta property="og:locale" content="${t.locale}">
<meta property="og:locale:alternate" content="${t.lang === 'en' ? 'es_CR' : 'en_US'}">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(t.seo.ogTitle)}">
<meta property="og:description" content="${esc(t.seo.ogDescription)}">
<meta property="og:image" content="${BASE}img/full/${P.hero}.jpg">
<meta property="og:image:width" content="${SIZE[P.hero].w}">
<meta property="og:image:height" content="${SIZE[P.hero].h}">
<meta property="og:image:alt" content="${esc(t.seo.ogImageAlt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#121a1f">
<link rel="icon" href="${pre}favicon.svg" type="image/svg+xml">
<link rel="preload" as="image" href="${src(P.hero)}" imagesrcset="${srcset(P.hero)}" imagesizes="100vw">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=${GTAG}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GTAG}');</script>
<link rel="stylesheet" href="${pre}site.css">
</head>
<body>
<a class="skip" href="#main">${esc(t.ui.skip)}</a>

<header class="nav" id="nav">
  <a class="nav-logo" href="#top">${esc(t.nav.logo)}</a>
  <nav class="nav-links" aria-label="Main">
    <a href="#facts">${esc(t.nav.facts)}</a>
    <a href="#home">${esc(t.nav.home)}</a>
    <a href="#building">${esc(t.nav.building)}</a>
    <a href="#location">${esc(t.nav.location)}</a>
    <a href="#contact">${esc(t.nav.buying)}</a>
  </nav>
  <div class="nav-right">
    <div class="lang" role="group" aria-label="${esc(t.ui.langLabel)}">
      <a href="${t.lang === 'en' ? '#' : '../'}" hreflang="en" lang="en" class="lang-opt" ${t.lang === 'en' ? 'aria-current="true"' : `aria-label="View in English"`}>EN</a>
      <a href="${t.lang === 'es' ? '#' : 'es/'}" hreflang="es" lang="es" class="lang-opt" ${t.lang === 'es' ? 'aria-current="true"' : `aria-label="Ver en español"`}>ES</a>
      <span class="lang-thumb" aria-hidden="true"></span>
    </div>
    <a class="btn btn-sun nav-cta" href="${wa}" target="_blank" rel="noopener" aria-label="${esc(t.nav.ctaAria)} ${esc(t.ui.waAria)}">${esc(t.nav.cta)}</a>
  </div>
</header>

<main id="main">
<section class="hero" id="top">
  ${ph(P.hero, 'hero-img', '100vw', true)}
  <div class="hero-content">
    <p class="hero-tag">${esc(t.hero.tag)}</p>
    <h1>${esc(t.hero.h1)}</h1>
    <p class="hero-sub">${esc(t.hero.sub)}</p>
    <p class="hero-price"><span class="price">${esc(t.hero.price)}</span><span class="price-line">${t.hero.priceLine.map(esc).join('<span class="dot" aria-hidden="true"> · </span>')}</span></p>
    <div class="hero-ctas">
      <a class="btn btn-sun" href="${wa}" target="_blank" rel="noopener">${esc(t.hero.cta)}<span class="sr"> ${esc(t.ui.waAria)}</span></a>
      <a class="btn btn-ghost" href="#facts">${esc(t.hero.cta2)}</a>
    </div>
  </div>
  <button type="button" class="hero-all" data-i="0">${esc(t.ui.viewAll.replace('{total}', ORDER.length))}</button>
</section>

<section class="facts" id="facts">
  <div class="wrap">
    ${head(t.facts, 'on-dark')}
    <p class="lead">${esc(t.facts.intro)}</p>
    <ul class="big" role="list">
      ${t.facts.big.map(([n, l]) => `<li><span class="big-n">${esc(n)}</span><span class="big-l">${esc(l)}</span></li>`).join('\n      ')}
    </ul>
    <dl class="fact-list">
      ${t.facts.list.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('\n      ')}
    </dl>
  </div>
</section>

<section class="highlights" aria-labelledby="hl-h">
  <div class="wrap">
    <p class="tag">${esc(t.highlights.tag)}</p>
    <h2 id="hl-h">${esc(t.highlights.h2)}</h2>
    <ol class="hl" role="list">
      ${t.highlights.items.map(([h, p], i) => `<li><span class="hl-n" aria-hidden="true">0${i + 1}</span><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join('\n      ')}
    </ol>
  </div>
</section>

<section class="split" id="view">
  <div class="split-text">
    ${head(t.view)}
    <p>${esc(t.view.p1)}</p>
    <p>${esc(t.view.p2)}</p>
  </div>
  ${ph(P.view[0], 'split-img')}
</section>
<div class="band">${ph(P.viewBand, '', '100vw')}</div>
<div class="pair">${P.viewPair.map((n) => ph(n)).join('')}</div>

<section class="sec" id="home">
  <div class="wrap">
    ${head(t.home)}
    <p class="lead dark">${esc(t.home.p)}</p>
  </div>
  <div class="mosaic">
    ${P.home.map((n, i) => ph(n, i === 0 ? 'm-big' : '', i === 0 ? '(min-width: 60em) 60vw, 100vw' : '(min-width: 60em) 25vw, 50vw')).join('\n    ')}
  </div>
  <p class="caption wrap">${esc(t.home.caption)}</p>
</section>

<section class="sec sand" id="rooms">
  <div class="wrap">
    ${head(t.rooms)}
    <p class="lead dark">${esc(t.rooms.intro)}</p>
    <div class="cards">
      ${t.rooms.cards.map(([label, h, p], i) => `<article class="card">${ph(P.rooms[i], '', '(min-width: 60em) 33vw, 100vw')}<div class="card-body"><p class="card-label">${esc(label)}</p><h3>${esc(h)}</h3><p>${esc(p)}</p></div></article>`).join('\n      ')}
    </div>
    <div class="strip">${P.roomsExtra.map((n) => ph(n, '', '(min-width: 60em) 33vw, 50vw')).join('')}</div>
  </div>
</section>

<section class="full-band">
  ${ph(P.terraceBand, 'band-img', '100vw')}
  <div class="band-text">
    <p class="tag on-dark">${esc(t.terrace.tag)}</p>
    <h2>${esc(t.terrace.h2)}</h2>
    <p>${esc(t.terrace.line)}</p>
  </div>
</section>
<div class="grid4">${P.terrace.map((n) => ph(n, '', '(min-width: 60em) 25vw, 50vw')).join('')}</div>

<section class="sec dark" id="building">
  <div class="wrap">
    ${head(t.building, 'on-dark')}
    <p class="lead">${esc(t.building.p)}</p>
    <ul class="amen" role="list">
      ${t.building.amenities.map(([k, v]) => `<li><strong>${esc(k)}</strong><span>${esc(v)}</span></li>`).join('\n      ')}
    </ul>
  </div>
  <div class="mosaic mosaic-6">
    ${P.building.map((n, i) => ph(n, i === 0 ? 'm-big' : '', i === 0 ? '(min-width: 60em) 60vw, 100vw' : '(min-width: 60em) 25vw, 50vw')).join('\n    ')}
  </div>
</section>

<section class="full-band">
  ${ph(P.rooftopBand, 'band-img', '100vw')}
  <div class="band-text">
    <p class="tag on-dark">${esc(t.rooftop.tag)}</p>
    <h2>${esc(t.rooftop.h2)}</h2>
    <p>${esc(t.rooftop.line)}</p>
  </div>
</section>
<div class="grid4">${P.rooftop.map((n) => ph(n, '', '(min-width: 60em) 25vw, 50vw')).join('')}</div>

<section class="sec">
  <div class="wrap">
    ${head(t.included)}
    <p class="lead dark">${esc(t.included.intro)}</p>
    <ul class="incl" role="list">
      ${t.included.items.map(([k, v]) => `<li><strong>${esc(k)}</strong><span>${esc(v)}</span></li>`).join('\n      ')}
    </ul>
  </div>
</section>

<section class="split sand" id="location">
  <div class="split-text">
    ${head(t.location)}
    <p>${esc(t.location.p1)}</p>
    <p>${esc(t.location.p2)}</p>
    <dl class="points">
      ${t.location.points.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('\n      ')}
    </dl>
  </div>
  ${ph(P.location, 'split-img')}
</section>

<section class="sec income">
  <div class="wrap narrow">
    <div class="income-box">
      ${head(t.income)}
      <p>${esc(t.income.p)}</p>
      <p class="fixed">${esc(t.income.fixed)}</p>
      <a class="text-link" href="${AIRBNB}" target="_blank" rel="noopener">${esc(t.income.link)}<span class="sr"> ${esc(t.ui.airbnbAria)}</span> →</a>
    </div>
  </div>
</section>

<section class="cta" id="contact">
  <div class="wrap narrow">
    ${head(t.contact, 'on-dark')}
    <p>${esc(t.contact.p)}</p>
    <div class="cta-btns">
      <a class="btn btn-sun" href="${wa}" target="_blank" rel="noopener">${esc(t.contact.primary)}<span class="sr"> ${esc(t.ui.waAria)}</span></a>
      <a class="btn btn-ghost" href="${AIRBNB}" target="_blank" rel="noopener">${esc(t.contact.secondary)}<span class="sr"> ${esc(t.ui.airbnbAria)}</span></a>
    </div>
    <p class="small"><a href="${wa}" target="_blank" rel="noopener">${esc(t.contact.small)}</a></p>
  </div>
</section>
</main>

<footer class="foot">
  <p>${esc(t.footer.l1)}</p>
  <p>${esc(t.footer.l2)}</p>
  <p class="legal">${esc(t.footer.legal)}</p>
  <p><a href="${t.lang === 'en' ? 'es/' : '../'}" hreflang="${other}">${esc(t.ui.langOther)}</a> · <a href="#top">${esc(t.ui.backToTop)}</a></p>
</footer>

<dialog class="lb" id="lb" aria-label="${esc(t.ui.viewAll.replace('{total}', ORDER.length))}">
  <figure class="lb-fig"><img class="lb-img" alt=""><figcaption class="lb-cap"></figcaption></figure>
  <p class="lb-count" aria-live="polite"></p>
  <button type="button" class="lb-btn lb-close" aria-label="${esc(t.ui.close)}">×</button>
  <button type="button" class="lb-btn lb-prev" aria-label="${esc(t.ui.prev)}">‹</button>
  <button type="button" class="lb-btn lb-next" aria-label="${esc(t.ui.next)}">›</button>
</dialog>

<script>window.LB=${JSON.stringify(lightboxData)};window.LB_COUNTER=${JSON.stringify(t.ui.counter)};</script>
<script src="${pre}site.js" defer></script>
</body>
</html>
`;
}

for (const lang of ['en', 'es']) {
  const t = JSON.parse(readFileSync(`i18n/${lang}.json`, 'utf8'));
  const html = render(t);
  if (t.path) mkdirSync(t.path, { recursive: true });
  writeFileSync(`${t.path}index.html`, html);
  console.log(`wrote ${t.path}index.html (${html.length} bytes)`);
}

// Sitemap with both languages + image entries.
const imgs = ORDER.map((n) => `    <image:image><image:loc>${BASE}img/full/${n}.jpg</image:loc></image:image>`).join('\n');
const alts = `    <xhtml:link rel="alternate" hreflang="en" href="${BASE}"/>\n    <xhtml:link rel="alternate" hreflang="es" href="${BASE}es/"/>\n    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}"/>`;
writeFileSync('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${BASE}</loc>
${alts}
${imgs}
  </url>
  <url>
    <loc>${BASE}es/</loc>
${alts}
  </url>
</urlset>
`);
writeFileSync('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${BASE}sitemap.xml\n`);
console.log('wrote sitemap.xml, robots.txt');
