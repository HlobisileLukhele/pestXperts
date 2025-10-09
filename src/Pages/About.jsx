import React from "react";
import {
  FaShieldAlt,
  FaLeaf,
  FaBug,
  FaClock,
  FaHandshake,
  FaSprayCan,
  FaUserShield,
  FaRecycle,
  FaEye, 
  FaBullseye 
} from "react-icons/fa";
import Complaince from "../components/Complaince";

const AboutSection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN - TEXT */}
        <div className="text-left space-y-6">
          {/* Section Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            About <span className="text-red-600">PestXperts</span>
          </h2>

          {/* Sub Heading */}
          <p className="text-gray-700 text-lg leading-relaxed">
            Established in <span className="font-semibold text-black">2025</span>,{" "}
            <strong>PestXperts</strong> was founded with a mission to redefine
            pest management through innovation, precision, and care. We deliver
            fast, reliable, and environmentally conscious pest control services
            for both homes and businesses across South Africa.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            With our expert technicians and eco-safe methods, we ensure that
            every property we treat is free from unwanted pests while remaining
            safe for your family, pets, and the environment.
          </p>
        </div>

        {/* RIGHT COLUMN - IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1581594549598-4b51c8b8e8b7?auto=format&fit=crop&w=800&q=80"
            alt="Pest control expert at work"
            className="rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 w-full max-w-md"
          />
        </div>
      </div>

      {/* vision and mission * Flex container */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch p-8">
        {/* Vision Card */}
        <div className="flex-1 bg-red-50 p-8 rounded-2xl shadow-md border border-red-100 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="bg-red-100 p-3 rounded-lg text-red-600 mr-3">
              <FaEye size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            To be South Africa’s most trusted name in pest management — setting
            the benchmark in innovation, safety, and eco-friendly solutions that
            protect homes, businesses, and communities from unwanted pests.
          </p>
        </div>

        {/* Mission Card */}
        <div className="flex-1 bg-red-50 p-8 rounded-2xl shadow-md border border-red-100 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="bg-red-100 p-3 rounded-lg text-red-600 mr-3">
              <FaBullseye size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            To deliver reliable, environmentally responsible pest control
            services through professional expertise, modern treatment
            techniques, and personalized care — ensuring our clients’ peace of
            mind and long-term protection.
          </p>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-black mb-10">
          What Makes Our Services <span className="text-red-600">Stand Out</span>
        </h3>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 space-y-8">
          {/* CARD 1 */}
          <div
            className="flex flex-col-4 md:flex-row items-center gap-6 bg-white border border-gray-100 shadow-md hover:shadow-xl rounded-2xl p-8 transform transition-all duration-500 hover:-translate-y-2 animate-slideIn"
          >
            <FaShieldAlt className="text-red-600 text-4xl flex-shrink-0" />
            <div className="text-left">
              <h4 className="font-bold text-xl text-black mb-2">
                Safe & Certified Protection
              </h4>
              <p className="text-gray-600">
                We use government-approved and eco-friendly chemicals that are
                safe for your family, pets, and the environment.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="flex flex-col md:flex-row items-center gap-6 bg-white border border-gray-100 shadow-md hover:shadow-xl rounded-2xl p-8 transform transition-all duration-500 hover:-translate-y-2 animate-slideIn delay-100"
          >
            <FaRecycle className="text-red-600 text-4xl flex-shrink-0" />
            <div className="text-left">
              <h4 className="font-bold text-xl text-black mb-2">
                  Eco-Conscious Commitment
              </h4>
              <p className="text-gray-600">
                Sustainability drives everything we do. We choose eco-friendly
                solutions that minimize environmental impact without sacrificing
                effectiveness..
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className="flex flex-col md:flex-row items-center gap-6 bg-white border border-gray-100 shadow-md hover:shadow-xl rounded-2xl p-8 transform transition-all duration-500 hover:-translate-y-2 animate-slideIn delay-100"
          >
            <FaSprayCan className="text-red-600 text-4xl flex-shrink-0" />
            <div className="text-left">
              <h4 className="font-bold text-xl text-black mb-2">
                  Advanced Treatment Methods
              </h4>
              <p className="text-gray-600">
                We use state-of-the-art pest control tools and proven scientific strategies to ensure precise and long-term results.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div
            className="flex flex-col md:flex-row items-center gap-6 bg-white border border-gray-100 shadow-md hover:shadow-xl rounded-2xl p-8 transform transition-all duration-500 hover:-translate-y-2 animate-slideIn delay-200"
          >
            <FaHandshake className="text-red-600 text-4xl flex-shrink-0" />
            <div className="text-left">
              <h4 className="font-bold text-xl text-black mb-2">
                Trusted by Homeowners & Businesses
              </h4>
              <p className="text-gray-600">
                From private homes to commercial facilities, we’ve built
                long-lasting relationships through transparent service and
                consistent results.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Complaince />

    </section>
  );
};

export default AboutSection;
