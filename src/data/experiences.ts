// src/data/experiences.ts

interface Experience {
  id: number;
  company: string;
  project?: string;
  role: string;
  period: string;
  technologies: string[];
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Penaqua",
    project: "Estoy Aca App",
    role: "Backend Developer",
    period: "2023 – Present",
    technologies: ["PHP", "Laravel 11", "MySQL", "Docker"],
    responsibilities: [
      "Implemented and optimized geolocation features to connect users efficiently",
      "Developed precise queries based on user preferences (time, category, location)",
      "Containerized application using Docker for easier deployment",
      "Improved API response time by 40% through query optimization"
    ]
  },
  {
    id: 2,
    company: "Alquileres Costeros",
    role: "Personal Project",
    period: "2024 – Present",
    technologies: ["C#", ".NET 8", "WPF", "SQLite"],
    responsibilities: [
      "Developed desktop application for property rental management",
      "Implemented rental tracking and customer management features",
      "Created financial reporting system and interactive calendar",
      "Designed one-time payment business model"
    ]
  },
  {
    id: 3,
    company: "IT Hotbed",
    project: "Quinto Impacto",
    role: "Backend Developer",
    period: "2024",
    technologies: ["Java 17", "Spring Boot", "MySQL", "Microservices"],
    responsibilities: [
      "Designed and implemented RESTful APIs for backend services",
      "Optimized database queries improving system performance",
      "Implemented JWT authentication and authorization",
      "Worked with dependency injection and microservices architecture"
    ]
  },
  {
    id: 4,
    company: "Tecnologia Activa",
    role: "Full Stack Developer (Backend Focus)",
    period: "2023 – 2024",
    technologies: ["JavaScript","React", "Node.js", "Express", "MySQL"],
    responsibilities: [
      "Developed and maintained RESTful APIs for web applications",
      "Collaborated on frontend components using React",
      "Optimized MySQL database schemas and queries",
      "Participated in code reviews and architectural decisions",
      "Implemented CI/CD pipeline for automated deployments"
    ]
  }
];

export default experiences;