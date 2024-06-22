// Start button logic
const startBtn = document.querySelector("#start-btn");
const startFull = document.querySelector("#start-full");
let menuIsOpen = true;

startBtn.addEventListener("click", function () {
  menuIsOpen = !menuIsOpen;
  startFull.style.display = menuIsOpen ? "flex" : "none";
});