import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { projects } from '../data';

const Projects = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="projects" className="py-20 bg-slate-950 relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-3">My Work</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Production systems built with intent.
                    </h2>
                    <p className="text-slate-400 text-base md:text-lg">
                        B2B SaaS Platform and IBEX were engineered, shipped, and maintained—not mocked up. Every project demonstrates clean architecture, measurable performance, and UI decisions backed by real usage data.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {projects.map((project, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="rounded-3xl border border-slate-900/70 bg-slate-900/40 backdrop-blur-xl p-4 md:p-6 lg:p-8"
                            >
                                <div className="grid gap-6 lg:gap-10 lg:grid-cols-[minmax(260px,360px)_1fr] items-stretch">
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                        className={`relative overflow-hidden rounded-2xl text-left transition-all duration-300 border ${isOpen ? 'border-cyan-500/60 bg-slate-900/80 shadow-[0_20px_60px_rgba(8,145,178,0.25)]' : 'border-slate-800/80 bg-slate-900/60 hover:border-cyan-500/40'}`}
                                    >
                                        <div className="absolute inset-0 opacity-40">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 to-slate-900/30" />
                                        </div>
                                        <div className="relative z-10 p-6 flex flex-col gap-4 min-h-[280px]">
                                            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                                                <span>Project 0{index + 1}</span>
                                                <span className="flex items-center gap-2 text-cyan-300">
                                                    {project.category}
                                                    <span className="p-1 rounded-full border border-slate-700">
                                                        {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                                                    </span>
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-semibold text-white mb-2 leading-snug">
                                                    {project.title}
                                                </h3>
                                                <p className="text-slate-400 text-sm">{project.subtitle}</p>
                                            </div>
                                            <p className="text-slate-400 text-sm leading-relaxed line-clamp-4">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                {project.tech.slice(0, 4).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 text-xs uppercase tracking-wide rounded-full bg-slate-950/60 border border-slate-800 text-slate-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </button>

                                    <AnimatePresence mode="wait">
                                        {isOpen && (
                                            <motion.div
                                                key={`${project.title}-detail`}
                                                initial={{ opacity: 0, x: 40 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 40 }}
                                                transition={{ duration: 0.4 }}
                                                className="relative rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950 to-slate-900 p-6 md:p-8 overflow-hidden"
                                            >
                                                <div className="absolute inset-0 pointer-events-none">
                                                    <div className="absolute -top-24 right-[-10%] w-72 h-72 bg-cyan-500/10 blur-[120px]" />
                                                    <div className="absolute -bottom-20 left-[-5%] w-64 h-64 bg-purple-500/10 blur-[110px]" />
                                                    <div className="absolute inset-0 border border-white/5 rounded-2xl opacity-10" />
                                                </div>

                                                <div className="relative z-10 space-y-6">
                                                    <div>
                                                        <p className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-3">Impact</p>
                                                        <p className="text-slate-200 text-base leading-relaxed">
                                                            {project.description}
                                                        </p>
                                                    </div>

                                                    {project.metrics && project.metrics.length > 0 && (
                                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                            {project.metrics.map((metric) => (
                                                                <div key={metric.label} className="rounded-xl bg-slate-900/70 border border-slate-800 px-4 py-3">
                                                                    <p className="text-2xl font-semibold text-white">{metric.value}</p>
                                                                    <p className="text-xs uppercase tracking-wide text-slate-500">{metric.label}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {project.highlights && (
                                                        <div>
                                                            <p className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-3">Key Contributions</p>
                                                            <ul className="space-y-3">
                                                                {project.highlights.map((highlight, i) => (
                                                                    <li key={i} className="flex gap-3 text-sm text-slate-300">
                                                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                                                                        <span>{highlight}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
