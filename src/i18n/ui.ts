export const languages = {
  es: 'ES',
  en: 'EN',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui: Record<Lang, Record<string, string>> = {
  es: {
    // ── Nav ──
    'nav.home': 'Inicio',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.viewCv': 'Ver CV',
    'nav.contact': 'Contacto',
    // Mobile bottom nav
    'nav.mobile.home': 'Inicio',
    'nav.mobile.exp': 'Exp',
    'nav.mobile.code': 'Code',
    'nav.mobile.mail': 'Mail',

    // ── Meta ──
    'meta.description': 'Juan Sebastián Guerrero Britos - Desarrollador de Software especializado en C#, JS/TS y Docker. Desarrollo backend, APIs y soluciones cloud.',
    'meta.title': 'Portfolio - Juan Sebastián Guerrero Britos',

    // ── Hero (index) ──
    'hero.role': 'Software Developer',
    'hero.description.1': 'Desarrollador Backend',
    'hero.description.2': 'diseño de sistemas',
    'hero.description.3': 'arquitecturas escalables',
    'hero.description.mid': 'especializado en',
    'hero.description.and': 'y',
    'hero.description.end': 'Construyo soluciones limpias y mantenibles a través de la',
    'hero.description.collab': 'colaboración',
    'hero.description.end2': 'y el aprendizaje continuo.',
    'hero.cta.work': 'Ver Mi Trabajo',
    'hero.cta.contact': 'Contáctame',
    'hero.stat.years': 'Años de Experiencia',
    'hero.stat.projects': 'Proyectos Completados',
    'hero.stat.tech': 'Tecnologías Dominadas',

    // ── Skills section (index) ──
    'skills.title': 'Mis Poderes',
    'skills.subtitle': 'Tecnologías y herramientas que uso para construir soluciones de software excepcionales',

    // ── Skills categories ──
    'skills.backend': 'Desarrollo Backend',
    'skills.database': 'Gestión de Bases de Datos',
    'skills.devops': 'DevOps y Cloud',
    'skills.security': 'Seguridad',
    'skills.team': 'Trabajo en Equipo',
    'skills.architecture': 'Arquitectura y Optimización',

    // ── Education section (index) ──
    'education.title': 'Historia de Origen',
    'education.subtitle': 'Mi trayectoria académica y certificaciones',
    'education.activeNow': 'ACTIVO AHORA',
    'education.completed': 'COMPLETADO',

    // ── Education data ──
    'edu.associate.title': 'Tecnicatura en Desarrollo de Software',
    'edu.associate.institution': 'UTN (Universidad Tecnológica Nacional)',
    'edu.associate.description': 'Título técnico en Ciencias de la Computación con enfoque en desarrollo de software y principios de ingeniería.',
    'edu.linux.title': 'Administrador GNU/Linux',
    'edu.linux.institution': 'Certificación Profesional',
    'edu.linux.description': 'Certificación avanzada en administración y gestión de sistemas Linux.',
    'edu.school.title': 'Escuela con Orientación en TI',
    'edu.school.institution': 'Escuela de Comercio Martin Zapata',
    'edu.school.description': 'Educación secundaria con especialización en Tecnología de la Información y sistemas informáticos.',
    'edu.english.title': 'Certificación B2 en Inglés',
    'edu.english.institution': 'Colegio de Lenguas Extranjeras',
    'edu.english.description': 'Certificación de nivel intermedio-alto en inglés con enfoque en comunicación técnica y profesional.',

    // ── CTA (index) ──
    'cta.teamUp': '¡Hagamos equipo!',
    'cta.title': '¿Listo para Trabajar Juntos?',
    'cta.description': 'Siempre estoy interesado en nuevas oportunidades y proyectos emocionantes. Hablemos sobre cómo podemos llevar tus ideas a la realidad.',
    'cta.startProject': 'Iniciar un Proyecto',
    'cta.downloadResume': 'Descargar CV',

    // ── Experience page ──
    'exp.title': 'Experiencia Profesional',
    'exp.subtitle': 'Un recorrido por mi carrera profesional, mostrando los roles, responsabilidades y logros que han formado mi experiencia en desarrollo de software.',
    'exp.impressed': '¡Impresionado?',
    'exp.interestedTitle': '¿Interesado en Mi Experiencia?',
    'exp.interestedDesc': 'Descarga mi currículum completo para información detallada sobre mi experiencia, habilidades y logros.',
    'exp.downloadFull': 'Descargar CV Completo',
    'exp.getInTouch': 'Contáctame',
    'exp.responsibilities': 'RESPONSABILIDADES',

    // ── Projects page ──
    'proj.title': 'Proyectos',
    'proj.subtitle': 'Desarrollo backend, APIs y soluciones de automatización',
    'proj.wantMore': '¿Quieres más?',
    'proj.moreOnGithub': 'Más proyectos y trabajo en curso en GitHub',
    'proj.viewGithub': 'Ver GitHub',
    'proj.getInTouch': 'Contáctame',
    'proj.featured': '¡Destacado!',
    'proj.github': 'GitHub',
    'proj.liveDemo': 'Demo en Vivo',
    'proj.privateProject': 'Proyecto Privado',

    // ── Contact page ──
    'contact.title': 'Conectemos',
    'contact.subtitle': 'Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tu visión.',
    'contact.quickContact': 'Contacto Rápido',
    'contact.email': 'Email',
    'contact.copyEmail': 'Copiar Dirección de Email',
    'contact.emailCopied': '¡Email Copiado!',
    'contact.copyFailed': 'Error al copiar - intenta de nuevo',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedinDesc': 'Perfil Profesional',
    'contact.github': 'GitHub',
    'contact.githubDesc': 'Ver Mi Código',
    'contact.letsDiscuss': 'Hablemos',
    'contact.projectCollab': 'Colaboración en Proyectos',
    'contact.projectCollabDesc': '¿Buscas un desarrollador backend para tu próximo proyecto? Hablemos sobre cómo puedo ayudar a hacer realidad tus ideas.',
    'contact.jobOpportunities': 'Oportunidades Laborales',
    'contact.jobOpportunitiesDesc': 'Interesado en oportunidades full-time o freelance en desarrollo backend, APIs y soluciones cloud.',
    'contact.techDiscussion': 'Discusión Técnica',
    'contact.techDiscussionDesc': 'Siempre entusiasmado por discutir tecnología, compartir conocimiento y aprender de otros desarrolladores.',
    'contact.responseTime': 'Usualmente responde en 24 horas',
    'contact.letsGo': '¡Vamos!',
    'contact.readyToStart': '¿Listo para Comenzar Algo Genial?',
    'contact.readyDesc': 'Ya sea que tengas un proyecto específico en mente o solo quieras explorar posibilidades, estoy aquí para ayudar a convertir tu visión en realidad.',
    'contact.sendEmail': 'Envíame un Email',

    // ── CV page ──
    'cv.dossier': '¡Mi expediente!',
    'cv.title': 'Mi Currículum',
    'cv.subtitle': 'Ve o descarga mi CV profesional completo',
    'cv.downloadCv': 'Descargar CV',
    'cv.contactMe': 'Contáctame',
    'cv.viewMobile': 'Ver CV en Móvil',
    'cv.mobileDesc': 'Para una mejor experiencia de visualización en dispositivos móviles, descarga el PDF.',
    'cv.openPdf': 'Abrir PDF',
    'cv.lastUpdated': 'Última actualización:',

    // ── Footer ──
    'footer.description': 'Desarrollador de Software especializado en desarrollo backend con C#, JS/TS y tecnologías cloud.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.connect': 'Conectar',
    'footer.allRights': 'Todos los derechos reservados.',
    'footer.builtWith': 'Hecho con',

    // ── Header subtitle ──
    'header.role': 'Desarrollador de Software',
  },
  en: {
    // ── Nav ──
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.viewCv': 'View CV',
    'nav.contact': 'Contact',
    // Mobile bottom nav
    'nav.mobile.home': 'Home',
    'nav.mobile.exp': 'Exp',
    'nav.mobile.code': 'Code',
    'nav.mobile.mail': 'Mail',

    // ── Meta ──
    'meta.description': 'Juan Sebastián Guerrero Britos - Software Developer specialized in C#, JS/TS and Docker. Backend development, APIs and cloud solutions.',
    'meta.title': 'Portfolio - Juan Sebastián Guerrero Britos',

    // ── Hero (index) ──
    'hero.role': 'Software Developer',
    'hero.description.1': 'Backend developer',
    'hero.description.2': 'system design',
    'hero.description.3': 'scalable architectures',
    'hero.description.mid': 'specializing in',
    'hero.description.and': 'and',
    'hero.description.end': 'I build clean, maintainable solutions through',
    'hero.description.collab': 'collaboration',
    'hero.description.end2': 'and continuous learning.',
    'hero.cta.work': 'View My Work',
    'hero.cta.contact': 'Get In Touch',
    'hero.stat.years': 'Years Experience',
    'hero.stat.projects': 'Projects Completed',
    'hero.stat.tech': 'Technologies Mastered',

    // ── Skills section (index) ──
    'skills.title': 'My Powers',
    'skills.subtitle': 'Technologies and tools I use to build exceptional software solutions',

    // ── Skills categories ──
    'skills.backend': 'Backend Development',
    'skills.database': 'Database Management',
    'skills.devops': 'DevOps & Cloud',
    'skills.security': 'Security',
    'skills.team': 'Team Collaboration',
    'skills.architecture': 'Architecture & Optimization',

    // ── Education section (index) ──
    'education.title': 'Origin Story',
    'education.subtitle': 'My academic journey and certifications',
    'education.activeNow': 'ACTIVE NOW',
    'education.completed': 'COMPLETED',

    // ── Education data ──
    'edu.associate.title': 'Technical Degree in Software Development',
    'edu.associate.institution': 'UTN (Universidad Tecnológica Nacional)',
    'edu.associate.description': 'Technical degree in Computer Science with focus on software development and engineering principles.',
    'edu.linux.title': 'GNU/Linux Manager',
    'edu.linux.institution': 'Professional Certification',
    'edu.linux.description': 'Advanced Linux system administration and management certification.',
    'edu.school.title': 'IT Orientation School',
    'edu.school.institution': 'Escuela de Comercio Martin Zapata',
    'edu.school.description': 'Secondary education with specialization in Information Technology and computer systems.',
    'edu.english.title': 'B2 English Certification',
    'edu.english.institution': 'Colegio de Lenguas Extranjeras',
    'edu.english.description': 'Upper intermediate level English certification with focus on technical and professional communication.',

    // ── CTA (index) ──
    'cta.teamUp': "Let's team up!",
    'cta.title': 'Ready to Work Together?',
    'cta.description': "I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life.",
    'cta.startProject': 'Start a Project',
    'cta.downloadResume': 'Download Resume',

    // ── Experience page ──
    'exp.title': 'Professional Experience',
    'exp.subtitle': 'A journey through my professional career, showcasing the roles, responsibilities, and achievements that have shaped my expertise in software development.',
    'exp.impressed': 'Impressed?',
    'exp.interestedTitle': 'Interested in My Background?',
    'exp.interestedDesc': 'Download my complete resume for detailed information about my experience, skills, and accomplishments.',
    'exp.downloadFull': 'Download Full Resume',
    'exp.getInTouch': 'Get In Touch',
    'exp.responsibilities': 'RESPONSIBILITIES',

    // ── Projects page ──
    'proj.title': 'Projects',
    'proj.subtitle': 'Backend development, APIs, and automation solutions',
    'proj.wantMore': 'Want more?',
    'proj.moreOnGithub': 'More projects and ongoing work on GitHub',
    'proj.viewGithub': 'View GitHub',
    'proj.getInTouch': 'Get in Touch',
    'proj.featured': 'Featured!',
    'proj.github': 'GitHub',
    'proj.liveDemo': 'Live Demo',
    'proj.privateProject': 'Private Project',

    // ── Contact page ──
    'contact.title': "Let's Connect",
    'contact.subtitle': "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    'contact.quickContact': 'Quick Contact',
    'contact.email': 'Email',
    'contact.copyEmail': 'Copy Email Address',
    'contact.emailCopied': 'Email Copied!',
    'contact.copyFailed': 'Copy failed - try again',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedinDesc': 'Professional Profile',
    'contact.github': 'GitHub',
    'contact.githubDesc': 'View My Code',
    'contact.letsDiscuss': "Let's Discuss",
    'contact.projectCollab': 'Project Collaboration',
    'contact.projectCollabDesc': "Looking for a backend developer for your next project? Let's talk about how I can help bring your ideas to life.",
    'contact.jobOpportunities': 'Job Opportunities',
    'contact.jobOpportunitiesDesc': 'Interested in full-time or freelance opportunities in backend development, APIs, and cloud solutions.',
    'contact.techDiscussion': 'Technical Discussion',
    'contact.techDiscussionDesc': 'Always excited to discuss technology, share knowledge, and learn from fellow developers.',
    'contact.responseTime': 'Usually responds within 24 hours',
    'contact.letsGo': "Let's go!",
    'contact.readyToStart': 'Ready to Start Something Great?',
    'contact.readyDesc': "Whether you have a specific project in mind or just want to explore possibilities, I'm here to help turn your vision into reality.",
    'contact.sendEmail': 'Send me an Email',

    // ── CV page ──
    'cv.dossier': 'My dossier!',
    'cv.title': 'My Resume',
    'cv.subtitle': 'View or download my complete professional CV',
    'cv.downloadCv': 'Download CV',
    'cv.contactMe': 'Contact Me',
    'cv.viewMobile': 'View CV on Mobile',
    'cv.mobileDesc': 'For the best viewing experience on mobile devices, please download the PDF.',
    'cv.openPdf': 'Open PDF',
    'cv.lastUpdated': 'Last updated:',

    // ── Footer ──
    'footer.description': 'Software Developer specialized in backend development with C#, JS/TS, and cloud technologies.',
    'footer.quickLinks': 'Quick Links',
    'footer.connect': 'Connect',
    'footer.allRights': 'All rights reserved.',
    'footer.builtWith': 'Built with',

    // ── Header subtitle ──
    'header.role': 'Software Developer',
  },
} as const;
