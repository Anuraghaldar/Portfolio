import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = ['hero', 'experience', 'projects', 'certifications', 'blogs', 'contact'];
        
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
        { name: '// 01 home', href: '#hero', id: 'hero' },
        { name: '// 02 experience', href: '#experience', id: 'experience' },
        { name: '// 03 work', href: '#projects', id: 'projects' },
        { name: '// 04 certifications', href: '#certifications', id: 'certifications' },
        { name: '// 05 blogs', href: '#blogs', id: 'blogs' },
        { name: '// 06 contact', href: '#contact', id: 'contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-cyan-400 tracking-tighter">
                    PritamDas<span className="text-purple-500">._</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`transition-colors text-sm font-medium tracking-wide ${
                                activeSection === link.id
                                    ? 'text-cyan-400'
                                    : 'text-slate-400 hover:text-cyan-400'
                            }`}
                        >
                            {link.name}
                        </a>
                    ))}
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
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`text-lg font-medium transition-colors ${
                                        activeSection === link.id
                                            ? 'text-cyan-400'
                                            : 'text-slate-300 hover:text-cyan-400'
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex space-x-6 pt-4">
                                <a href="https://github.com/er-pritamdas" className="text-slate-400 hover:text-white">
                                    <Github size={24} />
                                </a>
                                <a href="https://linkedin.com/in/er-pritamdas" className="text-slate-400 hover:text-white">
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
