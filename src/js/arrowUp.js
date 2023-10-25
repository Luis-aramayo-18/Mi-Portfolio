function arrowUp() {
    const profile = document.querySelector('#profile');
  
    if (profile) {
      profile.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }