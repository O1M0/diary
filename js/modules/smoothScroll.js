// js/modules/smoothScroll.js
export function enableSmoothScroll() {
  // スマホ・タブレットは通常スクロール
  if (window.innerWidth <= 768) return;

  let currentScroll = window.scrollY;
  let targetScroll = window.scrollY;
  const ease = 0.05;

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

  function update() {
    currentScroll += (targetScroll - currentScroll) * ease;
    window.scrollTo(0, currentScroll);
    requestAnimationFrame(update);
  }

  update();
}
