// src/data/experiences.ts
import type { Lang } from '../i18n/ui';

export interface Experience {
  company: string;
  companyUrl?: string;
  project?: string;
  projectUrl?: string;
  role: string;
  period: string;
  technologies: string[];
  responsibilities: string[];
}

const es: Experience[] = [
  {
    company: "Idus software",
    companyUrl: "https://idus.com.ar",
    role: "Desarrollador Back End",
    period: "Dic 2025 – Presente",
    technologies: [
      "PHP",
      "Integraciones de Ecosistemas",
      "Refactorización Legacy",
      "Agentes de IA",
      "Arquitectura Orientada a Negocio",
    ],
    responsibilities: [
      "Integración de Ecosistemas: Desarrollo y mantenimiento de conexiones críticas entre plataformas externas y sistemas internos mediante PHP moderno.",
      "Modernización y Refactorización: Optimización de código legacy, priorizando siempre la lógica de negocio y el rendimiento del sistema.",
      "Productividad con IA: Implementación y ajuste de Agentes de IA personalizados para automatizar flujos de trabajo técnicos y acelerar el velocity del equipo.",
      "Arquitectura Orientada a Negocio: Traducción de requerimientos comerciales en soluciones técnicas escalables y fáciles de mantener.",
    ],
  },
  {
    company: "Apequa",
    companyUrl: "https://apequa.com",
    project: "Estoy Acá – App Móvil",
    projectUrl: "https://estoyaca.com.ar",
    role: "Tech Lead Manager",
    period: "Ago 2024 – Presente",
    technologies: [
      "Node.js / TypeScript",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "VPS Cloud Server",
    ],
    responsibilities: [
      "Lideré la arquitectura backend y el diseño del sistema de una app de geolocalización en tiempo real",
      "Implementé manejo de fecha/hora internacional para soportar uso multi-zona horaria",
      "Integré manejo de formularios parcialmente completados con auto-guardado",
      "Refactoricé la capa de servicios para mejorar escalabilidad y mantenibilidad",
      "Reduje el tiempo de respuesta de API en un 40% mediante optimización avanzada de consultas",
      "Mejoré la estrategia de manejo de errores en capas frontend y backend",
      "Gestioné el rendimiento y la estabilidad del VPS mediante configuración optimizada",
      "Desarrollé filtros de búsqueda por categoría/hora/ubicación con alta precisión",
      "Contenericé servicios usando Docker para pipelines de despliegue consistentes",
    ],
  },
  {
    company: "Tecnología Activa",
    role: "Desarrollador Full Stack (Orientado a Backend)",
    period: "Feb 2025 – Jul 2025",
    technologies: ["JavaScript", "React", "Node.js", "Express", "MySQL"],
    responsibilities: [
      "Construí y mantuve APIs RESTful para aplicaciones internas y externas",
      "Refactoricé esquemas y consultas MySQL para mejor normalización y velocidad",
      "Contribuí a componentes frontend usando React y gestión de estado basada en contexto",
      "Manejé lógica de infraestructura para gestión de dispositivos OLTs, ONUs y NAPs",
      "Lideré la migración y reestructuración de modelos de base de datos legacy",
      "Participé en revisiones de arquitectura y mejoras de procesos DevOps",
    ],
  },
  {
    company: "Alquileres Costeros",
    role: "Desarrollador Solo (Proyecto Discontinuado)",
    period: "2024",
    technologies: ["C#", ".NET 8", "WPF", "SQLite"],
    responsibilities: [
      "Diseñé y desarrollé una app de escritorio para gestionar propiedades de alquiler temporal",
      "Implementé flujo de reservas, registros de clientes y calendario de disponibilidad",
      "Construí un panel financiero con generación automática de facturas",
      "Planifiqué y probé un modelo de licencia de compra única",
    ],
  },
  {
    company: "IT Hotbed",
    project: "Quinto Impacto",
    role: "Desarrollador Backend",
    period: "2024",
    technologies: ["Java 17", "Spring Boot", "MySQL", "Microservicios"],
    responsibilities: [
      "Desarrollé microservicios y APIs usando Spring Boot con principios de Arquitectura Limpia",
      "Implementé autenticación basada en JWT y control de acceso por roles",
      "Mejoré el rendimiento del sistema optimizando consultas SQL e índices",
      "Colaboré con equipos frontend y QA en un entorno de entrega ágil",
    ],
  },
];

const en: Experience[] = [
  {
    company: "Idus software",
    companyUrl: "https://idus.com.ar",
    role: "Back End Developer",
    period: "Dec 2025 – Present",
    technologies: [
      "PHP",
      "Ecosystem Integrations",
      "Legacy Refactoring",
      "AI Agents",
      "Business-Driven Architecture",
    ],
    responsibilities: [
      "Ecosystem Integration: Development and maintenance of critical connections between external platforms and internal systems using modern PHP.",
      "Modernization & Refactoring: Optimization of legacy code, always prioritizing business logic and system performance.",
      "Productivity with AI: Implementation and tuning of custom AI Agents to automate technical workflows and accelerate team velocity.",
      "Business-Driven Architecture: Translation of commercial requirements into scalable and maintainable technical solutions.",
    ],
  },
  {
    company: "Apequa",
    companyUrl: "https://apequa.com",
    project: "Estoy Acá – Mobile App",
    projectUrl: "https://estoyaca.com.ar",
    role: "Tech Lead Manager",
    period: "Aug 2024 – Present",
    technologies: [
      "Node.js / TypeScript",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "VPS Cloud Server",
    ],
    responsibilities: [
      "Led the backend architecture and system design of a real-time geolocation app",
      "Implemented international date/time handling to support multi-timezone usage",
      "Integrated partially-filled form handling with auto-save functionality",
      "Refactored service layer for improved scalability and maintainability",
      "Reduced API response time by 40% through advanced query optimization",
      "Improved error-handling strategy across frontend and backend layers",
      "Managed VPS performance and stability through optimized server configuration",
      "Developed category/time/location-based search filters with high precision",
      "Containerized services using Docker for consistent deployment pipelines",
    ],
  },
  {
    company: "Tecnología Activa",
    role: "Full Stack Developer (Backend-Oriented)",
    period: "Feb 2025 – Jul 2025",
    technologies: ["JavaScript", "React", "Node.js", "Express", "MySQL"],
    responsibilities: [
      "Built and maintained RESTful APIs for internal and external applications",
      "Refactored MySQL schemas and queries for better normalization and speed",
      "Contributed to frontend components using React and context-based state management",
      "Handled infrastructure logic for OLTs, ONUs, and NAPs device management",
      "Led the migration and restructuring of legacy database models",
      "Participated in architectural reviews and DevOps process improvements",
    ],
  },
  {
    company: "Alquileres Costeros",
    role: "Solo Developer (Discontinued Project)",
    period: "2024",
    technologies: ["C#", ".NET 8", "WPF", "SQLite"],
    responsibilities: [
      "Designed and developed a desktop app for managing short-term rental properties",
      "Implemented booking flow, customer records, and availability calendar",
      "Built a financial dashboard with automatic invoice generation",
      "Planned and tested a one-time purchase licensing model",
    ],
  },
  {
    company: "IT Hotbed",
    project: "Quinto Impacto",
    role: "Backend Developer",
    period: "2024",
    technologies: ["Java 17", "Spring Boot", "MySQL", "Microservices"],
    responsibilities: [
      "Developed microservices and APIs using Spring Boot with Clean Architecture principles",
      "Implemented JWT-based authentication and role-based access control",
      "Improved system performance by optimizing SQL queries and indexes",
      "Collaborated with frontend and QA teams in an agile delivery environment",
    ],
  },
];

export const experiences: Record<Lang, Experience[]> = { es, en };
export default es;

export default experiences;
