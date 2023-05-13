import disableMainScroll from "./disableMainScroll"

let btnCall = [...document.querySelectorAll('.btn__callback')]


let sidebarCallback = document.querySelector('.sidebar__callback')

btnCall.map(el => el.addEventListener('click', () => {
    sidebarCallback.classList.add('sidebar--open')
    disableMainScroll(true)
}))

let btnClose = document.querySelector('.sidebar__btn--close-callback')

btnClose.addEventListener('click', () => {
    sidebarCallback.classList.remove('sidebar--open')
    disableMainScroll(false)
})

let btnSend = document.querySelector('.form__btn--send-callback')

btnSend.addEventListener('click', (evt) => {
    evt.preventDefault(); // избегаем ошибку post
    sidebarCallback.classList.remove('sidebar--open')
    disableMainScroll(false)
})

let sidebarOverflow = document.querySelector('.sidebar__overflow--callback')

sidebarOverflow.addEventListener('click', () => {
    sidebarCallback.classList.remove('sidebar--open')
    disableMainScroll(false)
})