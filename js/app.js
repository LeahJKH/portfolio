import { cv, bin, binary, projects } from "./module.js";

function handleClick(app) {
  app.element.addEventListener("dblclick", () => {
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

function handleDrag(app) {
  app.page.addEventListener("mousedown", (e) => {
    app.isDragging = true;
    const offsetX = e.clientX - app.page.getBoundingClientRect().left;
    const offsetY = e.clientY - app.page.getBoundingClientRect().top;

    document.addEventListener("mousemove", (e) => {
      if (app.isDragging) {
        app.page.style.left = e.clientX - offsetX + "px";
        app.page.style.top = e.clientY - offsetY + "px";
      }
    });

    document.addEventListener("mouseup", () => {
      app.isDragging = false;
      document.removeEventListener("mousemove", moveElement);
      document.removeEventListener("mouseup", stopDragging);
    });
  });
}

handleDrag(cv);
handleDrag(binary);
handleDrag(projects);
handleDrag(bin);

// clock //
function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let session = "AM";

  if (hour == 0) {
    hour = 12;
    session = "AM";
  }
  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  let time = hour + ":" + minutes + session;

  document.querySelector("#clock").textContent = time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}
currentTime();
// clock //
//start logic//
const startBtn = document.querySelector("#start-btn");
const startFull = document.querySelector("#start-full");
let menuIsOpen = true;

startBtn.addEventListener("click", function () {
  if (!menuIsOpen) {
    menuIsOpen = true;
    startFull.style.display = menuIsOpen ? "none" : "flex";
  } else {
    menuIsOpen = false;
    startFull.style.display = menuIsOpen ? "none" : "flex";
  }
});

//start logic//
