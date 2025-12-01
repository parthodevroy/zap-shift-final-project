import React from 'react';
import Logo from './Logo';
import { NavLink } from 'react-router';
import useAuth from '../hooks/useAuth';

const Navber = () => {

  const {user,signout}=useAuth()

  const handellogout=()=>{

   signout()
    .then(()=>{})
    .catch(error=>{
      console.log(error);
      
    })

  }
    const link=<>
  
    <li></li>
       <li>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-teal-500 text-xl font-bold" : "text-xl font-bold"}>
          Home
        </NavLink>
      </li>
       <li className='text-xl font-bold'>
        <NavLink >
          Survice
        </NavLink>
      </li>
       <li>
        <NavLink to="/covarage" className={({ isActive }) => isActive ? "text-teal-500 text-xl font-bold" : "text-xl font-bold"}>
          Covarage
        </NavLink>
      </li>
       <li>
        <NavLink to="/parcel" className={({ isActive }) => isActive ?"text-teal-500 text-xl font-bold" : "text-xl font-bold"}>
          SendParcel
        </NavLink>
      </li> 
      {user && <> <li>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ?"text-teal-500 text-xl font-bold" : "text-xl font-bold"}>
          DashBoard
        </NavLink>
      </li>
       <li>
        <NavLink to="/dashboard/my-parcels" className={({ isActive }) => isActive ? "text-teal-500 text-xl font-bold" : "text-xl font-bold"}>
          My Parcel
        </NavLink>
      </li> 
       <li>
        <NavLink to="/rider" className={({ isActive }) => isActive ? "text-teal-500 text-xl font-bold" : "text-xl font-bold"}>
          Be A Rider
        </NavLink>
      </li> 
      
      </>
      }
      {/* <li>
        <NavLink to="/covarage" className={({ isActive }) => isActive ? "text-teal-500" : ""}>
          Covarage
        </NavLink>
      </li>  */}
    </>
    return (
       <div className="navbar sticky w-full h-28 top-0 z-50 bg-white shadow-md mx-auto shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {link}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><Logo/></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {link}
    </ul>
  </div>
  <div className="navbar-end">
   <div className="navbar-end">
        {user ? (
          <button className="btn text-xl font-semibold" onClick={handellogout}>Log Out</button>
        ) : (
          <NavLink to="/login" className="btn text-xls font-semibold">Login</NavLink>
        )}
      </div>
  </div>
</div>
    );
};

export default Navber;