import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Oncology() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Header Section */}
      <header className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-yellow-900 text-white py-24 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <button
            onClick={() => navigate("/home")}
            className="absolute left-6 top-6 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all"
          >
            ← Back to Home
          </button>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">Oncology</span>
            <br />
            Department
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-orange-100 leading-relaxed">
            Comprehensive cancer care with advanced treatments and compassionate support.
          </p>
        </div>
      </header>

      {/* About Department */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-700 mb-8 text-center">About Oncology Department</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Our Oncology Department provides multidisciplinary cancer care, from prevention and early detection to treatment and survivorship. 
            We offer the latest therapies in a supportive environment.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎗️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-orange-800">Advanced Diagnostics</h3>
                  <p className="text-gray-600">PET/CT, MRI, Biopsies, Genetic Testing</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💉</span>
                </div>
                <div>
                  <h3 className="font-semibold text-orange-800">Treatments</h3>
                  <p className="text-gray-600">Chemotherapy, Radiation, Immunotherapy, Surgery</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Our Specialists</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Dr. Priya Nair - Lead Oncologist</li>
                <li>• Dr. Sneha Verma - Radiation Oncologist</li>
                <li>• Dr. Ravi Patel - Surgical Oncologist</li>
              </ul>
              <button className="mt-6 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-2xl shadow-xl transition-all duration-300">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-700 mb-12 text-center">Our Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Cancer Screening", desc: "Early detection and prevention programs." },
              { title: "Chemotherapy", desc: "Targeted drug treatments for cancer." },
              { title: "Radiation Therapy", desc: "Precise radiation treatments." },
              { title: "Surgical Oncology", desc: "Cancer removal surgeries." },
              { title: "Palliative Care", desc: "Supportive care for quality of life." },
              { title: "Survivorship Programs", desc: "Long-term care and follow-up." },
            ].map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-orange-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Link */}
      <footer className="bg-gradient-to-r from-orange-900 via-orange-800 to-yellow-900 text-white text-center py-8">
        <p className="text-orange-100">For emergencies, contact our 24/7 helpline: +91 98765 43210</p>
      </footer>
    </div>
  );
}
