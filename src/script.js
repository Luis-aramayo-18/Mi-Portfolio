// function toggleMenu(){
//     const menu = document.querySelector('.menu-links');
//     const icon = document.querySelector('.hamburguer-icon');

//     menu.classList.toggle('open')
//     icon.classList.toggle('open')
// }

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

  const barraDeProgreso = [
    {
      claseProgress: '.html-progress',
      clasePorcentaje: '.html-percentage',
      progreso: 80 // Valor de progreso para HTML
    },
    {
      claseProgress: '.css-progress',
      clasePorcentaje: '.css-percentage',
      progreso: 65 // Valor de progreso para HTML
    },{
      claseProgress: '.js-progress',
      clasePorcentaje: '.js-percentage',
      progreso: 60 // Valor de progreso para HTML
    },
    {
      claseProgress: '.react-progress',
      clasePorcentaje: '.react-percentage',
      progreso: 70 // Valor de progreso para HTML
    },
    {
      claseProgress: '.bootstrap-progress',
      clasePorcentaje: '.bootstrap-percentage',
      progreso: 70 // Valor de progreso para HTML
    },
    {
      claseProgress: '.mysql-progress',
      clasePorcentaje: '.mysql-percentage',
      progreso: 48 // Valor de progreso para HTML
    },
    {
      claseProgress: '.node-progress',
      clasePorcentaje: '.node-percentage',
      progreso: 40 // Valor de progreso para HTML
    },
    {
      claseProgress: '.mongo-progress',
      clasePorcentaje: '.mongo-percentage',
      progreso: 42 // Valor de progreso para HTML
    },
    {
      claseProgress: '.express-progress',
      clasePorcentaje: '.express-percentage',
      progreso: 30 // Valor de progreso para HTML
    },
    {
      claseProgress: '.github-progress',
      clasePorcentaje: '.github-percentage',
      progreso: 68 // Valor de progreso para HTML
    }
  ];

  barraDeProgreso.forEach(barra => {
    const barraDeProgreso = document.querySelector(barra.claseProgress);
    const porcentajeTexto = document.querySelector(barra.clasePorcentaje);
  
    barraDeProgreso.style.width = barra.progreso + '%';
    porcentajeTexto.textContent = barra.progreso + '%';
  });

  const ringProgress = [
    {
      claseProgress: '.creativity-progress',
      clasePorcentaje: '.creativity-porcentage',
      progreso: 47 // Valor de progreso para HTML
    },
    {
      claseProgress: '.comunication-progress',
      clasePorcentaje: '.comunication-porcentage',
      progreso: 68 // Valor de progreso para HTML
    },
    {
      claseProgress: '.problemresolution-progress',
      clasePorcentaje: '.problemresolution-porcentage',
      progreso: 73 // Valor de progreso para HTML
    },
    {
      claseProgress: '.teamwork-progress',
      clasePorcentaje: '.teamwork-porcentage',
      progreso: 100 // Valor de progreso para HTML
    },
    {
      claseProgress: '.autodidact-progress',
      clasePorcentaje: '.autodidact-porcentage',
      progreso: 91 // Valor de progreso para HTML
    },
    {
      claseProgress: '.agilemethod-progress',
      clasePorcentaje: '.agilemethod-porcentage',
      progreso: 69 // Valor de progreso para HTML
    }
  ];

  ringProgress.forEach(ring => {
    const ringProgress = document.querySelector(ring.claseProgress);
    const ringPorcentage = document.querySelector(ring.clasePorcentaje);
  
    const circunferencia = parseFloat(getComputedStyle(ringProgress).getPropertyValue('stroke-dasharray'));
    const progress = (circunferencia * (100 - ring.progreso)) / 100;

    ringProgress.style.strokeDashoffset = progress;

    ringPorcentage.textContent = ring.progreso + '%';
  });

  const servicesModal = [
    { 
      id: 'desarrollo-web',
      title: 'Desarrollo Web',
      li1: 'Diseño personalizado',
      li2: 'Integracion de redes sociales',
      li3: 'Optimización de Velocidad',
      li4: 'Compatibilidad Multilingüe',
      li5: 'Branding y Posicionamiento'
    },
    {
      id: 'diseño-ui-ux',
      title: 'Diseño UI-UX',
      li1: 'Experiencia de usuario intuitiva',
      li2: 'Diseño Responsivo',
      li3: 'Estilo minimalista',
      li4: 'componentes interactivo para el usuario',
      li5: 'Accesibilidad Web'
    },
    {
      id: 'desarrollo-eccommerse',
      title: 'Desarrollo E-ccommerce',
      li1: 'Experiencia de Compra Intuitiva',
      li2: 'Personalización de Productos',
      li3: 'Seguridad y Confianza',
      li4: 'Mantenimiento Continuo',
      li5: 'Escalabilidad'
    },
  ]

  function openModal(modalId){
    const modalData = servicesModal.find(modal => modal.id === modalId)

    if(modalData){
      const body = document.body
      const modal = document.querySelector(`.modal.${modalId}`);
      const cardsToStopTransform = document.querySelectorAll('.card')
      const navBar = document.querySelector('#desktop-nav')
      const modalTitle = modal.querySelector('.modal-title');
      const modalContent1 = modal.querySelector('.modal-content-1');
      const modalContent2 = modal.querySelector('.modal-content-2');
      const modalContent3 = modal.querySelector('.modal-content-3');
      const modalContent4 = modal.querySelector('.modal-content-4');
      const modalContent5 = modal.querySelector('.modal-content-5');

      cardsToStopTransform.forEach(card => {
        card.classList.add('disabled-hover');
      });
      
      modalTitle.textContent = modalData.title;
      modalContent1.textContent = modalData.li1;
      modalContent2.textContent = modalData.li2;
      modalContent3.textContent = modalData.li3;
      modalContent4.textContent = modalData.li4;
      modalContent5.textContent = modalData.li5;

      body.style.overflow = 'hidden'
      modal.style.display = 'block'
      navBar.style.display = 'none'
    }
  }

  function closeModal(){
    const modal = document.querySelectorAll('.modal')
    const cardsToStopTransform = document.querySelectorAll('.card')
    const navBar = document.querySelector('#desktop-nav')
    const body = document.body

    modal.forEach(element => {
      element.style.display = 'none'
    })

    cardsToStopTransform.forEach(element => {
      element.classList.remove('disabled-hover')
    })

    navBar.style.display = 'flex'
    body.style.overflow = ''
  }

  ScrollReveal({
    resizeTo: true,
    distance: '80px',
    duration: 1500,
    delay: 200
  });

  ScrollReveal().reveal('', {origin : 'top'});
  ScrollReveal().reveal('', {origin : 'bottom'});
  ScrollReveal().reveal('', {origin : 'left'});
  ScrollReveal().reveal('', {origin : 'right'});

  function arrowUp() {
    const profile = document.querySelector('#profile');
  
    if (profile) {
      profile.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

const btn = document.getElementById('button');
const name = document.getElementById('name');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const confirmation = document.querySelector('.confirmation-mg')

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    function mostrarMensajeDeConfirmacion() {
      const confirmation = document.querySelector('.confirmation-mg')
      confirmation.style.display = 'block';
  
      // Ocultar el mensaje después de 3 segundos (3000 milisegundos)
      setTimeout(function() {
          confirmation.style.display = 'none';
      }, 3000); // 3000 ms = 3 segundos
  }

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_wt79ny4';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviar';
        mostrarMensajeDeConfirmacion();
        name.value = '';
        email.value = '';
        asunto.value = '';
        mensaje.value = '';
      }, (err) => {
        btn.value = 'Enviar';
        alert(JSON.stringify(err));
      });
  });

  const darkTheme = document.querySelector('.dark-mode')

  darkTheme.onclick = function (){
    document.body.classList.toggle('dark-theme');
    // const profile = document.querySelector('#about-me');

    // if (profile) {
    //   profile.scrollIntoView({
    //     behavior: 'smooth'
    //   });
    // }
  }