import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForward, MdAcUnit, MdKitchen, MdWaterDrop, MdLocalLaundryService, MdOutlineKitchen, MdPhone, MdWhatsapp } from 'react-icons/md';
import { FaTemperatureHigh } from 'react-icons/fa';

const serviceCategories = [
  {
    id: 'ac-services',
    name: 'AC Services',
    icon: <MdAcUnit size={32} />,
    description: 'Complete air conditioning solutions including installation, repair, gas refill, and maintenance',
    services: [
      { name: "AC Service", path: "/services/ac-service" },
      { name: "AC Gas Fill", path: "/services/ac-gas-fill" },
      { name: "AC Fitting", path: "/services/ac-fitting" },
      { name: "AC Repair", path: "/services/ac-repair" },
      { name: "AC Installation", path: "/services/ac-installation" },
      { name: "AC Maintenance", path: "/services/ac-maintenance" },
      { name: "AMC Services", path: "/services/amc-services" },
      { name: "Air Conditioner Parts (All Company)", path: "/services/ac-parts" },
    ],
    path: '/services/ac-services',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-200'
  },
  {
    id: 'refrigerator-services',
    name: 'Refrigerator Services',
    icon: <FaTemperatureHigh size={28} />,
    description: 'Expert refrigerator repair, gas refilling, and maintenance services for all brands',
    services: [
      { name: "Fridge Repair", path: "/services/fridge-repair" },
      { name: "Refrigerator Gas Fill", path: "/services/refrigerator-gas" },
      { name: "Refrigerator Repair", path: "/services/refrigerator-repair" },
    ],
    path: '/services/refrigerator-services',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    borderColor: 'border-green-200'
  },
  {
    id: 'water-services',
    name: 'Water Services',
    icon: <MdWaterDrop size={32} />,
    description: 'Water cooler and dispenser repair, maintenance, and gas refilling services',
    services: [
      { name: "Water Cooler Gas Fill", path: "/services/water-cooler-gas" },
      { name: "Water Cooler Repair", path: "/services/water-cooler-repair" },
      { name: "Water Dispenser Repair & Gas", path: "/services/water-dispenser" },
    ],
    path: '/services/water-services',
    bgColor: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    borderColor: 'border-cyan-200'
  },
  {
    id: 'kitchen-services',
    name: 'Kitchen Appliance Services',
    icon: <MdKitchen size={32} />,
    description: 'Professional repair and maintenance for all kitchen appliances including ovens and microwaves',
    services: [
      { name: "Oven Repair", path: "/services/oven-repair" },
      { name: "Microwave Oven Repair", path: "/services/microwave-repair" },
    ],
    path: '/services/kitchen-services',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-200'
  },
  {
    id: 'washing-machine-services',
    name: 'Washing Machine Services',
    icon: <MdLocalLaundryService size={32} />,
    description: 'Comprehensive repair and service solutions for all types of washing machines',
    services: [
      { name: "Semi Washing Machine Repair & Service", path: "/services/semi-washing-machine" },
      { name: "Fully Automatic Washing Machine Repair & Service", path: "/services/automatic-washing-machine" },
    ],
    path: '/services/washing-machine-services',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-200'
  }
];

export { serviceCategories };

const AllServices = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 py-18 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Home Appliance Services</h1>
            <p className="text-xl text-primary-100 mb-8">
              Professional repair, installation, and maintenance services for all your home appliances
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+919773754227"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-lg hover:bg-primary-50 transition-all text-lg font-semibold shadow-lg"
              >
                <MdPhone className="mr-2" size={24} />
                Call Now
              </a>
              <a 
                href="https://wa.me/919773754227"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-primary-900 transition-all text-lg font-semibold shadow-lg"
              >
                <MdWhatsapp className="mr-2" size={24} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From air conditioners to refrigerators and washing machines, we provide expert repair and maintenance services for all your home appliances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category) => (
              <Link 
                key={category.id}
                to={category.path}
                className={`${category.bgColor} border ${category.borderColor} rounded-xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col h-full`}
              >
                <div className={`${category.iconColor} mb-4 p-4 rounded-full inline-flex items-center justify-center ${category.bgColor} border ${category.borderColor}`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.name}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{category.description}</p>
                <ul className="space-y-2 mb-6">
                  {category.services.slice(0, 3).map((service, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <span className="mr-2 text-primary-600">•</span>
                      {service.name}
                    </li>
                  ))}
                  {category.services.length > 3 && (
                    <li className="text-primary-600 font-medium">+ {category.services.length - 3} more services</li>
                  )}
                </ul>
                <div className="mt-auto">
                  <span className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                    View All Services <MdArrowForward className="ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver reliable, affordable, and professional home appliance services with guaranteed customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="bg-primary-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Availability</h3>
              <p className="text-gray-600">
                Our technicians are available round the clock for emergency repairs and services
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="bg-primary-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Technicians</h3>
              <p className="text-gray-600">
                Our team consists of certified and experienced technicians specialized in all appliance brands
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="bg-primary-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">
                We offer competitive and transparent pricing with no hidden charges
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="bg-primary-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Guaranteed Satisfaction</h3>
              <p className="text-gray-600">
                We stand behind our work with warranty and guarantee complete customer satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                Need Appliance Service Today?
              </h2>
              <p className="text-xl text-black">
                Our expert technicians are available 24/7 for your emergency repairs. 
                Contact us now for quick and reliable service!
              </p>
              <div className="mt-6 flex items-center text-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>30-60 minutes average response time</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+919773754227"
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-primary-600 rounded-lg hover:bg-primary-50 transition-all text-lg font-semibold shadow-lg"
              >
                <MdPhone className="mr-2" size={24} />
                Call Now
              </a>
              <a 
                href="https://wa.me/919773754227"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-primary-950 transition-all text-lg font-semibold shadow-lg"
              >
                <MdWhatsapp className="mr-2" size={24} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllServices;