import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa";

export default function Register() {
  const [form, setForm] = useState({ username: "", password: "", id: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.email) {
      // alert("Please verify your email first.");
      navigate("/email-verification");
    } else {
      setForm((prev) => ({ ...prev, email: location.state.email }));
    }
  }, [location, navigate]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:8787/userss/register", form);
      alert("Registration successful!");
      navigate("/login");
    } catch {
      alert("Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat hero_bg">
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>

      <div className="relative z-10 bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl shadow-2xl p-8 w-[90%] sm:w-[400px] animate-fadeIn">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2966/2966488.png"
            alt="Hospital Logo"
            className="w-16 h-16 mb-3"
          />
          <h2 className="text-3xl font-bold text-gray-800 drop-shadow-sm">
            Create Account
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            CityCare Multispeciality Hospital
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <FaUser className="absolute top-3.5 left-3 text-gray-500" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
              className="w-full bg-white/70 border border-gray-300 p-3 pl-10 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute top-3.5 left-3 text-gray-500" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full bg-white/70 border border-gray-300 p-3 pl-10 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="relative">
            <FaUser className="absolute top-3.5 left-3 text-gray-500" />
            <input
              type="text"
              name="id"
              placeholder="Phone Number"
              value={form.id}
              onChange={handleChange}
              required
              className="w-full bg-white/70 border border-gray-300 p-3 pl-10 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-300"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center mt-5 text-sm text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="hover:text-blue-600 hover:underline transition">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
