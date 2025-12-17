import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const doctors = Array.from({ length: 12 }).map((_, i) => ({
  name: `Dr. Sample Doctor ${i + 1}`,
  title: "Senior Consultant | CityCare Hospital",
  speciality: "Cardiology | Interventional Cardiology",
  experience: 20 + (i % 10),
  fees: 1500 + i * 100,
  location: "Gurgaon / Noida",
}));

export default function FindDoctor() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= SEARCH & FILTER BAR ================= */}
      <div className="bg-white py-6 px-10 shadow-sm">
        <div className="flex flex-wrap gap-4 items-center">

          <div className="relative flex-1 min-w-[280px]">
            <input
              type="text"
              placeholder="Search doctor"
              className="w-full border rounded-lg py-3 px-4 pr-10 focus:outline-none"
            />
            <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

          <select className="border rounded-lg py-3 px-4 min-w-[200px]">
            <option>Filter by Hospital</option>
            <option>CityCare Gurgaon</option>
            <option>CityCare Delhi</option>
          </select>

          <select className="border rounded-lg py-3 px-4 min-w-[200px]">
            <option>Filter by Speciality</option>
            <option>Cardiology</option>
            <option>Neurology</option>
          </select>

        </div>
      </div>

      {/* ================= DOCTOR CARDS ================= */}
      <div className="px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {doctors.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="p-6">

                <h3 className="font-semibold text-lg">{doc.name}</h3>
                <p className="text-sm text-gray-500">{doc.title}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                    {doc.speciality}
                  </span>
                </div>

                <div className="flex justify-between mt-4 text-sm">
                  <div>
                    <strong>{doc.experience} Years</strong>
                    <p className="text-gray-500">Experience</p>
                  </div>
                  <div>
                    <strong>₹ {doc.fees}</strong>
                    <p className="text-gray-500">Fees</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 mt-3">
                  <FaMapMarkerAlt /> {doc.location}
                </div>

              </div>

              <div className="flex border-t">
                <button className="flex-1 py-3 text-sm hover:bg-gray-50">
                  View Full Profile
                </button>
                <button className="flex-1 py-3 text-sm bg-orange-100 hover:bg-orange-200">
                  Book an Appointment
                </button>
              </div>
            </div>
          ))}

        </div>

        {/* ================= PAGINATION ================= */}
        <div className="flex justify-center items-center gap-3 mt-10 text-sm">
          <button className="px-3 py-1 border rounded">1</button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">3</button>
          <span>...</span>
          <button className="px-3 py-1 border rounded">Next</button>
        </div>
      </div>

      {/* ================= EXPLORE MORE DOCTORS ================= */}
      <div className="bg-white px-10 py-10 border-t">
        <h2 className="text-xl font-semibold mb-6">Explore More Doctors</h2>

        {[
          "Explore Doctors by City",
          "Explore Doctors by Speciality",
          "Explore Doctors by Hospital",
          "Explore Doctors by Location and Speciality",
          "Explore Doctors by Hospital and Speciality",
        ].map((item, i) => (
          <div
            key={i}
            className="border rounded-lg px-5 py-4 mb-3 cursor-pointer hover:bg-gray-50"
          >
            {item}
          </div>
        ))}
      </div>

      {/* ================= FEEL FREE TO ASK ================= */}
      <div className="px-10 py-12 bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-10">
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
