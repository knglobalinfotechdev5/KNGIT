import React from 'react';
import { Logo } from "../../Assets/data";
import { Link } from 'react-router-dom';
import FbAnimation from '../../Assets/Lottifile/Fb-Ani.json'
import InstaAnimation from '../../Assets/Lottifile/Insta-Ani.json'
import LinkedinAnimation from '../../Assets/Lottifile/Linkedin-Ani.json'
import LottieAnimation from '../../AnimationIcons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
          <Link  to="/"><img className="w-[90px] h-[50px] rounded-md" src={Logo} alt="logo" /></Link>
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
          <div className="mb-6 mr-3 md:mb-0">
            <h2 className="mb-1">Follow Us</h2>
            <div className="flex">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <LottieAnimation animationData={FbAnimation} ClassStyle={'h-[40px] w-[50px]'}/>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <LottieAnimation animationData={InstaAnimation} ClassStyle={'h-[40px] w-[50px]'}/>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <LottieAnimation animationData={LinkedinAnimation} ClassStyle={'h-[40px] w-[50px]'}/>
              </a>
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
