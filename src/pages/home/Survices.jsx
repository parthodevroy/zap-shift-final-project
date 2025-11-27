// import React from 'react';
// import img1 from '../../assets/bookingicon.png'
// import AnimateText from '../AnimateText/AnimateText';


// const Survices = () => {
//     const stat= [
//         {
//             img:img1,
//              title: "Booking Pick & Drop",
//              desc:'From personal packages to business shipments — we deliver on time, every time.'
            
//         },
//         {
//             img:img1,
//              title: "Cash On Delivery",
//              desc:'From personal packages to business shipments — we deliver on time, every time.'

//          },
//         { 
//             img:img1,
//             title: "Delivery Hub",
//             desc:'From personal packages to business shipments — we deliver on time, every time.'
//          },
//         {
//             img:img1,
//              title: "Active Volunteers",
//             desc:'From personal packages to business shipments — we deliver on time, every time.'
//         },
//          { 
//             img:img1,
//             title: "Delivery Hub",
//             desc:'From personal packages to business shipments — we deliver on time, every time.'
//          },
//         {
//             img:img1,
//              title: "Active Volunteers",
//             desc:'From personal packages to business shipments — we deliver on time, every time.'
//         },
//     ];

//     return (
//         // এই কোডটি আগের মতোই থাকবে, শুধু ভেতরের div টি পরিবর্তন হবে

// <div className='h-[900px] bg-[#03373D] rounded-xl border-2'>
//     <div className='flex flex-col text-center justify-center items-center p-16'>
        
//         {/* H1 Title এর জন্য আলাদাভাবে ব্যবহার করুন */}
//         <AnimateText
//              text="Our Services"
//              className="text-3xl font-bold text-white" // H1-এর স্টাইল এখানে পাস করা হলো
//         />

//         {/* Paragraph Text এর জন্য আলাদাভাবে ব্যবহার করুন */}
//         <AnimatedText
//              text="Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time."
//              className="text-white mt-4" // P-এর স্টাইল এখানে পাস করা হলো
//         />


//     {/* ... (বাকি কোড: stats.map লুপ) ... */}

                  
//                     {/* Title */}
//                     <p className="text-gray-800 font-semibold mt-1">{stat.title}</p>

//                     {/* Description */}
//                     <p className="text-gray-600 mt-2 text-sm">
//                         {stat.desc}
//                     </p>
                
        
//         </div>
//         </div>
//     );
// };

// export default Survices;

import React from 'react';
import img1 from '../../assets/bookingicon.png';
import AnimateText from '../AnimateText/AnimateText';
import { motion } from "framer-motion"; // <-- Framer Motion ইমপোর্ট করা হলো


// অ্যানিমেশন ভ্যারিয়েন্টগুলো এখানে সংজ্ঞায়িত করুন (বা কম্পোনেন্টের বাইরে)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    },
};

const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        }
    },
};

const Survices = () => {
    const stats = [ 
         {
            img:img1,
             title: "Booking Pick & Drop",
             desc:'From personal packages to business shipments — we deliver on time, every time.'         
        },
        {
            img:img1,
             title: "Cash On Delivery",
             desc:'From personal packages to business shipments — we deliver on time, every time.'
         },
        { 
            img:img1,
            title: "Delivery Hub",
            desc:'From personal packages to business shipments — we deliver on time, every time.'
         },
        {
            img:img1,
             title: "Active Volunteers",
            desc:'From personal packages to business shipments — we deliver on time, every time.'
        },
         { 
            img:img1,
            title: "Delivery Hub",
            desc:'From personal packages to business shipments — we deliver on time, every time.'
         },
        {
            img:img1,
             title: "Active Volunteers",
            desc:'From personal packages to business shipments — we deliver on time, every time.'
        }  ]; // stat এর নাম stats করা হলো

    return (
        <div className='h-[900px] bg-[#03373D] rounded-xl border-2'>
            <div className='flex flex-col text-center justify-center items-center p-16'>
                
                {/* 1. শিরোনাম অ্যানিমেশন */}
                <AnimateText
                    text="Our Services"
                    className="text-3xl font-bold text-white mb-4" // মার্জিন যোগ করা হলো
                />

                {/* 2. প্যারাগ্রাফ অ্যানিমেশন */}
                <AnimateText
                    text="Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time."
                    className="text-white text-lg max-w-2xl" // স্টাইল আপডেট করা হলো
                />

            </div>
            
            {/* 3. কার্ড কন্টেইনার অ্যানিমেশন */}
            <motion.div 
                className="max-w-6xl p-4 h-[600px] w-[1280px] mx-auto my-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible" // স্ক্রল করার সময় অ্যানিমেট হবে
                viewport={{ once: true, amount: 0.2 }}
            >
                {stats.map((stat, idx) => (
                    // 4. প্রতিটি কার্ড অ্যানিমেশন
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        {/* Image */}
                        <img
                            src={stat.img}
                            alt={stat.title}
                            className="w-28 h-26 mx-auto mb-4 object-contain"
                        />

                        {/* Title */}
                        <p className="text-gray-800 font-semibold mt-1">{stat.title}</p>

                        {/* Description */}
                        <p className="text-gray-600 mt-2 text-sm">
                            {stat.desc}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Survices;