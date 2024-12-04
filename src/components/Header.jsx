import { useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md mb-1">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5 py-3">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium text-gray-600">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Products</a>
          <a href="#" className="hover:text-blue-600">About Us</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* Burger Menu */}
        <div className="md:hidden">
          <button
            className="text-blue-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-50 shadow-md">
          <ul className="space-y-4 p-4 text-gray-600 text-lg">
            <li><a href="#" className="block hover:text-blue-600">Home</a></li>
            <li><a href="#" className="block hover:text-blue-600">Products</a></li>
            <li><a href="#" className="block hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="block hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
