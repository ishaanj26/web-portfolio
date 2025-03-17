import React from 'react'
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import data from "../data.json";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconMap = {
    faLinkedin,
    faInstagram,
    faGithub,
};

function SocialMediaIcons({
    iconWidth = 12,
    iconHeight = 12,
    iconSize = 2 // new prop for dynamic icon size
}) {
    return (
        <>
            {
                data.socialMediaPlatforms.map((platform, index) => (
                    <motion.a
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        key={index}
                        href={platform.href}
                        className={`w-${iconWidth} h-${iconWidth} rounded-full flex items-center justify-center text-${iconSize}xl shadow-lg transition-all duration-300 ${platform.class} hover:scale-110`}
                    >
                        {platform.icon ? (
                            <FontAwesomeIcon icon={iconMap[platform.icon]} className="text-white" />
                        ) : (
                            <img src={platform.image} alt="LeetCode" className={`w-${iconWidth/2} h-${iconWidth/2} `} />
                        )}
                    </motion.a>
                ))
            }
        </>

    )
}

export default SocialMediaIcons
