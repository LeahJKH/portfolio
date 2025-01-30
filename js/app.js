import { setupBin, binClicked } from './apps/bin.js';
import { setupProjects, ProjectsClicked } from './apps/projects.js';
import { setupBinary, binaryClicked } from './apps/binary.js';
import { setupCV, CvClicked } from './apps/cv.js';
import { currentTime } from './SmallLogic/clock.js';
import { makeDraggable, makeResizable } from './apps/templates/DragRezise.js';

currentTime();

// Initialize app objects
const cv = setupCV();
const binary = setupBinary();
const projects = setupProjects();
const bin = setupBin();

console.log(cv);

// Append app elements to a container
const appContainer = document.getElementById('app-container');

appContainer.appendChild(cv.element);
appContainer.appendChild(binary.element);
appContainer.appendChild(projects.element);
appContainer.appendChild(bin.element);

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

    makeDraggable(app.page); // Enable dragging
    makeResizable(app.page); // Enable resizing
}

handleClick(cv, CvClicked);
handleClick(binary, binaryClicked);
handleClick(projects, ProjectsClicked);
handleClick(bin, binClicked);

// Start button logic
const startBtn = document.querySelector("#start-btn");
const startFull = document.querySelector("#start-full");
let menuIsOpen = true;

startBtn.addEventListener("click", function () {
    menuIsOpen = !menuIsOpen;
    startFull.style.display = menuIsOpen ? "flex" : "none";
});