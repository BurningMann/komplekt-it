// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
/* import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
 */
const clientsSections = document.querySelectorAll('.clients-section');
clientsSections.forEach((el) => {
  const slider = el.querySelector('.swiper');
  const swiper = new Swiper(slider, {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: false,
    modules: [Navigation, Pagination],
    navigation: {
      prevEl: el.querySelector('.section-swiper-button.is-prev'),
      nextEl: el.querySelector('.section-swiper-button.is-next'),
    },
    /*     pagination: {
      el: slider.querySelector('.main-slider__counter'),
      type: 'fraction',
    }, */
  });
});
