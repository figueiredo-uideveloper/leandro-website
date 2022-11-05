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


// let scrollpos = window.scrollY

// const header = document.querySelector("header")
// const scrollChange = 1

// const add_class_on_scroll = () => header.classList.add("bg-red")
// const remove_class_on_scroll = () => header.classList.remove("bg-red")

// window.addEventListener('scroll', function() { 
//   scrollpos = window.scrollY;

//   if (scrollpos >= scrollChange) { add_class_on_scroll() }
//   else { remove_class_on_scroll() }
  
// })

// const debounce = function(func, wait, immediate) {
//     let timeout;
//     return function(...args) {
//         const context = this;
//         const later = function () {
//         timeout = null;
//         if (!immediate) func.apply(context, args);
//         };
//         const callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//     };
// };

const debounce = function (func, wait) {
    let timeout;
    return () => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(func, wait)
    }
}

const footer = document.querySelector("footer");
const footerOffsetTop = footer.offsetTop;
const windowHeight = window.innerHeight;
let scrollTop = window.scrollY;

const add_class_on_scroll = () => footer.classList.add("highlight-active")
const remove_class_on_scroll = () => footer.classList.remove("highlight-active")

function animateHighlight() {
    scrollTop = window.scrollY;
    let windowTop = scrollTop + (windowHeight / 2);

    if (windowTop > footerOffsetTop) {
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
}

animateHighlight();

window.addEventListener('scroll', debounce(
    function() { 
        animateHighlight();
        console.log('asdf');
    }
), 11200);

// window.addEventListener('scroll', function() { 
//         animateHighlight();
//         console.log('asdf');
//     });