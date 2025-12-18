import { motion } from "framer-motion";

export default function Careers() {

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
    <div className="bg-gray-50">

      {/* Mission and Vision */}
      <motion.section
        className="py-16 px-6 md:px-16 bg-gradient-to-br from-blue-50 to-teal-50"
        {...fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-12">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-1 border border-blue-100/50"
              {...childVariants}
            >
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
            </motion.div>
            <motion.div
              className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-1 border border-blue-100/50"
              {...childVariants}
            >
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
            </motion.div>
          </div>
        </div>
      </motion.section>


      {/* ================= HERO ================= */}
      <div className="relative bg-white">
        <div className="h-[320px] bg-gradient-to-r from-blue-100 to-blue-50 flex items-center px-10">
          <div>
            <span className="inline-block bg-white px-4 py-1 rounded-full text-sm mb-4">
              Careers at Fortis
            </span>
            <h1 className="text-3xl font-bold">
              Healthcare for Good
              <br />
              Today. Tomorrow. Always
            </h1>
          </div>
        </div>
      </div>

      {/* ================= INTRO ================= */}
      <div className="px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 bg-white">
        <div className="md:col-span-2">
          <p className="text-gray-600 leading-relaxed">
            At Fortis, our vision is to create a world-class integrated healthcare
            delivery system in India, entailing the finest medical skills combined
            with compassionate patient care.
          </p>
        </div>

        <div className="bg-orange-50 p-6 rounded-xl space-y-3">
          <button className="w-full bg-white py-2 rounded-lg border">
            Edit Profile
          </button>
          <button className="w-full bg-orange-100 py-2 rounded-lg">
            Review Your Application
          </button>
        </div>
      </div>

      {/* ================= EXPLORE OPPORTUNITIES ================= */}
      <div className="px-10 py-12">
        <h2 className="text-xl font-semibold mb-6">Explore Opportunities</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Clinicians",
            "Nursing",
            "Technicians",
            "Medical Support",
            "Other Functions",
          ].map((role, i) => (
            <div
              key={i}
              className="relative h-44 rounded-xl bg-gray-800 text-white flex items-end p-6"
            >
              <div>
                <h3 className="text-lg font-semibold">{role}</h3>
                <button className="mt-3 bg-orange-200 text-black px-5 py-1 rounded-full text-sm">
                  Click Here to Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= ABOUT FORTIS ================= */}
      <div className="bg-white px-10 py-10">
        <h2 className="text-xl font-semibold mb-4">About Fortis</h2>
        <p className="text-gray-600 leading-relaxed max-w-5xl">
          Fortis Healthcare Limited is an Indian for-profit private hospital network
          headquartered in Gurgaon, India. Fortis started its healthcare operations
          in Mohali, Punjab, where the first Fortis hospital was started.
        </p>
      </div>

      {/* ================= TALENT POOL ================= */}
      <div className="px-10 py-10">
        <div className="bg-orange-50 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-medium">
            Not ready to apply? Sign up to join our Talent Pool for future opportunities
          </p>
          <button className="bg-orange-200 px-6 py-2 rounded-lg">
            Join Us
          </button>
        </div>
      </div>

      {/* ================= DISCLAIMER ================= */}
      <div className="px-10 text-xs text-gray-500">
        Disclaimer – Fortis follows a formal recruitment process through its HR department.
        We do not demand or accept any monetary consideration.
      </div>

      {/* ================= FEEL FREE TO ASK ================= */}
      <div className="px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Feel Free to ask us</h2>
          <input
            type="text"
            placeholder="Ask your question"
            className="w-full border rounded-lg py-3 px-4"
          />
        </div>

        <div className="space-y-3">
          {[
            "About Us",
            "Patient Care and Services",
            "Statutory Compliances",
            "Clinical Outcomes",
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-lg px-5 py-4 cursor-pointer hover:bg-gray-50"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
