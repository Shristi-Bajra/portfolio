import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavLink from './NavLink';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 focus:outline-none text-foreground hover:text-teal-500 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-lg p-4 animate-fade-in">
          <div className="flex flex-col space-y-2">
            <NavLink href="#about" className="w-full">About</NavLink>
            <NavLink href="#skills" className="w-full">Skills</NavLink>
            <NavLink href="#projects" className="w-full">Projects</NavLink>
            <NavLink href="#contact" className="w-full">Contact</NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;