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
    portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", // Add your portrait image URL here
    heroImage: "", // Add your hero section image URL here
    headline: "YOUR VISION, MY MISSION",
    mission: "Guiding the Creative Journey Together, Your Aspirations at the Heart of Every Design - Where Your Unique Dreams Meet My Dedication to Craft Exceptional Visual Experiences",
    ctaPrimary: "Explore My Portfolio",
    ctaSecondary: "Hire Me",
};

// Hero Section Metrics - Edit these values to update the UI
export const heroMetrics = [
    {
        value: 2.5,
        suffix: "+",
        label: "Years of Experience",
        highlight: false // Set to true to highlight a specific metric
    },
    {
        value: 4,
        suffix: "+",
        label: "Projects Completed",
        highlight: false
    },
    {
        value: 95,
        suffix: "%",
        label: "Client Satisfaction Rate",
        highlight: true // This will show the % in cyan color
    },
    // {
    //     value: 8,
    //     suffix: "+",
    //     label: "Technologies Mastered",
    //     highlight: false
    // },
    {
        value: 8,
        suffix: "+",
        label: "Blogs Written",
        highlight: false
    }
];

export const skills = {
    DevOps: [
        { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
        { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
        { name: "Kubernetes", icon: "https://skillicons.dev/icons?i=kubernetes" },
        // { name: "Helm", icon: "https://icon.icepanel.io/Technology/png-shadow-512/Helm.png" },
        { name: "Jenkins", icon: "https://skillicons.dev/icons?i=jenkins" },
        // { name: "CI/CD", icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-ci-cd-devops-flaticons-lineal-color-flat-icons.png" },
        { name: "Ansible", icon: "https://skillicons.dev/icons?i=ansible" },
        { name: "Chef", icon: "/CHEF.png" },
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
        // { name: "REST API", icon: "public/RESTAPI.png" },
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
        { name: "SD-WAN", icon: "/SDWAN.png" },
        { name: "SASE", icon: "/SASE.png" },
        { name: "Cisco", icon: "/CISCO.png" },
        { name: "Juniper", icon: "/JUNOS.png" },
        { name: "Arista", icon: "https://www.google.com/s2/favicons?domain=arista.com&sz=128" },
        { name: "Huawei", icon: "https://www.google.com/s2/favicons?domain=huawei.com&sz=128" },
        { name: "Versa", icon: "/VERSA.svg" },
    ],
    "AI Automation": [
        { name: "RAG", icon: "https://img.icons8.com/color/48/brain--v1.png" },
        { name: "N8N", icon: "https://www.google.com/s2/favicons?domain=n8n.io&sz=128" },
        { name: "MCP", icon: "https://img.icons8.com/color/48/server.png" }
    ],
    "Languages & Tools": [
        { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
        { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
        { name: "C", icon: "https://skillicons.dev/icons?i=c" },
        { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
        { name: "Bash", icon: "https://skillicons.dev/icons?i=bash" },
        { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
        { name: "PuTTY", icon: "/PuTTY.png" },
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
        logo: "/TATACOMMLOGO.png",
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
        logo: "https://cdn.highradius.com/wp-content/uploads/2024/06/HighRadius-Updated.svg",
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
        image: "https://media.licdn.com/dms/image/v2/D5622AQFrkAd5H1VEww/feedshare-shrink_1280/B56Zn6w2DFHUAs-/0/1760848733533?e=1766016000&v=beta&t=U5xdjWKgKnsX3qwveWj7KTTD86imoT906v82Nb6ndLw",
        featured: true,
        link: "#",
        github: "https://github.com/er-pritamdas",
    },
    {
        title: "RAG Chatbot",
        subtitle: "Company Document Assistant",
        tech: ["Google Drive", "Gemini AI", "Pinecone", "n8n"],
        description: "Automated chatbot for querying company documents using RAG architecture.",
        category: "AI Automation",
        image: "https://media.licdn.com/dms/image/v2/D5622AQGWaAfOd70iPA/feedshare-shrink_1280/B56Zi4OowKHQAk-/0/1755437502304?e=1766016000&v=beta&t=JO4TtA4QbcD_c6gn0lytT46SvlZ6ZaEMQwSZaJqpHSA",
        featured: false,
        link: "#",
        github: "https://github.com/er-pritamdas",
    },
    {
        title: "MCP Server Integration",
        subtitle: "AI Tool Connectivity",
        tech: ["MCP", "Versa", "Zscaler", "Copilot", "Claude"],
        description: "Integrated network management tools with AI assistants for enhanced workflows.",
        category: "DevOps",
        image: "https://media.licdn.com/dms/image/v2/D5622AQEPLOFuTTiHjw/feedshare-shrink_2048_1536/B56Zja5sf2HAAw-/0/1756019216070?e=1766016000&v=beta&t=vfxqyBP9M4mfRmMyHXeTPZB507U133ZeHRkD2LO5jpw",
        featured: false,
        link: "#",
        github: "https://github.com/er-pritamdas",
    },
    {
        title: "AI Agent for ATS",
        subtitle: "Resume Optimization",
        tech: ["AI Agents", "LaTeX", "Python"],
        description: "Agent that analyzes resumes against job descriptions and rewrites them in LaTeX.",
        category: "AI Automation",
        image: "https://media.licdn.com/dms/image/v2/D5622AQHDP79OncMBxA/feedshare-shrink_2048_1536/B56ZiUD3HQHkAw-/0/1754830697716?e=1766016000&v=beta&t=gMqamR6yxOVH3ba9ikiLrL69CwgBK7EtraTtd5Akp0k",
        featured: false,
        link: "#",
        github: "https://github.com/er-pritamdas",
    },
    // {
    //     title: "Network Configuration Automation Tool",
    //     subtitle: "Multi-Vendor Device Management",
    //     tech: ["Python", "Netmiko", "Ansible", "REST API"],
    //     description: "Automated configuration management for Cisco, Juniper, and Arista devices with rollback capabilities and validation.",
    //     category: "DevOps",
    //     image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    //     featured: false,
    //     link: "#",
    //     github: "https://github.com/er-pritamdas",
    // },
    // {
    //     title: "Cloud Infrastructure Dashboard",
    //     subtitle: "Real-time Monitoring & Analytics",
    //     tech: ["React", "Node.js", "AWS", "Grafana", "Prometheus"],
    //     description: "Comprehensive dashboard for monitoring cloud infrastructure with real-time metrics, alerts, and cost optimization insights.",
    //     category: "Web Development",
    //     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    //     featured: false,
    //     link: "#",
    //     github: "https://github.com/er-pritamdas",
    // },
    // {
    //     title: "CI/CD Pipeline Optimizer",
    //     subtitle: "Build Time Reduction System",
    //     tech: ["Jenkins", "Docker", "Kubernetes", "Groovy"],
    //     description: "Optimized CI/CD pipelines reducing build times by 60% through parallel execution, caching strategies, and resource optimization.",
    //     category: "DevOps",
    //     image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
    //     featured: false,
    //     link: "#",
    //     github: "https://github.com/er-pritamdas",
    // },
    // {
    //     title: "Intelligent Document Processor",
    //     subtitle: "AI-Powered Document Analysis",
    //     tech: ["Python", "OpenAI", "FastAPI", "PostgreSQL"],
    //     description: "AI-powered system that extracts, categorizes, and analyzes documents with natural language processing and machine learning.",
    //     category: "AI Automation",
    //     image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    //     featured: false,
    //     link: "#",
    //     github: "https://github.com/er-pritamdas",
    // },
    // {
    //     title: "Microservices Architecture Platform",
    //     subtitle: "Scalable Service Mesh",
    //     tech: ["Kubernetes", "Istio", "gRPC", "React", "Go"],
    //     description: "Built a microservices platform with service mesh, API gateway, and distributed tracing for high-performance applications.",
    //     category: "Web Development",
    //     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    //     featured: false,
    //     link: "#",
    //     github: "https://github.com/er-pritamdas",
    // },
    // {
    //     title: "Infrastructure as Code Framework",
    //     subtitle: "Terraform Module Library",
    //     tech: ["Terraform", "Azure", "AWS", "GitHub Actions"],
    //     description: "Comprehensive Terraform module library for provisioning cloud infrastructure across multiple providers with best practices.",
    //     category: "DevOps",
    //     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    //     featured: false,
    //     link: "#",
    //     github: "https://github.com/er-pritamdas",
    // },
    // {
    //     title: "Workflow Automation Engine",
    //     subtitle: "No-Code Automation Platform",
    //     tech: ["n8n", "Node.js", "MongoDB", "WebSockets"],
    //     description: "Built a visual workflow automation platform allowing users to create complex automation workflows without coding.",
    //     category: "AI Automation",
    //     image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    //     featured: false,
    //     link: "#",
    //     github: "https://github.com/er-pritamdas",
    // },
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

export const blogs = [
    {
        topic: "Building Scalable CI/CD Pipelines with Jenkins and Docker",
        subtitle: "A comprehensive guide to automating your deployment workflow",
        date: "Dec 2024",
        category: "DevOps",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
        tech: ["Jenkins", "Docker", "CI/CD", "Kubernetes"],
        link: "https://medium.com/@er.pritamdas22/scalable-cicd-pipelines",
        description: "Learn how to set up robust CI/CD pipelines using Jenkins and Docker. This guide covers containerization strategies, automated testing, and deployment best practices for modern applications.",
        featured: true
    },
    {
        topic: "Mastering Network Automation with Python",
        subtitle: "Automate network configurations and reduce manual errors by 90%",
        date: "Nov 2024",
        category: "Network Engineering",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        tech: ["Python", "Ansible", "Netmiko", "SD-WAN"],
        link: "https://medium.com/@er.pritamdas22/network-automation-python",
        description: "Discover how Python can revolutionize network management. From automating device configurations to implementing SD-WAN solutions, this blog walks you through real-world automation scenarios.",
        featured: false
    },
    {
        topic: "RAG Architecture: Building Intelligent Document Assistants",
        subtitle: "Implementing Retrieval-Augmented Generation for enterprise knowledge bases",
        date: "Oct 2024",
        category: "AI Automation",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        tech: ["RAG", "Gemini AI", "Pinecone", "Vector Databases"],
        link: "https://medium.com/@er.pritamdas22/rag-architecture-guide",
        description: "Deep dive into RAG (Retrieval-Augmented Generation) architecture. Learn how to build intelligent chatbots that can query company documents, understand context, and provide accurate responses using AI.",
        featured: false
    },
    {
        topic: "Full Stack Development: MERN Stack Best Practices",
        subtitle: "Building production-ready applications with React, Node.js, and MongoDB",
        date: "Sep 2024",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        tech: ["React", "Node.js", "MongoDB", "Express", "Redux"],
        link: "https://medium.com/@er.pritamdas22/mern-stack-best-practices",
        description: "Explore the MERN stack architecture and learn best practices for building scalable full-stack applications. From state management to API design, this guide covers everything you need.",
        featured: false
    },
    {
        topic: "Terraform for Infrastructure as Code",
        subtitle: "Managing cloud infrastructure efficiently with Terraform",
        date: "Aug 2024",
        category: "DevOps",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
        tech: ["Terraform", "Azure", "AWS", "Infrastructure as Code"],
        link: "https://medium.com/@er.pritamdas22/terraform-infrastructure-code",
        description: "Master Infrastructure as Code with Terraform. This comprehensive guide covers provisioning cloud resources, managing state files, and implementing best practices for scalable infrastructure.",
        featured: false
    },
    {
        topic: "AI Agents: Automating Workflows with MCP Servers",
        subtitle: "Integrating AI assistants with development tools for enhanced productivity",
        date: "Jul 2024",
        category: "AI Automation",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
        tech: ["MCP", "Claude", "VSCode Copilot", "AI Agents"],
        link: "https://medium.com/@er.pritamdas22/ai-agents-mcp-servers",
        description: "Learn how to integrate MCP (Model Context Protocol) servers with AI assistants like Claude and Copilot. Automate your development workflows and boost productivity with intelligent agents.",
        featured: false
    },
    {
        topic: "SD-WAN and SASE: The Future of Network Security",
        subtitle: "Understanding Software-Defined Wide Area Networks and Secure Access Service Edge",
        date: "Jun 2024",
        category: "Network Engineering",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        tech: ["SD-WAN", "SASE", "Network Security", "Cloud Networking"],
        link: "https://medium.com/@er.pritamdas22/sdwan-sase-future",
        description: "Explore the evolution of network architecture with SD-WAN and SASE technologies. Understand how these solutions provide secure, scalable, and flexible network connectivity for modern enterprises.",
        featured: false
    },
    {
        topic: "Docker and Kubernetes: Container Orchestration Mastery",
        subtitle: "From containerization to orchestration - a complete guide",
        date: "May 2024",
        category: "DevOps",
        image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80",
        tech: ["Docker", "Kubernetes", "Containerization", "Orchestration"],
        link: "https://medium.com/@er.pritamdas22/docker-kubernetes-guide",
        description: "Master containerization and orchestration with Docker and Kubernetes. Learn deployment strategies, scaling techniques, and how to manage containerized applications in production environments.",
        featured: false
    },
];