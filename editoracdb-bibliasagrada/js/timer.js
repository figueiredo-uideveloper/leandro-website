{
  window.addEventListener("load", () => {
    const endDate = new Date("2025-01-10T23:59:59");

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = endDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = String(days).padStart(2, "0");
      document.getElementById("hours").textContent = String(hours).padStart(2, "0");
      document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
      document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

      if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".display-label").textContent = "A campanha terminou.";
        document.querySelector(".timer-wrapper").style.display = "none";
      }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
  });
}
