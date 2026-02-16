import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const events = [
  {
    title: "UI Best Practices",
    category: "Web Design",
    date: "16 Feb 2036",
    duration: "22 Hours",
    price: "$120",
    image: "/assets/images/event-01.jpg",
  },
  {
    title: "New Design Trend",
    category: "Front End",
    date: "24 Feb 2036",
    duration: "30 Hours",
    price: "$320",
    image: "/assets/images/event-02.jpg",
  },
  {
    title: "Web Programming",
    category: "Full Stack",
    date: "12 Mar 2036",
    duration: "48 Hours",
    price: "$440",
    image: "/assets/images/event-03.jpg",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-purple-600 font-semibold uppercase tracking-wider">
            Schedule
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Upcoming Events
          </h2>
        </div>

        {/* Events */}
        <div className="space-y-6">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center"
            >
              
              {/* Image */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full md:w-48 h-32 object-cover rounded-xl"
              />

              {/* Content */}
              <div className="flex-1 w-full">
                <span className="text-sm text-purple-600 font-semibold">
                  {event.category}
                </span>

                <h3 className="text-xl font-bold mt-1 mb-3">
                  {event.title}
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                  <div>
                    <p className="font-semibold">Date</p>
                    <p>{event.date}</p>
                  </div>

                  <div>
                    <p className="font-semibold">Duration</p>
                    <p>{event.duration}</p>
                  </div>

                  <div>
                    <p className="font-semibold">Price</p>
                    <p>{event.price}</p>
                  </div>
                </div>
              </div>

              {/* Button */}
              <button className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition">
                <ArrowRight size={20} />
              </button>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
