import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    // Mapping categories to orbits (Outer to Inner)
    const orbits = [
        { name: "Infrastructure", categories: ["DevOps", "Cloud"], radius: 700, color: "border-cyan-500/30" },
        { name: "Network & Tools", categories: ["Networking", "Languages & Tools"], radius: 575, color: "border-purple-500/30" },
        { name: "Frontend", categories: ["Frontend"], radius: 450, color: "border-pink-500/30" },
        { name: "Backend & AI", categories: ["Backend", "AI Automation"], radius: 325, color: "border-orange-500/30" },
        { name: "Database", categories: ["Databases"], radius: 200, color: "border-blue-500/30" },
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
        <section id="skills" className="py-20 bg-slate-950 relative overflow-hidden min-h-screen flex flex-col">
            {/* Header - Full Width */}
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 mb-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">My Arsenal</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Full Stack.</h2>
                </motion.div>
            </div>

            {/* Main Content - Side by Side */}
            <div className="flex flex-col md:flex-row flex-1 max-w-[1600px] mx-auto w-full relative z-10">

                {/* Left Sidebar - Filters */}
                <div className="w-full md:w-1/4 px-6 md:pl-20 flex flex-col gap-4 z-50 mb-10 md:mb-0 md:pt-20">
                    <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4 hidden md:block">Categories</h3>
                    <div className="flex flex-wrap md:flex-col gap-3">
                        <button
                            onClick={() => setActiveCategory(null)}
                            className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all border text-left flex items-center justify-between group ${activeCategory === null
                                ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.1)]'
                                : 'bg-slate-900/50 text-slate-500 border-slate-800 hover:text-slate-300 hover:border-slate-600 hover:bg-slate-800/50'
                                }`}
                        >
                            <span>All Systems</span>
                            {activeCategory === null && <motion.div layoutId="activeDot" className="w-2 h-2 rounded-full bg-cyan-400" />}
                        </button>
                        {allCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category === activeCategory ? null : category)}
                                className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all border text-left flex items-center justify-between group ${activeCategory === category
                                    ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.1)]'
                                    : 'bg-slate-900/50 text-slate-500 border-slate-800 hover:text-slate-300 hover:border-slate-600 hover:bg-slate-800/50'
                                    }`}
                            >
                                <span>{category}</span>
                                {activeCategory === category && <motion.div layoutId="activeDot" className="w-2 h-2 rounded-full bg-cyan-400" />}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Content - Orbital System */}
                <div className="w-full md:w-3/4 relative h-[600px] md:h-[800px] flex justify-center items-end overflow-hidden">

                    {/* Earth / Core */}
                    <div className="absolute bottom-[-100px] w-[600px] h-[200px] bg-gradient-to-t from-blue-600 to-cyan-400 rounded-[100%] blur-3xl opacity-20 z-0"></div>
                    <div className="absolute bottom-[-50px] w-[200px] h-[100px] bg-slate-900 rounded-t-full border-t border-slate-700 z-20 flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50"></div>
                    </div>

                    {/* Orbits */}
                    {orbits.map((orbit, orbitIndex) => {
                        const orbitSkills = getSkillsForOrbit(orbit.categories);
                        const totalSkills = orbitSkills.length;
                        const iconRadius = orbit.radius - 62.5; // Place icons in the middle of the gap

                        return (
                            <div
                                key={orbit.name}
                                className="absolute rounded-full flex justify-center items-start"
                                style={{
                                    width: orbit.radius * 2,
                                    height: orbit.radius * 2,
                                    bottom: -orbit.radius, // Center the circle at the bottom
                                }}
                            >
                                {/* Skills on Orbit */}
                                {orbitSkills.map((skill, index) => {
                                    // Calculate angle for perfect symmetry across a restricted arc (to avoid ground overlap)
                                    // Use 80% of the semi-circle (144 degrees), leaving 10% padding on each side.
                                    const range = Math.PI * 0.8;
                                    const offset = Math.PI * 0.1;
                                    const angle = (Math.PI - offset) - ((index + 1) * (range / (totalSkills + 1)));

                                    // Position calculation using iconRadius to place BETWEEN lines
                                    const x = iconRadius * Math.cos(angle);
                                    const y = iconRadius * Math.sin(angle);

                                    // Determine if skill is active based on category
                                    const isSkillActive = activeCategory === null || activeCategory === skill.category;

                                    return (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: (orbitIndex * 0.2) + (index * 0.05) }}
                                            className={`absolute group flex flex-col items-center transition-all duration-500 ${isSkillActive ? 'opacity-100 z-40 scale-100' : 'opacity-10 z-10 grayscale scale-90'}`}
                                            style={{
                                                left: `calc(50% + ${x}px)`,
                                                bottom: `calc(50% + ${y}px)`,
                                                transform: 'translate(-50%, 50%)'
                                            }}
                                        >
                                            <div
                                                className={`w-10 h-10 md:w-12 md:h-12 p-1 transition-all duration-300 cursor-pointer ${isSkillActive && activeCategory ? 'scale-125 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]' : 'hover:scale-125'
                                                    }`}
                                            >
                                                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain drop-shadow-lg" />
                                            </div>

                                            <span
                                                className={`text-slate-300 text-[10px] font-semibold uppercase tracking-wider mt-1 text-center whitespace-nowrap transition-all duration-300 ${isSkillActive && activeCategory ? 'opacity-100 text-cyan-400' : 'opacity-80 group-hover:opacity-100 group-hover:text-cyan-400'
                                                    }`}
                                            >
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
            {/* Mobile Fallback / Legend (Optional, but good for accessibility/small screens) */}
            <div className="md:hidden mt-10 text-slate-500 text-sm text-center px-6">
                <p>View on desktop for the interactive orbital experience.</p>
            </div>
        </section>
    );
};

export default Skills;
