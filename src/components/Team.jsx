import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Team() {
  const members = [
    {
      name: "Sophia Rose",
      role: "UX Teacher",
      image: "https://picsum.photos/300/300?1",
    },
    {
      name: "Cindy Walker",
      role: "Graphic Teacher",
      image: "https://picsum.photos/300/300?2",
    },
    {
      name: "David Hutson",
      role: "Full Stack Master",
      image: "https://picsum.photos/300/300?3",
    },
    {
      name: "Stella Blair",
      role: "Digital Animator",
      image: "https://picsum.photos/300/300?4",
    },
  ];

  return (
    <section id="team" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold">Our Team</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Meet Our Experts
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay Social */}
                <div className="absolute inset-0 bg-indigo-600/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                  <a className="bg-white p-3 rounded-full text-indigo-600 hover:scale-110 transition">
                    <FaFacebookF />
                  </a>
                  <a className="bg-white p-3 rounded-full text-indigo-600 hover:scale-110 transition">
                    <FaTwitter />
                  </a>
                  <a className="bg-white p-3 rounded-full text-indigo-600 hover:scale-110 transition">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <p className="text-indigo-600 text-sm font-medium mb-1">
                  {member.role}
                </p>
                <h3 className="font-semibold text-lg">
                  {member.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
