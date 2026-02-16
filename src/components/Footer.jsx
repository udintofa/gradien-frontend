import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-3">
              GradienNol
            </h2>

            <p className="text-gray-400">
              Empowering future developers with modern technology learning.
              Build skills, build career.
            </p>
          </motion.div>


          {/* LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#courses" className="hover:text-white transition">Courses</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </motion.div>


          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>

            <div className="flex gap-4">

              <a className="bg-slate-800 p-3 rounded-lg hover:bg-purple-600 transition">
                <FaFacebook size={18} />
              </a>

              <a className="bg-slate-800 p-3 rounded-lg hover:bg-purple-600 transition">
                <FaTwitter size={18} />
              </a>

              <a className="bg-slate-800 p-3 rounded-lg hover:bg-purple-600 transition">
                <FaLinkedin size={18} />
              </a>

              <a className="bg-slate-800 p-3 rounded-lg hover:bg-purple-600 transition">
                <FaInstagram size={18} />
              </a>

            </div>
          </motion.div>

        </div>


        {/* COPYRIGHT */}
        <div className="border-t border-slate-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} GradienNol. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
