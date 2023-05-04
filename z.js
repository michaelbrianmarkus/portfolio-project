
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