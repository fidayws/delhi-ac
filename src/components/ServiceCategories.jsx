import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';
import { serviceCategories } from '../pages/services/AllServices';

const ServiceCategories = ({ showViewAllButton = true }) => (
  <section className="py-12 sm:py-16 md:py-48 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">Our Services</h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Comprehensive solutions for all your home and commercial appliances
        </p>
      </div>
      
      {/* Mobile: Single column, Tablet: 2 columns, Desktop: 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {serviceCategories.map((category) => (
          <Link
            key={category.id}
            to={category.path}
            className={`service-card ${category.bgColor} border-2 ${category.borderColor} rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full group hover:scale-105`}
          >
            {/* Icon Section */}
            <div className={`${category.iconColor} mb-4 sm:mb-6 p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl inline-flex items-center justify-center ${category.bgColor} border-2 ${category.borderColor} self-start group-hover:scale-110 transition-transform duration-300`}>
              <div className="text-3xl sm:text-4xl lg:text-5xl">
                {category.icon}
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">
              {category.name}
            </h3>
            
            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 lg:mb-8 flex-grow leading-relaxed">
              {category.description}
            </p>
            
            {/* Services List */}
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {category.services.slice(0, 3).map((service, idx) => (
                <li key={idx} className="text-sm sm:text-base lg:text-lg text-gray-700 flex items-start">
                  <span className="mr-2 sm:mr-3 text-primary-600 font-bold text-base sm:text-lg">•</span>
                  <span className="leading-relaxed">{service.name}</span>
                </li>
              ))}
              {category.services.length > 3 && (
                <li className="text-sm sm:text-base lg:text-lg text-primary-600 font-semibold">
                  + {category.services.length - 3} more services
                </li>
              )}
            </ul>
            
            {/* CTA */}
            <div className="mt-auto">
              <span className="inline-flex items-center text-base sm:text-lg lg:text-xl text-primary-600 font-bold hover:text-primary-700 group-hover:translate-x-2 transition-all duration-300">
                View Category 
                <MdArrowForward className="ml-2 group-hover:ml-4 transition-all duration-300" size={20} />
              </span>
            </div>
          </Link>
        ))}
      </div>
      
      {showViewAllButton && (
        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <Link
            to="/services"
            className="inline-flex items-center px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 bg-primary-600 text-black rounded-lg sm:rounded-xl font-bold shadow-xl hover:bg-primary-700 hover:scale-105 transition-all duration-300 text-base sm:text-lg lg:text-xl"
          >
            View All Services 
            <MdArrowForward className="ml-2 sm:ml-3" size={20} />
          </Link>
        </div>
      )}
    </div>
  </section>
);

export default ServiceCategories; 