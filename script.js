let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.carousel-slide img');
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  const offset = -slideIndex * slides[0].offsetWidth;
  document.querySelector('.carousel-slide').style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  slideIndex++;
  showSlides();
}

function prevSlide() {
  slideIndex--;
  showSlides();
}

setInterval(nextSlide, 3000);



function increaseFontSize() {
    adjustFontSize(2);
  }
  
  
function decreaseFontSize() {
    adjustFontSize(-2);
}
  
 
function adjustFontSize(delta) {
    let elements = document.querySelectorAll('h1, p, a, h2, li, td, th');
    elements.forEach(function(element) {
      let originalSize = parseFloat(element.dataset.originalSize) || 16; 
      let currentSize = parseFloat(window.getComputedStyle(element).fontSize) || originalSize;
      currentSize += delta;
      element.style.fontSize = currentSize + 'px';
      element.dataset.originalSize = currentSize; 
    });
}
  
 
document.addEventListener('DOMContentLoaded', function() {
    let elements = document.querySelectorAll('h1, p, a, h2, li, td, th');
    elements.forEach(function(element) {
      let currentSize = parseFloat(window.getComputedStyle(element).fontSize) || 16; 
      element.dataset.originalSize = currentSize; 
    });
});  