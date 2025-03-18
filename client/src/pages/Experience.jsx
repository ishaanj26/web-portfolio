import { useState, React } from "react"
import { motion } from "framer-motion"
import { Lightbulb, BarChart, Calendar, Briefcase, Rocket, Users, BookOpen, ChevronRight, ExternalLink } from "lucide-react"
import data from "../data.json";

const iconMap = {
    Rocket,
    BookOpen,
    Calendar,
    Users,
    Briefcase,
    BarChart,
    Lightbulb
};

const ExperienceTimeline = () => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id)
    }

    return (
        <div className="relative flex flex-col items-center w-full pt-4 pb-16 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
            <motion.h1
                className="  dark:text-white my-name mb-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span className="text-blue-500"> My </span> Experience
            </motion.h1>

            <div className="relative w-full max-w-5xl">
                {/* Vertical Line - visible only on md and larger screens */}
                <div className="absolute left-1/2 top-0 h-full w-1 bg-transparent transform -translate-x-1/2 border-l-4 border-blue-200 dark:border-blue-900 border-dashed hidden md:block"></div>

                {/* Timeline Items */}
                {data.experiences.map((exp, index) => {
                    const IconComponent = iconMap[exp.icon];
                    return (
                        <motion.div
                            key={exp.id}
                            className={`flex flex-col md:flex-row w-full ${exp.align === "left" ? "md:justify-start" : "md:justify-end"} mb-7 relative`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Dot - visible only on md and larger screens */}
                            <motion.div
                                className="absolute left-1/2 top-6 w-6 h-6 md:w-8 md:h-8 bg-blue-500 dark:bg-blue-600 rounded-full transform -translate-x-1/2 z-10 border-4 border-white dark:border-gray-900 shadow-lg hidden md:block"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 15,
                                    delay: index * 0.1 + 0.2,
                                }}
                                whileHover={{ scale: 1.2 }}
                            >
                                <div className="absolute inset-0 flex items-center justify-center text-white">
                                    {IconComponent && <IconComponent className="h-4 w-4 md:h-5 md:w-5" />}
                                </div>
                            </motion.div>

                            {/* Mobile dot - visible only on small screens */}
                            <div className="absolute left-0 top-6 w-6 h-6 bg-blue-500 dark:bg-blue-600 rounded-full z-10 border-4 border-white dark:border-gray-900 shadow-lg md:hidden flex items-center justify-center text-white">
                                {IconComponent && <IconComponent className="h-3 w-3" />}
                            </div>

                            {/* Experience Card */}
                            <motion.div
                                className={`group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 sm:p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 md:w-5/12 ml-10 sm:ml-12 md:ml-0 md:mr-0 ${exp.align === "right" ? "md:ml-auto" : ""} ${expandedId === exp.id ? "ring-2 ring-blue-500 dark:ring-blue-400" : ""}`}
                                whileHover={{ y: -5 }}
                                layout
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                                    <span className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                                        {exp.period}
                                    </span>
                                </div>

                                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>

                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: expandedId === exp.id ? "auto" : 0,
                                        opacity: expandedId === exp.id ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700 mb-3 sm:mb-4">
                                        <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">{exp.details}</p>

                                        <div className="mb-2 text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200">Key Skills:</div>
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                            {exp.skills.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>

                                <button
                                    onClick={() => toggleExpand(exp.id)}
                                    className="mt-1 flex items-center text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                                >
                                    {expandedId === exp.id ? "Show less" : "Show more"}
                                    <motion.span animate={{ rotate: expandedId === exp.id ? 90 : 0 }} transition={{ duration: 0.2 }}>
                                        <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                                    </motion.span>
                                </button>
                            </motion.div>
                        </motion.div>
                    )
                })}

                {/* Timeline End */}
                <motion.div
                    className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-8 hidden md:block"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: data.experiences.length * 0.1 + 0.5 }}
                >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 dark:bg-blue-700 flex items-center justify-center text-white shadow-lg">
                        <ExternalLink className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                </motion.div>
            </div>

            {/* Call to action */}
            <motion.div
                className="md:mt-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: data.experiences.length * 0.1 + 0.7 }}
            >
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">Want to know more about my professional journey?</p>
                <a
                    href="#contact-me"
                    className="inline-flex items-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm md:text-base font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                    Get in touch
                    <ChevronRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </a>
            </motion.div>
        </div>
    )
}

export default ExperienceTimeline