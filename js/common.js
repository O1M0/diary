window.addEventListener("load", () => {
  const loading = document.getElementById("loading");

  if (!loading) return;

  // ロード完了後、少し余韻をつけて消す
  setTimeout(() => {
    loading.classList.add("is-hidden");
  }, 1500);
});


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

// === Main Visual Text Animation ===
var textWrapper = document.querySelector('.main-visual p');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='text'>$&</span>");

anime({
  targets: '.main-visual p .text',
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 1000,
  delay: (el, i) => 130 * (i + 1)
});


// === Floating Circles Animation ===
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
});
