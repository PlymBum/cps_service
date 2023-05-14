let showMoreBtn = document.querySelector('.about__show-more-btn');

let textBlock = document.querySelector('.about__text');

showMoreBtn.addEventListener('click', () => {
    textBlock.classList.toggle('about__text--open')
    showMoreBtn.classList.toggle('about__show-more-btn--open')
})