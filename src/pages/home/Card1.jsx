// import React from 'react';
// import img1 from '../../assets/bookingicon.png'

// const Card1 = () => {
//     const stats = [
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
//     ];

//     return (
//          <div className="max-w-6xl mx-auto  my-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
//             {stats.map((stat, idx) => (
//                 <div
//                     key={idx}
//                     className="bg-amber-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
//                 >
//                     {/* Image */}
//                     <img
//                         src={stat.img}
//                         alt={stat.title}
//                         className="w-20 h-20 mx-auto mb-4 object-contain"
//                     />

                  
//                     {/* Title */}
//                     <p className="text-gray-800 font-semibold mt-1">{stat.title}</p>

//                     {/* Description */}
//                     <p className="text-gray-600 mt-2 text-sm">
//                         {stat.desc}
//                     </p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Card1;
import React from 'react';
import img1 from '../../assets/bookingicon.png';
import { motion } from "framer-motion"; 

const Card1 = () => {
    // ... (stats array is here, unchanged) ...
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
    ];

    // অ্যানিমেশন ভ্যারিয়েন্টগুলো এখানে সংজ্ঞায়িত করুন (অপরিবর্তিত)
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
        hidden: { y: 50, opacity: 0 }, // নিচে থেকে শুরু হবে
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

    return (
        <motion.div 
            className="max-w-6xl mx-auto my-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center"
            
            variants={containerVariants} // কন্টেইনার ভ্যারিয়েন্ট
            initial="hidden" // শুরুতে এটি হিডেন থাকবে

            // 🌟 এই প্রপার্টিগুলো যোগ করুন:
            whileInView="visible" // ইউজার যখন স্ক্রল করে ভিউপোর্টে আসবে, তখন 'visible' এ অ্যানিমেট হবে
            viewport={{ once: true, amount: 0.4 }} // ভিউপোর্টের 40% এলে একবারই অ্যানিমেট হবে
        >
            {stats.map((stat, idx) => (
                <motion.div 
                    key={idx}
                    variants={itemVariants} // আইটেম ভ্যারিয়েন্ট
                    className="bg-amber-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                    {/* ... (বাকি কন্টেন্ট অপরিবর্তিত) ... */}
                    <img
                        src={stat.img}
                        alt={stat.title}
                        className="w-20 h-20 mx-auto mb-4 object-contain"
                    />
                    <p className="text-gray-800 font-semibold mt-1">{stat.title}</p>
                    <p className="text-gray-600 mt-2 text-sm">{stat.desc}</p>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Card1;