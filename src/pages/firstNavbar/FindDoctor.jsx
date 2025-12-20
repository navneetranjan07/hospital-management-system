import { useEffect, useState } from "react";
import axios from "axios";
import { Search, MapPin } from "lucide-react";
import toast from "react-hot-toast";

export default function FindDoctor() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("");

  const baseUrl = "http://localhost:8787/doctors";

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const res = await axios.get(`${baseUrl}/fetchall`);
      setDoctors(res.data);
    } catch (err) {
      toast.error("Failed to load doctors");
      console.error(err);
    }
  };

  const filteredDoctors = doctors.filter((d) => {
    const matchesSearch =
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.specialization.toLowerCase().includes(search.toLowerCase());

    const matchesSpecialty = specialty
      ? d.specialization === specialty
      : true;

    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="bg-blue-50 min-h-screen p-6">
      {/* Search & Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="relative flex-1 min-w-[250px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search doctor"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border"
          />
        </div>

        <select
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          className="px-4 py-3 rounded-xl border"
        >
          <option value="">Filter by Speciality</option>
          <option value="Cardiac Sciences">Cardiac Sciences</option>
          <option value="Neurology">Neurology</option>
          <option value="Orthopaedics">Orthopaedics</option>
          <option value="Oncology">Oncology</option>
          <option value="Pulmonology">Pulmonology</option>
          <option value="Nephrology">Nephrology</option>
          <option value="General Surgery">General Surgery</option>
          <option value="Urology">Urology</option>
          <option value="Radiology">Radiology</option>
          <option value="Critical Care">Critical Care</option>
        </select>
      </div>

      {/* Doctors Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((d) => (
            <div
              key={d.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-lg font-bold">{d.name}</h3>
                <p className="text-sm text-gray-500">
                  Senior Consultant | CityCare Hospital
                </p>

                <span className="inline-block mt-3 text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                  {d.specialization}
                </span>

                <div className="flex justify-between mt-6">
                  <div>
                    <p className="font-semibold">
                      {d.experience || 0} Years
                    </p>
                    <p className="text-sm text-gray-500">Experience</p>
                  </div>
                  <div>
                    <p className="font-semibold">₹ {d.fees || "--"}</p>
                    <p className="text-sm text-gray-500">Fees</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
                  <MapPin size={16} />
                  Gurgaon / Noida
                </div>
              </div>

              <div className="grid grid-cols-2 border-t">
                <button className="py-3 hover:bg-gray-50">
                  View Full Profile
                </button>
                <button className="py-3 bg-orange-100 hover:bg-orange-200">
                  Book an Appointment
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No doctors found
          </p>
        )}
      </div>
    </div>
  );
}
