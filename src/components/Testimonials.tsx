// Imports the star icon used to display the customer rating
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  // Stores customer names and their reviews
  const reviews = [
    {
      name: "Kasun & Nimali",
      review:
        "Lumera Weddings captured our wedding beautifully. Every photo tells a story!",
    },
    {
      name: "Amila Fernando",
      review:
        "Professional service and amazing quality. Highly recommended!",
    },
    {
      name: "Sahan & Dilani",
      review:
        "We loved every single photo. Thank you for making our memories unforgettable.",
    },
  ];

  return (
    // Main testimonials section
    <section className="max-w-7xl mx-auto px-8 py-16">

      {/* Testimonials section heading */}
      <h2 className="text-4xl font-bold text-center mb-4">
        What Our Clients Say
      </h2>

      {/* Short description for the testimonials section */}
      <p className="text-center mb-12">
        Trusted by happy clients across Sri Lanka.
      </p>

      {/* Displays customer reviews in a responsive grid */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* Creates a testimonial card for each customer review */}
        {reviews.map((review, index) => (
          <div
            key={index}
            className="
              border
              border-gray-200
              dark:border-gray-700
              rounded-xl
              p-6
              shadow-md
              bg-white
              dark:bg-gray-800
              hover:shadow-xl
              transition
              duration-300
            "
          >
            {/* Displays a five-star customer rating */}
            <div className="flex text-yellow-500 mb-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* Displays the customer's review */}
            <p className="italic mb-4 text-gray-600 dark:text-gray-300">
              "{review.review}"
            </p>

            {/* Displays the customer's name */}
            <h3 className="font-semibold text-lg text-black dark:text-white">
              {review.name}
            </h3>

          </div>
        ))}

      </div>
    </section>
  );
}