{
  window.addEventListener("load", () => {
    const navFixed = document.querySelector(".nav-fixed");

    function toggleNavOnScroll() {
      const vh = window.innerHeight;

      if (window.scrollY > vh * 0.5) {
        navFixed.classList.add("active");
      } else {
        navFixed.classList.remove("active");
      }
    }

    window.addEventListener("scroll", toggleNavOnScroll);
    toggleNavOnScroll();
  });
}
