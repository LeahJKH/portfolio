export function setupBin() {
  const element = document.createElement("div");
  element.classList.add("app");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const txt = document.createTextNode("Bin");
  p.appendChild(txt);
  img.src = "./app-icons/bin.png";
  img.setAttribute("bin-file", "ID");
  element.appendChild(img);
  element.appendChild(p);

  const page = document.createElement("div");
  page.id = "bin-full";
  page.className = "resizable";
  page.style.display = "none";

  const close = document.createElement("button");
  close.id = "close-bin";
  close.textContent = "X";

  page.innerHTML = `
    <div class="column">
      <div class="top-menu draggable">
        <div class="row">
          <img src="./app-icons/bin.png" alt="" class="top-menu-pic" />
          <h4>Bin</h4>
        </div>
        <div>
          <button class="top-btns-style">-</button>
          <button class="top-btns-style">[]</button>
        </div>
      </div>
      <div class="row">
        <!-- Your bin content here -->
      </div>
    </div>
    <div class="resizer"></div>
  `;
  page.appendChild(close);
  document.body.appendChild(page);

  return { element, page, close };
}

export function binClicked() {
  const binFullElement = document.querySelector("#bin-full");
  binFullElement.style.display = "flex";
}