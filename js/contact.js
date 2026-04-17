// contact.js - Manejo del modal de contacto y envío de correo
document.addEventListener('DOMContentLoaded', () => {
  const emailBtn = document.getElementById('email-contact-btn');
  const modal = document.getElementById('contact-modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');
  const cancelBtn = document.getElementById('cancel-btn');
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  const submitBtn = document.getElementById('submit-btn');

  // Inicializar EmailJS
  let emailjsConfigured = false;
  if (typeof emailjs !== 'undefined') {
    try {
      const publicKey = 'YizWoeiP-m-o0n5VH';
      emailjs.init(publicKey);
      emailjsConfigured = true;
      console.log('EmailJS inicializado correctamente');
    } catch (error) {
      console.error('Error al inicializar EmailJS:', error);
    }
  } else {
    console.error('EmailJS no está cargado');
  }

  // Abrir modal
  function openModal() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    // Focus en el primer input
    setTimeout(() => {
      document.getElementById('contact-name').focus();
    }, 100);
  }

  // Cerrar modal
  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restaurar scroll
    contactForm.reset();
    formMessage.textContent = '';
    formMessage.className = 'form-message';
  }

  // Event listeners para abrir modal
  if (emailBtn) {
    emailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  // Event listeners para cerrar modal
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (cancelBtn) {
    cancelBtn.addEventListener('click', closeModal);
  }

  // Cerrar con tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Manejar envío del formulario
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      // Validación básica
      if (!name || !email || !subject || !message) {
        showMessage('Por favor completa todos los campos.', 'error');
        return;
      }

      // Verificar si EmailJS está configurado
      if (!emailjsConfigured || typeof emailjs === 'undefined') {
        console.error('EmailJS no está configurado');
        showMessage('El servicio de correo no está configurado. Por favor contáctame directamente a dagnover4030@gmail.com', 'error');
        return;
      }

      console.log('Enviando email con EmailJS...');

      // Deshabilitar botón de envío
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';

      try {
        // Configuración de EmailJS
        const serviceID = 'service_io3su9v';
        const templateID = 'template_029cn5k';
        
        console.log('Service ID:', serviceID);
        console.log('Template ID:', templateID);
        
        // Parámetros del template - deben coincidir exactamente con EmailJS
        const templateParams = {
          to_name: 'dagnover4030@gmail.com',
          from_name: email,
          reply_to: email,
          message: `Nombre: ${name}\nAsunto: ${subject}\n\n${message}`,
          email: 'dagnover4030@gmail.com'
        };
        
        console.log('Parámetros del template:', templateParams);

        // Enviar correo usando EmailJS
        const response = await emailjs.send(serviceID, templateID, templateParams);
        
        console.log('Respuesta de EmailJS:', response);
        showMessage('¡Mensaje enviado exitosamente! Te responderé pronto.', 'success');
        contactForm.reset();
        
        // Cerrar modal después de 2 segundos
        setTimeout(() => {
          closeModal();
        }, 2000);
        
      } catch (error) {
        console.error('Error completo al enviar el correo:', error);
        console.error('Error text:', error.text);
        console.error('Error status:', error.status);
        
        let errorMessage = 'Hubo un error al enviar el mensaje. ';
        
        if (error.text) {
          errorMessage += `Error: ${error.text}. `;
        }
        
        errorMessage += 'Por favor intenta nuevamente o contáctame directamente a dagnover4030@gmail.com';
        
        showMessage(errorMessage, 'error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar';
      }
    });
  }

  // Función para mostrar mensajes
  function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    formMessage.setAttribute('role', 'alert');
    
    // Scroll al mensaje
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
});

