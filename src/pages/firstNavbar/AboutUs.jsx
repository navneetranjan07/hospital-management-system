export default function AboutUs() {
  return (
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
  );
}
