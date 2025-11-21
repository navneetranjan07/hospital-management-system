import React from "react";
import Ananya from "../assets/doctors/Ananya-Sharma.jpg";
import Rajesh from "../assets/doctors/Rajesh-Mehta.jpg";
import Priya from "../assets/doctors/Priya-Nair.jpg";
import Arjun from "../assets/doctors/Arjun-Singh.jpg";
import Sneha from "../assets/doctors/Sneha-Verma.jpg";
import Ravi from "../assets/doctors/Ravi-Patel.jpg";

import { FaInstagram, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function HospitalInfo() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Header Section */}
      <header className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 text-white py-24 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <svg className="w-5 h-5 text-teal-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-teal-100 font-medium">Leading Healthcare Excellence Since 2025</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">CityCare</span>
              <br />
              Multispeciality Hospital
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100 leading-relaxed">
              Committed to delivering compassionate care with cutting-edge technology and a team of dedicated professionals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-10 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              Book Appointment
            </button>
            <button className="border-2 border-white/30 text-white font-semibold py-4 px-10 rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </div>
          <div className="mt-12 flex justify-center space-x-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>24/7 Emergency</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <span>500+ Beds</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
              </svg>
              <span>100+ Specialists</span>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 px-6 md:px-16 bg-white shadow-lg animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-6">About Us</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed">
                  Leading healthcare institution with advanced technology and dedicated professionals.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed">
                  Focused on patient care, innovation, and community wellness.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl shadow-md">
              <p className="text-lg leading-relaxed mb-4">
                Established in 1995, we have grown into a 500-bed tertiary care center offering services
                across various medical fields including cardiology, neurology, orthopedics, oncology,
                pediatrics, and emergency medicine.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Beds</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">25+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-gray-600">Doctors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-br from-blue-50 to-teal-50 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-12">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-1 border border-blue-100/50">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To deliver quality and compassionate healthcare with integrity and innovation,
                ensuring the best outcomes for every patient we serve.
              </p>
            </div>
            <div className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-1 border border-blue-100/50">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be a trusted global leader in healthcare excellence, advancing medical research
                and providing accessible, affordable, and ethical care to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 px-6 md:px-16 bg-white animate-fadeIn" style={{ animationDelay: '0.6s' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-700 mb-8 text-center">Departments & Specialties</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Cardiology", icon: "❤️" },
              { name: "Neurology", icon: "🧠" },
              { name: "Orthopedics", icon: "🦴" },
              { name: "Oncology", icon: "🎗️" },
              { name: "Pediatrics", icon: "👶" },
              { name: "Gynecology", icon: "🤰" },
              { name: "Dermatology", icon: "🧴" },
              { name: "Urology", icon: "🩺" },
              { name: "Emergency Medicine", icon: "🚑" },
            ].map((dept, index) => (
              <div
                key={dept.name}
                className="p-6 bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-100 hover:to-teal-100 transform hover:-translate-y-1 animate-fadeIn"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 text-center">{dept.icon}</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2 text-center">{dept.name}</h3>
                <p className="text-gray-600 text-sm text-center">
                  Our {dept.name.toLowerCase()} department is equipped with advanced facilities and
                  experienced specialists providing world-class care.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-br from-blue-50 to-teal-50 animate-fadeIn" style={{ animationDelay: '1.4s' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-700 mb-12 text-center">Meet Our Doctors</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Ananya Sharma", specialty: "Cardiologist", image: Ananya, color: "from-red-500 to-pink-500" },
              { name: "Dr. Rajesh Mehta", specialty: "Neurologist", image: Rajesh, color: "from-purple-500 to-indigo-500" },
              { name: "Dr. Priya Nair", specialty: "Oncologist", image: Priya, color: "from-orange-500 to-yellow-500" },
              { name: "Dr. Arjun Singh", specialty: "Orthopedic Surgeon", image: Arjun, color: "from-green-500 to-teal-500" },
              { name: "Dr. Sneha Verma", specialty: "Pediatrician", image: Sneha, color: "from-blue-500 to-cyan-500" },
              { name: "Dr. Ravi Patel", specialty: "Dermatologist", image: Ravi, color: "from-indigo-500 to-purple-500" },
            ].map((doc, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/50 hover:border-blue-100/50 relative overflow-hidden animate-fadeIn"
                style={{ animationDelay: `${1.6 + i * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-2xl border-4 border-white group-hover:border-blue-200 transition-colors duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-3">{doc.name}</h3>
                <div className="inline-block bg-gradient-to-r from-blue-100 to-teal-100 px-4 py-2 rounded-full shadow-md">
                  <span className="text-blue-700 font-semibold">{doc.specialty}</span>
                </div>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  Expert in {doc.specialty.toLowerCase()} with years of experience providing compassionate care.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  <p className="text-gray-600">+91 98765 43210</p>
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
            <div className="rounded-2xl overflow-hidden shadow-xl border border-blue-100">
              <iframe
                title="Hospital Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0344739699!2d73.86296739999999!3d18.52461645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1760372100105!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-900 text-white text-center py-12 mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-left md:text-left">
              <h3 className="text-2xl font-bold mb-2">CityCare Multispeciality Hospital</h3>
              <p className="text-blue-100">Caring for you with compassion, technology, and excellence.</p>
            </div>
            <div className="flex space-x-6">
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
          <div className="mt-8 pt-8 border-t border-blue-700">
            <p className="text-blue-100">&copy; {new Date().getFullYear()} CityCare Multispeciality Hospital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
