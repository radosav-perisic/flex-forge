import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-transparent text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        
        {/* Start Section: Logo */}
        <div className="flex items-center">
          <img
            src="/path/to/your/logo.png"
            alt="Logo"
            className="h-8 sm:h-10"
          />
        </div>
        
        {/* Center Section: Navigation Buttons */}
        <div className="hidden md:flex items-center space-x-28">
          <button className="text-2xl font-bold hover:text-orange-400 duration-200">Home</button>
          <button className="text-2xl font-bold hover:text-orange-400 duration-200">About</button>
          <button className="text-2xl font-bold hover:text-orange-400 duration-200">Contact</button>
        </div>
        
        {/* End Section: "Hello World" Button */}
        <div className="hidden md:flex items-center">
          <button className="bg-orange-500 text-white font-medium px-4 py-2 sm:px-8 sm:py-3 rounded-md hover:bg-orange-600 duration-200">
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
        <div className="md:hidden flex flex-col items-center space-y-4 bg-gray-900 py-4">
          <button className="text-lg font-medium hover:text-orange-400 duration-200">Home</button>
          <button className="text-lg font-medium hover:text-orange-400 duration-200">About</button>
          <button className="text-lg font-medium hover:text-orange-400 duration-200">Contact</button>
          <button className="bg-orange-500 text-white font-medium px-4 py-2 rounded-md hover:bg-orange-600 duration-200">
            hello world
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
