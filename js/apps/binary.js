export function setupBinary() {
  const element = document.createElement("div");
  element.classList.add("app");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const txt = document.createTextNode("Binary.txt");
  p.appendChild(txt);
  img.src = "./app-icons/notepad.png";
  img.setAttribute("binary-file", "ID");
  element.appendChild(img);
  element.appendChild(p);

  const page = document.createElement("div");
  page.id = "binary-full";
  page.className = "resizable";
  page.style.display = "none";

  const close = document.createElement("button");
  close.id = "close-binary";
  close.textContent = "X";

  page.innerHTML = `
    <div class="column">
      <div class="top-menu draggable">
        <div class="row">
          <img src="./app-icons/notepad.png" alt="" class="top-menu-pic" />
          <h4>binary.txt</h4>
        </div>
        <div>
          <button class="top-btns-style">-</button>
          <button class="top-btns-style">[]</button>
        </div>
      </div>
      <div class="row">
        <p id="binary-code">
          01001000 01100101 01111001 00100000 01111001 01101111 01110101 00100000 01100110
          01101111 01110101 01101110 01100100 00100000 01110100 01101000 01100101 00100000
          01100010 01101001 01101110 01100001 01110010 01111001 00100000 01100011 01101111
          01100100 01100101 00101110 00100000 01110100 01101000 01100101 00100000 01110000
          01100001 01110011 01110011 01110111 01101111 01110010 01100100 00100000 01101001
          01110011 00100000 00111000 00110101 00110111 00110010 00100000 01100111 01101111
          01101111 01100100 00100000 01101100 01110101 01100011 01101011 00100001
        </p>
      </div>
    </div>
    <div class="resizer"></div>
  `;
  page.appendChild(close);
  document.body.appendChild(page);

  return { element, page, close };
}

export function binaryClicked() {
  const binaryFullElement = document.querySelector("#binary-full");
  binaryFullElement.style.display = "flex";
}