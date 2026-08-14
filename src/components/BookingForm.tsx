import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Defines validation rules for the booking form
const validationSchema = Yup.object({
  // Name is required
  name: Yup.string().required("Name is required"),

  // Email must be valid and is required
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  // Phone number must start with 0 and contain 10 digits
  phone: Yup.string()
    .matches(/^0\d{9}$/, "Enter a valid 10-digit phone number")
    .required("Phone number is required"),

  // Event date is required
  eventDate: Yup.string()
    .required("Event date is required"),

  // A photography package must be selected
  packageType: Yup.string()
    .required("Please select a package"),
});

export default function BookingForm() {
  return (
    <Formik
      // Sets the initial values for all form fields
      initialValues={{
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        packageType: "",
        location: "",
        message: "",
      }}

      // Connects the Yup validation schema to Formik
      validationSchema={validationSchema}

      // Handles form submission
      onSubmit={(values, { resetForm }) => {
        // Displays submitted values in the browser console
        console.log(values);

        // Shows a success message after submission
        alert("Booking Submitted Successfully!");

        // Clears all form fields after submission
        resetForm();
      }}
    >
      {/* Main booking form */}
      <Form
        className="
          max-w-md
          mx-auto
          p-8
          space-y-4
          bg-white
          dark:bg-gray-800
          rounded-xl
          shadow-lg
          border
          border-gray-200
          dark:border-gray-700
        "
      >
        {/* Customer name input */}
        <Field
          name="name"
          placeholder="Your Name"
          className="
            w-full
            border
            border-gray-300
            dark:border-gray-600
            rounded-lg
            p-3
            bg-white
            dark:bg-gray-700
            text-black
            dark:text-white
            focus:outline-none
            focus:ring-2
            focus:ring-amber-500
          "
        />

        {/* Displays validation error for the name field */}
        <ErrorMessage
          name="name"
          component="p"
          className="text-red-500"
        />

        {/* Customer email input */}
        <Field
          name="email"
          type="email"
          placeholder="Your Email"
          className="
            w-full
            border
            border-gray-300
            dark:border-gray-600
            rounded-lg
            p-3
            bg-white
            dark:bg-gray-700
            text-black
            dark:text-white
            focus:outline-none
            focus:ring-2
            focus:ring-amber-500
          "
        />

        {/* Displays validation error for the email field */}
        <ErrorMessage
          name="email"
          component="p"
          className="text-red-500"
        />

        {/* Customer phone number input */}
        <Field
          name="phone"
          type="tel"
          placeholder="Phone Number"
          maxLength={10}
          className="
            w-full
            border
            border-gray-300
            dark:border-gray-600
            rounded-lg
            p-3
            bg-white
            dark:bg-gray-700
            text-black
            dark:text-white
            focus:outline-none
            focus:ring-2
            focus:ring-amber-500
          "
        />

        {/* Displays validation error for the phone number */}
        <ErrorMessage
          name="phone"
          component="p"
          className="text-red-500"
        />

        {/* Event date input */}
        <Field
          name="eventDate"
          type="date"
          className="
            w-full
            border
            border-gray-300
            dark:border-gray-600
            rounded-lg
            p-3
            bg-white
            dark:bg-gray-700
            text-black
            dark:text-white
            focus:outline-none
            focus:ring-2
            focus:ring-amber-500
          "
        />

        {/* Displays validation error for the event date */}
        <ErrorMessage
          name="eventDate"
          component="p"
          className="text-red-500"
        />

        {/* Photography package selection */}
        <Field
          as="select"
          name="packageType"
          className="
            w-full
            border
            border-gray-300
            dark:border-gray-600
            rounded-lg
            p-3
            bg-white
            dark:bg-gray-700
            text-black
            dark:text-white
            focus:outline-none
            focus:ring-2
            focus:ring-amber-500
          "
        >
          {/* Default package option */}
          <option value="">Select Package</option>

          {/* Available photography packages */}
          <option value="Wedding Photography">
            Wedding Photography
          </option>

          <option value="Engagement Shoot">
            Engagement Shoot
          </option>

          <option value="Baby Photography">
            Baby Photography
          </option>

          <option value="Family Photography">
            Family Photography
          </option>

          <option value="Birthday Event">
            Birthday Event
          </option>

          <option value="Special Event">
            Special Event
          </option>
        </Field>

        {/* Displays validation error for the package selection */}
        <ErrorMessage
          name="packageType"
          component="p"
          className="text-red-500"
        />

        {/* Submits the booking form */}
        <button
          type="submit"
          className="
            w-full
            bg-black
            dark:bg-white
            dark:text-black
            text-white
            py-3
            rounded-lg
            font-semibold
          "
        >
          Book Now
        </button>
      </Form>
    </Formik>
  );
}