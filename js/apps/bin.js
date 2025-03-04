import { topCreator } from "./templates/TopMenu.js";

export function setupBin() {
  const { columnDiv, closeButton } = topCreator(
    "Bin",
    "./appIcons/bin.png",
    "Bin"
  );

  const mainContent = document.createElement("div");
  mainContent.className = "row";

  const textColumnDiv = document.createElement("div");
  textColumnDiv.className = "column";

  mainContent.appendChild(textColumnDiv);
  columnDiv.appendChild(mainContent);

  const resizerDiv = document.createElement("div");
  resizerDiv.className = "resizer";

  const element = document.createElement("div");
  element.classList.add("app");

  columnDiv.appendChild(resizerDiv);
  const page = document.createElement("div");
  page.id = "bin-full";
  page.appendChild(columnDiv);

  const img = document.createElement("img");
  const p = document.createElement("p");
  const txt = document.createTextNode(`Bin`);

  p.appendChild(txt);
  img.src = "./appIcons/bin.png";
  img.setAttribute("bin-file", "ID");
  element.appendChild(img);
  element.appendChild(p);

  return { element, page, close: closeButton };
}

export function binClicked() {
  const binFullElement = document.querySelector("#bin-full");
  binFullElement.style.display = "flex";
}
