// Imports Link for navigation to the Gallery page
import { Link } from "react-router-dom";

// Imports the reusable GalleryCard component
import GalleryCard from "./GalleryCard";

// Imports photography data from the local JSON file
import photos from "../data/photos.json";

export default function FeaturedGallery() {
  // Selects the first six photos to display on the Home page
  const featuredPhotos = photos.slice(0, 6);

  return (
    // Featured gallery section
    <section className="max-w-7xl mx-auto px-8 py-16">
      
      {/* Featured gallery heading */}
      <h2 className="text-4xl font-bold text-center mb-4">
        Featured Gallery
      </h2>

      {/* Short description for the featured gallery */}
      <p className="text-center text-gray-500 mb-12">
        A collection of our favorite moments captured with love and creativity.
      </p>

      {/* Displays the selected photos using reusable GalleryCard components */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredPhotos.map((item) => (
          <GalleryCard
            key={item.id}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>

      {/* Button that navigates to the full Gallery page */}
      <div className="text-center mt-10">
        <Link
          to="/gallery"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
        >
          View Full Gallery
        </Link>
      </div>
    </section>
  );
}