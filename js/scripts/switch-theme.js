const switchTheme = document.querySelector('[data-switch-theme]');
let inputCheckbox = document.querySelector('.toggle-switch');
const tagBody = document.querySelector('body');
const tagHtml = document.querySelector('html');

const toggleTheme = () => {
    const currentMode = switchTheme.getAttribute('data-switch-theme');

    if (currentMode === 'dark') {
        switchTheme.setAttribute('data-switch-theme', 'light');
        tagBody.setAttribute('data-theme', 'light-mode');
        inputCheckbox.checked = false;
        tagHtml.style.background = '#000';
    }

    if (currentMode === 'light') {
        switchTheme.setAttribute('data-switch-theme', 'dark');
        tagBody.setAttribute('data-theme', 'dark-mode');
        inputCheckbox.checked = true;
        tagHtml.style.background = '#FFF';
    }

}

switchTheme.addEventListener("click", toggleTheme)