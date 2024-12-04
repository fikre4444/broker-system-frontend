const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/path-to-logo.png" alt="Website Logo" className="h-10 w-10" />
            <span className="ml-3 text-2xl font-bold text-blue-600">Brokerly</span>
          </div>
          {/* Navigation */}
          <nav>
            <ul className="flex space-x-6 text-lg font-medium text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Home</li>
              <li className="hover:text-blue-600 cursor-pointer">Products</li>
              <li className="hover:text-blue-600 cursor-pointer">About Us</li>
              <li className="hover:text-blue-600 cursor-pointer">Contact</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-center py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold">Find Your Perfect Match</h1>
          <p className="mt-4 text-lg">
            Whether you're buying or selling, Brokerly connects you to the right people. Explore houses, land, and animals
            with ease.
          </p>
          <button className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200">
            Get Started
          </button>
        </div>
        {/* Hero Image */}
        <div className="absolute inset-x-0 bottom-0 translate-y-1/2">
          <img src="/path-to-hero-image.png" alt="Hero" className="w-full max-w-4xl mx-auto rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-40 py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Houses */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img src="/path-to-houses-image.png" alt="Houses" className="h-32 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-blue-600">Houses</h2>
            <p className="mt-2 text-gray-600">Find the perfect home or list your property for buyers to discover.</p>
          </div>
          {/* Land */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img src="/path-to-land-image.png" alt="Land" className="h-32 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-blue-600">Land</h2>
            <p className="mt-2 text-gray-600">Explore fertile lands and plots for all your needs.</p>
          </div>
          {/* Animals */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img src="/path-to-animals-image.png" alt="Animals" className="h-32 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-blue-600">Animals</h2>
            <p className="mt-2 text-gray-600">Connect with buyers and sellers for livestock and poultry.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-lg font-semibold">Stay Connected</h3>
          <p className="mt-2 text-gray-200">Join us in creating a better marketplace for everyone.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">Instagram</a>
          </div>
          <p className="mt-4 text-sm text-gray-300">© 2024 Brokerly. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
