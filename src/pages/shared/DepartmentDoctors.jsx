import { useEffect, useState } from "react";
import axios from "axios";
import { Search, User, Phone } from "lucide-react";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";

export default function DepartmentDoctors({ department }) {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const baseUrl = "http://localhost:8787/doctors";

  useEffect(() => {
    fetchDoctors(0);
  }, [department]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!search.trim()) {
        fetchDoctors(0);
      } else {
        searchDoctors(search);
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [search]);

  const fetchDoctors = async (p = 0) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${baseUrl}/fetch?specialty=${encodeURIComponent(department)}&page=${p}&size=6`
      );

      setDoctors(res.data.content || []);
      setTotalPages(res.data.totalPages || 0);
      setPage(res.data.number || 0);
    } catch (err) {
      toast.error("Failed to load doctors");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const searchDoctors = async (keyword) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${baseUrl}/search?specialty=${encodeURIComponent(department)}&keyword=${encodeURIComponent(keyword)}`
      );
      setDoctors(res.data);
      setTotalPages(1);
      setPage(0);
    } catch (err) {
      toast.error("Search failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-blue-100 min-h-screen p-6">
      {/* Search */}
      <div className="max-w-4xl mx-auto mb-6 relative">
        <Search className="absolute left-3 top-3 text-gray-400" />
        <input
          className="w-full pl-10 py-3 rounded-xl border focus:ring-2 focus:ring-blue-400"
          placeholder={`Search ${department} doctors...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex justify-center py-20">
          <ClipLoader size={50} color="#2563EB" />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {doctors.map((d) => (
            <div
              key={d.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-lg font-bold text-blue-800 flex items-center gap-2">
                <User size={18} /> {d.name}
              </h3>
              <p className="text-sm text-gray-600">{d.designation}</p>
              <p className="text-sm text-gray-500 mt-1">{d.experience}</p>

              <div className="mt-3 flex items-center gap-2 text-gray-600 text-sm">
                <Phone size={14} /> {d.phone}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          disabled={page === 0}
          onClick={() => fetchDoctors(page - 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="px-4 py-2 bg-blue-200 rounded">
          {page + 1} / {totalPages}
        </span>

        <button
          disabled={page >= totalPages - 1}
          onClick={() => fetchDoctors(page + 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
