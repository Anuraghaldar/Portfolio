import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { projects } from '../data';

const categories = ["All", "Featured", "Web Development", "AI Automation", "DevOps"];

const ProjectCard = ({ project }) => (
    <a
        href={project.link || "#"}
        target={project.link ? "_blank" : undefined}
        rel={project.link ? "noopener noreferrer" : undefined}
        className={`group relative rounded-2xl overflow-hidden transition-all h-full flex flex-col cursor-pointer ${
            project.featured 
                ? 'bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20' 
                : 'bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50'
        }`}
    >
        <div className="relative w-full h-48 overflow-hidden bg-slate-800 flex-shrink-0">
            <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                {project.featured && (
                    <span className="px-3 py-1 bg-slate-950/90 text-cyan-400 text-xs font-bold rounded-full border border-cyan-500/30 backdrop-blur-sm shadow-xl">
                        ⭐ Featured
                    </span>
                )}
                <span className="px-3 py-1 bg-black/50 text-white text-xs font-semibold rounded-full border border-white/20 backdrop-blur-md shadow-lg">
                    {project.category}
                </span>
            </div>
            <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-30">
                {project.github && (
                    <a 
                        href={project.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 bg-white/10 rounded-full hover:bg-white/20 text-white backdrop-blur-sm transition-colors"
                    >
                        <Github size={20} />
                    </a>
                )}
                {project.link && (
                    <a 
                        href={project.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 bg-cyan-500/80 rounded-full hover:bg-cyan-500 text-white backdrop-blur-sm transition-colors"
                    >
                        <ExternalLink size={20} />
                    </a>
                )}
            </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
            <div className="mb-3">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {project.title}
                </h3>
                {project.subtitle && (
                    <p className="text-slate-400 text-sm mb-2">{project.subtitle}</p>
                )}
            </div>
            
            {/* Description with more link */}
            <div className="text-slate-400 text-sm mb-4 flex-shrink-0">
                <p className="line-clamp-2 inline">
                    {project.description}
                </p>
                {project.link && (
                    <span className="text-cyan-400 font-medium ml-1">
                        more
                    </span>
                )}
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
                {project.tech && project.tech.slice(0, 4).map((t, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-slate-800/50 text-slate-300 rounded border border-slate-700 whitespace-nowrap">
                        {t}
                    </span>
                ))}
                {project.tech && project.tech.length > 4 && (
                    <span className="text-xs px-2 py-1 bg-slate-800/50 text-slate-300 rounded border border-slate-700 whitespace-nowrap">
                        +{project.tech.length - 4}
                    </span>
                )}
            </div>

            {/* View Project Link */}
            {project.link && (
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mt-auto flex-shrink-0 pt-2 group-hover:gap-3 transition-all">
                    <span>View Project</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </div>
            )}
        </div>
    </a>
);

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const filteredProjects = projects.filter(p => {
        if (activeCategory === "All") return true;
        if (activeCategory === "Featured") return p.featured === true;
        return p.category === activeCategory;
    });

    return (
        <section id="projects" className="py-20 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                        My <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            Work
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
                        Deployed scalable travel, event and telemedicine web and hybrid mobile apps using React SPA and PWA.
                        Collaborated in 140+ projects with 50+ clients all around the world.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                ? 'bg-white text-slate-950'
                                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                                }`}
                        >
                            {category} <span className="text-xs opacity-60 ml-1">
                                {category === "All"
                                    ? projects.length
                                    : category === "Featured"
                                    ? projects.filter(p => p.featured === true).length
                                    : projects.filter(p => p.category === category).length}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
