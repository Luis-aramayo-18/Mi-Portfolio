
  const openModal = async (modalId, language) => {
    const requestJson = await fetch(`../../locales/${language}.json`);
    const texts = await requestJson.json();
    
    if(modalId){
      const body = document.body
      const modal = document.querySelector(`.modal.${modalId}`);
      const cardsToStopTransform = document.querySelectorAll('.card');
      const navBar = document.querySelector('header');
  
      cardsToStopTransform.forEach(card => {
        card.classList.add('disabled-hover');
      });

      for(const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML=texts[section][value];
    };
  
      body.style.overflow = 'hidden';
      modal.style.display = 'block';
      navBar.style.display = 'none';
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

  function closeModal(){
    const modal = document.querySelectorAll('.modal');
    const cardsToStopTransform = document.querySelectorAll('.card');
    const body = document.body;
    const navBar = document.querySelector('header');
  
    modal.forEach(element => {
      element.style.display = 'none';
    });
  
    cardsToStopTransform.forEach(element => {
      element.classList.remove('disabled-hover');
    });
  
    body.style.overflow = '';
    navBar.style.display = 'flex';
  }


  // ------------------ACORDEÓN----------------

  const openAccordion = document.querySelectorAll('.header-accordion');

  openAccordion.forEach((item)=>{
    item.addEventListener('click', async(e)=>{
      const language = selectedLanguage;
      const cardAccordion = e.target.closest('.card-accordion');

      if (cardAccordion.classList.contains('active')){
        cardAccordion.classList.remove('active');
        item.lastElementChild.style.transform = 'rotate(0deg)';
        item.lastElementChild.style.color = '';
      } else {
        const requestJson = await fetch(`../../locales/${language}.json`);
        const texts = await requestJson.json();

        for (const textToChange of textsToChange) {
          const section = textToChange.dataset.section;
          const value = textToChange.dataset.value;
          textToChange.innerHTML = texts[section][value];
        }

        openAccordion.forEach((accordion) => {
          accordion.closest('.card-accordion').classList.remove('active');
          accordion.closest('.card-accordion').querySelector('.icon-accordion').style.transform = 'rotate(0deg)';
          accordion.closest('.card-accordion').querySelector('.icon-accordion').style.color = '';
        });

      cardAccordion.classList.add('active');
      cardAccordion.querySelector('.icon-accordion').style.transform = 'rotate(180deg)';
      cardAccordion.querySelector('.icon-accordion').style.color = getComputedStyle(document.documentElement).getPropertyValue('--icon-active-accordion');
      }
    });
  });