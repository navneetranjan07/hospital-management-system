import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Pencil, Trash2, Plus, X, Users, UserPlus, User, Calendar, Phone, Search, Edit3, UserCheck } from "lucide-react";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({ id: "", name: "", age: "", gender: "", phone: "" });
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const baseUrl = "http://localhost:8787/patients";

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    setLoading(true);
    try {
      const res = await axios.get(baseUrl);
      setPatients(res.data);
    } catch (err) {
      toast.error("Failed to fetch patients. Please try again.");
      console.error("Error fetching patients:", err);
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
        toast.success("Patient updated successfully!");
        setEditingId(null);
      } else {
        await axios.post(baseUrl, form);
        toast.success("Patient added successfully!");
      }
      setForm({ id: "", name: "", age: "", gender: "", phone: "" });
      setShowForm(false);
      fetchPatients();
    } catch (err) {
      toast.error("Failed to save patient. Please try again.");
      console.error("Error submitting form:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (p) => {
    setForm(p);
    setEditingId(p.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this patient?")) {
      setSubmitting(true);
      try {
        await axios.delete(`${baseUrl}/${id}`);
        toast.success("Patient deleted successfully!");
        fetchPatients();
      } catch (err) {
        toast.error("Failed to delete patient. Please try again.");
        console.error("Error deleting patient:", err);
      } finally {
        setSubmitting(false);
      }
    }
  };

  const filteredPatients = patients.filter((p) =>
    Object.values(p)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

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
              <Users className="w-5 h-5 text-teal-300 mr-2" />
              <span className="text-teal-100 font-medium">Patient Care Management System</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Patient</span>
              <br />
              Management
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100 leading-relaxed">
              Comprehensive patient records management with advanced care tracking and monitoring.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                setShowForm(!showForm);
                if (!showForm) {
                  setForm({ id: "", name: "", age: "", gender: "", phone: "" });
                  setEditingId(null);
                }
              }}
              className={`bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-10 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-sm sm:text-base flex items-center gap-2 ${showForm ? 'bg-gray-500 hover:bg-gray-600' : ''}`}
            >
              {showForm ? <X size={20} /> : <UserPlus size={20} />}
              {showForm ? "Close Form" : "Add New Patient"}
            </button>
          </div>
          <div className="mt-12 flex justify-center space-x-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>{patients.length} Patients</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Active Records</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>24/7 Support</span>
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
              placeholder="🔍 Search by name, ID, gender, or phone..."
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
            {["id", "name", "age", "gender", "phone"].map((field) => (
              <div key={field} className="relative">
                <input
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={form[field]}
                  type={field === "age" ? "number" : "text"}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  required
                />
              </div>
            ))}
            <motion.button
              type="submit"
              className="col-span-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 rounded-xl hover:from-blue-600 hover:to-teal-600 font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
              disabled={submitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitting ? <ClipLoader size={20} color="white" /> : editingId ? <Edit3 size={20} /> : <UserPlus size={20} />}
              {editingId ? "Update Patient" : "Add Patient"}
            </motion.button>
          </motion.form>
        )}

        {/* Patients Cards */}
        {loading ? (
          <motion.div
            className="flex justify-center items-center py-12"
            {...fadeInUp}
          >
            <ClipLoader size={50} color="#3B82F6" />
          </motion.div>
        ) : (
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            {...containerVariants}
          >
            {filteredPatients.length > 0 ? (
              filteredPatients.map((p) => (
                <motion.div
                  key={p.id}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1 overflow-hidden"
                  {...childVariants}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <UserCheck className="w-6 h-6 text-teal-500" />
                      <h3 className="text-xl font-bold text-blue-800">{p.name}</h3>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-semibold">ID: {p.id}</span>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>Age: {p.age}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <User className="w-4 h-4" />
                      <span className="capitalize">Gender: {p.gender}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>Phone: {p.phone}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-4 border-t border-gray-100">
                    <motion.button
                      onClick={() => handleEdit(p)}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-2 rounded-xl hover:from-yellow-500 hover:to-yellow-600 font-semibold transition-all duration-300 shadow-md"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Pencil size={16} />
                      Edit
                    </motion.button>
                    <motion.button
                      onClick={() => handleDelete(p.id)}
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
                <Users className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p>No patients found matching your search.</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
