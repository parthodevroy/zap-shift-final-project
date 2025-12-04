import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-white  text-black flex flex-col items-center justify-center p-6 md:p-10">
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About ZapShift 🚚
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-lg md:text-xl text-black max-w-2xl text-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Welcome to <span className="text-amber-200 font-semibold">ZapShift</span> —  
        your fast and reliable parcel delivery platform. We help senders and riders 
        track, manage, and deliver packages efficiently across locations. 
        Join us to streamline deliveries and stay updated in real-time!
      </motion.p>

      {/* Features / Highlights */}
      <motion.div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {[
          { title: "Fast Deliveries", icon: "⚡" },
          { title: "Real-Time Tracking", icon: "📍" },
          { title: "Verified Riders", icon: "✅" },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-800 rounded-xl shadow-md text-center border border-yellow-500"
          >
            <p className="text-5xl mb-3">{item.icon}</p>
            <h3 className="text-xl font-semibold text-yellow-400">{item.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
