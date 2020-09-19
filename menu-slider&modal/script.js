const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// nav바 토글
toggle.addEventListener('click', () =>
  document.body.classList.toggle('show-nav')
);

// modal 보이기
open.addEventListener('click', () => modal.classList.add('show-modal'));

// modal 숨기기
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// 배경클릭시 modal 숨기기
window.addEventListener('click', (e) =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);
