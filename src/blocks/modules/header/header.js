/* import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; */

/* gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector('.header');
const headerMobile = header.querySelector('.header__mobile-wrapper');
const headerMobileNav = header.querySelector('.header__mobile-wrapper-nav');

headerMobile.addEventListener('click', () => {
  if (headerMobile.classList.contains('is-active')) {
    headerMobileNav.style.maxHeight = '0';
    setTimeout(() => {
      headerMobileNav.classList.remove('is-active');
      headerMobile.classList.remove('is-active');
    }, 300);
  } else {
    headerMobileNav.classList.add('is-active');
    headerMobile.classList.add('is-active');
    setTimeout(() => {
      headerMobileNav.style.maxHeight = headerMobileNav.scrollHeight + 'px';
    }, 300);
  }
});

const siteSections = document.querySelectorAll('.navigate-section');
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
