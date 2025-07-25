import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import {
  MdPhone,
  MdLocationPin,
  MdAccessTime,
  MdWhatsapp,
} from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        setIsScrolled(window.scrollY > 50);
      } else {
        setIsScrolled(true); // Force solid header for all other pages
      }
    };

    // Initial check in case not on home
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const services = [
    { name: "AC Installation", path: "/services/ac-installation" },
    { name: "AC Repair", path: "/services/ac-repair" },
    { name: "AC Maintenance", path: "/services/ac-maintenance" },
    { name: "AMC Services", path: "/services/amc-services" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className={`bg-gray-900 text-white py-2 text-sm`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex items-center text-center sm:text-left w-full sm:w-auto">
              <MdLocationPin size={16} className="mr-2 hidden sm:block" />
              <span className="text-xs sm:text-sm">
                Shop no 789, Block k2, Tara Chand Colony, Mahipalpur
              </span>
            </div>
            <div className="flex items-center space-x-4 w-full sm:w-auto justify-center sm:justify-end">
              <a
                href="https://wa.me/919773754227"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-green-400 transition-colors text-xs sm:text-sm"
              >
                <MdWhatsapp size={16} className="mr-1" />
                WhatsApp
              </a>
              <a
                href="tel:+919773754227"
                className="flex items-center hover:text-primary-400 transition-colors text-xs sm:text-sm"
              >
                <MdPhone size={16} className="mr-1" />
                +91-97737 54227
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled ? "py-2 bg-white" : "py-4 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className={`bg-primary-600 p-2 rounded-lg`}>
                <span className="font-bold text-xl text-white">AC</span>
              </div>
              <div>
                <h1
                  className={`font-bold text-xl ${
                    isScrolled ? "text-gray-900" : "text-white"
                  } drop-shadow-md`}
                >
                  Delhi Air Conditioner
                </h1>
                <p
                  className={`text-xs ${
                    isScrolled ? "text-gray-600" : "text-gray-200"
                  }`}
                >
                  Delhi's Trusted AC Experts
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`font-semibold transition-colors ${
                  isActive("/")
                    ? isScrolled
                      ? "text-primary-600"
                      : "text-primary-400"
                    : isScrolled
                    ? "text-gray-700 hover:text-primary-600"
                    : "text-white hover:text-primary-400"
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className={`flex items-center space-x-1 font-semibold transition-colors ${
                    isScrolled
                      ? "text-gray-700 hover:text-primary-600"
                      : "text-white hover:text-primary-400"
                  }`}
                >
                  <span>Services</span>
                  <HiChevronDown size={16} />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors font-medium"
                    >
                      All Services
                    </Link>
                    <div className="border-t border-gray-100 my-2"></div>
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className={`font-semibold transition-colors ${
                  isActive("/about")
                    ? isScrolled
                      ? "text-primary-600"
                      : "text-primary-400"
                    : isScrolled
                    ? "text-gray-700 hover:text-primary-600"
                    : "text-white hover:text-primary-400"
                }`}
              >
                About
              </Link>

              <Link
                to="/contact"
                className={`font-semibold transition-colors ${
                  isActive("/contact")
                    ? isScrolled
                      ? "text-primary-600"
                      : "text-primary-400"
                    : isScrolled
                    ? "text-gray-700 hover:text-primary-600"
                    : "text-white hover:text-primary-400"
                }`}
              >
                Contact
              </Link>

              <a
                href="tel:+919773754227"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium shadow-md transition-all duration-300 ${
                  isScrolled
                    ? "bg-primary-600 text-primary-600 hover:bg-primary-700"
                    : "bg-white text-primary-600 hover:bg-gray-100 shadow-lg"
                }`}
              >
                <MdPhone size={20} />
                <span className="font-semibold">Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-gray-600 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isOpen ? "max-h-screen" : "max-h-0"
          } overflow-hidden bg-white`}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`font-semibold ${
                  isActive("/") ? "text-primary-600" : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <div className="space-y-2">
                <Link
                  to="/services"
                  className={`font-semibold ${
                    isActive("/services") ? "text-primary-600" : "text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block text-gray-600 hover:text-primary-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/about"
                className={`font-semibold ${
                  isActive("/about") ? "text-primary-600" : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                to="/contact"
                className={`font-semibold ${
                  isActive("/contact") ? "text-primary-600" : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4 border-t border-gray-100">
                <a
                  href="tel:+919773754227"
                  className="flex items-center justify-center space-x-2 bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <MdPhone size={20} />
                  <span className="font-semibold">Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
