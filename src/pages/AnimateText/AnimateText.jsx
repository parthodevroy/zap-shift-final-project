import React from 'react';
import { motion } from 'framer-motion';

// কন্টেইনার ভ্যারিয়েন্ট: প্রতিটি শব্দকে আলাদাভাবে অ্যানিমেট করার জন্য stagger
const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: i * 0.1 }, // 0.04s ডিলের সাথে একটির পর একটি আসবে
  }),
};

// আইটেম ভ্যারিয়েন্ট: প্রতিটি শব্দের জন্য "slide-in up" অ্যানিমেশন
const child = {
  hidden: {
    opacity: 0,
    y: 20, // 20px নিচে থেকে শুরু হবে
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    },
  },
  visible: {
    opacity: 1,
    y: 0, // উপরের দিকে আসবে
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    },
  },
};

const AnimateText = ({ text, className }) => {
  // টেক্সটকে শব্দ ধরে ভাগ করা
  const words = text.split(" "); 

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }} // টেক্সট wrap করার জন্য
      variants={container}
      initial="hidden"
      whileInView="visible" // স্ক্রল করার সময় এটি দেখতে পেলে অ্যানিমেট হবে
      viewport={{ once: true, amount: 0.8 }} // 80% দেখা গেলেই অ্যানিমেট হবে
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className={className} // Tailwind ক্লাসের জন্য
          style={{ marginRight: "0.5em" }} // শব্দের মধ্যে স্পেস রাখার জন্য
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimateText;