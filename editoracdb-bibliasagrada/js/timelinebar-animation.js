{
  window.addEventListener("load", () => {
    const timelineBarWrapper = document.querySelector(".timeline-bar-wrapper");
    const timelineBarActiveMask = document.querySelector(
      ".timeline-bar-active-mask"
    );
    const steps = document.querySelectorAll(".timeline-step");
    const timelineBarHeight = timelineBarWrapper.offsetHeight;

    const stepHeaders = Array.from(steps).map((step) =>
      step.querySelector(".timeline-step-header")
    );

    const calculateStartTrigger = (stepIndex, stepElement) => {
      const stepHeight = stepElement.offsetHeight;
      const headerHeight = stepHeaders[stepIndex].offsetHeight;
      const triggerPosition = (
        ((stepHeight + headerHeight) / timelineBarHeight) *
        100 *
        stepIndex
      ).toFixed(2);

      return triggerPosition - stepIndex * 2;
    };

    const triggers = Array.from(steps).map((step, index) =>
      calculateStartTrigger(index, step)
    );

    const specialTriggers = {
      0: {
        startTrigger: "top center",
        targetsClass: [".step-00", ".timeline-bar-bullet.top"],
      },
      7: {
        startTrigger: "99% center",
        targetsClass: [".step-07", ".timeline-bar-bullet.bottom"],
      },
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: ".timeline-bar-wrapper",
        start: "top center",
        end: "bottom center",
        onUpdate: (self) => {
          const distanceToCenter =
            window.innerHeight / 2 -
            timelineBarWrapper.getBoundingClientRect().top;
          timelineBarActiveMask.style.height = `${Math.max(
            0,
            distanceToCenter
          )}px`;
        },
      },
    });

    steps.forEach((step, index) => {
      const { startTrigger, targetsClass } = specialTriggers[index] || {
        startTrigger: `${triggers[index]}% center`,
        targetsClass: step,
      };

      gsap.timeline({
        scrollTrigger: {
          scrub: 1,
          trigger: ".timeline-bar-wrapper",
          start: startTrigger,
          toggleClass: {
            targets: targetsClass,
            className: "active",
          },
        },
      });
    });
  });
}
