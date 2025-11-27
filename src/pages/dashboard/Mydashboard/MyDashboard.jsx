import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxios from '../../../hooks/useAxios';
import { MdPageview } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyDashboard = () => {

  
    const {user}=useAuth()
    const axiosSecure=useAxios()
    const {data:parcels=[],refetch,isLoading}=useQuery({
        queryKey:["myDashboard",user?.email],
        queryFn:async()=>{
        const res=await axiosSecure.get(`parcels?email=${user.email}`)
        return res.data
        }
    })

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-full min-h-[500px]">
             
                <span className="loading loading-spinner loading-lg text-primary"></span>
                <p className='ml-2 text-xl font-medium'>Loading parcels...</p>
            </div>
        );
    }

    
    if (parcels.length === 0) {
        return (
            <div className="flex justify-center items-center h-full min-h-[500px] text-center">
                <p className="text-2xl text-gray-500">You have not sent any parcels yet.</p>
            </div>
        );
    }

    const handelDelete = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/parcels/${id}`) 
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your parcel has been deleted.",
                            icon: "success"
                        });
                        refetch(); 
                    }
                })
                .catch(error => {
                    console.error("Delete Error:", error);
                });
        }
    });
};

    return (
        <div>
           

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Cost</th>
        <th>Payment</th>
        <th>Traking Id</th>
        <th>Delevary Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        parcels.map((p,index)=>
      <tr key={p._id}>
        <th>{index+1}</th>
        <td>{p.parcelName}</td>
        <td>{p.cost}</td>
        <td>{
          p.paymentStatus ==="paid"?
          
          <span className='text-green-500'>Paid</span>
          :
          <Link to={`/dashboard/payment/${p._id}`}>
          <button className='btn btn-primary' type="button">Pay</button>
          </Link>
          }</td>
        <td>{p.trackingId}</td>
        <td className='text-yellow-300'>{p.deliveryStatus}</td>
        <td>

          <button className="btn">
           <MdPageview />
          </button>

          <button onClick={()=>handelDelete(p._id)} className="btn">
           <FaRegTrashAlt />
          </button>



        </td>
      </tr>
        )
      }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyDashboard;
