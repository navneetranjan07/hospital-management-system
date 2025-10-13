import { Link, useNavigate } from "react-router-dom";
import { FaUserMd, FaUserInjured, FaCalendarAlt, FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center space-x-2">
        <FaUserMd className="text-2xl" />
        <h1 className="text-xl cursor-pointer font-semibold tracking-wide">
          <Link to="/home">CityCare Hospital</Link>
        </h1>
      </div>

      <div className="flex space-x-6 items-center">
        <Link to="/patients" className="hover:text-blue-200 flex items-center p-1 gap-1 rounded-lg hover:scale-[1.03] hover:shadow-lg">
          <FaUserInjured /> Patients
        </Link>
        <Link to="/doctors" className="hover:text-blue-200 flex items-center p-1 gap-1 rounded-lg hover:scale-[1.03] hover:shadow-lg">
          <FaUserMd /> Doctors
        </Link>
        <Link to="/appointments" className="hover:text-blue-200 flex items-center p-1 gap-1 rounded-lg hover:scale-[1.03] hover:shadow-lg">
          <FaCalendarAlt /> Appointments
        </Link>
        <button
          onClick={handleLogout}
          className="ml-4 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg flex items-center gap-2 transition hover:scale-[1.03]"
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </nav>
  );
}
