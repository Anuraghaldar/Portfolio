import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

const techIcons = [
    { src: 'https://skillicons.dev/icons?i=react', alt: 'React' },
    { src: 'https://skillicons.dev/icons?i=ts', alt: 'TypeScript' },
    { src: 'https://skillicons.dev/icons?i=css', alt: 'CSS' },
    { src: '/Portfolio/icons/react-query.svg', alt: 'React Query' },
    { src: 'https://skillicons.dev/icons?i=nestjs', alt: 'NestJS' },
    { src: 'https://skillicons.dev/icons?i=nodejs', alt: 'Node.js' },
    { src: 'https://skillicons.dev/icons?i=sqlite', alt: 'SQL' }
];

const TechOrbit = () => {
    const radius = 75;

    return (
        <div className="relative w-48 h-48" style={{ willChange: 'transform' }}>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20 blur-sm" />
            </div>
            <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                style={{ willChange: 'transform' }}
            >
                {techIcons.map((icon, index) => {
                    const angle = (index / techIcons.length) * Math.PI * 2;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    return (
                        <motion.div
                            key={icon.alt}
                            className="absolute w-12 h-12 bg-white/5 border border-white/10 rounded-2xl backdrop-blur flex items-center justify-center"
                            style={{
                                left: `calc(50% + ${x}px)`,
                                top: `calc(50% + ${y}px)`,
                                transform: 'translate(-50%, -50%)',
                                willChange: 'transform'
                            }}
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                        >
                            <img src={icon.src} alt={icon.alt} className="w-7 h-7 object-contain" />
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

const Hero = () => {
    return (
        <section id="hero" className="relative w-full h-screen overflow-hidden bg-[#040715]">
            {/* Gradient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#020510] via-[#050b1c] to-[#0b1229]" />
                <div
                    className="absolute inset-0 opacity-25"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(56,189,248,0.2), transparent 50%), radial-gradient(circle at 80% 0%, rgba(147,51,234,0.18), transparent 45%)'
                    }}
                />
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'linear-gradient(120deg, rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(300deg, rgba(14,165,233,0.05) 1px, transparent 1px)',
                        backgroundSize: '320px 320px, 280px 280px'
                    }}
                />
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[70%] h-[60%] bg-cyan-500/20 blur-[140px]" />
                <div className="absolute bottom-[-30%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[160px]" />
                <motion.div
                    className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-full flex flex-col justify-between pt-36 pb-20">
                {/* Top Section - 50/50 Split Layout */}
                <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 w-full flex-1 min-h-0">
                    {/* Left Content - 50% */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pr-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight mt-6">
                                {personalInfo.headline || "YOUR VISION, MY MISSION"}
                            </h1>
                            
                            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-3">
                                {personalInfo.mission || personalInfo.summary}
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-3">
                                <motion.a
                                    href="#projects"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-400 text-slate-950 px-6 py-3 rounded-xl font-semibold shadow-[0_12px_30px_rgba(14,165,233,0.35)] hover:brightness-110 transition-all"
                                >
                                    {personalInfo.ctaPrimary || "Explore My Portfolio"}
                                    <ArrowRight size={20} />
                                </motion.a>
                                <motion.a
                                    href="#contact"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:border-cyan-400/60 hover:text-cyan-200 transition-all"
                                >
                                    {personalInfo.ctaSecondary || "Hire Me"}
                                    <ArrowRight size={20} />
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - 50% */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative">
                        <div className="hidden lg:flex flex-col items-center gap-8 absolute inset-x-6 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/25 via-transparent to-purple-500/25 blur-2xl" />
                                <TechOrbit />
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="pointer-events-none"
                            >
                                <pre className="px-6 py-4 text-xs font-mono text-slate-200 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md" style={{ boxShadow: '0 20px 45px rgba(8,11,19,0.55)' }}>
{`const stack = ['React', 'TypeScript', 'NestJS'];
function shipRelease(team) {
  return team.trust + delivery.speed;
}
export default shipRelease;`}
                                </pre>
                            </motion.div>
                        </div>
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
                        ) : null}
                        
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
                                        willChange: 'transform',
                                        transform: 'translateZ(0)'
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
                                        willChange: 'transform',
                                        transform: 'translateZ(0)'
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
                                        willChange: 'transform',
                                        transform: 'translateZ(0)'
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
                <div className="border-t border-white/10 pt-3 pb-4">
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