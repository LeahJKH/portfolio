import { projectsFiles } from "../SmallLogic/projectsFiles.js";
export function setupProjects() {
  const element = document.createElement("div");
  element.classList.add("app");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const txt = document.createTextNode("Projects");
  p.appendChild(txt);
  img.src = "./appIcons/folder.png";
  img.setAttribute("projects-file", "ID");
  element.appendChild(img);
  element.appendChild(p);

  const page = document.createElement("div");
  page.id = "projects-full";
  page.className = "resizable";
  page.style.display = "none";



  const columnDiv = document.createElement('div');
  columnDiv.className = 'column full-width';
    const topMenuDiv = document.createElement('div');
    topMenuDiv.className = 'top-menu draggable full-width';
      const topRowDiv = document.createElement('div');
      topRowDiv.className = 'row';
  
      const topImg = document.createElement('img');
      topImg.className = 'top-menu-pic';
      topImg.src = "./appIcons/folder.png"
      topRowDiv.appendChild(topImg);
  
      const topH4 = document.createElement('h4');
      topH4.textContent = 'Projects';
      topRowDiv.appendChild(topH4);
  
    topMenuDiv.appendChild(topRowDiv);
  
    const buttonContainerDiv = document.createElement('div');
    const minimizeButton = document.createElement('button');
    minimizeButton.className = 'top-btns-style';
    minimizeButton.textContent = '-';
  
    const maximizeButton = document.createElement('button');
    maximizeButton.className = 'top-btns-style';
    maximizeButton.textContent = '[]';
  
    const close = document.createElement("button");
    close.className = 'closeX';
    close.textContent = "X";
  
    buttonContainerDiv.appendChild(minimizeButton);
    buttonContainerDiv.appendChild(maximizeButton);
    buttonContainerDiv.appendChild(close);
    topMenuDiv.appendChild(buttonContainerDiv);
    columnDiv.appendChild(topMenuDiv);
  
    const secondRowDiv = document.createElement('div');
    secondRowDiv.className = 'row';
  
    const textColumnDiv = document.createElement('div');
    textColumnDiv.className = 'row';

      for (let i = 1; i <= 5; i++) {
        const container = document.createElement("div")
        container.className = "column"
          const file = document.createElement("div")
          const fileImg = document.createElement("img")
          fileImg.src = "./appIcons/folder.png"
          const p = document.createElement("p")
          const text = document.createTextNode(`${projectsFiles[i].name}`)
          p.append(text)
          file.appendChild(fileImg)
          file.appendChild(p)
        container.appendChild(file)
        textColumnDiv.appendChild(container)
      }

    secondRowDiv.appendChild(textColumnDiv);
  
  columnDiv.appendChild(secondRowDiv);
  
  const resizerDiv = document.createElement('div');
  resizerDiv.className = 'resizer';
  columnDiv.appendChild(resizerDiv);
  page.appendChild(columnDiv);
  document.body.appendChild(page);
 

  return { element, page, close };
}

export function ProjectsClicked() {
  const projectsFullElement = document.querySelector("#projects-full");
  projectsFullElement.style.display = "flex";
}