import PackageCard from "../components/PackageCard";
import packages from "../data/packages.json";


// Packages page component
// Displays available photography packages
export default function Packages() {


  return (

    // Main section container
    <section className="max-w-7xl mx-auto px-8 py-16">


      {/* Page title */}
      <h1 className="text-4xl font-bold text-center mb-4">
        Our Photography Packages
      </h1>



      {/* Page description */}
      <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">

        Choose the perfect photography package for your special occasion.
        We offer professional photography services tailored to your needs.

      </p>





      {/* Package cards grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


        {/* 
          Loop through packages data
          and create a PackageCard for each package
        */}
        {packages.map((pkg) => (


          <PackageCard

            // Unique key for each package
            key={pkg.id}

            // Pass package title as prop
            title={pkg.title}

            // Pass package price as prop
            price={pkg.price}

            // Pass package description as prop
            description={pkg.description}

          />


        ))}


      </div>


    </section>

  );
}