// Array de proyectos - Casos reales y demostrables
window.projects = [
  {
    id: 1,
    title: "Gobierno Cloud y Automatización AWS",
    description: "Implementación de políticas de gobierno cloud, automatización de despliegues con CloudFormation y optimización de costos mediante Cost Explorer. Reducción de tiempo de despliegue en 60%.",
    technologies: ["AWS", "CloudFormation", "IAM", "Cost Explorer"],
    category: "Cloud Governance",
    metrics: {
      reduction: "60% tiempo de despliegue",
      standardization: "100% infraestructura como código"
    }
  },
  {
    id: 2,
    title: "Migración de Infraestructura On-Premises a AWS",
    description: "Migración de servidores Windows/Linux a EC2, configuración de VPC, RDS y estrategia de backups automatizados. Mejora de disponibilidad del 99.5%.",
    technologies: ["AWS EC2", "VPC", "RDS", "Backup"],
    category: "Cloud Migration",
    metrics: {
      availability: "99.5% uptime",
      migration: "15 servidores migrados"
    }
  },
  {
    id: 3,
    title: "Automatización de Operaciones con IaC",
    description: "Desarrollo de plantillas CloudFormation para estandarizar despliegues, reducción de errores humanos y mejora del control operativo mediante versionado de infraestructura.",
    technologies: ["CloudFormation", "IaC", "Git", "CI/CD"],
    category: "DevOps",
    metrics: {
      errors: "80% reducción de errores",
      time: "50% menos tiempo de configuración"
    }
  },
  {
    id: 4,
    title: "Gestión de Identidades y Accesos (IAM)",
    description: "Implementación de políticas IAM granulares, integración con Azure AD y Office 365 para gestión centralizada de identidades y seguridad.",
    technologies: ["AWS IAM", "Azure AD", "Office 365", "SSO"],
    category: "Security",
    metrics: {
      security: "100% políticas aplicadas",
      access: "Centralización de accesos"
    }
  },
  {
    id: 5,
    title: "Optimización de Costos Cloud (FinOps)",
    description: "Análisis y optimización de costos AWS mediante Cost Explorer, implementación de políticas de tagging y right-sizing de recursos. Reducción de costos del 25%.",
    technologies: ["Cost Explorer", "Tagging", "FinOps", "Monitoring"],
    category: "Cost Optimization",
    metrics: {
      savings: "25% reducción de costos",
      visibility: "100% recursos etiquetados"
    }
  },
  {
    id: 6,
    title: "Backup y Disaster Recovery",
    description: "Estrategia integral de backups automatizados (LTO y cloud), implementación de políticas de retención y planes de recuperación ante desastres.",
    technologies: ["AWS Backup", "LTO", "Disaster Recovery", "Automation"],
    category: "Operations",
    metrics: {
      rpo: "RPO < 4 horas",
      rto: "RTO < 24 horas"
    }
  }
];

