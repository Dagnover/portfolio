// JavaScript mínimo solo para el menú móvil
(function() {
  'use strict';
  
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  const menuLinks = document.querySelectorAll('#menu a');
  
  if (hamburger && menu) {
    hamburger.addEventListener('click', function() {
      const isOpen = menu.classList.toggle('show');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
    
    // Cerrar menú al hacer clic en un enlace (móvil)
    menuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        menu.classList.remove('show');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();

