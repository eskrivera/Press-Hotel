let index = 1;

function nextSlide(n) {
  showSlides((index += n));
}
setInterval(function time() {
  showSlides((index += 1));
}, 8000);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider--slide");

  if (n > slides.length) {
    index = 1;
  }
  if (n < 1) {
    index = slides.length();
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[index - 1].style.display = "block";
}

showSlides(index);
