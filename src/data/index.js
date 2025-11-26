import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const personalInfo = {
    name: "Pritam Das",
    role: "SDWAN/SASE Network Automation Engineer & Software Engineer",
    summary: "Motivated Software Engineer with 2.5 years of experience in full-stack development and DevOps automation. Specialized in scalable systems, cloud-native development, and CI/CD pipelines. Proven ability to deliver production-grade solutions combining development and infrastructure reliability.",
    location: "Chennai, India",
    phone: "+91 6382609047",
    email: "er.pritamdas22@gmail.com",
    linkedin: "https://linkedin.com/in/er-pritamdas",
    github: "https://github.com/er-pritamdas",
};

export const skills = {
    DevOps: [
        { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
        { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
        { name: "Kubernetes", icon: "https://skillicons.dev/icons?i=kubernetes" },
        // { name: "Helm", icon: "https://icon.icepanel.io/Technology/png-shadow-512/Helm.png" },
        { name: "Jenkins", icon: "https://skillicons.dev/icons?i=jenkins" },
        // { name: "CI/CD", icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-ci-cd-devops-flaticons-lineal-color-flat-icons.png" },
        { name: "Ansible", icon: "https://skillicons.dev/icons?i=ansible" },
        { name: "Chef", icon: "https://cdn.prod.website-files.com/62a8969da1ab56329dc8c41e/643ccf55b8f65176b8927b44_637c6f908e6c817352497d0e_chef-software-vector-logo.png" },
        { name: "Terraform", icon: "https://skillicons.dev/icons?i=terraform" },
        { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
        { name: "F5", icon: "https://www.google.com/s2/favicons?domain=f5.com&sz=128" },
        { name: "Jira", icon: "https://icon.icepanel.io/Technology/svg/Jira.svg" },
        { name: "Nginx", icon: "https://skillicons.dev/icons?i=nginx" }
    ],
    Cloud: [
        { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" },
        { name: "Azure", icon: "https://skillicons.dev/icons?i=azure" },
        { name: "VMware", icon: "https://www.google.com/s2/favicons?domain=vmware.com&sz=128" }
    ],
    Databases: [
        { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
        { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" }
    ],
    Backend: [
        { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
        { name: "Express.js", icon: "https://skillicons.dev/icons?i=express" },
        { name: "REST API", icon: "public/RESTAPI.png" },
        { name: "JWT", icon: "https://jwt.io/img/pic_logo.svg" },
        { name: "Redux", icon: "https://skillicons.dev/icons?i=redux" }
    ],
    Frontend: [
        { name: "React.js", icon: "https://skillicons.dev/icons?i=react" },
        { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
        { name: "DaisyUI", icon: "https://img.daisyui.com/images/daisyui/mark-static.svg" },
        { name: "MaterialUI", icon: "https://skillicons.dev/icons?i=materialui" },
        { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" },
        { name: "CSS3", icon: "https://skillicons.dev/icons?i=css" },
        { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" }
    ],
    Networking: [
        { name: "SD-WAN", icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-wan-internet-of-things-flaticons-lineal-color-flat-icons.png" },
        { name: "SASE", icon: "https://www.google.com/s2/favicons?domain=paloaltonetworks.com&sz=128" },
        { name: "Cisco", icon: "https://www.google.com/s2/favicons?domain=cisco.com&sz=128" },
        { name: "Juniper", icon: "https://www.google.com/s2/favicons?domain=juniper.net&sz=128" },
        { name: "Arista", icon: "https://www.google.com/s2/favicons?domain=arista.com&sz=128" },
        { name: "Huawei", icon: "https://www.google.com/s2/favicons?domain=huawei.com&sz=128" }
    ],
    "AI Automation": [
        { name: "RAG", icon: "https://img.icons8.com/color/48/brain--v1.png" },
        { name: "N8N", icon: "https://www.google.com/s2/favicons?domain=n8n.io&sz=128" },
        { name: "MCP Server", icon: "https://img.icons8.com/color/48/server.png" }
    ],
    "Languages & Tools": [
        { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
        { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
        { name: "C", icon: "https://skillicons.dev/icons?i=c" },
        { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
        { name: "Bash", icon: "https://skillicons.dev/icons?i=bash" },
        { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
        { name: "PuTTY", icon: "https://www.google.com/s2/favicons?domain=putty.org&sz=128" },
        { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" }
    ]
};


export const experience = [
    {
        company: "Tata Communications",
        role: "DevOps Engineer",
        period: "Jul 2023 – Present",
        location: "Chennai, India",
        website: "https://tatacommunications.com",
        logo: "https://www.google.com/s2/favicons?domain=tatacommunications.com&sz=128",
        tech: ["Python", "Azure", "Terraform", "F5"],
        description: [
            "Automated QoS testing lifecycle with 17+ use cases improving efficiency 70%",
            "Automated license deployment + alerts reducing manual monitoring 80%",
            "Built metrics collection from 50+ production servers feeding real-time dashboards",
            "Automated configuration backups for 25+ multi-vendor devices reducing manual effort by 90%",
            "Automated pre/post checks for upgrades reducing upgrade time by 60%",
            "Built UI to allow teammates to run automation without CLI knowledge",
            "Deployed high-availability headends on Azure using Terraform",
            "Integrated backend systems with F5 load balancer",
            "Led Santa Clara datacenter migration for 50+ devices",
            "Restored headend VMs after RAID failure in 48 hours",
            "Integrated MCP servers with VSCode Copilot and Claude for AI-driven workflows",
            "Standardized lab infra by rebuilding 20+ devices",
        ],
    },
    {
        company: "HighRadius",
        role: "Full Stack Developer Intern",
        period: "Feb 2022 – May 2022",
        location: "Hyderabad, India",
        website: "https://highradius.com",
        logo: "https://www.google.com/s2/favicons?domain=highradius.com&sz=128",
        tech: ["React", "Java", "SQL"],
        description: [
            "Built full-stack enterprise solution connecting ML models with React frontend",
            "REST API based architecture, model inference with Java servlets",
            "Worked on data preprocessing, model deployment, and UI workflows",
        ],
    },
    {
        company: "LetsGrowMore",
        role: "Web Development Intern",
        period: "Jan 2022 - Mar 2022",
        location: "Remote",
        website: "https://letsgrowmore.in",
        logo: "https://letsgrowmore.in/wp-content/uploads/2021/05/Artboard-1-1-removebg-preview-e1645900071758.jpg",
        tech: ["HTML", "CSS", "JavaScript", "React"],
        description: [
            "Converted UI/UX designs into pixel-perfect web interfaces with HTML, CSS, JS.",
            "Delivered semantic, structured, and visually accurate layouts.",
            "Built mobile-first, fully responsive pages across all devices.",
            "Used media queries, flexbox & grid for enhanced UX.",
            "Developed a React.js SPA with reusable components & hooks.",
            "Focused on clean architecture & dynamic content rendering",
        ],
    },
];

export const projects = [
    {
        title: "Progress Pulse",
        subtitle: "Habit, Expense & Investment Tracker",
        tech: ["MERN", "Redux Toolkit", "Tailwind", "DaisyUI", "Docker", "K8s", "Jenkins"],
        description: "A comprehensive tracker with modular dashboards, dynamic charts, and full CI/CD pipeline.",
        category: "Web Development",
        image: "https://placehold.co/600x400/1e293b/06b6d4?text=Progress+Pulse",
        featured: true,
    },
    {
        title: "RAG Chatbot",
        subtitle: "Company Document Assistant",
        tech: ["Google Drive", "Gemini AI", "Pinecone", "n8n"],
        description: "Automated chatbot for querying company documents using RAG architecture.",
        category: "AI Automation",
        image: "https://placehold.co/600x400/1e293b/a855f7?text=RAG+Chatbot",
        featured: false,
    },
    {
        title: "AI Agent for ATS",
        subtitle: "Resume Optimization",
        tech: ["AI Agents", "LaTeX", "Python"],
        description: "Agent that analyzes resumes against job descriptions and rewrites them in LaTeX.",
        category: "AI Automation",
        image: "https://placehold.co/600x400/1e293b/a855f7?text=AI+Agent",
        featured: false,
    },
    {
        title: "MCP Server Integration",
        subtitle: "AI Tool Connectivity",
        tech: ["MCP", "Versa", "Zscaler", "Copilot", "Claude"],
        description: "Integrated network management tools with AI assistants for enhanced workflows.",
        category: "DevOps",
        image: "https://placehold.co/600x400/1e293b/22c55e?text=MCP+Server",
        featured: false,
    },
];

export const education = [
    {
        degree: "B.Tech Computer Science & Engineering",
        institution: "SRM University",
        period: "2019–2023",
        grade: "CGPA: 9.37/10",
    },
];

export const certifications = [
    {
        name: "GitHub Professional Certificate",
        issuer: "GitHub",
        date: "Nov 2025",
        logo: "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        skills: ["GitHub", "Version Control"],
        link: "#"
    },
    {
        name: "Ubuntu Linux Professional Certificate",
        issuer: "Canonical",
        date: "Nov 2025",
        logo: "https://www.google.com/s2/favicons?domain=ubuntu.com&sz=128",
        skills: ["Linux System Administration", "User Management"],
        link: "#"
    },
    {
        name: "DevOps Professional Certificate",
        issuer: "PagerDuty",
        date: "Oct 2025",
        logo: "https://www.google.com/s2/favicons?domain=pagerduty.com&sz=128",
        skills: ["Infrastructure as code (IaC)", "CI/CD"],
        link: "#"
    },
    {
        name: "Docker Foundations Professional Certificate",
        issuer: "Docker, Inc",
        date: "Oct 2025",
        logo: "https://www.google.com/s2/favicons?domain=docker.com&sz=128",
        skills: ["Docker Products", "Containerization"],
        link: "#"
    },
    {
        name: "Atlassian Agile Project Management Professional Certificate",
        issuer: "Atlassian",
        date: "Jan 2025",
        logo: "https://www.google.com/s2/favicons?domain=atlassian.com&sz=128",
        skills: ["Agile Project Management", "Project Management"],
        link: "#"
    },
    {
        name: "Getting Started with AI on Jetson Nano",
        issuer: "NVIDIA",
        date: "Mar 2022",
        logo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
        skills: ["Artificial Intelligence (AI)"],
        credentialId: "441fc3908d374b969fe31d6b7e850022",
        link: "#"
    },
    {
        name: "FUNDAMENTALS OF DEEP LEARNING",
        issuer: "NVIDIA",
        date: "Jan 2022",
        logo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
        skills: ["Deep Learning"],
        credentialId: "614066ca7ee04870af5334a01ebc9346",
        link: "#"
    }
];
