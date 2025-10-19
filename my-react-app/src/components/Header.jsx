import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  // Smooth scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setNavOpen(false); // close mobile menu after click
  };

  return (
    <header className="bg-gray-800 text-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer" onClick={() => handleScroll("home")}>
          Aaditya Tech
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <button onClick={() => handleScroll("home")} className="hover:text-gray-200">Home</button>
          <button onClick={() => handleScroll("services")} className="hover:text-gray-200">Service</button>
          <button onClick={() => handleScroll("about")} className="hover:text-gray-200">AboutUs</button>
          <button onClick={() => handleScroll("contact")} className="hover:text-gray-200">ContactUs</button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden cursor-pointer" onClick={toggleNav}>
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 pb-4">
          <button onClick={() => handleScroll("home")} className="block py-2 border-b border-white w-full text-left">Home</button>
          <button onClick={() => handleScroll("services")} className="block py-2 border-b border-white w-full text-left">Service</button>
          <button onClick={() => handleScroll("about")} className="block py-2 border-b border-white w-full text-left">AboutUs</button>
          <button onClick={() => handleScroll("contact")} className="block py-2 w-full text-left">ContactUs</button>
        </div>
      )}
    </header>
  );
};

export default Header;
