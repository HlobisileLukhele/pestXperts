import React from "react";
import { motion } from "framer-motion";
import disinfecting2 from "../Images/disinfecting2.jpg";

const CallToAction = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* LEFT SIDE — TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug text-[#013c15]">
            Your total <span className="text-red-600">pest</span> <br />
            management solution
          </h2>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-xl">
            Discover effective pest control services designed to eliminate and
            prevent infestations. From residential to commercial spaces, we’ve
            got you covered with customized, long-lasting pest management
            strategies.
          </p>

          <motion.a
             href="/pest-control"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block border-2 bg-[#013c15] text-white font-semibold px-8 py-3 rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            View Service Catalogue
          </motion.a>
        </motion.div>

        {/* RIGHT SIDE — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={disinfecting2}
            alt="Dead cockroach symbolizing pest elimination"
            className="w-full max-w-md md:max-w-lg object-contain rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
