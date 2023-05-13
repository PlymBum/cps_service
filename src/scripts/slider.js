  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  //   import 'swiper/css';
  //   import 'swiper/css/navigation';
  //   import 'swiper/css/pagination';


  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
      .test(navigator.userAgent)) {

      //   const swiper = new Swiper('.swiper', {
      //       modules: [Navigation, Pagination],
      //       direction: 'horizontal',
      //       loop: true,
      //       speed: 500,
      //       effect: 'slider',
      //       slidesPerView: 'auto',

      //       pagination: {
      //           el: '.swiper-pagination',
      //           clickable: true,
      //       }

      //   });

  }
  //temp code


  //end temp code

  let btnShowMoreBrand = document.querySelector('.slider__btn-show-more--brand');
  let sliderItemsBrand = document.querySelector('.slider__items--brand');


  btnShowMoreBrand.addEventListener('click', function() {

      if (sliderItemsBrand.classList.contains('slider__items--show-all')) {
          sliderItemsBrand.classList.remove('slider__items--show-all');
          btnShowMoreBrand.classList.remove('slider__btn-show-more--open')
          btnShowMoreBrand.textContent = "Показать все"

      } else {
          sliderItemsBrand.classList.add('slider__items--show-all');
          btnShowMoreBrand.textContent = "Скрыть"
          btnShowMoreBrand.classList.add('slider__btn-show-more--open')
      }
  });

  let btnShowMoreType = document.querySelector('.slider__btn-show-more--type');
  let sliderItemsType = document.querySelector('.slider__items--type');

  console.log(btnShowMoreType);
  console.log(sliderItemsType);

  btnShowMoreType.addEventListener('click', function() {

      if (sliderItemsType.classList.contains('slider__items--show-all')) {
          sliderItemsType.classList.remove('slider__items--show-all');
          btnShowMoreType.classList.remove('slider__btn-show-more--open')
          btnShowMoreType.textContent = "Показать все"

      } else {
          sliderItemsType.classList.add('slider__items--show-all');
          btnShowMoreType.textContent = "Скрыть"
          btnShowMoreType.classList.add('slider__btn-show-more--open')
      }
  });



  //   export default Slider;