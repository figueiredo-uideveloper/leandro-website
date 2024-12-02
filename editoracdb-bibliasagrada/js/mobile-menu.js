{
  window.addEventListener("load", () => {
    const buttonMobile = document.querySelector("#menu-button-mobile");
    const mobileMenu = document.querySelector(".nav-itens-wrapper");

    if (!buttonMobile) {
      console.error("Botão #menu-button-mobile não encontrado.");
      return;
    }

    let isOpen = false;

    buttonMobile.addEventListener("click", (event) => {
      event.preventDefault();

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    document.addEventListener("click", (event) => {
      if (
        isOpen &&
        !mobileMenu.contains(event.target) &&
        !buttonMobile.contains(event.target)
      ) {
        closeMenu();
      }
    });

    mobileMenu.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        closeMenu();
      }
    });

    function openMenu() {
      mobileMenu.classList.add("open");
      buttonMobile.classList.remove("menu-close");
      buttonMobile.classList.add("menu-open");
      isOpen = true;
    }

    function closeMenu() {
      mobileMenu.classList.remove("open");
      buttonMobile.classList.remove("menu-open");
      buttonMobile.classList.add("menu-close");
      isOpen = false;
    }
  });
}
