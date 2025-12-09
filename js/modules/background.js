// js/modules/background.js
export function initFloatingSquares() {
  const ul = document.querySelector('.circles');
  if (!ul) return;

  // ここで li を量産したり、styleをランダムにしたりする
  const COUNT = 18;

  for (let i = 0; i < COUNT; i++) {
    const li = document.createElement('li');
    // 位置やサイズなどセット
    const size = 40 + Math.random() * 80;
    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.left = `${Math.random() * 100}%`;
    li.style.animationDelay = `${Math.random() * 10}s`;
    li.style.animationDuration = `${15 + Math.random() * 10}s`;
    ul.appendChild(li);
  }
}

/* === Floating Circles Animation ===
document.addEventListener('DOMContentLoaded', () => {
    const circleContainer = document.querySelector('.circles');
    if (!circleContainer) return;

    const CIRCLE_COUNT = 20;

    for (let i = 0; i < CIRCLE_COUNT; i++) {
        const li = document.createElement('li');

        // 横位置
        li.style.left = Math.random() * 90 + 5 + '%';

        // サイズ
        const size = Math.random() * 100 + 20;
        li.style.width = size + 'px';
        li.style.height = size + 'px';

        // 色（ベージュに合う）
        const opacity = Math.random() * 0.12 + 0.05;
        li.style.background = `rgba(180, 120, 60, ${opacity})`;

        li.style.bottom = Math.random() * -200 + 'px';

        // スピード
        li.style.animationDuration = Math.random() * 35 + 20 + 's';

        // 開始タイミングをバラす
        li.style.animationDelay =
            Math.random() * -40 + 's';

        li.style.animationDelay = Math.random() * -60 + 's';

        circleContainer.appendChild(li);
    }
});*/

