import { motion } from "framer-motion";
import ProjectCarousel from "../components/Slider";
import data from "../data.json";

function Projects() {
    const projectsData = data.projectsData;

    return (
        <div className="relative flex flex-col items-center w-full pb-8 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
            <motion.h1
                className="my-name text-4xl md:text-6xl font-bold tracking-tight "
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span className="text-blue-500">My</span> Projects
            </motion.h1>

            <ProjectCarousel projectsData={projectsData} />
        </div>
    );
}

export default Projects;