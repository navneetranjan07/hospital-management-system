import { useEffect, useState } from "react";
import axios from "axios";
import { Pencil, Trash2, Plus, X } from "lucide-react";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    specialization: "",
    phone: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  const baseUrl = "http://localhost:8787/doctors";

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const res = await axios.get(baseUrl);
      setDoctors(res.data);
    } catch (err) {
      console.error("Error fetching doctors:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${baseUrl}/${editingId}`, form);
        setEditingId(null);
      } else {
        await axios.post(baseUrl, form);
      }
      setForm({ id: "", name: "", specialization: "",phone: "" });
      setShowForm(false);
      fetchDoctors();
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  const handleEdit = (d) => {
    setForm(d);
    setEditingId(d.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this doctor?")) {
      await axios.delete(`${baseUrl}/${id}`);
      fetchDoctors();
    }
  };

  const filteredDoctors = doctors.filter((d) =>
    Object.values(d)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">
        👨‍⚕️ Doctors Management
      </h1>

      {/* 🔍 Search and Add Doctor */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="🔍 Search doctors by name, ID, specialization, or phone..."
          className="border border-gray-300 p-3 rounded-xl w-full sm:w-1/2 focus:ring-2 focus:ring-blue-400 shadow-sm transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => {
            setShowForm(!showForm);
            setForm({
              id: "",
              name: "",
              specialization: "",
              gender: "",
              phone: "",
            });
            setEditingId(null);
          }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold shadow-md transition ${showForm
              ? "bg-gray-500 hover:bg-gray-600"
              : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
            }`}
        >
          {showForm ? <X size={18} /> : <Plus size={18} />}
          {showForm ? "Close Form" : "Add New Doctor"}
        </button>
      </div>

      {/* 🧾 Doctor Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 bg-white p-6 rounded-2xl shadow-lg mb-8 border border-gray-100 animate-fadeIn"
        >
          {["id", "name", "specialization", "phone"].map((field) => (
            <input
              key={field}
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              type={field === "id" ? "number" : "text"}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              required
            />
          ))}
          <button
            type="submit"
            className="col-span-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 font-semibold transition shadow-md"
          >
            {editingId ? "💾 Update Doctor" : "➕ Add Doctor"}
          </button>
        </form>
      )}

      {/* 🧍‍♂️ Doctors Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-2xl border border-gray-100">
        <table className="w-full text-center">
          <thead className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 uppercase text-sm">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Specialization</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((d) => (
                <tr key={d.id} className="border-t hover:bg-gray-50 transition">
                  <td className="p-3">{d.id}</td>
                  <td className="p-3 font-medium">{d.name}</td>
                  <td className="p-3">{d.specialization}</td>
                  <td className="p-3">{d.phone}</td>
                  <td className="p-3 flex justify-center gap-3">
                    <button
                      onClick={() => handleEdit(d)}
                      className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg shadow transition"
                    >
                      <Pencil size={16} /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(d.id)}
                      className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg shadow transition"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-6 text-gray-500">
                  No doctors found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
