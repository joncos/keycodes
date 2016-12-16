'use strict';

function keyName(keyCode, keyName) {
  if(keyCode == 32) {
    return 'space';
  } else {
    return keyName;
  }
}

window.onload = function() {
  var displayValue = document.querySelector(".value");
  var displayLabel = document.querySelector(".label");
  document.addEventListener("keydown", function(event) {
    displayValue.className = "value";
    displayValue.textContent = event.keyCode;
    displayLabel.textContent = "Pressed '" + keyName(event.keyCode, event.key) + "' key.";
  });
}