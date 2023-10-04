function descargarCV() {
    const url = '../assets/curriculumVitaeMe.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'AramayoLuisCV.pdf');
    link.click();
  }