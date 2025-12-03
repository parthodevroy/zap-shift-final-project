import React from "react";
import { FaShippingFast, FaUserCheck, FaMoneyBillWave, FaTruck } from "react-icons/fa";

const services = [
  {
    title: "Fast Delivery",
    description: "We ensure your parcels reach their destination quickly and safely.",
    icon: <FaShippingFast size={40} className="text-teal-500" />,
  },
  {
    title: "Verified Riders",
    description: "All riders are thoroughly verified to guarantee reliable delivery.",
    icon: <FaUserCheck size={40} className="text-teal-500" />,
  },
  {
    title: "Secure Payments",
    description: "Make payments safely via our secured online payment system.",
    icon: <FaMoneyBillWave size={40} className="text-teal-500" />,
  },
  {
    title: "Track Your Parcel",
    description: "Track your parcel in real-time with our live tracking system.",
    icon: <FaTruck size={40} className="text-teal-500" />,
  },
];

const SurvicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our Services
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          We provide top-notch delivery solutions for individuals and businesses.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Ready to send your parcel?
        </h2>
        <p className="text-gray-600 mb-6">
          Sign up or log in to start using our service immediately.
        </p>
        <a
          href="/login"
          className="inline-block bg-teal-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-teal-600 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default SurvicePage;
