import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../component/Navber';
import Footer from '../component/Footer';
import Homepage from '../pages/home/Homepage';

const Root = () => {
    return (
        <div className="max-w-6xl pb-4 bg-[#7f7a85] mx-auto">
            <Navber/>

            <div className="max-w-6xl mx-auto">
                <Outlet/>
            </div>

            <Footer/>
        </div>
    );
};

export default Root;
