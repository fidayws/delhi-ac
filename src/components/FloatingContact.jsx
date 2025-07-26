import React, { useState } from 'react';
import { MdPhone, MdWhatsapp, MdLocationPin, MdClose } from 'react-icons/md';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-3 sm:mb-4 w-72 sm:w-80 bg-white rounded-lg shadow-xl p-4 sm:p-6 animate-fade-in text-black max-w-[calc(100vw-2rem)]">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors p-1"
          >
            <MdClose size={20} />
          </button>

          <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4 pr-8">Contact Us</h3>
          
          <div className="space-y-3 sm:space-y-4">
            <a 
              href="tel:+919773754227"
              className="flex items-center space-x-3 p-2.5 sm:p-3 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors group"
            >
              <div className="bg-primary-500 text-black p-2 rounded-full group-hover:bg-primary-600 transition-colors flex-shrink-0">
                <MdPhone size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-gray-600">Call Us Now</p>
                <p className="font-semibold text-primary-600 text-sm sm:text-base">+91-97737 54227</p>
              </div>
            </a>

            <a 
              href="https://wa.me/919773754227?text=Hi! I need AC service in Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-2.5 sm:p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
            >
              <div className="bg-green-500 text-white p-2 rounded-full group-hover:bg-green-600 transition-colors flex-shrink-0">
                <MdWhatsapp size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-gray-600">WhatsApp Us</p>
                <p className="font-semibold text-green-600 text-sm sm:text-base">Send Message</p>
              </div>
            </a>

            <div className="flex items-center space-x-3 p-2.5 sm:p-3 bg-gray-50 rounded-lg">
              <div className="bg-gray-500 text-white p-2 rounded-full flex-shrink-0">
                <MdLocationPin size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-gray-600">Our Location</p>
                <p className="font-semibold text-gray-700 text-xs sm:text-sm leading-tight">Shop no 789, Block k2,<br />Mahipalpur, New Delhi</p>
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-xs sm:text-sm text-gray-500">
              24/7 Emergency Service Available
            </p>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors"
      >
        <MdPhone size={20} className="sm:hidden" />
        <MdPhone size={24} className="hidden sm:block" />
      </button>
    </div>
  );
};

export default FloatingContact;