import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <header className="bg-gray-800 text-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">Aaditya Tech</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-200">Home</a>
          <a href="#" className="hover:text-gray-200">Service</a>
          <a href="#" className="hover:text-gray-200">AboutUs</a>
          <a href="#" className="hover:text-gray-200">ContactUs</a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden cursor-pointer" onClick={toggleNav}>
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 pb-4">
          <a href="#" className="block py-2 border-b border-white">Home</a>
          <a href="#" className="block py-2 border-b border-white">Service</a>
          <a href="#" className="block py-2 border-b border-white">AboutUs</a>
          <a href="#" className="block py-2">ContactUs</a>
        </div>
      )}
    </header>
  );
};

export default Header;
