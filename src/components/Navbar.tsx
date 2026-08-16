import { Link, NavLink } from "react-router-dom";
import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import { useContext, useState } from "react";

import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `
    transition duration-300
    ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
    }
    `;

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      bg-white
      dark:bg-gray-950
      border-b
      border-blue-100
      dark:border-gray-800
      shadow-md
      transition-colors
      duration-300
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        py-4
        flex
        items-center
        justify-between
        "
      >
        {/* Logo */}

        <Link
          to="/"
          onClick={closeMenu}
          className="
          flex
          items-center
          gap-3
          group
          "
        >
          <div
            className="
            w-10
            h-10
            sm:w-12
            sm:h-12
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-cyan-500
            flex
            items-center
            justify-center
            text-white
            shadow-lg
            group-hover:scale-110
            transition-transform
            "
          >
            <Code2 size={24} />
          </div>

          <div>
            <h2
              className="
              text-lg
              sm:text-xl
              font-bold
              text-gray-900
              dark:text-white
              "
            >
              ICT Academy Hub
            </h2>

            <p
              className="
              hidden
              sm:block
              text-xs
              text-gray-500
              dark:text-gray-400
              "
            >
              Learn • Build • Deploy
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <nav
          className="
          hidden
          md:flex
          items-center
          gap-8
          "
        >
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/lessons" className={navLinkClass}>
            Lessons
          </NavLink>

          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>

          <NavLink to="/resources" className={navLinkClass}>
            Resources
          </NavLink>

          {/* Theme Button */}

          <button
            onClick={toggleTheme}
            className="
            w-10
            h-10
            rounded-full
            flex
            items-center
            justify-center
            bg-gray-100
            dark:bg-gray-800
            text-gray-700
            dark:text-yellow-400
            hover:scale-110
            transition
            "
          >
            {theme === "light" ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} />
            )}
          </button>

          {/* Ask Question */}

          <Link
            to="/ask-question"
            className="
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            px-5
            py-2.5
            text-white
            font-medium
            shadow-lg
            hover:scale-105
            transition
            "
          >
            Ask Question
          </Link>
        </nav>

        {/* Mobile Buttons */}

        <div className="flex md:hidden items-center gap-2">
          {/* Theme Button */}

          <button
            onClick={toggleTheme}
            className="
            w-10
            h-10
            rounded-full
            flex
            items-center
            justify-center
            bg-gray-100
            dark:bg-gray-800
            text-gray-700
            dark:text-yellow-400
            "
          >
            {theme === "light" ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} />
            )}
          </button>

          {/* Hamburger Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
            w-10
            h-10
            flex
            items-center
            justify-center
            rounded-lg
            bg-gray-100
            dark:bg-gray-800
            text-gray-800
            dark:text-white
            "
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}

      {isOpen && (
        <nav
          className="
          md:hidden
          flex
          flex-col
          items-center
          gap-6
          px-6
          py-6
          bg-white
          dark:bg-gray-950
          border-t
          border-gray-200
          dark:border-gray-800
          shadow-lg
          "
        >
          <NavLink
            to="/"
            onClick={closeMenu}
            className={navLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/lessons"
            onClick={closeMenu}
            className={navLinkClass}
          >
            Lessons
          </NavLink>

          <NavLink
            to="/projects"
            onClick={closeMenu}
            className={navLinkClass}
          >
            Projects
          </NavLink>

          <NavLink
            to="/resources"
            onClick={closeMenu}
            className={navLinkClass}
          >
            Resources
          </NavLink>

          <Link
            to="/ask-question"
            onClick={closeMenu}
            className="
            w-full
            max-w-xs
            text-center
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            px-5
            py-3
            text-white
            font-medium
            shadow-lg
            "
          >
            Ask Question
          </Link>
        </nav>
      )}
    </header>
  );
}