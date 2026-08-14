import { useState } from "react";
import GalleryCard from "../components/GalleryCard";
import photos from "../data/photos.json";


// Gallery page component
// Displays photography images with category filtering and image preview
export default function Gallery() {


  // Store currently selected photo category
  // Default category is "All" to display all photos
  const [category, setCategory] = useState("All");



  // Store selected image for full-screen preview
  // null means no image is selected
  const [selectedImage, setSelectedImage] = useState<string | null>(null);



  // Filter photos according to selected category
  // If category is "All", display all photos
  const filteredPhotos =
    category === "All"
      ? photos
      : photos.filter((photo) => photo.title === category);



  return (

    // Main gallery section container
    <section className="max-w-7xl mx-auto px-8 py-16">


      {/* Gallery page heading */}
      <h1 className="text-4xl font-bold text-center mb-4 ">
        Our Gallery
      </h1>



      {/* Description about gallery */}
      <p className="text-center  mb-10">
        Explore our collection of unforgettable moments captured with passion
        and creativity.
      </p>




      {/* Category filter button section */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">


        {/* Create buttons dynamically from category list */}
        {[
          "All",
          "Wedding Photography",
          "Engagement Photography",
          "Baby Photography",
          "Family Photography",
          "Birthday Event",
          "Special Event",
        ].map((item) => (


          <button
            key={item}

            // Change selected category when button is clicked
            onClick={() => setCategory(item)}

            // Apply active button style for selected category
            className={`px-5 py-2 rounded-full font-medium transition duration-300 ${
              category === item
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-yellow-500 hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-yellow-500"
            }`}
          >

            {item}

          </button>


        ))}


      </div>





      {/* Display filtered photos using grid layout */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">


        {/* Loop through photos and create GalleryCard components */}
        {filteredPhotos.map((photo) => (


          <div
            key={photo.id}

            // Open image preview when user clicks a photo
            onClick={() => setSelectedImage(photo.image)}

            // Show pointer cursor for clickable images
            className="cursor-pointer"
          >


            {/* Reusable Gallery Card Component */}
            <GalleryCard
              image={photo.image}
              title={photo.title}
            />


          </div>


        ))}


      </div>






      {/* Image preview modal */}
      {/* Shows only when an image is selected */}
      {selectedImage && (

        <div

          // Full screen dark overlay background
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"


          // Close preview when clicking outside image
          onClick={() => setSelectedImage(null)}
        >


          {/* Display selected image in large view */}
          <img
            src={selectedImage}
            alt="Selected photography"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />


        </div>

      )}



    </section>

  );
}