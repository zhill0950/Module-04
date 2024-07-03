// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
// TODO: Create functions to read and write from local storage

// TOGGLE BUTTON LOGIC
// Create a variable for the toggle button
const toggleBtn = document.getElementById("toggle");
// Create a variable for light theme emoji
const lightEmoji = toggleBtn.innerText;
const circle = document.querySelector("aside");

// Check for saved user preference in local storage
const currentMode = localStorage.getItem("theme");

// Toggle dark/light mode on button click
toggleBtn.addEventListener("click", function () {
  // Adds "dark" class to body
  document.body.classList.toggle("dark");

  let theme = "light";
  if (document.body.classList.contains("dark")) {
    theme = "dark";
    toggleBtn.innerText = "🌒";
  } else {
    toggleBtn.innerText = lightEmoji;
  }

  // Save users theme setting to local storage
  localStorage.setItem("theme", theme);
});

// BACK BUTTON LOGIC
// Create variable for button
const backBtn = document.getElementById("back");

// Listen for 'click' to run goBack function
backBtn.addEventListener("click", function () {
  goBack("index.html");
});

function goBack(url) {
  window.location.href = url;
}
