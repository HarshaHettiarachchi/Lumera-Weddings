import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

import { useState } from "react";


// Contact page component
// Displays contact information, message form, and location map
export default function Contact() {


  // State to show success message after form submission
  const [success, setSuccess] = useState(false);


  // Handle form submit event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    // Prevent page refresh when submitting form
    e.preventDefault();

    // Show success message
    setSuccess(true);
  };


  return (

    // Main contact page container
    <div className="max-w-7xl mx-auto px-8 py-16">


      {/* Page title */}
      <h1 className="text-4xl font-bold text-center mb-4">
        Contact Us
      </h1>


      {/* Page description */}
      <p className="text-center text-gray-500 mb-12">
        We'd love to hear from you. Get in touch to book your special moments.
      </p>



      {/* Two column layout
          Left side: Contact details
          Right side: Contact form */}
      <div className="grid md:grid-cols-2 gap-10">


        {/* Contact Information Section */}
        <div>

          <h2 className="text-3xl font-semibold mb-6">
            Get In Touch
          </h2>


          {/* Contact detail cards */}
          <div className="space-y-6">


            {/* Phone information */}
            <div className="p-5 rounded-lg shadow-md border">

              <h3 className="flex items-center gap-3 text-xl font-semibold">

                {/* Phone icon */}
                <FaPhoneAlt className="text-yellow-500" />

                Phone
              </h3>

              <p>+94 77 123 4567</p>

            </div>



            {/* Email information */}
            <div className="p-5 rounded-lg shadow-md border">

              <h3 className="flex items-center gap-3 text-xl font-semibold">

                <FaEnvelope className="text-yellow-500" />

                Email

              </h3>

              <p>info@lumeraweddings.com</p>

            </div>



            {/* Address information */}
            <div className="p-5 rounded-lg shadow-md border">

              <h3 className="flex items-center gap-3 text-xl font-semibold">

                <FaMapMarkerAlt className="text-yellow-500" />

                Address

              </h3>

              <p>Matara, Sri Lanka</p>

            </div>



            {/* Working hours information */}
            <div className="p-5 rounded-lg shadow-md border">

              <h3 className="flex items-center gap-3 text-xl font-semibold">

                <FaClock className="text-yellow-500" />

                Working Hours

              </h3>

              <p>Monday - Sunday</p>
              <p>8:00 AM - 8:00 PM</p>

            </div>


          </div>

        </div>




        {/* Contact Form Section */}
        <div>


          <h2 className="text-3xl font-semibold mb-6">
            Send Us a Message
          </h2>



          {/* Display success message after submit */}
          {success && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 border border-green-300 rounded-lg">

              ✅ Thank you! Your message has been sent successfully.

            </div>
          )}



          {/* Contact form */}
          <form 
            onSubmit={handleSubmit} 
            className="space-y-5"
          >


            {/* Full name input */}
            <div>

              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />

            </div>



            {/* Email, phone, date and service inputs */}
            <div className="grid md:grid-cols-2 gap-5">


              {/* Email field */}
              <div>

                <label className="block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

              </div>



              {/* Phone field */}
              <div>

                <label className="block mb-2 font-medium">
                  Phone
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

              </div>



              {/* Event date field */}
              <div>

                <label className="block mb-2 font-medium">
                  Preferred Event Date
                </label>

                <input
                  type="date"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

              </div>



              {/* Service selection */}
              <div>

                <label className="block mb-2 font-medium">
                  Service Type
                </label>


                <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">

                  <option>Select a Service</option>
                  <option>Wedding Photography</option>
                  <option>Engagement Shoot</option>
                  <option>Baby Photography</option>
                  <option>Family Photography</option>
                  <option>Birthday Event</option>
                  <option>Special Event</option>

                </select>


              </div>



              {/* Submit button */}
              <div className="md:col-span-2">

                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2"
                >

                  <FaPaperPlane />

                  Send Message

                </button>

              </div>


            </div>


          </form>


        </div>


      </div>




      {/* Google Map Location Section */}
      <div className="mt-16">


        <h2 className="text-3xl font-semibold text-center mb-6">
          Find Us
        </h2>



        {/* Embedded Google Map */}
        <div className="rounded-xl overflow-hidden shadow-lg border">

          <iframe
            title="Lumera Weddings Location"
            src="https://www.google.com/maps?q=Matara,Sri+Lanka&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>


        </div>


      </div>


    </div>

  );
}