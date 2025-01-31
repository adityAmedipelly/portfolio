import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-7xl w-full rounded-2xl border border-gray-300 bg-white/80 backdrop-blur-lg px-4 py-5 shadow-lg">
      <div className="flex items-center justify-between w-full">
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center justify-center space-x-20 text-lg font-medium w-full">
          <a
            href="#about"
            className="relative transition-colors text-gray-700 hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="relative transition-colors text-gray-700 hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Projects
          </a>
          <a
            href="#testimonials"
            className="relative transition-colors text-gray-700 hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="relative transition-colors text-gray-700 hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button (☰) */}
        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#projects"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Projects
            </a>
            <a
              href="#testimonials"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
