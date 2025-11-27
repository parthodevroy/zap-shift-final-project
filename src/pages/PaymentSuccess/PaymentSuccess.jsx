// import React from 'react';
// import { Link, useSearchParams } from 'react-router';

// const PaymentSuccess = () => {
//     const {searchParams}=useSearchParams()
//     const sessionId=searchParams.get("session_id")
//     console.log(sessionId);
    
//     return (
//         <div>
//             <h1 className='text-green-500 text-2xl font-semibold'>Payment Successfully</h1>
//              <Link to={"/dashboard/my-parcels"}><button className='btn btn-primary'>GO Dashboard</button></Link>
//         </div>
//     );
// };

// export default PaymentSuccess;
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router'; // 'react-router-dom' থেকে Link ও useSearchParams ইমপোর্ট করুন
import useAxios from '../../hooks/useAxios';

// import { useAuth } from '../../../hooks/useAuth'; // যদি লাগে

const PaymentSuccess = () => {
    // URL থেকে session_id নেওয়া
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get("session_id");

    const axiosSecure = useAxios(); // আপনার Axios ইনস্ট্যান্স
    const [paymentStatus, setPaymentStatus] = useState("verifying"); // স্টেট ট্র্যাক করার জন্য

    // useEffect(() => {
    //     if (sessionId) {
    //         // 1. ব্যাকএন্ডে সেশন আইডি পাঠানো
    //         axiosSecure.post(`/payment/verify`, { sessionId: sessionId })
    //             .then(res => {
    //                 const data = res.data;
                    
    //                 if (data.verified) {
    //                     setPaymentStatus("success");
    //                     // ডেটাবেসে পার্সেল স্ট্যাটাস আপডেট করার কাজটি ব্যাকএন্ডে হওয়া উচিত
    //                     console.log("Payment successful and parcel updated:", data.parcelId);
    //                 } else {
    //                     setPaymentStatus("failed");
    //                     console.error("Payment verification failed:", data.message);
    //                 }
    //             })
    //             .catch(error => {
    //                 setPaymentStatus("error");
    //                 console.error("Verification API Error:", error);
    //             });
    //     }
    // }, [sessionId, axiosSecure]);
useEffect(() => {
    if (!sessionId) return;

    let called = false; // 🔥 double block stopper

    const verifyPayment = async () => {
        if (called) return;  
        called = true;

        try {
            const res = await axiosSecure.post("/payment/verify", { sessionId });

            if (res.data.verified) {
                setPaymentStatus("success");
            } else {
                setPaymentStatus("failed");
            }
        } catch (err) {
            setPaymentStatus("error",err);
        }
    };

    verifyPayment();
}, [sessionId]);  // ❗ axiosSecure remove

    // 2. লোডিং/স্ট্যাটাস ডিসপ্লে
    if (paymentStatus === "verifying") {
        return <div className="text-center mt-20">
            <span className="loading loading-spinner loading-lg"></span>
            <p className="mt-4">Verifying Payment...</p>
        </div>;
    }
    
    let message, colorClass;
    if (paymentStatus === "success") {
        message = "Payment Successfully Completed!";
        colorClass = "text-green-500";
    } else {
        message = "Payment Verification Failed or Canceled!";
        colorClass = "text-red-500";
    }

    return (
        <div className="text-center mt-20">
            <h1 className={`${colorClass} text-2xl font-semibold`}>{message}</h1>
            <p className="mt-2 text-sm text-gray-600">Session ID: {sessionId}</p>
            <Link to={"/dashboard/my-parcels"}>
                <button className='btn btn-primary mt-6'>Go to Dashboard</button>
            </Link>
        </div>
    );
};

export default PaymentSuccess;