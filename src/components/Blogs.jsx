import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Tag } from 'lucide-react';
import { blogs } from '../data';

const Blogs = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Get unique categories
    const categories = ['All', 'Featured', ...new Set(blogs.map(blog => blog.category))];

    // Filter blogs by category
    const filteredBlogs = selectedCategory === 'All' 
        ? blogs 
        : selectedCategory === 'Featured'
        ? blogs.filter(blog => blog.featured === true)
        : blogs.filter(blog => blog.category === selectedCategory);

    return (
        <section id="blogs" className="py-20 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">My Writings</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Blogs.</h2>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                    selectedCategory === category
                                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                                        : 'bg-slate-900/50 text-slate-400 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/30'
                                }`}
                            >
                                {category}
                                {category !== 'All' && category !== 'Featured' && (
                                    <span className="text-xs opacity-60 ml-1">
                                        {blogs.filter(b => b.category === category).length}
                                    </span>
                                )}
                                {category === 'Featured' && (
                                    <span className="text-xs opacity-60 ml-1">
                                        {blogs.filter(b => b.featured === true).length}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Regular Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredBlogs.map((blog, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`rounded-2xl overflow-hidden transition-all duration-300 group cursor-pointer flex flex-col h-full ${
                                    blog.featured 
                                        ? 'bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20' 
                                        : 'bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50'
                                }`}
                            >
                                <a
                                    href={blog.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block h-full flex flex-col"
                                >
                                    {/* Blog Image - Fixed Size */}
                                    <div className="relative w-full h-48 overflow-hidden bg-slate-800 flex-shrink-0">
                                        <img
                                            src={blog.image}
                                            alt={blog.topic}
                                            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
                                        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                                            {blog.featured && (
                                                <span className="px-3 py-1 bg-slate-950/90 text-cyan-400 text-xs font-bold rounded-full border border-cyan-500/30 backdrop-blur-sm shadow-xl">
                                                    ⭐ Featured
                                                </span>
                                            )}
                                            <span className="px-3 py-1 bg-black/50 text-white text-xs font-semibold rounded-full border border-white/20 backdrop-blur-md shadow-lg">
                                                {blog.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Blog Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-2 mb-3 text-xs text-slate-500 flex-shrink-0">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                <span className="whitespace-nowrap">{blog.date}</span>
                                            </div>
                                            <span>•</span>
                                            <div className="flex items-center gap-1">
                                                <Tag size={14} />
                                                <span className="whitespace-nowrap">{blog.category}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2 flex-shrink-0">
                                            {blog.topic}
                                        </h3>

                                        <p className="text-slate-400 text-sm mb-3 line-clamp-2 flex-shrink-0">
                                            {blog.subtitle}
                                        </p>

                                        {/* Description with "more" link */}
                                        <div className="text-slate-500 text-sm mb-3 flex-shrink-0">
                                            <p className="line-clamp-3 inline">
                                                {blog.description}
                                            </p>
                                            <a
                                                href={blog.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="text-cyan-400 hover:text-cyan-300 font-medium ml-1"
                                            >
                                                more
                                            </a>
                                        </div>

                                        {/* Tech Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
                                            {blog.tech && blog.tech.length > 0 && blog.tech.slice(0, 3).map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-slate-800/50 text-slate-400 text-xs rounded border border-slate-700 whitespace-nowrap"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {blog.tech && blog.tech.length > 3 && (
                                                <span className="px-2 py-1 bg-slate-800/50 text-slate-400 text-xs rounded border border-slate-700 whitespace-nowrap">
                                                    +{blog.tech.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        {/* Read Article Link */}
                                        <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mt-auto flex-shrink-0 pt-2 group-hover:gap-3 transition-all">
                                            <span>Read Article</span>
                                            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {filteredBlogs.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-slate-500">No blogs found in this category.</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Blogs;

