import React from "react";
import Ananya from "../assets/doctors/Ananya-Sharma.jpg";
import Rajesh from "../assets/doctors/Rajesh-Mehta.jpg";
import Priya from "../assets/doctors/Priya-Nair.jpg";
import Arjun from "../assets/doctors/Arjun-Singh.jpg";
import Sneha from "../assets/doctors/Sneha-Verma.jpg";
import Ravi from "../assets/doctors/Ravi-Patel.jpg";

export default function HospitalInfo() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Header Section */}
      <header className="bg-blue-700 text-white py-10 px-6 text-center">
        <h1 className="text-4xl font-bold mb-2">CityCare Multispeciality Hospital</h1>
        <p className="text-lg">Caring for you with compassion, technology, and excellence.</p>
      </header>

      {/* About Section */}
      <section className="py-12 px-6 md:px-16 bg-white shadow-sm">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">About Us</h2>
        <p className="text-lg leading-relaxed mb-4">
          CityCare Multispeciality Hospital is a leading healthcare institution providing
          high-quality medical services with advanced technology and a dedicated team of professionals.
          We focus on patient care, innovation, and community wellness.
        </p>
        <p className="text-lg leading-relaxed">
          Established in 1995, we have grown into a 500-bed tertiary care center offering services
          across various medical fields including cardiology, neurology, orthopedics, oncology,
          pediatrics, and emergency medicine.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="py-12 px-6 md:px-16 bg-blue-50">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Our Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Our Mission</h3>
            <p className="text-gray-700">
              To deliver quality and compassionate healthcare with integrity and innovation, 
              ensuring the best outcomes for every patient we serve.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Our Vision</h3>
            <p className="text-gray-700">
              To be a trusted global leader in healthcare excellence, advancing medical research 
              and providing accessible, affordable, and ethical care to all.
            </p>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-12 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">Departments & Specialties</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Cardiology",
            "Neurology",
            "Orthopedics",
            "Oncology",
            "Pediatrics",
            "Gynecology",
            "Dermatology",
            "Urology",
            "Emergency Medicine",
          ].map((dept) => (
            <div
              key={dept}
              className="p-6 bg-blue-50 border border-blue-100 rounded-xl shadow-sm hover:shadow-md hover:bg-blue-100 transition-all hover:scale-[1.03]"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{dept}</h3>
              <p className="text-gray-600 text-sm">
                Our {dept.toLowerCase()} department is equipped with advanced facilities and 
                experienced specialists providing world-class care.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors */}
      <section className="py-12 px-6 md:px-16 bg-blue-50">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">Meet Our Doctors</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Dr. Ananya Sharma", specialty: "Cardiologist", image: Ananya },
            { name: "Dr. Rajesh Mehta", specialty: "Neurologist", image: Rajesh },
            { name: "Dr. Priya Nair", specialty: "Oncologist", image: Priya },
            { name: "Dr. Arjun Singh", specialty: "Orthopedic Surgeon", image: Arjun },
            { name: "Dr. Sneha Verma", specialty: "Pediatrician", image: Sneha },
            { name: "Dr. Ravi Patel", specialty: "Dermatologist", image: Ravi },
          ].map((doc, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all hover:scale-[1.03]"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700">{doc.name}</h3>
              <p className="text-gray-600">{doc.specialty}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-2">
              📍 <strong>Address:</strong> 123 Health Avenue, City Center, Pune, Maharashtra
            </p>
            <p className="text-lg mb-2">
              ☎️ <strong>Phone:</strong> +91 98765 43210
            </p>
            <p className="text-lg mb-2">
              📧 <strong>Email:</strong> info@citycarehospital.com
            </p>
            <p className="text-lg mb-2">
              🕒 <strong>Working Hours:</strong> 24/7 Emergency, OPD 9 AM - 8 PM
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0344739699!2d73.86296739999999!3d18.52461645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1760372100105!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-6 mt-10">
        <p>&copy; {new Date().getFullYear()} CityCare Multispeciality Hospital. All rights reserved.</p>
      </footer>
    </div>
  );
}
