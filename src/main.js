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

// Iframe Controls
function openIframe() {
  const overlay = document.getElementById("iframe-overlay");
  const iframe = document.getElementById("installation-iframe");
  iframe.src = "https://houseofbluebeans.8thwall.app/poc1/"; // Replace with your actual 8th Wall URL
  overlay.style.display = "block";
}
function closeIframe() {
  const overlay = document.getElementById("iframe-overlay");
  const iframe = document.getElementById("installation-iframe");
  iframe.src = ""; // Stop iframe load
  overlay.style.display = "none";
}
window.openIframe = openIframe;
window.closeIframe = closeIframe;
