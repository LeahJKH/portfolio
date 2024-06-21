export function setupProjects() {
  const element = document.createElement("div");
  element.classList.add("app");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const txt = document.createTextNode("Projects");
  p.appendChild(txt);
  img.src = "./app-icons/folder.png";
  img.setAttribute("projects-file", "ID");
  element.appendChild(img);
  element.appendChild(p);

  const page = document.createElement("div");
  page.id = "projects-full";
  page.className = "resizable";
  page.style.display = "none";

  const close = document.createElement("button");
  close.id = "close-projects";
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
        <!-- Your project content here -->
      </div>
    </div>
    <div class="resizer"></div>
  `;
  page.appendChild(close);
  document.body.appendChild(page);

  return { element, page, close };
}

export function ProjectsClicked() {
  const projectsFullElement = document.querySelector("#projects-full");
  projectsFullElement.style.display = "flex";
}