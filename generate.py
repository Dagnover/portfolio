#!/usr/bin/env python3
"""
Generador de sitio estático para el portafolio
Ejecuta este script para generar el HTML estático desde los datos en data.py
"""

import html
from datetime import datetime
from data import PERSONAL_INFO, PROJECTS, EXPERIENCE, COURSES, VISION


def escape_html(text):
    """Escapa caracteres HTML especiales"""
    return html.escape(str(text))


def generate_projects_html():
    """Genera el HTML de los proyectos"""
    projects_html = []
    for project in PROJECTS:
        tags_html = ' '.join([
            f'<span class="tag" aria-label="Etiqueta">{escape_html(tag)}</span>'
            for tag in project["tags"]
        ])
        top_tags = ' '.join([
            f'<span class="tag">{escape_html(tag)}</span>'
            for tag in project["tags"][:2]
        ])
        
        project_html = f'''
        <article class="card" role="article">
          <div class="meta"><span>{escape_html(project["year"])}</span><div>{top_tags}</div></div>
          <h3>{escape_html(project["title"])}</h3>
          <p>{escape_html(project["blurb"])}</p>
          <div class="stack-s">{tags_html}</div>
          <div>
            <a class="btn secondary" href="{escape_html(project["link"])}" target="_blank" rel="noopener noreferrer">Ver más</a>
          </div>
        </article>'''
        projects_html.append(project_html)
    
    return '\n      '.join(projects_html)


def generate_experience_html():
    """Genera el HTML de la experiencia"""
    experience_html = []
    for exp in EXPERIENCE:
        points_html = '\n        '.join([
            f'<li>{escape_html(point)}</li>'
            for point in exp["points"]
        ])
        
        exp_html = f'''
        <article class="item">
          <h3>{escape_html(exp["role"])} · <span style="color:var(--accent)">{escape_html(exp["company"])}</span></h3>
          <div class="when">{escape_html(exp["when"])}</div>
          <ul>{points_html}</ul>
        </article>'''
        experience_html.append(exp_html)
    
    return '\n      '.join(experience_html)


def generate_courses_html():
    """Genera el HTML de los cursos"""
    courses_html = []
    for course in COURSES:
        course_html = f'''
        <li>
          <div>
            <strong>{escape_html(course["name"])}</strong><br />
            <small>{escape_html(course["org"])}</small>
          </div>
          <small>{escape_html(course["year"])}</small>
        </li>'''
        courses_html.append(course_html)
    
    return '\n      '.join(courses_html)


def generate_schema_json():
    """Genera el JSON-LD para SEO"""
    schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": PERSONAL_INFO["name"],
        "jobTitle": PERSONAL_INFO["job_title"],
        "url": PERSONAL_INFO["website"],
        "sameAs": [
            PERSONAL_INFO["github"],
            PERSONAL_INFO["linkedin"]
        ]
    }
    
    import json
    return json.dumps(schema, indent=2, ensure_ascii=False)


def generate_html():
    """Genera el HTML completo del sitio"""
    current_year = datetime.now().year
    
    html_content = f'''<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{escape_html(PERSONAL_INFO["name"])} — Portafolio | {escape_html(PERSONAL_INFO["title"])}</title>
  <meta name="description" content="Portafolio profesional de {escape_html(PERSONAL_INFO["title"])}. Proyectos, experiencia, cursos y visión a 5 años." />
  <meta name="theme-color" content="#0b0b0b" />
  <meta property="og:title" content="Portafolio — {escape_html(PERSONAL_INFO["title"])}" />
  <meta property="og:description" content="Proyectos, experiencia y visión de carrera en Cloud, DevOps y SysAdmin." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{escape_html(PERSONAL_INFO["website"])}" />
  <meta property="og:image" content="{escape_html(PERSONAL_INFO["website"])}/og-image.png" />
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230b0b0b'/%3E%3Ctext x='50' y='58' font-size='54' text-anchor='middle' fill='%23fff' font-family='system-ui, -apple-system, Segoe UI, Roboto, Inter, Ubuntu, Cantarell, sans-serif'%3E%C2%A7%3C/text%3E%3C/svg%3E" />
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
  <a class="skip-link" href="#contenido">Saltar al contenido</a>

  <header>
    <div class="container nav" role="navigation" aria-label="Navegación principal">
      <a class="brand" href="#" aria-label="Inicio">
        <dot></dot>
        <span>{escape_html(PERSONAL_INFO["name"])}</span>
      </a>

      <button class="hamburger" id="hamburger" aria-expanded="false" aria-controls="menu" aria-label="Abrir menú">
        <span></span>
      </button>

      <nav id="menu" class="menu" aria-label="Secciones del sitio">
        <a href="#proyectos">Proyectos</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#cursos">Cursos</a>
        <a href="#vision">Visión</a>
      </nav>
    </div>
  </header>

  <main id="contenido" class="container stack-l">
    <!-- HERO -->
    <section class="hero stack">
      <h1>{escape_html(PERSONAL_INFO["title"])}</h1>
      <p class="lead">{escape_html(PERSONAL_INFO["description"])}</p>
      <div class="hero-cta">
        <a class="btn" href="#proyectos">Ver proyectos</a>
        <a class="btn secondary" href="mailto:{escape_html(PERSONAL_INFO["email"])}" title="Escríbeme">Contacto</a>
      </div>
    </section>

    <!-- PROYECTOS -->
    <section id="proyectos" class="stack">
      <div class="stack-s">
        <h2>Proyectos destacados</h2>
        <p class="section-intro">Selección de trabajos que sintetizan mi experiencia en arquitectura, automatización y seguridad. Código limpio, documentación clara y entrega continua.</p>
      </div>
      <div class="grid" id="projects-grid" aria-live="polite">
      {generate_projects_html()}
      </div>
    </section>

    <!-- EXPERIENCIA -->
    <section id="experiencia" class="stack">
      <div class="stack-s">
        <h2>Experiencia</h2>
        <p class="section-intro">Trayectoria en equipos de plataforma y gobierno cloud, integrando mejores prácticas de seguridad, FinOps y confiabilidad.</p>
      </div>
      <div class="timeline" id="xp-timeline" aria-live="polite">
      {generate_experience_html()}
      </div>
    </section>

    <!-- CURSOS -->
    <section id="cursos" class="stack">
      <div class="stack-s">
        <h2>Cursos & certificaciones</h2>
        <p class="section-intro">Aprendizaje continuo para mantenerme al día con la evolución del ecosistema cloud y DevOps.</p>
      </div>
      <ul class="list" id="courses-list" aria-live="polite">
      {generate_courses_html()}
      </ul>
    </section>

    <!-- VISION -->
    <section id="vision" class="stack">
      <div class="stack-s">
        <h2>Visión a 5 años</h2>
      </div>
      <div class="vision">
        <p id="vision-copy">{escape_html(VISION)}</p>
      </div>
    </section>
  </main>

  <footer class="container stack">
    <div class="stack-s">
      <strong>¿Hablamos?</strong>
      <p>Disponible para colaborar en arquitectura, automatización y gobierno cloud.</p>
      <div class="social">
        <a href="{escape_html(PERSONAL_INFO["github"])}" aria-label="GitHub" class="icon" title="GitHub" target="_blank" rel="noopener noreferrer"> 
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.74.08-.72.08-.72 1.22.09 1.86 1.25 1.86 1.25 1.08 1.86 2.83 1.33 3.52 1.02.11-.79.42-1.33.76-1.64-2.66-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.25-3.23-.13-.31-.54-1.56.12-3.26 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.7.25 2.95.12 3.26.78.84 1.25 1.91 1.25 3.23 0 4.64-2.81 5.67-5.49 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z"/></svg>
        </a>
        <a href="{escape_html(PERSONAL_INFO["linkedin"])}" aria-label="LinkedIn" class="icon" title="LinkedIn" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.6h.06c.53-1 1.82-2.06 3.75-2.06 4.01 0 4.75 2.64 4.75 6.08V21h-4v-4.8c0-1.14-.02-2.6-1.58-2.6-1.58 0-1.82 1.23-1.82 2.52V21H9z"/></svg>
        </a>
        <a href="mailto:{escape_html(PERSONAL_INFO["email"])}" aria-label="Correo" class="icon" title="Correo">
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true"><path d="M12 13.065 1.5 6.75V18a1.5 1.5 0 0 0 1.5 1.5h18a1.5 1.5 0 0 0 1.5-1.5V6.75L12 13.065ZM21 4.5H3L12 10.5 21 4.5Z"/></svg>
        </a>
      </div>
    </div>
    <small>© {current_year} {escape_html(PERSONAL_INFO["name"])}. Hecho con HTML, CSS y Python.</small>
  </footer>

  <!-- Datos estructurados para SEO -->
  <script type="application/ld+json" id="schema-person">
{generate_schema_json()}
  </script>

  <!-- JavaScript mínimo solo para menú móvil -->
  <script src="js/menu.js"></script>
</body>
</html>'''
    
    return html_content


def main():
    """Función principal"""
    print("Generando HTML estático...")
    
    html_output = generate_html()
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html_output)
    
    print("✓ index.html generado exitosamente")
    print(f"✓ {len(PROJECTS)} proyectos incluidos")
    print(f"✓ {len(EXPERIENCE)} experiencias incluidas")
    print(f"✓ {len(COURSES)} cursos incluidos")


if __name__ == '__main__':
    main()

