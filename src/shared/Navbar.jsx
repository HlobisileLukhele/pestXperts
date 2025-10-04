import { useState } from "react";
import { FaHome, FaInfoCircle, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { GiSharkFin } from "react-icons/gi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm relative w-full">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center z-50">
          <span className="text-2xl font-extrabold text-red-700 tracking-tight">
            pest<span className="text-gray-800">Xperts</span>
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex md:space-x-8 md:items-center">
          {/* Home */}
          <a
            href="/"
            className="flex items-center space-x-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
          >
            <FaHome />
            <span>Home</span>
          </a>

          {/* About Us */}
          <a
            href="/About"
            className="flex items-center space-x-2 text-gray-900 font-semibold hover:text-red-700 transition-colors"
          >
            <FaInfoCircle />
            <span>About Us</span>
          </a>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button className="flex items-center space-x-2 text-gray-800 font-semibold hover:text-red-700 transition-colors">
              <GiSharkFin />
              <span>Services</span>
            </button>
            <div
              className={`absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md py-2 z-50 transition-all duration-200 ${
                isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-red-50 hover:text-red-700 transition-colors"
              >
                Pest control
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-red-50 hover:text-red-700 transition-colors"
              >
                Hygiene control
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-red-50 hover:text-red-700 transition-colors"
              >
                Fire Risk Consulting
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <a
            href="/Contact"
            className="flex items-center space-x-2 text-gray-900 font-semibold hover:text-red-700 transition-colors"
          >
            <FaEnvelope />
            <span>Contact Us</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden z-50 text-gray-800 hover:text-red-700 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-20 px-6 space-y-6">
          {/* Home */}
          <a
            href="/"
            className="flex items-center space-x-3 text-red-600 font-semibold hover:text-red-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaHome size={20} />
            <span>Home</span>
          </a>

          {/* About Us */}
          <a
            href="/About"
            className="flex items-center space-x-3 text-gray-900 font-semibold hover:text-red-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaInfoCircle size={20} />
            <span>About Us</span>
          </a>

          {/* Services - Mobile */}
          <div>
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center space-x-3 text-gray-800 font-semibold hover:text-red-700 transition-colors w-full"
            >
              <GiSharkFin size={20} />
              <span>Services</span>
            </button>
            <div
              className={`ml-8 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                isMobileServicesOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-red-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pest control
              </a>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-red-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hygiene control
              </a>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-red-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fire Risk Consulting
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <a
            href="/Contact"
            className="flex items-center space-x-3 text-gray-900 font-semibold hover:text-red-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaEnvelope size={20} />
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
