const menuItens = document.querySelectorAll('[data-menu-item]');
const menuPointer = document.querySelector('[data-menu-pointer]');

menuItens.forEach((item) => {
    item.addEventListener('click', () => {
        let topDistance = item.offsetTop;
        menuPointer.style.top = `${topDistance}px`;
    })
})