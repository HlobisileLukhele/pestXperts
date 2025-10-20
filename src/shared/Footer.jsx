import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaBug,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-12 px-6 md:px-16 lg:px-24">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-red-600 text-white p-2 rounded-lg">
              <FaBug className="text-2xl" />
            </div>
            <h2 className="ml-2 text-2xl font-bold text-white">PestXperts</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Keeping homes and businesses pest-free with trusted, professional, and
            eco-friendly pest control solutions since 2012.
          </p>

          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-red-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-red-600 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-red-600 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-red-600 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-red-600 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-red-600 transition">
                Our Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-red-600 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-red-600 transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-red-600 transition">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Expertise</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/services/pestcontrol" className="hover:text-red-600 transition">
                Pest Control
              </a>
            </li>
            <li>
              <a href="/services/fumigation" className="hover:text-red-600 transition">
                Fumigation
              </a>
            </li>
            <li>
              <a href="/services/rodent-control" className="hover:text-red-600 transition">
                Rodent Control
              </a>
            </li>
            <li>
              <a href="/services/termite-treatment" className="hover:text-red-600 transition">
                Termite Treatment
              </a>
            </li>
            <li>
              <a href="/services/eco-friendly" className="hover:text-red-600 transition">
                Eco-Friendly Solutions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-red-600 mt-1" />
              <span>
                +27 11 456 7890 <br />
                <span className="text-gray-400">Mon-Fri, 8am-5pm</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-red-600 mt-1" />
              <span>info@pestxperts.co.za</span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-red-600 mt-1" />
              <span>
                Johannesburg <br />
                South Africa
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 mt-8 space-y-3 md:space-y-0">
        <p>© 2025 PestXperts. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:text-red-600 transition">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-red-600 transition">
            Terms of Service
          </a>
          <a href="/cookies" className="hover:text-red-600 transition">
            Cookie Policy
          </a>
          <a href="/sitemap" className="hover:text-red-600 transition">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}
