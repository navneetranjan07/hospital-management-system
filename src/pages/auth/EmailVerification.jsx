import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaKey, FaSpinner } from "react-icons/fa";

export default function EmailVerification() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:8787/otp/send", { email });
      setOtpSent(true);
      setMessage("OTP sent successfully to your email!");
    } catch {
      setMessage("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8787/otp/verify", {
        email,
        otp,
      });
      if (res.data === true) {
        setMessage("OTP verified successfully!");
        setTimeout(() => navigate("/register", { state: { email } }), 1000);
      } else {
        setMessage("Invalid or expired OTP.");
      }
    } catch {
      setMessage("Error verifying OTP.");
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
            Email Verification
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            CityCare Multispeciality Hospital
          </p>
        </div>

        {message && (
          <p
            className={`text-center mb-3 py-2 rounded-lg ${
              message.includes("success") || message.includes("verified")
                ? "text-green-600 bg-green-50/80 border border-green-200 animate-pulse"
                : "text-red-500 bg-red-50/80 border border-red-200"
            }`}
          >
            {message}
          </p>
        )}

        

        {!otpSent ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div className="relative group">
              <FaEnvelope className="absolute top-3.5 left-3 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/90 border border-gray-300 p-3 pl-10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 transform group-focus-within:scale-105"
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
                "Send OTP"
              )}
            </button>
            
          </form>
          
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div className="relative group">
              <FaKey className="absolute top-3.5 left-3 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="w-full bg-white/90 border border-gray-300 p-3 pl-10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 transform group-focus-within:scale-105"
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
                  <span>Verifying...</span>
                </div>
              ) : (
                "Verify OTP"
              )}
            </button>
          </form>
        )}
        <div className="flex items-center justify-center mt-6 text-sm text-gray-700">
          Already have an account?
          <Link
            to="/login"
            className="ml-2 hover:text-blue-600 hover:underline transition"
          >
            Login
          </Link>
        </div>
      </div>     
    </div>
  );
}
