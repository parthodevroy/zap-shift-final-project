import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxios from '../../../hooks/useAxios';

const Payment = () => {

   
    const {paymentId}=useParams()
    const axiosSecure=useAxios()
    const {isLoading,data:parcel}=useQuery({
        queryKey:["parcels",paymentId],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/parcels/${paymentId}`)
            return res.data

        }
    })
    if (isLoading) {
        return <span className="loading loading-spinner"></span>
        
    }
console.log(parcel);

     const handelPayment=async()=>{
        const userInfo={
            cost:parcel.cost,
            parcelName:parcel.parcelName,
            parcelId:parcel._id,
            semderEmail:parcel.EmailAddress


        }
        const res=await axiosSecure.post("/create-checkout-session",userInfo)
        window.location.href=res.data.url

        
    }

    return (
        <div>
            <h1>pay now:${parcel.cost}........for......{parcel.parcelName}</h1>
            <button onClick={handelPayment} className='btn btn-primary' type="button">pay</button>
        </div>
    );
};

export default Payment;