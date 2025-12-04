import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Pencil, Trash2, Plus, X, Users, UserPlus, User, Calendar, Phone, Search, Edit3, UserCheck, UserCircleIcon, UserIcon, User2Icon } from "lucide-react";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({ id: "", name: "", age: "", gender: "", phone: "", diseaseDepartment: "" });
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
      const res = await axios.get(`${baseUrl}/fetchall`);
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
        await axios.put(`${baseUrl}/update/${editingId}`, form);
        toast.success("Patient updated successfully!");
        setEditingId(null);
      } else {
        await axios.post(`${baseUrl}/save`, form);
        toast.success("Patient added successfully!");
      }
      setForm({ id: "", name: "", age: "", gender: "", phone: "", diseaseDepartment: "" });
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
        await axios.delete(`${baseUrl}/delete/${id}`);
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
    <div className=" text-gray-800 min-h-screen py-3 px-3">
      <div className="flex justify-around">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name, ID, gender, or phone..."
            className="md:w-96 pl-10 pr-4 py-3 sm:py-2 px-6 sm:px-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm transition bg-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            setShowForm(!showForm);
            if (!showForm) {
              setForm({ id: "", name: "", age: "", gender: "", phone: "", diseaseDepartment: "" });
              setEditingId(null);
            }
          }}
          className={`bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 sm:py-2 px-6 sm:px-10 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-sm sm:text-base flex items-center gap-2 ${showForm ? 'bg-gray-500 hover:bg-gray-600' : ''}`}
        >
          {showForm ? <X size={20} /> : <UserPlus size={20} />}
          {showForm ? "Close Form" : "Add New Patient"}
        </button>
      </div>


      <div className="max-w-6xl mx-auto px-4 py-4">
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
    {["id", "name", "age", "gender", "phone", "diseaseDepartment"].map((field) => (
      <div key={field} className="relative">
        {field === "gender" ? (
          <select
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            value={form.gender}
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>

        ) : (
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={form[field]}
            type={field === "age" ? "number" : "text"}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            required
          />
        )}
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
<hr />
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
            className="grid  mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
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
                      <User2Icon className="w-6 h-6 text-teal-500" />
                      <h3 className="text-xl md:text-base md:max-w-52 overflow-auto font-bold text-blue-800">{p.name}</h3>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-semibold">ID: {p.id}</span>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>Age: {p.age}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <UserIcon className="w-4 h-4" />
                      <span className="capitalize">Gender: {p.gender}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>Phone: {p.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <UserCircleIcon className="w-4 h-4" />
                      <span>Department: {p.diseaseDepartment}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-4 border-gray-100">
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
