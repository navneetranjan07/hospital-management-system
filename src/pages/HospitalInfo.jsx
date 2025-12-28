import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Ananya from "../assets/doctors/Ananya-Sharma.jpg";
import Rajesh from "../assets/doctors/Rajesh-Mehta.jpg";
import Priya from "../assets/doctors/Priya-Nair.jpg";
import Arjun from "../assets/doctors/Arjun-Singh.jpg";
import Sneha from "../assets/doctors/Sneha-Verma.jpg";
import Ravi from "../assets/doctors/Ravi-Patel.jpg";
import { Link } from "react-router-dom";

import { FaInstagram, FaGithub, FaTwitter, FaLinkedin, FaFacebook, FaYoutube, FaUser, FaEnvelope, FaComment } from 'react-icons/fa';

export default function HospitalInfo() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleDepartmentClick = (departmentName) => {
    const dept_info = departmentName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/departments/${dept_info}`);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    viewport: { once: true }
  };

  const childVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 ">
      {/* Header Section */}
      <header className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center py-6">
            <div className="inline-flex items-center px-6  bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-1 gap-1">
              <svg className="w-5 h-5 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-teal-100 font-medium">Leading Healthcare Excellence Since 2000</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">CityCare</span>
              <br />
              Multispeciality Hospital
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 leading-relaxed">
              Committed to delivering compassionate care with cutting-edge technology and a team of dedicated professionals.
            </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-10 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-sm sm:text-base">
             <Link to="/appointments">Book Appointment</Link>
            </button>
            <button className="border-2 border-white/30 text-white font-semibold py-3 sm:py-4 px-6 sm:px-10 rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base">
              Learn More
            </button>
          </div>
          <div className="mt-12 flex justify-center space-x-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>24/7 Emergency</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>500+ Beds</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              <span>100+ Specialists</span>
            </div>
          </div> */}
        </div>
      </header>

      


      {/* Contact Section */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-700 mb-12 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-1">Address</h3>
                  <p className="text-gray-600">123 Health Avenue, City Center, Pune, Maharashtra</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-1">Phone</h3>
                  <p className="text-gray-600">+91 95724 32388</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-1">Email</h3>
                  <p className="text-gray-600">info@citycarehospital.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-1">Working Hours</h3>
                  <p className="text-gray-600">24/7 Emergency, OPD 9 AM - 8 PM</p>
                </div>
              </div>
            </div>
            
          </div>

          {/* Contact Form */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">Get In Touch</h3>
            <form className="max-w-md mx-auto bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl shadow-xl border border-blue-100/50 backdrop-blur-sm">
              <div className="mb-6 relative">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-3 flex items-center">
                  <FaUser className="w-4 h-4 mr-2 text-blue-600" />
                  Name
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300"
                    required
                  />
                </div>
              </div>
              <div className="mb-6 relative">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-3 flex items-center">
                  <FaEnvelope className="w-4 h-4 mr-2 text-teal-600" />
                  Email
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300"
                    required
                  />
                </div>
              </div>
              <div className="mb-8 relative">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-3 flex items-center">
                  <FaComment className="w-4 h-4 mr-2 text-blue-600" />
                  Message
                </label>
                <div className="relative">
                  <FaComment className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-900 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* For Patients */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-teal-200">For Patients</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/doctors" className="text-blue-100 hover:text-white transition-colors duration-300 block">Find Doctor</Link></li>
                <li><Link to="/patients" className="text-blue-100 hover:text-white transition-colors duration-300 block">International Services</Link></li>
                <li><Link to="/patients" className="text-blue-100 hover:text-white transition-colors duration-300 block">Partnerships</Link></li>
                <li><Link to="/hospital-info" className="text-blue-100 hover:text-white transition-colors duration-300 block">Our Hospital</Link></li>
              </ul>
            </div>

            {/* Centers of Excellence */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-teal-200">Centers of Excellence</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/centers-of-excellence/fortis-institute-of-genomic-medicine" className="text-blue-100 hover:text-white transition-colors duration-300 block">Institute of Genomic Medicine</Link></li>
                <li><Link to="/centers-of-excellence/fortis-institute-of-robotic-surgery" className="text-blue-100 hover:text-white transition-colors duration-300 block">Institute of Robotic Surgery</Link></li>
                <li><Link to="/centers-of-excellence/fortis-cancer-institute" className="text-blue-100 hover:text-white transition-colors duration-300 block">Cancer Institute</Link></li>
                <li><Link to="/centers-of-excellence/centre-for-gynae-oncology" className="text-blue-100 hover:text-white transition-colors duration-300 block">Centre for Gynae Oncology</Link></li>
              </ul>
            </div>

            {/* Policies */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-teal-200">Policies</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://example.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors duration-300 block">Privacy Policy</a></li>
                <li><a href="https://example.com/anti-bribery-policy" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors duration-300 block">Anti-Bribery Policy</a></li>
                <li><a href="https://example.com/disclaimer" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors duration-300 block">Disclaimer</a></li>
                <li><a href="https://example.com/terms-of-use" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors duration-300 block">Terms of Use</a></li>
              </ul>
            </div>

            {/* Medical Procedures */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-teal-200">Medical Procedures</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/departments/oncology" className="text-blue-100 hover:text-white transition-colors duration-300 block">Cell Therapy</Link></li>
                <li><Link to="/departments/medical-genetics" className="text-blue-100 hover:text-white transition-colors duration-300 block">Genomic Surgery</Link></li>
                <li><Link to="/departments/general-surgery" className="text-blue-100 hover:text-white transition-colors duration-300 block">EMO Surgery</Link></li>
                <li><Link to="/departments/urology" className="text-blue-100 hover:text-white transition-colors duration-300 block">Advanced Urology</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-blue-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo */}
            <div className="text-2xl font-bold text-teal-200">
              CityCare
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors duration-300">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/navneetranjan07" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors duration-300">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>

            {/* App Downloads */}
            <div className="flex space-x-4 text-sm">
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center space-x-1">
                <span>App Store</span>
              </a>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center space-x-1">
                <span>Google Play</span>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 flex justify-between pt-4 border-t border-blue-700">
            <p className="text-blue-100 text-sm text-center">&copy; {new Date().getFullYear()} CityCare Multispeciality Hospital. All rights reserved.</p>
            <div>
              <p className="text-blue-100 text-sm text-center">Developed by <a href="https://github.com/navneetranjan07"><span className="text-yellow-400 ">Navneet Ranjan</span> with 💖 in India.</a></p>
              <p className="text-blue-100 text-sm text-center">Innovative Idea by <a href="https://github.com/nishant0256"><span className="text-yellow-400 ">Nishant Kumar</span> with 💖 in India.</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
