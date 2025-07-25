import React from 'react';
import { MdCheckCircle, MdSecurity, MdAccessTime, MdBuildCircle, MdStar, MdWaterDrop, MdFilterAlt, MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ACMaintenance = () => {
  const maintenanceServices = [
    {
      service: "Basic AC Cleaning",
      price: "₹800 - ₹1,200",
      features: ["Filter cleaning", "Basic inspection", "Performance check", "Minor adjustments"],
      duration: "1-2 hours"
    },
    {
      service: "Deep AC Cleaning",
      price: "₹1,500 - ₹2,500",
      features: ["Chemical wash", "Coil cleaning", "Drain cleaning", "Sanitization"],
      duration: "2-3 hours"
    },
    {
      service: "AC Gas Refilling",
      price: "₹2,000 - ₹3,500",
      features: ["Gas level check", "Leak detection", "Pressure testing", "Performance optimization"],
      duration: "1-2 hours"
    },
    {
      service: "Complete AC Service",
      price: "₹2,500 - ₹4,000",
      features: ["Deep cleaning", "Gas top-up", "All components check", "Performance report"],
      duration: "3-4 hours"
    }
  ];

  const cleaningProcess = [
    {
      step: 1,
      title: "Pre-Service Inspection",
      description: "Complete AC assessment and performance evaluation"
    },
    {
      step: 2,
      title: "Disassembly & Cleaning",
      description: "Careful disassembly and thorough cleaning of all components"
    },
    {
      step: 3,
      title: "Chemical Treatment",
      description: "Deep chemical cleaning and sanitization process"
    },
    {
      step: 4,
      title: "Reassembly & Testing",
      description: "Proper reassembly and complete performance testing"
    }
  ];

  const benefits = [
    {
      icon: MdSecurity,
      title: "Improved Efficiency",
      description: "Clean AC runs more efficiently, reducing electricity bills by 20-30%"
    },
    {
      icon: MdAccessTime,
      title: "Extended Lifespan",
      description: "Regular maintenance extends AC life by 3-5 years"
    },
    {
      icon: MdWaterDrop,
      title: "Better Air Quality",
      description: "Clean filters and coils ensure fresh, healthy air circulation"
    },
    {
      icon: MdBuildCircle,
      title: "Prevent Breakdowns",
      description: "Early detection of issues prevents costly repairs"
    }
  ];

  const maintenanceChecklist = [
    "Air filter cleaning/replacement",
    "Evaporator coil cleaning",
    "Condenser coil cleaning",
    "Drain line cleaning",
    "Refrigerant level check",
    "Electrical connections inspection",
    "Thermostat calibration",
    "Fan motor lubrication",
    "Belt inspection and adjustment",
    "Ductwork inspection",
    "Performance testing",
    "Energy efficiency check"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Professional AC Maintenance Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keep your AC running efficiently with our professional maintenance services.
              Regular maintenance extends AC life and reduces energy costs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a 
                href="tel:+919876543210"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-lg font-semibold"
              >
                Book Service: +91-9876543210
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors text-lg font-semibold"
              >
                Get Free Quote
                <MdArrowForward className="ml-2" size={24} />
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-6 mt-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <MdStar className="text-yellow-500" size={20} />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdCheckCircle className="text-green-500" size={20} />
                <span>Certified Technicians</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdAccessTime className="text-primary-600" size={20} />
                <span>Same Day Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Maintenance Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of professional AC maintenance services designed to
              keep your AC performing at its best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {maintenanceServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.service}</h3>
                <div className="text-primary-600 font-semibold mb-4">{service.price}</div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <MdCheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="text-gray-600">
                    <MdAccessTime className="inline mr-2" size={18} />
                    {service.duration}
                  </span>
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

      {/* Cleaning Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Cleaning Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure thorough cleaning and
              optimal performance of your AC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cleaningProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-4xl font-bold text-primary-600 mb-4">
                    {String(step.step).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < cleaningProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <MdArrowForward className="text-gray-300" size={30} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits of Regular Maintenance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Regular AC maintenance offers numerous benefits that help save money
              and ensure comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <div className="bg-primary-100 text-primary-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Checklist */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Maintenance Checklist
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive maintenance service includes a thorough check of all
              critical components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {maintenanceChecklist.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <MdCheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">{item}</span>
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
              Ready to Schedule Maintenance?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Book your AC maintenance service today and ensure optimal performance
              year-round.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+919876543210"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-lg font-semibold"
              >
                Book Service Now
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

export default ACMaintenance;