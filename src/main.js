// Screen Transition
function goToScreen(screenNumber) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('visible');
  });
  document.getElementById(`screen${screenNumber}`).classList.add('visible');
}
window.goToScreen = goToScreen;

// Splash Screen Logic
window.onload = function () {
  goToScreen(2); // Show splash screen
  setTimeout(() => {
    goToScreen(3); // Move to product page
  }, 3000);
};

// Launch AR in new tab (8th Wall)
function launchAR() {
  window.open("https://houseofbluebeans.8thwall.app/poc1/", "_blank");
}
window.launchAR = launchAR;
