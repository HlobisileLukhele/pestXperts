import React from "react";
import { FaUserTie, FaCertificate, FaCheckCircle } from "react-icons/fa";

const Complaince = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
      {/* Section title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Leadership & Compliance
      </h2>

      {/* Flex container */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {/* Founder Card */}
        <div className="flex-1 bg-red-50 p-8 rounded-2xl shadow-md border border-red-100 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="bg-red-100 p-3 rounded-lg text-red-600 mr-3">
              <FaUserTie size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Founder's Leadership
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold text-red-600">Mrs. Sithabile Shange</span>{" "}
            is the driving force behind <span className="font-semibold">PestXperts</span>. 
            With years of experience in professional pest management and environmental safety, 
            he leads with a vision of excellence — ensuring that every client receives 
            safe, reliable, and effective pest control solutions with integrity and care.
          </p>

          <div className="flex items-center mt-4 text-red-600 font-medium">
            <FaCheckCircle className="mr-2" />
            <span>Committed to quality, safety & innovation</span>
          </div>
        </div>

        {/* Certifications Card */}
        <div className="flex-1 bg-red-50 p-8 rounded-2xl shadow-md border border-red-100 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="bg-red-100 p-3 rounded-lg text-red-600 mr-3">
              <FaCertificate size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Compliance & Certification
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            PestXperts is a fully registered and compliant pest management company. 
            We adhere to all environmental, health, and industry standards to ensure 
            ethical, safe, and effective pest control practices.
          </p>

          <div className="bg-white p-5 rounded-xl border border-red-100">
            <h4 className="text-lg font-semibold text-red-600 mb-3 flex items-center">
              <FaCertificate className="mr-2" /> Our Certifications
            </h4>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-center">
                <FaCheckCircle className="text-red-500 mr-2" />
                Registered Pest Control Operator
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-red-500 mr-2" />
                Health & Safety Compliant
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-red-500 mr-2" />
                Eco-Friendly Solutions Accredited
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-red-500 mr-2" />
                Member of South African Pest Control Association (SAPCA)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaince;
