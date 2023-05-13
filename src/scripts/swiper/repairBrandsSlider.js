import swiperToogle from './swiperToogle';
import showMoreBtnToogle from './showMoreBtnToogle';


let brandSwiper;

swiperToogle(brandSwiper, '.repair__cards--brand', '.repair__pagination--brand')

showMoreBtnToogle('.repair__btn-show-more--brand', '.repair__slider--brand')

// const mediaQuery = window.matchMedia('(min-width: 768px)');

// function checkWidth(evt) {

//     if (!evt.matches) {
//         brandSwiper = createSwiper('.repair__cards--brand', '.repair__pagination--brand');
//     } else {
//         if (brandSwiper !== undefined) {
//             brandSwiper.destroy(true, true)
//         }
//     }

// }

// mediaQuery.addEventListener('change', checkWidth);

// checkWidth(mediaQuery);

// let btnShowMoreBrand = document.querySelector('.repair__btn-show-more--brand');
// let sliderItemsBrand = document.querySelector('.repair__slider--brand');

// btnShowMoreBrand.addEventListener('click', function() {
//     sliderItemsBrand.classList.toggle('repair__slider--show-all');
//     btnShowMoreBrand.classList.toggle('repair__btn-show-more--open');
//     if (btnShowMoreBrand.classList.contains('repair__btn-show-more--open')) {
//         btnShowMoreBrand.textContent = "Скрыть";
//     } else {
//         btnShowMoreBrand.textContent = "Показать все";
//     }
// });