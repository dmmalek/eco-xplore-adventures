import logo from "../assets/image/logo.png";
import {
  FaEnvelope,
  FaPhone,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-green-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4 sm:mb-6">
              <img
                src={logo}
                alt="eco xplore adventures"
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full mr-3 sm:mr-4 shadow-lg border-2 border-green-400"
              />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Eco Xplore Adventures
              </h2>
            </div>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mb-6">
              Discover Earth's hidden wonders through sustainable travel. We
              create unforgettable eco-friendly adventures that connect you with
              nature while protecting our planet for future generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-green-400">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm sm:text-base flex items-center group">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                  Home
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm sm:text-base flex items-center group">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                  Adventures
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm sm:text-base flex items-center group">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                  About Us
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm sm:text-base flex items-center group">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-green-400">
              Connect With Us
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col space-y-3 sm:space-y-4">
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <FaEnvelope className="w-5 h-5 mr-3 text-green-400" />
                  info@ecoxplore.com
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <FaPhone className="w-5 h-5 mr-3 text-green-400" />
                  +88 (0171) 234-56789
                </div>
              </div>

              <div className="pt-2">
                <p className="text-sm font-medium text-green-400 mb-3">
                  Follow Our Journey
                </p>
                <div className="flex space-x-3 sm:space-x-4">
                  <a
                    href="https://x.com/ABDULMALEK42621"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label="Follow us on Twitter"
                  >
                    <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="https://www.youtube.com/@abdulmalek1643"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label="Subscribe to our YouTube channel"
                  >
                    <FaYoutube className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/abdulmalekmonir97"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label="Follow us on Facebook"
                  >
                    <FaFacebookF className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm">
              © 2025 Eco Xplore Adventures. All rights reserved.
            </div>
            <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
