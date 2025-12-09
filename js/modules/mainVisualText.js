export function initMainVisualText() {
  const textWrapper = document.querySelector('.main-visual p');
  if (!textWrapper) return;

  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='text'>$&</span>"
  );

  // anime.js が読み込まれている前提
  if (typeof anime === 'undefined') return;

  anime({
    targets: '.main-visual p .text',
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: (el, i) => 130 * (i + 1),
  });
}
