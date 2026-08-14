import BookingForm from "../components/BookingForm";
import BookingTable from "../components/BookingTable";


// Booking page component
// This page contains booking form and booking details table
export default function Booking() {

  return (

    // Main page container with padding
    <div className="p-8">

      {/* Page heading */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Book a Session
      </h1>


      {/* Booking form component
          Users can enter their booking details here */}
      <BookingForm />


      {/* Add margin-top before booking table */}
      <div className="mt-10">

        {/* Display all booking records */}
        <BookingTable />

      </div>

    </div>
  );
}