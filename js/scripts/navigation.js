const menuPointer = document.querySelector('[data-menu-pointer]');
const sections = document.querySelectorAll('[data-section]');
let currentOffsetTop, topDistance, currentSectionName;

const navigateMenu = () => {
    sections.forEach((item) => {
        currentOffsetTop = Math.trunc(window.scrollY - item.offsetTop);
        
        if((currentOffsetTop > -200) && (currentOffsetTop < 200)) {
            currentSectionName = item.getAttribute('data-section');
            topDistance = document.querySelector(`[data-menu-item="${currentSectionName}"]`).offsetTop;

            menuPointer.style.top = `${topDistance}px`;
        }
    })
};

window.addEventListener('scroll', navigateMenu);