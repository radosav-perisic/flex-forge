import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/FF.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isArrowRotated, setIsArrowRotated] = useState(false);

  const toggleArrowAndServices = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsArrowRotated((prev) => !prev);
    setServicesOpen((prev) => !prev);
  };

  const closeMenusAndResetArrow = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setIsArrowRotated(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('nav')) {
        closeMenusAndResetArrow();
      }
    };
  
    document.addEventListener("click", handleClickOutside);
  
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  
  useEffect(() => {
    if (!menuOpen) {
      setServicesOpen(false);
      setIsArrowRotated(false);
    }
  }, [menuOpen]);

  const serviceOptions = [
    { name: "Custom Website", route: "/custom-website" },
    { name: "SEO Optimization", route: "/seo-optimization" },
    { name: "Website Redesign", route: "/website-redesign" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent text-white">
      <div className="flex items-center mx-4 justify-between px-6 py-4">
        {/* Start Section: Logo */}
        <Link to="/" className="flex items-center font-bold text-xl gap-x-2 hover:opacity-80 transition-opacity duration-300">
          <img src={logo || "/placeholder.svg"} alt="Logo" className="h-14" />
          <span>FlexForge</span>
        </Link>

        {/* Center Section: Navigation Buttons */}
        <div className="hidden md:flex items-center space-x-12">
          <div className="relative">
            <button
              className="text-xl font-bold hover:text-gray-500 duration-150 flex items-center"
              onClick={toggleArrowAndServices}
            >
              Services
              <span
                className={`ml-1 transition-transform duration-300 ${
                  isArrowRotated ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 bg-black bg-opacity-90 rounded-md py-2 w-48">
                {serviceOptions.map((option, index) => (
                  <Link
                    key={index}
                    to={option.route}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-orange-500 duration-200"
                    onClick={closeMenusAndResetArrow}
                  >
                    {option.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/about-us" className="text-xl font-bold hover:text-gray-500 duration-150">
            About Us
          </Link>
          <Link to="/contact" className="text-xl font-bold hover:text-gray-500 duration-150">
            Contact
          </Link>
        </div>

        {/* End Section: "Hello World" Button */}
        <div className="hidden md:flex items-center">
          <button className="bg-orange-500 text-white font-medium px-4 py-2 sm:px-6 sm:py-2 rounded-md hover:bg-orange-600 duration-200 text-sm sm:text-base">
            hello world
          </button>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className="flex md:hidden items-center cursor-pointer focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 relative">
            <span className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${menuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-2'}`}></span>
            <span className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${menuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-2'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden flex flex-col items-center space-y-4 bg-black bg-opacity-90 py-4 overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="relative w-full text-center">
          <button
            className="text-lg font-medium hover:text-gray-500 duration-150 flex items-center justify-center w-full"
            onClick={toggleArrowAndServices}
          >
            Services
            <span className={`ml-1 transition-transform duration-300 ${isArrowRotated ? "rotate-180" : "rotate-0"}`}>
              ▼
            </span>
          </button>
          <div className={`bg-black bg-opacity-90 py-2 w-full overflow-hidden transition-all duration-300 ease-in-out ${servicesOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
            {serviceOptions.map((option, index) => (
              <Link
                key={index}
                to={option.route}
                className="block w-full text-center px-4 py-2 text-sm hover:bg-orange-500 duration-200"
                onClick={closeMenusAndResetArrow}
              >
                {option.name}
              </Link>
            ))}
          </div>
        </div>
        <Link to="/about-us" className="text-lg font-medium hover:text-gray-500 duration-150 w-full text-center" onClick={closeMenusAndResetArrow}>
          About Us
        </Link>
        <Link to="/contact" className="text-lg font-medium hover:text-gray-500 duration-150 w-full text-center" onClick={closeMenusAndResetArrow}>
          Contact
        </Link>
        <button className="bg-orange-500 text-white font-medium px-4 py-2 rounded-md hover:bg-orange-600 duration-150 w-full max-w-xs">
          hello world
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

