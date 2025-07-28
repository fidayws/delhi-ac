import React, { useState, useEffect, useRef } from "react";
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
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

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

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  const services = [
    // Air Conditioner Services
    { name: "AC Service", path: "#", category: "AC Services" },
    { name: "AC Gas Fill", path: "#", category: "AC Services" },
    { name: "AC Fitting", path: "#", category: "AC Services" },
    { name: "AC Repair", path: "#", category: "AC Services" },
    { name: "AC Installation", path: "#", category: "AC Services" },
    { name: "AC Maintenance", path: "#", category: "AC Services" },
    { name: "AMC Services", path: "#", category: "AC Services" },
    { name: "Air Conditioner Parts (All Company)", path: "#", category: "AC Services" },
    
    // Refrigerator Services
    { name: "Fridge Repair", path: "#", category: "Refrigerator" },
    { name: "Refrigerator Gas Fill", path: "#", category: "Refrigerator" },
    { name: "Refrigerator Repair", path: "#", category: "Refrigerator" },
    
    // Water Services
    { name: "Water Cooler Gas Fill", path: "#", category: "Water Services" },
    { name: "Water Cooler Repair", path: "#", category: "Water Services" },
    { name: "Water Dispenser Repair & Gas", path: "#", category: "Water Services" },
    
    // Kitchen Appliances
    { name: "Oven Repair", path: "#", category: "Kitchen" },
    { name: "Microwave Oven Repair", path: "#", category: "Kitchen" },
    
    // Washing Machine Services
    { name: "Semi Washing Machine Repair & Service", path: "#", category: "Washing Machine" },
    { name: "Fully Automatic Washing Machine Repair & Service", path: "#", category: "Washing Machine" },
  ];

  // Group services by category
  const servicesByCategory = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {});

  const isActive = (path) => location.pathname === path;

  const handleMouseEnterServices = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeaveServices = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200); // 200ms delay for better UX
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className={`bg-gray-900 text-white py-1.5 sm:py-2 text-sm`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-2">
            <div className="flex items-center text-center sm:text-left w-full sm:w-auto">
              <MdLocationPin size={14} className="mr-1 sm:mr-2 hidden sm:block" />
              <span className="text-xs sm:text-sm truncate">
                Shop no 789, Block k2, Tara Chand Colony, Mahipalpur
              </span>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto justify-center sm:justify-end">
              <a
                href="https://wa.me/919773754227"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-green-400 transition-colors text-xs sm:text-sm"
              >
                <MdWhatsapp size={14} className="mr-1" />
                <span className="hidden xs:inline">WhatsApp</span>
                <span className="xs:hidden">WA</span>
              </a>
              <a
                href="tel:+919773754227"
                className="flex items-center hover:text-blue-400 transition-colors text-xs sm:text-sm"
              >
                <MdPhone size={14} className="mr-1" />
                <span className="whitespace-nowrap">+91-97737 54227</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled ? "py-2 bg-white" : "py-3 sm:py-4 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className={`bg-blue-600 p-1.5 sm:p-2 rounded-lg`}>
                <span className="font-bold text-lg sm:text-xl text-white">AC</span>
              </div>
              <div className="min-w-0">
                <h1
                  className={`font-bold text-lg sm:text-xl ${
                    isScrolled ? "text-gray-900" : "text-white"
                  } drop-shadow-md truncate`}
                >
                  Delhi Air Conditioner
                </h1>
                <p
                  className={`text-xs ${
                    isScrolled ? "text-gray-600" : "text-gray-200"
                  } hidden sm:block`}
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
                      ? "text-blue-600"
                      : "text-white"
                    : isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-blue-400"
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative static"
                onMouseEnter={handleMouseEnterServices}
                onMouseLeave={handleMouseLeaveServices}
              >
                <button
                  className={`flex items-center space-x-1 font-semibold transition-colors ${
                    isScrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white hover:text-blue-400"
                  }`}
                >
                  <span>Services</span>
                  <HiChevronDown size={16} />
                </button>
                {isServicesOpen && (
                  <div className="fixed left-0 right-0 mt-2 bg-white shadow-2xl border border-gray-100 py-4 z-50 mx-auto" style={{top: "auto"}}>
                    <div className="container mx-auto px-4 max-h-[80vh] overflow-y-auto">
                      <Link
                        to="/services"
                        className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors font-bold text-xl border-b border-gray-200 mb-4 text-center"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        All Services
                      </Link>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
                          <div key={category} className="space-y-2 min-w-0">
                            <h3 className="font-bold text-blue-600 text-sm uppercase tracking-wide border-b-2 border-blue-300 pb-2 text-left whitespace-nowrap">
                              {category}
                            </h3>
                            <div className="space-y-1">
                              {categoryServices.map((service) => (
                                <Link
                                  key={service.path}
                                  to={service.path}
                                  className="block px-2 py-1.5 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-md"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className={`font-semibold transition-colors ${
                  isActive("/about")
                    ? isScrolled
                      ? "text-blue-600"
                      : "text-blue-400"
                    : isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-blue-400"
                }`}
              >
                About
              </Link>

              <Link
                to="/contact"
                className={`font-semibold transition-colors ${
                  isActive("/contact")
                    ? isScrolled
                      ? "text-blue-600"
                      : "text-blue-400"
                    : isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-blue-400"
                }`}
              >
                Contact
              </Link>

              <a
                href="tel:+919773754227"
                className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-lg font-medium shadow-md transition-all duration-300 ${
                  isScrolled
                    ? "bg-blue-600 text-black hover:bg-blue-700"
                    : "bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
                }`}
              >
                <MdPhone size={18} />
                <span className="font-semibold text-sm sm:text-base">Call Now</span>
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
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden transition-all duration-300 overflow-hidden bg-white shadow-lg ${
            isOpen ? "h-auto" : "h-0"
          }`}
          style={{ maxHeight: isOpen ? (isMobileServicesOpen ? '70vh' : '50vh') : '0' }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 overflow-y-auto">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`font-semibold py-2 ${
                  isActive("/") ? "text-blue-600" : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <div className="py-2">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={`flex items-center justify-between w-full font-semibold ${
                    isActive("/services") ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  <span>Services</span>
                  <HiChevronDown
                    size={16}
                    className={`transition-transform ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  isMobileServicesOpen ? "max-h-[45vh] pt-2" : "max-h-0"
                }`}>
                  <Link
                    to="/services"
                    className="block py-2 px-3 mb-2 bg-gray-50 rounded font-medium text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    View All Services
                  </Link>
                  
                  <div className="space-y-3 pl-2 overflow-y-auto pb-4" style={{ maxHeight: '40vh' }}>
                    {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
                      <div key={category} className="space-y-1 pb-2 border-b border-gray-100 last:border-0">
                        <h4 className="font-medium text-blue-600 text-sm">{category}</h4>
                        <div className="pl-2 space-y-1">
                          {categoryServices.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              className="block text-gray-600 hover:text-blue-600 text-sm py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className={`font-semibold py-2 ${
                  isActive("/about") ? "text-blue-600" : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                to="/contact"
                className={`font-semibold py-2 ${
                  isActive("/contact") ? "text-blue-600" : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-2 pb-1">
                <a
                  href="tel:+919773754227"
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
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