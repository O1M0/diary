
// ==== Smooth Scroll (PC only) ====
document.addEventListener('DOMContentLoaded', () => {
  // スマホ・タブレットは通常スクロール
  if (window.innerWidth <= 768) return;

  let currentScroll = window.scrollY;
  let targetScroll = window.scrollY;
  const ease = 0.05; // ← 値小さいほどなめらか（0.05〜0.1）

  window.addEventListener(
    'wheel',
    (e) => {
      e.preventDefault();

      targetScroll += e.deltaY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));
    },
    { passive: false }
  );

  function smoothScroll() {
    currentScroll += (targetScroll - currentScroll) * ease;
    window.scrollTo(0, currentScroll);
    requestAnimationFrame(smoothScroll);
  }

  smoothScroll();
});

// === header-animation ===
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 100);
  });
});