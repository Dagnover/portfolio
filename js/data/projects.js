// Array de proyectos - Casos reales y demostrables
// Enfoque: gobierno cloud, automatización, IaC y operación segura
window.projects = [
  {
    id: 1,
    title: "Gobierno Cloud con AWS Control Tower y Organizations",
    description: "Definición de lineamientos de gobierno cloud para filiales externas. Implementación de Control Tower, Organizations, SCPs (Service Control Policies) y políticas IAM centralizadas. Establecimiento de guardrails y compliance automatizado.",
    technologies: ["AWS Control Tower", "AWS Organizations", "SCPs", "IAM", "Service Catalog"],
    category: "Cloud Governance",
    metrics: {
      compliance: "100% políticas aplicadas",
      standardization: "Gobierno centralizado multi-cuenta"
    }
  },
  {
    id: 2,
    title: "Automatización de Despliegues con CloudFormation y Azure DevOps",
    description: "Automatización de despliegues de infraestructura mediante pipelines de Azure DevOps y plantillas CloudFormation. Reducción de tiempo de despliegue en 70% y eliminación de errores manuales.",
    technologies: ["AWS CloudFormation", "Azure DevOps", "Azure Pipelines", "CI/CD"],
    category: "DevOps",
    metrics: {
      reduction: "70% tiempo de despliegue",
      errors: "95% reducción de errores manuales"
    }
  },
  {
    id: 3,
    title: "Infraestructura como Código con Terraform",
    description: "Implementación de IaC con Terraform para gestión de infraestructura AWS (EC2, VPC, S3, RDS, FSx). Versionado de infraestructura, automatización con Ansible y migración de servidores on-premises a AWS.",
    technologies: ["Terraform", "Ansible", "AWS EC2", "VPC", "RDS", "FSx"],
    category: "IaC / Automation",
    metrics: {
      infrastructure: "100% infraestructura como código",
      migration: "20+ servidores migrados"
    }
  },
  {
    id: 4,
    title: "Gestión de Accesos y Políticas IAM",
    description: "Administración de SCPs, roles y políticas IAM granulares. Implementación de principios de menor privilegio y auditoría de accesos. Integración con Azure AD para gestión centralizada de identidades.",
    technologies: ["AWS IAM", "SCPs", "Azure AD", "SSO", "Compliance"],
    category: "Security",
    metrics: {
      security: "100% políticas aplicadas",
      access: "Gestión centralizada de identidades"
    }
  },
  {
    id: 5,
    title: "Service Catalog y Automatización de Recursos",
    description: "Implementación de AWS Service Catalog para estandarizar y automatizar el aprovisionamiento de recursos. Control de costos y compliance mediante catálogos pre-aprobados y políticas de gobernanza.",
    technologies: ["AWS Service Catalog", "CloudFormation", "Organizations", "Cost Control"],
    category: "Cloud Governance",
    metrics: {
      standardization: "Recursos pre-aprobados",
      control: "100% aprovisionamiento controlado"
    }
  },
  {
    id: 6,
    title: "Migración Cloud y Optimización de Infraestructura",
    description: "Migración de servidores on-premises a AWS (EC2 Windows/Linux). Gestión de infraestructura: VPC, S3, RDS, FSx, Storage Gateway. Implementación de estrategias de backup automatizado y disaster recovery.",
    technologies: ["AWS EC2", "VPC", "S3", "RDS", "FSx", "Storage Gateway", "AWS Backup"],
    category: "Cloud Migration",
    metrics: {
      availability: "99.9% uptime",
      migration: "Migración completa on-premises → AWS"
    }
  }
];
