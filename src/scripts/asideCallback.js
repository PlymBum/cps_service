import disableMainScroll from "./disableMainScroll"

const btnCall = [...document.querySelectorAll('.btn__callback')]


const sidebarCallback = document.querySelector('.sidebar__callback')

btnCall.map(el => el.addEventListener('click', () => {
    sidebarCallback.classList.add('sidebar--open')
    disableMainScroll(true)
}))

const btnClose = document.querySelector('.sidebar__btn--close-callback')

btnClose.addEventListener('click', () => {
    sidebarCallback.classList.remove('sidebar--open')
    disableMainScroll(false)
})

const btnSend = document.querySelector('.form__btn--send-callback')

btnSend.addEventListener('click', (evt) => {
    evt.preventDefault();
    sidebarCallback.classList.remove('sidebar--open')
    disableMainScroll(false)
})

const sidebarOverflow = document.querySelector('.sidebar__overflow--callback')

sidebarOverflow.addEventListener('click', () => {
    sidebarCallback.classList.remove('sidebar--open')
    disableMainScroll(false)
})