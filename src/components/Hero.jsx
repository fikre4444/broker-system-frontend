import React from "react";

const Hero = () => {
  return (
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
        <img
          src="/path-to-hero-image.png"
          alt="Hero"
          className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
