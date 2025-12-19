import { useEffect, useState } from "react";
import axios from "axios";

export default function DepartmentLayout({
  title,
  specialization,
  intro,
  conditions = [],
  services = [],
  technologies = [],
}) {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDoctors();
  }, [specialization]);

  const fetchDoctors = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8787/doctors/specialization/${encodeURIComponent(
          specialization
        )}?page=0&size=10`
      );
      setDoctors(res.data.content || []);
    } catch (err) {
      console.error("Failed to fetch doctors", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 px-6 py-10">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-10">
        <h1 className="text-3xl font-bold text-blue-800 mb-3">{title}</h1>
        <p className="text-gray-600">{intro}</p>
      </div>

      {/* CONDITIONS */}
      {conditions.length > 0 && (
        <Section title="Conditions Treated">
          {conditions.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </Section>
      )}

      {/* SERVICES */}
      {services.length > 0 && (
        <Section title="Services Offered">
          {services.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </Section>
      )}

      {/* TECHNOLOGIES */}
      {technologies.length > 0 && (
        <Section title="Advanced Technologies">
          {technologies.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </Section>
      )}

      {/* DOCTORS */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Our Specialists
        </h2>

        {loading ? (
          <p>Loading doctors...</p>
        ) : doctors.length === 0 ? (
          <p className="text-gray-500">No doctors available</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {doctors.map((d) => (
              <div
                key={d.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg">{d.name}</h3>
                <p className="text-sm text-gray-600">{d.specialization}</p>
                <p className="text-sm mt-1">
                  Experience: {d.experience} yrs
                </p>
                <p className="text-sm">Fees: ₹{d.fees}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- REUSABLE SECTION ---------- */
function Section({ title, children }) {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-10">
      <h2 className="text-xl font-semibold text-blue-800 mb-4">{title}</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">{children}</ul>
    </div>
  );
}
