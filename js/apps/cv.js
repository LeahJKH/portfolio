
export function setupCV() {

  const element = document.createElement("div");
  element.classList.add("app");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const txt = document.createTextNode("CV.docx");
  p.appendChild(txt);
  img.src = "./appIcons/wordfile.png";
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
  topImg.src = "./appIcons/wordfile.png"
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
  
  const bgWord = document.createElement('div')
  bgWord.className = 'bg-Word';
  
  const secondRowDiv = document.createElement('div');
  secondRowDiv.className = 'row document';
  
  const profileImg = document.createElement('img');
  const textColumnDiv = document.createElement('div');
  const heading = document.createElement('h1');
  const namePara = document.createElement('p');
  const birthdatePara = document.createElement('p');
  const descriptionPara = document.createElement('p');
  const numberPara = document.createElement('p');
  const emailPara = document.createElement('p');
  fetch('./json/cv_info.json')
  .then(response => response.json())
  .then(json => {
    console.log(json);
  profileImg.src = './images/LeahFace.webp';
  profileImg.alt = '';
  profileImg.id = 'cv-photo';
  secondRowDiv.appendChild(profileImg);
  
  textColumnDiv.className = 'column';
  
  heading.textContent = 'This is the cv';
  textColumnDiv.appendChild(heading);
  
          namePara.textContent = `navn: ${json.name}`;
          textColumnDiv.appendChild(namePara);
          
          birthdatePara.textContent = `fødselsdato: ${json.DOB}`;
          textColumnDiv.appendChild(birthdatePara);
          
          descriptionPara.textContent = `${json.mainTxt}`;
          textColumnDiv.appendChild(descriptionPara);
          
          numberPara.textContent = `nummer: ${json.number}`;
          textColumnDiv.appendChild(numberPara);
          
          emailPara.textContent = `email: ${json.email}`;
          textColumnDiv.appendChild(emailPara);
        })
        .catch(error => console.error('Error loading JSON:', error));
          
          secondRowDiv.appendChild(textColumnDiv);
          bgWord.appendChild(secondRowDiv)
          columnDiv.appendChild(bgWord);
          
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
