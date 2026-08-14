import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import FeaturedGallery from "../components/FeaturedGallery";
import CTASection from "../components/CTASection";


// Home page component
// Combines different sections of the website homepage
export default function Home() {


  return (

    // Main home page container
    <div>


      {/* Hero section
          Displays the main banner and introduction */}
      <HeroSection />



      {/* Featured gallery section
          Shows selected photography images */}
      <FeaturedGallery />



      {/* Why choose us section
          Displays company features and advantages */}
      <WhyChooseUs />



      {/* Testimonials section
          Shows customer reviews and feedback */}
      <Testimonials />



      {/* Call To Action section
          Encourages users to make bookings or contact */}
      <CTASection />


    </div>

  );
}