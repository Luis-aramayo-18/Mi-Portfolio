function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburguer-icon');

    menu.classList.toggle('open')
    icon.classList.toggle('open')
}

function descargarCV() {
    const url = '../assets/curriculumVitaeMe.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'AramayoLuisCV.pdf');
    link.click();
  }

function openTab(tabName) {
    let i, tabContent, tabLinks;
    
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    
    tabLinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("active-link");
    }
    
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active-link");
  }