import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-linear-to-r from-gray-50 to-gray-100 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Name */}
          <div className="shrink-0 text-2xl font-bold text-blue-600">
            Meeeee
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#blog" className="text-gray-700 hover:text-blue-600 transition">Blog</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition">Portfolio</a>
            <a href="#resume" className="text-gray-700 hover:text-blue-600 transition">Resume</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 px-6 pb-4 space-y-2 shadow-md">
          <a href="#about" className="block text-gray-700 hover:text-blue-600 transition">About</a>
          <a href="#blog" className="block text-gray-700 hover:text-blue-600 transition">Blog</a>
          <a href="#portfolio" className="block text-gray-700 hover:text-blue-600 transition">Portfolio</a>
          <a href="#resume" className="block text-gray-700 hover:text-blue-600 transition">Resume</a>
          <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Header;
