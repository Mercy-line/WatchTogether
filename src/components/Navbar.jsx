import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItemClass = ({ isActive }) =>
    isActive
      ? "relative text-yellow-400 font-bold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400"
      : "relative text-white hover:text-yellow-300 transition duration-200";

  return (
    <nav className="bg-[#0e1320] text-white px-6 py-4 shadow-md flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
        🎥 WatchTogether
      </div>

      {/* Nav Links */}
      <div className="space-x-6 text-sm sm:text-base font-medium flex items-center">
        <NavLink to="/" className={navItemClass}>
          Home
        </NavLink>
        <NavLink to="/login" className={navItemClass}>
          Login
        </NavLink>
        <NavLink to="/register" className={navItemClass}>
          Register
        </NavLink>
        <NavLink to="/rooms" className={navItemClass}>
          Rooms
        </NavLink>
        <NavLink to="/player" className={navItemClass}>
          Player
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
