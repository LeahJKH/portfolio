// topCreator.js
export function topCreator(heading, image, name) {
    const page = document.createElement("div");
    page.id = `${name}-file`;
    page.className = "resizable";
    page.style.display = "none";

    const columnDiv = document.createElement('div');
    columnDiv.className = 'column full-width';

    const topMenuDiv = document.createElement('div');
    topMenuDiv.className = 'top-menu draggable full-width';

    const topRowDiv = document.createElement('div');
    topRowDiv.className = 'row';

    const topImg = document.createElement('img');
    topImg.src = `${image}`;
    topImg.alt = `image of a ${name}`;
    topImg.className = 'top-menu-pic';

    topRowDiv.appendChild(topImg);

    const topH4 = document.createElement('h4');
    topH4.textContent = `${heading}`;
    topRowDiv.appendChild(topH4);

    topMenuDiv.appendChild(topRowDiv);

    const buttonContainerDiv = document.createElement('div');

    const minimizeButton = document.createElement('button');
    minimizeButton.className = 'top-btns-style';
    minimizeButton.textContent = '-';

    const maximizeButton = document.createElement('button');
    maximizeButton.className = 'top-btns-style';
    maximizeButton.textContent = '[]';

    const closeButton = document.createElement('button');  // This is the close button
    closeButton.className = 'closeX';
    closeButton.textContent = "X";

    buttonContainerDiv.appendChild(minimizeButton);
    buttonContainerDiv.appendChild(maximizeButton);
    buttonContainerDiv.appendChild(closeButton);

    topMenuDiv.appendChild(buttonContainerDiv);
    columnDiv.appendChild(topMenuDiv);

    return { columnDiv, closeButton };  // Return the closeButton as well
}