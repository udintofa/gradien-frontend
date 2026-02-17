import { useParams, useNavigate } from "react-router-dom";
import { getCourseById } from "../../apis/courses";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import DashboardNavbar from "../../components/DashboardNarbar";

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  // ===== Dummy Data =====
  const materials = [
    {
      id: 1,
      title: "Penalaran Umum",
    },
    {
      id: 2,
      title: "Pemahaman Bacaan",
    },
  ];

  const tryouts = [
    {
      id: 1,
      title: "Tryout UTBK #1",
      description: "Simulasi UTBK penalaran dan literasi",
      duration_minutes: 120,
    },
    {
      id: 2,
      title: "Tryout UTBK #2",
      description: "Latihan intensif",
      duration_minutes: 90,
    },
  ];

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseData = await getCourseById(id);
        setCourse(courseData);
      } catch (err) {
        console.log("gagal ambil course");
        navigate("/dashboard");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id, navigate]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!course) {
    return <p className="text-center mt-10">Course tidak ditemukan</p>;
  }

  return (
    <>
      <DashboardNavbar />

      <div className="min-h-screen bg-gray-50">

        {/* HERO */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-7 px-6">
          <div className="max-w-5xl mx-auto">

            {/* Back Button */}
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-2 mb-6 text-white/90 hover:text-white transition"
            >
              <ArrowLeft size={20} />
              Kembali ke Dashboard
            </button>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              {course.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white/90 max-w-2xl"
            >
              {course.description}
            </motion.p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">

          {/* ===== MATERI ===== */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Materi</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {materials.map((materi) => (
                <motion.div
                  key={materi.id}
                  whileHover={{ y: -6 }}
                  onClick={() => console.log("klik materi", materi.id)}
                  className="bg-white rounded-2xl p-6 shadow hover:shadow-lg cursor-pointer transition"
                >
                  <h3 className="font-semibold text-lg mb-2">
                    {materi.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Klik untuk melihat materi
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ===== TRYOUT ===== */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Tryout</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {tryouts.map((tryout) => (
                <motion.div
                  key={tryout.id}
                  whileHover={{ y: -6 }}
                  onClick={() => console.log("klik tryout", tryout.id)}
                  className="bg-white rounded-2xl p-6 shadow hover:shadow-lg cursor-pointer transition"
                >
                  <h3 className="font-semibold text-lg mb-2">
                    {tryout.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3">
                    {tryout.description}
                  </p>

                  <span className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
                    {tryout.duration_minutes} menit
                  </span>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* FOOTER */}
        <footer className="bg-white border-t py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Gradien Nol. All rights reserved.
        </footer>
      </div>
    </>
  );
}
