import React from 'react';
import { MdCheckCircle, MdBuildCircle, MdAccessTime, MdSecurity, MdStar, MdBolt, MdWarning, MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ACRepair = () => {
  const commonProblems = [
    {
      problem: "AC Not Cooling",
      causes: ["Low refrigerant", "Dirty filters", "Compressor issues", "Blocked condenser"],
      price: "₹500 - ₹3,000"
    },
    {
      problem: "AC Not Starting",
      causes: ["Power issues", "Faulty capacitor", "Remote problems", "Circuit board issues"],
      price: "₹300 - ₹2,500"
    },
    {
      problem: "Water Leakage",
      causes: ["Blocked drain", "Frozen coils", "Loose connections", "Installation issues"],
      price: "₹400 - ₹1,500"
    },
    {
      problem: "Strange Noises",
      causes: ["Loose parts", "Fan issues", "Compressor problems", "Dirty components"],
      price: "₹600 - ₹2,000"
    }
  ];

  const repairServices = [
    {
      service: "Emergency AC Repair",
      description: "24/7 emergency repair service across Delhi NCR",
      features: ["Immediate response", "Same day fix", "All AC brands", "Genuine parts"],
      price: "₹500 onwards"
    },
    {
      service: "Compressor Repair",
      description: "Expert compressor repair and replacement service",
      features: ["Diagnosis included", "Warranty on repair", "Quality parts", "Expert technicians"],
      price: "₹2,000 - ₹8,000"
    },
    {
      service: "Gas Leakage Repair",
      description: "Detection and repair of refrigerant gas leaks",
      features: ["Leak detection", "Pipe repair", "Gas refilling", "Performance testing"],
      price: "₹800 - ₹2,500"
    },
    {
      service: "Circuit Board Repair",
      description: "Electronic control board repair and replacement",
      features: ["Expert diagnosis", "Component repair", "Testing", "Warranty included"],
      price: "₹1,200 - ₹4,000"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Professional AC Repair Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert AC repair services available 24/7 across Delhi NCR. 
              Fast, reliable, and affordable solutions for all AC problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a 
                href="tel:+919876543210"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-lg font-semibold"
              >
                <MdBolt className="mr-2" size={24} />
                Emergency Repair: +91-9876543210
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors text-lg font-semibold"
              >
                Book Service
                <MdArrowForward className="ml-2" size={24} />
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-6 mt-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <MdStar className="text-yellow-500" size={20} />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdAccessTime className="text-primary-600" size={20} />
                <span>30 Min Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdCheckCircle className="text-green-500" size={20} />
                <span>30 Day Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common AC Problems & Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We fix all types of AC problems with expert diagnosis and quality repairs.
              Here are some common issues we handle:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonProblems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="bg-red-100 text-red-600 p-2 rounded-lg">
                    <MdWarning size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.problem}</h3>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {item.causes.map((cause, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <MdCheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-600">{cause}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="text-primary-600 font-semibold">{item.price}</span>
                  <a 
                    href="tel:+919876543210"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    Fix Now
                    <MdArrowForward className="ml-2" size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our AC Repair Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional AC repair services with warranty and genuine parts.
              We service all major AC brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.service}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <MdCheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                  <span className="text-primary-600 font-semibold">{service.price}</span>
                  <a 
                    href="tel:+919876543210"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    Book Now
                    <MdArrowForward className="ml-2" size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Need Emergency AC Repair?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our expert technicians are available 24/7 for emergency AC repairs.
              Call now for immediate assistance!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+919876543210"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-lg font-semibold"
              >
                <MdBolt className="mr-2" size={24} />
                Call Now
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors text-lg font-semibold"
              >
                Get Free Quote
                <MdArrowForward className="ml-2" size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ACRepair;