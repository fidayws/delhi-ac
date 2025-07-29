import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MdArrowForward, 
  MdCheckCircle, 
  MdPhone, 
  MdWhatsapp, 
  MdBuild,
  MdThermostat 
} from 'react-icons/md';
import { FaTemperatureHigh, FaSnowflake, FaGasPump } from 'react-icons/fa';
import SEO from '../../components/SEO';

const RefrigeratorServices = () => {
  const refrigeratorServices = [
    {
      id: 'fridge-repair',
      name: 'Fridge Repair',
      description: 'Comprehensive repair services for all types of refrigerators and freezers',
      features: [
        'Diagnostic assessment',
        'Component replacement',
        'Electrical circuit repair',
        'Cooling system troubleshooting',
        'Performance optimization'
      ],
      price: 'Starting at ₹499',
      icon: MdBuild,
      iconColor: 'text-blue-500',
      path: '/services/fridge-repair'
    },
    {
      id: 'refrigerator-gas',
      name: 'Refrigerator Gas Fill',
      description: 'Professional refrigerant gas filling service for optimal cooling performance',
      features: [
        'Gas leak detection',
        'Proper gas filling as per model specifications',
        'Pressure testing and adjustment',
        'Performance verification',
        'Cooling efficiency check'
      ],
      price: 'Starting at ₹1200',
      icon: FaGasPump,
      iconColor: 'text-cyan-500',
      path: '/services/refrigerator-gas'
    },
    {
      id: 'refrigerator-repair',
      name: 'Refrigerator Repair',
      description: 'Expert repair services for all brands of single-door and double-door refrigerators',
      features: [
        'Compressor repair or replacement',
        'Thermostat calibration',
        'Door seal replacement',
        'Defrost system repair',
        'Complete performance tuning'
      ],
      price: 'Starting at ₹599',
      icon: FaSnowflake,
      iconColor: 'text-green-500',
      path: '/services/refrigerator-repair'
    }
  ];
  const brands = [
    'LG', 'Samsung', 'Whirlpool', 'Godrej', 'Haier', 
    'Bosch', 'Electrolux', 'Panasonic', 'Hitachi', 'Kelvinator'
  ];

  const faqs = [
    {
      question: 'How do I know if my refrigerator needs gas refilling?',
      answer: 'Signs include reduced cooling, food spoiling quickly, refrigerator running continuously, unusual noises, or ice buildup in the freezer. If you notice any of these symptoms, it might be time for a gas refill.'
    },
    {
      question: 'How long does a refrigerator repair typically take?',
      answer: 'Most refrigerator repairs can be completed within 1-2 hours. More complex issues might require parts ordering and a follow-up visit, but our technicians always try to resolve issues in a single visit whenever possible.'
    },
    {
      question: 'Do you repair all types of refrigerators?',
      answer: 'Yes, we repair all types including single-door, double-door, side-by-side, french-door, top freezer, bottom freezer, and built-in refrigerators from all major brands.'
    },
    {
      question: 'How often should I service my refrigerator?',
      answer: 'We recommend a professional service once a year to ensure optimal performance, energy efficiency, and to extend the lifespan of your refrigerator.'
    }
  ];

  // Refrigerator Services structured data
  const refrigeratorServicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Refrigerator & Fridge Repair Services in Delhi",
    "description": "Professional refrigerator and fridge repair, gas filling, and maintenance services in Delhi NCR. Expert technicians for all brands with same-day service.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Delhi AC Services"
    },
    "areaServed": "Delhi NCR",
    "serviceType": "Refrigerator Service",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Refrigerator Services Delhi",
      "itemListElement": refrigeratorServices.map(service => ({
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
        title="Refrigerator & Fridge Repair Service in Delhi - Gas Filling & Maintenance | Delhi AC Services"
        description="Professional refrigerator and fridge repair, gas filling, and maintenance services in Delhi NCR. Expert service for all brands: LG, Samsung, Whirlpool, Godrej, Haier. Same-day service, genuine parts. Call +91-97737-54227 for refrigerator repair."
        keywords="refrigerator repair Delhi, fridge repair Delhi, refrigerator gas filling Delhi, fridge service Delhi, refrigerator maintenance Delhi, LG refrigerator repair Delhi, Samsung fridge repair Delhi, Whirlpool refrigerator service Delhi, Godrej fridge repair Delhi, double door refrigerator repair Delhi, single door fridge repair Delhi, commercial refrigerator service Delhi"
        url="/services/refrigerator-services"
        structuredData={refrigeratorServicesStructuredData}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white/10 p-4 inline-block rounded-full mb-6">
              <FaTemperatureHigh size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Refrigerator & Fridge Repair Service in Delhi</h1>
            <p className="text-xl text-green-100 mb-8">
              Expert refrigerator repair, gas filling, and maintenance services for all brands and models
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+919773754227"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-all text-lg font-semibold shadow-lg"
              >
                <MdPhone className="mr-2" size={24} />
                Call Now
              </a>
              <a 
                href="https://wa.me/919773754227"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-800 text-white rounded-lg hover:bg-green-900 transition-all text-lg font-semibold shadow-lg"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Refrigerator Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional repair and maintenance services to keep your refrigerator running efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {refrigeratorServices.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-full p-8 shadow-lg">
                      <service.icon size={60} className={service.iconColor} />
                    </div>
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
                    <span className="text-green-600 font-bold">{service.price}</span>
                    {/* <Link 
                      to={service.path} 
                      className="text-green-600 font-medium hover:text-green-700 flex items-center"
                    >
                      View Details <MdArrowForward className="ml-1" />
                    </Link> */}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Refrigerator Brands We Service</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our technicians are trained to repair all major refrigerator brands
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
              Common questions about our refrigerator services
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
      <section className="bg-gradient-to-r from-green-700 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Refrigerator Not Cooling Properly?
              </h2>
              <p className="text-xl text-green-100">
                Our expert technicians can diagnose and fix your refrigerator issues quickly. 
                Contact us now for reliable service!
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center text-green-100">
                  <MdCheckCircle className="mr-2" size={20} />
                  Same-day service available
                </li>
                <li className="flex items-center text-green-100">
                  <MdCheckCircle className="mr-2" size={20} />
                  90-day warranty on repairs
                </li>
                <li className="flex items-center text-green-100">
                  <MdCheckCircle className="mr-2" size={20} />
                  Genuine parts and accessories
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+919773754227"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-all text-lg font-semibold shadow-lg"
              >
                <MdPhone className="mr-2" size={24} />
                Call Now
              </a>
              <a 
                href="https://wa.me/919773754227"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-900 text-white rounded-lg hover:bg-green-950 transition-all text-lg font-semibold shadow-lg"
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

export default RefrigeratorServices;