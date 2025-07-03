document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.main-navigation__toggle');
  const nav = document.querySelector('.main-navigation');
  const navWrapper = document.querySelector('.main-navigation__wrapper');

  const isMobile = () => window.innerWidth <= 767;

  const closeMenu = () => {
    nav.classList.remove('main-navigation--opened');
    navToggle.classList.remove('main-navigation__toggle--opened');
    navToggle.classList.add('main-navigation__toggle--closed');
    navWrapper.style.display = '';
  };

  const openMenu = () => {
    nav.classList.add('main-navigation--opened');
    navToggle.classList.add('main-navigation__toggle--opened');
    navToggle.classList.remove('main-navigation__toggle--closed');
    navWrapper.style.display = 'block';
  };

  if (navToggle && nav && navWrapper) {
    navToggle.addEventListener('click', () => {
      if (!isMobile()) {
        return;
      }
      if (nav.classList.contains('main-navigation--opened')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    window.addEventListener('resize', () => {
      if (!isMobile()) {
        nav.classList.remove('main-navigation--opened');
        navWrapper.style.display = '';
        navToggle.classList.remove('main-navigation__toggle--opened');
        navToggle.classList.add('main-navigation__toggle--closed');
      }
    });
  }
});
