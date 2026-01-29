import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Sparkles, Orbit, Layers, ShieldCheck, MessageSquare, Atom } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const headerBarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = ['hero', 'skills', 'experience', 'projects', 'certifications', 'contact'];
        
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observers = sections.map((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                const observer = new IntersectionObserver(observerCallback, observerOptions);
                observer.observe(element);
                return observer;
            }
            return null;
        });

        return () => {
            observers.forEach((observer) => {
                if (observer) {
                    observer.disconnect();
                }
            });
        };
    }, []);

    const navLinks = [
        { label: 'Home', href: '#hero', id: 'hero', icon: Sparkles },
        { label: 'Skills', href: '#skills', id: 'skills', icon: Atom },
        { label: 'Experience', href: '#experience', id: 'experience', icon: Layers },
        { label: 'Work', href: '#projects', id: 'projects', icon: Orbit },
        { label: 'Certifications', href: '#certifications', id: 'certifications', icon: ShieldCheck },
        { label: 'Contact', href: '#contact', id: 'contact', icon: MessageSquare },
    ];

    const handleNavClick = (event, href) => {
        event.preventDefault();
        setIsOpen(false);

        const targetId = href.replace('#', '');
        const targetEl = document.getElementById(targetId);
        if (!targetEl) {
            return;
        }

        requestAnimationFrame(() => {
            const navHeight = headerBarRef.current?.offsetHeight || 0;
            const additionalOffset = window.innerWidth < 768 ? 28 : 18;
            const yPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight - additionalOffset;

            window.scrollTo({ top: Math.max(yPosition, 0), behavior: 'smooth' });
        });
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-2xl py-4 shadow-[0_10px_40px_rgba(2,6,23,0.8)]' : 'bg-transparent py-6'
                }`}
        >
            <div ref={headerBarRef} className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="relative inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-white">
                    <span className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse" />
                    <span className="uppercase text-[11px] text-slate-400 tracking-[0.35em]">Studio</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur text-cyan-200 font-semibold">Anurag</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-4">
                    {navLinks.map((link, index) => {
                        const Icon = link.icon;
                        const isActive = activeSection === link.id;
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                className={`group relative inline-flex items-center gap-2 rounded-full border px-4 py-2 transition-all duration-300 ${
                                    isActive
                                        ? 'border-cyan-400/80 bg-cyan-400/10 shadow-[0_0_25px_rgba(34,211,238,0.2)]'
                                        : 'border-white/5 bg-white/5 hover:border-cyan-400/40 hover:bg-white/10'
                                }`}
                                onClick={(event) => handleNavClick(event, link.href)}
                            >
                                <span className={`text-[10px] font-mono tracking-[0.4em] ${isActive ? 'text-cyan-300' : 'text-slate-400'}`}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                {Icon && <Icon size={16} className={isActive ? 'text-cyan-300' : 'text-slate-400'} />}
                                <span className={`text-sm font-semibold uppercase ${isActive ? 'text-white' : 'text-slate-200'}`}>
                                    {link.label}
                                </span>
                            </a>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-300 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800"
                    >
                        <div className="px-6 py-8 flex flex-col space-y-4">
                            {navLinks.map((link, index) => {
                                const Icon = link.icon;
                                const isActive = activeSection === link.id;
                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition-all ${
                                            isActive
                                                ? 'border-cyan-400/70 bg-cyan-400/10 shadow-[0_0_30px_rgba(34,211,238,0.25)]'
                                                : 'border-white/5 bg-white/5 text-slate-200 hover:border-cyan-400/40 hover:bg-white/10'
                                        }`}
                                        onClick={(event) => handleNavClick(event, link.href)}
                                    >
                                        <span className="text-xs font-mono tracking-[0.4em] text-slate-400">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        {Icon && <Icon size={18} className="text-cyan-300" />}
                                        <span className="text-base font-semibold uppercase">{link.label}</span>
                                    </a>
                                );
                            })}
                            <div className="flex space-x-6 pt-4">
                                <a href="https://github.com/Anuraghaldar" className="text-slate-400 hover:text-white">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/anurag-haldar-541536273/" className="text-slate-400 hover:text-white">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
