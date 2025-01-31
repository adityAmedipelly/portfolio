import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mx-auto rounded-2xl border border-gray-300 bg-white/80 backdrop-blur-lg px-12 py-5 shadow-lg w-fit">
      <div className="flex justify-center">
        {/* Centered Navigation Links - Only takes necessary space */}
        <nav className="hidden md:flex items-center space-x-20 text-lg font-medium">
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

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md md:hidden ml-4"
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
{/* Mobile Navigation Menu */}
{mobileMenuOpen && (
  <div className="md:hidden bg-white/80 shadow-lg rounded-lg p-4 absolute top-full right-0 w-max">
    <div className="flex flex-col space-y-2">
      <a
        href="#about"
        className="block rounded-md px-6 py-2 text-base font-medium text-gray-700 hover:bg-gray-200"
      >
        Skills
      </a>
      <a
        href="#projects"
        className="block rounded-md px-6 py-2 text-base font-medium text-gray-700 hover:bg-gray-200"
      >
        Projects
      </a>
      <a
        href="#testimonials"
        className="block rounded-md px-6 py-2 text-base font-medium text-gray-700 hover:bg-gray-200"
      >
        Testimonials
      </a>
      <a
        href="#contact"
        className="block rounded-md px-6 py-2 text-base font-medium text-gray-700 hover:bg-gray-200"
      >
        Contact
      </a>
    </div>
  </div>
)}

    </header>
  );
}

export default Navbar;
