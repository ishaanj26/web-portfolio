import { useState } from "react"
import { motion } from "framer-motion"
import { Cpu,Monitor   ,BrainCircuit ,Code, Cog, Database, Globe, Smartphone, PenToolIcon, Server, Zap, ChevronRight,BriefcaseBusiness,Gamepad2   } from "lucide-react"

// Skill data organized by categories
const skillsData = [
  {
    category: "Frontend",
    icon: <Globe className="w-6 h-6" />,
    color: "from-blue-500 to-blue-600",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript", level: 92 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Redux", level: 82 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    color: "from-green-500 to-green-600",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Firebase", level: 78 },
      { name: "RESTful APIs", level: 90 },
      { name: "Socket.io", level: 68 },
      { name: "Django (Beginner)", level: 50 },
    ],
  },
  {
    category: "Mobile",
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-purple-500 to-purple-600",
    skills: [
      { name: "React Native", level: 75 },
      { name: "Flutter", level: 65 },
      { name: "Dart", level: 70 },
      { name: "Responsive Design", level: 92 },
      { name: "Android Development", level: 70 },
      { name: "iOS Development", level: 65 },
    ],
  },
  {
    category: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    color: "from-yellow-500 to-yellow-600",
    skills: [
      { name: "JavaScript", level: 92 },
      { name: "Python", level: 75 },
      { name: "C/C++", level: 85 },
      { name: "Java", level: 70 },
      { name: "Dart", level: 75 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    category: "Databases",
    icon: <Database className="w-6 h-6" />,
    color: "from-red-500 to-red-600",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 75 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: <Monitor    className="w-6 h-6" />,
    color: "from-indigo-500 to-indigo-600",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 75 },
      { name: "AWS", level: 65 },
      { name: "Vercel", level: 85 },
      { name: "Netlify", level: 80 },
      { name: "RazorPay Integration", level: 70 },
      { name: "Firebase Hosting", level: 78 },

    ],
  },
  {
    category: "Design",
    icon: <PenToolIcon className="w-6 h-6" />,
    color: "from-pink-500 to-pink-600",
    skills: [
      { name: "Figma", level: 80 },
      { name: "Adobe XD", level: 70 },
      { name: "UI/UX Principles", level: 85 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    category: "Other",
    icon: <Zap className="w-6 h-6" />,
    color: "from-cyan-500 to-cyan-600",
    skills: [
      { name: "Problem Solving", level: 95 },
      { name: "Project Management", level: 80 },
      { name: "Business Development", level: 78 },
      { name: "Public Speaking", level: 88 },
      { name: "SEO Basics", level: 75 },
      { name: "Performance Optimization", level: 85 },
      { name: "Data Science Basics", level: 70 },
      { name: "Machine Learning (Beginner)", level: 65 },
      { name: "Teamwork & Collaboration", level: 92 },
      { name: "Negotiation", level: 80 },
      { name: "Social Media Handling", level: 92 },
    ],
  },
  {
    category: "Other Technical Skills",
    icon: <Cog className="w-6 h-6" />,
    color: "from-gray-900 to-gray-700",
    skills: [
      { name: "Performance Optimization", level: 85 },
      { name: "Testing (Jest, RTL)", level: 78 },
      { name: "Web Scraping", level: 72 },
      { name: "Monitor   Computing (Basics)", level: 65 },
      { name: "API Development", level: 88 },
      { name: "Auth & Security", level: 80 },
    ],
  },
]

const learningTopics = [
  {
    icon: BrainCircuit,
    title: "Advanced Machine Learning",
    description: "Exploring deep learning, NLP, and expanding knowledge in TensorFlow & PyTorch for AI-driven applications."
  },
  {
    icon: Cpu,
    title: "Full-Stack Scaling",
    description: "Learning database optimization, microservices, and high-performance API development for scalable applications."
  },
  {
    icon: Smartphone,
    title: "React Native & Cross-Platform Apps",
    description: "Enhancing mobile development expertise by building feature-rich cross-platform apps using React Native & Flutter."
  },
  {
    icon: BriefcaseBusiness,
    title: "Business & Entrepreneurship",
    description: "Preparing for CAT while exploring business development strategies, product-market fit, and startup growth tactics."
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Researching Unreal Engine & Unity to build an original mythology-inspired PS4 game, ‘Ashwatva – The Eternal War.’"
  },
  {
    icon: Database,
    title: "DBMS & System Design",
    description: "Strengthening database fundamentals, query optimization, and scalable system architectures for large-scale applications."
  }
];

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
  const [activeCategory, setActiveCategory] = useState(skillsData[0].category)
  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <div className="relative flex flex-col items-center w-full pt-5 pb-16 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <motion.h1
        className="my-name mb-16 text-6xl font-bold tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-blue-500">My</span> Skills
      </motion.h1>

      {/* Skills Overview */}
      <motion.div
        id="tech-proficiency"
        className="w-full max-w-6xl mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Technical Proficiency</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            As a full-stack developer, I've cultivated a diverse skill set spanning frontend and backend technologies.
            My expertise lies in creating responsive, user-friendly interfaces with React and Next.js, while building
            robust server-side solutions with Node.js and various databases.
          </p>

          {/* Skill Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {skillsData.map((category, index) => (
              <motion.button
                key={category.category}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeCategory === category.category
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
                {category.icon}
                {category.category}
              </motion.button>
            ))}
          </div>

          {/* Active Category Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData
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
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {hoveredSkill === skill.name ? getSkillLevel(skill.level) : `${skill.level}%`}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
                    <motion.div
                      className={`h-2.5 rounded-full bg-gradient-to-r ${skillsData.find((category) => category.category === activeCategory).color
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`} />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{category.category}</h3>
                </div>

                <ul className="space-y-2 mb-4">
                  {category.skills.slice(0, 4).map((skill) => (
                    <li key={skill.name} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                      <span>{skill.name}</span>
                      <div className="ml-auto flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-4 rounded-sm mx-0.5 ${i < Math.floor(skill.level / 20)
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
                  <p className="text-sm text-gray-500 dark:text-gray-400">+{category.skills.length - 4} more skills</p>
                )}
                <button

                  className={`mt-4 text-sm font-medium bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                  onClick={() => {
                    setActiveCategory(category.category)
                  }}
                >
                  <a href="#tech-proficiency"> View all {category.category} skills</a>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learning Journey */}
      <motion.div
        className="w-full max-w-6xl mt-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
         <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Continuous Learning Journey
      </motion.h2>
      <p className="mb-8 text-lg text-blue-100">Technology is evolving rapidly, and I'm committed to growing with it. Currently exploring:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {learningTopics.map((topic, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-md flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <topic.icon className="w-8 h-8 text-white mb-3" />
            <h3 className="font-bold text-lg mb-2">{topic.title}</h3>
            <p className="text-sm text-blue-100">{topic.description}</p>
          </motion.div>
        ))}
      </div>
    </div>

      </motion.div>
    </div>
  )
}

export default SkillsPage

