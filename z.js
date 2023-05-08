
function drag(e) {
  if (popup.classList.contains("draggable")) {
    popup.style.left = (e.clientX - dragX) + "px";
    popup.style.top = (e.clientY - dragY) + "px";
  }
}

function dragEnd(e) {
  popup.classList.remove("draggable");
}
function changeScreen() {
  var tvScreen = document.getElementById("tvscreen");
  tvScreen.style.backgroundImage = "url('images/cart 1.png')";
}

const slideshowImages = document.querySelector(".slideshow-images");
const navigationDots = document.querySelectorAll(".dot");

let currentSlide = 0;

setInterval(() => {
  currentSlide++;
  if (currentSlide >= navigationDots.length) {
    currentSlide = 0;
  }
  changeSlide(currentSlide);
}, 5000);
changeSlide(currentSlide);


navigationDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    changeSlide(index);
  });
});

function changeSlide(index) {
  currentSlide = index;

  navigationDots.forEach((dot) => {
    dot.classList.remove("active");
  });
  navigationDots[currentSlide].classList.add("active");

  const images = slideshowImages.querySelectorAll("img");
  images.forEach((image) => {
    image.classList.remove("active");
  });
  images[currentSlide].classList.add("active");
}
