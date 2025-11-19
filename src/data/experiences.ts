// src/data/experiences.ts

interface Experience {
  company: string;
  project?: string;
  role: string;
  period: string;
  technologies: string[];
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    company: "Apequa",
    project: "Estoy Acá – Mobile App",
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

export default experiences;
