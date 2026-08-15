import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import images directly from the assets folder
import image1 from "../assets/images/1.jpg";
import image3 from "../assets/images/3.jpg";
import image5 from "../assets/images/5.jpg";

export default function HeroSection() {
  // Hero slide data
  const heroSlides = [
    {
      id: 1,
      image: image1,
      title: "Capturing Your Beautiful Moments",
      subtitle:
        "Professional photography for your most special memories.",
    },
    {
      id: 2,
      image: image5,
      title: "Your Story, Our Lens",
      subtitle:
        "We turn your precious moments into timeless memories.",
    },
    {
      id: 3,
      image: image3,
      title: "Memories That Last Forever",
      subtitle:
        "Beautiful photography for every special occasion.",
    },
  ];

  // Stores the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically changes the slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % heroSlides.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const currentHero = heroSlides[currentSlide];

  // Show next slide
  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % heroSlides.length
    );
  };

  // Show previous slide
  const previousSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + heroSlides.length) %
        heroSlides.length
    );
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <img
        src={currentHero.image}
        alt={currentHero.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          {currentHero.title}
        </h1>

        <p className="mt-4 text-lg md:text-xl">
          {currentHero.subtitle}
        </p>

        <Link
          to="/booking"
          className="inline-block mt-8 px-8 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Book Now
        </Link>
      </div>

      {/* Previous Button */}
      <button
        onClick={previousSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white text-3xl w-12 h-12 rounded-full transition"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white text-3xl w-12 h-12 rounded-full transition"
      >
        ›
      </button>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentSlide === index
                ? "bg-yellow-500 scale-125"
                : "bg-white/70"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
