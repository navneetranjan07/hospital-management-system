import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Neurology = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Header */}
      <header className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white py-20 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-purple-200 hover:text-white transition-colors mb-6"
          >
            <FaArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Neurology Department</h1>
          <p className="text-xl md:text-2xl text-center text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Advanced care for brain, spine, and nervous system disorders with cutting-edge diagnostics and treatments.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Overview */}
          <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">Our Neurology Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Comprehensive Neurological Care</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Stroke prevention and acute stroke management</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Epilepsy diagnosis and treatment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Migraine and headache management</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Parkinson's disease and movement disorders</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">State-of-the-Art Technology</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Advanced MRI and CT imaging for precise diagnosis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>EEG and EMG for nerve function assessment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Neuro-navigation systems for surgical precision</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Rehabilitation programs for neurological recovery</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* About the Department */}
          <section className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">About Our Neurology Department</h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-8">
              Our Neurology Department is dedicated to providing comprehensive care for disorders of the nervous system. 
              With a team of highly skilled neurologists and neurosurgeons, we offer multidisciplinary approaches to 
              diagnose and treat a wide range of conditions affecting the brain, spinal cord, and nerves. Our commitment 
              to patient-centered care ensures that each individual receives personalized treatment plans tailored to 
              their specific needs.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Experienced Neurologists</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Emergency Stroke Care</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-gray-600">Patient Satisfaction</div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">Ready to Schedule an Appointment?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Our neurology specialists are here to help you achieve optimal neurological health. Contact us today to book a consultation.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Book Appointment
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Neurology;
