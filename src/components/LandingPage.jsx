// const LandingPage = () => {
//   return (
//     <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
//       {/* Header Section */}
//       <header className="bg-white shadow-md">
//         <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
//           {/* Logo */}
//           <div className="flex items-center">
//             <img src="/path-to-logo.png" alt="Website Logo" className="h-10 w-10" />
//             <span className="ml-3 text-2xl font-bold text-blue-600">Axumawit</span>
//           </div>
//           {/* Navigation */}
//           <nav>
//             <ul className="flex space-x-6 text-lg font-medium text-gray-600">
//               <li className="hover:text-blue-600 cursor-pointer">Home</li>
//               <li className="hover:text-blue-600 cursor-pointer">Products</li>
//               <li className="hover:text-blue-600 cursor-pointer">About Us</li>
//               <li className="hover:text-blue-600 cursor-pointer">Contact</li>
//             </ul>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative text-center py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
//         <div className="max-w-3xl mx-auto">
//           <h1 className="text-4xl md:text-6xl font-extrabold">Find Your Perfect Match</h1>
//           <p className="mt-4 text-lg">
//             Whether you're buying or selling, Axumawit connects you to the right people. Explore houses, land, and animals
//             with ease.
//           </p>
//           <button className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200">
//             Get Started
//           </button>
//         </div>
//         {/* Hero Image */}
//         <div className="absolute inset-x-0 bottom-0 translate-y-1/2">
//           <img src="/path-to-hero-image.png" alt="Hero" className="w-full max-w-4xl mx-auto rounded-lg shadow-lg" />
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="mt-40 py-20 bg-gray-100">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Houses */}
//           <div className="bg-white rounded-lg shadow-lg p-6 text-center">
//             <img src="/path-to-houses-image.png" alt="Houses" className="h-32 mx-auto mb-4" />
//             <h2 className="text-2xl font-semibold text-blue-600">Houses</h2>
//             <p className="mt-2 text-gray-600">Find the perfect home or list your property for buyers to discover.</p>
//           </div>
//           {/* Land */}
//           <div className="bg-white rounded-lg shadow-lg p-6 text-center">
//             <img src="/path-to-land-image.png" alt="Land" className="h-32 mx-auto mb-4" />
//             <h2 className="text-2xl font-semibold text-blue-600">Land</h2>
//             <p className="mt-2 text-gray-600">Explore fertile lands and plots for all your needs.</p>
//           </div>
//           {/* Animals */}
//           <div className="bg-white rounded-lg shadow-lg p-6 text-center">
//             <img src="/path-to-animals-image.png" alt="Animals" className="h-32 mx-auto mb-4" />
//             <h2 className="text-2xl font-semibold text-blue-600">Animals</h2>
//             <p className="mt-2 text-gray-600">Connect with buyers and sellers for livestock and poultry.</p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-blue-600 text-white py-8">
//         <div className="max-w-7xl mx-auto text-center">
//           <h3 className="text-lg font-semibold">Stay Connected</h3>
//           <p className="mt-2 text-gray-200">Join us in creating a better marketplace for everyone.</p>
//           <div className="flex justify-center space-x-4 mt-4">
//             <a href="#" className="hover:underline">Facebook</a>
//             <a href="#" className="hover:underline">Twitter</a>
//             <a href="#" className="hover:underline">Instagram</a>
//           </div>
//           <p className="mt-4 text-sm text-gray-300">© 2024 Axumawit. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;


import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="path_to_logo"
              alt="Logo"
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-bold text-blue-600 ml-2">
              BrokerApp
            </span>
          </div>
          {/* Navigation Links */}
          <nav>
            <ul className="flex space-x-6 text-gray-600">
              <li className="hover:text-blue-600">Home</li>
              <li className="hover:text-blue-600">Products</li>
              <li className="hover:text-blue-600">About</li>
              <li className="hover:text-blue-600">Contact</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-75"></div>
        <div className="relative container mx-auto p-12 text-white">
          <h1 className="text-5xl font-bold mb-4">
            Your One-Stop Broker for Houses, Land, and Livestock
          </h1>
          <p className="text-2xl mb-8">
            Find what you're looking for or sell your products with ease.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          What We Offer
        </h2>
        <div className="flex flex-wrap -mx-4">
          {/* House */}
          <div className="w-full md:w-1/3 px-4 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img
                src="path_to_house_image"
                alt="House"
                className="w-full mb-6 rounded-lg"
              />
              <h3 className="text-2xl font-bold mb-2">Houses</h3>
              <p className="text-gray-600">
                Find your dream home or list your property with us.
              </p>
            </div>
          </div>
          {/* Land */}
          <div className="w-full md:w-1/3 px-4 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img
                src="path_to_land_image"
                alt="Land"
                className="w-full mb-6 rounded-lg"
              />
              <h3 className="text-2xl font-bold mb-2">Land</h3>
              <p className="text-gray-600">
                Explore available land parcels for your next project.
              </p>
            </div>
          </div>
          {/* Animals */}
          <div className="w-full md:w-1/3 px-4 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img
                src="path_to_animals_image"
                alt="Animals"
                className="w-full mb-6 rounded-lg"
              />
              <h3 className="text-2xl font-bold mb-2">Animals</h3>
              <p className="text-gray-600">
                Buy or sell high-quality livestock with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="flex flex-wrap justify-center">
            {/* Feature 1 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-blue-600 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <div>
                  <h3 className="text-xl font-bold">Easy Search</h3>
                  <p className="text-gray-600">
                    Find listings quickly with our powerful search tools.
                  </p>
                </div>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-blue-600 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2h14z"
                  />
                </svg>
                <div>
                  <h3 className="text-xl font-bold">Secure Transactions</h3>
                  <p className="text-gray-600">
                    We ensure safe and secure transactions for all users.
                  </p>
                </div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-blue-600 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <div>
                  <h3 className="text-xl font-bold">Wide Variety</h3>
                  <p className="text-gray-600">
                    Choose from a wide range of listings to suit your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="flex flex-wrap justify-center">
          {/* Testimonial 1 */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">
                "I found my perfect home through this platform. The process was
                smooth and hassle-free."
              </p>
              <div className="flex items-center">
                <img
                  src="path_to_profile_image"
                  alt="User"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <span className="font-bold">John Doe</span>
                  <span className="text-gray-400 text-sm">- Happy Buyer</span>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">
                "Selling my land was easier than I thought. Thank you!"
              </p>
              <div className="flex items-center">
                <img
                  src="path_to_profile_image"
                  alt="User"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <span className="font-bold">Jane Smith</span>
                  <span className="text-gray-400 text-sm">- Satisfied Seller</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div>
            <img
              src="path_to_logo"
              alt="Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-bold ml-2">BrokerApp</span>
          </div>
          {/* Social Links */}
          <div>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 mx-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V8a2 2 0 00-2-2h-4"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 mx-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-14a2 2 0 01-2-2v-6a2 2 0 012-2h2"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 mx-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m4.5-4.5V9m9 18l-6-6"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;