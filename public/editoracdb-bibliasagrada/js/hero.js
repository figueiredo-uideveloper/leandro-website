{
  window.addEventListener("load", () => {
    const video = document.querySelector("#welcome-video");

    const videoWrapper = document.querySelector(".video-wrapper");
    const welcomeHeading = document.querySelector(
      '[data-role="welcome-heading"]'
    );
    const welcomeCTA = document.querySelector(
      '[data-role="welcome-content-cta"]'
    );
    const bgHeading = document.querySelector('[data-role="bg-heading"]');

    document.addEventListener("visibilitychange", handleVisibilityChange);

    video.addEventListener("ended", () => {
      welcomeHeading.classList.add("animate");
      welcomeCTA.classList.add("animate");
      bgHeading.classList.add("animate");
      videoWrapper.classList.add("ended");
    });

    function handleVisibilityChange() {
      if (document.hidden) {
        video.pause();
      } else {
        video.play();
      }
    }
  });
}
