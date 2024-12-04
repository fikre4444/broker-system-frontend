const Features = () => {
  return (
    <section className="mt-40 py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
  );
};

export default Features;