import disableMainScroll from "./disableMainScroll"

const btnMessage = [...document.querySelectorAll('.btn__msg')]
const sidebarFeedback = document.querySelector('.sidebar__feedback')

btnMessage.map(el => el.addEventListener('click', () => {
    sidebarFeedback.classList.add('sidebar--open')
    disableMainScroll(true)
}))

const btnClose = document.querySelector('.sidebar__btn--close-feedback')

btnClose.addEventListener('click', () => {
    sidebarFeedback.classList.remove('sidebar--open')
    disableMainScroll(false)
})

const btnSend = document.querySelector('.form__btn--send-feedback')

btnSend.addEventListener('click', (evt) => {
    disableMainScroll(false)
})

const sidebarOverflow = document.querySelector('.sidebar__overflow--feedback')

sidebarOverflow.addEventListener('click', () => {
    sidebarFeedback.classList.remove('sidebar--open')
    disableMainScroll(false)
})