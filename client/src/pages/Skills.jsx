import { useState } from "react"
import { motion } from "framer-motion"
import { Cpu, Monitor, BrainCircuit, Code, Cog, Database, Globe, Smartphone, PenToolIcon, Server, Zap, ChevronRight, BriefcaseBusiness, Gamepad2 } from "lucide-react"
import data from "../data.json";

const iconMap = {
  Globe,
  Server,
  Smartphone,
  Code,
  Database,
  PenToolIcon,
  Monitor,
  Zap,
  Cog,
  BrainCircuit,
  Cpu,
  BriefcaseBusiness,
  Gamepad2
};

// Skill level labels
const skillLevelLabels = {
  90: "Expert",
  80: "Advanced",
  70: "Intermediate",
  60: "Competent",
  50: "Basic",
}

// Get skill level label based on percentage
const getSkillLevel = (percentage) => {
  const thresholds = Object.keys(skillLevelLabels)
    .map(Number)
    .sort((a, b) => b - a)
  for (const threshold of thresholds) {
    if (percentage >= threshold) {
      return skillLevelLabels[threshold]
    }
  }
  return "Beginner"
}
// const navigate=useNavigate()

function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState(data.skillsData[0].category)
  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <div className="relative flex flex-col items-center w-full pt-5 pb-16 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <motion.h1
        className="my-name mb-12 sm:mb-14 md:mb-16  text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-blue-500">My</span> Skills
      </motion.h1>

      {/* Skills Overview */}
      <motion.div
        id="tech-proficiency"
        className="w-full max-w-6xl mb-12 sm:mb-14 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6 text-gray-800 dark:text-white">Technical Proficiency</h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 md:mb-8">
            As a full-stack developer, I've cultivated a diverse skill set spanning frontend and backend technologies.
            My expertise lies in creating responsive, user-friendly interfaces with React and Next.js, while building
            robust server-side solutions with Node.js and various databases.
          </p>

          {/* Skill Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
            {data.skillsData.map((category, index) => {
              const IconComponent = iconMap[category.icon];
              return (
                <motion.button
                  key={category.category}
                  className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${activeCategory === category.category
                    ? `bg-gradient-to-r ${category.color} text-white shadow-md`
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  onClick={() => setActiveCategory(category.category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  {IconComponent && <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />}
                  {category.category}
                </motion.button>
              )
            })}
          </div>

          {/* Active Category Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {data.skillsData
              .find((category) => category.category === activeCategory)
              ?.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      {hoveredSkill === skill.name ? getSkillLevel(skill.level) : `${skill.level}%`}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 sm:h-2.5 mb-3 sm:mb-4">
                    <motion.div
                      className={`h-2 sm:h-2.5 rounded-full bg-gradient-to-r ${data.skillsData.find((category) => category.category === activeCategory).color
                        }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </motion.div>

      {/* Skill Categories Grid */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {data.skillsData.map((category, index) => {
            const IconComponent = iconMap[category.icon];
            return (
              <motion.div
                key={category.category}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                <div className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                      {IconComponent && <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">{category.category}</h3>
                  </div>

                  <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                    {category.skills.slice(0, 4).map((skill) => (
                      <li key={skill.name} className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                        <span>{skill.name}</span>
                        <div className="ml-auto flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1 sm:w-1.5 h-3 sm:h-4 rounded-sm mx-0.5 ${i < Math.floor(skill.level / 20)
                                ? `bg-gradient-to-r ${category.color}`
                                : "bg-gray-200 dark:bg-gray-700"
                                }`}
                            />
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>

                  {category.skills.length > 4 && (
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">+{category.skills.length - 4} more skills</p>
                  )}
                  <button
                    className={`mt-3 sm:mt-4 text-xs sm:text-sm font-medium bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                    onClick={() => {
                      setActiveCategory(category.category)
                    }}
                  >
                    <a href="#tech-proficiency"> View all {category.category} skills</a>
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Learning Journey */}
      <motion.div
        className="w-full max-w-6xl mt-12 sm:mt-14 md:mt-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 text-white text-center">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-5 md:mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Continuous Learning Journey
          </motion.h2>
          <p className="mb-3 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-lg text-blue-100">Technology is evolving rapidly, and I'm committed to growing with it. Currently exploring:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {data.learningTopics.map((topic, index) => {
              const IconComponent = iconMap[topic.icon];
              return (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-2 sm:p-5 md:p-6 shadow-md flex flex-col items-center text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {IconComponent && <IconComponent className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white mb-2 sm:mb-3" />}
                  <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">{topic.title}</h3>
                  <p className="text-xs sm:text-sm text-blue-100">{topic.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SkillsPage