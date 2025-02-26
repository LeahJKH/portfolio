import { topCreator } from "./templates/TopMenu.js";
import wordContent from "../filebgCreator/word.js";
export function setupCV() {
  const { columnDiv, closeButton } = topCreator("Cv.docx", "./appIcons/wordfile.png", "cv");


  
  
  const bgWord = document.createElement('div')
  bgWord.className = 'bg-Word';
  
  const mainContent = document.createElement('div');
  mainContent.className = 'row document';
  
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
  mainContent.appendChild(profileImg);
  
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
          
          mainContent.appendChild(textColumnDiv);
          bgWord.appendChild(mainContent)
          columnDiv.appendChild(bgWord);
          
          const resizerDiv = document.createElement('div');
          resizerDiv.className = 'resizer';

          const element = document.createElement("div");
          element.classList.add("app");
      
          const img = document.createElement("img");
          const p = document.createElement("p");
          const txt = document.createTextNode(`cv.docx`);
      
          p.appendChild(txt);
          img.src = "./appIcons/wordfile.png";
          img.setAttribute("cv-file", "ID");
          element.appendChild(img);
          element.appendChild(p);

          columnDiv.appendChild(resizerDiv);
          const page = document.createElement('div');
  page.id = 'cv-full';  
  page.appendChild(columnDiv);
          page.appendChild(wordContent())
          document.body.appendChild(page);
          
          return { element, page, close: closeButton };
       
        }
        
        export function CvClicked() {
          const cvFullElement = document.querySelector("#cv-full");
    cvFullElement.style.display = "flex";
  }
