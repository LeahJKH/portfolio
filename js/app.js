import { setupBin, binClicked } from './apps/bin.js';
import { setupProjects, ProjectsClicked } from './apps/projects.js';
import { setupBinary, binaryClicked } from './apps/binary.js';
import { setupCV, CvClicked } from './apps/cv.js';
import { currentTime } from './SmallLogic/clock.js';
import { makeDraggable, makeResizable } from './apps/templates/DragRezise.js';
import { bottomLogic } from './SmallLogic/bottomNav.js';
currentTime();

// Initialize app objects
const cv = setupCV();
const binary = setupBinary();
const projects = setupProjects();
const bin = setupBin();



// Append app elements to a container
const appContainer = document.getElementById('app-container');

// the app icons
appContainer.appendChild(cv.element);
appContainer.appendChild(binary.element);
appContainer.appendChild(projects.element);
appContainer.appendChild(bin.element);
// the app icons

// the actual page
appContainer.appendChild(cv.page);
appContainer.appendChild(binary.page);
appContainer.appendChild(projects.page);
appContainer.appendChild(bin.page);
// the actual page

// Add event listeners and handlers
function handleClick(app, clickHandler, activatebot) {
    if (!app.element || !app.page || !app.close) {
        console.error('App object is missing required properties:', app);
        return;
    }

    app.element.addEventListener("click", () => {
        app.page.style.display = "flex";
        clickHandler();
        bottomLogic(activatebot)
    });

    app.close.addEventListener("click", () => {
        app.page.style.display = "none";
        bottomLogic(activatebot, "close")
    });
        
        makeDraggable(app.page); // Enable dragging
        makeResizable(app.page); // Enable resizing
}

handleClick(cv, CvClicked, "showCv");
handleClick(binary, binaryClicked, "showBinary" );
handleClick(projects, ProjectsClicked, "showProjects");
handleClick(bin, binClicked, "showTrash");

// Start button logic
const startBtn = document.querySelector("#start-btn");
const startFull = document.querySelector("#start-full");
let menuIsOpen = true;

startBtn.addEventListener("click", function () {
    menuIsOpen = !menuIsOpen;
    startFull.style.display = menuIsOpen ? "flex" : "none";
});