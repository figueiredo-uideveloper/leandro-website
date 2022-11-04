const ariaHighlight = document.querySelector('.js-aria-highlight');
const photo = document.querySelector('.js-photo');
const mark = document.querySelector('.js-mark');

ariaHighlight.addEventListener('mouseenter', () => {
    mark.classList.add('hover');
    photo.classList.add('hover');
})
ariaHighlight.addEventListener('mouseleave', () => {
    mark.classList.remove('hover');
    photo.classList.remove('hover');
})