import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function Courses() {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "design", "development", "wordpress"];

  const courses = [
    {
      id: 1,
      title: "Learn Web Design",
      author: "Stella Blair",
      category: "design",
      price: 160,
      image: "https://picsum.photos/400/250?1",
    },
    {
      id: 2,
      title: "Web Development Tips",
      author: "Cindy Walker",
      category: "development",
      price: 340,
      image: "https://picsum.photos/400/250?2",
    },
    {
      id: 3,
      title: "Latest Web Trends",
      author: "David Hutson",
      category: "wordpress",
      price: 640,
      image: "https://picsum.photos/400/250?3",
    },
    {
      id: 4,
      title: "Online Learning Steps",
      author: "Stella Blair",
      category: "development",
      price: 450,
      image: "https://picsum.photos/400/250?4",
    },
    {
      id: 5,
      title: "Be a WordPress Master",
      author: "Sophia Rose",
      category: "wordpress",
      price: 320,
      image: "https://picsum.photos/400/250?5",
    },
    {
      id: 6,
      title: "Full Stack Developer",
      author: "David Hutson",
      category: "design",
      price: 240,
      image: "https://picsum.photos/400/250?6",
    },
  ];

  const filteredCourses =
    filter === "all"
      ? courses
      : courses.filter((course) => course.category === filter);

  return (
    <section id="courses" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-600 font-semibold">Latest Courses</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Explore Our Courses
          </h2>
        </motion.div>

        {/* Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                filter === cat
                  ? "bg-indigo-600 text-white shadow"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat === "all" ? "Show All" : cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Category */}
                  <span className="absolute top-4 left-4 bg-indigo-600 text-white text-sm px-3 py-1 rounded-full">
                    {course.category}
                  </span>

                  {/* Price */}
                  <span className="absolute top-4 right-4 bg-white text-indigo-600 font-semibold px-3 py-1 rounded-full shadow">
                    ${course.price}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {course.author}
                  </p>
                  <h3 className="font-semibold text-lg">
                    {course.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );

}
