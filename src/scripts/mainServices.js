let servicesList = [...document.querySelectorAll('.services__item')]

servicesList.map(el => el.addEventListener('click', () => {
    document.querySelector('.services__item--active').classList.remove('services__item--active')
    el.classList.add('services__item--active')
}))