import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import DashboardNavbar from "../components/DashboardNarbar.jsx"

import { logout, getMe } from "../apis/auth.js";
import { getCourses } from "../apis/courses.js";

export default function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getMe();
        setUser(userData);
      } catch (err) {
        navigate("/login");
        return;
      }

      try {
        const courseData = await getCourses();
        setCourses(courseData);
      } catch (err) {
        console.error("Gagal ambil course");
      }

      setLoading(false);
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* HEADER */}
      < DashboardNavbar/>

      {/* CONTENT */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-10">

        {/* WELCOME */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-800">
            Selamat datang{user ? `, ${user.full_name}` : ""} 👋
          </h2>

          <p className="text-gray-500 mt-2">
            Yuk lanjutkan perjalanan belajarmu hari ini 🚀
          </p>
        </motion.div>

        {/* STATS
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <StatCard title="Total Course" value={courses.length} />
          <StatCard title="Course Aktif" value={courses.length} />
          <StatCard title="Progress" value="0%" />
        </div> */}

        {/* COURSE LIST */}
        <h3 className="text-xl font-semibold mb-4">
          Course yang bisa dipelajari
        </h3>

        {loading ? (
          <SkeletonGrid />
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={course.id || i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-lg mb-2">
                  {course.title}
                </h4>

                <p className="text-gray-500 text-sm mb-4">
                  {course.description || "Belajar skill baru yang menarik."}
                </p>

                <button onClick={() => navigate(`/course/${course.id}`)} className="text-indigo-600 font-medium text-sm hover:underline">
                  Mulai Belajar →
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t mt-10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Learning App. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-2xl font-bold text-indigo-600 mt-2">
        {value}
      </h3>
    </div>
  );
}

function SkeletonGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-sm p-6 animate-pulse"
        >
          <div className="h-5 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      ))}
    </div>
  );
}
