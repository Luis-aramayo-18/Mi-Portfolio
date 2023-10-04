
    const btn = document.getElementById('button');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');
    const confirmation = document.querySelector('.confirmation-mg');

    function mostrarMensajeDeConfirmación() {
    const confirmation = document.querySelector('.confirmation-mg')
    confirmation.style.display = 'block';
    setTimeout(function() {
        confirmation.style.display = 'none';
      }, 3000); // 3000 ms = 3 segundos
    }

      document.getElementById('form')
      .addEventListener('submit', function(event) {
      event.preventDefault();

      btn.value = 'Sending...';

      const serviceID = 'default_service';
      const templateID = 'template_wt79ny4';

      emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
      btn.value = 'Send Email';
      mostrarMensajeDeConfirmación();
      name.value = '';
      email.value = '';
      asunto.value = '';
      mensaje.value = '';
        }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
      });
    });