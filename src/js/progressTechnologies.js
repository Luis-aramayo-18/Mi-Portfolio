  
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