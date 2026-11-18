(() => {
  // Nav: solid background once the page scrolls.
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Language switch keeps the current section.
  document.querySelectorAll('.lang-opt:not([aria-current]), .foot a[hreflang]').forEach((a) => {
    a.addEventListener('click', () => { if (location.hash) a.href = a.getAttribute('href').split('#')[0] + location.hash; });
  });

  // Lightbox.
  const lb = document.getElementById('lb');
  const img = lb.querySelector('.lb-img');
  const cap = lb.querySelector('.lb-cap');
  const count = lb.querySelector('.lb-count');
  const data = window.LB || [];
  let i = 0;
  let opener = null;

  const preload = (n) => { const d = data[(n + data.length) % data.length]; if (d) { const p = new Image(); p.src = d.s; } };
  function show(n) {
    i = (n + data.length) % data.length;
    const d = data[i];
    img.src = d.m;            // medium shows at once (likely cached)…
    const full = new Image();  // …then swap to full when it arrives
    full.onload = () => { if (data[i] === d) img.src = d.s; };
    full.src = d.s;
    img.alt = d.a;
    cap.textContent = d.a;
    count.textContent = window.LB_COUNTER.replace('{n}', i + 1).replace('{total}', data.length);
    preload(i + 1); preload(i - 1);
  }
  function open(n, from) {
    opener = from || null;
    show(n);
    lb.showModal();
    document.documentElement.style.overflow = 'hidden';
    lb.querySelector('.lb-next').focus();
  }
  lb.addEventListener('close', () => {
    document.documentElement.style.overflow = '';
    if (opener) opener.focus();
  });

  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-i]');
    if (!b || b.classList.contains('hero-img')) return;
    open(Number(b.dataset.i), b);
  });
  lb.querySelector('.lb-close').addEventListener('click', () => lb.close());
  lb.querySelector('.lb-prev').addEventListener('click', () => show(i - 1));
  lb.querySelector('.lb-next').addEventListener('click', () => show(i + 1));
  lb.addEventListener('click', (e) => { if (e.target === lb || e.target.classList.contains('lb-fig')) lb.close(); });
  lb.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); show(i + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); show(i - 1); }
  });

  // Swipe on touch screens.
  let x0 = null, y0 = null;
  lb.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    const dy = e.changedTouches[0].clientY - y0;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) show(i + (dx < 0 ? 1 : -1));
    x0 = null;
  }, { passive: true });
})();
