const hamburguerMenu = document.querySelector('.hamburguer-icon');

hamburguerMenu.onclick = function(){
  const closeButton = document.querySelector('.close-icon');
  const nav = document.querySelector('nav');
  const flags = document.querySelector('#flags');
  const header = document.querySelector('header');
  
  header.style.boxShadow = '0px -5px 6px rgb(255, 255, 255)';
  closeButton.style.display = 'flex';
  flags.style.display = 'flex';
  nav.style.display = 'flex';
  hamburguerMenu.style.display = 'none';
}

const closeHamburguerMenu = document.querySelector('.close-icon');

closeHamburguerMenu.onclick = function(){
  const flags = document.querySelector('#flags');
  const nav = document.querySelector('nav');
  const header = document.querySelector('header');
  const hamburguerMenu = document.querySelector('.hamburguer-icon');

  flags.style.display = 'none';
  header.style.boxShadow = '';
  header.style.display = '';
  nav.style.display = 'none';
  hamburguerMenu.style.display = 'flex';
  closeHamburguerMenu.style.display = 'none';
}

window.addEventListener('resize', ()=>{
  const widthScreen = window.innerWidth;
  const header = document.querySelector('header');
  const flags = document.querySelector('#flags');
  const nav = document.querySelector('nav');
  const carousel = document.querySelector('.carousel')

 if(widthScreen > 576){
    header.style.display = 'flex';
    hamburguerMenu.style.display = 'none';
    closeHamburguerMenu.style.display = 'none';
    flags.style.display = 'flex';
    nav.style.display = 'flex';
    carousel.style.transform = 'translateX(0%)'
  } else {
    hamburguerMenu.style.display = 'flex';
    flags.style.display = 'none';
    nav.style.display = 'none';
    closeHamburguerMenu.style.display = 'none';
  }
})