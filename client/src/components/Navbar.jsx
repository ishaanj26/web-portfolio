import React from 'react';
import { useState } from 'react';
import data from "../data.json"
import { motion } from 'framer-motion';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-white py-4 poppins-400">
            <div className="container mx-auto flex justify-between items-center">
                <div className='flex flex-row gap-2 items-center'>
                    <a href="#nav" className="text-blue-500 font-bold">
                        <img
                            src="assets/logo.png"
                            draggable="false"
                            alt="Logo"
                            srcset=""
                            className='h-15'
                        />
                    </a>
                    <p className='my-name text-lg md:text-base'>Ishaan Jain</p>
                </div>
                <div className="hidden md:flex items-center space-x-4 list-none">
                    {data.navbarItems.map((item, index) => (
                        <motion.li
                            key={index}
                            className="px-2 py-2"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <a
                                href={item.href}
                                className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out active:text-blue-700 text-sm lg:text-2xl font-medium"
                            >
                                {item.name}
                            </a>
                        </motion.li>
                    ))}

                    <motion.a
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        href="/assets/RESUME.pdf"
                        download="Ishaan_Jain_Resume.pdf"
                        className="border-2 border-blue-900 text-blue-500 px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-all duration-300 hover:bg-blue-900 hover:text-white hover:scale-105"
                    >
                        Resume
                    </motion.a>
                </div>
                {/* Side NavBar */}
                <div className="md:hidden flex justify-end">
                    <motion.button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded-full shadow-lg shadow-blue-500/30"
                        onClick={handleClick}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </motion.button>

                    <motion.div
                        className={`fixed top-0 right-0 bg-gradient-to-br from-blue-500 to-blue-700 text-white h-screen transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 flex flex-col overflow-hidden`}
                        style={{ zIndex: 9999, width: "35%" }}
                        initial={{ x: '100%' }}
                        animate={isOpen ? { x: 0 } : { x: '100%' }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {/* Decorative circles */}
                        <div className="absolute top-24 -right-12 w-24 h-24 bg-white rounded-full opacity-10" style={{ zIndex: -1 }}></div>
                        <div className="absolute top-64 -left-12 w-40 h-40 bg-blue-200 rounded-full opacity-20" style={{ zIndex: -1 }}></div>
                        <div className="absolute bottom-12 right-12 w-32 h-32 bg-white rounded-full opacity-15" style={{ zIndex: -1 }}></div>

                        {/* Header with close button */}
                        <div className="flex justify-between items-center p-4 border-b border-white/20">
                            <h2 className="text-xl font-bold text-white">Menu</h2>
                            <motion.button
                                className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
                                onClick={handleClick}
                                whileHover={{ rotate: 90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </motion.button>
                        </div>

                        {/* Navigation links */}
                        <div className="flex-1 overflow-y-auto py-2 relative" style={{ zIndex: 1 }}>
                            <ul className="list-none  p-3 space-y-1">
                                {data.navbarItems.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        className="overflow-hidden"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                    >
                                        <a
                                            href={item.href}
                                            className="flex items-center py-3 px-3 rounded-lg bg-white/10 hover:bg-white/20 transition duration-300 ease-in-out group"
                                        >
                                            <span className="w-2 h-2 rounded-full bg-white mr-2 group-hover:scale-125 transition-transform duration-300"></span>
                                            <span className="text-base font-medium text-white group-hover:text-blue-100 transition-colors duration-300">
                                                {item.name}
                                            </span>
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Resume button in footer */}
                        <div className="p-4  mb-5 border-t border-white/20 flex justify-center">
                            <motion.a
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={isOpen ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                href="/assets/RESUME.pdf"
                                download="Ishaan_Jain_Resume.pdf"
                                className="relative w-full bg-white hover:bg-blue-50 text-blue-600 px-4 py-2 transition-colors duration-300 rounded-lg text-sm font-semibold shadow-lg flex items-center justify-center group overflow-hidden"
                            >

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 relative z-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span className="relative z-10 text-blue-600">Download Resume</span>

                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;