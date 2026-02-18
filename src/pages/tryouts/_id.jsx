import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Trophy, BookOpen } from "lucide-react";

export default function TryoutId() {
  const [tryout, setTryout] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const dummy = {
      id: 1,
      course_id: 1,
      title: "Tryout UTBK #1",
      description: "Simulasi UTBK penalaran dan literasi",
      duration_minutes: 120,
      created_at: "2026-02-04T16:20:41.000Z",
    };

    setTryout(dummy);
  }, []);

  if (!tryout) return <p className="p-6">Loading...</p>;

  const handleStart = () => {
    navigate(`/quiz/${tryout.id}`); // bebas kamu ganti
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-6">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-gray-700 hover:text-indigo-600 transition"
      >
        <ArrowLeft size={20} />
        Kembali
      </button>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            🚀 {tryout.title}
          </h1>
          <p className="text-gray-600">{tryout.description}</p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-indigo-50 rounded-xl p-4 flex flex-col items-center shadow-sm">
            <Clock className="text-indigo-600 mb-2" />
            <p className="text-sm text-gray-500">Durasi</p>
            <p className="font-semibold text-indigo-700">
              {tryout.duration_minutes} menit
            </p>
          </div>

          <div className="bg-purple-50 rounded-xl p-4 flex flex-col items-center shadow-sm">
            <BookOpen className="text-purple-600 mb-2" />
            <p className="text-sm text-gray-500">Tipe</p>
            <p className="font-semibold text-purple-700">
              Simulasi UTBK
            </p>
          </div>

          <div className="bg-pink-50 rounded-xl p-4 flex flex-col items-center shadow-sm">
            <Trophy className="text-pink-600 mb-2" />
            <p className="text-sm text-gray-500">Level</p>
            <p className="font-semibold text-pink-700">
              Nasional
            </p>
          </div>
        </div>

        {/* Alert Info */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8">
          <p className="text-sm text-yellow-800">
            ⚠️ Pastikan koneksi internet stabil sebelum memulai tryout.
            Timer akan berjalan otomatis setelah kamu menekan tombol mulai.
          </p>
        </div>

        {/* Start Button */}
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStart}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-lg"
          >
            🎯 Mulai Tryout Sekarang
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
