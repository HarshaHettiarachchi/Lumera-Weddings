import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Packages from "./pages/Packages";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
 return (
  <div
    className={
      theme === "light"
        ? "min-h-screen bg-white text-black"
        : "min-h-screen bg-gray-900 text-white"
    }
  >
    <BrowserRouter>
      <Navbar />
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
         <Footer />
    </BrowserRouter>
  </div>
);
}

export default App;