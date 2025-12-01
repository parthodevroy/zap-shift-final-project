import React from 'react';
import useRole from '../../../hooks/useRole';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import RiderDashboard from '../RiderDashboard/RiderDashboard';
import UserDashboard from '../UserDashboard/UserDashboard';

const DashboardHome = () => {
    const {role,adminloading}=useRole()

    if (adminloading) {
        return <div>loading.....</div>
        
    }
    if (role ==="admin") {
        return <AdminDashboard></AdminDashboard>
        
    }
    else if (role==="rider") {
        return <RiderDashboard></RiderDashboard>
    }
    else{
 return <UserDashboard></UserDashboard>
    }
   
};

export default DashboardHome;