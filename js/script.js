document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelector(".slides");
  let dotContainer = document.querySelector(".dots");
  let prevBtn = document.querySelector(".prev");
  let nextBtn = document.querySelector(".next");
  let slide = document.querySelectorAll(".slide");
  let slideCount = slide.length;
  let currentSlide = 0;
  let autoSlideInterval;

  //create dots

  for (let i = 0; i < slideCount; i++) {
    let dot = document.createElement("span");
    if (i == 0) {
      dot.classList.add("active");
    }
    dot.classList.add("dot");
    dot.setAttribute("data-index", i);
    dotContainer.appendChild(dot);
  }
  let dots = document.querySelectorAll(".dot");
  function updateSlider(index) {
    if (index >= slideCount) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slideCount - 1;
    } else {
      currentSlide = index;
    }
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;

    dots.forEach((dot) => dot.classList.remove("active"));
    dots[currentSlide].classList.add("active");
  }
  function nextSlide() {
    updateSlider(currentSlide + 1);
  }

  // Auto Slide Function
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000); // প্রতি 3 সেকেন্ড পর Slide পরিবর্তন হবে
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Start auto slide on page load
  startAutoSlide();

  prevBtn.addEventListener("click", function () {
    stopAutoSlide();
    updateSlider(currentSlide - 1);
    startAutoSlide();
  });
  nextBtn.addEventListener("click", function () {
    stopAutoSlide();
    updateSlider(currentSlide + 1);
    startAutoSlide();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      stopAutoSlide();
      let index = parseInt(dot.getAttribute("data-index"));
      updateSlider(index);
      startAutoSlide();
    });
  });
});
