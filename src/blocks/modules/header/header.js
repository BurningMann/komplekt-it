import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector('.header');
const headerBurger = document.querySelector('.header__burger');
const headerMobile = document.querySelector('.mobile-header-sidebar');
const menuBg = document.querySelector('.header-menu-background');

headerBurger.addEventListener('click', () => {
  if (headerMobile.classList.contains('is-active')) {
    headerMobile.classList.remove('is-active');
    menuBg.classList.remove('is-active');
  } else {
    headerMobile.classList.add('is-active');
    menuBg.classList.add('is-active');
  }
});

menuBg.addEventListener('click', () => {
  headerMobile.classList.remove('is-active');
  menuBg.classList.remove('is-active');
});

gsap.to('body', {
  scrollTrigger: {
    trigger: 'body',
    start: 'top+=5px top ',
    end: `bottom bottom`,
    /* markers: true, */
    onEnter: () => {
      header.classList.add('is-fixed');
    },
    onLeaveBack: () => {
      header.classList.remove('is-fixed');
    },
  },
});

if (document.querySelectorAll('.company-start-window').length) {
  header.classList.add('is-white');
}
