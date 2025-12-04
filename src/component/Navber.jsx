
import React, { useState } from "react";
import { NavLink } from "react-router";
import { FiMenu } from "react-icons/fi";
import { FaUser, FaUserShield, FaSignOutAlt } from "react-icons/fa";
import { SiRider } from "react-icons/si";
import Logo from "./Logo";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const Navber = () => {
  const [open, setOpen] = useState(false); 
  const navbarHeight = 64;

  const { user, signout } = useAuth();
  const { role } = useRole();

  const handleLogout = () => {
    signout().catch((err) => console.log(err));
  };

  // Public Links
  const publicLinks = [
    { to: "/", label: "Home" },
    { to: "/service", label: "Service" },
    { to: "/covarage", label: "Coverage" },
    { to: "/support", label: "Support" },
    { to: "/contact", label: "Contact" },
    { to: "/about", label: "About" },
    { to: "/leaderboard", label: "LeaderBoard" },
  ];

  // Dashboard Links (role based)
  const userLinks = [
    { to: "/parcel", label: "Send Parcel", icon: <FaUser />, roles: ["user", "rider", "admin"] },
    { to: "/dashboard", label: "Dashboard", icon: <FaUser />, roles: ["user", "rider", "admin"] },
    { to: "/dashboard/assign-delivery", label: "Assign Delivery", icon: <SiRider />, roles: ["rider"] },
    { to: "/dashboard/user-management", label: "User Management", icon: <FaUserShield />, roles: ["admin"] },
    { to: "/dashboard/assign-rider", label: "Assign Rider", icon: <SiRider />, roles: ["admin"] },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`
          fixed transition-all duration-300 z-40 
          bg-white shadow-[4px_0_20px_rgba(0,0,0,0.08)]
          ${open ? "w-64 opacity-100" : "w-0 opacity-0 md:w-64 md:opacity-100"}
        `}
        style={{
          top: `${navbarHeight}px`,
          height: `calc(100vh - ${navbarHeight}px)`,
        }}
      >
        <div className="p-5">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Navigation</h2>

          <ul className="space-y-2">
            {/* Public Links */}
            {publicLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg text-base font-bold 
                     transition-all ${
                       isActive
                         ? "bg-teal-100 text-teal-600 shadow-sm"
                         : "text-gray-700 hover:bg-gray-100 hover:text-teal-600"
                     }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            {/* Role Based Dashboard Links */}
            {user &&
              userLinks
                .filter((l) => l.roles.includes(role))
                .map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium 
                         transition-all ${
                           isActive
                             ? "bg-teal-100 text-teal-600 shadow-sm"
                             : "text-gray-700 hover:bg-gray-100 hover:text-teal-600"
                         }`
                      }
                    >
                      <span className="text-lg">{link.icon}</span>
                      {link.label}
                    </NavLink>
                  </li>
                ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`
          flex-1 flex flex-col transition-all duration-300
          ${open ? "ml-64" : "ml-0 md:ml-64"}
        `}
      >
        {/* Top Navbar */}
        <nav
          className="fixed top-0 left-0 right-0 bg-[#e7f8b8] px-6 py-4 flex items-center justify-between shadow z-50"
          style={{ height: `${navbarHeight}px` }}
        >
          {/* Logo + Toggle */}
          <div className="flex items-center gap-4">
            {/* FiMenu only on mobile */}
            <button
              onClick={() => setOpen(!open)}
              className="text-2xl hover:bg-white/40 p-2 rounded md:hidden"
            >
              <FiMenu />
            </button>

            <NavLink to="/" className="flex items-center">
              <Logo />
            </NavLink>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-4">
            {!user ? (
              <>
                <NavLink
                  to="/login"
                  className="px-4 py-2 bg-[#debb21] text-white rounded-full hover:bg-teal-600"
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
          className="p-4 overflow-y-auto"
          style={{ marginTop: `${navbarHeight}px` }}
        ></div>
      </div>
    </div>
  );
};

export default Navber;
