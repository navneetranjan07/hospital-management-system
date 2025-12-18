import { motion } from "framer-motion";
import { div } from "framer-motion/client";



export default function AboutUs() {

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
    <>
      {/* About Section */}
      <motion.section
        className="py-8 md:py-16 px-4 md:px-16 bg-white shadow-lg"
        {...fadeInUp}
      >
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
      </motion.section>

      <div className="bg-gray-50">

        {/* ================= HERO ================= */}
        <div className="bg-white py-14 px-10">
          <h1 className="text-3xl font-bold mb-4">Fortis Healthcare</h1>
          <p className="text-gray-600 max-w-4xl">
            Leading Integrated Healthcare Services Provider in India
          </p>
        </div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10 py-10">
          {[
            "4 JCI & 26 NABH Accredited Hospitals",
            "33 Healthcare Facilities",
            "5,700+ Operational Beds",
            "12,500+ Healthcare Professionals",
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow text-center">
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>

        {/* ================= ABOUT TEXT ================= */}
        <div className="bg-white px-10 py-10">
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed max-w-5xl">
            Fortis Healthcare Limited is a leading integrated healthcare delivery
            service provider in India. The healthcare verticals of the company
            primarily comprise hospitals, diagnostics and day care specialty facilities.
          </p>
        </div>

        {/* ================= VISION & MISSION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 py-10">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Vision</h3>
            <p className="text-gray-600">
              To create a world-class integrated healthcare delivery system in India.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Mission</h3>
            <p className="text-gray-600">
              To be a globally respected healthcare organisation known for clinical excellence.
            </p>
          </div>
        </div>

        {/* ================= VALUES ================= */}
        <div className="bg-white px-10 py-10">
          <h2 className="text-xl font-semibold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Patient Centricity",
              "Integrity",
              "Teamwork",
              "Ownership",
              "Innovation",
            ].map((value, i) => (
              <div key={i} className="border p-5 rounded-lg">
                <h4 className="font-semibold">{value}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* ================= BOARD OF DIRECTORS ================= */}
        <div className="px-10 py-12">
          <h2 className="text-xl font-semibold mb-6">Board of Directors</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow text-center">
                <div className="h-32 bg-gray-200 rounded mb-3"></div>
                <p className="font-semibold">Director Name</p>
                <p className="text-sm text-gray-500">Designation</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= KEY MANAGEMENT ================= */}
        <div className="bg-white px-10 py-12">
          <h2 className="text-xl font-semibold mb-6">Key Management Personnel</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="border p-5 rounded-lg">
                <p className="font-semibold">Person Name</p>
                <p className="text-sm text-gray-500">Role</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>


  );
}
