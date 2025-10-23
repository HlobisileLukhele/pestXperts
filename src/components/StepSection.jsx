import React from "react";
import { FaPhoneAlt, FaTools, FaBug } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Book a Visit",
    description: "Schedule a convenient time that fits your day with our team of experts.",
    icon: <FaPhoneAlt />,
  },
  {
    id: 2,
    title: "Get Professional Service",
    description: "Our certified specialists arrive on time and deliver top-quality pest control.",
    icon: <FaTools />,
  },
  {
    id: 3,
    title: "Enjoy a Pest-Free Space",
    description: "Relax knowing your home or business is protected with long-lasting results.",
    icon: <FaBug />,
  },
];

const StepsSection = () => {
  return (
    <section className="bg-white mb-10 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#013c15]">
          Our 3-Step Process
        </h2>
        <p className="text-grey-800 mt-3 mb-12 text-lg">
          A simple and efficient process designed for peace of mind.
        </p>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="
                relative group bg-white rounded-3xl shadow-md 
                p-10 transition-all duration-500 
                hover:-translate-y-2 hover:shadow-xl hover:bg-black-
                hover:text-white
              "
            >
              {/* Icon Circle */}
              <div
                className="
                  flex items-center justify-center mx-auto mb-6 w-20 h-20
                  bg-gradient-to-br from-red-600 to-red-800 text-white text-4xl
                  rounded-full shadow-md transform transition-transform duration-500
                  group-hover:scale-110 group-hover:rotate-6
                "
              >
                {step.icon}
              </div>

              {/* Step Number */}
              <span className="absolute top-6 left-6 text-[#013c15] text-7xl font-extrabold  group-hover:text-[#013c15] transition-colors duration-500">
                {index + 1}
              </span>

              {/* Title + Description */}
              <h3
                className="
                  text-2xl font-bold mb-3 text-[#013c15] group-hover:text-red
                  transition-colors duration-500
                "
              >
                {step.title}
              </h3>
              <p
                className="
                  text-gray-800 group-hover:text-black leading-relaxed
                  transition-colors duration-500
                "
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
