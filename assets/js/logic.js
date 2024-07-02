// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

// TODO: Create functions to read and write from local storage

// BACK BUTTON LOGIC
// Create variable for button
const backBtn = document.getElementById("back");

// If the button exists (it does), take me back!
if (backBtn) {
  backBtn.addEventListener("click", function () {
    window.history.back();
  });
} else {
  console.error("Button not found");
}
