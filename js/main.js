// main.js - Renderizado dinámico y navegación
document.addEventListener('DOMContentLoaded', () => {
  // Navegación suave y activación de menú
  initNavigation();

  // Renderizar secciones dinámicas
  renderExperience();
  renderEducation();
  renderSkills();
  renderLanguages();
  renderPersonalProjects();

  // Toggle móvil
  initMobileMenu();

  // Botón volver arriba
  initScrollToTop();

  // Modal de experiencia
  initExperienceModal();
  
  // Modal de habilidades
  initSkillsModal();
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
        links.forEach(l => l.removeAttribute('aria-current'));
        link.setAttribute('aria-current', 'page');
      }
    });
  });
}

// Renderizar galería de experiencia (tarjetas clicables)
function renderExperience() {
  const container = document.getElementById('experience-container');
  if (!container || !window.experience) return;

  container.innerHTML = window.experience.map(exp => {
    const projectCount = (window.projects || []).filter(p => p.companyId === exp.id).length;
    return `
      <button class="exp-card" data-id="${exp.id}" aria-label="Ver detalles de ${exp.company}">
        <div class="exp-card-header">
          <div class="exp-header-left">
            ${exp.logo ? `<img src="${exp.logo}" alt="${exp.company} logo" class="exp-logo">` : ''}
            <div>
              <h3>${exp.company}</h3>
              <p class="exp-position">${exp.position}</p>
            </div>
          </div>
          <span class="exp-period">${exp.period}</span>
        </div>
        <div class="exp-card-footer">
          <div class="tags">
            ${exp.technologies.slice(0, 4).map(t => `<span class="tag">${t}</span>`).join('')}
            ${exp.technologies.length > 4 ? `<span class="tag">+${exp.technologies.length - 4}</span>` : ''}
          </div>
          <span class="exp-projects-count">${projectCount} proyecto${projectCount !== 1 ? 's' : ''} →</span>
        </div>
      </button>
    `;
  }).join('');
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

// Renderizar habilidades (tarjetas clicables)
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container || !window.skills) return;

  container.innerHTML = window.skills.map(skill => `
    <button class="skill-card" data-id="${skill.id}" aria-label="Ver detalles de ${skill.category}" style="border-color: ${skill.color}20;">
      <div class="skill-card-icon" style="background: ${skill.color}20;">
        <span style="font-size: 2rem;">${skill.icon}</span>
      </div>
      <h3 style="color: ${skill.color};">${skill.category}</h3>
      <p class="skill-card-description">${skill.description}</p>
      <div class="skill-card-count">
        ${skill.items.length} tecnología${skill.items.length !== 1 ? 's' : ''} →
      </div>
    </button>
  `).join('');
}

// Renderizar idiomas
function renderLanguages() {
  const container = document.getElementById('languages-container');
  if (!container || !window.languages) return;

  container.innerHTML = `
    <ul class="list">
      ${window.languages.map(lang => `
        <li>
          <div><strong>${lang.language}</strong></div>
          <small>${lang.level}</small>
        </li>
      `).join('')}
    </ul>
  `;
}

// ── Modal de detalle de experiencia ──────────────────────────────────────────

function initExperienceModal() {
  // Delegación de eventos en el contenedor de experiencia
  const expContainer = document.getElementById('experience-container');
  if (expContainer) {
    expContainer.addEventListener('click', (e) => {
      const card = e.target.closest('.exp-card');
      if (!card) return;
      openExperienceModal(parseInt(card.dataset.id, 10));
    });
  }

  // Cerrar con overlay o botón close
  const modal   = document.getElementById('exp-modal');
  const overlay = document.getElementById('exp-modal-overlay');
  const closeBtn = document.getElementById('exp-modal-close');

  if (overlay)  overlay.addEventListener('click', closeExperienceModal);
  if (closeBtn) closeBtn.addEventListener('click', closeExperienceModal);

  // Cerrar con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeExperienceModal();
  });
}

function openExperienceModal(id) {
  const exp = (window.experience || []).find(e => e.id === id);
  if (!exp) return;

  const projects = (window.projects || []).filter(p => p.companyId === id);

  // Construir contenido
  const titleElement = document.getElementById('exp-modal-title');
  if (exp.logo) {
    titleElement.innerHTML = `
      <img src="${exp.logo}" alt="${exp.company} logo" class="exp-modal-logo">
      <span>${exp.company}</span>
    `;
  } else {
    titleElement.textContent = exp.company;
  }

  document.getElementById('exp-modal-body').innerHTML = `
    <p class="exp-modal-position">${exp.position} <span class="exp-modal-period">· ${exp.period}</span></p>

    <h4>Responsabilidades</h4>
    <ul class="exp-modal-list">
      ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
    </ul>

    <h4>Tecnologías</h4>
    <div class="tags" style="margin-bottom:1.5rem">
      ${exp.technologies.map(t => `<span class="tag">${t}</span>`).join('')}
    </div>

    ${projects.length ? `
      <h4>Proyectos</h4>
      <div class="exp-modal-projects">
        ${projects.map(p => `
          <article class="exp-project-card">
            <div class="exp-project-header">
              <span class="tag">${p.category}</span>
            </div>
            <h5>${p.title}</h5>
            <p>${p.description}</p>
            <div class="tags">
              ${p.technologies.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            ${p.metrics ? `
              <div class="exp-project-metrics">
                ${Object.values(p.metrics).map(v => `<small>· ${v}</small>`).join('')}
              </div>
            ` : ''}
          </article>
        `).join('')}
      </div>
    ` : ''}
  `;

  const modal = document.getElementById('exp-modal');
  modal.classList.add('active');
  modal.removeAttribute('aria-hidden');
  document.body.style.overflow = 'hidden';

  // Focus en el botón de cierre para accesibilidad
  setTimeout(() => document.getElementById('exp-modal-close').focus(), 50);
}

function closeExperienceModal() {
  const modal = document.getElementById('exp-modal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Toggle menú móvil
function initMobileMenu() {
  const toggle = document.getElementById('nav-toggle');
  const menu   = document.getElementById('main-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('show');
      toggle.setAttribute('aria-expanded', menu.classList.contains('show'));
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

// Botón volver arriba
function initScrollToTop() {
  const scrollButton = document.getElementById('scroll-to-top');
  if (!scrollButton) return;

  function toggleScrollButton() {
    scrollButton.classList.toggle('visible', window.scrollY > 300);
  }

  window.addEventListener('scroll', toggleScrollButton, { passive: true });
  toggleScrollButton();

  scrollButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Renderizar proyectos personales
function renderPersonalProjects() {
  const container = document.getElementById('personal-projects-container');
  if (!container || !window.personalProjects) return;

  container.innerHTML = window.personalProjects.map(project => `
    <article class="personal-project-card">
      <div class="personal-project-icon">${project.icon}</div>
      <h3>${project.title}</h3>
      <p class="personal-project-description">${project.description}</p>
      <div class="personal-project-details">
        <h4>Áreas de interés:</h4>
        <ul class="personal-project-list">
          ${project.interests.map(interest => `<li>${interest}</li>`).join('')}
        </ul>
      </div>
      <div class="tags">
        ${project.skills.map(skill => `<span class="tag">${skill}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

// ── Modal de habilidades ──────────────────────────────────────────

function initSkillsModal() {
  // Delegación de eventos en el contenedor de habilidades
  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer) {
    skillsContainer.addEventListener('click', (e) => {
      const card = e.target.closest('.skill-card');
      if (!card) return;
      openSkillsModal(parseInt(card.dataset.id, 10));
    });
  }

  // Cerrar con overlay o botón close
  const modal = document.getElementById('skills-modal');
  const overlay = document.getElementById('skills-modal-overlay');
  const closeBtn = document.getElementById('skills-modal-close');

  if (overlay) overlay.addEventListener('click', closeSkillsModal);
  if (closeBtn) closeBtn.addEventListener('click', closeSkillsModal);

  // Cerrar con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSkillsModal();
  });
}

function openSkillsModal(id) {
  const skill = (window.skills || []).find(s => s.id === id);
  if (!skill) return;

  // Construir título con icono
  const titleElement = document.getElementById('skills-modal-title');
  titleElement.innerHTML = `
    <span style="font-size: 1.8rem; margin-right: 0.5rem;">${skill.icon}</span>
    <span style="color: ${skill.color};">${skill.category}</span>
  `;

  // Construir contenido
  document.getElementById('skills-modal-body').innerHTML = `
    <p class="skills-modal-description">${skill.description}</p>
    
    <h4>Tecnologías y herramientas</h4>
    <div class="skills-modal-grid">
      ${skill.items.map(item => `
        <div class="skill-item">
          <span class="skill-item-icon">${item.icon}</span>
          <span class="skill-item-name">${item.name}</span>
        </div>
      `).join('')}
    </div>
  `;

  const modal = document.getElementById('skills-modal');
  modal.classList.add('active');
  modal.removeAttribute('aria-hidden');
  document.body.style.overflow = 'hidden';

  // Focus en el botón de cierre para accesibilidad
  setTimeout(() => document.getElementById('skills-modal-close').focus(), 50);
}

function closeSkillsModal() {
  const modal = document.getElementById('skills-modal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
