import disableMainScroll from "./disableMainScroll";

let btnBurger = document.querySelector('.header__button--burger');
let menuBurger = document.querySelector('.burger__wrapper');
// let body = document.querySelector('body');

let menuOverflow = document.querySelector('.burger__overflow');

let btnBurgerClose = document.querySelector('.burger__btn--close');


const menuOpen = () => {
    menuBurger.classList.add('burger__wrapper--open')
    menuOverflow.classList.add('burger__overflow--open')
    disableMainScroll(true)
        // body.classList.add('no-scroll')
}
const menuClose = () => {
    menuBurger.classList.remove('burger__wrapper--open')
    menuOverflow.classList.remove('burger__overflow--open')
    disableMainScroll(false)
        // body.classList.remove('no-scroll')
}

btnBurger.addEventListener('click', menuOpen)
btnBurgerClose.addEventListener('click', menuClose)

menuOverflow.addEventListener('click', menuClose)

let serviceItemsBtn = [...document.querySelectorAll('.aside-services__item')]

const serviceAddBtnHandlerClick = (serviceItemsBtn) => {
    serviceItemsBtn.map(el => el.addEventListener('click', function(evt) {
        evt.preventDefault();
        document.querySelector('.aside-services__item--active').classList.remove('aside-services__item--active');
        el.classList.toggle('aside-services__item--active');
        document.querySelector
    }))


}

serviceAddBtnHandlerClick(serviceItemsBtn)