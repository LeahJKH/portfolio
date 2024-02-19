import { cv, bin, binary, projects } from "./module.js";

function handleClick(app) {
  app.element.addEventListener("click", () => {
    app.page.style.display = "flex";
  });
  app.close.addEventListener("click", () => {
    app.page.style.display = "none";
  });
}

handleClick(cv);
handleClick(binary);
handleClick(projects);
handleClick(bin);

function handleDragAndResize(app) {
  let offsetX, offsetY, initialWidth, initialHeight;

  app.page.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("resizable")) {
      app.isResizing = true;
      initialWidth = app.page.offsetWidth;
      initialHeight = app.page.offsetHeight;
    } else {
      app.isDragging = true;
      offsetX = e.clientX - app.page.getBoundingClientRect().left;
      offsetY = e.clientY - app.page.getBoundingClientRect().top;
    }
  });

  document.addEventListener("mousemove", (e) => {
    if (app.isResizing) {
      const newWidth = initialWidth + e.clientX - app.page.getBoundingClientRect().left;
      const newHeight = initialHeight + e.clientY - app.page.getBoundingClientRect().top;

      app.page.style.width = newWidth + "px";
      app.page.style.height = newHeight + "px";
    } else if (app.isDragging) {
      app.page.style.left = e.clientX - offsetX + "px";
      app.page.style.top = e.clientY - offsetY + "px";
    }
  });

  document.addEventListener("mouseup", () => {
    app.isDragging = false;
    app.isResizing = false;
  });
}

handleDragAndResize(cv);
handleDragAndResize(binary);
handleDragAndResize(projects);
handleDragAndResize(bin);

// clock //
function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let session = "PM";

  if (hour === 0) {
    hour = 12;
    session = "PM";
  } else if (hour > 12) {
    hour -= 12;
    session = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  let time = hour + ":" + minutes + session;

  document.querySelector("#clock").textContent = time;
  setTimeout(currentTime, 1000);
}

currentTime();
// clock //

//start logic//
const startBtn = document.querySelector("#start-btn");
const startFull = document.querySelector("#start-full");
let menuIsOpen = true;

startBtn.addEventListener("click", function () {
  menuIsOpen = !menuIsOpen;
  startFull.style.display = menuIsOpen ? "flex" : "none";
});
//start logic//
