export function makeDraggable(element) {
    const header = element.querySelector('.top-menu');
    if (!header) return;

    let offsetX = 0, offsetY = 0, isDragging = false;

    header.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - element.offsetLeft;
        offsetY = e.clientY - element.offsetTop;
        element.style.position = "absolute"; 
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        element.style.left = `${e.clientX - offsetX}px`;
        element.style.top = `${e.clientY - offsetY}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
}


export function makeResizable(element) {
    const resizer = element.querySelector('.resizer');
    if (!resizer) return;

    let isResizing = false;
    let startX, startY, startWidth, startHeight;

    resizer.addEventListener("mousedown", (e) => {
        isResizing = true;
        startX = e.clientX;
        startY = e.clientY;
        startWidth = element.offsetWidth;
        startHeight = element.offsetHeight;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        element.style.width = `${startWidth + (e.clientX - startX)}px`;
        element.style.height = `${startHeight + (e.clientY - startY)}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });
}