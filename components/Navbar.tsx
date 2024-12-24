import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isArrowRotated, setIsArrowRotated] = useState(false);

  const toggleArrowAndServices = () => {
    setIsArrowRotated((prev) => !prev);
    setServicesOpen((prev) => !prev);
  };

  const closeMenusAndResetArrow = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setIsArrowRotated(false);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      closeMenusAndResetArrow();
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const serviceOptions = [
    "Custom Website",
    "SEO Improvement",
    "Website Redesign"
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent  text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Start Section: Logo */}
        <div className="flex items-center w-1/4">
          <img
            src="/path/to/your/logo.png"
            alt="Logo"
            className="h-8 sm:h-10"
          />
        </div>
        
        {/* Center Section: Navigation Buttons */}
        <div className="hidden md:flex items-center justify-center space-x-12 flex-grow">
          <div className="relative">
            <button 
              className="text-xl font-bold hover:text-gray-500 duration-150"
              onClick={(e) => {
                e.stopPropagation(); 
                toggleArrowAndServices();
              }}
            >
              Services <span
        className={`inline-block transition-transform duration-300 ${
          isArrowRotated ? "rotate-90" : "rotate-0"
        }`}
      >
        ➸
      </span>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 bg-black bg-opacity-90 rounded-md py-2 w-48">
                {serviceOptions.map((option, index) => (
                  <button 
                    key={index}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-orange-500 duration-200"
                    onClick={closeMenusAndResetArrow}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="text-xl font-bold hover:text-gray-500 duration-150">About</button>
          <button className="text-xl font-bold hover:text-gray-500 duration-150">Contact</button>
        </div>
        
        {/* End Section: "Hello World" Button */}
        <div className="hidden md:flex items-center justify-end w-1/4">
          <button className="bg-orange-500 text-white font-medium px-4 py-2 sm:px-6 sm:py-2 rounded-md hover:bg-orange-600 duration-200 text-sm sm:text-base">
            hello world
          </button>
        </div>
        
        {/* Hamburger Menu Icon */}
        <div
          className="flex md:hidden items-center cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1">
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-black bg-opacity-90 py-4">
          <div className="relative w-full text-center">
            <button 
              className="text-lg font-medium hover:text-gray-500 duration-150"
              onClick={closeMenusAndResetArrow}
            >
              Services <span className="rotate-90"></span>
            </button>
            {servicesOpen && (
              <div className="bg-black bg-opacity-90 py-2 w-full">
                {serviceOptions.map((option, index) => (
                  <button 
                    key={index}
                    className="block w-full text-center py-2 text-sm hover:bg-orange-500 duration-200"
                    onClick={closeMenusAndResetArrow}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="text-lg font-medium hover:text-gray-500 duration-150">About</button>
          <button className="text-lg font-medium hover:text-gray-500 duration-150">Contact</button>
          <button className="bg-orange-500 text-white font-medium px-4 py-2 rounded-md hover:bg-orange-600 duration-150">
            hello world
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

