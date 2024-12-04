import land from '../assets/land.jpg';
import house from '../assets/house.jpeg';
import cattle from '../assets/cattle.jpg';
import { BsFillHouseDoorFill } from "react-icons/bs";
import { MdOutlineLandscape } from "react-icons/md";
import { PiCowDuotone } from "react-icons/pi";

const Features = () => {
  return (
    <section className="py-3 bg-gray-100">
      <h1 className="text-center text-3xl font-bold text-blue-500">Services</h1>
      <div className="py-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Houses */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          {/* <img src={house} alt="Houses" className="h-32 mx-auto mb-4" /> */}
          <BsFillHouseDoorFill size={120} className="text-blue-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-blue-600">Houses</h2>
          <p className="mt-2 text-gray-600">Find the perfect home or list your property for buyers to discover.</p>
        </div>
        {/* Land */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          {/* <img src={land} alt="Land" className="h-32 mx-auto mb-4" /> */}
          <MdOutlineLandscape size={120} className="text-blue-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-blue-600">Land</h2>
          <p className="mt-2 text-gray-600">Explore fertile lands and plots for all your needs.</p>
        </div>
        {/* Animals */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          {/* <img src={cattle} alt="Animals" className="h-32 mx-auto mb-4" /> */}
          <PiCowDuotone size={120} className="text-blue-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-blue-600">Animals</h2>
          <p className="mt-2 text-gray-600">Connect with buyers and sellers for livestock and poultry.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;