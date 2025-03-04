export function docWord() {
  const mainContent = document.createElement("div");
  mainContent.className = "row document";

  const profileImg = document.createElement("img");
  const textColumnDiv = document.createElement("div");
  const heading = document.createElement("h1");
  const namePara = document.createElement("p");
  const birthdatePara = document.createElement("p");
  const descriptionPara = document.createElement("p");
  const numberPara = document.createElement("p");
  const emailPara = document.createElement("p");
  fetch("./json/cv_info.json")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      profileImg.src = "./images/LeahFace.webp";
      profileImg.alt = "";
      profileImg.id = "cv-photo";
      mainContent.appendChild(profileImg);

      textColumnDiv.className = "column";

      heading.textContent = "This is the cv";
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
    .catch((error) => console.error("Error loading JSON:", error));

  mainContent.appendChild(textColumnDiv);

  return mainContent;
}
