/* import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'; */

/* import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules'; */

/* Base scripts */

/* Проверка на safari */
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (isSafari) {
  document.querySelector('html').classList.add('is-safari');
}

/* Проверка на ios */
function isIpad() {
  if (navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2) {
    return true;
  }
}
function isIOS() {
  return isIpad() || /iPad|iPhone|iPod/.test(navigator.userAgent);
}

function isMac() {
  return navigator.userAgent.match(/Mac/);
}

if (isIOS() || isMac()) {
  document.querySelector('html').classList.add('is-OSX');
}

/* Проверка на моб девайс */

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  ) || isIOS();
if (isMobile) {
  document.querySelector('html').classList.add('is-mobile');
}

const buttonsArrows = document.querySelectorAll('.button__arrow');
buttonsArrows.forEach((el) => {
  const arrow = el.querySelector('svg');
  el.appendChild(arrow.cloneNode(true));
});

/* Accordion */

(() => {
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach((el) => {
    const header = el.querySelector('.accordion-item__header');
    const content = el.querySelector('.accordion-item__content');
    if (!header && !content) return false;
    header.addEventListener('click', () => {
      if (header.classList.contains('is-active')) {
        content.classList.remove('is-active');
        header.classList.remove('is-active');
        setTimeout(() => {
          content.style.maxHeight = '0';
        }, 0);
      } else {
        header.classList.add('is-active');
        content.style.maxHeight = content.scrollHeight + 'px';
        setTimeout(() => {
          content.classList.add('is-active');
        }, 300);
      }
    });
  });
})();

/* Start phone mask */

import { MaskInput } from 'maska';

(() => {
  const maskList = [
    {
      name: 'Russia',
      code: '+7',
      iso: 'RU',
      flag: 'https://cdn.kcak11.com/CountryFlags/countries/ru.svg',
      mask: '(###)###-##-##',
    },
  ];

  const phoneInputs = document.querySelectorAll('.phone-input');

  phoneInputs.forEach((el) => {
    const input = el.querySelector('.input');
    let mask = null;
    function setMask(maskItem) {
      mask = new MaskInput(input, {
        mask: `${maskItem.code}${maskItem.mask}`,
        eager: true,
        onMaska: (detail) => {
          if (detail.completed) {
            el.classList.add('is-valid');
          } else {
            el.classList.remove('is-valid');
          }
        },
      });
    }
    setMask(maskList[0]);

    input.addEventListener('focus', () => {
      if (!input.value) {
        input.value = '+7(';
      }
    });
  });
})();

window.showScrollBar = () => {
  document.querySelector('html').classList.remove('noskroll');
  document.querySelector('body').classList.remove('noskroll');
};

window.hideScrollBar = () => {
  document.querySelector('html').classList.add('noskroll');
  document.querySelector('body').classList.add('noskroll');
};

/* gsap.registerPlugin(ScrollTrigger);

window.startLenis = () => {
  console.log('start');
  window.lenis = new Lenis();
  document.querySelector('html').classList.remove('noskroll');
  document.querySelector('body').classList.remove('noskroll');

  window.lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.lagSmoothing(0);

  function raf(time) {
    window.lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

window.stopLenis = () => {
  window.lenis.destroy();
  document.querySelector('html').classList.add('noskroll');
  document.querySelector('body').classList.add('noskroll');
};

setTimeout(() => {
  window.startLenis();
}, 0); */

/* navigation */
/* const navLinks = document.querySelectorAll('.js-navigate-link');
navLinks.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const id = el.getAttribute('href')?.slice(1);
    if (!id) return;
    const offset = el.dataset.headerOffset ? 0 - document.querySelector('.header').offsetHeight : 0;
    const target = id === 'start' ? document.querySelector('body') : document.getElementById(id);
    window.lenis.scrollTo(target, { offset });
  });
});
 */
/* Start fansybox */
/* Fancybox.bind('[data-fancybox]', {
  Hash: false,
}); */

/* file input */

/* (() => {
  const inputs = document.querySelectorAll('.file-input');
  inputs.forEach((el) => {
    const input = el.querySelector('input');
    const name = el.querySelector('.file-input__name');
    el.addEventListener('click', (e) => {
      const placeholder = input.placeholder;
      if (el.classList.contains('is-active')) {
        e.preventDefault();
        input.value = '';
        el.title = '';
        name.innerHTML = placeholder;
        el.classList.remove('is-active');
      }
    });
    input.addEventListener('change', () => {
      const file = input.files[0];
      if (file) {
        name.innerHTML = file.name;
        el.title = file.name;
        el.classList.add('is-active');
      }
    });
  });
})(); */
import './import/modules';
import './import/components';
