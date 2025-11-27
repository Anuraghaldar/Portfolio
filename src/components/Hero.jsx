import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { personalInfo, heroMetrics } from '../data';

// Animated Counter Component - Starts immediately on page load
const AnimatedCounter = ({ value, suffix = "", highlight = false, duration = 2, delay = 0 }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        // Start animation after a small delay
        const timer = setTimeout(() => {
            setHasStarted(true);
        }, delay * 1000);

        return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
            
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * value * 10) / 10);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(value);
            }
        };

        requestAnimationFrame(animate);
    }, [hasStarted, value, duration]);

    return (
        <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
                <h3 className={`text-5xl md:text-6xl font-bold ${highlight ? 'text-cyan-400' : 'text-white'}`} style={{ opacity: 1, color: highlight ? 'rgb(34 211 238)' : 'rgb(255 255 255)' }}>
                    {count}
                </h3>
                {suffix && (
                    <span className={`text-3xl md:text-4xl ${highlight ? 'text-cyan-400' : 'text-white'}`} style={{ opacity: 1, color: highlight ? 'rgb(34 211 238)' : 'rgb(255 255 255)' }}>
                        {suffix}
                    </span>
                )}
            </div>
        </div>
    );
};

const Hero = () => {
    return (
        <section id="hero" className="relative w-full h-screen bg-slate-950 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/98 to-slate-950" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-full flex flex-col justify-between py-20">
                {/* Top Section - 50/50 Split Layout */}
                <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 w-full flex-1 min-h-0">
                    {/* Left Content - 50% */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pr-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight">
                                {personalInfo.headline || "YOUR VISION, MY MISSION"}
                            </h1>
                            
                            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-3">
                                {personalInfo.mission || personalInfo.summary}
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-2">
                                <motion.a
                                    href="#projects"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 bg-white text-slate-950 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
                                >
                                    {personalInfo.ctaPrimary || "Explore My Portfolio"}
                                    <ArrowRight size={20} />
                                </motion.a>
                                <motion.a
                                    href="#contact"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 bg-slate-900/50 border border-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
                                >
                                    {personalInfo.ctaSecondary || "Hire Me"}
                                    <ArrowRight size={20} />
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - 50% */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative">
                        {personalInfo.heroImage ? (
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="relative w-full max-w-lg z-10"
                            >
                                <div className="relative">
                                    {/* Gradient overlay on image */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 rounded-2xl blur-2xl" />
                                    <img
                                        src={personalInfo.heroImage}
                                        alt={personalInfo.name}
                                        className="relative w-full h-auto rounded-2xl object-cover shadow-2xl"
                                    />
                                    {/* Fade effect at bottom */}
                                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent rounded-b-2xl" />
                                </div>
                            </motion.div>
                        ) : (
                            <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px]" />
                        )}
                        
                        {/* Northern Lights Gradient Animation */}
                        <div className="absolute inset-0 right-0 top-0 bottom-0 overflow-hidden pointer-events-none z-0">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950 z-10" />
                            
                            {/* Flowing Gradient Streams */}
                            <motion.div
                                className="absolute top-0 right-0 w-full h-full"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2 }}
                            >
                                {/* Stream 1 - Cyan */}
                                <motion.div
                                    className="absolute top-0 right-[20%] w-32 h-full"
                                    animate={{
                                        background: [
                                            'linear-gradient(180deg, rgba(6, 182, 212, 0.4) 0%, rgba(6, 182, 212, 0.2) 50%, transparent 100%)',
                                            'linear-gradient(180deg, rgba(6, 182, 212, 0.6) 0%, rgba(6, 182, 212, 0.3) 50%, transparent 100%)',
                                            'linear-gradient(180deg, rgba(6, 182, 212, 0.4) 0%, rgba(6, 182, 212, 0.2) 50%, transparent 100%)',
                                        ],
                                        x: [0, 20, -20, 0],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    style={{
                                        filter: 'blur(40px)',
                                    }}
                                />
                                
                                {/* Stream 2 - Purple */}
                                <motion.div
                                    className="absolute top-0 right-[40%] w-40 h-full"
                                    animate={{
                                        background: [
                                            'linear-gradient(180deg, rgba(168, 85, 247, 0.3) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 100%)',
                                            'linear-gradient(180deg, rgba(168, 85, 247, 0.5) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 100%)',
                                            'linear-gradient(180deg, rgba(168, 85, 247, 0.3) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 100%)',
                                        ],
                                        x: [0, -30, 30, 0],
                                    }}
                                    transition={{
                                        duration: 10,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1,
                                    }}
                                    style={{
                                        filter: 'blur(50px)',
                                    }}
                                />
                                
                                {/* Stream 3 - Green/Cyan */}
                                <motion.div
                                    className="absolute top-0 right-[60%] w-36 h-full"
                                    animate={{
                                        background: [
                                            'linear-gradient(180deg, rgba(34, 211, 238, 0.35) 0%, rgba(34, 211, 238, 0.2) 50%, transparent 100%)',
                                            'linear-gradient(180deg, rgba(34, 211, 238, 0.55) 0%, rgba(34, 211, 238, 0.3) 50%, transparent 100%)',
                                            'linear-gradient(180deg, rgba(34, 211, 238, 0.35) 0%, rgba(34, 211, 238, 0.2) 50%, transparent 100%)',
                                        ],
                                        x: [0, 25, -25, 0],
                                    }}
                                    transition={{
                                        duration: 9,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 2,
                                    }}
                                    style={{
                                        filter: 'blur(45px)',
                                    }}
                                />
                                
                                {/* Splitting effect over metrics */}
                                <motion.div
                                    className="absolute bottom-0 right-0 w-full h-[200px]"
                                    animate={{
                                        background: [
                                            'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.2) 0%, rgba(168, 85, 247, 0.15) 30%, transparent 70%)',
                                            'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.3) 0%, rgba(168, 85, 247, 0.25) 30%, transparent 70%)',
                                            'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.2) 0%, rgba(168, 85, 247, 0.15) 30%, transparent 70%)',
                                        ],
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    style={{
                                        filter: 'blur(60px)',
                                    }}
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Bottom Metrics Section - Visible on page load */}
                <div className="border-t border-slate-800/50 pt-3 pb-4">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
                            {heroMetrics.map((metric, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ y: 20 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                                    className="text-center lg:text-left opacity-100"
                                >
                                    <div className="opacity-95">
                                        <AnimatedCounter 
                                            value={metric.value} 
                                            suffix={metric.suffix} 
                                            highlight={metric.highlight}
                                            duration={2}
                                            delay={0.8 + (index * 0.1)}
                                        />
                                    </div>
                                    <p className="text-slate-500 text-sm mt-2">{metric.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-10 right-10 z-10"
            >
                <a href="#skills" className="pointer-events-auto">
                    <div className="w-[30px] h-[50px] rounded-full border-2 border-slate-600 flex justify-center items-start p-2">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                            className="w-1.5 h-1.5 rounded-full bg-cyan-400 mb-1"
                        />
                    </div>
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;