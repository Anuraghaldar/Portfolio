import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Code, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Blogs', href: '#blogs' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { icon: Github, href: personalInfo.github, label: 'GitHub', color: 'hover:text-white' },
        { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
        { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:text-cyan-400' },
    ];

    const techStack = ['React', 'Tailwind CSS', 'Three.js', 'Framer Motion', 'Vite'];

    return (
        <footer className="relative bg-slate-950 border-t border-slate-900 overflow-hidden">
            {/* Static Gradient Background - Higher z-index to override cursor gradient */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/12 via-purple-500/10 to-transparent" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 z-[2]" />

            <div className="relative z-[3] max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">
                            PritamDas<span className="text-cyan-400">._</span>
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Full Stack Developer crafting digital experiences with code, creativity, and cutting-edge technology.
                        </p>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target={social.href.startsWith('http') ? '_blank' : undefined}
                                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-all duration-300 ${social.color}`}
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-3">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="text-cyan-500/50 group-hover:text-cyan-500">//</span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Tech Stack */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
                            <Code size={16} className="text-cyan-400" />
                            Built With
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((tech, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="px-3 py-1.5 bg-slate-900/50 border border-slate-800 rounded-lg text-xs text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-slate-500 text-sm flex items-center gap-2"
                        >
                            © {currentYear} Pritam Das. All rights reserved.
                            <span className="hidden md:inline">Made with</span>
                            <Heart size={14} className="text-red-500 animate-pulse hidden md:inline" />
                            <span className="hidden md:inline">and</span>
                            <Sparkles size={14} className="text-cyan-400 animate-pulse hidden md:inline" />
                        </motion.p>

                        {/* Back to Top Button */}
                        {isVisible && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                onClick={scrollToTop}
                                className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110"
                                aria-label="Back to top"
                            >
                                <ArrowUp size={20} />
                            </motion.button>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

