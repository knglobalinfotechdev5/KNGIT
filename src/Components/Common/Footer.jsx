import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">YourCompany</h1>
            <p className="mt-2">Your tagline or description goes here. A brief overview of your business.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row mb-6 md:mb-0">
            <div className="mr-8">
              <h2 className="font-semibold mb-2">Quick Links</h2>
              <ul>
                <li><a href="/about" className="hover:underline">About Us</a></li>
                <li><a href="/services" className="hover:underline">Services</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
                <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-6 md:mb-0">
            <h2 className="font-semibold mb-2">Contact Us</h2>
            <p>Email: info@yourcompany.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>

          {/* Social Media Links */}
          <div className="mb-6 md:mb-0">
            <h2 className="font-semibold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
