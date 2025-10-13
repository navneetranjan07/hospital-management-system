import { useEffect, useState } from "react";
import axios from "axios";
import { Pencil, Trash2, Plus, X } from "lucide-react";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({
    id: "",
    patientId: "",
    doctorId: "",
    appointmentTime: "",
  });
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  const baseUrl = "http://localhost:8787/appointments";

  useEffect(() => {
    fetchAppointments();
    axios.get("http://localhost:8787/patients").then((res) => setPatients(res.data));
    axios.get("http://localhost:8787/doctors").then((res) => setDoctors(res.data));
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get(baseUrl);
      setAppointments(res.data);
    } catch (err) {
      console.error("Error fetching appointments:", err);
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
      setForm({ id: "", patientId: "", doctorId: "", appointmentTime: "" });
      setShowForm(false);
      fetchAppointments();
    } catch (err) {
      console.error("Error submitting appointment:", err);
    }
  };

  const handleEdit = (a) => {
    setForm({
      id: a.id,
      patientId: a.patient?.id || "",
      doctorId: a.doctor?.id || "",
      appointmentTime: a.appointmentTime ? a.appointmentTime.slice(0, 16) : "",
    });
    setEditingId(a.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      await axios.delete(`${baseUrl}/${id}`);
      fetchAppointments();
    }
  };

  const filteredAppointments = appointments.filter((a) => {
    const q = search.toLowerCase();
    return (
      a.doctor?.name?.toLowerCase().includes(q) ||
      a.patient?.name?.toLowerCase().includes(q) ||
      a.appointmentTime?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">
        📅 Appointments Management
      </h1>

      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
        <input
          type="text"
          placeholder="🔍 Search by patient, doctor, or time..."
          className="border border-gray-300 p-3 rounded-xl w-full sm:w-1/2 focus:ring-2 focus:ring-blue-400 shadow-sm transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          
        />
        <button
          onClick={() => {
            setShowForm(!showForm);
            setForm({
              id: "",
              patientId: "",
              doctorId: "",
              appointmentTime: "",
            });
            setEditingId(null);
          }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold shadow-md transition ${showForm
              ? "bg-gray-500 hover:bg-gray-600"
              : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
            }`}
        >
          
          {showForm ? "Close Form" : "+ Add New Appointment"}
        </button>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 p-5 rounded-lg mb-6 shadow-md"
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <input
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
            placeholder="Appointment Number"
            value={form.id}
            onChange={(e) => setForm({ ...form, id: e.target.value })}
            required
          />
            <select
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
              value={form.patientId}
              onChange={(e) => setForm({ ...form, patientId: e.target.value })}
              required
            >
              <option value="">Select Patient</option>
              {patients.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>

            <select
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
              value={form.doctorId}
              onChange={(e) => setForm({ ...form, doctorId: e.target.value })}
              required
            >
              <option value="">Select Doctor</option>
              {doctors.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>

            <input
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
              type="datetime-local"
              
              value={form.appointmentTime}
              onChange={(e) => setForm({ ...form, appointmentTime: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {editingId ? "Update Appointment" : "Add Appointment"}
          </button>
        </form>
      )}

      {/* Table Section */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-2xl border border-gray-100">
        <table className="w-full text-center">
          <thead className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 uppercase text-sm">
            <tr>
              <th className="p-3 ">Apt. no.</th>
              <th className="p-3 ">Patient</th>
              <th className="p-3 ">Doctor</th>
              <th className="p-3 ">Time</th>
              <th className="p-3 ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((a) => (
                <tr key={a.id} className="border-t hover:bg-gray-50 transition">
                  <td className="p-3">{a.id}</td>
                  <td className="p-3 font-medium">{a.patient?.name}</td>
                  <td className="p-3 font-medium">{a.doctor?.name}</td>
                  <td className="p-3">
                    {a.appointmentTime
                      ? new Date(a.appointmentTime).toLocaleString("en-IN", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })
                      : ""}
                  </td>
                  <td className="p-3 flex justify-center gap-3">
                    <button
                      onClick={() => handleEdit(a)}
                      className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg shadow transition"
                    >
                      <Pencil size={16} /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(a.id)}
                      className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg shadow transition"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No appointments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
