import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Protecting Homes & Businesses with{" "}
            <span className="text-red-600">Expert Pest Control</span>
          </h1>

          <p className="text-lg text-gray-700">
            At <span className="font-semibold text-red-600">pestXperts</span>, we provide reliable, 
            eco-friendly solutions to keep your space clean, safe, 
            and pest-free. From homes to offices, we’ve got you covered.
          </p>

          <div>
            <a
              href="#services"
              className="inline-block px-6 py-3 text-lg font-semibold text-white bg-red-600 rounded-xl shadow-md hover:bg-red-700 transition-colors duration-300"
            >
              Get a Free Quote
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full h-64 md:h-80 bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-500 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581093588401-5f4a3b3c6f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Pest control expert disinfecting building"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
