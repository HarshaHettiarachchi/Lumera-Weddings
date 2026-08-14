// Imports Link for navigation between application pages
import { Link } from "react-router-dom";

// Imports social media and contact icons
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    // Main website footer
    <footer className="bg-black text-white">

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-8 py-12">

        {/* Footer content is divided into three columns */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Business name and short description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Lumera Weddings
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Capturing your beautiful moments and turning them
              into timeless memories that you can cherish forever.
            </p>

            {/* Social media icon links */}
            <div className="flex gap-4 mt-6">

              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-yellow-500 transition duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-yellow-500 transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-yellow-500 transition duration-300"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

          {/* Navigation links to the main pages */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <Link
                to="/"
                className="hover:text-yellow-500 transition duration-300"
              >
                Home
              </Link>

              <Link
                to="/gallery"
                className="hover:text-yellow-500 transition duration-300"
              >
                Gallery
              </Link>

              <Link
                to="/packages"
                className="hover:text-yellow-500 transition duration-300"
              >
                Packages
              </Link>

              <Link
                to="/booking"
                className="hover:text-yellow-500 transition duration-300"
              >
                Booking
              </Link>

              <Link
                to="/contact"
                className="hover:text-yellow-500 transition duration-300"
              >
                Contact
              </Link>

            </div>
          </div>

          {/* Business contact information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-400">

              {/* Phone number */}
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-yellow-500" />
                <span>+94 77 123 4567</span>
              </div>

              {/* Email address */}
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-500" />
                <span>info@lumeraweddings.com</span>
              </div>

              {/* Business location */}
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow-500" />
                <span>Matara, Sri Lanka</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Footer copyright section */}
      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-8 py-5 text-center">

          {/* Displays the current year automatically */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Lumera Weddings.
            All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}