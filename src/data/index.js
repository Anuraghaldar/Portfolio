export const personalInfo = {
    name: "Anurag Haldar",
    role: "Full Stack Developer",
    summary: "I'm a Full Stack Developer specializing in React, TypeScript, and NestJS, building scalable, high-performance products with clean architecture, measurable impact, and production reliability.",
    location: "Chennai, India",
    phone: "+91 8778315014",
    email: "anuraghaldar1403@gmail.com",
    linkedin: "https://www.linkedin.com/in/anurag-haldar-541536273/",
    github: "https://github.com/Anuraghaldar",
    linkedinHandle: "@Anuraghaldar",
    githubHandle: "@Anuraghaldar",
    portrait: "",
    heroImage: "",
    headline: "Building Scalable Web Apps · Full Stack Developer · AI Enthusiast",
    mission: "I'm a Full Stack Developer specializing in React, TypeScript, and NestJS, building scalable, high-performance products with clean architecture, measurable impact, and production reliability.",
    ctaPrimary: "See My Work",
    ctaSecondary: "Let's Collaborate",
};

export const heroMetrics = [
    {
        value: 1,
        suffix: "+",
        label: "Years in teams",
        highlight: true,
    },
    {
        value: 10,
        suffix: "+",
        label: "Reusable UI modules",
        highlight: false,
    },
    {
        value: 25,
        suffix: "+",
        label: "Technologies Mastered",
        highlight: false,
    },
    {
        value: 15,
        suffix: "+",
        label: "Production fixes",
        highlight: false,
    },
];

export const skills = {
    "Frontend Systems": [
        { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
        { name: "Redux", icon: "https://skillicons.dev/icons?i=redux" },
        { name: "React Query", icon: "/Portfolio/icons/react-query.svg" },
        { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" },
        { name: "React", icon: "https://skillicons.dev/icons?i=react" },
        { name: "CSS3", icon: "https://skillicons.dev/icons?i=css" },
        { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
        { name: "Material UI", icon: "https://skillicons.dev/icons?i=materialui" },
        { name: "Framer Motion", icon: "https://images.seeklogo.com/logo-png/44/1/framer-motion-logo-png_seeklogo-446185.png",imgClass: "rounded-xl" },
    ],
    "Backend Services": [
        { name: "REST APIs", icon: "https://img.icons8.com/color/48/api-settings.png" },
        { name: "Express.js", icon: "https://skillicons.dev/icons?i=express" },
        { name: "NestJS", icon: "https://skillicons.dev/icons?i=nestjs" },
        { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
        { name: "JWT", icon: "https://logodix.com/logo/1989638.png", imgClass: "rounded-xl" },
    ],
    "Database": [
        { name: "SQL", icon: "https://img.icons8.com/fluency/48/sql.png" },
        { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
    ],
    "Programming Languages": [
        { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
        { name: "Python", icon: "https://skillicons.dev/icons?i=py" },
    ],
    "Tooling & Collaboration": [
        { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
        { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
        { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
        { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
        { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
        { name: "Agile", icon: "https://img.icons8.com/color/48/sprint-iteration.png" },
        { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
    ],
};

export const experience = [
    {
        company: "NCompass Techstudio Pvt. Ltd.",
        role: "Software Developer",
        period: "Jun 2025 – Present",
        location: "Chennai, India",
        website: "https://ncompass.inc/",
        logo: "",
        tech: ["React", "TypeScript", "NestJS", "React Query", "Redux"],
        description: [
            "Built and enhanced 10+ reusable UI components across an enterprise micro-frontend system, improving consistency and delivery speed.",
            "Partnered with backend squads to integrate NestJS services into frontend workflows, streamlining feature handoffs and accelerating releases by roughly 20%.",
            "Resolved data synchronization issues that previously slowed dashboards, delivering ~30% faster load times for customer journeys.",
            "Diagnosed and fixed 15+ production issues using structured RCA, stabilizing key SaaS modules before high-traffic launches.",
            "Implemented resilient loading states, error boundaries, and shared utilities that elevated user experience for enterprise accounts.",
            "Actively contributed through Agile ceremonies, owning sprint planning commitments and demoing increments to stakeholders.",
        ],
    },
    {
        company: "NCompass Techstudio Pvt. Ltd.",
        role: "Software Developer Intern",
        period: "Jan 2025 – May 2025",
        location: "Chennai, India",
        website: "https://ncompass.inc/",
        logo: "",
        tech: ["React", "JavaScript", "HTML", "CSS", "Redux"],
        description: [
            "Delivered responsive interfaces from supplied UI specs using React, JavaScript, HTML, and CSS within Linux-based environments.",
            "Connected frontend components to team-owned backend services while learning advanced React and state patterns.",
            "Used Redux for shared state, refined component behavior, and supported QA by debugging issues alongside senior developers.",
            "Worked in Git/GitHub workflows for reviews, ensuring code met accessibility and performance expectations.",
        ],
    },
];

export const projects = [
    {
        title: "B2B SaaS Platform",
        subtitle: "Micro-frontend powered procurement", 
        tech: ["React", "TypeScript", "React Query", "Micro Frontends"],
        description: "Led frontend delivery for admin and buyer applications, adding configurable form flows, analytics, and reusable components to keep enterprise buyers on task.",
        highlights: [
            "Developed and hardened 10+ reusable UI modules inside an enterprise micro-frontend shell to keep admin and buyer journeys consistent.",
            "Implemented dynamic additional fields for complex forms so ops teams could configure workflows without code changes.",
            "Instrumented 14 custom Google Analytics events and validated telemetry prior to launch to ensure trustworthy usage insights.",
            "Partnered with platform engineers on the Redux → React Query migration, improving perceived responsiveness and data integrity."
        ],
        metrics: [
            { label: "Reusable modules", value: "10+" },
            { label: "Custom events", value: "14" },
            { label: "Technologies Mastered", value: "20+" },
        ],
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
        featured: true,
    },
    {
        title: "IBEX – Full Stack Application",
        subtitle: "Real-time operations console",
        tech: ["React", "NestJS", "Node.js", "REST"],
        description: "Integrated existing NestJS services with a refreshed React interface, solving real-time data consistency gaps to improve decision-making reliability.",
        highlights: [
            "Resolved data synchronization defects across real-time dashboards, trimming load times by roughly 30%.",
            "Hooked React views into established NestJS services, ensuring business-critical workflows stayed reliable during the refresh.",
            "Built shared utility hooks for polling and optimistic updates so operators always saw the latest system status.",
            "Closed production issues tied to stale caches by introducing defensive error states and retry logic."
        ],
        metrics: [
            { label: "Latency gain", value: "30% faster" },
            { label: "Stack", value: "React + Nest" },
        ],
        category: "Full Stack",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
        featured: false,
    },
];

export const education = [
    {
        degree: "B.Tech in Computer Science and Engineering",
        institution: "SRM Institute of Science and Technology, Ramapuram",
        period: "2021 – 2025",
        grade: "CGPA: 9.76",
    },
];

export const certifications = [
    {
        name: "Database Management Systems",
        issuer: "NPTEL",
        date: "2024",
        logo: "https://img.icons8.com/color/48/database.png",
        skills: ["DBMS"],
        description: "In-depth coursework on database design, normalization, and query optimization.",
    },
    {
        name: "Python with Data Science",
        issuer: "NPTEL",
        date: "2024",
        logo: "https://img.icons8.com/color/48/python.png",
        skills: ["Python"],
        description: "Hands-on exploration of Python for data wrangling, visualization, and analytics.",
    },
    {
        name: "Data Visualization using Python and Excel",
        issuer: "Coursera",
        date: "2023",
        logo: "https://img.icons8.com/color/48/combo-chart--v1.png",
        skills: ["Data Visualization"],
        description: "Built interactive dashboards to communicate metrics clearly to stakeholders.",
    },
    {
        name: "React – The Complete Guide 2025",
        issuer: "Udemy",
        date: "2025",
        logo: "https://img.icons8.com/color/48/react-native.png",
        skills: ["React"],
        description: "Deep dive into modern React patterns, performance, and production deployment.",
    },
];

export const blogs = [];