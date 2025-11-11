// src/pages/Services/PestControl.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import virus from "../../Images/virus.jpg";


// Sample reviews for the carousel
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

// Pest Image Data
const pests = [
  {
    name: "Cockroaches",
    img: "https://static.wixstatic.com/media/9120d9_40039cad110d4e7cba9b092c0aa99def~mv2.png/v1/fill/w_216,h_156,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/coc.png",
  },
  {
    name: "Bats",
    img: "https://static.wixstatic.com/media/9120d9_0641f0a2b6a04463bcd992810f460cc1~mv2.jpg/v1/fill/w_234,h_168,al_c,lg_1,q_80,enc_avif,quality_auto/bat_edited.jpg",
  },
  {
    name: "Bed Bugs",
    img: "https://static.wixstatic.com/media/9120d9_ba6f56aebb68415ca386aafba8829aa3~mv2.png/v1/fill/w_168,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bedbug_edited.png",
  },
  {
    name: "Ants",
    img: "https://static.wixstatic.com/media/9120d9_e0500fbd97934d19911a4a79f58119df~mv2.png/v1/fill/w_276,h_192,al_c,lg_1,q_85,enc_avif,quality_auto/Ant.png",
  },
  {
    name: "Spiders",
    img: "https://static.wixstatic.com/media/9120d9_fe5e4a2ed4b84b85bb73d5922690d3c6~mv2.png/v1/fill/w_257,h_132,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/spider_edited.png",
  },
  {
    name: "Fleas",
    img: "https://static.wixstatic.com/media/9120d9_0477d907cc79469a85d900bab9abc887~mv2.png/v1/fill/w_134,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/flea.png",
  },
  {
    name: "Flies",
    img: "https://static.wixstatic.com/media/9120d9_ab9ac7b59e38446b928310a907da0495~mv2.png/v1/fill/w_160,h_132,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fly.png",
  },
  {
    name: "Fish Moths",
    img: "https://static.wixstatic.com/media/9120d9_4d8aac87a9b54becbe1b33bca352d4e3~mv2.jpg/v1/fill/w_280,h_201,al_c,lg_1,q_80,enc_avif,quality_auto/silverfish_edited.jpg",
  },
  {
    name: "Moths",
    img: "https://static.wixstatic.com/media/9120d9_c50783bcc0e546d883ce3f290b84a259~mv2.png/v1/fill/w_174,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Moth-PNG.png",
  },
  {
    name: "Rodents (Rats & Mice)",
    img: "https://static.wixstatic.com/media/9120d9_f437ed15e8d3424c8847739d3996aa1e~mv2.png/v1/fill/w_214,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/rat.png",
  },
  {
    name: "Ticks",
    img: "https://static.wixstatic.com/media/9120d9_602b3342534646a6b4a94788a1978a7b~mv2.jpg/v1/fill/w_228,h_168,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/detail-3370931_1920_edited.jpg",
  },
  {
    name: "Termites",
    img: "https://static.wixstatic.com/media/9120d9_80a22e701dce4aaaa5057f886057f06c~mv2.png/v1/fill/w_134,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/termite.png",
  },
  {
    name: "Stored Product Pests",
    img: "https://static.wixstatic.com/media/9120d9_dcdab1424bc244bdbfdbf78c54b49a4d~mv2.png/v1/fill/w_192,h_112,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Weevil_edited.png",
  },
  {
    name: "Borer Beetle",
    img: "https://static.wixstatic.com/media/9120d9_cf4bed058b8942c88c05623187a01ab4~mv2.png/v1/fill/w_242,h_168,al_c,lg_1,q_85,enc_avif,quality_auto/borer_edited.png",
  },
  {
    name: "Weeds",
    img: "https://static.wixstatic.com/media/9120d9_8a17571e4a004f9fa947cc406fe0c325~mv2.png/v1/fill/w_134,h_187,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled-1.png",
  },
];

export default function PestControl() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentReview((prev) => (prev + 1) % reviews.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white text-gray-900 py-20 px-6 md:px-16 lg:px-24">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold text-[#013c15]">
          Our <span className="text-red-600">Pest Control</span> Services
        </h2>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          We specialize in controlling all common household and commercial pests using safe, efficient, and eco-friendly methods.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 mb-20">
        {pests.map((pest, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:border-red-400 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <p className="text-sm font-semibold mb-2 text-center">{pest.name}</p>
            <div className="p-8 items-center">
              <img
                src={pest.img}
                alt={pest.name}
                className="h-fit w-fit object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tailored Pest Management Solutions Section */}
      <div className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src={virus}
            alt="Pest Control Technician"
            className="w-full rounded-xl shadow-md object-cover"
          />

          <div>
            <h3 className="text-3xl font-bold text-[#013c15] mb-4">
              Tailored Pest Management Solutions
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Every property is different. We design treatment plans that eliminate pests effectively while ensuring safety for your family, pets, staff, and the environment.
            </p>

            <ul className="text-gray-800 space-y-2 mb-6">
              <li>• Eco-friendly and pet-safe options</li>
              <li>• Residential, commercial & industrial service</li>
              <li>• Preventative treatments available</li>
              <li>• Certified and experienced technicians</li>
            </ul>

            <a
              href="/contact"
              className="bg-[#013c15] hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all inline-block"
            >
              Get a Free Assessment
            </a>
          </div>
        </div>
      </div>

                  {/*eco-friendly */}
      <div className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10 items-center">

          <div>
            <h3 className="text-3xl font-bold text-[#013c15] mb-4">
              Safe and Eco Friendly 
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              As pest management professionals we keep homes and businesses pest free, while protecting the environment.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              All our services are carried out in accordance with industry standards and regulatory guidelines.
            </p>
            <a
              href="/contact"
              className="bg-[#013c15] hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all inline-block"
            >
              View Safety Policy
            </a>
          </div>
          <img
            src={virus}
            alt="Pest Control Technician"
            className="w-full rounded-xl shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
