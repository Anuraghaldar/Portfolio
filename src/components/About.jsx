import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo, projects, experience, certifications, skills, blogs } from '../data';

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = "", duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * value));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(value);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, value, duration]);

    return (
        <div ref={ref} className="flex items-baseline gap-2 mb-2">
            <h3 className="text-4xl md:text-5xl font-bold text-cyan-400">{count}</h3>
            {suffix && <span className="text-2xl text-cyan-400/70">{suffix}</span>}
        </div>
    );
};

const About = () => {
    // Calculate metrics
    const totalProjects = projects.length;
    const totalExperience = experience.length; // Number of companies/positions
    const totalBlogs = blogs.length;
    const totalTechnologies = Object.values(skills).flat().length;

    const metrics = [
        { 
            value: totalProjects, 
            label: "Projects Built", 
            icon: "🚀",
            suffix: "+"
        },
        { 
            value: totalExperience, 
            label: "Companies Worked", 
            icon: "💼",
            suffix: "+"
        },
        { 
            value: totalBlogs, 
            label: "Blogs Written", 
            icon: "✍️",
            suffix: totalBlogs > 0 ? "+" : ""
        },
        { 
            value: totalTechnologies, 
            label: "Technologies Mastered", 
            icon: "⚡",
            suffix: "+"
        },
    ];

    return (
        <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">Introduction</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Overview.</h2>

                    <p className="text-slate-300 text-lg leading-relaxed max-w-4xl">
                        {personalInfo.summary}
                    </p>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors backdrop-blur-sm shadow-xl"
                            >
                                <div className="text-4xl mb-4">{metric.icon}</div>
                                <AnimatedCounter value={metric.value} suffix={metric.suffix} duration={2} />
                                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{metric.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
