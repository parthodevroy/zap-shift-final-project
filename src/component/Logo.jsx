import React from 'react';
import logo from '../assets/logo.png'

const Logo = () => {
    return (
        <div className='flex items-end'>
            <img src={logo} alt="logo" />
            <p className='text-4xl font-bold -ms-3'>zapShift</p>
        </div>
    );
};

export default Logo;