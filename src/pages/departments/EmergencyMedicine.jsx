import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EmergencyMedicine() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Header Section */}
      <header className="relative bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white py-24 px-6 md:px-16 overflow-hidden">
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
            <span className="bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">Emergency</span>
            <br />
            Medicine
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-red-100 leading-relaxed">
            24/7 critical care with rapid response and life-saving interventions.
          </p>
        </div>
      </header>

      {/* About Department */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-red-700 mb-8 text-center">About Emergency Medicine Department</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Our Emergency Medicine Department operates 24/7 to provide immediate care for critical conditions. 
            With advanced life support capabilities and a multidisciplinary team, we ensure rapid assessment and treatment.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚑</span>
                </div>
                <div>
                  <h3 className="font-semibold text-red-800">Critical Care</h3>
                  <p className="text-gray-600">Trauma, Cardiac Arrest, Stroke, Severe Infections</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="font-semibold text-red-800">Rapid Response</h3>
                  <p className="text-gray-600">Immediate Assessment, Stabilization, Specialized Care</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Our Team</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Emergency Physicians</li>
                <li>• Trauma Surgeons</li>
                <li>• Critical Care Nurses</li>
                <li>• Paramedics</li>
              </ul>
              <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-2xl shadow-xl transition-all duration-300">
                Emergency Contact
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-red-700 mb-12 text-center">Emergency Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Trauma Care", desc: "Immediate treatment for injuries." },
              { title: "Cardiac Emergencies", desc: "Heart attack and arrhythmia care." },
              { title: "Stroke Treatment", desc: "Rapid intervention for stroke." },
              { title: "Respiratory Distress", desc: "Breathing support and ventilation." },
              { title: "Poisoning & Overdose", desc: "Toxin removal and antidote administration." },
              { title: "Pediatric Emergencies", desc: "Specialized care for children." },
            ].map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-red-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Link */}
      <footer className="bg-gradient-to-r from-red-900 via-red-800 to-orange-900 text-white text-center py-8">
        <p className="text-red-100">For emergencies, contact our 24/7 helpline: +91 98765 43210</p>
      </footer>
    </div>
  );
}
