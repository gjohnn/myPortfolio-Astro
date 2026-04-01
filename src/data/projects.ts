import type { Lang } from '../i18n/ui';

export interface Technology {
  name: string;
}

export interface Project {
  title: string;
  description: string;
  icon: string;
  technologies: Technology[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  logoUrl?: string;
}

const es: Project[] = [
  {
    title: "Gasto Cero",
    description: "Aplicación web moderna para gestión de finanzas personales con seguimiento de gastos e ingresos en tiempo real.",
    icon: "fas fa-wallet",
    logoUrl: "/logo-gastocero.png",
    technologies: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: "Vercel" }
    ],
    features: ["Control de Gastos", "Seguimiento de Ingresos", "Dashboard Interactivo", "Análisis Financiero"],
    liveUrl: "https://gasto-cero.vercel.app/",
    featured: true
  },
  {
    title: ".NET API Project",
    description: "Plantilla backend de nivel empresarial con arquitectura limpia, EF Core, autenticación JWT e integración con PostgreSQL.",
    icon: "fab fa-microsoft",
    technologies: [
      { name: "C# 12" },
      { name: ".NET 8" },
      { name: "PostgreSQL" },
      { name: "JWT" }
    ],
    features: ["Arquitectura Limpia", "Patrón CQRS", "Patrón Repository", "Versionado de API"],
    githubUrl: "https://github.com/gjohnn/base_projects_dotnet8.git"
  },
  {
    title: "My App Installer",
    description: "Script de PowerShell automatizado para instalar aplicaciones esenciales de Windows usando Winget.",
    icon: "fas fa-download",
    technologies: [
      { name: "PowerShell 7" },
      { name: "Winget" },
      { name: "Windows" }
    ],
    features: ["Instalación por Lotes", "Manejo de Errores", "Listas Personalizables"],
    githubUrl: "https://github.com/gjohnn/my-app-installer"
  },
  {
    title: "AlquiGes",
    description: "Sistema de gestión de alquileres con seguimiento de clientes, control de inventario e informes financieros.",
    icon: "fas fa-warehouse",
    technologies: [
      { name: "Next.js" },
      { name: "Supabase" },
      { name: "TypeScript" }
    ],
    features: ["Gestión de Clientes", "Control de Inventario", "Informes Financieros"]
  }
];

const en: Project[] = [
  {
    title: "Gasto Cero",
    description: "Modern web application for personal finance management with real-time expense and income tracking.",
    icon: "fas fa-wallet",
    logoUrl: "/logo-gastocero.png",
    technologies: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: "Vercel" }
    ],
    features: ["Expense Control", "Income Tracking", "Interactive Dashboard", "Financial Analysis"],
    liveUrl: "https://gasto-cero.vercel.app/",
    featured: true
  },
  {
    title: ".NET API Project",
    description: "Enterprise-grade backend template with clean architecture, EF Core, JWT auth, and PostgreSQL integration.",
    icon: "fab fa-microsoft",
    technologies: [
      { name: "C# 12" },
      { name: ".NET 8" },
      { name: "PostgreSQL" },
      { name: "JWT" }
    ],
    features: ["Clean Architecture", "CQRS Pattern", "Repository Pattern", "API Versioning"],
    githubUrl: "https://github.com/gjohnn/base_projects_dotnet8.git"
  },
  {
    title: "My App Installer",
    description: "Automated PowerShell script for installing essential Windows applications using Winget.",
    icon: "fas fa-download",
    technologies: [
      { name: "PowerShell 7" },
      { name: "Winget" },
      { name: "Windows" }
    ],
    features: ["Batch Installation", "Error Handling", "Customizable Lists"],
    githubUrl: "https://github.com/gjohnn/my-app-installer"
  },
  {
    title: "AlquiGes",
    description: "Rental management system with client tracking, inventory control, and financial reporting.",
    icon: "fas fa-warehouse",
    technologies: [
      { name: "Next.js" },
      { name: "Supabase" },
      { name: "TypeScript" }
    ],
    features: ["Client Management", "Inventory Control", "Financial Reports"]
  }
];

export const projects: Record<Lang, Project[]> = { es, en };

// Default export for backward compatibility
export default es;
