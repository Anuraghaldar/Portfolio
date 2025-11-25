import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { projects } from '../data';

const categories = ["All", "Web Development", "AI Automation", "DevOps"];

const ProjectCard = ({ project }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="group relative bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all"
    >
        <div className="aspect-video overflow-hidden">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 text-white backdrop-blur-sm transition-colors">
                    <Github size={20} />
                </a>
                <a href="#" className="p-3 bg-cyan-500/80 rounded-full hover:bg-cyan-500 text-white backdrop-blur-sm transition-colors">
                    <ExternalLink size={20} />
                </a>
            </div>
        </div>
        <div className="p-6">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <span className="text-cyan-400 text-xs font-medium tracking-wider uppercase">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                </div>
            </div>
            <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700">
                        {t}
                    </span>
                ))}
                {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700">
                        +{project.tech.length - 3}
                    </span>
                )}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const featuredProject = projects.find(p => p.featured);
    const filteredProjects = projects.filter(p =>
        !p.featured && (activeCategory === "All" || p.category === activeCategory)
    );

    return (
        <section id="projects" className="py-20 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header & Featured Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            My <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                Work
                            </span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-8">
                            Deployed scalable travel, event and telemedicine web and hybrid mobile apps using React SPA and PWA.
                            Collaborated in 140+ projects with 50+ clients all around the world.
                        </p>

                        <div className="flex items-center gap-2 text-cyan-400 font-medium">
                            <ArrowUpRight className="animate-bounce" />
                            <span>Featured Project</span>
                        </div>
                    </motion.div>

                    {featuredProject && (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative bg-slate-900 rounded-2xl p-2 border border-slate-800">
                                <div className="aspect-[4/3] overflow-hidden rounded-xl relative">
                                    <img
                                        src={featuredProject.image}
                                        alt={featuredProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
                                    <div className="absolute bottom-0 left-0 p-8">
                                        <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-2 block">Featured Project</span>
                                        <h3 className="text-3xl font-bold text-white mb-2">{featuredProject.title}</h3>
                                        <button className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-colors flex items-center gap-2">
                                            View Project <ArrowUpRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>

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
                                    ? projects.length - 1
                                    : projects.filter(p => p.category === category).length}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
