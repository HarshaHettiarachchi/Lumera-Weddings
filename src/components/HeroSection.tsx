// Imports React hooks for managing the slide state and automatic slideshow
import { useEffect, useState } from "react";

// Imports Link for navigation to the Booking page
import { Link } from "react-router-dom";

// Imports hero slideshow data from the local JSON file
import heroSlides from "../data/heroSlides.json";

export default function HeroSection() {
  // Stores the index of the currently displayed hero slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically changes the hero slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % heroSlides.length
      );
    }, 4000);

    // Clears the interval when the component is removed
    return () => clearInterval(interval);
  }, []);

  // Gets the data of the currently active hero slide
  const currentHero = heroSlides[currentSlide];

  // Changes to the next slide
  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % heroSlides.length
    );
  };

  // Changes to the previous slide
  const previousSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + heroSlides.length) %
        heroSlides.length
    );
  };

  return (
    // Main hero section
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* Displays the current hero background image */}
      <img
        src={currentHero.image}
        alt={currentHero.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay improves the visibility of the text */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero title, subtitle, and booking button */}
      <div className="relative z-10 text-center text-white px-6">

        {/* Displays the title from the current slide */}
        <h1 className="text-4xl md:text-6xl font-bold">
          {currentHero.title}
        </h1>

        {/* Displays the subtitle from the current slide */}
        <p className="mt-4 text-lg md:text-xl">
          {currentHero.subtitle}
        </p>

        {/* Navigates the user to the Booking page */}
        <Link
          to="/booking"
          className="inline-block mt-8 px-8 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Book Now
        </Link>

      </div>

      {/* Button for displaying the previous hero slide */}
      <button
        onClick={previousSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white text-3xl w-12 h-12 rounded-full transition"
        aria-label="Previous slide"
      >
        ‹
      </button>

      {/* Button for displaying the next hero slide */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white text-3xl w-12 h-12 rounded-full transition"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Slide navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">

        {/* Creates one navigation dot for each hero slide */}
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition ${
              currentSlide === index
                ? "bg-yellow-500 scale-125"
                : "bg-white/70"
            }`}
          ></button>
        ))}

      </div>

    </section>
  );
}