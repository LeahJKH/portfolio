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

  const columnDiv = document.createElement('div');
  columnDiv.className = 'column';
    const topMenuDiv = document.createElement('div');
    topMenuDiv.className = 'top-menu draggable';
      const topRowDiv = document.createElement('div');
      topRowDiv.className = 'row';
  
      const topImg = document.createElement('img');
      topImg.className = 'top-menu-pic';
      topImg.src = "./app-icons/bin.png"
      topRowDiv.appendChild(topImg);
  
      const topH4 = document.createElement('h4');
      topH4.textContent = 'Bin';
      topRowDiv.appendChild(topH4);
  
    topMenuDiv.appendChild(topRowDiv);
  
    const buttonContainerDiv = document.createElement('div');
      const minimizeButton = document.createElement('button');
      minimizeButton.className = 'top-btns-style';
      minimizeButton.textContent = '-';
  
      const maximizeButton = document.createElement('button');
      maximizeButton.className = 'top-btns-style';
      maximizeButton.textContent = '[]';
  
      buttonContainerDiv.appendChild(minimizeButton);
      buttonContainerDiv.appendChild(maximizeButton);
  
    topMenuDiv.appendChild(buttonContainerDiv);
  columnDiv.appendChild(topMenuDiv);
  
    const secondRowDiv = document.createElement('div');
    secondRowDiv.className = 'row';
  
  
  
    const textColumnDiv = document.createElement('div');
    textColumnDiv.className = 'column';
  
  
    
  
    secondRowDiv.appendChild(textColumnDiv);
  
  columnDiv.appendChild(secondRowDiv);
  
  const resizerDiv = document.createElement('div');
  resizerDiv.className = 'resizer';
  columnDiv.appendChild(resizerDiv);
  page.appendChild(columnDiv);
  page.appendChild(close);
  document.body.appendChild(page);
    
  page.appendChild(close);
  document.body.appendChild(page);

  return { element, page, close };
}

export function binClicked() {
  const binFullElement = document.querySelector("#bin-full");
  binFullElement.style.display = "flex";
}