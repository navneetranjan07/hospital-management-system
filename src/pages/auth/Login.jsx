import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8787/userss/login", form);
      if (res.data) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", res.data.username);
        navigate("/home");
      } else {
        setError("Invalid credentials");
      }
    } catch {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat hero_bg">
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>

     
        <div className="relative z-10 bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl shadow-2xl p-8 w-[90%] sm:w-[400px] animate-fadeIn">
          {/* Logo + Title */}
          <div className="flex flex-col items-center mb-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2966/2966488.png"
              alt="Hospital Logo"
              className="w-16 h-16 mb-3"
            />
            <h2 className="text-3xl font-bold text-gray-800 drop-shadow-sm">
              Hospital Login
            </h2>
          </div>

          {error && (
            <p className="text-red-500 text-center mb-3 bg-white/40 py-2 rounded-lg">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div className="relative">
              <FaUser className="absolute top-3.5 left-3 text-gray-500" />
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Username"
                className="w-full bg-white/70 border border-gray-300 p-3 pl-10 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute top-3.5 left-3 text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full bg-white/70 border border-gray-300 p-3 pl-10 pr-10 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
              <button
                type="button"
                className="absolute top-3.5 right-3 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-300"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="flex justify-between mt-5 text-sm text-gray-700">
            <Link
              to="/forgot-password"
              className="hover:text-blue-600 hover:underline transition"
            >
              Forgot Password?
            </Link>
            <Link
              to="/register"
              className="hover:text-blue-600 hover:underline transition"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
  );
}
