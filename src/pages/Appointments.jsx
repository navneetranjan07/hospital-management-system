import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Pencil, Trash2, Plus, X, Calendar, User, Stethoscope, Search, Edit3 } from "lucide-react";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";

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
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const baseUrl = "http://localhost:8787/appointments";

  useEffect(() => {
    fetchAppointments();
    axios.get("http://localhost:8787/patients").then((res) => setPatients(res.data));
    axios.get("http://localhost:8787/doctors").then((res) => setDoctors(res.data));
  }, []);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const res = await axios.get(baseUrl);
      setAppointments(res.data);
    } catch (err) {
      toast.error("Failed to fetch appointments. Please try again.");
      console.error("Error fetching appointments:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (editingId) {
        await axios.put(`${baseUrl}/${editingId}`, form);
        toast.success("Appointment updated successfully!");
        setEditingId(null);
      } else {
        await axios.post(baseUrl, form);
        toast.success("Appointment scheduled successfully!");
      }
      setForm({ id: "", patientId: "", doctorId: "", appointmentTime: "" });
      setShowForm(false);
      fetchAppointments();
    } catch (err) {
      toast.error("Failed to save appointment. Please try again.");
      console.error("Error submitting appointment:", err);
    } finally {
      setSubmitting(false);
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
      setSubmitting(true);
      try {
        await axios.delete(`${baseUrl}/${id}`);
        toast.success("Appointment deleted successfully!");
        fetchAppointments();
      } catch (err) {
        toast.error("Failed to delete appointment. Please try again.");
        console.error("Error deleting appointment:", err);
      } finally {
        setSubmitting(false);
      }
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
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Header Section */}
      <motion.header
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 text-white py-16 md:py-24 px-4 md:px-16 overflow-hidden"
        {...fadeInUp}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <Calendar className="w-5 h-5 text-teal-300 mr-2" />
              <span className="text-teal-100 font-medium">Appointment Scheduling System</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Appointment</span>
              <br />
              Management
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100 leading-relaxed">
              Efficient scheduling and management of patient appointments with healthcare professionals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                setShowForm(!showForm);
                if (!showForm) {
                  setForm({ id: "", patientId: "", doctorId: "", appointmentTime: "" });
                  setEditingId(null);
                }
              }}
              className={`bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-10 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-sm sm:text-base flex items-center gap-2 ${showForm ? 'bg-gray-500 hover:bg-gray-600' : ''}`}
            >
              {showForm ? <X size={20} /> : <Plus size={20} />}
              {showForm ? "Close Form" : "Schedule New Appointment"}
            </button>
          </div>
          <div className="mt-12 flex justify-center space-x-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{appointments.length} Appointments</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>Active Patients</span>
            </div>
            <div className="flex items-center space-x-2">
              <Stethoscope className="w-5 h-5" />
              <span>Expert Doctors</span>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search */}
        <motion.div
          className="mb-6"
          {...fadeInUp}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="🔍 Search by patient, doctor, or time..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm transition bg-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Form */}
        {showForm && (
          <motion.form
            onSubmit={handleSubmit}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 bg-white p-6 rounded-2xl shadow-lg mb-8 border border-gray-100"
            {...fadeInUp}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <input
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Appointment Number"
                value={form.id}
                onChange={(e) => setForm({ ...form, id: e.target.value })}
                required
              />
            </div>
            <div className="relative">
              <select
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
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
            </div>
            <div className="relative">
              <select
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
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
            </div>
            <div className="relative col-span-full sm:col-span-1 md:col-span-1">
              <input
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                type="datetime-local"
                value={form.appointmentTime}
                onChange={(e) => setForm({ ...form, appointmentTime: e.target.value })}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="col-span-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 rounded-xl hover:from-blue-600 hover:to-teal-600 font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
              disabled={submitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitting ? <ClipLoader size={20} color="white" /> : editingId ? <Edit3 size={20} /> : <Plus size={20} />}
              {editingId ? "Update Appointment" : "Schedule Appointment"}
            </motion.button>
          </motion.form>
        )}

        {/* Appointments Cards */}
        {loading ? (
          <motion.header
            className="flex justify-center items-center py-12"
            {...fadeInUp}
          >
            <ClipLoader size={50} color="#3B82F6" />
          </motion.header>
        ) : (
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            {...containerVariants}
          >
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((a) => (
                <motion.div
                  key={a.id}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1 overflow-hidden"
                  {...childVariants}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-6 h-6 text-teal-500" />
                      <h3 className="text-xl font-bold text-blue-800">Apt. {a.id}</h3>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-semibold">Scheduled</span>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <User className="w-4 h-4" />
                      <span>Patient: {a.patient?.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Stethoscope className="w-4 h-4" />
                      <span>Doctor: {a.doctor?.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {a.appointmentTime
                          ? new Date(a.appointmentTime).toLocaleString("en-IN", {
                            dateStyle: "medium",
                            timeStyle: "short",
                          })
                          : ""}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-4 border-t border-gray-100">
                    <motion.button
                      onClick={() => handleEdit(a)}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-2 rounded-xl hover:from-yellow-500 hover:to-yellow-600 font-semibold transition-all duration-300 shadow-md"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Pencil size={16} />
                      Edit
                    </motion.button>
                    <motion.button
                      onClick={() => handleDelete(a.id)}
                      disabled={submitting}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white py-2 rounded-xl hover:from-red-600 hover:to-red-700 font-semibold transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Trash2 size={16} />
                      Delete
                    </motion.button>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-full text-center py-12 text-gray-500"
                {...childVariants}
              >
                <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p>No appointments found matching your search.</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
