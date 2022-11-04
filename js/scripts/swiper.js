const portfolio_slider = new Swiper('.portfolio-slider', {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
});

const control_slider = new Swiper('.control-slider', {
  effect: 'fade',
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

control_slider.controller.control = portfolio_slider;
portfolio_slider.controller.control = control_slider;