export function setupCV() {
    const element = document.createElement("div");
    element.classList.add("app");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const txt = document.createTextNode("CV.docx");
    p.appendChild(txt);
    img.src = "./app-icons/wordfile.png";
    img.setAttribute("cv-file", "ID"); 
    element.appendChild(img);
    element.appendChild(p);
  
    const page = document.createElement("div");
    page.id = "cv-full";
    page.className = "resizable";
    page.style.display = "none";
  
   
    
const columnDiv = document.createElement('div');
columnDiv.className = 'column full-width';
  const topMenuDiv = document.createElement('div');
  topMenuDiv.className = 'top-menu draggable full-width';
    const topRowDiv = document.createElement('div');
    topRowDiv.className = 'row';

    const topImg = document.createElement('img');
    topImg.className = 'top-menu-pic';
    topImg.src = "./app-icons/wordfile.png"
    topRowDiv.appendChild(topImg);

    const topH4 = document.createElement('h4');
    topH4.textContent = 'CV';
    topRowDiv.appendChild(topH4);

  topMenuDiv.appendChild(topRowDiv);

  const buttonContainerDiv = document.createElement('div');
  const minimizeButton = document.createElement('button');
  minimizeButton.className = 'top-btns-style';
  minimizeButton.textContent = '-';

  const maximizeButton = document.createElement('button');
  maximizeButton.className = 'top-btns-style';
  maximizeButton.textContent = '[]';

  const close = document.createElement("button");

  close.className = 'closeX';
  close.textContent = "X";

  buttonContainerDiv.appendChild(minimizeButton);
  buttonContainerDiv.appendChild(maximizeButton);
  buttonContainerDiv.appendChild(close);
  topMenuDiv.appendChild(buttonContainerDiv);
  columnDiv.appendChild(topMenuDiv);

  const secondRowDiv = document.createElement('div');
  secondRowDiv.className = 'row';

  const profileImg = document.createElement('img');
  profileImg.src = './images/pfp.jpg';
  profileImg.alt = '';
  profileImg.id = 'cv-photo';
  secondRowDiv.appendChild(profileImg);

  const textColumnDiv = document.createElement('div');
  textColumnDiv.className = 'column';

  const heading = document.createElement('h1');
  heading.textContent = 'This is the cv';
  textColumnDiv.appendChild(heading);

  const namePara = document.createElement('p');
  namePara.textContent = 'navn: Leah Yoimiya Johansen';
  textColumnDiv.appendChild(namePara);

  const birthdatePara = document.createElement('p');
  birthdatePara.textContent = 'fødselsdato: 23.02.03';
  textColumnDiv.appendChild(birthdatePara);

  const descriptionPara = document.createElement('p');
  descriptionPara.textContent = 'jeg er en hyppig programerer og jeg elsker å snakke med folk. jeg har jobbet innen barn og ungdom men det er programering jeg brenner for';
  textColumnDiv.appendChild(descriptionPara);

  const numberPara = document.createElement('p');
  numberPara.textContent = 'nummer: 91527159';
  textColumnDiv.appendChild(numberPara);

  const emailPara = document.createElement('p');
  emailPara.textContent = 'email: jobbjohansen@gmail.com';
  textColumnDiv.appendChild(emailPara);

  secondRowDiv.appendChild(textColumnDiv);

columnDiv.appendChild(secondRowDiv);

const resizerDiv = document.createElement('div');
resizerDiv.className = 'resizer';
columnDiv.appendChild(resizerDiv);
page.appendChild(columnDiv);

document.body.appendChild(page);
  
    return { element, page, close };
  }
  
  export function CvClicked() {
    const cvFullElement = document.querySelector("#cv-full");
    cvFullElement.style.display = "flex";
  }
