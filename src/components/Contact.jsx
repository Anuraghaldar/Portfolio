import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { personalInfo } from '../data';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
        subject: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        if (!formState.name.trim()) {
            toast.error('Name is required');
            return false;
        }
        if (!formState.email.trim() || !/^\S+@\S+\.\S+$/.test(formState.email)) {
            toast.error('Please enter a valid email');
            return false;
        }
        if (!formState.message.trim()) {
            toast.error('Message is required');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        const toastId = toast.loading('Sending message...');

        try {
            // Replace with your actual backend URL if deployed
            const response = await fetch('https://portfolio-i92o.onrender.com/contact/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                toast.success(data.message, { id: toastId });
                setFormState({ name: '', email: '', message: '', subject: '' });
            } else {
                toast.error(data.message || 'Failed to send message', { id: toastId });
            }
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error('Failed to connect to server. Please try again later.', { id: toastId });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-cyan-400 text-sm uppercase tracking-wider mb-2">Get in touch</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Contact.</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <p className="text-slate-300 text-lg">
                                I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 text-slate-300">
                                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 text-cyan-400">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Email</p>
                                        <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-cyan-400 transition-colors">
                                            {personalInfo.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 text-slate-300">
                                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 text-cyan-400">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Phone</p>
                                        <p className="text-white">{personalInfo.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 text-slate-300">
                                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 text-cyan-400">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Location</p>
                                        <p className="text-white">{personalInfo.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        disabled={isLoading}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        disabled={isLoading}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">Subject (Optional)</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        disabled={isLoading}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                                        placeholder="Project Inquiry"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        disabled={isLoading}
                                        rows={4}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none disabled:opacity-50"
                                        placeholder="Your message..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
