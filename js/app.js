import { setupBin, binClicked } from './apps/bin.js';
import { setupProjects, ProjectsClicked } from './apps/projects.js';
import { setupBinary, binaryClicked } from './apps/binary.js';
import { setupCV, CvClicked } from './apps/cv.js';
import { currentTime } from './SmallLogic/Clock.js';

currentTime();

// Initialize app objects
const cv = setupCV();
const binary = setupBinary();
const projects = setupProjects();
const bin = setupBin();

console.log('cv:', cv);
console.log('binary:', binary);
console.log('projects:', projects);
console.log('bin:', bin);

// Append app elements to a container
const appContainer = document.getElementById('app-container'); // Ensure you have a container with this ID in your HTML

appContainer.appendChild(cv.element);
appContainer.appendChild(binary.element);
appContainer.appendChild(projects.element);
appContainer.appendChild(bin.element);

// Append page elements to the app container
appContainer.appendChild(cv.page);
appContainer.appendChild(binary.page);
appContainer.appendChild(projects.page);
appContainer.appendChild(bin.page);

// Add event listeners and handlers
function handleClick(app, clickHandler) {
  if (!app.element || !app.page || !app.close) {
    console.error('App object is missing required properties:', app);
    return;
  }

  app.element.addEventListener("click", () => {
    app.page.style.display = "flex";
    clickHandler();
  });
  app.close.addEventListener("click", () => {
    app.page.style.display = "none";
  });
}

handleClick(cv, CvClicked);
handleClick(binary, binaryClicked);
handleClick(projects, ProjectsClicked);
handleClick(bin, binClicked);

// Add drag and resize functionality
function handleDragAndResize(app) {
  if (!app.page) {
    console.error('App object is missing required properties for drag and resize:', app);
    return;
  }

  let offsetX, offsetY, initialWidth, initialHeight;
  let isDragging = false;
  let isResizing = false;

  const topMenu = app.page.querySelector('.top-menu');
  const resizer = app.page.querySelector('.resizer');

  topMenu.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - app.page.getBoundingClientRect().left;
    offsetY = e.clientY - app.page.getBoundingClientRect().top;
    document.body.style.cursor = 'grabbing';
  });

  resizer.addEventListener("mousedown", (e) => {
    isResizing = true;
    initialWidth = app.page.offsetWidth;
    initialHeight = app.page.offsetHeight;
    offsetX = e.clientX;
    offsetY = e.clientY;
    document.body.style.cursor = 'se-resize';
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      app.page.style.left = e.clientX - offsetX + "px";
      app.page.style.top = e.clientY - offsetY + "px";
    } else if (isResizing) {
      const newWidth = initialWidth + (e.clientX - offsetX);
      const newHeight = initialHeight + (e.clientY - offsetY);
      app.page.style.width = newWidth + "px";
      app.page.style.height = newHeight + "px";
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    isResizing = false;
    document.body.style.cursor = 'default';
  });
}

handleDragAndResize(cv);
handleDragAndResize(binary);
handleDragAndResize(projects);
handleDragAndResize(bin);