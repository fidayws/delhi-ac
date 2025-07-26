import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';
import { serviceCategories } from '../pages/services/AllServices';

const ServiceCategories = ({ showViewAllButton = true }) => (
  <section className="py-12 md:py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive solutions for all your home and commercial appliances
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
                View Category <MdArrowForward className="ml-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
      {showViewAllButton && (
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-black rounded-lg font-semibold shadow-lg hover:bg-primary-700 transition-all text-lg"
          >
            View All Services <MdArrowForward className="ml-2" />
          </Link>
        </div>
      )}
    </div>
  </section>
);

export default ServiceCategories; 