import hero from '../assets/hero2.jpg'

const Hero = () => {
  return (
    <section className="relative text-center py-20 bg-gradient-to-r from-blue-500 to-green-400 text-white">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
    {/* Text Content */}
    <div className="md:w-1/2 mb-10 md:mb-0">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        Find Your Perfect Match
      </h1>
      <p className="mt-4 text-lg">
        Whether you're buying or selling, Axumawit connects you to the right people. 
        Explore houses, land, and animals with ease.
      </p>
      <div className="mt-4 flex gap-3 justify-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-green-600 bg-white shadow-md bg-opacity-50 p-1 rounded-md">3M+ Sales</h1>
          {/* <p className="text-gray-500 font-semibold">We have generated a sales of above 3M birr.</p> */}
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-green-600 bg-white shadow-md bg-opacity-50 p-1 rounded-md">50K+ Customers</h1>
          {/* <p className="text-gray-500 font-semibold">We have generated a lot of services to our above 50K customers.</p> */}
        </div>
      </div>
      <button className="mt-6 bg-white text-blue-600 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition-all">
        Check out products
      </button>
    </div>

    {/* Image Content */}
    <div className="md:w-1/2">
      <div className="flex justify-center">
        <img 
          src={hero} 
          alt="Hero Section" 
          className="rounded-tl-[45%] rounded-br-[55%] shadow-lg opacity-90 h-[400px]"
        />
      </div>
    </div>
  </div>
</section>

  );
};

export default Hero;
