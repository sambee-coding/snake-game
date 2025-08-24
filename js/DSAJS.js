
//
function flipBottle(event) {
  // Use 'event.currentTarget' to get the element that the event listener is on.
  // This is the entire bottle container, not just a colored div.
  let bottle = event.currentTarget;
  // 'toggle' adds the class if it's not there, and removes it if it is.
  bottle.classList.toggle("flipped");
}

// Get the correct HTML element, which should be the whole bottle container.
// Based on your HTML, 'touch-1' is the container.
let clickingBottle = document.getElementById("touch-1");

// Add the event listener to the container.
clickingBottle.addEventListener("click", flipBottle);

// finding small letter from the given scribbled letters
   
