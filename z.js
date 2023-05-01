var popup = document.getElementById("popup-tab");
var popupHeader = popup.querySelector(".popup-header");
var popupClose = popup.querySelector(".popup-close");
const verticalCenter = window.scrollY + (window.innerHeight / 2);
const horizontalCenter = window.innerWidth / 2;

window.addEventListener("scroll", () => {
  const verticalCenter = window.scrollY + (window.innerHeight / 2);
  const horizontalCenter = window.innerWidth / 2;
  return verticalCenter, horizontalCenter
});


popupHeader.addEventListener("mousedown", dragStart);
document.addEventListener("mousemove", drag);
document.addEventListener("mouseup", dragEnd);

function dragStart(e) {
  popup.classList.add("draggable");
  dragX = e.clientX - popup.offsetLeft;
  dragY = e.clientY - popup.offsetTop;
}

function drag(e) {
  if (popup.classList.contains("draggable")) {
    popup.style.left = (e.clientX - dragX) + "px";
    popup.style.top = (e.clientY - dragY) + "px";
  }
}

function dragEnd(e) {
  popup.classList.remove("draggable");
}

// Close the popup when the close button is clicked
popupClose.addEventListener("click", function() {
  popup.style.display = "none";
});

;

function calculateage() {
  const verticalCenter = window.scrollY + (window.innerHeight / 2);
  const horizontalCenter = window.innerWidth / 2;
  popup.style.top = `${verticalCenter - (popup.offsetHeight / 2)}px`;
  popup.style.left = `${horizontalCenter - (popup.offsetWidth / 2)}px`;
  popup.style.display = "block";
}