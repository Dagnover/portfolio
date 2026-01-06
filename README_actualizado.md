# Portafolio | Cristian Machado — Cloud DevOps / SysOps

Este repositorio contiene mi portafolio web personal: un sitio **estático**, **responsive** y de diseño **minimalista moderno** (paleta azul/negro/blanco), orientado a mostrar mi perfil como **Ingeniero Cloud DevOps / SysOps**. El foco del contenido es **gobierno cloud**, **automatización**, **IaC (Infraestructura como Código)** y **operación segura** en AWS/Azure.

---

## 🎯 Objetivo del portafolio
- Comunicar mi propuesta de valor como profesional TI enfocado en **Cloud, DevOps y SysOps**.
- Mostrar proyectos con impacto: **gobernanza**, **Control Tower/Organizations**, **SCP/IAM**, **pipelines**, **IaC**.
- Evidenciar capacidades técnicas y experiencia por medio de entregables: diagramas, repos, templates, scripts y documentación.
- Mantener un mensaje claro: **seguridad, estandarización, eficiencia operativa y mejora continua**.

---

## 👤 Sobre mí (resumen ejecutivo)
Profesional TI con experiencia en administración de infraestructura en la nube (**AWS y Azure**), servidores on‑premises y virtualización. Apasionado por la automatización y la mejora continua de procesos, con enfoque en administración de servidores, seguridad informática y migración a la nube.

> Nota: Este repo **no** publica datos sensibles (dirección/teléfono). El contacto se maneja por canales profesionales.

---

## 🧩 Secciones del sitio
El portafolio está diseñado con un menú simple y directo:

1. **Proyectos**
   - Casos reales y/o demostrables.
   - Arquitecturas, automatizaciones, IaC, gobierno cloud, operación.
   - Resultados medibles: reducción de tiempos, estandarización, control, disponibilidad.

2. **Experiencia**
   - Timeline por empresa, con responsabilidades y tecnologías.

3. **Educación y certificaciones**
   - Estudios y certificaciones relevantes.

4. **Habilidades**
   - Stack técnico resumido y priorizado por valor de negocio.

5. **Visión a 5 años**
   - Objetivos profesionales: arquitectura y gobierno cloud, automatización y liderazgo técnico.

6. **Contacto**
   - LinkedIn / GitHub / correo profesional.

---

## 🧠 Experiencia profesional
### EPAM — Ingeniero Cloud DevOps (Abr 2025 – Actualidad)
**Responsabilidades clave**
- Definición de lineamientos de **Gobierno Cloud** para filiales externas.
- Automatizaciones y despliegues con **AWS CloudFormation**.
- Administración de **SCPs, roles y políticas IAM**.
- Despliegue de recursos mediante **pipelines de Azure DevOps**.
- Administración de **Control Tower, Organizations y Service Catalog**.

### AXITY — Consultor Cloud SysOps (Ene 2024 – Abr 2025)
**Responsabilidades clave**
- Administración de instancias **EC2 Windows y Linux**.
- Gestión y despliegue de infraestructura en AWS: **VPC, S3, RDS, FSx, IAM, Organizations, Storage Gateway, CloudFormation, AWS Backup**.
- Implementación de IaC con **Terraform**.
- Migración de servidores **on‑premises → AWS**.
- Automatización con **Terraform, Ansible**.

### INTERLAN S.A.S — Especialista de TI Nivel 1 (Nov 2019 – Ene 2024)
**Responsabilidades clave**
- Administración de servidores **Windows y Linux** on‑premises.
- Gestión en AWS (**EC2, VPC, S3, RDS**) y **Azure Active Directory**.
- Administración de **VMware** y **Office 365**.
- Administración de backups en **cintas LTO**.

---

## 🎓 Educación y certificaciones
- Tecnólogo en Desarrollo de Aplicaciones SAS (en curso) — **ITM**
- Técnico en Seguridad y Redes de Datos (2019) — **CESDE**
- **AWS Cloud Practitioner (2024)** — AWS Training & Certification
- Curso **AWS Solutions Architect (2022)** — Netec
- Curso **Azure AZ‑900 / AZ‑104 (2021)** — Intelligent Training
- **Cisco CCNA 1 y CCNA 2 (2019)** — CESDE

---

## 🧰 Habilidades técnicas (highlights)
- **AWS:** EC2, VPC, S3, RDS, IAM, CloudFormation, API Gateway, Cost Explorer, EKS, CloudFront, ACM, AWS Backup, Service Catalog, Control Tower, Organizations.
- **Azure:** Azure Active Directory, administración de servidores, Azure Repos, Azure Pipelines.
- **IaC / Automatización:** Terraform, CloudFormation, Ansible.
- **Virtualización:** VMware, Hyper‑V.
- **Sistemas operativos:** Windows Server (2003–2019), Linux (Ubuntu, CentOS, RedHat, Amazon Linux).
- **Seguridad y redes:** firewalls, VPNs, SFTP/FTP, SAMBA.
- **Aplicaciones:** Office 365, IIS, gestión de certificados SSL (ACM).

---

## 🌍 Idiomas
- Español: Nativo  
- Inglés: Intermedio

---

## 🧱 Estructura sugerida del repo (sitio estático)
```text
/
├─ index.html
├─ assets/
│  ├─ img/
│  ├─ icons/
│  └─ cv/                # opcional: PDF público (sin datos sensibles)
├─ css/
│  ├─ styles.css
│  └─ responsive.css
├─ js/
│  ├─ data/
│  │  ├─ projects.js     # array de proyectos
│  │  ├─ experience.js   # array de experiencia
│  │  ├─ education.js    # array de educación/certificaciones
│  │  └─ skills.js       # array de skills (opcional)
│  └─ main.js            # render dinámico + navegación
└─ README.md
```

---

## 🎨 Diseño y UI (lineamientos)
- Minimalista moderno, **sin carga visual**.
- Paleta: **azul / negro / blanco**.
- Mobile‑first, accesible, tipografías legibles.
- Copywriting corporativo: claro, directo y orientado a impacto.

---

## 🚀 Cómo ejecutar localmente
**Opción recomendada:** servidor local para evitar temas de rutas/JS.

```bash
python -m http.server 8080
```

Abrir:
- `http://localhost:8080`

---

## 🌐 Deploy
Recomendación práctica:
- **GitHub Pages** (rápido, costo cero).
- Alternativa enterprise: **S3 + CloudFront + ACM** (mejor performance, control de HTTPS, enfoque profesional).

---

## 🔐 Nota de seguridad
- No subir datos sensibles (documento, dirección, teléfonos, referencias).
- Usar placeholders en el sitio y exponer solo canales profesionales.

---

## 🗺️ Roadmap
- [ ] Versión 1: landing + secciones completas + render dinámico (arrays JS).
- [ ] Proyectos con métricas: “antes/después” y valor de negocio.
- [ ] Sección “Arquitecturas” con diagramas (gobierno, seguridad, CI/CD, IaC).
- [ ] Versión bilingüe ES/EN.
- [ ] Blog técnico (1 post/mes) sobre gobierno cloud, FinOps, IaC y automatización.

---

## 📄 Licencia
Código bajo licencia MIT (o la que definas). Contenido y marca personal: reservado.
