{
  document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 3.5,
      spaceBetween: 20,
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        572: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        996: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        1392: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
      },
      speed: 800,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });
}
