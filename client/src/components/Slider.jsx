"use client"

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github, FileText, Download } from 'lucide-react';

const ProjectSlider = ({ projectsData }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [autoRotate, setAutoRotate] = useState(true);
    const [direction, setDirection] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [dragDistance, setDragDistance] = useState(0);
    const sliderRef = useRef(null);
    const autoRotateTimerRef = useRef(null);
    const autoRotateInterval = 7000;
    const totalProjects = projectsData ? projectsData.length : 0;

    if (!projectsData || totalProjects === 0) {
        return <div className="text-center py-10">No projects to display</div>;
    }

    useEffect(() => {
        if (!autoRotate) return;
        autoRotateTimerRef.current = setInterval(() => {
            goToNext();
        }, autoRotateInterval);
        return () => {
            if (autoRotateTimerRef.current) clearInterval(autoRotateTimerRef.current);
        };
    }, [autoRotate, activeIndex, totalProjects]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") goToPrevious();
            else if (e.key === "ArrowRight") goToNext();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeIndex, totalProjects]);

    const goToPrevious = () => {
        const newIndex = (activeIndex - 1 + totalProjects) % totalProjects;
        setActiveIndex(newIndex);
        setDirection(-1);
        scrollToCard(newIndex);
    };

    const goToNext = () => {
        const newIndex = (activeIndex + 1) % totalProjects;
        setActiveIndex(newIndex);
        setDirection(1);
        scrollToCard(newIndex);
    };

    const goToSlide = (index) => {
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
        scrollToCard(index);
    };

    const scrollToCard = (index) => {
        if (!sliderRef.current) return;
        const container = sliderRef.current;
        const cards = container.querySelectorAll('.project-card');
        if (!cards[index]) return;
        const card = cards[index];
        const containerWidth = container.offsetWidth;
        const cardWidth = card.offsetWidth;
        const scrollLeft = card.offsetLeft - (containerWidth / 2) + (cardWidth / 2);
        container.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
        });
    };

    const handleTouchStart = (e) => {
        if (autoRotateTimerRef.current) clearInterval(autoRotateTimerRef.current);
        setIsDragging(true);
        setAutoRotate(false);
        setStartX('touches' in e ? e.touches[0].clientX : e.clientX);
        setDragDistance(0);
        if (!('touches' in e)) e.preventDefault();
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setDragDistance(currentX - startX);
    };

    const handleTouchEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);
        if (Math.abs(dragDistance) > 50) {
            dragDistance > 0 ? goToPrevious() : goToNext();
        }
        setDragDistance(0);
        setAutoRotate(true);
    };

    const progressFillStyle = `
        @keyframes progressFill {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
        }
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
    `;

    return (
        <div className=" relative w-full max-w-6xl mx-auto">
            <style dangerouslySetInnerHTML={{ __html: progressFillStyle }} />
            <div className="relative overflow-visible py-12"
                onMouseEnter={() => setAutoRotate(false)}
                onMouseLeave={() => setAutoRotate(true)}>
                <div ref={sliderRef}
                    className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-[15%] md:px-[20%] pb-8"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleTouchStart}
                    onMouseMove={handleTouchMove}
                    onMouseUp={handleTouchEnd}
                    onMouseLeave={handleTouchEnd}
                    style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                    {projectsData.map((project, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <div key={project.id || `project-${index}`}
                                className="hover:cursor-pointer project-card flex-shrink-0 w-[280px] sm:w-[350px] md:w-[450px] snap-center mx-4 my-8"
                                onClick={() => goToSlide(index)}>
                                <motion.div
                                    className={`h-auto min-h-[420px] rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col transition-all duration-300 ${
                                        isActive ? "ring-2 ring-blue-500 scale-100 opacity-100 z-10" : "scale-[0.85] opacity-70"
                                    }`}
                                    whileHover={{ scale: isActive ? 1.02 : 0.9 }}
                                    transition={{ duration: 0.3 }}>
                                    <div className="relative w-full h-40 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                                        <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="p-4 flex-1 flex flex-col">
                                        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm mb-3 flex-1 overflow-y-auto max-h-24">{project.description}</p>
                                        <div className="mb-3">
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.technologies && project.technologies.slice(0, 4).map((tech, i) => (
                                                    <span key={i} className="text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded-full">
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.technologies && project.technologies.length > 4 && (
                                                    <span className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-0.5 rounded-full">
                                                        +{project.technologies.length - 4}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.liveLink && (
                                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-1 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs md:text-sm font-medium rounded-lg transition-colors"
                                                    onClick={(e) => e.stopPropagation()}>
                                                    <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                                                    Live Demo
                                                </a>
                                            )}
                                            {project.githubLink && (
                                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-1 px-3 py-1.5 bg-gray-800 hover:bg-gray-900 text-white text-xs md:text-sm font-medium rounded-lg transition-colors"
                                                    onClick={(e) => e.stopPropagation()}>
                                                    <Github className="w-3 h-3 md:w-4 md:h-4" />
                                                    Code
                                                </a>
                                            )}
                                            {project.mediumLink && (
                                                <a href={project.mediumLink} target="_blank" rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-1 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs md:text-sm font-medium rounded-lg transition-colors"
                                                    onClick={(e) => e.stopPropagation()}>
                                                    <FileText className="w-3 h-3 md:w-4 md:h-4" />
                                                    Medium Blog
                                                </a>
                                            )}
                                            {project.apkLink && (
                                                <a href={project.apkLink} target="_blank" rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-1 px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs md:text-sm font-medium rounded-lg transition-colors"
                                                    onClick={(e) => e.stopPropagation()}>
                                                    <Download className="w-3 h-3 md:w-4 md:h-4" />
                                                    Download APK
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
                <button onClick={goToPrevious}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg flex items-center justify-center z-10 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Previous project">
                    <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-700 dark:text-gray-300" />
                </button>
                <button onClick={goToNext}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg flex items-center justify-center z-10 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Next project">
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-700 dark:text-gray-300" />
                </button>
                <div className="absolute bottom-2 left-2 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="border border-gray-300 dark:border-gray-700 rounded px-1">←</span>
                    <span className="border border-gray-300 dark:border-gray-700 rounded px-1">→</span>
                    <span>to navigate</span>
                </div>
            </div>
            <div className="flex justify-center gap-2 mt-0"
                onMouseEnter={() => setAutoRotate(false)}
                onMouseLeave={() => setAutoRotate(true)}>
                {projectsData.map((_, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <button key={index} onClick={() => goToSlide(index)}
                            className="h-2 md:h-3 rounded-full w-4 md:w-6 relative overflow-hidden"
                            aria-label={`Go to project ${index + 1}`}>
                            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                            {isActive && (
                                <div className="absolute inset-0 bg-indigo-600 rounded-full origin-left"
                                    style={{animation: autoRotate ? `progressFill ${autoRotateInterval / 1000}s linear` : 'none'}}></div>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectSlider;