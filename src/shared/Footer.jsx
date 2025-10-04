import { BsEnvelopeAt } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  const linkClass = "text-sm text-black hover:text-red-600 duration-200";

  return (
    <div className="w-full" id="footer">
      <footer className="w-full bg-white">
        <div className="container mx-auto px-4 py-16">
          {/* Footer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10"> 
            {/* Brand/About Section */}
            <div className="text-center md:text-left max-w-xl mx-auto mb-12">
            <a className="flex items-center justify-center md:justify-start">
              {/* <img src={strawberylLogo} alt="strawberyl bamboo logo" className="max-w-[60px] my-auto" /> */}
              <span className="text-2xl font-extrabold text-red-700">
                pest<span className="text-gray-800">Xperts</span>
              </span>
            </a>
            <p className="text-sm text-black pt-4">
              Handcrafted bamboo accessories that blend elegance with
              sustainability. Each piece tells a story of craftsmanship and
              environmental consciousness.
            </p>
          </div>
            {/* Quick Links */}
            <div>
              <h2 className="text-base md:text-lg font-medium tracking-widest uppercase mb-4 text-red-600">
                Quick Links
              </h2>
              <nav className="flex flex-col space-y-3">
                <Link to="#" className={linkClass}>
                  Home
                </Link>
                <Link to="#" className={linkClass}>
                  About Us
                </Link>
                <Link to="#" className={linkClass}>
                  Contact
                </Link>
              </nav>
            </div>

            {/* Categories */}
            <div>
              <h2 className="text-base md:text-lg font-medium tracking-widest uppercase mb-4 text-red-600">
               Categories
              </h2>
              <nav className="flex flex-col space-y-3">
                <Link to="#" className={linkClass}>
                  Pest Control
                </Link>
                <Link to="#" className={linkClass}>
                  Hygiene
                </Link>
                <Link to="#" className={linkClass}>
                  Garden
                </Link>
                <Link to="#" className={linkClass}>
                  Belts
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-base md:text-lg font-medium tracking-widest uppercase mb-4 text-red-600">
                Contact
              </h2>
              <nav className="flex flex-col space-y-3">
                <a
                  href="mailto:hello@konceptagency.co.za"
                  className="flex items-center text-sm text-black group hover:text-red-600 duration-200"
                >
                  <BsEnvelopeAt className="size-4 mr-2 text-red-600" />
                  <span className="group-hover:text-red-600 duration-200">
                    pestXperts.co.za
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center text-sm text-black group hover:text-red-600 duration-200"
                >
                  <FiPhoneCall className="size-4 mr-2 text-red-600" />
                  <span className="group-hover:text-red-600 duration-200">
                    +27 68 692 0418
                  </span>
                </a>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="#"
                    target="_blank"
                    className="text-black hover:text-red-600 duration-200"
                  >
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-black hover:text-red-600 duration-200"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-white border-t border-gray-200">
          <div className="mx-auto px-4 py-4">
            <p className="text-sm text-black text-center">
              &copy; 2025 PestXperts. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
