import React from "react";
import img from '../assets/footer-img.png';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-black text-white mt-auto pt-10">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={img}
          alt="Footer background"
          className="absolute w-full h-full object-cover object-bottom min-h-[200%] sm:min-h-[100%]"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="text-sm">
            <li className="mb-2">
              <a href="/" className="hover:text-gray-300 transition-colors">Home</a>
            </li>
            <li className="mb-2">
              <a href="/services" className="hover:text-gray-300 transition-colors">Services</a>
            </li>
            <li className="mb-2">
              <a href="/portfolio" className="hover:text-gray-300 transition-colors">Portfolio</a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:text-gray-300 transition-colors">Contact</a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 mt-8 sm:mt-0">
          <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-2xl hover:text-gray-300 transition-colors" aria-label="Instagram">
              📷
            </a>
            <a href="#" className="text-2xl hover:text-gray-300 transition-colors" aria-label="Email">
              ✉️
            </a>
          </div>
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-4 text-center text-sm mt-8">
        <p>
          &copy; {new Date().getFullYear()} FlexForge. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

