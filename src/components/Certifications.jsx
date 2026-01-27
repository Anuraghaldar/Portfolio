import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import { certifications } from '../data';

const Certifications = () => {
    const [selectedTag, setSelectedTag] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    // Get unique tags/skills from all certifications
    const allTags = ['All', ...new Set(certifications.flatMap(cert => cert.skills))];

    // Filter certifications by selected tag
    const filteredCertifications = selectedTag === 'All'
        ? certifications
        : certifications.filter(cert => cert.skills.includes(selectedTag));

    // Reset to page 1 when filter changes
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedTag]);

    const totalPages = Math.ceil(filteredCertifications.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedCertifications = filteredCertifications.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section id="certifications" className="py-20 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Sticky Header and Filters */}
                <div className="bg-slate-950/95 backdrop-blur-md pb-6 pt-4 -mt-4 -mx-6 px-6 mb-12 border-b border-slate-800/50">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 text-center"
                    >
                        <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">Credentials</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Certifications.
                        </h2>
                    </motion.div>

                    {/* Tag Filters */}
                    <div className="flex flex-wrap gap-3 justify-center">
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedTag === tag
                                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                                    : 'bg-slate-900/50 text-slate-400 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/30'
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Certifications Grid with Pagination */}
                <div className="relative">
                    <div className="flex gap-8">
                        {/* Certifications Grid */}
                        {/* Certifications Grid */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedTag + currentPage}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8"
                            >
                                {paginatedCertifications.map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="relative group h-full"
                                    >
                                        {/* Glow Effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>

                                        {/* Certificate Card */}
                                        <div className="relative bg-slate-900 border-2 border-slate-700 p-1 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-300 h-full">
                                            {/* Inner Border */}
                                            <div className="border border-slate-800 border-dashed rounded-lg p-6 h-full flex flex-col relative bg-gradient-to-br from-slate-950/50 to-slate-900/50">

                                                {/* Watermark Logo */}
                                                <div className="absolute right-4 top-4 opacity-5 pointer-events-none">
                                                    <img src={cert.logo} alt="" className="w-32 h-32 object-contain grayscale" />
                                                </div>

                                                {/* Header */}
                                                <div className="flex justify-between items-start mb-6 relative z-10">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 bg-slate-800 rounded-lg border border-slate-700 shadow-inner">
                                                            <img src={cert.logo} alt={cert.issuer} className="w-10 h-10 object-contain" />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-slate-400 text-xs uppercase tracking-widest font-semibold">{cert.issuer}</h4>
                                                            <p className="text-slate-500 text-xs">Issued {cert.date}</p>
                                                        </div>
                                                    </div>
                                                    {cert.credentialId && (
                                                        <div className="text-[10px] text-slate-600 font-mono border border-slate-800 px-2 py-1 rounded bg-slate-950/50">
                                                            ID: {cert.credentialId.slice(0, 8)}...
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Body */}
                                                <div className="text-center mb-8 relative z-10 flex-grow flex flex-col justify-center">
                                                    <p className="text-slate-500 text-xs serif italic mb-2">This certifies that</p>
                                                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 tracking-wide group-hover:text-cyan-400 transition-colors">
                                                        {cert.name}
                                                    </h3>
                                                    <p className="text-slate-500 text-xs serif italic mb-4">has successfully completed the requirements</p>
                                                    <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
                                                        {cert.description}
                                                    </p>
                                                </div>

                                                {/* Footer / Seal */}
                                                <div className="flex justify-between items-end relative z-10 mt-auto">
                                                    <div className="flex flex-col gap-2">
                                                        <div className="flex flex-wrap gap-1">
                                                            {cert.skills.slice(0, 3).map((skill, i) => (
                                                                <span key={i} className="text-[10px] px-2 py-0.5 bg-slate-800/80 text-slate-300 rounded-full border border-slate-700">
                                                                    {skill}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Seal */}
                                                    <div className="relative">
                                                        <div className="w-16 h-16 rounded-full border-2 border-slate-600 flex items-center justify-center bg-slate-800/50 shadow-lg group-hover:border-cyan-500/50 transition-colors">
                                                            <Award size={24} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                                                        </div>
                                                        <div className="absolute -bottom-2 -right-2 text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                            <CheckCircle size={16} fill="currentColor" className="text-slate-900" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {/* Vertical Pagination - Sticky */}
                        {totalPages > 1 && (
                            <div className="hidden lg:block w-10 flex-shrink-0">
                                <div className="sticky top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-30 h-fit">
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${currentPage === page
                                                ? 'bg-cyan-500 text-white scale-110'
                                                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700'
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {filteredCertifications.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-slate-500">No certifications found for this tag.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Certifications;
