document.addEventListener("DOMContentLoaded", (event) => {
  const cv = document.querySelector("#cv-file");
  const cvPage = document.querySelector("#cv-full");
  const cvClose = document.querySelector("#close-cv");
  cv.addEventListener("click", function () {
    cvPage.style.display = "flex";
  });
  cvClose.addEventListener("click", function () {
    cvPage.style.display = "none";
  });

  let offsetX, offsetY;
  let isDragging = false;

  cvPage.addEventListener("mousedown", function (e) {
    isDragging = true;
    offsetX = e.clientX - cvPage.getBoundingClientRect().left;
    offsetY = e.clientY - cvPage.getBoundingClientRect().top;

    document.addEventListener("mousemove", moveElement);
    document.addEventListener("mouseup", stopDragging);
  });

  function moveElement(e) {
    if (isDragging) {
      cvPage.style.left = e.clientX - offsetX + "px";
      cvPage.style.top = e.clientY - offsetY + "px";
    }
  }

  function stopDragging() {
    isDragging = false;
    document.removeEventListener("mousemove", moveElement);
    document.removeEventListener("mouseup", stopDragging);
  }
});
