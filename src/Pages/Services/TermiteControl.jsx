import { motion } from "framer-motion";
import { FaBug } from "react-icons/fa";
import disinfecting2 from "../../Images/disinfecting2.jpg";

  export default function TermiteControl() {
  return (
    <section className="bg-white text-gray-900 py-10 px-6 md:px-16 lg:px-20">

      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold text-[#013c15]">
          Expert <span className="text-red-600">Termite Control</span> & Prevention
        </h2>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          Termites silently destroy buildings from the inside out.
          We stop and prevent termite damage using industry-certified treatment programs.
        </p>
      </motion.div>

      {/* Image + Explanation */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        
          <img
            src={disinfecting2}
            alt="Termite Inspection"
            className="rounded-xl shadow-lg object-cover w-full"
          />
        

        <div>
          <h3 className="text-2xl font-semibold text-[#013c15] mb-4">
            Protect Your Home & Business from Structural Damage
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Termites feed on wood and cellulose materials. Without early detection,
            they can compromise structural foundations, ceilings, furniture, door frames
            and warehouse storage.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our treatment plans are custom-designed and include full inspection,
            soil and barrier treatments, baiting systems, monitoring and follow-ups.
          </p>
        </div>
      </motion.div>

      {/* Lottie Animation Display */}
      <motion.div
        className="flex justify-center mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-64 drop-shadow-lg">
          {/*<Lottie animationData={termiteAnimation} loop={true} />*/}
        </div>
      </motion.div>

      {/* Treatment Types */}
      <h3 className="text-3xl font-semibold text-center mb-10 text-[#013c15]">
        Our Termite Treatment Solutions
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

        <div className="bg-red-50 shadow-md rounded-lg p-8 text-center">
          <h4 className="font-semibold text-xl text-[#013c15] mb-3">Spot Treatment</h4>
          <p className="text-gray-700">
            Targeted chemical applications for localized termite colonies.
          </p>
        </div>

        <div className="bg-red-50 shadow-md rounded-lg p-8 text-center">
          <h4 className="font-semibold text-xl text-[#013c15] mb-3">Barrier & Soil Treatment</h4>
          <p className="text-gray-700">
            Creates a long-lasting protective barrier around the property.
          </p>
        </div>

        <div className="bg-red-50 shadow-md rounded-lg p-8 text-center">
          <h4 className="font-semibold text-xl text-[#013c15] mb-3">Baiting & Monitoring</h4>
          <p className="text-gray-700">
            Non-invasive system that attracts and eliminates entire colonies.
          </p>
        </div>

      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 py-5">
          Don’t Wait Until It’s Too Late
        </h3>
        <a
          href="/contact"
          className="bg-red-600 text-white px-10 py-4 rounded-lg font-semibold shadow-md hover:bg-red-700 transition"
        >
          Book a Termite Inspection
        </a>
      </motion.div>

    </section>
  );
}
