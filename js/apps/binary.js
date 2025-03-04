import { topCreator } from "./templates/TopMenu.js";

export function setupBinary() {
  const { columnDiv, closeButton } = topCreator(
    "binary.txt",
    "./appIcons/notepad.png",
    "Binary"
  );

  const mainContent = document.createElement("div");
  mainContent.className = "row";

  const binaryPara = document.createElement("p");
  binaryPara.id = "binary-code";
  binaryPara.innerHTML = `
        01001000 01100101 01111001 00100000 01111001 01101111 01110101 00100000 01100110
        01101111 01110101 01101110 01100100 00100000 01110100 01101000 01100101 00100000
        01100010 01101001 01101110 01100001 01110010 01111001 00100000 01100011 01101111
        01100100 01100101 00101110 00100000 01110100 01101000 01100101 00100000 01110000
        01100001 01110011 01110011 01110111 01101111 01110010 01100100 00100000 01101001
        01110011 00100000 00111000 00110101 00110111 00110010 00100000 01100111 01101111
        01101111 01101100 01110101 01100011 01101011 00100001
    `;

  mainContent.appendChild(binaryPara);

  columnDiv.appendChild(mainContent);

  const resizerDiv = document.createElement("div");
  resizerDiv.className = "resizer";
  columnDiv.appendChild(resizerDiv);

  const page = document.createElement("div");
  page.id = "binary-full";
  page.appendChild(columnDiv);

  const element = document.createElement("div");
  element.classList.add("app");

  const img = document.createElement("img");
  const p = document.createElement("p");
  const txt = document.createTextNode(`binary.txt`);

  p.appendChild(txt);
  img.src = "./appIcons/notepad.png";
  img.setAttribute("binary-file", "ID");
  element.appendChild(img);
  element.appendChild(p);

  return { element, page, close: closeButton };
}

export function binaryClicked() {
  const binaryFullElement = document.querySelector("#binary-full");
  binaryFullElement.style.display = "flex";
}
