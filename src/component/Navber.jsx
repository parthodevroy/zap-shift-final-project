// import React from "react";
// import { NavLink } from "react-router";
// import { FaUser, FaTruck, FaBoxOpen, FaSignOutAlt, FaUserShield } from "react-icons/fa";
// import { SiRider } from "react-icons/si";
// import Logo from "./Logo";
// import useAuth from "../hooks/useAuth";
// import useRole from "../hooks/useRole";

// const Navbar = () => {
//   const { user, signout } = useAuth();
//   const { role } = useRole();

//   const handleLogout = () => {
//     signout()
//       .then(() => {})
//       .catch((err) => console.log(err));
//   };

//   // Public Links
//   const publicLinks = (
//     <>
//       <NavLink
//         to="/"
//         className={({ isActive }) =>
//           `px-3 py-2 rounded text-lg font-semibold transition-all duration-300 ${
//             isActive ? "text-teal-500" : "text-gray-700 hover:text-teal-500"
//           }`
//         }
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/service"
//         className={({ isActive }) =>
//           `px-3 py-2 rounded text-lg font-semibold transition-all duration-300 ${
//             isActive ? "text-teal-500" : "text-gray-700 hover:text-teal-500"
//           }`
//         }
//       >
//         Service
//       </NavLink>
//       <NavLink
//         to="/covarage"
//         className={({ isActive }) =>
//           `px-3 py-2 rounded text-lg font-semibold transition-all duration-300 ${
//             isActive ? "text-teal-500" : "text-gray-700 hover:text-teal-500"
//           }`
//         }
//       >
//         Coverage
//       </NavLink>
//     </>
//   );

//   // Authenticated User Links
//   const userLinks = (
//     <>
//       <NavLink
//         to="/dashboard"
//         className={({ isActive }) =>
//           `px-3 py-2 rounded text-lg font-semibold flex items-center gap-2 transition-all duration-300 ${
//             isActive ? "text-teal-500" : "text-gray-700 hover:text-teal-500"
//           }`
//         }
//       >
//         <FaUser /> Dashboard
//       </NavLink>

//       {/* <NavLink
//         to="/dashboard/my-parcels"
//         className={({ isActive }) =>
//           `px-3 py-2 rounded text-lg font-semibold flex items-center gap-2 transition-all duration-300 ${
//             isActive ? "text-teal-500" : "text-gray-700 hover:text-teal-500"
//           }`
//         }
//       >
//         <FaBoxOpen /> My Parcels
//       </NavLink> */}

//       {role === "rider" && (
//         <NavLink
//           to="/dashboard/assign-delivery"
//           className={({ isActive }) =>
//             `px-3 py-2 rounded text-lg font-semibold flex items-center gap-2 transition-all duration-300 ${
//               isActive ? "text-teal-500" : "text-gray-700 hover:text-teal-500"
//             }`
//           }
//         >
//           <SiRider /> Assign Delivery
//         </NavLink>
//       )}

//       {role === "admin" && (
//         <>
//           <NavLink
//             to="/dashboard/user-management"
//             className={({ isActive }) =>
//               `px-3 py-2 rounded text-lg font-semibold flex items-center gap-2 transition-all duration-300 ${
//                 isActive ? "text-teal-500" : "text-gray-700 hover:text-teal-500"
//               }`
//             }
//           >
//             <FaUserShield /> User Management
//           </NavLink>
//           <NavLink
//             to="/dashboard/assign-rider"
//             className={({ isActive }) =>
//               `px-3 py-2 rounded text-lg font-semibold flex items-center gap-2 transition-all duration-300 ${
//                 isActive ? "text-teal-500" : "text-gray-700 hover:text-teal-500"
//               }`
//             }
//           >
//             <SiRider /> Assign Rider
//           </NavLink>
//         </>
//       )}
//     </>
//   );

//   return (
//     <nav className="sticky top-0 z-50 bg-white px-4 md:px-0 py-4 flex items-center justify-between">
     
//       <NavLink to="/" className="flex items-center">
//         <Logo />
//       </NavLink>

     
//       <div className="hidden lg:flex items-center gap-4">
//         {publicLinks}
//         {user ? userLinks : null}
//       </div>

//       {/* User Actions */}
//       <div className="flex items-center gap-4">
//         {!user && (
//           <>
//             <NavLink
//               to="/login"
//               className="px-4 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition"
//             >
//               Login
//             </NavLink>
//             <NavLink
//               to="/register"
//               className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition"
//             >
//               Register
//             </NavLink>
//           </>
//         )}
//         {user && (
//           <button
//             onClick={handleLogout}
//             className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition flex items-center gap-2"
//           >
//             <FaSignOutAlt /> Logout
//           </button>
//         )}
//       </div>

//       {/* Mobile */}
//       <div className="lg:hidden dropdown">
//         <label tabIndex={0} className="btn btn-ghost">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </label>
//         <ul
//           tabIndex={0}
//           className="dropdown-content mt-2 p-4 shadow-lg rounded-lg bg-white flex flex-col gap-2 w-52"
//         >
//           {publicLinks}
//           {user ? userLinks : null}
//           {!user && (
//             <>
//               <NavLink to="/login" className="px-3 py-2 rounded text-gray-700 hover:text-teal-500">
//                 Login
//               </NavLink>
//               <NavLink to="/register" className="px-3 py-2 rounded text-gray-700 hover:text-teal-500">
//                 Register
//               </NavLink>
//             </>
//           )}
//           {user && (
//             <button
//               onClick={handleLogout}
//               className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center gap-2"
//             >
//               <FaSignOutAlt /> Logout
//             </button>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { NavLink } from "react-router";
import { FiMenu } from "react-icons/fi";
import { FaSearch, FaUser, FaUserShield, FaSignOutAlt } from "react-icons/fa";
import { SiRider } from "react-icons/si";
import Logo from "./Logo";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const Navber = () => {
  const [open, setOpen] = useState(true);
  const navbarHeight = 64;

  const { user, signout } = useAuth();
  const { role } = useRole();

  const handleLogout = () => {
    signout()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  // Public Links
  const publicLinks = [
    { to: "/", label: "Home" },
    { to: "/service", label: "Service" },
    { to: "/covarage", label: "Coverage" },
  ];

  // Dashboard Links (role based)
  const userLinks = [
    {
      to: "/dashboard",
      label: "Dashboard",
      icon: <FaUser />,
      roles: ["user", "rider", "admin"],
    },
    {
      to: "/dashboard/assign-delivery",
      label: "Assign Delivery",
      icon: <SiRider />,
      roles: ["rider"],
    },
    {
      to: "/dashboard/user-management",
      label: "User Management",
      icon: <FaUserShield />,
      roles: ["admin"],
    },
    {
      to: "/dashboard/assign-rider",
      label: "Assign Rider",
      icon: <SiRider />,
      roles: ["admin"],
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`bg-white shadow-lg border-r-amber-50 overflow-y-auto fixed transition-all duration-300 z-40 ${
          open ? "w-64" : "w-0"
        }`}
        style={{
          top: `${navbarHeight}px`,
          height: `calc(100vh - ${navbarHeight}px)`,
        }}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Navigation</h2>

          {/* Public Links */}
          <ul className="space-y-2">
            {publicLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded text-lg font-semibold transition ${
                      isActive
                        ? "text-teal-500"
                        : "text-gray-700 hover:text-teal-500"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            {/* Role-based Dashboard Links */}
            {user &&
              userLinks
                .filter((l) => l.roles.includes(role))
                .map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-3 py-2 rounded text-lg font-semibold transition ${
                          isActive
                            ? "text-teal-500"
                            : "text-gray-700 hover:text-teal-500"
                        }`
                      }
                    >
                      {link.icon} {link.label}
                    </NavLink>
                  </li>
                ))}
          </ul>
        </div>
      </aside>

      {/* Main Body */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          open ? "ml-64" : "ml-0"
        }`}
      >
        {/* Top Navbar */}
        <nav
          className="fixed top-0 left-0 right-0 bg-[#FFD96A] px-6 py-4 flex items-center justify-between shadow z-50"
          style={{ height: `${navbarHeight}px` }}
        >
          {/* Logo + Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen(!open)}
              className="text-2xl hover:bg-white/40 p-2 rounded"
            >
              <FiMenu />
            </button>

            <NavLink to="/" className="flex items-center">
              <Logo />
            </NavLink>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-xl mx-auto hidden md:block">
            <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
              <input
                type="text"
                placeholder="Search for products..."
                className="flex-1 outline-none"
              />
              <FaSearch className="text-gray-500" />
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-4">
            {!user ? (
              <>
                <NavLink
                  to="/login"
                  className="px-4 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200"
                >
                  Register
                </NavLink>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 flex items-center gap-2"
              >
                <FaSignOutAlt /> Logout
              </button>
            )}
          </div>
        </nav>

        {/* Page Content */}
        <div
          className="p-4 mt-16 overflow-y-auto"
          style={{ marginTop: `${navbarHeight}px` }}
        >
          
        </div>
      </div>
    </div>
  );
};

export default Navber;
