
function drag(e) {
  if (popup.classList.contains("draggable")) {
    popup.style.left = (e.clientX - dragX) + "px";
    popup.style.top = (e.clientY - dragY) + "px";
  }
}

function dragEnd(e) {
  popup.classList.remove("draggable");
}
