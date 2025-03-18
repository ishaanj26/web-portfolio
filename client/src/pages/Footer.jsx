import React from 'react';
import SocialMediaIcons from '../components/Social-Media-Icons';
import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-black p-1">
      <div className="container mx-auto dark:text-white dark:from-gray-950 dark:to-gray-900 ">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex space-x-5 my-2 justify-center"
        >
          <SocialMediaIcons iconWidth={8} iconHeight={8} iconSize={1} />
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.p
            className="text-xs text-gray-800 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
          >
            Copyright &copy; {currentYear} <span className="my-name font-bold text-blue-600 dark:text-blue-400">Ishaan Jain</span>
          </motion.p>
          <motion.p
            className="text-xs text-gray-800 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.1 }}
          >
            Developed and Designed by <span className="my-name font-bold text-blue-600 dark:text-blue-400">Ishaan Jain</span>
          </motion.p>
          <motion.p
            className="text-xs text-gray-800 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.3 }}
          >
            All Rights Reserved
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;