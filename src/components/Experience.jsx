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
                className={`w-full flex items-center justify-between p-6 rounded-t-2xl transition-all duration-300 ${isOpen
                        ? 'bg-purple-700 text-white rounded-b-none'
                        : 'bg-purple-900/50 text-white hover:bg-purple-900/70 rounded-2xl'
                    }`}
            >
                <div className="flex items-center gap-4 text-left">
                    <h3 className="text-lg md:text-xl font-bold">
                        {exp.role} <span className="text-purple-200">@ {exp.company}</span>
                    </h3>
                </div>
                <div className="flex items-center gap-4">
                    <span className="hidden md:block text-sm font-medium opacity-90">{exp.period}</span>
                    <div className={`p-1 rounded-full ${isOpen ? 'bg-purple-600' : 'bg-purple-800'}`}>
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-slate-900/50 border-x border-b border-slate-800 rounded-b-2xl"
                    >
                        <div className="p-6 md:p-8">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex-grow">
                                    <div className="flex flex-wrap gap-6 mb-6 text-sm text-slate-400">
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} className="text-purple-400" />
                                            {exp.location}
                                        </div>
                                        {exp.website && (
                                            <a
                                                href={exp.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 hover:text-purple-400 transition-colors"
                                            >
                                                <ExternalLink size={16} className="text-purple-400" />
                                                {exp.website.replace('https://', '')}
                                            </a>
                                        )}
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {exp.description.map((point, i) => (
                                            <li key={i} className="text-slate-300 text-sm leading-relaxed flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech && exp.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full border border-purple-800/50"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {exp.logo && (
                                    <div className="hidden md:flex flex-col items-center justify-center min-w-[150px]">
                                        <div className="w-32 h-32 bg-white rounded-xl p-4 flex items-center justify-center">
                                            <img
                                                src={exp.logo}
                                                alt={`${exp.company} logo`}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                )}
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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
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
