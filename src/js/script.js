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
  const iconGit = document.querySelector('.icon-git-technologies')
  const iconGitHub = document.querySelector('.icon-gitHub-technologies')

  

  if (document.body.classList.contains('dark-theme')) {
    lightMode.style.color = 'rgb(255, 242, 0)';
    lightMode.style.transform = 'scale(1.3)';
    iconGit.style.color = '#000000';
    iconGitHub.style.color = '#000000';
  } else {
    lightMode.style.color = 'white';
    lightMode.style.transform = '';
    iconGit.style.color = '';
    iconGitHub.style.color = '';
  }
})

const hamburguerMenu = document.querySelector('.hamburguer-icon');

hamburguerMenu.onclick = function(){
  const closeButton = document.querySelector('.close-icon');
  const nav = document.querySelector('nav');
  const flags = document.querySelector('#flags');
  const header = document.querySelector('header');
  
  header.style.boxShadow = '0px -5px 6px rgb(255, 255, 255)';
  closeButton.style.display = 'block';
  flags.style.display = 'flex';
  nav.style.display = 'flex';
  hamburguerMenu.style.display = 'none';
}

const closeHamburguerMenu = document.querySelector('.close-icon')

closeHamburguerMenu.onclick = function(){
  const flags = document.querySelector('#flags');
  const nav = document.querySelector('nav');
  const header = document.querySelector('header');
  const hamburguerMenu = document.querySelector('.hamburguer-icon');

  flags.style.display = 'none';
  header.style.boxShadow = '';
  nav.style.display = 'none';
  hamburguerMenu.style.display = 'block';
  closeHamburguerMenu.style.display = 'none';
}

ScrollReveal({
  resizeTo: true,
  distance: '80px',
  duration: 1500,
  delay: 200
});

ScrollReveal().reveal('.row, .div-text-experience, .services-header', {origin : 'top'});
ScrollReveal().reveal('.container-contact-inf, .project-col-2, .skills-col-2', {origin : 'bottom'});
ScrollReveal().reveal('.card-accordion, .carousel, .container-inf, .hr-section1, .projects-sub-titile, .projects-sub-title2, .project-col-1, .skills-col-1', {origin : 'left'});
ScrollReveal().reveal('.bxs-up-arrow-square, .header-contact, .hr-section2, .title-projects, .project-col-3, .skills-col-3', {origin : 'right'});


const carousel = document.querySelector('.carousel');
const nextButton = document.getElementById('next-button');
const backButton = document.getElementById('prev-button');
let position = 0;

function updateCarousel() {
  const operation = position * -33.3333;
  carousel.style.transform = `translateX(${operation}%)`;
};

function nextSlide() {
  if (position < 2) { // Verificamos que no hayamos llegado al límite
    position++;
    updateCarousel();
  }
};

function prevSlide() {
  if (position > 0) { // Verificamos que no estemos en la primera posición
    position--;
    updateCarousel();
  }
};

nextButton.addEventListener('click', nextSlide);
backButton.addEventListener('click', prevSlide);


// let currentIndex = 0;

// function nextSlide() {
//   currentIndex++;
//   if (currentIndex >= carousel.children.length) {
//     currentIndex = 0;
//   }
//   updateSlide();
// };

// function prevSlide() {
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = carousel.children.length - 1;
//   }
//   updateSlide();
// };

// function updateSlide() {
//   for (let i = 0; i < carousel.children.length; i++) {
//     carousel.children[i].style.display = 'none';
//     carousel.children[i].classList.add('fade-out');
//     carousel.children[i].classList.remove('fade-in');
//   }
//   carousel.children[currentIndex].style.display = 'block';
//   carousel.children[currentIndex].classList.remove('fade-out');
//   carousel.children[currentIndex].classList.add('fade-in');
// }

// prevButton.addEventListener('click', prevSlide);
// nextButton.addEventListener('click', nextSlide);

// updateSlide();