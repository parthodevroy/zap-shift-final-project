import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({ sender: "", email: "", parcelId: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Parcel alert sent successfully! 📦"); 
    setFormData({ sender: "", email: "", parcelId: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center p-6 md:p-10">

      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-yellow-600 mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Parcel Delivery Alert 🚚
      </motion.h1>

      <motion.p
        className="text-center text-gray-600 mb-8 max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Report parcel status, issues, or delivery updates safely to the ZapShift system.
      </motion.p>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4 border border-gray-300"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <input
          type="text"
          name="sender"
          placeholder="Sender Name"
          className="input input-bordered w-full bg-white text-gray-900 border-gray-300 placeholder-gray-400"
          value={formData.sender}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Sender Email"
          className="input input-bordered w-full bg-white text-gray-900 border-gray-300 placeholder-gray-400"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="parcelId"
          placeholder="Parcel ID / Tracking Number"
          className="input input-bordered w-full bg-white text-gray-900 border-gray-300 placeholder-gray-400"
          value={formData.parcelId}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Delivery status, issue, or note"
          className="textarea textarea-bordered w-full bg-white text-gray-900 border-gray-300 placeholder-gray-400"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05, backgroundColor: "#f59e0b" }}
          className="btn bg-yellow-500 w-full text-white font-semibold"
        >
          Send Alert
        </motion.button>
      </motion.form>

      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        theme="light"
        closeOnClick
        pauseOnHover
      />
    </div>
  );
};

export default Contact;
