import React from 'react';
import useAxios from '../../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';

const AdminDashboard = () => {
   
        const axiosSecure = useAxios()
        const { data:stats = [] } = useQuery({
            queryKey: ["delivery-status-stats"],
            queryFn: async () => {
               
                const res = await axiosSecure.get("/parcels/delivery-status/status")
                 
                return res.data
            }
        })
    return (
        <div>
            <h1>admin</h1>
            <div className="stats max-w-full shadow">
  {
    stats.map(stat=> <div key={stat._id} className="stat place-items-center">
    <div className="stat-title">{stat._id}</div>
    <div className="stat-value">{stat.count}</div>
    <div className="stat-desc">From January 1st to February 1st</div>
  </div>)
  }

 
</div>
        </div>
    );
};

export default AdminDashboard;