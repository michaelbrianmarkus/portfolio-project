
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

var counter = 1;

function incrementCounter() {
  counter === (counter  + 1)
  console.log("Counter is now " + counter);
}

function leftbutton(){
  var counter = 1;
  var audio = new Audio('audio/click.mp3');
  audio.play();
  console.log('Left button has been clicked')
  incrementCounter()
  }


function rightbutton(){
  var audio = new Audio('audio/click.mp3');
  audio.play();
  console.log('Right button has been clicked')
}

function test(){
  document.getElementById("tvscreen").style.backgroundImage = "url(images/cart 1.png)";
  console.log("test")
}


window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

const animationTrigger = 500;

// Get a reference to the element you want to animate
const myElement = document.getElementById('myElement');

// Set a flag to keep track of whether the animation has played
let animationPlayed = false;

// Listen for scroll events on the window object
window.addEventListener('scroll', function() {

  // Check if the current scroll position is greater than the animation trigger position
  if (window.scrollY > animationTrigger && !animationPlayed) {

    // Play the animation
    myElement.classList.add('animate');

    // Set the flag to true so the animation only plays once
    animationPlayed = true;
  }
});