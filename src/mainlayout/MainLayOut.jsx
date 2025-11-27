import React from 'react';
import Logo from '../component/Logo';
import { Link, Outlet } from 'react-router';
import img from "../assets/authImage.png"

const MainLayOut = () => {
    return (
        <div className='max-w-6xl pt-2 mx-auto'>
            <Link to={"/"}><Logo/></Link>
            <div className='flex items-center'>
                <div className='flex-1'><Outlet/></div>
                <div className='flex-1 bg-amber-50'>
                    <img src={img} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default MainLayOut;