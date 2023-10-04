const changeLanguage = async language=>{
    const requestJson = await fetch(`../../locales/${language}.json`);
    const texts = await requestJson.json();

    selectedLanguage = language;

    for(const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML=texts[section][value];
    };
};

// ------VARIABLE GLOBAL PARA SABER QUE IDIOMA ESTA SELECCIONADO-----
let selectedLanguage = "es"; 

const flagElements = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");
const flagItems = document.querySelectorAll(".flags-item");

flagElements.addEventListener('click',e=>{
  const language = e.target.parentElement.dataset.language;
  
  flagItems.forEach((flagItem) => {
      const imgFlag = flagItem.querySelector('img')
      if(imgFlag.classList.contains('selected-flag')){
        imgFlag.classList.remove('selected-flag')
      } else{
       imgFlag.classList.add('selected-flag')
      }
      });
  changeLanguage(language);
});