export function setupCV() {
    const element = document.createElement("div");
    element.classList.add("app");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const txt = document.createTextNode("CV.docx");
    p.appendChild(txt);
    img.src = "./app-icons/wordfile.png";
    img.setAttribute("cv-file", "ID"); // Assuming you want to set some ID here
    element.appendChild(img);
    element.appendChild(p);
  
    const page = document.createElement("div");
    page.id = "cv-full";
    page.className = "resizable";
    page.style.display = "none";
  
    const close = document.createElement("button");
    close.id = "close-cv";
    close.textContent = "X";
    
    page.innerHTML = `
    <div class="column">
      <div class="top-menu draggable">
        <div class="row">
          <img src="" alt="" class="top-menu-pic" />
          <h4>Projects</h4>
        </div>
        <div>
          <button class="top-btns-style">-</button>
          <button class="top-btns-style">[]</button>
        </div>
      </div>
      <div class="row">
        
      </div>
    </div>
    <div class="resizer"></div>
  `;
  page.appendChild(close);
    // Append the page element to the body or some container
    document.body.appendChild(page);
  
    return { element, page, close };
  }
  
  export function CvClicked() {
    const cvFullElement = document.querySelector("#cv-full");
    cvFullElement.style.display = "flex";
  }

// export function setupCV() {
//   const element = document.createElement("div");
//   element.classList.add("app");
//   const img = document.createElement("img");
//   const p = document.createElement("p");
//   const txt = document.createTextNode("CV.docx");
//   p.appendChild(txt);
//   img.src = "./app-icons/wordfile.png";
//   img.setAttribute("cv-file", "ID"); // Assuming you want to set some ID here
//   element.appendChild(img);
//   element.appendChild(p);

//   const page = document.createElement("div");
//   page.id = "cv-full";
//   page.className = "resizable";
//   page.style.display = "none";

//   const close = document.createElement("button");
//   close.id = "close-cv";
//   close.textContent = "X";

//   // Assuming you append the page element to the body or some container
//   document.body.appendChild(page);

//   return { element, page, close };
// }

// export function CvClicked() {
//   const cvFullElement = document.querySelector("#cv-full");
//   cvFullElement.style.display = "flex";
// }