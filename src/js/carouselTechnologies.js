const carousel = document.querySelector('.carousel');
const nextButton = document.getElementById('next-button');
const backButton = document.getElementById('prev-button');
let position = 0;

function updateCarousel() {
  const operation = position * -33.333;
  carousel.style.transform = `translateX(${operation}%)`;
};

function nextSlide() {
  if (position < 2) {
    position++;
    updateCarousel();
  }
};

function prevSlide() {
  if (position > 0) {
    position--;
    updateCarousel();
  }
};

nextButton.addEventListener('click', nextSlide);
backButton.addEventListener('click', prevSlide);