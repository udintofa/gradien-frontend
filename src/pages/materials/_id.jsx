import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, PlayCircle, BookOpen, Sparkles } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import { getMaterialsById } from "../../apis/materials";

export default function MaterialsId() {
  const [material, setMaterials] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const materialsData = await getMaterialsById(id);
        setMaterials(materialsData);
      } catch (err) {
        console.log("gagal ambil materials")
      }
      }
    fetchMaterials();
  }, []);

  if (!material) {
    return (
      <p className="text-center mt-10 text-gray-500">Loading...</p>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 py-10 px-6">

      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-6 text-indigo-600 font-medium hover:underline"
        >
          <ArrowLeft size={18} />
          Kembali
        </button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl shadow-lg mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <BookOpen />
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              Materi Belajar
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {material.title} 🎯
          </h1>

          <p className="text-white/90">
            Pelajari konsep dengan video interaktif dan penjelasan lengkap.
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-md p-6 mb-8"
        >
          <div className="flex items-center gap-2 mb-4 font-semibold text-gray-700">
            <PlayCircle className="text-indigo-600" />
            Video Pembelajaran
          </div>

          <div className="aspect-video rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src={material.video_url.replace("watch?v=", "embed/")}
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* Deskripsi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-md p-6 mb-8"
        >
          <div className="flex items-center gap-2 mb-4 font-semibold text-gray-700">
            <Sparkles className="text-purple-600" />
            Deskripsi Materi
          </div>

          <p className="text-gray-600 leading-relaxed">
            {material.content}
          </p>
        </motion.div>

        {/* Motivasi / Progress Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-2xl shadow-lg"
        >
          <h3 className="font-semibold text-lg mb-2">
            🚀 Tetap Semangat Belajar!
          </h3>
          <p className="text-white/90 mb-4">
            Setelah menyelesaikan materi ini, kamu bisa lanjut ke tryout
            untuk menguji pemahamanmu.
          </p>

          <div className="w-full bg-white/30 rounded-full h-3">
            <div className="bg-white h-3 rounded-full w-1/3"></div>
          </div>

          <p className="text-sm mt-2">Progress Belajar 30%</p>
        </motion.div>

      </div>
    </div>
  );
}
