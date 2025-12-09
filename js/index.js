// js/index.js
import { initLoading } from './modules/loading.js';
import { initFloatingSquares } from './modules/background.js';
import { initHeaderScroll } from './modules/headerScroll.js';
import { initMainVisualText } from './modules/mainVisualText.js';

document.addEventListener('DOMContentLoaded', () => {
  initLoading();
  initFloatingSquares();
  initHeaderScroll();
  initMainVisualText();
  // ここに今後「日記のCRUD処理の初期化」とかも足していく
});
