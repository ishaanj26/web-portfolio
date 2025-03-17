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
                <div className="md:hidden flex justify-end">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                        onClick={handleClick}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <motion.div
                        className={`fixed top-0 right-0 bg-gray-800 text-white p-4 w-50 h-screen transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 flex flex-col`}
                        style={{ zIndex: 9999 }} // Add a high z-index
                        initial={{ x: '100%' }}
                        animate={isOpen ? { x: 0 } : { x: '100%' }}
                        transition={{ duration: 0.3 }}
                    >
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end"
                            onClick={handleClick}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <ul className='mt-4 list-none p-4'>
                            {data.navbarItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="mb-2 py-2 px-4 hover:bg-gray-700 transition duration-300 ease-in-out"
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <a
                                        href={item.href}
                                        className="text-lg font-medium text-white hover:text-blue-500 transition-colors duration-400 ease-in-out"
                                    >
                                        {item.name}
                                    </a>
                                </motion.li>
                            ))}
                            <div className='mt-5'>

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
                        </ul>
                    </motion.div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;