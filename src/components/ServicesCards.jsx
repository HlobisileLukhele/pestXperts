import React from "react";
// Importing icons from React Icons (FontAwesome set)
import {
  FaHome,
  FaBuilding,
  FaLeaf,
  FaShieldAlt,
  FaClock,
  FaMedal,
} from "react-icons/fa";

// Array of services for modular structure — easily extendable or editable
const services = [
  {
    icon: <FaHome size={40} />, // Icon component
    title: "Residential Pest Control", // Card title
    description:
      "Comprehensive protection for your home against all common household pests.",
  },
  {
    icon: <FaBuilding size={40} />,
    title: "Commercial Services",
    description:
      "Tailored solutions for businesses, offices, and commercial properties.",
  },
  {
    icon: <FaLeaf size={40} />,
    title: "Eco-Friendly Solutions",
    description:
      "Safe, environmentally responsible pest control methods that protect your family and pets.",
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Preventive Treatment",
    description:
      "Proactive measures to keep pests away before they become a problem.",
  },
  {
    icon: <FaClock size={40} />,
    title: "Emergency Services",
    description:
      "Fast response when you need urgent pest control assistance.",
  },
  {
    icon: <FaMedal size={40} />,
    title: "Guaranteed Results",
    description:
      "We stand behind our work with a satisfaction guarantee.",
  },
];

// Functional component for the services section
const ServicesCards = () => {
  return (
    <section
      className="bg-white py-16 px-6" // White background with padding
      aria-label="Our Services" // Accessibility: descriptive label for screen readers
    >
      <div
        className="
          max-w-7xl mx-auto 
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-8
        "
      >
        {/* Map over the service data to generate each card */}
        {services.map((service, index) => (
          <div
            key={index}
            className="
              bg-black text-white rounded-2xl p-8 
              shadow-lg transition-all duration-300 
              hover:border-2 hover:border-red-600 hover:shadow-xl 
              group
            "
          >
            <div className="flex flex-col items-center text-center space-y-4">
              
              {/* Icon with motion on hover */}
              <div
                className="
                  text-red-600 transform transition-transform 
                  duration-300 group-hover:scale-110
                "
                aria-hidden="true" // Icon is decorative; not essential for screen readers
              >
                {service.icon}
              </div>

              {/* Service title */}
              <h3 className="text-xl font-semibold">{service.title}</h3>

              {/* Service description */}
              <p className="text-gray-300 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Export component for use in other parts of the app
export default ServicesCards;