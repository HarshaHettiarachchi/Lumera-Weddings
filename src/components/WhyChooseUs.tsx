import {
  FaCamera,
  FaStar,
  FaClock,
  FaHeart,
} from "react-icons/fa";

// Why Choose Us section component
export default function WhyChooseUs() {

  // Features data for displaying cards
  const features = [
    {
      // Camera icon for professional equipment
      icon: <FaCamera className="text-4xl text-yellow-500" />,
      title: "Professional Equipment",
      description:
        "High-quality cameras and modern photography equipment.",
    },
    {
      // Star icon for experienced team
      icon: <FaStar className="text-4xl text-yellow-500" />,
      title: "Experienced Team",
      description:
        "Skilled photographers with years of experience.",
    },
    {
      // Clock icon for fast delivery
      icon: <FaClock className="text-4xl text-yellow-500" />,
      title: "Fast Delivery",
      description:
        "Quick editing and on-time delivery of your memories.",
    },
    {
      // Heart icon for customer satisfaction
      icon: <FaHeart className="text-4xl text-yellow-500" />,
      title: "Customer Satisfaction",
      description:
        "Your happiness is our highest priority.",
    },
  ];

  return (
    // Main section container
    <section className="max-w-7xl mx-auto py-16 px-8">

      {/* Section title */}
      <h2 className="text-4xl font-bold text-center mb-4">
        Why Choose Us
      </h2>

      {/* Section description */}
      <p className="text-center text-gray-500 mb-12">
        We create timeless memories with creativity, passion, and professionalism.
      </p>

      {/* Display feature cards using grid layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Loop through features array and create cards */}
        {features.map((item, index) => (
          <div
            key={index}
            // Card design with hover effect
            className="border rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300"
          >

            {/* Display feature icon */}
            <div className="flex justify-center mb-4">
              {item.icon}
            </div>

            {/* Feature title */}
            <h3 className="text-xl font-semibold mb-3">
              {item.title}
            </h3>

            {/* Feature description */}
            <p className="text-gray-500">
              {item.description}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}