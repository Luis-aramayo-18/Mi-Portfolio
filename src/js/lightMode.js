const lightMode = document.querySelector('.light-mode');

lightMode.addEventListener('click',()=>{
  document.body.classList.toggle('dark-theme');
  document.body.transition = 'color 0.5s ease,';
  const iconGit = document.querySelector('.icon-git-technologies')
  const iconGitHub = document.querySelector('.icon-gitHub-technologies')

  
  setTimeout(()=>{
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
  }, 10);
})