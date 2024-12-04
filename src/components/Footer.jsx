import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-green-300 text-white py-8">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-lg font-semibold">Stay Connected</h3>
        <p className="mt-2 text-gray-200">Join us in creating a better marketplace for everyone.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
        <p className="mt-4 text-sm text-gray-300">© 2024 AxumawitBroker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
