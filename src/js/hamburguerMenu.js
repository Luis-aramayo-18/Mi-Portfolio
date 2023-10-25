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

const closeHamburguerMenu = document.querySelector('.close-icon')

closeHamburguerMenu.onclick = function(){
  const flags = document.querySelector('#flags');
  const nav = document.querySelector('nav');
  const header = document.querySelector('header');
  const hamburguerMenu = document.querySelector('.hamburguer-icon');

  flags.style.display = 'none';
  header.style.boxShadow = '';
  nav.style.display = 'none';
  hamburguerMenu.style.display = 'flex';
  closeHamburguerMenu.style.display = 'none';
}