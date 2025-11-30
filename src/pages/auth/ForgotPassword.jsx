import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaSpinner, FaStethoscope, FaHospital, FaHeart, FaInstagram, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false); 
    }, 2000);
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

      {/* Right Section: Forgot Password Form */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-6 lg:p-8">
        <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 md:p-6 animate-fadeIn hover:shadow-3xl transition-all duration-500">
          {/* Title */}
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Reset Password</h2>
            <p className="text-gray-200 text-sm md:text-base font-medium">CityCare Multispeciality Hospital</p>
          </div>

          {submitted ? (
            <p className="text-center text-green-400 bg-green-900/20 py-3 rounded-lg font-medium border border-green-500/30 shadow-sm animate-pulse">
              If this email is registered, a password reset link has been sent.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div className="relative group">
                <FaEnvelope className="absolute top-3.5 left-3.5 text-gray-400 group-focus-within:text-cyan-300 transition-all duration-300" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your registered email"
                  className="w-full bg-gray-800/80 border border-gray-600 p-3 pl-10 rounded-xl focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 outline-none transition-all duration-300 shadow-sm hover:shadow-md text-white placeholder-gray-400"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl text-white font-semibold text-base md:text-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <FaSpinner className="animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </form>
          )}

          <div className="flex justify-center mt-6 text-xs md:text-sm text-gray-200">
            <Link
              to="/login"
              className="hover:text-cyan-300 hover:underline transition-all duration-200"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
