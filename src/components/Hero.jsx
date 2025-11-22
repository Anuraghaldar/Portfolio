import React from 'react';
import { motion } from 'framer-motion';
import Background from './3d/Background';
import ThreeHeroModel from './ThreeHeroModel';
import { personalInfo } from '../data';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen mx-auto bg-slate-950 overflow-hidden flex items-center">
            <Background />

            <div className="max-w-7xl mx-auto px-6 w-full z-10 pt-20 md:pt-0">
                <div className="flex flex-col md:flex-row items-center justify-between">

                    {/* Left Column: Text Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-sm md:text-lg uppercase tracking-[0.2em] text-cyan-400 mb-4">
                                Welcome to my portfolio
                            </h2>
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">{personalInfo.name}</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto md:mx-0 font-light mb-8">
                                {personalInfo.role}
                            </p>

                            <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
                                <a
                                    href="#contact"
                                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20"
                                >
                                    Contact Me
                                </a>
                                <a
                                    href="#projects"
                                    className="px-8 py-3 border border-slate-700 text-slate-300 font-medium rounded-full hover:bg-slate-800 transition-all"
                                >
                                    View Work
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: 3D Model - FIXED */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-full md:w-1/2 h-[50vh] min-h-[400px] md:h-[600px]"
                    >
                        <ThreeHeroModel />
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full flex justify-center items-center"
                >
                    <a href="#about">
                        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-slate-500 flex justify-center items-start p-2">
                            <motion.div
                                animate={{ y: [0, 24, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                }}
                                className="w-3 h-3 rounded-full bg-slate-300 mb-1"
                            />
                        </div>
                    </a>
                </motion.div>
            </div>

            {/* Gradient overlay */}
            <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-slate-950 to-transparent z-0" />
        </section>
    );
};

export default Hero;