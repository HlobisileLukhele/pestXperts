import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import CalltoAction from "../components/CalltoAction.jsx";
import Hero from "../components/Hero.jsx";
import ServicesCards from "../components/servicesCards.jsx";
import StepsSection from "../components/StepSection.jsx";

const reviews = [
  {
    name: "Sibongile M.",
    review:
      "PestXperts eliminated our cockroach problem within a day. Excellent service and professional team.",
  },
  {
    name: "John K.",
    review:
      "Very reliable and thorough. They handled our termite infestation perfectly, and we’ve been pest-free since.",
  },
  {
    name: "Zanele D.",
    review:
      "The technicians were friendly and explained everything. I highly recommend PestXperts for any pest issue.",
  },
];

function Home() {
  const [currentReview, setCurrentReview] = useState(0);

  // Auto-slide reviews every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Hero />
      <ServicesCards />
      <CalltoAction />
      <StepsSection />

      {/* Testimonials Section */}
      <motion.div
        className="max-w-full  mx-auto  rounded-xl shadow-lg p-10 text-center mt-16  rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:border-red-400 transition-all duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
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
    </div>
  );
}

export default Home;
