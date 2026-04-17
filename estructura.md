## 🧱 Estructura sugerida del repo
Recomendada para un sitio estático ordenado y fácil de mantener:

```text
/
├─ index.html
├─ assets/
│  ├─ img/
│  ├─ icons/
│  └─ cv/                # opcional: versión PDF pública (sin datos sensibles)
├─ css/
│  ├─ styles.css
│  └─ responsive.css
├─ js/
│  ├─ data/
│  │  ├─ projects.js     # array de proyectos
│  │  ├─ experience.js   # array de experiencia
│  │  └─ education.js    # array de cursos/estudios
│  └─ main.js            # render dinámico + navegación
└─ README.md
```

---

## 🎨 Diseño y UI (lineamientos)
- **Estilo:** minimalista moderno, sin ruido visual.
- **Paleta:** azul / negro / blanco.
- **Responsive:** mobile-first, accesible, tipografías legibles.
- **Copywriting:** humano, claro y “business-ready”.
- **Regla de oro:** menos decoración, más claridad (y resultados).

---

## 🚀 Cómo ejecutar localmente
Este portafolio no requiere backend.

**Opción A (rápida):** abrir `index.html` en el navegador.  
**Opción B (recomendada):** usar un servidor local (evita problemas con rutas/JS):

- Con VS Code: extensión **Live Server**
- Con Python:
```bash
python -m http.server 8080
```
Luego abre `http://localhost:8080`

---

## 🌐 Deploy
Recomendación ejecutiva:
- **GitHub Pages** (costo cero, simple, estable).
- Alternativa enterprise: **S3 + CloudFront + ACM** (más profesional, mejor performance y HTTPS controlado).

---
## 🔐 Nota de seguridad (importante)
Este repositorio **no debe** incluir datos sensibles (documento, dirección, teléfonos, etc.).  
Usa placeholders en el sitio y expón solo canales profesionales (LinkedIn/GitHub/email profesional).

---

## 🗺️ Roadmap del portafolio
- [ ] Versión 1: landing + secciones completas + render dinámico (JS arrays).
- [ ] Añadir “casos de éxito” con métricas (antes/después).
- [ ] Sección “Arquitecturas” con diagramas (y enfoque de gobierno/seguridad).
- [ ] Multi-idioma ES/EN para proyección internacional.
- [ ] Blog corto: 1 post/mes (gobierno cloud, FinOps, IaC, automatización).