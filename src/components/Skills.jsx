import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    // Mapping categories to orbits (Outer to Inner)
    const orbits = [
        { name: "Surface Orbit", categories: ["Frontend Systems"], radius: 620, border: "rgba(14,165,233,0.35)", glow: "rgba(14,165,233,0.25)" },
        { name: "Logic Plane", categories: ["Backend Services", "Programming Languages"], radius: 500, border: "rgba(168,85,247,0.35)", glow: "rgba(168,85,247,0.22)" },
        { name: "Collab Belt", categories: ["Tooling & Collaboration"], radius: 380, border: "rgba(251,191,36,0.32)", glow: "rgba(251,191,36,0.18)" },
        { name: "Data Core", categories: ["Database"], radius: 200, border: "rgba(248,113,113,0.4)", glow: "rgba(248,113,113,0.22)" },
    ];

    const totalSkills = Object.values(skills).reduce((sum, group) => sum + group.length, 0);
    const stats = [
        { label: 'Stack Nodes', value: totalSkills, note: 'Tools in orbit' },
        { label: 'Skill Orbits', value: orbits.length, note: 'Systems I shape' },
        { label: 'Core Stack', value: 'React · NestJS', note: 'Primary gravity wells' },
    ];

    const allCategories = Object.keys(skills);

    // Helper to get skills for an orbit
    const getSkillsForOrbit = (orbitCategories) => {
        let orbitSkills = [];
        orbitCategories.forEach(cat => {
            if (skills[cat]) {
                // Attach category to each skill for granular filtering
                const categorySkills = skills[cat].map(skill => ({ ...skill, category: cat }));
                orbitSkills = [...orbitSkills, ...categorySkills];
            }
        });
        return orbitSkills;
    };

    return (
        <section id="skills" className="relative overflow-hidden min-h-screen flex flex-col py-24 bg-gradient-to-b from-[#050b1c] via-[#030511] to-[#01040c]">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 left-[-10%] w-[480px] h-[480px] bg-cyan-500/20 blur-[180px]" />
                <div className="absolute top-0 right-[-5%] w-[520px] h-[520px] bg-purple-500/20 blur-[220px]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-t from-blue-500/40 via-cyan-400/20 to-transparent blur-3xl opacity-40" />
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050b1c] via-transparent to-transparent" />
            </div>

            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10"
                >
                    <div className="text-left max-w-3xl">
                        <p className="text-cyan-400 text-sm uppercase tracking-[0.35em] mb-2">Skills</p>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/40 bg-white/5 backdrop-blur text-[11px] uppercase tracking-[0.4em] text-cyan-300">
                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                            My Universe
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-300 mt-4 mb-3 leading-tight">
                            Orbiting systems that keep releases calm and production-ready.
                        </h2>
                        <p className="text-slate-300 text-base md:text-lg max-w-2xl">
                            Every orbit is a cluster of tools I reach for when architecting interfaces, scaling APIs, and stabilizing delivery. Filter a layer to watch the constellations respond.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-3 w-full md:w-auto">
                        {stats.map((stat) => (
                            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                                <p className="text-xs tracking-wider uppercase text-slate-400">{stat.label}</p>
                                <p className="text-[11px] text-slate-500 mt-1">{stat.note}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row flex-1 max-w-[1600px] mx-auto w-full relative z-10">

                {/* Left Sidebar - Filters */}
                <div className="w-full md:w-1/4 px-4 md:px-10 flex flex-col gap-4 mb-10 md:mb-0">
                    <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-[0.6em] mb-2">Select Orbit</h3>
                    <div className="flex flex-wrap md:flex-col gap-3">
                        <button
                            onClick={() => setActiveCategory(null)}
                            className={`px-4 py-4 rounded-2xl text-sm font-semibold uppercase tracking-wider transition-all duration-200 border text-left flex items-center justify-between gap-3 ${activeCategory === null
                                ? 'border-cyan-400/60 bg-cyan-400/10 text-white shadow-[0_0_25px_rgba(34,211,238,0.25)]'
                                : 'border-white/10 bg-white/5 text-slate-400 hover:border-cyan-400/30 hover:text-white'
                                }`}
                            style={{ willChange: 'background-color, border-color' }}
                        >
                            <span>All Systems</span>
                            {activeCategory === null && <motion.div layoutId="activeDot" className="w-2.5 h-2.5 rounded-full bg-cyan-300" />}
                        </button>
                        {allCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category === activeCategory ? null : category)}
                                className={`px-4 py-4 rounded-2xl text-sm font-semibold uppercase tracking-wider transition-all duration-200 border text-left flex items-center justify-between gap-3 ${activeCategory === category
                                    ? 'border-cyan-400/60 bg-cyan-400/10 text-white shadow-[0_0_25px_rgba(34,211,238,0.25)]'
                                    : 'border-white/10 bg-white/5 text-slate-400 hover:border-cyan-400/30 hover:text-white'
                                    }`}
                                style={{ willChange: 'background-color, border-color' }}
                            >
                                <span>{category}</span>
                                {activeCategory === category && <motion.div layoutId="activeDot" className="w-2.5 h-2.5 rounded-full bg-cyan-300" />}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Content - Orbital System */}
                <div className="w-full md:w-3/4 relative h-[620px] md:h-[720px] flex justify-center items-end overflow-hidden">
                    <div className="absolute bottom-6 w-2/3 h-40 bg-gradient-to-t from-cyan-500/30 to-transparent blur-3xl" />
                    <div className="absolute bottom-0 w-64 h-24 bg-slate-900/70 rounded-[50%] border border-white/5 flex items-center justify-center">
                        <span className="text-xs tracking-[0.4em] uppercase text-slate-500">Core</span>
                    </div>

                    {orbits.map((orbit, orbitIndex) => {
                        const orbitSkills = getSkillsForOrbit(orbit.categories);
                        const orbitSkillCount = orbitSkills.length;
                        const iconRadius = orbit.radius - 60;

                        return (
                            <div
                                key={orbit.name}
                                className="absolute rounded-full border border-white/10"
                                style={{
                                    width: orbit.radius * 2,
                                    height: orbit.radius * 2,
                                    bottom: -orbit.radius,
                                    borderColor: orbit.border,
                                    boxShadow: `0 0 60px ${orbit.glow}`,
                                }}
                            >
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full border border-white/10 bg-slate-950/70 text-[11px] font-semibold uppercase tracking-[0.4em] text-slate-300">
                                    {orbit.name}
                                </div>

                                {orbitSkills.map((skill, index) => {
                                    const range = Math.PI * 0.78;
                                    const offset = Math.PI * 0.11;
                                    const angle = (Math.PI - offset) - ((index + 1) * (range / (orbitSkillCount + 1)));
                                    const x = iconRadius * Math.cos(angle);
                                    const y = iconRadius * Math.sin(angle);
                                    const isSkillActive = activeCategory === null || activeCategory === skill.category;

                                    return (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.45, delay: (orbitIndex * 0.15) + (index * 0.04) }}
                                            className={`absolute group flex flex-col items-center transition-all duration-300 ${isSkillActive ? 'opacity-100 z-40 scale-100' : 'opacity-20 z-10 grayscale scale-90'}`}
                                            style={{
                                                left: `calc(50% + ${x}px)`,
                                                bottom: `calc(50% + ${y}px)`,
                                                transform: 'translate(-50%, 50%)',
                                                willChange: 'transform, opacity'
                                            }}
                                        >
                                            <div
                                                className={`w-11 h-11 md:w-14 md:h-14 p-1.5 rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur transition-all duration-300 cursor-pointer ${isSkillActive && activeCategory ? 'scale-110 shadow-[0_0_15px_rgba(34,211,238,0.35)]' : 'hover:scale-110'
                                                    }`}
                                            >
                                                <img
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    className={`w-full h-full object-contain drop-shadow-lg ${skill.imgClass || ''}`}
                                                />
                                            </div>
                                            <span className={`text-slate-300 text-[10px] font-semibold uppercase tracking-widest mt-2 text-center whitespace-nowrap transition-all duration-300 ${isSkillActive && activeCategory ? 'opacity-100 text-cyan-300' : 'opacity-70 group-hover:opacity-100 group-hover:text-cyan-300'
                                                }`}>
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="md:hidden mt-10 text-slate-400 text-sm text-center px-6 relative z-10">
                <p>View on desktop for the interactive orbital experience.</p>
            </div>
        </section>
    );
};

export default Skills;
