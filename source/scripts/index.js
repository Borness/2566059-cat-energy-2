document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.querySelector('.main-navigation__toggle');
  var nav = document.querySelector('.main-navigation');
  var navWrapper = document.querySelector('.main-navigation__wrapper');

  function isMobile() {
    return window.innerWidth <= 767;
  }

  function closeMenu() {
    nav.classList.remove('main-navigation--opened');
    navToggle.classList.remove('main-navigation__toggle--opened');
    navToggle.classList.add('main-navigation__toggle--closed');
    navWrapper.style.display = '';
  }

  function openMenu() {
    nav.classList.add('main-navigation--opened');
    navToggle.classList.add('main-navigation__toggle--opened');
    navToggle.classList.remove('main-navigation__toggle--closed');
    navWrapper.style.display = 'block';
  }

  if (navToggle && nav && navWrapper) {
    navToggle.addEventListener('click', function () {
      if (!isMobile()) return;
      if (nav.classList.contains('main-navigation--opened')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // При изменении размера окна скрывать меню, если не mobile
    window.addEventListener('resize', function () {
      if (!isMobile()) {
        nav.classList.remove('main-navigation--opened');
        navWrapper.style.display = '';
        navToggle.classList.remove('main-navigation__toggle--opened');
        navToggle.classList.add('main-navigation__toggle--closed');
      }
    });
  }
});
