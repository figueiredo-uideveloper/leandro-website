const switchTheme = document.querySelector('[data-switch-theme]');
let inputCheckbox = document.querySelector('.toggle-switch');
const tagBody = document.querySelector('body');

const toggleTheme = () => {
    const currentMode = switchTheme.getAttribute('data-switch-theme');
    console.log(inputCheckbox);

    if (currentMode === 'dark') {
        switchTheme.setAttribute('data-switch-theme', 'light');
        tagBody.setAttribute('data-theme', 'light-mode');
        inputCheckbox.checked = false;
    }

    if (currentMode === 'light') {
        switchTheme.setAttribute('data-switch-theme', 'dark');
        tagBody.setAttribute('data-theme', 'dark-mode');
        inputCheckbox.checked = true;
    }

}

switchTheme.addEventListener("click", toggleTheme)