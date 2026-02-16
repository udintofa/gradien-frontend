import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-600 font-semibold uppercase tracking-wider">
            Contact Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Feel free to contact us anytime
          </h2>

          <p className="text-gray-600 mb-8">
            Thank you for choosing our templates. We provide you best CSS
            templates at absolutely 100% free of charge.
          </p>

          {/* SPECIAL OFFER CARD */}
          <div className="relative bg-purple-600 text-white p-6 rounded-2xl shadow-lg overflow-hidden">
            
            <div className="absolute -top-6 -left-6 bg-white text-purple-600 w-20 h-20 rounded-full flex flex-col items-center justify-center font-bold shadow">
              <span className="text-xs">OFF</span>
              <span className="text-lg">50%</span>
            </div>

            <p className="text-sm opacity-90">Valid: 24 April 2036</p>

            <h4 className="text-xl font-bold mt-2">
              Special Offer 50% OFF!
            </h4>

            <button className="mt-4 bg-white text-purple-600 p-3 rounded-full hover:scale-105 transition">
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-slate-50 p-8 rounded-2xl shadow-md"
        >
          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name..."
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            <input
              type="email"
              placeholder="Your Email..."
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            <textarea
              placeholder="Your Message..."
              rows={4}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Send Message Now
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
