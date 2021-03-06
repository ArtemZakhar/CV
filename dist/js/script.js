const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      counters = document.querySelectorAll('.skills__percentage__counter'),
      lines = document.querySelectorAll('.skills__percentage__line span');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
});

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});