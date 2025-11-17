import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaSpinner, FaGoogle, FaFacebook } from "react-icons/fa";

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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 animate-gradient-x">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 backdrop-blur-sm"></div>

      <div className="relative z-10 bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl shadow-2xl p-6 sm:p-8 w-[90%] sm:w-[420px] animate-fadeIn">
        {/* Logo + Title */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2966/2966488.png"
            alt="Hospital Logo"
            className="w-16 h-16 mb-3 hover:scale-110 transition-transform duration-300 hover:shadow-lg rounded-full"
          />
          <h2 className="text-3xl font-bold text-gray-800 drop-shadow-md">
            Hospital Login
          </h2>
        </div>

        {error && (
          <p className="text-red-500 text-center mb-3 bg-red-50/80 py-2 rounded-lg border border-red-200">
            {error}
          </p>
        )}

        {successMsg && (
          <p className="text-green-600 text-center mb-3 bg-green-50/80 py-2 rounded-lg border border-green-200 animate-pulse">
            {successMsg}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div className="relative group">
            <FaUser className="absolute top-3.5 left-3 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full bg-white/90 border border-gray-300 p-3 pl-10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 transform group-focus-within:scale-105"
              required
            />
          </div>

          {/* Password */}
          <div className="relative group">
            <FaLock className="absolute top-3.5 left-3 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full bg-white/90 border border-gray-300 p-3 pl-10 pr-10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 transform group-focus-within:scale-105"
              required
            />
            <button
              type="button"
              className="absolute top-3.5 right-3 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Remember Me</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse disabled:opacity-75"
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
        <div className="mt-4 space-y-3">
          <button className="w-full flex items-center justify-center space-x-2 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <FaGoogle className="text-red-500" />
            <span className="text-sm text-gray-700">Continue with Google</span>
          </button>
          <button className="w-full flex items-center justify-center space-x-2 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <FaFacebook className="text-blue-600" />
            <span className="text-sm text-gray-700">Continue with Facebook</span>
          </button>
          <p className="text-xs text-gray-500 text-center mt-2">These are placeholders for future integration.</p>
        </div>

        <div className="flex justify-between mt-6 text-sm text-gray-700">
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
