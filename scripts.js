// Slider Logic
const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");

slider.addEventListener("input", function () {
  sliderValue.textContent = slider.value;
});

// Modal Logic
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
const modal = document.getElementById("modal");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Accordion Logic
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});
