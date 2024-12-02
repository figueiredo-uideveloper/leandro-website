{
  window.addEventListener("load", () => {
    const videoCTA = document.querySelector("#card-purchase-video");
    const videoCTACover = document.querySelector("#card-purchase-video-cover");
    const videoCTAWrapper = document.querySelector(
      ".card-purchase-video-wrapper"
    );

    const cardHeaderCTA = document.querySelector(
      '[data-role="card-cta-header"]'
    );
    const cardPriceCTA = document.querySelector('[data-role="card-price-cta"]');
    const cardBgCTA = document.querySelector('[data-role="card-bg-cta"]');
    const cardButtonCTA = document.querySelector(
      '[data-role="card-button-cta"]'
    );

    videoCTA.addEventListener("ended", () => {
      cardHeaderCTA.classList.add("animate");
      cardPriceCTA.classList.add("animate");
      cardBgCTA.classList.add("animate");
      cardButtonCTA.classList.add("animate");
      videoCTAWrapper.classList.add("ended");
    });

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: videoCTAWrapper,
      start: "top 85%",
      onEnter: () => {
        videoCTA.play();
        videoCTACover.classList.add("hidden");
      },
      onLeave: () => videoCTA.pause(),
      onEnterBack: () => videoCTA.play(),
      onLeaveBack: () => videoCTA.pause(),
    });
  });
}
