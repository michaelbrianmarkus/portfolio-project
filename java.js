var popup = document.getElementById("popup-tab");
var popupHeader = popup.querySelector(".popup-header");
var popupClose = popup.querySelector(".popup-close");

// Make the popup draggable
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

function centerPopup() {
  // Calculate the position of the center of the viewport
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  var centerX = viewportWidth / 2;
  var centerY = viewportHeight / 2;

  // Calculate the position of the top-left corner of the popup
  var popupWidth = popup.offsetWidth;
  var popupHeight = popup.offsetHeight;
  var popupX = centerX - (popupWidth / 2);
  var popupY = centerY - (popupHeight / 2);

  // Set the position of the popup
  popup.style.left = popupX + "px";
  popup.style.top = popupY + "px";
  popup.style.display = "block";
}

// Call centerPopup() when the page loads
window.addEventListener("load", centerPopup);

function calculateage() {
  // Calculate the position of the center of the viewport
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  var centerX = viewportWidth / 2;
  var centerY = viewportHeight / 2;

  // Calculate the position of the top-left corner of the popup
  var popupWidth = popup.offsetWidth;
  var popupHeight = popup.offsetHeight;
  var popupX = centerX - (popupWidth / 2);
  var popupY = centerY - (popupHeight / 2);

  // Set the position of the popup
  popup.style.left = popupX + "px";
  popup.style.top = popupY + "px";
  popup.style.display = "block";
}