document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    updateButtons(index);
  }

  function updateButtons(index) {
    slides.forEach((slide, i) => {
      const prevBtn = slide.querySelector("button[onclick='prevSlide()']");
      const nextBtn = slide.querySelector("button[onclick='nextSlide()']");

      if (prevBtn) prevBtn.disabled = index === 0;
      if (nextBtn) prevBtn.disabled = index === slides.length - 1;
    });
  }

  window.nextSlide = function () {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  };

  window.prevSlide = function () {
    if (currentSlide > 0) {
      currentSlide--;
      showSlide(currentSlide);
    }
  };

  window.yesClick = function () {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  };

  window.explodeNo = function () {
    const noBtn = document.querySelector(".no-btn");
    if (noBtn) {
      noBtn.classList.add("explode");
      setTimeout(() => {
        noBtn.style.display = "none";
      }, 600);
    }
  };

  // SHOW first slide on page load
  showSlide(currentSlide);
});
