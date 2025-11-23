import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">My Arsenal</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Skills.</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {Object.entries(skills).map(([category, items], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm"
                            >
                                <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2">
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((skill) => (
                                        <div key={skill.name} className="relative group">
                                            <span
                                                className="p-3 bg-slate-800 text-cyan-300 text-sm rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors flex items-center justify-center w-16 h-16"
                                            >
                                                {typeof skill.icon === 'string' ? (
                                                    <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                                                ) : (
                                                    skill.icon && <skill.icon className="text-4xl" />
                                                )}
                                            </span>
                                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
