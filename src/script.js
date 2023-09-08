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

  function openModal(){
    const body = document.body
    const navBar = document.querySelector('#desktop-nav');
    const cardServices = document.querySelector('.card');
    const modal = document.querySelector('.modal');

    cardServices.classList.add('disabled-hover');
    body.style.overflow = 'hidden'
    navBar.style.display = 'none'
    modal.style.display = 'block'
  }

  function closeModale(){
    const body = document.body
    const navBar = document.querySelector('#desktop-nav');
    const cardServices = document.querySelector('.card');
    const modal = document.querySelector('.modal');

    cardServices.classList.remove('disabled-hover')
    body.style.overflow = ''
    navBar.style.display = 'flex'
    modal.style.display = 'none'
  }