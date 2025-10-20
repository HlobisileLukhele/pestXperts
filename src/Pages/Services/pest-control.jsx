// src/pages/Services/PestControl.jsx
import { motion } from "framer-motion";
import { FaBug, FaSpider, FaLeaf, FaQuoteLeft } from "react-icons/fa";
import { useState, useEffect } from "react";

// 🗣️ Sample reviews for the carousel
const reviews = [
  {
    name: "Sibongile M.",
    review:
      "PestXperts eliminated our cockroach problem within a day! Excellent service and professional team.",
  },
  {
    name: "John K.",
    review:
      "Very reliable and thorough. They handled our termite infestation perfectly, and we’ve been pest-free since.",
  },
  {
    name: "Zanele D.",
    review:
      "The technicians were friendly and explained everything. I highly recommend PestXperts for any pest issue!",
  },
];

// 🐜 Pest Data (images + reliable FontAwesome accents)
const pests = [
  {
    name: "Cockroaches",
    img: "https://cdn.pixabay.com/photo/2014/04/05/11/40/cockroach-317147_1280.jpg",
    // Use a FontAwesome accent icon (safe import)
    accentIcon: <FaBug className="text-red-600 text-3xl mb-3 mx-auto" />,
    description:
      "Cockroaches are one of the most common indoor pests. We provide fast and effective extermination using safe, long-lasting solutions.",
  },
  {
    name: "Rodents (Rats & Mice)",
    img: "https://cdn.pixabay.com/photo/2014/04/03/00/35/rat-309927_1280.png",
    accentIcon: <FaBug className="text-red-600 text-3xl mb-3 mx-auto" />,
    description:
      "Our rodent control includes safe trapping, sealing entry points, and prevention to keep your property rodent-free.",
  },
  {
    name: "Ants",
    img: "https://cdn.pixabay.com/photo/2016/03/05/19/02/ant-1233909_1280.jpg",
    accentIcon: <FaLeaf className="text-red-600 text-3xl mb-3 mx-auto" />,
    description:
      "We target ant colonies from the source using eco-friendly treatments to prevent re-infestation.",
  },
  {
    name: "Spiders",
    img: "https://cdn.pixabay.com/photo/2016/11/21/15/51/spider-1845870_1280.jpg",
    accentIcon: <FaSpider className="text-red-600 text-3xl mb-3 mx-auto" />,
    description:
      "Our spider treatments eliminate dangerous species while ensuring your home remains a safe, pest-free zone.",
  },
  {
    name: "Mosquitoes",
    img: "https://cdn.pixabay.com/photo/2016/09/15/20/35/mosquito-1672630_1280.jpg",
    accentIcon: <FaBug className="text-red-600 text-3xl mb-3 mx-auto" />,
    description:
      "We apply mosquito control strategies that reduce breeding areas and ensure your outdoor comfort.",
  },
  {
    name: "Termites",
    img: "https://cdn.pixabay.com/photo/2014/02/05/12/06/termite-258555_1280.jpg",
    accentIcon: <FaBug className="text-red-600 text-3xl mb-3 mx-auto" />,
    description:
      "Our termite control protects your home’s foundation with advanced barrier and baiting systems.",
  },
];

export default function PestControl() {
  const [currentReview, setCurrentReview] = useState(0);

  // ⏱️ Auto-slide reviews every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white text-gray-900 py-20 px-6 md:px-16 lg:px-24">
      {/* 🏷️ Header Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold text-gray-900">
          Our <span className="text-red-600">Pest Control</span> Services
        </h2>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          We specialize in controlling all common household and commercial pests using safe, efficient, and eco-friendly methods.
        </p>
      </motion.div>

      {/* 🪳 Pest Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {pests.map((pest, index) => (
          <motion.div
            key={index}
            className="bg-white border border-red-200 rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:border-red-400 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={pest.img}
              alt={pest.name}
              className="h-52 w-full object-cover"
              loading="lazy"
            />
            <div className="p-5 text-center">
              {pest.accentIcon}
              <h3 className="text-xl font-semibold mb-2">{pest.name}</h3>
              <p className="text-gray-600 text-sm">{pest.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 💬 Reviews Section */}
      <motion.div
        className="max-w-3xl mx-auto bg-red-50 rounded-xl shadow-lg p-10 text-center relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <FaQuoteLeft className="text-red-600 text-4xl mx-auto mb-4" />
        <p className="text-gray-700 italic text-lg">
          "{reviews[currentReview].review}"
        </p>
        <h4 className="mt-4 font-semibold text-gray-900">
          — {reviews[currentReview].name}
        </h4>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentReview ? "bg-red-600" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
