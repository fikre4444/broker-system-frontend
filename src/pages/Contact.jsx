import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen py-4 bg-gradient-to-r from-blue-400 to-green-400 flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl p-8">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-blue-600">Contact Us</h1>
        <p className="text-gray-600 text-center mt-2">
          We'd love to hear from you! Reach out to us for any inquiries, support, or feedback.
        </p>

        {/* About Us Section */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-center text-blue-600">About Us</h2>
          <p className="text-gray-600 text-center mt-4">
            Axumawit Broker is a trusted platform connecting buyers and sellers of houses, land, and animals. 
            With a mission to make property transactions seamless and transparent, we’ve helped over 
            <span className="text-blue-600 font-bold"> 50,000+ customers </span> find their perfect match.
          </p>
          <p className="text-gray-600 text-center mt-2">
            Our team is dedicated to providing exceptional service by leveraging cutting-edge technology and 
            deep market insights to create opportunities for everyone. Whether you're looking to buy or sell, 
            we're here to make the process effortless and efficient.
          </p>
        </div>

        {/* Contact Information and Form */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-600">Our Office</h2>
            <p className="mt-2 text-gray-600">
              Romanat, Mekelle, Ethiopia
            </p>
            <p className="mt-1 text-gray-600">
              Email: <a href="mailto:support@axumawit.com" className="text-blue-600 hover:underline">support@axumawit.com</a>
            </p>
            <p className="mt-1 text-gray-600">
              Phone: <a href="tel:+251123456789" className="text-blue-600 hover:underline">+251911228093</a>
            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8">Working Hours</h2>
            <p className="mt-2 text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p className="mt-1 text-gray-600">Saturday: 10:00 AM - 3:00 PM</p>
            <p className="mt-1 text-gray-600">Sunday: Closed</p>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-600">Send Us a Message</h2>
            <form className="mt-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
