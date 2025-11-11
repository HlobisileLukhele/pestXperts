import { motion } from "framer-motion";

export default function Fumigation() {
  return (
    <section className="bg-white text-gray-900 py-10 px-6 md:px-16 lg:px-24">
      
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold text-[#013c15]">
          Professional <span className="text-red-600">Fumigation</span> Services
        </h2>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          We offer thorough fumigation solutions for residential, commercial,
          industrial and food-storage facilities. Safe, effective, and compliant
          with South African pest control regulations.
        </p>
      </motion.div>

      {/* Image + Text Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <img
            src="https://images.pexels.com/photos/8467971/pexels-photo-8467971.jpeg"
            alt="Fumigation Service"
            className="rounded-xl shadow-lg object-cover w-full"
          />
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#013c15] mb-4">
            Total Elimination. Guaranteed Results.
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Fumigation is essential for eliminating deeply-rooted infestations,
            including pests living inside walls, furniture, and inaccessible areas.
            Our certified technicians use approved fumigants and controlled procedures
            to ensure 100% eradication and long-term protection.
          </p>
        </div>
      </motion.div>

      {/* Services Covered */}
      <h3 className="text-3xl font-semibold text-center mb-10 text-[#013c15]">
        We Fumigate For:
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 text-center font-semibold">
        <p className="bg-red-50 p-4 rounded-lg hover:border border-red-600">Cockroaches</p>
        <p className="bg-red-50 p-4 rounded-lg hover:border border-red-600">Bed Bugs</p>
        <p className="bg-red-50 p-4 rounded-lg hover:border border-red-600">Termites</p>
        <p className="bg-red-50 p-4 rounded-lg hover:border border-red-600">Rodents & Droppings</p>
        <p className="bg-red-50 p-4 rounded-lg hover:border border-red-600">Fleas & Ticks</p>
        <p className="bg-red-50 p-4 rounded-lg hover:border border-red-600">Ant Infestations</p>
        <p className="bg-red-50 p-4 rounded-lg hover:border border-red-600">Stored Product Pests</p>
        <p className="bg-red-50 p-4 rounded-lg hover:border border-red-600">Mosquito Breeding Zones</p>
      </div>

      {/* Video Demonstration */}
      <motion.div
        className="max-w-4xl mx-auto mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-semibold text-center mb-6 text-[#013c15]">
          See Our Fumigation in Action
        </h3>

        <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/iuxZgU7b94g"
            title="Professional Fumigation"
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>

      {/* Call To Action */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <a
          href="/contact"
          className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold shadow-md hover:bg-red-700 transition"
        >
          Request a Fumigation Quote
        </a>
      </motion.div>
    </section>
  );
}
