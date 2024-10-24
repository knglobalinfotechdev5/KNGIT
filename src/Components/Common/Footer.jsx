import React from 'react';
import { FooterVid, Logo } from '../../Assets/data';

const Footer = () => {
  const currentHour = new Date().getHours();
  const currentDay = new Date().getDay();

  // Business hours
  const openingHours = {
    0: 'Closed', // Sunday
    1: '09:00 AM – 06:00 PM', // Monday
    2: '09:00 AM – 06:00 PM', // Tuesday
    3: '09:00 AM – 06:00 PM', // Wednesday
    4: '09:00 AM – 06:00 PM', // Thursday
    5: '09:00 AM – 06:00 PM', // Friday
    6: '09:00 AM – 04:00 PM', // Saturday
  };

  const isOpen = currentDay !== 0 && (currentDay !== 6 || currentHour < 16); // Saturday open until 4 PM
  const openingStatus = isOpen ? 'Open Now' : 'Closed';

  return (
    <footer id="footer" className="relative bg-darkblue-default pt-5 w-full">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={FooterVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="mx-auto relative flex flex-col lg:flex-row gap-8 px-4 text-white z-10">
        <div className="flex flex-col lg:flex-row justify-around w-full lg:w-2/3">
          {/* Logo and About Section */}
          <div className="w-full lg:w-1/2 mb-6">
            <a href="index.html">
              <img
                src={Logo}
                alt="Company Logo"
                className="img-fluid logo-footer max-w-xs"
              />
            </a>
            <div className="footer-about mt-4">
              <p className="text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>
          </div>

          {/* Business Hours Section */}
          <div className="mt-8">
            <h4 className="text-lg font-semibold">Business Hours</h4>
            <ul className="list-none text-white mt-4">
              <li>Mon: 09:00 AM – 06:00 PM</li>
              <li>Tue: 09:00 AM – 06:00 PM</li>
              <li>Wed: 09:00 AM – 06:00 PM</li>
              <li>Thu: 09:00 AM – 06:00 PM</li>
              <li>Fri: 09:00 AM – 06:00 PM</li>
              <li>Sat: 09:00 AM – 04:00 PM</li>
              <li>{openingStatus}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between w-full lg:w-1/3 px-4 gap-8">
          {/* Useful Links Section */}
          <div className="w-full mb-6">
            <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
            <div className="use-links">
              <ul className="list-none space-y-2">
                <li><a href="index.html" className="text-white hover:text-blue-400">Home</a></li>
                <li><a href="about.html" className="text-white hover:text-blue-400">About Us</a></li>
                <li><a href="gallery.html" className="text-white hover:text-blue-400">Gallery</a></li>
                <li><a href="contact.html" className="text-white hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="w-full mb-6">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="social-icons">
              <ul className="list-none flex flex-col space-y-2">
                <li><a href="#" className="text-white hover:text-blue-400"><i className="fa-brands fa-facebook-f"></i> Facebook</a></li>
                <li><a href="#" className="text-white hover:text-blue-400"><i className="fa-brands fa-instagram"></i> Instagram</a></li>
                <li><a href="#" className="text-white hover:text-blue-400"><i className="fa-brands fa-linkedin-in"></i> LinkedIn</a></li>
              </ul>
            </div>
          </div>

          {/* Address Section */}
          <div className="w-full mb-6">
            <h2 className="text-lg font-semibold mb-4">Address</h2>
            <div className="address-links">
              <ul className="list-none">
                <li className="address1 flex items-center text-white"><i className="fa-solid fa-location-dot mr-2"></i> Kolathur Ramankulam - Malappuram Dt, Kerala 679338</li>
                <li><a href="#" className="text-white hover:text-blue-400"><i className="fa-solid fa-phone mr-2"></i> +91 90904500112</a></li>
                <li><a href="#" className="text-white hover:text-blue-400"><i className="fa-solid fa-envelope mr-2"></i> mail@1234567.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section id="copy-right">
        <div className="copy-right-sec bg-darkblue-default text-white text-center py-6">
          <i className="fa-solid fa-copyright"></i>
          2024 KN GLOBAL INFOTECH. All rights reserve.
        </div>
      </section>
    </footer>
  );
};

export default Footer;
