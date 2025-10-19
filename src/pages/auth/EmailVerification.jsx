import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaKey } from "react-icons/fa";

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
      await axios.post("http://localhost:8787/userss/send-otp", { email });
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
      const res = await axios.post("http://localhost:8787/userss/verify-otp", {
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
            Email Verification
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            CityCare Multispeciality Hospital
          </p>
        </div>

        {message && (
          <p
            className={`text-center mb-3 py-2 rounded-lg ${
              message.includes("success")
                ? "text-green-600 bg-white/40"
                : "text-red-500 bg-white/40"
            }`}
          >
            {message}
          </p>
        )}

        {!otpSent ? (
          <form onSubmit={handleSendOtp} className="space-y-5">
            <div className="relative">
              <FaEnvelope className="absolute top-3.5 left-3 text-gray-500" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/70 border border-gray-300 p-3 pl-10 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-300"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
            
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-5">
            <div className="relative">
              <FaKey className="absolute top-3.5 left-3 text-gray-500" />
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="w-full bg-white/70 border border-gray-300 p-3 pl-10 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md hover:shadow-lg transition-all duration-300"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}
      </div>
      
    </div>
  );
}
