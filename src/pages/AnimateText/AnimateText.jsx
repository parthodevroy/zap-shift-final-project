import React from 'react';
import { motion } from 'framer-motion';


const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: i * 0.1 }, 
  }),
};


const child = {
  hidden: {
    opacity: 0,
    y: 20, 
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    },
  },
};

const AnimateText = ({ text, className }) => {
 
  const words = text.split(" "); 

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }} 
      variants={container}
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, amount: 0.8 }} 
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className={className} 
          style={{ marginRight: "0.5em" }} 
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimateText;