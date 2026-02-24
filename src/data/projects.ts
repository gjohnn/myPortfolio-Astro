import type { Lang } from '../i18n/ui';

export interface Technology {
  name: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  icon: string;
  iconColor: string;
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
    iconColor: "bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600",
    logoUrl: "/logo-gastocero.png",
    technologies: [
      { name: "React", color: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" },
      { name: "TypeScript", color: "bg-blue-500/20 text-blue-300 border border-blue-500/30" },
      { name: "Tailwind", color: "bg-sky-500/20 text-sky-300 border border-sky-500/30" },
      { name: "Vercel", color: "bg-gray-500/20 text-gray-300 border border-gray-500/30" }
    ],
    features: ["Control de Gastos", "Seguimiento de Ingresos", "Dashboard Interactivo", "Análisis Financiero"],
    liveUrl: "https://gasto-cero.vercel.app/",
    featured: true
  },
  {
    title: ".NET API Project",
    description: "Plantilla backend de nivel empresarial con arquitectura limpia, EF Core, autenticación JWT e integración con PostgreSQL.",
    icon: "fab fa-microsoft",
    iconColor: "bg-gradient-to-br from-blue-500 to-purple-600",
    technologies: [
      { name: "C# 12", color: "bg-purple-500/20 text-purple-300 border border-purple-500/30" },
      { name: ".NET 8", color: "bg-blue-500/20 text-blue-300 border border-blue-500/30" },
      { name: "PostgreSQL", color: "bg-blue-600/20 text-blue-200 border border-blue-600/30" },
      { name: "JWT", color: "bg-green-500/20 text-green-300 border border-green-500/30" }
    ],
    features: ["Arquitectura Limpia", "Patrón CQRS", "Patrón Repository", "Versionado de API"],
    githubUrl: "https://github.com/gjohnn/base_projects_dotnet8.git"
  },
  {
    title: "My App Installer",
    description: "Script de PowerShell automatizado para instalar aplicaciones esenciales de Windows usando Winget.",
    icon: "fas fa-download",
    iconColor: "bg-gradient-to-br from-green-500 to-cyan-600",
    technologies: [
      { name: "PowerShell 7", color: "bg-blue-500/20 text-blue-300 border border-blue-500/30" },
      { name: "Winget", color: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" },
      { name: "Windows", color: "bg-blue-600/20 text-blue-200 border border-blue-600/30" }
    ],
    features: ["Instalación por Lotes", "Manejo de Errores", "Listas Personalizables"],
    githubUrl: "https://github.com/gjohnn/my-app-installer"
  },
  {
    title: "AlquiGes",
    description: "Sistema de gestión de alquileres con seguimiento de clientes, control de inventario e informes financieros.",
    icon: "fas fa-warehouse",
    iconColor: "bg-gradient-to-br from-orange-500 to-red-600",
    technologies: [
      { name: "Next.js", color: "bg-purple-500/20 text-purple-300 border border-purple-500/30" },
      { name: "Supabase", color: "bg-green-500/20 text-green-300 border border-green-500/30" },
      { name: "TypeScript", color: "bg-blue-500/20 text-blue-300 border border-blue-500/30" }
    ],
    features: ["Gestión de Clientes", "Control de Inventario", "Informes Financieros"]
  }
];

const en: Project[] = [
  {
    title: "Gasto Cero",
    description: "Modern web application for personal finance management with real-time expense and income tracking.",
    icon: "fas fa-wallet",
    iconColor: "bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600",
    logoUrl: "/logo-gastocero.png",
    technologies: [
      { name: "React", color: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" },
      { name: "TypeScript", color: "bg-blue-500/20 text-blue-300 border border-blue-500/30" },
      { name: "Tailwind", color: "bg-sky-500/20 text-sky-300 border border-sky-500/30" },
      { name: "Vercel", color: "bg-gray-500/20 text-gray-300 border border-gray-500/30" }
    ],
    features: ["Expense Control", "Income Tracking", "Interactive Dashboard", "Financial Analysis"],
    liveUrl: "https://gasto-cero.vercel.app/",
    featured: true
  },
  {
    title: ".NET API Project",
    description: "Enterprise-grade backend template with clean architecture, EF Core, JWT auth, and PostgreSQL integration.",
    icon: "fab fa-microsoft",
    iconColor: "bg-gradient-to-br from-blue-500 to-purple-600",
    technologies: [
      { name: "C# 12", color: "bg-purple-500/20 text-purple-300 border border-purple-500/30" },
      { name: ".NET 8", color: "bg-blue-500/20 text-blue-300 border border-blue-500/30" },
      { name: "PostgreSQL", color: "bg-blue-600/20 text-blue-200 border border-blue-600/30" },
      { name: "JWT", color: "bg-green-500/20 text-green-300 border border-green-500/30" }
    ],
    features: ["Clean Architecture", "CQRS Pattern", "Repository Pattern", "API Versioning"],
    githubUrl: "https://github.com/gjohnn/base_projects_dotnet8.git"
  },
  {
    title: "My App Installer",
    description: "Automated PowerShell script for installing essential Windows applications using Winget.",
    icon: "fas fa-download",
    iconColor: "bg-gradient-to-br from-green-500 to-cyan-600",
    technologies: [
      { name: "PowerShell 7", color: "bg-blue-500/20 text-blue-300 border border-blue-500/30" },
      { name: "Winget", color: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" },
      { name: "Windows", color: "bg-blue-600/20 text-blue-200 border border-blue-600/30" }
    ],
    features: ["Batch Installation", "Error Handling", "Customizable Lists"],
    githubUrl: "https://github.com/gjohnn/my-app-installer"
  },
  {
    title: "AlquiGes",
    description: "Rental management system with client tracking, inventory control, and financial reporting.",
    icon: "fas fa-warehouse",
    iconColor: "bg-gradient-to-br from-orange-500 to-red-600",
    technologies: [
      { name: "Next.js", color: "bg-purple-500/20 text-purple-300 border border-purple-500/30" },
      { name: "Supabase", color: "bg-green-500/20 text-green-300 border border-green-500/30" },
      { name: "TypeScript", color: "bg-blue-500/20 text-blue-300 border border-blue-500/30" }
    ],
    features: ["Client Management", "Inventory Control", "Financial Reports"]
  }
];

export const projects: Record<Lang, Project[]> = { es, en };

// Default export for backward compatibility
export default es;
