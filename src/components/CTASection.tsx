// Imports Link for navigation to the Booking page
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    // Call-to-action section encouraging users to book a photography session
    <section className="bg-yellow-500 text-center py-16 px-8">
      
      {/* Main call-to-action heading */}
      <h2 className="text-4xl font-bold text-white mb-4">
        Ready to Capture Your Special Moments?
      </h2>

      {/* Short message encouraging users to make a booking */}
      <p className="text-white text-lg mb-8">
        Book your photography session today and let us preserve
        your beautiful memories forever.
      </p>

      {/* Navigates users to the Booking page */}
      <Link
        to="/booking"
        className="inline-block bg-black text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-800 transition duration-300"
      >
        Book Now
      </Link>
    </section>
  );
}