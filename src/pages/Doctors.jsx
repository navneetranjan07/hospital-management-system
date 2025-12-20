import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import {
  Pencil,
  Trash2,
  X,
  Users,
  UserPlus,
  Search,
  Edit3,
} from "lucide-react";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({
    name: "",
    specialization: "",
    phone: "",
    fees: "",
    experience: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const baseUrl = "http://localhost:8787/doctors";

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseUrl}/fetchall`);
      setDoctors(res.data);
    } catch (err) {
      toast.error("Failed to fetch doctors");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      if (editingId) {
        await axios.put(`${baseUrl}/update/${editingId}`, form);
        toast.success("Doctor updated successfully!");
      } else {
        await axios.post(`${baseUrl}/save`, form);
        toast.success("Doctor added successfully!");
      }

      setForm({ name: "", specialization: "", phone: "", fees: "", experience: "" });
      setEditingId(null);
      setShowForm(false);
      fetchDoctors();
    } catch (err) {
      toast.error("Failed to save doctor");
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (d) => {
    setForm({
      name: d.name,
      specialization: d.specialization,
      phone: d.phone,
      fees: d.fees,
      experience: d.experience,
    });
    setEditingId(d.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this doctor?")) return;

    try {
      await axios.delete(`${baseUrl}/delete/${id}`);
      toast.success("Doctor deleted");
      fetchDoctors();
    } catch {
      toast.error("Delete failed");
    }
  };

  const filteredDoctors = doctors.filter((d) =>
    `${d.name} ${d.specialization} ${d.phone} ${d.fees} ${d.experience}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="bg-blue-200 min-h-screen py-6 px-4">
      {/* Search + Add */}
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name, specialization or phone..."
            className="pl-10 pr-4 py-2 rounded-xl border w-80"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingId(null);
            setForm({ name: "", specialization: "", phone: "", fees: "", experience: "" });
          }}
          className="bg-teal-600 text-white px-6 py-2 rounded-xl flex gap-2"
        >
          {showForm ? <X /> : <UserPlus />}
          {showForm ? "Close" : "Add Doctor"}
        </button>
      </div>

      {/* FORM */}
      {showForm && (
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-6xl mx-auto bg-white p-6 rounded-2xl shadow mb-8 grid grid-cols-3 gap-4"
        >
          <input
            className="border p-3 rounded-lg"
            placeholder="Doctor Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          {/* 🔥 SPECIALIZATION DROPDOWN (IMPORTANT FIX) */}
          <select
            className="border p-3 rounded-lg"
            value={form.specialization}
            onChange={(e) =>
              setForm({ ...form, specialization: e.target.value })
            }
            required
          >
            <option value="">Select Specialization</option>

            <option value="Cardiac Sciences">Cardiac Sciences</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Critical Care">Critical Care</option>
            <option value="Internal Medicine">Internal Medicine</option>
            <option value="Emergency Medicine">Emergency Medicine</option>
            <option value="Emergency & Trauma">Emergency & Trauma</option>

            <option value="Neurology">Neurology</option>
            <option value="Neurosurgery">Neurosurgery</option>
            <option value="Neurointerventional Radiology">Neurointerventional Radiology</option>

            <option value="Orthopaedics">Orthopaedics</option>
            <option value="General Surgery">General Surgery</option>
            <option value="Thoracic Surgery">Thoracic Surgery</option>
            <option value="Vascular Surgery">Vascular Surgery</option>
            <option value="Plastic & Reconstructive Surgery">Plastic & Reconstructive Surgery</option>
            <option value="Endocrine Surgery">Endocrine Surgery</option>

            <option value="Gynecology">Gynecology</option>
            <option value="Obstetrics & Gynaecology">Obstetrics & Gynaecology</option>
            <option value="Foetal Medicine">Foetal Medicine</option>
            <option value="Paediatrics">Paediatrics</option>
            <option value="Infertility Medicine">Infertility Medicine</option>

            <option value="Oncology">Oncology</option>
            <option value="Organ Transplant">Organ Transplant</option>
            <option value="Liver Transplant">Liver Transplant</option>
            <option value="Medical Genetics">Medical Genetics</option>
            <option value="Pain & Palliative Medicine">Pain & Palliative Medicine</option>
            <option value="Palliative Medicine">Palliative Medicine</option>

            <option value="Nephrology">Nephrology</option>
            <option value="Pulmonology">Pulmonology</option>
            <option value="Rheumatology">Rheumatology</option>
            <option value="Radiology">Radiology</option>
            <option value="Transfusion Medicine">Transfusion Medicine</option>
            <option value="Haematology">Haematology</option>
            <option value="Infectious Diseases">Infectious Diseases</option>

            <option value="Dental Science">Dental Science</option>
            <option value="ENT">ENT</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Ophthalmology">Ophthalmology</option>
            <option value="Physiotherapy & Rehabilitation">Physiotherapy & Rehabilitation</option>
            <option value="Mental Health & Behavioural Sciences">
              Mental Health & Behavioural Sciences
            </option>

            <option value="Support Specialities">Support Specialities</option>
          </select>

          <input
            className="border p-3 rounded-lg"
            placeholder="Phone"
            value={form.phone}
            maxLength={10}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              if (value.length <= 10 && value.length >= 0) {
                setForm({ ...form, phone: e.target.value });
                
              }
            }
            }
            required
          />

          <input
            className="border p-3 rounded-lg"
            placeholder="Experience (in years)"
            type="number"
            value={form.experience}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              if (value.length <= 2) {
                setForm({ ...form, experience: value });
              }
            }
            }
            required
          />

          <input
            className="border p-3 rounded-lg"
            placeholder="Fees"
            type="number"
            value={form.fees}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              if (value.length <= 6) {
                setForm({ ...form, fees: value });
              }
            }
            }
            required
          />



          <button
            type="submit"
            className="col-span-3 bg-blue-600 text-white py-3 rounded-xl"
            disabled={submitting}
          >
            {submitting ? (
              <ClipLoader size={20} color="white" />
            ) : editingId ? (
              "Update Doctor"
            ) : (
              "Add Doctor"
            )}
          </button>
        </motion.form>
      )}

      {/* TABLE */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Specialization</th>
              <th className="p-4 text-left">Experience</th>
              <th className="p-4 text-left">Fees</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDoctors.length ? (
              filteredDoctors.map((d) => (
                <tr key={d.id} className="border-t">
                  <td className="p-4">{d.id}</td>
                  <td className="p-4">{d.name}</td>
                  <td className="p-4">{d.specialization}</td>
                  <td className="p-4">{d.experience} yrs</td>
                  <td className="p-4">₹ {d.fees}</td>
                  <td className="p-4">{d.phone}</td>
                  <td className="p-4 text-center flex gap-2 justify-center">
                    <button onClick={() => handleEdit(d)}>
                      <Pencil size={16} />
                    </button>
                    <button onClick={() => handleDelete(d.id)}>
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-8 text-center text-gray-500">
                  <Users className="mx-auto mb-2" />
                  No doctors found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
