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
    company: "Tecnologia Activa",
    role: "Full Stack Developer (Backend Focus)",
    period: "2025 – Current",
    technologies: ["JavaScript","React", "Node.js", "Express", "MySQL"],
    responsibilities: [
      "Developed and maintained RESTful APIs for web applications",
      "Collaborated on frontend components using React",
      "Optimized MySQL database schemas and queries",
      "Participated in code reviews and architectural decisions",
    ]
  },
  {
    company: "Penaqua",
    project: "Estoy Aca App",
    role: "Backend Developer",
    period: "2024 – Present",
    technologies: ["PHP", "Laravel 11", "MySQL", "Docker"],
    responsibilities: [
      "Implemented and optimized geolocation features to connect users efficiently",
      "Developed precise queries based on user preferences (time, category, location, etc)",
      "Containerized application using Docker for easier deployment",
      "Improved API response time by 40% through query optimization"
    ]
  },
  {
    company: "Alquileres Costeros",
    role: "Personal Project",
    period: "2024 – Discontinued ",
    technologies: ["C#", ".NET 8", "WPF", "SQLite"],
    responsibilities: [
      "Developed desktop application for property rental management",
      "Implemented rental tracking and customer management features",
      "Created financial reporting system and interactive calendar",
      "Designed one-time payment business model"
    ]
  },
  {
    company: "IT Hotbed",
    project: "Quinto Impacto",
    role: "Backend Developer",
    period: "2024",
    technologies: ["Java 17", "Spring Boot", "MySQL", "Microservices"],
    responsibilities: [
      "Designed and implemented RESTful APIs for backend services",
      "Optimized database queries improving system performance",
      "Implemented JWT authentication and authorization",
      "Worked with Clean Architecture method"
    ]
  },

];

export default experiences;