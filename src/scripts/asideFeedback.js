import disableMainScroll from "./disableMainScroll"

let btnMessage = [...document.querySelectorAll('.btn__msg')]
let sidebarFeedback = document.querySelector('.sidebar__feedback')

btnMessage.map(el => el.addEventListener('click', () => {
    sidebarFeedback.classList.add('sidebar--open')
    disableMainScroll(true)
}))

let btnClose = document.querySelector('.sidebar__btn--close-feedback')

btnClose.addEventListener('click', () => {
    sidebarFeedback.classList.remove('sidebar--open')
    disableMainScroll(false)
})

let btnSend = document.querySelector('.form__btn--send-feedback')

btnSend.addEventListener('click', (evt) => {
    // evt.preventDefault(); // избегаем ошибку post
    // sidebarFeedback.classList.remove('sidebar--open')
    disableMainScroll(false)
})

let sidebarOverflow = document.querySelector('.sidebar__overflow--feedback')

sidebarOverflow.addEventListener('click', () => {
    sidebarFeedback.classList.remove('sidebar--open')
    disableMainScroll(false)
})