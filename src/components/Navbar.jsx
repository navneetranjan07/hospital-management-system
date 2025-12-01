import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUserMd,
  FaUserInjured,
  FaCalendarAlt,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <>
      <nav className="bg-gradient-to-r main_bg text-white px-6 py-4 shadow-lg sticky top-0 z-50">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FaUserMd className="text-2xl text-teal-300" />
            <div>
              <h1 className="text-xl cursor-pointer font-semibold tracking-wide">
                <Link to="/home">CityCare Hospital</Link>
              </h1>
              <p className="text-sm text-teal-200 opacity-80">Your Health, Our Priority</p>
            </div>
            {localStorage.getItem("username") && (
              <span className="hidden md:block text-sm bg-white/10 px-3 py-1 rounded-full ml-4">
                Welcome, {localStorage.getItem("username")}!
              </span>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link
              to="/patients"
              className="hover:text-blue-200 flex items-center p-1 gap-1 rounded-lg hover:scale-[1.03] hover:shadow-lg transition"
            >
              <FaUserInjured /> Patients
            </Link>
            <Link
              to="/doctors"
              className="hover:text-blue-200 flex items-center p-1 gap-1 rounded-lg hover:scale-[1.03] hover:shadow-lg transition"
            >
              <FaUserMd /> Doctors
            </Link>
            <Link
              to="/appointments"
              className="hover:text-blue-200 flex items-center p-1 gap-1 rounded-lg hover:scale-[1.03] hover:shadow-lg transition"
            >
              <FaCalendarAlt /> Appointments
            </Link>
            <button
              onClick={handleLogout}
              className="ml-4 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg flex items-center gap-2 transition hover:scale-[1.03]"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl focus:outline-none hover:text-teal-300 transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Side Menu Overlay */}
      <div className={`mobile-overlay ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-side">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-teal-300 transition-colors duration-300"
            >
              <FaTimes size={20} />
            </button>
          </div>
          <Link
            to="/patients"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 text-white hover:text-teal-300 transition-all duration-300 text-lg py-3 px-4 rounded-lg"
          >
            <FaUserInjured /> Patients
          </Link>
          <Link
            to="/doctors"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 text-white hover:text-teal-300 transition-all duration-300 text-lg py-3 px-4 rounded-lg"
          >
            <FaUserMd /> Doctors
          </Link>
          <Link
            to="/appointments"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 text-white hover:text-teal-300 transition-all duration-300 text-lg py-3 px-4 rounded-lg"
          >
            <FaCalendarAlt /> Appointments
          </Link>
          <button
            onClick={() => {
              handleLogout();
              setMenuOpen(false);
            }}
            className="flex items-center gap-3 bg-gradient-to-r  from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-6 py-3 rounded-xl mt-6 transition-all duration-300 hover:scale-105 font-medium w-full justify-center"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>
    </>
  );
}
