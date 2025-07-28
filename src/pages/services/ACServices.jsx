import React from 'react';
import { Link } from 'react-router-dom';
import { MdAcUnit, MdArrowForward, MdCheckCircle, MdPhone, MdWhatsapp } from 'react-icons/md';
import SEO from '../../components/SEO';

const ACServices = () => {
  const acServices = [
    {
      id: 'ac-service',
      name: 'AC Service',
      description: 'Complete air conditioner service including cleaning, performance check, and basic maintenance',
      features: [
        'Filter cleaning and sanitization',
        'Condenser and evaporator cleaning',
        'Drainage system check and cleaning',
        'Performance check and calibration',
        'Gas pressure inspection'
      ],
      price: 'Starting at ₹599',
      image: '/images/ac-service.jpg',
      path: '/services/ac-service'
    },
    {
      id: 'ac-gas-fill',
      name: 'AC Gas Fill',
      description: 'Professional refrigerant gas filling for all types of air conditioners',
      features: [
        'Leak detection and repair',
        'Proper gas filling as per unit specification',
        'Performance testing after filling',
        'Pressure check and balancing',
        'Cooling efficiency optimization'
      ],
      price: 'Starting at ₹1200',
      image: '/images/ac-gas-fill.jpg',
      path: '/services/ac-gas-fill'
    },
    {
      id: 'ac-fitting',
      name: 'AC Fitting',
      description: 'Expert installation and fitting services for all types of air conditioners',
      features: [
        'Proper unit mounting and securing',
        'Copper pipe installation and insulation',
        'Drainage system installation',
        'Electrical connection and testing',
        'Post-installation performance check'
      ],
      price: 'Starting at ₹1500',
      image: '/images/ac-fitting.jpg',
      path: '/services/ac-fitting'
    },
    {
      id: 'ac-repair',
      name: 'AC Repair',
      description: 'Comprehensive repair services for all air conditioner problems and brands',
      features: [
        'Diagnostic assessment',
        'Component replacement',
        'Electrical fault repair',
        'Cooling system repair',
        'Warranty on repairs'
      ],
      price: 'Starting at ₹499',
      image: '/images/ac-repair.jpg',
      path: '/services/ac-repair'
    },
    {
      id: 'ac-installation',
      name: 'AC Installation',
      description: 'Complete air conditioner installation service with proper setup and testing',
      features: [
        'Mounting bracket installation',
        'Indoor and outdoor unit installation',
        'Copper piping and electrical wiring',
        'System charging and testing',
        'User operation guidance'
      ],
      price: 'Starting at ₹2000',
      image: '/images/ac-installation.jpg',
      path: '/services/ac-installation'
    },
    {
      id: 'ac-maintenance',
      name: 'AC Maintenance',
      description: 'Regular maintenance services to ensure optimal performance and longevity',
      features: [
        'Comprehensive system check',
        'Component cleaning and servicing',
        'Minor repairs and adjustments',
        'Performance optimization',
        'Preventative maintenance'
      ],
      price: 'Starting at ₹799',
      image: '/images/ac-maintenance.jpg',
      path: '/services/ac-maintenance'
    },
    {
      id: 'amc-services',
      name: 'AMC Services',
      description: 'Annual Maintenance Contracts for hassle-free air conditioner care throughout the year',
      features: [
        'Regular scheduled servicing',
        'Priority emergency support',
        'Discounts on repairs and parts',
        'Extended component warranty',
        'Preventative maintenance plan'
      ],
      price: 'Starting at ₹3999/year',
      image: '/images/amc-services.jpg',
      path: '/services/amc-services'
    },
    {
      id: 'ac-parts',
      name: 'Air Conditioner Parts (All Company)',
      description: 'Genuine replacement parts for all air conditioner brands and models',
      features: [
        'Genuine OEM parts',
        'Compressors and condenser units',
        'Control boards and electrical components',
        'Mounting brackets and accessories',
        'Professional installation available'
      ],
      price: 'Varies by part',
      image: '/images/ac-parts.jpg',
      path: '/services/ac-parts'
    }
  ];

  const brands = [
    'Voltas', 'Daikin', 'LG', 'Samsung', 'Hitachi', 'Blue Star', 
    'Carrier', 'Mitsubishi', 'O General', 'Whirlpool', 'Panasonic', 'Haier'
  ];

  const faqs = [
    {
      question: 'How often should I service my air conditioner?',
      answer: 'We recommend servicing your AC at least twice a year - once before summer and once after monsoon season for optimal performance and longevity.'
    },
    {
      question: 'How do I know if my AC needs gas refilling?',
      answer: 'Signs that your AC may need gas refilling include reduced cooling efficiency, longer time to cool the room, ice formation on copper pipes, or the AC running continuously without reaching the set temperature.'
    },
    {
      question: 'What is included in your regular AC service?',
      answer: 'Our regular AC service includes cleaning of filters, condenser coil, evaporator coil, drainage system, checking refrigerant levels, testing electrical components, and overall performance evaluation.'
    },
    {
      question: 'Do you provide warranty on your AC repairs?',
      answer: 'Yes, we provide a 30-day warranty on our repair services and up to 3 months warranty on replacement parts depending on the component.'
    }
  ];

  // AC Services structured data
  const acServicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AC Services & Repair in Delhi",
    "description": "Professional AC repair, installation, maintenance, gas filling, and AMC services in Delhi NCR. Expert technicians for all AC brands with same-day service guarantee.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Delhi AC Services"
    },
    "areaServed": "Delhi NCR",
    "serviceType": "HVAC Service",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AC Services Delhi",
      "itemListElement": acServices.map(service => ({
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "offers": {
          "@type": "Offer",
          "price": service.price,
          "priceCurrency": "INR"
        }
      }))
    }
  };

  return (
    <div className="bg-white">
      <SEO 
        title="AC Services & Repair in Delhi - Professional AC Installation, Gas Filling & Maintenance | Delhi AC Services"
        description="Expert AC services in Delhi NCR - AC repair, installation, gas filling, maintenance & AMC. Available for all brands: Voltas, Daikin, LG, Samsung, Hitachi. Same-day service, genuine parts, 1-year warranty. Call +91-97737-54227 for immediate AC service."
        keywords="AC service Delhi, air conditioner repair Delhi, AC installation Delhi, AC gas filling Delhi, AC maintenance Delhi, split AC service Delhi, window AC repair Delhi, Voltas AC service Delhi, Daikin AC repair Delhi, LG AC service Delhi, Samsung AC repair Delhi, commercial AC service Delhi, residential AC repair Delhi, emergency AC service Delhi, 24/7 AC repair Delhi, AC AMC Delhi, AC parts Delhi, branded AC service Delhi"
        url="/services/ac-services"
        structuredData={acServicesStructuredData}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-primary-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white/10 p-4 inline-block rounded-full mb-6">
              <MdAcUnit size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional AC Services & Repair in Delhi</h1>
            <p className="text-xl text-blue-100 mb-8">
              Professional air conditioning solutions for installation, repair, maintenance, and gas refilling
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+919773754227"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all text-lg font-semibold shadow-lg"
              >
                <MdPhone className="mr-2" size={24} />
                Call Now
              </a>
              <a 
                href="https://wa.me/919773754227"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-all text-lg font-semibold shadow-lg"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AC Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From routine maintenance to complex repairs, we provide comprehensive air conditioning services for all brands and models
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {acServices.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="h-48 bg-gray-200 relative">
                  {/* This would be replaced with actual images */}
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-100">
                    <MdAcUnit size={60} className="text-blue-500" />
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
                          <MdCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-primary-600 font-bold">{service.price}</span>
                    <Link 
                      to={service.path} 
                      className="text-blue-600 font-medium hover:text-blue-700 flex items-center"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AC Brands We Service</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our technicians are trained to repair and service all major air conditioner brands
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
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
              Common questions about our AC services and repairs
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
      <section className="bg-gradient-to-r from-blue-700 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need AC Service Today?
              </h2>
              <p className="text-xl text-blue-100">
                Our expert technicians are available 24/7 for your AC needs. 
                Contact us now for quick and reliable service!
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center text-blue-100">
                  <MdCheckCircle className="mr-2" size={20} />
                  30-60 minute average response time
                </li>
                <li className="flex items-center text-blue-100">
                  <MdCheckCircle className="mr-2" size={20} />
                  Transparent pricing with no hidden charges
                </li>
                <li className="flex items-center text-blue-100">
                  <MdCheckCircle className="mr-2" size={20} />
                  Experienced technicians for all AC brands
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+919773754227"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all text-lg font-semibold shadow-lg"
              >
                <MdPhone className="mr-2" size={24} />
                Call Now
              </a>
              <a 
                href="https://wa.me/919773754227"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-900 text-white rounded-lg hover:bg-blue-950 transition-all text-lg font-semibold shadow-lg"
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

export default ACServices;