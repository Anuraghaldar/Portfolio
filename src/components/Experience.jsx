import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '../data';
import { MapPin, ExternalLink, Plus, Minus } from 'lucide-react';

const ExperienceCard = ({ exp, index, isOpen, toggleOpen }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-4"
        >
            <button
                onClick={toggleOpen}
                className={`w-full flex items-center justify-between p-6 rounded-t-2xl transition-all duration-200 ${isOpen
                        ? 'bg-cyan-500/20 text-white rounded-b-none border border-cyan-500/30'
                        : 'bg-slate-900/50 text-white hover:bg-slate-800/50 rounded-2xl border border-slate-800 hover:border-cyan-500/30'
                    }`}
                style={{ willChange: 'background-color, border-color' }}
            >
                <div className="flex items-center gap-4 text-left">
                    <h3 className="text-lg md:text-xl font-bold">
                        {exp.role} <span className="text-cyan-400">@ {exp.company}</span>
                    </h3>
                </div>
                <div className="flex items-center gap-4">
                    <span className="hidden md:block text-sm font-medium opacity-90">{exp.period}</span>
                    <div className={`p-1 rounded-full ${isOpen ? 'bg-cyan-500/30' : 'bg-slate-700'}`}>
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        style={{ willChange: 'height, opacity' }}
                        className="overflow-hidden bg-slate-900/50 border-x border-b border-slate-800 rounded-b-2xl"
                    >
                        <div className="p-6 md:p-8">
                            <div className="flex flex-col md:flex-row gap-8">
                                {exp.logo && (
                                    <div className="hidden md:flex flex-col items-center justify-start min-w-[200px] pt-2">
                                        <div className={`flex items-center justify-center ${exp.company === "Tata Communications" ? "w-40 h-40" : "w-32 h-32"}`}>
                                            <img
                                                src={exp.logo}
                                                alt={`${exp.company} logo`}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                )}
                                <div className="flex-grow">
                                    <div className="flex flex-wrap gap-6 mb-6 text-sm text-slate-400">
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} className="text-cyan-400" />
                                            {exp.location}
                                        </div>
                                        {exp.website && (
                                            <a
                                                href={exp.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                                            >
                                                <ExternalLink size={16} className="text-cyan-400" />
                                                {exp.website.replace('https://', '')}
                                            </a>
                                        )}
                                    </div>

                                    <ul className="space-y-2 mb-8">
                                        {exp.description.map((point, i) => (
                                            <li key={i} className="text-slate-300 text-sm leading-relaxed flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech && exp.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-slate-800/50 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Experience = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="experience" className="py-20 bg-slate-950 relative">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Professional <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            Experience
                        </span>
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {experience.map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            exp={exp}
                            index={index}
                            isOpen={openIndex === index}
                            toggleOpen={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
