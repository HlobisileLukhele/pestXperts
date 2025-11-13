import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

export default function FAQs() {
  // Define frequently asked questions
  const faqs = [
    {
      question: "What types of pests do you handle?",
      answer:
        "We offer professional pest control solutions for cockroaches, rodents, ants, bed bugs, termites, mosquitoes, and more. Each treatment is designed to target the specific pest effectively and safely.",
    },
    {
      question: "Are your pest control treatments safe for children and pets?",
      answer:
        "Yes. We use eco-friendly and health-safe products approved by industry standards to ensure your family and pets are protected during and after treatment.",
    },
    {
      question: "How often should pest control be done?",
      answer:
        "For best results, we recommend quarterly treatments. However, this depends on the severity of the infestation and the type of pest problem you are facing.",
    },
    {
      question: "Do you offer one-time pest control services?",
      answer:
        "Absolutely! You can book a once-off pest treatment or choose one of our affordable maintenance packages to prevent future infestations.",
    },
    {
      question: "How soon can I book a service?",
      answer:
        "You can book your pest control service immediately through our website or by contacting our team. We strive to respond to all service requests within 24 hours.",
    },
  ];

  // Manage open FAQ
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle the accordion state
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <div className="flex justify-center items-center mb-3">
          <FaQuestionCircle className="text-red-600 text-3xl mr-2" />
          <h2 className="text-3xl font-bold text-[#013c15]">Frequently Asked Questions</h2>
        </div>
        <p className="text-gray-600 text-lg">
          Find quick answers to the most common questions our clients ask about our pest control services.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-[#013c15] rounded-xl shadow-sm transition-all duration-300 hover:shadow-md"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left text-gray-900 font-semibold focus:outline-none"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <FaChevronUp className="text-red-600" />
              ) : (
                <FaChevronDown className="text-red-600" />
              )}
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-40 p-5 pt-0" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
