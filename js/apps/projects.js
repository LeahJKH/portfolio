import { projectsFiles } from "../SmallLogic/projectsFiles.js";
import { topCreator } from "./templates/TopMenu.js";

export function setupProjects() {
  //top part of page
  const { columnDiv, closeButton } = topCreator("Projects", "./appIcons/folder.png", "Folder");
  //top part of page


    const mainContent = document.createElement('div');
    mainContent.className = 'grid-folder';
  
      for (let i = 1; i <= 11; i++) {
        
          const fileLink = document.createElement("a")
          const fileImg = document.createElement("img")
          fileLink.href = `${projectsFiles[i].link}`
          fileLink.target = "_Blank"
          fileLink.className = "file-style-link row center"
          fileImg.src = "./appIcons/folder.png"
          fileImg.className = "folder-img"
          const p = document.createElement("p")
          const text = document.createTextNode(`${projectsFiles[i].name}`)
          p.append(text)
          fileLink.appendChild(fileImg)
          fileLink.appendChild(p)
         
     
        mainContent.appendChild(fileLink)
      }

  
  
  columnDiv.appendChild(mainContent);
  
  const resizerDiv = document.createElement('div');
  resizerDiv.className = 'resizer';
  const element = document.createElement("div");
  element.classList.add("app");

  const img = document.createElement("img");
  const p = document.createElement("p");
  const txt = document.createTextNode(`projects`);

  p.appendChild(txt);
  img.src = "./appIcons/folder.png";
  img.setAttribute("projects-file", "ID");
  element.appendChild(img);
  element.appendChild(p);

  const page = document.createElement('div');
  page.id = 'projects-full';  
  columnDiv.appendChild(resizerDiv);
  page.appendChild(columnDiv);
  document.body.appendChild(page);
 

  return { element, page, close: closeButton };
}

export function ProjectsClicked() {
  const projectsFullElement = document.querySelector("#projects-full");
  projectsFullElement.style.display = "flex";
}