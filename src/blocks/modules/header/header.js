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
      console.log('onEnter');
      header.classList.add('is-fixed');
    },
    onLeaveBack: () => {
      console.log('onEnterBack');
      header.classList.remove('is-fixed');
    },
  },
});

if (document.querySelectorAll('.company-start-window').length) {
  header.classList.add('is-white');
}

/* const siteSections = document.querySelectorAll('.navigate-section');
function setActiveLink(id) {
  if (id) {
    const activeLinks = document.querySelectorAll('.header__link.is-active');
    activeLinks.forEach((item) => item.classList.remove('is-active'));

    const currentLinks = document.querySelectorAll(`a[href^="#${id}"]`);
    currentLinks.forEach((item) => item.classList.add('is-active'));
  }
} */

/* setTimeout(() => {
  siteSections.forEach((el) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: `bottom bottom`,
        markers: true,
        onEnter: () => {
          setActiveLink(el.id);
        },
        onEnterBack: () => {
          setActiveLink(el.id);
        },
      },
    });
  });
}, 0); */
