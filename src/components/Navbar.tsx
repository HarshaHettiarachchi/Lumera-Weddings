// Imports NavLink for navigation and active link styling
import { NavLink } from "react-router-dom";

// Imports useContext to access the global theme state
import { useContext } from "react";

// Imports ThemeContext for theme switching
import { ThemeContext } from "../context/ThemeContext";

// Imports the camera icon for the website logo
import { FaCamera } from "react-icons/fa";

export default function Navbar() {
  // Gets the current theme and theme toggle function from ThemeContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Applies different styles to active and inactive navigation links
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-lg transition duration-300 ${
      isActive
        ? "bg-yellow-500 text-white font-semibold"
        : "text-white"
    }`;

  return (
    // Sticky navigation bar that remains visible while scrolling
    <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-black text-white shadow-md">

      {/* Website logo that links to the Home page */}
      <NavLink
        to="/"
        className="flex items-center gap-2 text-2xl font-bold transition duration-300 hover:text-yellow-500"
      >
        {/* Camera icon used as the website logo */}
        <FaCamera className="text-yellow-500 transition-transform duration-300 hover:rotate-12" />

        Lumera Weddings
      </NavLink>

      {/* Main navigation links and theme switch button */}
      <div className="flex items-center gap-3">

        {/* Home page link */}
        <NavLink
          to="/"
          className={navLinkClass}
        >
          Home
        </NavLink>

        {/* Gallery page link */}
        <NavLink
          to="/gallery"
          className={navLinkClass}
        >
          Gallery
        </NavLink>

        {/* Packages page link */}
        <NavLink
          to="/packages"
          className={navLinkClass}
        >
          Packages
        </NavLink>

        {/* Booking page link */}
        <NavLink
          to="/booking"
          className={navLinkClass}
        >
          Booking
        </NavLink>

        {/* Contact page link */}
        <NavLink
          to="/contact"
          className={navLinkClass}
        >
          Contact
        </NavLink>

        {/* Changes between light mode and dark mode */}
        <button
          onClick={toggleTheme}
          className="px-3 py-2 bg-white text-black rounded-lg transition duration-300"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

      </div>
    </nav>
  );
}