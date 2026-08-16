// Imports NavLink for navigation and active link styling
import { NavLink } from "react-router-dom";

// Imports useContext and useState
import { useContext, useState } from "react";

// Imports ThemeContext for theme switching
import { ThemeContext } from "../context/ThemeContext";

// Imports the camera icon for the website logo
import { FaCamera } from "react-icons/fa";

// Imports hamburger and close icons
import { Menu, X } from "lucide-react";

export default function Navbar() {
  // Gets the current theme and theme toggle function from ThemeContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Controls whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Closes the mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Applies different styles to active and inactive navigation links
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-lg transition duration-300 ${
      isActive
        ? "bg-yellow-500 text-white font-semibold"
        : "text-white hover:bg-gray-800"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-black text-white shadow-md">

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 sm:px-8 py-4">

        {/* Website Logo */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 text-xl sm:text-2xl font-bold transition duration-300 hover:text-yellow-500"
        >
          <FaCamera className="text-yellow-500 transition-transform duration-300 hover:rotate-12" />

          <span>Lumera Weddings</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3">

          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/gallery" className={navLinkClass}>
            Gallery
          </NavLink>

          <NavLink to="/packages" className={navLinkClass}>
            Packages
          </NavLink>

          <NavLink to="/booking" className={navLinkClass}>
            Booking
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

          {/* Theme Switch */}
          <button
            onClick={toggleTheme}
            className="px-3 py-2 bg-white text-black rounded-lg transition duration-300 hover:bg-yellow-500 hover:text-white"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>

        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-2">

          {/* Theme Switch */}
          <button
            onClick={toggleTheme}
            className="px-3 py-2 bg-white text-black rounded-lg text-sm"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-3 px-4 pb-6">

          <NavLink
            to="/"
            onClick={closeMenu}
            className={navLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/gallery"
            onClick={closeMenu}
            className={navLinkClass}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/packages"
            onClick={closeMenu}
            className={navLinkClass}
          >
            Packages
          </NavLink>

          <NavLink
            to="/booking"
            onClick={closeMenu}
            className={navLinkClass}
          >
            Booking
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={navLinkClass}
          >
            Contact
          </NavLink>

        </div>
      )}

    </nav>
  );
}