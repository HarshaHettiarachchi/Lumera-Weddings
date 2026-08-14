// Imports Link for navigation to the Booking page
import { Link } from "react-router-dom";

// Imports the check icon used to display package features
import { FaCheckCircle } from "react-icons/fa";

// Defines the TypeScript properties required by the PackageCard component
interface PackageCardProps {
  title: string;
  price: string;
  description: string;
}

export default function PackageCard({
  title,
  price,
  description,
}: PackageCardProps) {
  return (
    // Main package card container
    <div
      className="
        rounded-xl
        p-6
        shadow-lg
        bg-white
        dark:bg-gray-800
        border
        border-gray-200
        dark:border-gray-700
        transition-all
        duration-300
        hover:shadow-2xl
        hover:-translate-y-2
      "
    >
      {/* Displays the package title */}
      <h2 className="text-2xl font-bold text-black dark:text-white">
        {title}
      </h2>

      {/* Displays the package price */}
      <p className="text-3xl text-yellow-500 font-bold mt-3">
        {price}
      </p>

      {/* Displays the package description */}
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        {description}
      </p>

      {/* Displays the photography services included in the package */}
      <ul className="mt-6 space-y-3 text-gray-700 dark:text-white">

        {/* Package feature */}
        <li className="flex items-center gap-2">
          <FaCheckCircle className="text-green-500" />
          High Resolution Photos
        </li>

        {/* Package feature */}
        <li className="flex items-center gap-2">
          <FaCheckCircle className="text-green-500" />
          Professionally Edited Images
        </li>

        {/* Package feature */}
        <li className="flex items-center gap-2">
          <FaCheckCircle className="text-green-500" />
          Online Gallery Access
        </li>

      </ul>

      {/* Navigates the user to the Booking page */}
      <Link
        to="/booking"
        className="
          mt-8
          w-full
          inline-block
          text-center
          bg-yellow-500
          hover:bg-yellow-600
          text-white
          font-semibold
          py-3
          rounded-lg
          transition
          duration-300
        "
      >
        Book Now
      </Link>
    </div>
  );
}