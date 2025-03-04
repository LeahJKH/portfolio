export function bottomLogic(Fillbot, closeIt) {
  let middleBar = document.querySelector("#middle-stuff");
  if (!middleBar) {
    console.error("Element #middle-stuff not found");
    return;
  }

  let existingButton = document.querySelector(
    `.mainBottomBtn[data-type="${Fillbot}"]`
  );

  if (closeIt === "close") {
    if (existingButton) {
      existingButton.remove();
    } else {
      console.log(Fillbot);
      console.warn(`No existing button found for ${Fillbot} to remove.`);
    }
    return;
  }

  if (existingButton) return;

  let div = document.createElement("div");
  div.classList.add("mainBottomBtn");
  div.setAttribute("data-type", Fillbot);

  let p = document.createElement("p");

  switch (Fillbot) {
    case "showCv":
      p.textContent = "CV";
      break;
    case "showBinary":
      p.textContent = "Binary";
      break;
    case "showProjects":
      p.textContent = "Projects";
      break;
    case "showTrash":
      p.textContent = "Trash";
      break;
    default:
      console.warn("Unknown Fillbot value:", Fillbot);
      return;
  }

  div.appendChild(p);
  middleBar.appendChild(div);
}
