import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Pencil, Trash2, X, Users, UserPlus, Calendar, Phone, Search, Edit3, User2Icon, User, Building, Settings } from "lucide-react";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({ 
    id:"",
    name: "",
    age: "",
    gender: "",
    phone: "",
    diseaseDepartment: ""
  });
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const baseUrl = "http://localhost:8787/patients";

  useEffect(() => {
    fetchPatients(0);
  }, []);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!search.trim()) {
        fetchPatients(0);
      } else {
        searchPatients(search);
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [search]);

  const fetchPatients = async (p = 0) => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseUrl}/fetch?page=${p}&size=6`);
      const data = res.data;
      // Spring Page object contains: content, totalPages, number
      setPatients(data.content || []);
      setTotalPages(data.totalPages || 0);
      setPage(data.number || 0);
    } catch (err) {
      toast.error("Failed to fetch patients. Please try again.");
      console.error("Error fetching patients:", err);
    } finally {
      setLoading(false);
    }
  };

  const searchPatients = async (keyword) => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseUrl}/search/all?keyword=${encodeURIComponent(keyword)}`);
      setPatients(res.data);
      setTotalPages(1);
      setPage(0);
    } catch (err) {
      toast.error("Search failed. Please try again.");
      console.error("Error searching patients:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      name: form.name,
      age: Number(form.age),
      gender: form.gender,
      phone: form.phone,
      diseaseDepartment: form.diseaseDepartment
    };

    try {
      if (editingId) {
        await axios.put(`${baseUrl}/update/${editingId}`, payload);
        toast.success("Patient updated successfully!");
        setEditingId(null);
      } else {
        await axios.post(`${baseUrl}/save`, payload);
        toast.success("Patient added successfully!");
      }
      setForm({ name: "", age: "", gender: "", phone: "", diseaseDepartment: "" });
      setShowForm(false);
      // Refresh current page
      if (search.trim()) {
        searchPatients(search);
      } else {
        fetchPatients(page);
      }
    } catch (err) {
      toast.error("Failed to save patient. Please try again.");
      console.error("Error submitting form:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (p) => {
    setForm({
      name: p.name || "",
      age: p.age || "",
      gender: p.gender || "",
      phone: p.phone || "",
      diseaseDepartment: p.diseaseDepartment || ""
    });
    setEditingId(p.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this patient?")) {
      setSubmitting(true);
      try {
        await axios.delete(`${baseUrl}/delete/${id}`);
        toast.success("Patient deleted successfully!");
        // Reload current page or search
        if (search.trim()) {
          searchPatients(search);
        } else {
          // if deleting last item on page, ensure not to request negative page
          const newPage = (patients.length === 1 && page > 0) ? page - 1 : page;
          fetchPatients(newPage);
        }
      } catch (err) {
        toast.error("Failed to delete patient. Please try again.");
        console.error("Error deleting patient:", err);
      } finally {
        setSubmitting(false);
      }
    }
  };

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
    <div className="bg-blue-200 text-gray-900 min-h-screen py-3 px-3">
      <div className="flex justify-around">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name or department..."
            className="md:w-96 pl-10 pr-4 py-3 sm:py-2 px-6 sm:px-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm transition bg-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            setShowForm(!showForm);
            if (!showForm) {
              setForm({ name: "", age: "", gender: "", phone: "", diseaseDepartment: "" });
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
            {["name", "age", "gender", "phone", "diseaseDepartment"].map((field) => (
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
        {/* Patients List */}
        <motion.h2
          className="text-3xl font-bold text-center text-blue-800 mt-8 mb-6"
          {...fadeInUp}
        >
          Patients List
        </motion.h2>
        {loading ? (
          <motion.div
            className="flex justify-center items-center py-12"
            {...fadeInUp}
          >
            <ClipLoader size={50} color="#3B82F6" />
          </motion.div>
        ) : (
          <motion.table
            className="w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 mt-8"
            {...containerVariants}
          >
            <thead className="bg-blue-100">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-blue-800">ID</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-blue-800">Name</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-blue-800">Age</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-blue-800">Gender</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-blue-800">Phone</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-blue-800">Department</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-blue-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients && patients.length > 0 ? (
                patients.map((p) => (
                  <motion.tr
                    key={p.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    {...childVariants}
                  >
                    <td className="px-6 py-4 text-gray-900 font-bold">{p.id}.</td>
                    <td className="px-6 py-4 text-gray-900 font-medium ">{p.name}</td>
                    <td className="px-6 py-4 text-gray-600">{p.age}</td>
                    <td className="px-6 py-4 text-gray-600">{p.gender}</td>
                    <td className="px-6 py-4 text-gray-600">{p.phone}</td>
                    <td className="px-6 py-4 text-gray-600">{p.diseaseDepartment}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex gap-2 justify-center">
                        <motion.button
                          onClick={() => handleEdit(p)}
                          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-1 px-3 rounded-lg hover:from-yellow-500 hover:to-yellow-600 font-semibold transition-all duration-300 shadow-md text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Pencil size={14} />
                        </motion.button>
                        <motion.button
                          onClick={() => handleDelete(p.id)}
                          disabled={submitting}
                          className="bg-gradient-to-r from-red-500 to-red-600 text-white py-1 px-3 rounded-lg hover:from-red-600 hover:to-red-700 font-semibold transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Trash2 size={14} />
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <motion.tr {...childVariants}>
                  <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                    <Users className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p>No patients found.</p>
                  </td>
                </motion.tr>
              )}
            </tbody>
          </motion.table>
        )}

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            disabled={page === 0}
            onClick={() => {
              const newPage = Math.max(0, page - 1);
              fetchPatients(newPage);
            }}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span className="px-4 py-2 bg-blue-200 rounded">
            {totalPages === 0 ? 0 : page + 1} / {totalPages}
          </span>

          <button
            disabled={page >= totalPages - 1 || totalPages === 0}
            onClick={() => {
              const newPage = Math.min(totalPages - 1, page + 1);
              fetchPatients(newPage);
            }}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
}
