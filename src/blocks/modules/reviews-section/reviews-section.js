import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const reviewsSections = document.querySelectorAll('.reviews-section');
reviewsSections.forEach((el) => {
  const slider = el.querySelector('.swiper');
  const swiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    modules: [Navigation, Pagination],
    navigation: {
      prevEl: el.querySelector('.section-swiper-button.is-prev'),
      nextEl: el.querySelector('.section-swiper-button.is-next'),
    },
    pagination: {
      el: el.querySelector('.section-swiper__pagination'),
    },
    breakpoints: {
      1024: {
        slidesPerView: 'auto',
      },
    },
  });
});
