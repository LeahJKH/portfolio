import { topCreator } from "./templates/TopMenu.js";
import wordContent from "../filebgCreator/word.js";

export function setupCV() {
  const { columnDiv, closeButton } = topCreator("Cv.docx", "./appIcons/wordfile.png", "cv");

  
  
  const resizerDiv = document.createElement('div');
  resizerDiv.className = 'resizer';
  
  const element = document.createElement("div");
  element.classList.add("app");
  
  const img = document.createElement("img");
  const p = document.createElement("p");
  const txt = document.createTextNode(`cv.docx`);
  
  p.appendChild(txt);
  img.src = "./appIcons/wordfile.png";
  img.setAttribute("cv-file", "ID");
  element.appendChild(img);
  element.appendChild(p);
  
  columnDiv.appendChild(resizerDiv);
  
  const page = document.createElement('div');
  page.id = 'cv-full';  
  columnDiv.appendChild(wordContent());
  page.appendChild(columnDiv);
  document.body.appendChild(page);
  
  return { element, page, close: closeButton };
}

export function CvClicked() {
  const cvFullElement = document.querySelector("#cv-full");
  cvFullElement.style.display = "flex";
}
