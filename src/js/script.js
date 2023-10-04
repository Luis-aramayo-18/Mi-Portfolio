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

function arrowUp() {
  const profile = document.querySelector('#profile');

  if (profile) {
    profile.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

const lightMode = document.querySelector('.light-mode');

lightMode.addEventListener('click',()=>{
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    lightMode.style.color = 'rgb(255, 242, 0)';
    lightMode.style.transform = 'scale(1.3)'
  } else {
    lightMode.style.color = 'white';
    lightMode.style.transform = ''
  }
})

const hamburguerMenu = document.querySelector('.hamburguer-icon')

hamburguerMenu.onclick = function(){
  const navBar = document.querySelector('#desktop-nav')
  const header = document.querySelector('.name-header')
  const darkTheme = document.querySelector('.dark-mode')
  const menuLinks = document.querySelector('.container-links')
  const navLinks = document.querySelector('.nav-links')
  const close = document.querySelector('.close-hamburguer-menu')


  menuLinks.style.display = 'block'
  close.style.display = 'block'
  hamburguerMenu.style.display = 'none'
  header.style.display = 'none'
  darkTheme.style.display = 'none'
  navLinks.classList.add('links-modal')
}

const closeHamburguerMenu = document.querySelector('.close-hamburguer-menu')

closeHamburguerMenu.onclick = function(){
  const navBar = document.querySelector('#desktop-nav')
  const header = document.querySelector('.name-header')
  const darkTheme = document.querySelector('.dark-mode')
  const menuLinks = document.querySelector('.container-links')
  const navLinks = document.querySelector('.nav-links')

  menuLinks.style.display = 'none'
  closeHamburguerMenu.style.display = 'none'
  hamburguerMenu.style.display = 'block'
  header.style.display = 'block'
  darkTheme.style.display = 'block'
  navLinks.classList.remove('links-modal')
}

ScrollReveal({
  resizeTo: true,
  distance: '80px',
  duration: 1500,
  delay: 200
});

ScrollReveal().reveal('.row, .div-text-experience, .div-text-projects, .services-header', {origin : 'top'});
ScrollReveal().reveal('.carousel, .row-projects', {origin : 'bottom'});
ScrollReveal().reveal('.contact-col-1, .project-col-1', {origin : 'left'});
ScrollReveal().reveal('.contact-col-2, .project-col-2, .bxs-up-arrow-square', {origin : 'right'});
