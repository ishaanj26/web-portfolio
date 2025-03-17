import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPalette, FaChartLine, FaMobileAlt, FaDatabase, FaRobot, FaGamepad, FaBusinessTime } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaCode className="text-5xl text-blue-500" />, 
      title: "Web Development", 
      description: "Building responsive and modern web applications with cutting-edge technologies."
    },
    {
      icon: <FaPalette className="text-5xl text-pink-500" />, 
      title: "UI/UX Design", 
      description: "Creating visually appealing and user-friendly interfaces for a seamless experience."
    },
    {
      icon: <FaChartLine className="text-5xl text-green-500" />, 
      title: "SEO & Marketing", 
      description: "Optimizing websites for search engines and boosting online visibility."
    },
    {
      icon: <FaMobileAlt className="text-5xl text-purple-500" />, 
      title: "App Development", 
      description: "Developing high-performance mobile applications using Flutter and React Native."
    },
    {
      icon: <FaDatabase className="text-5xl text-orange-500" />, 
      title: "Database Management", 
      description: "Designing and managing efficient database systems using SQL and NoSQL."
    },
    {
      icon: <FaRobot className="text-5xl text-yellow-500" />, 
      title: "AI & Machine Learning", 
      description: "Implementing intelligent systems and predictive models for data-driven solutions."
    }
  ];

  return (
    <div className="relative flex flex-col items-center w-full pb-16 pt-4 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <motion.h1
        className="my-name text-6xl font-bold tracking-tight mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-blue-500">My</span> Services
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {service.icon}
            <h2 className="mt-4 text-2xl font-semibold">{service.title}</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
