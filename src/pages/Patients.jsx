import { useEffect, useState } from "react";
import axios from "axios";
import { Pencil, Trash2, Plus, X } from "lucide-react";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({ id: "", name: "", age: "", gender: "", phone: "" });
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  const baseUrl = "http://localhost:8787/patients";

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const res = await axios.get(baseUrl);
      setPatients(res.data);
    } catch (err) {
      console.error("Error fetching patients:", err);
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
      setForm({ id: "", name: "", age: "", gender: "", phone: "" });
      setShowForm(false);
      fetchPatients();
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  const handleEdit = (p) => {
    setForm(p);
    setEditingId(p.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this patient?")) {
      await axios.delete(`${baseUrl}/${id}`);
      fetchPatients();
    }
  };

  const filteredPatients = patients.filter((p) =>
    Object.values(p)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">
        🏥 Patients Management
      </h1>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="🔍 Search by name, ID, gender, or phone..."
          className="border border-gray-300 p-3 rounded-xl w-full sm:w-1/2 focus:ring-2 focus:ring-blue-400 shadow-sm transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => {
            setShowForm(!showForm);
            setForm({ id: "", name: "", age: "", gender: "", phone: "" });
            setEditingId(null);
          }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold shadow-md transition ${
            showForm
              ? "bg-gray-500 hover:bg-gray-600"
              : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
          }`}
        >
          {showForm ? <X size={18} /> : <Plus size={18} />}
          {showForm ? "Close Form" : "Add New Patient"}
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 bg-white p-6 rounded-2xl shadow-lg mb-8 border border-gray-100 animate-fadeIn"
        >
          {["id", "name", "age", "gender", "phone"].map((field) => (
            <input
              key={field}
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              type={field === "age" ? "number" : "text"}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              required
            />
          ))}
          <button
            type="submit"
            className="col-span-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 font-semibold transition shadow-md"
          >
            {editingId ? "💾 Update Patient" : "➕ Add Patient"}
          </button>
        </form>
      )}

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-2xl border border-gray-100">
        <table className="w-full text-center">
          <thead className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 uppercase text-sm">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Age</th>
              <th className="p-3">Gender</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.length > 0 ? (
              filteredPatients.map((p) => (
                <tr
                  key={p.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-3">{p.id}</td>
                  <td className="p-3 font-medium">{p.name}</td>
                  <td className="p-3">{p.age}</td>
                  <td className="p-3 capitalize">{p.gender}</td>
                  <td className="p-3">{p.phone}</td>
                  <td className="p-3 flex justify-center gap-3">
                    <button
                      onClick={() => handleEdit(p)}
                      className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg shadow transition"
                    >
                      <Pencil size={16} /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
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
                  No patients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
