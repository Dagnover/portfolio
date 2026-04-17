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
  // NOTA: Necesitas configurar tus credenciales de EmailJS
  // Reemplaza 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY' con tus valores
  // Ver instrucciones en EMAILJS_SETUP.md
  let emailjsConfigured = false;
  if (typeof emailjs !== 'undefined') {
    try {
      const publicKey = 'YOUR_PUBLIC_KEY'; // Reemplaza con tu Public Key
      if (publicKey !== 'YOUR_PUBLIC_KEY') {
        emailjs.init(publicKey);
        emailjsConfigured = true;
      }
    } catch (error) {
      console.warn('EmailJS no está configurado correctamente:', error);
    }
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
        showMessage('El servicio de correo no está configurado. Por favor contáctame directamente a dagnover4030@gmail.com', 'error');
        return;
      }

      // Deshabilitar botón de envío
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';

      try {
        // Configuración de EmailJS
        // IMPORTANTE: Configura estos valores con tus credenciales de EmailJS
        const serviceID = 'YOUR_SERVICE_ID'; // Reemplaza con tu Service ID
        const templateID = 'YOUR_TEMPLATE_ID'; // Reemplaza con tu Template ID
        
        // Verificar que las credenciales estén configuradas
        if (serviceID === 'YOUR_SERVICE_ID' || templateID === 'YOUR_TEMPLATE_ID') {
          throw new Error('EmailJS no está configurado. Por favor configura tus credenciales en contact.js');
        }
        
        // Parámetros del template
        const templateParams = {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
          to_email: 'dagnover4030@gmail.com'
        };

        // Enviar correo usando EmailJS
        await emailjs.send(serviceID, templateID, templateParams);
        
        showMessage('¡Mensaje enviado exitosamente! Te responderé pronto.', 'success');
        contactForm.reset();
        
        // Cerrar modal después de 2 segundos
        setTimeout(() => {
          closeModal();
        }, 2000);
        
      } catch (error) {
        console.error('Error al enviar el correo:', error);
        showMessage('Hubo un error al enviar el mensaje. Por favor intenta nuevamente o contáctame directamente a dagnover4030@gmail.com', 'error');
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

