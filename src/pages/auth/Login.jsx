import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import heroBg from "../../assets/backgrounds/hero_bg.jpg";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaSpinner, FaGoogle, FaFacebook, FaTwitter, FaStethoscope, FaHospital, FaHeart, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
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
        if (rememberMe) {
          localStorage.setItem("rememberMe", "true");
          localStorage.setItem("username", form.username);
        }
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", res.data.username);
        setSuccessMsg("Welcome back!");
        setTimeout(() => {
          navigate("/home");
        }, 1500);
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
    <div className="flex min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Left Section: Welcome and Hospital Info */}
      <div className="flex-1 relative hidden md:flex items-center justify-center">
        <div className="relative z-10 text-center text-white px-6 md:px-8">
          <div className=" backdrop-blur-xl  rounded-3xl p-6 md:p-8  animate-fadeIn">
            <div className="flex flex-col items-center mb-6">
              <div className="relative mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2966/2966488.png"
                  alt="Hospital Logo"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-xl border-2 border-white/20"
                />
                <FaStethoscope className="absolute -top-1 -right-1 text-cyan-300 text-xl animate-pulse" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                Welcome to HealthCare Hospital
              </h1>
              <p className="text-lg md:text-xl mb-6 leading-relaxed font-light drop-shadow-lg">
                Your trusted partner in health and wellness. Comprehensive medical services with compassionate care.
              </p>
              <div className="space-y-2 text-sm md:text-base mb-6 flex flex-col md:flex-row md:space-y-0 md:space-x-4">
                <div className="flex items-center justify-center space-x-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                  <FaHospital className="text-cyan-300 text-lg" />
                  <span className="font-medium">24/7 Emergency</span>
                </div>
                <div className="flex items-center justify-center space-x-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                  <FaStethoscope className="text-cyan-300 text-lg" />
                  <span className="font-medium">Expert Specialists</span>
                </div>
                <div className="flex items-center justify-center space-x-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                  <FaHeart className="text-red-400 text-lg" />
                  <span className="font-medium">Patient Care</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/navneetranjan07" className="text-blue-100 hover:text-white transition-colors duration-300">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="https://github.com/navneetranjan07" className="text-blue-100 hover:text-white transition-colors duration-300">
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://x.com/NavneetRan93248" className="text-blue-100 hover:text-white transition-colors duration-300">
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/navneet-ranjan-255641275/" className="text-blue-100 hover:text-white transition-colors duration-300">
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Login Form */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-6 lg:p-8">
        <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 md:p-6 animate-fadeIn hover:shadow-3xl transition-all duration-500">
          {/* Title */}
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Sign In</h2>
            <p className="text-gray-200 text-sm md:text-base font-medium">Welcome back! Please login to your account.</p>
          </div>

          {error && (
            <p className="text-red-400 text-center mb-3 bg-red-900/20 py-2 rounded-xl border border-red-500/30 shadow-sm animate-bounce">
              {error}
            </p>
          )}

          {successMsg && (
            <p className="text-green-400 text-center mb-3 bg-green-900/20 py-2 rounded-xl border border-green-500/30 shadow-sm animate-pulse">
              {successMsg}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username */}
            <div className="relative group">
              <FaUser className="absolute top-3.5 left-3.5 text-gray-400 group-focus-within:text-cyan-300 transition-all duration-300" />
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Username"
                autoFocus
                className="w-full bg-gray-800/80 border border-gray-600 p-3 pl-10 rounded-xl focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 outline-none transition-all duration-300 shadow-sm hover:shadow-md text-white placeholder-gray-400"
                required
              />
            </div>

            {/* Password */}
            <div className="relative group">
              <FaLock className="absolute top-3.5 left-3.5 text-gray-400 group-focus-within:text-cyan-300 transition-all duration-300" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full bg-gray-800/80 border border-gray-600 p-3 pl-10 pr-10 rounded-xl focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 outline-none transition-all duration-300 shadow-sm hover:shadow-md text-white placeholder-gray-400"
                required
              />
              <button
                type="button"
                className="absolute top-3.5 right-3.5 text-gray-400 hover:text-gray-200 transition-all duration-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-600 text-cyan-400 focus:ring-cyan-500 transition-all duration-200"
                />
                <span className="text-xs md:text-sm text-gray-200 font-medium">Remember Me</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-white font-semibold text-base md:text-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <FaSpinner className="animate-spin" />
                  <span>Logging in...</span>
                </div>
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Social Login Placeholders */}
          <div className="mt-6 space-y-3">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-xs md:text-sm">
                <span className="px-3 md:px-4 bg-gray-800/50 text-gray-300">Or continue with</span>
              </div>
            </div>
            <button className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 border border-gray-600 rounded-xl hover:bg-red-900/20 hover:border-red-500 transition-all duration-300 shadow-sm text-white">
              <FaGoogle className="text-red-400" />
              <span className="text-xs md:text-sm font-medium text-gray-200">Google</span>
            </button>
            <button className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 border border-gray-600 rounded-xl hover:bg-blue-900/20 hover:border-blue-500 transition-all duration-300 shadow-sm text-white">
              <FaFacebook className="text-blue-400" />
              <span className="text-xs md:text-sm font-medium text-gray-200">Facebook</span>
            </button>
            <p className="text-xs text-gray-400 text-center italic">Placeholders for future integration.</p>
          </div>

          <div className="flex justify-between mt-6 text-xs md:text-sm text-gray-200">
            <Link
              to="/forgot-password"
              className="hover:text-cyan-300 hover:underline transition-all duration-200"
            >
              Forgot Password?
            </Link>
            <Link
              to="/register"
              className="hover:text-blue-300 hover:underline transition-all duration-200"
            >
              Create New Account
            </Link>
          </div>
        </div>
      </div>


    </div>
  );
}
