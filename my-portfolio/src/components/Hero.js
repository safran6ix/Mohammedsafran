import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-primary font-semibold mb-4"
                        >
                            Welcome to my portfolio
                        </motion.p>

                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-7xl font-bold mb-6"
                        >
                            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-2xl md:text-3xl text-gray-600 mb-6"
                        >
                            {personalInfo.title}
                        </motion.h2>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-gray-600 mb-8 text-lg"
                        >
                            {personalInfo.subtitle}
                        </motion.p>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex gap-4 mb-8"
                        >
                            <a href="#contact" className="btn btn-primary">Hire Me</a>
                            <a href="#projects" className="btn btn-outline">View Work</a>
                        </motion.div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="flex gap-6"
                        >
                            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                                <Github size={24} />
                            </a>
                            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                                <Twitter size={24} />
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="lg:w-1/2 flex justify-center"
                    >
                        <div className="relative">
                            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-primary to-purple-600 animate-pulse-slow"></div>
                            <img
                                src={personalInfo.avatar}
                                alt={personalInfo.name}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full object-cover border-4 border-white shadow-2xl"
                            />
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-primary transition-colors">
                        <span className="text-sm mb-2">Scroll Down</span>
                        <ArrowDown className="animate-bounce" size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;