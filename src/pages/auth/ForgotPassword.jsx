import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaSpinner } from "react-icons/fa";

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
            Reset Password
          </h2>
        </div>

        {submitted ? (
          <p className="text-center text-green-600 bg-green-50/80 py-3 rounded-lg font-medium border border-green-200">
            If this email is registered, a password reset link has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div className="relative group">
              <FaEnvelope className="absolute top-3.5 left-3 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your registered email"
                className="w-full bg-white/90 border border-gray-300 p-3 pl-10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 transform group-focus-within:scale-105"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse disabled:opacity-75"
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

        <div className="text-center mt-6 text-sm text-gray-700">
          <Link to="/login" className="hover:text-blue-600 hover:underline transition">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
