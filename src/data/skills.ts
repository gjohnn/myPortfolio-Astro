export interface Skill {
    name: string;
    icon: string;
    colorClass: string;
}

export interface CarouselSection {
    title: string;
    color: string;
    skills: Skill[];
}
export const skillsCarousels: CarouselSection[] = [
    {
        title: "Backend Development",
        color: "text-red-100",
        skills: [
            { name: "Java", icon: "logos:java", colorClass: "text-red-400" },
            { name: "Spring Boot", icon: "logos:spring-icon", colorClass: "text-red-400" },
            { name: "Node.js", icon: "logos:nodejs-icon", colorClass: "text-red-400" },
            { name: "Express", icon: "simple-icons:express", colorClass: "text-red-400" },
            { name: "TypeScript", icon: "skill-icons:typescript", colorClass: "text-red-400" },
        ],

    },
    {
        title: "Database Management",
        color: "text-orange-100",
        skills: [
            { name: "PostgreSQL", icon: "logos:postgresql", colorClass: "text-orange-400" },
            { name: "MySQL", icon: "logos:mysql-icon", colorClass: "text-orange-400" },
            { name: "Supabase", icon: "logos:supabase-icon", colorClass: "text-orange-400" },
            { name: "Redis", icon: "devicon:redis", colorClass: "text-orange-400" },
            { name: "Logical Decoding", icon: "mdi:database-search", colorClass: "text-orange-400" },
        ],
    },
    {
        title: "DevOps & Cloud",
        color: "text-cyan-100",
        skills: [
            { name: "Docker", icon: "logos:docker-icon", colorClass: "text-cyan-400" },
            { name: "AWS", icon: "logos:aws", colorClass: "text-cyan-400" },
            { name: "Nginx", icon: "logos:nginx", colorClass: "text-cyan-400" },
            { name: "WSL", icon: "mdi:linux", colorClass: "text-cyan-400" },
            { name: "GitHub Actions", icon: "logos:github-actions", colorClass: "text-cyan-400" },
        ],
    }
    ,
    {
        title: "Security",
        color: "text-lime-100",
        skills: [
            { name: "JWT", icon: "logos:jwt-icon", colorClass: "text-lime-400" },
            { name: "OAuth2", icon: "cbi:oauth", colorClass: "text-lime-400" },
            { name: "Safe Zones", icon: "mdi:shield-check", colorClass: "text-lime-400" },
            { name: "Session Management", icon: "mdi:account-lock", colorClass: "text-lime-400" },
        ],
    },
    {
        title: "Team Collaboration",
        color: "text-pink-100",
        skills: [
            { name: "Postman", icon: "logos:postman-icon", colorClass: "text-pink-400" },
            { name: "Log Analysis", icon: "mdi:file-search-outline", colorClass: "text-pink-400" },
            { name: "Git", icon: "logos:git-icon", colorClass: "text-pink-400" },
            { name: "Agile Methodologies", icon: "fluent:people-team-16-filled", colorClass: "text-pink-400" },
            { name: "Discord", icon: "logos:discord-icon", colorClass: "text-pink-400" },
            { name: "Trello", icon: "logos:trello", colorClass: "text-pink-400" },
            { name: "Jira", icon: "logos:jira", colorClass: "text-pink-400" },
        ],
    }
    ,
    {
        title: "Architecture & Optimization",
        color: "text-purple-100",
        skills: [
            { name: "Microservices", icon: "carbon:microservices-1", colorClass: "text-purple-400" },
            { name: "Event-Driven Design", icon: "mdi:lightning-bolt-outline", colorClass: "text-purple-400" },
            { name: "Caching Strategies", icon: "mdi:database-clock", colorClass: "text-purple-400" },
            { name: "Pagination Optimization", icon: "mdi:page-layout-header-footer", colorClass: "text-purple-400" },
        ],
    },
];
