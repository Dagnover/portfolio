// Array de proyectos vinculados a cada empresa (companyId = experience.id)
window.projects = [
  {
    id: 1,
    companyId: 1,
    title: "Gobierno Cloud con AWS Control Tower y Organizations",
    description: "Definición de lineamientos de gobierno cloud para filiales externas. Implementación de Control Tower, Organizations, SCPs y políticas IAM centralizadas. Establecimiento de guardrails y compliance automatizado.",
    technologies: ["AWS Control Tower", "AWS Organizations", "SCPs", "IAM", "Service Catalog"],
    category: "Cloud Governance",
    metrics: {
      compliance: "100% políticas aplicadas",
      standardization: "Gobierno centralizado multi-cuenta"
    }
  },
  {
    id: 2,
    companyId: 1,
    title: "Automatización de Despliegues con CloudFormation y Azure DevOps",
    description: "Automatización de despliegues de infraestructura mediante pipelines de Azure DevOps y plantillas CloudFormation. Reducción de tiempo de despliegue en 70% y eliminación de errores manuales.",
    technologies: ["AWS CloudFormation", "Azure DevOps", "Azure Pipelines", "CI/CD"],
    category: "DevOps",
    metrics: {
      reducción: "70% tiempo de despliegue",
      errores: "95% reducción de errores manuales"
    }
  },
  {
    id: 5,
    companyId: 1,
    title: "Service Catalog y Automatización de Recursos",
    description: "Implementación de AWS Service Catalog para estandarizar y automatizar el aprovisionamiento de recursos. Control de costos y compliance mediante catálogos pre-aprobados y políticas de gobernanza.",
    technologies: ["AWS Service Catalog", "CloudFormation", "Organizations", "Cost Control"],
    category: "Cloud Governance",
    metrics: {
      estandarización: "Recursos pre-aprobados",
      control: "100% aprovisionamiento controlado"
    }
  },
  {
    id: 3,
    companyId: 2,
    title: "Infraestructura como Código con Terraform",
    description: "Implementación de IaC con Terraform para gestión de infraestructura AWS (EC2, VPC, S3, RDS, FSx). +50 recursos gestionados, versionado de infraestructura y automatización con Ansible.",
    technologies: ["Terraform", "Ansible", "AWS EC2", "VPC", "RDS", "FSx"],
    category: "IaC / Automation",
    metrics: {
      infraestructura: "100% infraestructura como código",
      recursos: "+50 recursos gestionados"
    }
  },
  {
    id: 6,
    companyId: 2,
    title: "Migración Cloud y Optimización de Infraestructura",
    description: "Migración de servidores on-premises a AWS (EC2 Windows/Linux). Gestión de infraestructura: VPC, S3, RDS, FSx, Storage Gateway. Backup automatizado y disaster recovery. Reducción de costos operativos del 40%.",
    technologies: ["AWS EC2", "VPC", "S3", "RDS", "FSx", "Storage Gateway", "AWS Backup"],
    category: "Cloud Migration",
    metrics: {
      disponibilidad: "99.9% uptime",
      costos: "40% reducción costos operativos"
    }
  },
  {
    id: 4,
    companyId: 3,
    title: "Gestión de Accesos e Infraestructura Híbrida",
    description: "Administración de infraestructura híbrida VMware + AWS/Azure. Gestión de roles IAM, Azure AD y políticas de acceso. Mantenimiento de SLA del 99% en servicios críticos y administración de backups LTO.",
    technologies: ["AWS IAM", "Azure AD", "VMware", "Windows Server", "Linux", "Backups LTO"],
    category: "SysOps",
    metrics: {
      disponibilidad: "SLA 99% mantenido",
      plataformas: "Infraestructura híbrida on-prem + cloud"
    }
  }
];
