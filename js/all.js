"use strict";var ariaHighlight=document.querySelector(".js-aria-highlight"),photo=document.querySelector(".js-photo"),mark=document.querySelector(".js-mark");function wheel(e){var o=0;e.wheelDelta?o=e.wheelDelta/120:e.detail&&(o=-e.detail/3),handle(o),e.preventDefault&&e.preventDefault(),e.returnValue=!1}ariaHighlight.addEventListener("mouseenter",function(){mark.classList.add("hover"),photo.classList.add("hover")}),ariaHighlight.addEventListener("mouseleave",function(){mark.classList.remove("hover"),photo.classList.remove("hover")}),window.addEventListener&&window.addEventListener("DOMMouseScroll",wheel,!1),window.onmousewheel=document.onmousewheel=wheel;var goUp=!0,end=null,interval=null;function handle(e){null==end&&(end=$(window).scrollTop()),end-=20*e,goUp=0<e,null==interval&&(interval=setInterval(function(){var e=$(window).scrollTop(),o=Math.round((end-e)/10);(e<=0||e>=$(window).prop("scrollHeight")-$(window).height()||goUp&&-1<o||!goUp&&o<1)&&(clearInterval(interval),end=interval=null),$(window).scrollTop(e+o)},10))}var portfolio_slider=new Swiper(".portfolio-slider",{direction:"vertical",slidesPerView:1,spaceBetween:30,mousewheel:!0}),control_slider=new Swiper(".control-slider",{effect:"fade",slidesPerView:1,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});(control_slider.controller.control=portfolio_slider).controller.control=control_slider;