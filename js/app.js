document.addEventListener("DOMContentLoaded", (event) => {
  const cv = {
    element: document.querySelector("#cv-file"),
    page: document.querySelector("#cv-full"),
    close: document.querySelector("#close-cv"),
    isDragging: false,
  };

  const binary = {
    element: document.querySelector("#binary-file"),
    page: document.querySelector("#binary-full"),
    close: document.querySelector("#close-binary"),
    isDragging: false,
  };

  function handleClick(app) {
    app.element.addEventListener("click", () => {
      app.page.style.display = "flex";
    });
    app.close.addEventListener("click", () => {
      app.page.style.display = "none";
      app.isDragging = false;
    });
  }

  handleClick(cv);
  handleClick(binary);

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
});
