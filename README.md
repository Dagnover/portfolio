# Portafolio | Cristian Machado — Cloud & SysAdmin / DevOps

Este repositorio contiene mi portafolio web personal: un sitio **estático**, **responsive** y de diseño **minimalista moderno** (paleta azul/negro/blanco), orientado a mostrar mi perfil como **Ingeniero Cloud** con enfoque **SysAdmin y DevOps**, destacando proyectos, experiencia, formación y una visión profesional a 5 años.

## 🎯 Objetivo del portafolio
- Presentar de forma clara mi propuesta de valor como **Especialista TI / Cloud**.
- Mostrar **proyectos reales** (gobierno cloud, automatización, IaC, operaciones).
- Resumir experiencia profesional y stack técnico (AWS, Azure, Windows/Linux, automatización).
- Mantener una narrativa profesional: **seguridad, gobernanza, eficiencia operativa y mejora continua**.

---

## 👤 Sobre mí (resumen ejecutivo)
Perfil autodidacta, orientado a resultados y a la mejora continua. Me adapto rápido a entornos exigentes, priorizando soluciones prácticas con foco en **estabilidad, seguridad y estandarización**. Interés activo en fortalecer habilidades en **AWS y Azure**, y en crear automatizaciones que reduzcan error humano y mejoren el control operativo.

---

## 🧩 Secciones del sitio
El portafolio está diseñado para tener un menú pequeño (simple y directo) con estas secciones:

1. **Proyectos**
   - Casos reales y/o demostrables.
   - Arquitecturas, automatizaciones, IaC, gobierno cloud, mejoras operativas.
   - Resultados medibles: reducción de tiempos, estandarización, control, disponibilidad.

2. **Experiencia**
   - Timeline por empresa, con responsabilidades clave y tecnologías utilizadas.

3. **Cursos y formación**
   - Certificaciones/cursos AWS y Azure.
   - Estudios técnicos y formación actual.

4. **Visión a 5 años**
   - Objetivos profesionales: arquitectura cloud, gobierno, automatización, liderazgo técnico.

5. **Contacto**
   - Enlaces a LinkedIn / GitHub / correo (recomendado usar un email profesional).

---

## 🧠 Experiencia profesional (extracto)
**INTERLAN S.A.S — Especialista de TI Nivel 1 (Nov 2019 – Actualidad)**  
Enfoque en administración de infraestructura **Windows/Linux**, operación y soporte en **AWS**, despliegues, backups (LTO), VMware y O365/Azure AD.

**IDEMIA Colombia S.A.S — Técnico en Mesa de Ayuda (Abr 2019 – Oct 2019)**  
Administración de servidores on-premises, soporte a producción, antivirus, inventarios, mantenimiento e implementación de soluciones.

---

## 🧰 Stack técnico (highlights)
- **AWS:** EC2, VPC, S3, RDS, IAM, CloudFormation, API Gateway, CloudFront, ACM, Backup, Cost Explorer, EKS.
- **Microsoft / Azure:** Azure Active Directory, Office 365, seguridad y administración.
- **Sistemas:** Windows Server (2003–2019), Linux (Ubuntu Server, CentOS), IIS, SSL/DOMINIOS.
- **Infra:** VMware, SFTP/FTP/SAMBA, backups (incl. cintas LTO), operación y soporte.

---

## 🎓 Formación y cursos (extracto)
- Actualmente: Tecnólogo en desarrollo de aplicaciones (ITM).
- Técnico en Seguridad y Redes de Datos (CESDE, 2019).
- Cisco CCNA 1 y 2 (CESDE, 2019).
- Azure AZ-900 / AZ-104 (2021).
- AWS Solutions Architect (curso, 2022).
- AWS Cloud Practitioner (curso, 2022).

---

## 🌍 Idiomas
- Español: Nativo  
- Inglés: Básico

---

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

---

## 📄 Licencia
Código bajo licencia MIT (o la que definas). Contenido y marca personal: reservado.
