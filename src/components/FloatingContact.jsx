import React, { useState } from 'react';
import { MdPhone, MdWhatsapp, MdLocationPin, MdClose } from 'react-icons/md';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-4 w-80 bg-white rounded-lg shadow-xl p-6 animate-fade-in text-black">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <MdClose size={24} />
          </button>

          <h3 className="font-bold text-xl text-gray-900 mb-4">Contact Us</h3>
          
          <div className="space-y-4">
            <a 
              href="tel:+919773754227"
              className="flex items-center space-x-3 p-3 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors group"
            >
              <div className="bg-primary-500 text-black p-2 rounded-full group-hover:bg-primary-600 transition-colors">
                <MdPhone size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Call Us Now</p>
                <p className="font-semibold text-primary-600">+91-97737 54227</p>
              </div>
            </a>

            <a 
              href="https://wa.me/919773754227?text=Hi! I need AC service in Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
            >
              <div className="bg-green-500 text-white p-2 rounded-full group-hover:bg-green-600 transition-colors">
                <MdWhatsapp size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-600">WhatsApp Us</p>
                <p className="font-semibold text-green-600">Send Message</p>
              </div>
            </a>

            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="bg-gray-500 text-white p-2 rounded-full">
                <MdLocationPin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Our Location</p>
                <p className="font-semibold text-gray-700">Shop no 789, Block k2,<br />Mahipalpur, New Delhi</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              24/7 Emergency Service Available
            </p>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-600 text-black p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
      >
        <MdPhone size={24} />
      </button>
    </div>
  );
};

export default FloatingContact;