import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
  
export default function Hero() {
  const navigate = useNavigate();
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white pt-[140px] pb-24 px-6">

      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl top-[-120px] left-[-120px]" />
      <div className="absolute w-[400px] h-[400px] bg-pink-400/20 rounded-full blur-3xl bottom-[-120px] right-[-120px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div className="text-center md:text-left">

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Belajar Lebih Seru di{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Gradien Nol
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Platform edukasi interaktif untuk semua usia. 
            Belajar jadi lebih menyenangkan dengan pengalaman modern dan komunitas suportif.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              onClick={() => navigate("/login")}
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mulai Sekarang
            </motion.button>

            <motion.button
              className="border border-white/40 px-8 py-4 rounded-xl font-semibold backdrop-blur hover:bg-white/10 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Pelajari Lebih Lanjut
            </motion.button>
          </motion.div>
        </div>


        {/* RIGHT IMAGE */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">

            {/* Glow behind image */}
            <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-110"></div>

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
              alt="Belajar"
              className="relative w-[350px] md:w-[420px] drop-shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
