// const servicesModal = [
//     { 
//       id: 'desarrollo-web',
//       title: 'Desarrollo Web',
//       li1: 'Diseño personalizado',
//       li2: 'Integración de redes sociales',
//       li3: 'Optimización de Velocidad',
//       li4: 'Compatibilidad Multilingual',
//       li5: 'Branding y Posicionamiento'
//     },
//     {
//       id: 'diseño-ui-ux',
//       title: 'Diseño UI-UX',
//       li1: 'Experiencia de usuario intuitiva',
//       li2: 'Diseño Responsivo',
//       li3: 'Estilo minimalista',
//       li4: 'componentes interactivo para el usuario',
//       li5: 'Accesibilidad Web'
//     },
//     {
//       id: 'desarrollo-eccommerse',
//       title: 'Desarrollo E-ccommerce',
//       li1: 'Experiencia de Compra Intuitiva',
//       li2: 'Personalización de Productos',
//       li3: 'Seguridad y Confianza',
//       li4: 'Mantenimiento Continuo',
//       li5: 'Escalabilidad'
//     },
//   ]

  const openModal = async (modalId, language) => {
    const requestJson = await fetch(`../../locales/${language}.json`);
    const texts = await requestJson.json();
    
    if(modalId){
      const body = document.body
      const modal = document.querySelector(`.modal.${modalId}`);
      const cardsToStopTransform = document.querySelectorAll('.card')
      const navBar = document.querySelector('#desktop-nav')
  
      cardsToStopTransform.forEach(card => {
        card.classList.add('disabled-hover');
      });

      for(const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML=texts[section][value];
    };
  
      body.style.overflow = 'hidden'
      modal.style.display = 'block'
      navBar.style.display = 'none'
    }
  };

  const linkModals = document.querySelectorAll('.link-seemore');
  
  linkModals.forEach((linkModal) => {
    linkModal.addEventListener('click', (e) => {
      const modalId = e.target.dataset.modalTarget;
      const language = selectedLanguage

      openModal(modalId,language);
    });
  });
  
    // if(modalData){
    //   const body = document.body
    //   const modal = document.querySelector(`.modal.${modalId}`);
    //   const cardsToStopTransform = document.querySelectorAll('.card')
    //   const navBar = document.querySelector('#desktop-nav')
    //   const modalTitle = modal.querySelector('.modal-title');
    //   const modalContent1 = modal.querySelector('.modal-content-1');
    //   const modalContent2 = modal.querySelector('.modal-content-2');
    //   const modalContent3 = modal.querySelector('.modal-content-3');
    //   const modalContent4 = modal.querySelector('.modal-content-4');
    //   const modalContent5 = modal.querySelector('.modal-content-5');
  
    //   cardsToStopTransform.forEach(card => {
    //     card.classList.add('disabled-hover');
    //   });
      
    //   modalTitle.textContent = modalData.title;
    //   modalContent1.textContent = modalData.li1;
    //   modalContent2.textContent = modalData.li2;
    //   modalContent3.textContent = modalData.li3;
    //   modalContent4.textContent = modalData.li4;
    //   modalContent5.textContent = modalData.li5;
  
    //   body.style.overflow = 'hidden'
    //   modal.style.display = 'block'
    //   navBar.style.display = 'none'
    // }

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