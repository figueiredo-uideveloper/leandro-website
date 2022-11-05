const debounce = function (func, wait) {
    let timeout;
    return () => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(func, wait)
    }
}


let target = document.querySelectorAll("[data-highlight]");

const add_on_scroll = (element) => element.setAttribute('data-highlight', 'on');
const remove_on_scroll = (element) => element.setAttribute('data-highlight', 'off');

function animateHighlight() {
    let windowTop = window.scrollY + (window.innerHeight / 4);

    target.forEach((element) => {
        if (windowTop > element.offsetTop) {
            add_on_scroll(element);
        }
        else {
            remove_on_scroll(element);
        }
    })
}

animateHighlight();

window.addEventListener('scroll', debounce(
    function() { 
        animateHighlight();
    }, 16)
);
