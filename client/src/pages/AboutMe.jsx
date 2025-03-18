import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiJavascript, SiTailwindcss, SiExpress, SiFirebase, SiC, SiPython, SiGithub, SiFlutter } from "react-icons/si";
import data from "../data.json";

const iconMap = {
    FaReact, FaNodeJs, SiMongodb, SiNextdotjs, SiJavascript, SiTailwindcss, SiExpress, SiFirebase, SiC, SiPython, SiGithub, SiFlutter
};
// const techIcons = [
//     {
//         icon: <SiMongodb size={50} className="text-green-500" />,
//         id: 1,
//         name: "MongoDB",
//         color: "#4DB33D",
//     },
//     {
//         icon: <FaNodeJs size={50} className="text-green-400" />,
//         id: 2,
//         name: "Node.js",
//         color: "#68A063",
//     },
//     {
//         icon: <FaReact size={50} className="text-blue-400" />,
//         id: 3,
//         name: "React",
//         color: "#61DAFB",
//     },
//     {
//         icon: <SiNextdotjs size={50} className="text-white" />,
//         id: 4,
//         name: "Next.js",
//         color: "#FFFFFF",
//     },
//     {
//         icon: <SiJavascript size={50} className="text-yellow-300" />,
//         id: 5,
//         name: "JavaScript",
//         color: "#F7DF1E",
//     },
//     {
//         icon: <SiTailwindcss size={50} className="text-blue-300" />,
//         id: 6,
//         name: "Tailwind CSS",
//         color: "#38B2AC",
//     },
//     {
//         icon: <SiExpress size={50} className="text-gray-500" />,
//         id: 7,
//         name: "Express",
//         color: "#828282",
//     },
//     {
//         icon: <SiFirebase size={50} className="text-yellow-500" />,
//         id: 8,
//         name: "Firebase",
//         color: "#FFCA28",
//     },
//     {
//         icon: <SiC size={50} className="text-blue-500" />,
//         id: 9,
//         name: "C",
//         color: "#A8B9CC",
//     },
//     {
//         icon: <SiPython size={50} className="text-yellow-400" />,
//         id: 10,
//         name: "Python",
//         color: "#3776AB",
//     },
//     {
//         icon: <SiFlutter size={50} className="text-blue-500" />,
//         id: 11,
//         name: "Flutter",
//         color: "#02569B",
//     },
//     {
//         icon: <SiGithub size={50} className="text-white" />,
//         id: 12,
//         name: "GitHub",
//         color: "#FFFFFF",
//     },
// ]

function AboutMe() {
    const radius = 80; // Adjust for bigger circular motion
    const [isProfileHovered, setIsProfileHovered] = useState(false)
    const [hoveredIcon, setHoveredIcon] = useState(null)

    return (
        <section className="mt-10 mb-10 flex flex-col items-center justify-center py-10 px-5">
            <motion.h1
                className=" my-name  mb-20 lg:mb-10 text-4xl md:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span className="text-blue-500"> About </span> Me

            </motion.h1>
            <div className="gap-20 flex flex-col lg:flex-row items-center w-full max-w-5xl">

                {/* Animated Icons */}
                <div className="relative w-96 h-96 flex items-center justify-center mb-6 md:mb-0">
                    {/* Rotating Icons */}
                    <motion.div
                        className="absolute w-full h-full flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    >
                        {data.techIcons.map((item, index) => {
                            const isHovered = hoveredIcon === item.id
                            const IconComponent = iconMap[item.icon];
                            return (
                                <motion.div
                                    key={item.id}
                                    className="absolute bg-black p-4 rounded-full hover:scale-110"
                                    style={{
                                        top: `${50 + 50 * Math.sin((index / data.techIcons.length) * 2 * Math.PI)}%`,
                                        left: `${50 + 50 * Math.cos((index / data.techIcons.length) * 2 * Math.PI)}%`,
                                        transform: "translate(-50%, -50%)",
                                        boxShadow: `0 0 20px 5px ${item.color}80`,

                                    }}
                                >
                                    {IconComponent && <IconComponent />}

                                </motion.div>
                            )
                        })}
                    </motion.div>
                    <motion.div
                        className="absolute z-10 bg-gradient-to-br from-gray-800 to-gray-900 w-64 h-64 rounded-full flex items-center justify-center overflow-hidden"
                        style={{
                            boxShadow: "0 0 30px 5px rgba(59, 130, 246, 0.3)",
                        }}
                        whileHover={{ scale: 1.05 }}
                        onHoverStart={() => setIsProfileHovered(true)}
                        onHoverEnd={() => setIsProfileHovered(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                            <div
                                className="absolute inset-0 rounded-full border-4 border-transparent bg-clip-border"
                                style={{
                                    backgroundImage: "linear-gradient(to right, #3b82f6, #1d4ed8, #3b82f6)",
                                    backgroundSize: "200% 100%",
                                    animation: "gradientMove 3s linear infinite",
                                }}
                            />
                        </div>

                        <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-900 flex items-center justify-center">
                            <motion.img
                                src="assets/gifs/logoVideo.gif"
                                alt="Welcoming Logo"
                                className="w-[50%] h-[80%] object-cover"
                                animate={{
                                    scale: isProfileHovered ? 1.1 : 1,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Text Content */}
                <motion.div
                    className="max-w-xl "
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="bg-gradient-to-b from-gray-900 to-black backdrop-blur-sm p-8 rounded-2xl border border-gray-800 shadow-xl">
                        <h2 className="text-3xl font-bold mb-6 text-white">
                            Hi, I'm <span className="text-blue-500">Ishaan Jain</span>
                        </h2>

                        <div className="space-y-4 text-gray-300">
                            <p className="text-lg leading-relaxed">
                                A passionate web developer from Delhi, India. Currently pursuing{" "}
                                <span className="text-blue-400 font-medium">B.Tech in Computer Science at VIPS, IPU</span>.
                            </p>

                            <p className="text-lg leading-relaxed">
                                My journey in technology is driven by curiosity and a desire to create meaningful digital experiences
                                that solve real problems.
                            </p>

                            <div className="pt-4 border-t border-gray-700">
                                <h3 className="text-xl font-semibold mb-3 text-white">What I do</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                        <span>Full-stack Development</span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                        <span>MERN Stack Specialist</span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                        <span>Responsive Web Design</span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                        <span>Mobile App Development</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-6">
                                <motion.button
                                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <a href="#projects"> <span>View My Work</span> </a>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section >
    );
}

export default AboutMe;
