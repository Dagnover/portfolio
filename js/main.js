// main.js - Renderizado dinámico y navegación
document.addEventListener('DOMContentLoaded', () => {
  // Navegación suave y activación de menú
  initNavigation();
  
  // Renderizar secciones dinámicas
  renderProjects();
  renderExperience();
  renderEducation();
  
  // Toggle móvil
  initMobileMenu();
});

// Navegación suave
function initNavigation() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Actualizar aria-current
        links.forEach(l => l.removeAttribute('aria-current'));
        link.setAttribute('aria-current', 'page');
      }
    });
  });
}

// Renderizar proyectos
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container || !window.projects) return;
  
  container.innerHTML = window.projects.map(project => `
    <article class="card">
      <div class="card-header">
        <h3>${project.title}</h3>
        <span class="tag">${project.category}</span>
      </div>
      <p>${project.description}</p>
      <div class="card-tech">
        ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
      </div>
      ${project.metrics ? `
        <div class="card-metrics">
          ${Object.entries(project.metrics).map(([key, value]) => 
            `<small><strong>${key}:</strong> ${value}</small>`
          ).join('')}
        </div>
      ` : ''}
    </article>
  `).join('');
}

// Renderizar experiencia
function renderExperience() {
  const container = document.getElementById('experience-container');
  if (!container || !window.experience) return;
  
  container.innerHTML = window.experience.map(exp => `
    <div class="item">
      <h3>${exp.position} <span class="company">— ${exp.company}</span></h3>
      <div class="when">${exp.period}</div>
      <ul>
        ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
      </ul>
      <div class="tech-stack">
        <strong>Tecnologías:</strong>
        <div class="tags">
          ${exp.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// Renderizar educación
function renderEducation() {
  const container = document.getElementById('education-container');
  if (!container || !window.education) return;
  
  container.innerHTML = `
    <ul class="list">
      ${window.education.map(edu => `
        <li>
          <div>
            <strong>${edu.title}</strong>
            ${edu.institution ? `<div class="institution">${edu.institution}</div>` : ''}
            ${edu.type ? `<span class="tag">${edu.type}</span>` : ''}
          </div>
          <small>${edu.year} ${edu.status === 'En curso' ? '• En curso' : ''}</small>
        </li>
      `).join('')}
    </ul>
  `;
}

// Toggle menú móvil
function initMobileMenu() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('main-menu');
  
  if (toggle && menu) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('show');
      const isOpen = menu.classList.contains('show');
      toggle.setAttribute('aria-expanded', isOpen);
    });
    
    // Cerrar al hacer clic en un enlace
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
    
    // Cerrar al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

