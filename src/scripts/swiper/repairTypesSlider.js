import swiperToogle from './swiperToogle';
import showMoreBtnToogle from './showMoreBtnToogle';


let typeSwiper;

swiperToogle(typeSwiper, '.repair__cards--type', '.repair__pagination--type')

showMoreBtnToogle('.repair__btn-show-more--type', '.repair__slider--type')

// let btnShowMore = document.querySelector('.repair__btn-show-more--type');
// let sliderItems = document.querySelector('.repair__slider--type');

// btnShowMore.addEventListener('click', function() {
//     sliderItems.classList.toggle('repair__slider--show-all');
//     btnShowMore.classList.toggle('repair__btn-show-more--open');
//     if (btnShowMore.classList.contains('repair__btn-show-more--open')) {
//         btnShowMore.textContent = "Скрыть";
//     } else {
//         btnShowMore.textContent = "Показать все";
//     }
// });


// const mediaQuery = window.matchMedia('(min-width: 768px)');

// function checkWidth(evt) {

//     if (!evt.matches) {
//         typeSwiper = createSwiper('.repair__cards--type', '.repair__pagination--type');
//     } else {
//         if (typeSwiper !== undefined) {
//             typeSwiper.destroy(true, true)
//         }
//     }

// }

// mediaQuery.addEventListener('change', checkWidth);

// checkWidth(mediaQuery);