import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForward, MdCheckCircle, MdPhone, MdWhatsapp, MdLocalLaundryService } from 'react-icons/md';
import SEO from '../../components/SEO';

const WashingMachineServices = () => {
  const washingMachineServices = [
    {
      id: 'semi-washing-machine',
      name: 'Semi Washing Machine Repair & Service',
      description: 'Expert repair and maintenance services for all brands of semi-automatic washing machines',
      features: [
        'Motor repair or replacement',
        'Timer and control panel repair',
        'Drain system cleaning and repair',
        'Belt and pulley replacement',
        'Complete mechanical overhaul'
      ],
      price: 'Starting at ₹499',
      image: '/images/semi-washing-machine.jpg',
      path: '/services/semi-washing-machine'
    },
    {
      id: 'automatic-washing-machine',
      name: 'Fully Automatic Washing Machine Repair & Service',
      description: 'Comprehensive repair and service for front-loading and top-loading fully automatic washing machines',
      features: [
        'PCB and electronic component repair',
        'Motor and drive system repair',
        'Drum and bearing replacement',
        'Door lock mechanism repair',
        'Water inlet and drain pump repair'
      ],
      price: 'Starting at ₹699',
      image: '/images/automatic-washing-machine.jpg',
      path: '/services/automatic-washing-machine'
    }
  ];

  const brands = [
    'LG', 'Samsung', 'Whirlpool', 'IFB', 'Bosch', 
    'Godrej', 'Haier', 'Panasonic', 'Videocon', 'Onida'
  ];

  const faqs = [
    {
      question: 'What are the common problems with washing machines?',
      answer: 'Common problems include the machine not spinning or draining, leaking water, making unusual noises, not starting, door not locking (in front-loaders), excessive vibration, and electronic control issues.'
    },
    {
      question: 'How long does a washing machine repair take?',
      answer: 'Most washing machine repairs can be completed within 1-2 hours. However, if complex parts replacement is needed, it might take longer or require a follow-up visit once parts are available.'
    },
    {
      question: 'How often should I service my washing machine?',
      answer: 'We recommend servicing your washing machine once a year to ensure optimal performance, prevent major breakdowns, and extend its lifespan. Regular maintenance can identify potential issues before they become serious problems.'
    },
    {
      question: 'Do you repair both top-loading and front-loading washing machines?',
      answer: 'Yes, we repair all types of washing machines including top-loading and front-loading fully automatic machines, as well as semi-automatic washing machines from all major brands.'
    }
  ];

  // Washing Machine Services structured data
  const washingMachineServicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Washing Machine Repair Services in Delhi",
    "description": "Professional washing machine repair and service for semi-automatic and fully automatic machines in Delhi NCR. Expert technicians for all brands.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Delhi AC Services"
    },
    "areaServed": "Delhi NCR",
    "serviceType": "Washing Machine Service",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Washing Machine Services Delhi",
      "itemListElement": washingMachineServices.map(service => ({
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
        title="Washing Machine Repair Service in Delhi - Semi & Fully Automatic Machine Service | Delhi AC Services"
        description="Professional washing machine repair and service in Delhi NCR for semi-automatic and fully automatic machines. Expert service for all brands: LG, Samsung, Whirlpool, IFB, Bosch. Same-day service, genuine parts. Call +91-97737-54227 for washing machine repair."
        keywords="washing machine repair Delhi, semi automatic washing machine repair Delhi, fully automatic washing machine service Delhi, LG washing machine repair Delhi, Samsung washing machine service Delhi, Whirlpool washing machine repair Delhi, IFB washing machine service Delhi, front load washing machine repair Delhi, top load washing machine service Delhi, washing machine maintenance Delhi"
        url="/services/washing-machine-services"
        structuredData={washingMachineServicesStructuredData}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white/10 p-4 inline-block rounded-full mb-6">
              <MdLocalLaundryService size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Washing Machine Repair Service in Delhi</h1>
            <p className="text-xl text-purple-100 mb-8">
              Expert repair and maintenance services for all types of washing machines
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+919773754227"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-all text-lg font-semibold shadow-lg"
              >
                <MdPhone className="mr-2" size={24} />
                Call Now
              </a>
              <a 
                href="https://wa.me/919773754227"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-purple-800 text-white rounded-lg hover:bg-purple-900 transition-all text-lg font-semibold shadow-lg"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Washing Machine Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional repair and maintenance services for all types of washing machines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {washingMachineServices.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="h-48 bg-gray-200 relative">
                  {/* This would be replaced with actual images */}
                  <div className="absolute inset-0 flex items-center justify-center bg-purple-100">
                    <MdLocalLaundryService size={60} className="text-purple-500" />
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
                          <MdCheckCircle className="text-purple-500 mr-2 mt-1 flex-shrink-0" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-purple-600 font-bold">{service.price}</span>
                    <Link 
                      to={service.path} 
                      className="text-purple-600 font-medium hover:text-purple-700 flex items-center"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Washing Machine Brands We Service</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our technicians are trained to repair all major washing machine brands
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
              Common questions about our washing machine repair services
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
      <section className="bg-gradient-to-r from-purple-700 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Washing Machine Not Working?
              </h2>
              <p className="text-xl text-purple-100">
                Our expert technicians can diagnose and fix your washing machine issues quickly. 
                Contact us now for reliable service!
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center text-purple-100">
                  <MdCheckCircle className="mr-2" size={20} />
                  Same-day service available
                </li>
                <li className="flex items-center text-purple-100">
                  <MdCheckCircle className="mr-2" size={20} />
                  Genuine replacement parts
                </li>
                <li className="flex items-center text-purple-100">
                  <MdCheckCircle className="mr-2" size={20} />
                  90-day service warranty
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+919773754227"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-all text-lg font-semibold shadow-lg"
              >
                <MdPhone className="mr-2" size={24} />
                Call Now
              </a>
              <a 
                href="https://wa.me/919773754227"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-purple-900 text-white rounded-lg hover:bg-purple-950 transition-all text-lg font-semibold shadow-lg"
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

export default WashingMachineServices;