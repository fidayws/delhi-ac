import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForward, MdCheckCircle, MdPhone, MdWhatsapp, MdKitchen, MdOutlineKitchen } from 'react-icons/md';

const KitchenServices = () => {
  const kitchenServices = [
    {
      id: 'oven-repair',
      name: 'Oven Repair',
      description: 'Professional repair services for all types of electric and gas ovens',
      features: [
        'Heating element replacement',
        'Thermostat repair or replacement',
        'Door seal replacement',
        'Control panel repair',
        'Gas system troubleshooting'
      ],
      price: 'Starting at ₹599',
      image: '/images/oven-repair.jpg',
      path: '/services/oven-repair'
    },
    {
      id: 'microwave-repair',
      name: 'Microwave Oven Repair',
      description: 'Expert repair services for all brands of microwave ovens',
      features: [
        'Magnetron replacement',
        'Door switch repair',
        'Turntable motor repair',
        'Control panel troubleshooting',
        'Power supply repair'
      ],
      price: 'Starting at ₹499',
      image: '/images/microwave-repair.jpg',
      path: '/services/microwave-repair'
    }
  ];

  const brands = [
    'Samsung', 'LG', 'Whirlpool', 'IFB', 'Panasonic', 
    'Bosch', 'Siemens', 'Bajaj', 'Godrej', 'Morphy Richards'
  ];

  const faqs = [
    {
      question: 'What are the common signs that my microwave needs repair?',
      answer: 'Common signs include unusual noises during operation, sparking inside the microwave, uneven heating, the microwave not heating at all, burnt smell, control panel not responding, or the turntable not rotating properly.'
    },
    {
      question: 'How long does an oven repair typically take?',
      answer: 'Most oven repairs can be completed within 1-2 hours. However, if replacement parts are needed that are not in stock, a follow-up appointment may be necessary once the parts arrive.'
    },
    {
      question: 'Is it safe to use a microwave if the door doesn\'t close properly?',
      answer: 'No, it is not safe to use a microwave with a damaged door or one that doesn\'t close properly. This can lead to microwave radiation leakage which is potentially harmful. Contact us immediately for repair if you notice any issues with your microwave door.'
    },
    {
      question: 'Do you repair built-in ovens and microwaves?',
      answer: 'Yes, we repair all types of ovens and microwaves including built-in, countertop, over-the-range, and convection models from all major brands.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white/10 p-4 inline-block rounded-full mb-6">
              <MdKitchen size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kitchen Appliance Repair</h1>
            <p className="text-xl text-orange-100 mb-8">
              Expert repair services for ovens, microwaves, and other kitchen appliances
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+919773754227"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-all text-lg font-semibold shadow-lg"
              >
                <MdPhone className="mr-2" size={24} />
                Call Now
              </a>
              <a 
                href="https://wa.me/919773754227"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-800 text-white rounded-lg hover:bg-orange-900 transition-all text-lg font-semibold shadow-lg"
              >
                <MdWhatsapp className="mr-2" size={24} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Kitchen Appliance Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional repair services for your essential kitchen appliances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {kitchenServices.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="h-48 bg-gray-200 relative">
                  {/* This would be replaced with actual images */}
                  <div className="absolute inset-0 flex items-center justify-center bg-orange-100">
                    <MdOutlineKitchen size={60} className="text-orange-500" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <p className="font-semibold text-gray-700 mb-2">What's Included:</p>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-gray-600 flex items-start">
                          <MdCheckCircle className="text-orange-500 mr-2 mt-1 flex-shrink-0" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-orange-600 font-bold">{service.price}</span>
                    <Link 
                      to={service.path} 
                      className="text-orange-600 font-medium hover:text-orange-700 flex items-center"
                    >
                      View Details <MdArrowForward className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Brands We Service</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our technicians are trained to repair all major kitchen appliance brands
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center h-24">
                <span className="font-medium text-gray-800">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about our kitchen appliance repair services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-700 to-orange-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Kitchen Appliance Not Working?
              </h2>
              <p className="text-xl text-orange-100">
                Our expert technicians can diagnose and fix your kitchen appliance issues quickly. 
                Contact us now for reliable service!
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center text-orange-100">
                  <MdCheckCircle className="mr-2" size={20} />
                  Fast, reliable service
                </li>
                <li className="flex items-center text-orange-100">
                  <MdCheckCircle className="mr-2" size={20} />
                  Genuine replacement parts
                </li>
                <li className="flex items-center text-orange-100">
                  <MdCheckCircle className="mr-2" size={20} />
                  90-day service warranty
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+919773754227"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-all text-lg font-semibold shadow-lg"
              >
                <MdPhone className="mr-2" size={24} />
                Call Now
              </a>
              <a 
                href="https://wa.me/919773754227"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-900 text-white rounded-lg hover:bg-orange-950 transition-all text-lg font-semibold shadow-lg"
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

export default KitchenServices;