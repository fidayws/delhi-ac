import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MdArrowForward, 
  MdCheckCircle, 
  MdPhone, 
  MdWhatsapp, 
  MdWaterDrop, 
  MdWater, 
  MdBuild,
  MdLocalDrink,
  MdKitchen
} from 'react-icons/md';
import { FaGasPump, FaTools } from 'react-icons/fa';
import SEO from '../../components/SEO';

const WaterServices = () => {
  const waterServices = [
    {
      id: 'water-cooler-gas',
      name: 'Water Cooler Gas Fill',
      description: 'Professional gas filling service for all types of water coolers',
      features: [
        'Gas leak detection and repair',
        'Proper gas filling as per specifications',
        'Performance testing after filling',
        'Cooling efficiency check',
        'Safety inspection'
      ],
      price: 'Starting at ₹999',
      icon: FaGasPump,
      iconColor: 'text-blue-500',
      path: '/services/water-cooler-gas'
    },
    {
      id: 'water-cooler-repair',
      name: 'Water Cooler Repair',
      description: 'Expert repair services for commercial and residential water coolers',
      features: [
        'Comprehensive diagnostic check',
        'Compressor repair or replacement',
        'Fan motor repair',
        'Thermostat and sensor calibration',
        'Complete system optimization'
      ],
      price: 'Starting at ₹499',
      icon: MdBuild,
      iconColor: 'text-orange-500',
      path: '/services/water-cooler-repair'
    },
    {
      id: 'water-dispenser',
      name: 'Water Dispenser Repair & Gas',
      description: 'Complete repair and gas filling services for all types of water dispensers',
      features: [
        'Cooling system repair',
        'Heating element replacement',
        'Gas leak detection and filling',
        'Tap and valve replacement',
        'Sanitization and cleaning'
      ],
      price: 'Starting at ₹599',
      icon: MdLocalDrink,
      iconColor: 'text-cyan-500',
      path: '/services/water-dispenser'
    }
  ];

  const brands = [
    'Blue Star', 'Voltas', 'Usha', 'Eureka Forbes', 'Kent', 
    'Aquaguard', 'Bluestar', 'Bajaj', 'Pureit', 'Livpure'
  ];

  const faqs = [
    {
      question: 'How often does a water cooler need gas filling?',
      answer: 'A water cooler typically needs gas refilling every 1-2 years depending on usage. Signs that your water cooler may need gas include reduced cooling, unusual noises, or the unit running continuously without cooling properly.'
    },
    {
      question: 'What maintenance does a water dispenser need?',
      answer: 'Water dispensers should be cleaned and sanitized every 3-6 months, have filters replaced according to manufacturer recommendations, and receive an annual check-up to ensure proper cooling and heating functions are working efficiently.'
    },
    {
      question: 'Can you repair a leaking water cooler?',
      answer: 'Yes, we can repair leaking water coolers. Leaks can be caused by damaged seals, loose connections, cracked tanks, or blocked drainage systems. Our technicians can diagnose the cause and provide the necessary repairs.'
    },
    {
      question: 'Do you service water coolers with both hot and cold functions?',
      answer: 'Yes, we service all types of water dispensers including those with hot, cold, and room temperature water options. Our technicians are trained to work on all the common brands and models.'
    }
  ];

  // Water Services structured data
  const waterServicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Water Cooler & Dispenser Services in Delhi",
    "description": "Professional water cooler and dispenser repair, gas filling, and maintenance services in Delhi NCR. Expert technicians for all brands with same-day service.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Delhi AC Services"
    },
    "areaServed": "Delhi NCR",
    "serviceType": "Water Cooler Service",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Water Services Delhi",
      "itemListElement": waterServices.map(service => ({
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
        title="Water Cooler & Dispenser Repair Service in Delhi - Gas Filling & Maintenance | Delhi AC Services"
        description="Professional water cooler and dispenser repair, gas filling, and maintenance services in Delhi NCR. Expert service for all brands: Blue Star, Voltas, Usha, Kent, Aquaguard. Same-day service, genuine parts. Call +91-97737-54227 for water cooler repair."
        keywords="water cooler repair Delhi, water dispenser service Delhi, water cooler gas filling Delhi, water cooler maintenance Delhi, Blue Star water cooler service Delhi, Voltas water cooler repair Delhi, Kent water dispenser repair Delhi, Aquaguard service Delhi, commercial water cooler service Delhi, office water cooler repair Delhi, emergency water cooler service Delhi"
        url="/services/water-services"
        structuredData={waterServicesStructuredData}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white/10 p-4 inline-block rounded-full mb-6">
              <MdWaterDrop size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Water Cooler & Dispenser Repair Service in Delhi</h1>
            <p className="text-xl text-cyan-100 mb-8">
              Professional repair, maintenance, and gas filling services for all water cooling systems
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+919773754227"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 rounded-lg hover:bg-cyan-50 transition-all text-lg font-semibold shadow-lg"
              >
                <MdPhone className="mr-2" size={24} />
                Call Now
              </a>
              <a 
                href="https://wa.me/919773754227"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-cyan-800 text-white rounded-lg hover:bg-cyan-900 transition-all text-lg font-semibold shadow-lg"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Water Cooling Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert repair and maintenance services for water coolers and dispensers of all brands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {waterServices.map((service) => (
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
                          <MdCheckCircle className="text-cyan-500 mr-2 mt-1 flex-shrink-0" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-cyan-600 font-bold">{service.price}</span>
                    {/* <Link 
                      to={service.path} 
                      className="text-cyan-600 font-medium hover:text-cyan-700 flex items-center"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Brands We Service</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our technicians are trained to repair and service all major water cooler and dispenser brands
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
              Common questions about our water cooler and dispenser services
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
      <section className="bg-gradient-to-r from-cyan-700 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Water Cooler Not Working?
              </h2>
              <p className="text-xl text-cyan-100">
                Our expert technicians can diagnose and fix your water cooler issues quickly. 
                Contact us now for reliable service!
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center text-cyan-100">
                  <MdCheckCircle className="mr-2" size={20} />
                  Same-day service available
                </li>
                <li className="flex items-center text-cyan-100">
                  <MdCheckCircle className="mr-2" size={20} />
                  Warranty on all repairs
                </li>
                <li className="flex items-center text-cyan-100">
                  <MdCheckCircle className="mr-2" size={20} />
                  Genuine parts and refrigerants
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+919773754227"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 rounded-lg hover:bg-cyan-50 transition-all text-lg font-semibold shadow-lg"
              >
                <MdPhone className="mr-2" size={24} />
                Call Now
              </a>
              <a 
                href="https://wa.me/919773754227"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-cyan-900 text-white rounded-lg hover:bg-cyan-950 transition-all text-lg font-semibold shadow-lg"
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

export default WaterServices;