import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import SocialMediaIcons from "../components/Social-Media-Icons";



function Home() {
    const typedRef = useRef(null);
    const [currentText, setCurrentText] = useState("");

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: [
                "MERN Full Stack Developer",
                "Hackathon Hustler",
                "Innovation Seeker",
                "Tech Enthusiast",
                "Open Source Contributor",
                "LeetCode Grinder"
            ],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
            preStringTyped: (arrayPos, self) => {
                setCurrentText(self.strings[arrayPos]); // Update current text
            }
        });

        return () => typed.destroy();
    }, []);
    // Function to check if "a" or "an" should be used
    const getArticle = (text) => {
        if (!text) return "a"; // Default case
        const vowels = ["a", "e", "i", "o", "u"];
        return vowels.includes(text[0].toLowerCase()) ? "an" : "a";
    };
    return (
        <main className="flex flex-col md:flex-row items-center justify-center mt-16 px-6 md:px-20">
            {/* Text Section */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center md:text-left md:w-1/2"
            >
                <h2 className="text-2xl md:text-3xl text-gray-500">Hi There 👋</h2>
                <h1 className="text-5xl md:text-6xl font-extrabold mt-2">
                    I'm <span className="text-blue-500">Ishaan Jain</span>
                </h1>
                <h2 className="text-2xl md:text-4xl mt-2 text-gray-700">
                    I'm {getArticle(currentText)}{" "}
                    <span ref={typedRef} className="text-blue-400"></span>
                </h2>

                {/* Buttons */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 mt-6"
                >
                    <motion.a
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        href="#contact-me"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg md:text-lg font-semibold shadow-md transition-all duration-300 hover:bg-blue-700 hover:scale-105"
                    >
                        Hire Me
                    </motion.a>
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
                </motion.div>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex space-x-5 mt-8 justify-center md:justify-start"
                >
                    <SocialMediaIcons />
                </motion.div>
            </motion.div>

            {/* Profile Image Section */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 flex justify-center mt-10 md:mt-0"
            >
                <div className="relative group">
                    {/* Rotating Glowing Halo Effect */}
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                        <div className="absolute w-80 h-96 md:w-96 md:h-[26rem] rounded-xl bg-gradient-to-r from-blue-800 to-blue-300 opacity-40 blur-2xl animate-spin-slow"></div>
                    </div>

                    {/* Glassmorphism Effect Container */}
                    <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="relative p-2 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-500/50"
                    >
                        <img
                            src="assets/ishaan_img.jpeg"
                            alt="Profile"
                            className="block rounded-3xl w-72 h-80 md:w-80 md:h-96 object-cover object-center shadow-md hover:shadow-xl transition-all duration-300  brightness-80"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </main>
    );
}

export default Home;
