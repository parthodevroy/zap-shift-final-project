// import React from 'react';
// import { Outlet } from 'react-router';
// import Navber from '../component/Navber';
// import Footer from '../component/Footer';
// import Homepage from '../pages/home/Homepage';

// const Root = () => {
//     return (
//         <div className="max-w-6xl pb-4 bg-white mx-auto">
           
//             <Navber/>

//             <div className="max-w-6xl mx-auto">
//                 <Outlet/>
//             </div>

//             <Footer/>
            
//         </div>
//     );
// };

// export default Root;
import React from "react";
import { Outlet } from "react-router";
import Navber from "../component/Navber";
import Footer from "../component/Footer";

const Root = () => {
  return (
    <div className="flex w-full min-h-screen bg-white">
      
      {/* Sidebar — 10% */}
      <div className="w-[20%] border-gray-200 min-h-screen overflow-y-auto">
        <Navber />
      </div>

      {/* Main content — 90% */}
      <div className="w-full md:w-[80%] flex flex-col">

        {/* Page content */}
        <div className="flex-1 pt-[64px]"> 
          <Outlet />
        </div>

        <Footer />
      </div>

    </div>
  );
};

export default Root;
