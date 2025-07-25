import React from 'react';
import { MdCheckCircle, MdThermostat, MdAccessTime, MdSecurity, MdStar, MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ACInstallation = () => {
  const installationTypes = [
    {
      type: "Split AC Installation",
      price: "₹2,500 - ₹4,000",
      features: ["Indoor & outdoor unit setup", "Copper piping", "Electrical connection", "Gas charging"]
    },
    {
      type: "Window AC Installation",
      price: "₹1,500 - ₹2,500",
      features: ["Wall mounting", "Proper sealing", "Electrical connection", "Testing & commissioning"]
    },
    {
      type: "Cassette AC Installation",
      price: "₹5,000 - ₹8,000",
      features: ["Ceiling mounting", "Ducting work", "Professional wiring", "Complete setup"]
    },
    {
      type: "Central AC Installation",
      price: "₹15,000 - ₹50,000",
      features: ["Complete system design", "Ducting installation", "Zoning setup", "Control systems"]
    }
  ];

  const process = [
    {
      step: 1,
      title: "Free Site Survey",
      description: "Our expert visits your location to assess the space and recommend the best AC placement."
    },
    {
      step: 2,
      title: "Quote & Planning",
      description: "We provide transparent pricing and plan the installation process with you."
    },
    {
      step: 3,
      title: "Professional Installation",
      description: "Our certified technicians install your AC using proper tools and techniques."
    },
    {
      step: 4,
      title: "Testing & Handover",
      description: "Complete testing, demonstration, and 1-year warranty activation."
    }
  ];

  const brands = [
    "LG", "Samsung", "Daikin", "Voltas", "Hitachi", "Carrier",
    "Blue Star", "Godrej", "Whirlpool", "Panasonic"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Professional AC Installation Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert AC installation services with 1-year warranty and same-day installation 
              across Delhi NCR.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a 
                href="tel:+919876543210" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-lg font-semibold"
              >
                Book Installation: +91-9876543210
              </a>
              <a 
                href="https://wa.me/919876543210?text=Hi! I need AC installation in Delhi NCR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors text-lg font-semibold"
              >
                WhatsApp Quote
              </a>
            </div>

            <div className="flex items-center justify-center space-x-6 mt-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <MdStar className="text-yellow-500" size={20} />
                <span>4.9/5 Rating</span>
              </div>
              <div>Same Day Service</div>
              <div>1 Year Warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              AC Installation Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide professional installation services for all types of air conditioners
              with expert technicians and quality workmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationTypes.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.type}</h3>
                <div className="text-primary-600 font-semibold mb-4">{service.price}</div>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <MdCheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="tel:+919876543210"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Book Now
                  <MdArrowForward className="ml-2" size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Installation Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure quality installation and 
              customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-4xl font-bold text-primary-600 mb-4">
                    {String(step.step).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <MdArrowForward className="text-gray-300" size={30} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Brands We Install
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are authorized to install all major AC brands with manufacturer warranty.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="text-gray-900 font-medium">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready for Professional AC Installation?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get expert installation service with warranty and after-sales support.
              Book your installation today!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+919876543210"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-lg font-semibold"
              >
                Call for Installation
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors text-lg font-semibold"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ACInstallation;