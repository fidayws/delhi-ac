import React from 'react';
import { MdPhone, MdEmail, MdLocationPin, MdAccessTime, MdArrowForward } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    { name: 'AC Installation', path: '/services/ac-installation' },
    { name: 'AC Repair', path: '/services/ac-repair' },
    { name: 'AC Maintenance', path: '/services/ac-maintenance' },
    { name: 'AMC Services', path: '/services/amc-services' },
    { name: 'Gas Filling', path: '/services/ac-repair' },
    { name: 'AC Cleaning', path: '/services/ac-maintenance' },
  ];

  const locations = [
    'Mahipalpur', 'Delhi', 'South Delhi', 'Gurgaon'
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Book Service', path: '/contact' },
    { name: 'Careers', path: '/careers' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="text-white max-w-xl text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Stay Cool with Our Updates</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Subscribe to our newsletter for AC maintenance tips, special offers, and expert advice.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary-500 text-sm sm:text-base"
                />
                <button
                  type="submit"
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center text-sm sm:text-base"
                >
                  Subscribe
                  <MdArrowForward className="ml-2" size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <div className="bg-primary-600 p-1.5 sm:p-2 rounded-lg">
                <span className="font-bold text-lg sm:text-xl">AC</span>
              </div>
              <div>
                <h2 className="font-bold text-lg sm:text-xl">Delhi Air Conditioner</h2>
                <p className="text-xs sm:text-sm text-gray-400">Delhi's Trusted AC Experts</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-400">
              Professional AC services with 15+ years of experience. We provide reliable and affordable solutions for all your AC needs.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="font-bold text-base sm:text-lg text-white text-center sm:text-left">Our Services</h3>
            <div className="grid grid-cols-1 gap-2">
              {services.map((service, index) => (
                <Link 
                  key={index}
                  to={service.path}
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center justify-center sm:justify-start"
                >
                  <MdArrowForward className="mr-2" size={14} />
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="font-bold text-base sm:text-lg text-white text-center sm:text-left">Quick Links</h3>
            <div className="grid grid-cols-1 gap-2">
              {quickLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.path}
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center justify-center sm:justify-start"
                >
                  <MdArrowForward className="mr-2" size={14} />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="font-bold text-base sm:text-lg text-white text-center sm:text-left">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <MdPhone className="text-primary-400 mt-1 flex-shrink-0" size={18} />
                <div className="text-center sm:text-left">
                  <p className="text-xs sm:text-sm text-gray-400">24/7 Emergency</p>
                  <a href="tel:+919773754227" className="text-white hover:text-primary-400 transition-colors text-sm sm:text-base">
                    +91-97737 54227
                  </a>
                </div>
              </div>
              
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <MdEmail className="text-primary-400 mt-1 flex-shrink-0" size={18} />
                <div className="text-center sm:text-left">
                  <p className="text-xs sm:text-sm text-gray-400">Email Us</p>
                  <a href="mailto:info@delhiairconditioner.com" className="text-white hover:text-primary-400 transition-colors text-sm sm:text-base break-all">
                    info@delhiairconditioner.com
                  </a>
                </div>
              </div>

              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <MdLocationPin className="text-primary-400 mt-1 flex-shrink-0" size={18} />
                <div className="text-center sm:text-left">
                  <p className="text-xs sm:text-sm text-gray-400">Address</p>
                  <p className="text-white text-sm sm:text-base leading-tight">
                    Shop no 789, Block k2, Tara Chand Colony,<br />
                    K-Block, Mahipalpur Village,<br />
                    Mahipalpur, New Delhi, Delhi 110037
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <MdAccessTime className="text-primary-400 mt-1 flex-shrink-0" size={18} />
                <div className="text-center sm:text-left">
                  <p className="text-xs sm:text-sm text-gray-400">Business Hours</p>
                  <p className="text-white text-sm sm:text-base">Monday - Sunday: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 sm:mt-16 pt-6 sm:pt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-center md:text-left">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} Delhi Air Conditioner. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-3 sm:space-x-4">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;