import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
            Reset Password
          </h2>
        </div>

        {submitted ? (
          <p className="text-center text-green-600 bg-white/50 py-3 rounded-lg font-medium">
            If this email is registered, a password reset link has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div className="relative">
              <FaEnvelope className="absolute top-3.5 left-3 text-gray-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your registered email"
                className="w-full bg-white/70 border border-gray-300 p-3 pl-10 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Send Reset Link
            </button>
          </form>
        )}

        <div className="text-center mt-5 text-sm text-gray-700">
          <Link to="/login" className="hover:text-blue-600 hover:underline transition" >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
