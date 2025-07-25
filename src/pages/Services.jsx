import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForward, MdCheckCircle, MdThermostat, MdBuildCircle, MdSecurity, MdAccessTime, MdBolt, MdWaterDrop, MdPhone } from 'react-icons/md';

const Services = () => {
  const mainServices = [
    {
      icon: MdThermostat,
      title: "AC Installation",
      description: "Professional installation of all types of air conditioners with warranty and after-sales support.",
      features: ["Free site survey", "Same day installation", "1 year warranty", "All AC brands"],
      price: "Starting from ₹2,500",
      link: "/services/ac-installation",
      image: "https://images.pexels.com/photos/6195120/pexels-photo-6195120.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: MdBuildCircle,
      title: "AC Repair",
      description: "Quick and reliable AC repair services available 24/7 across Delhi NCR.",
      features: ["24/7 emergency service", "Genuine parts", "30-day guarantee", "Expert diagnosis"],
      price: "Starting from ₹500",
      link: "/services/ac-repair",
      image: "https://images.pexels.com/photos/8293690/pexels-photo-8293690.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: MdSecurity,
      title: "AC Maintenance",
      description: "Regular maintenance services to keep your AC running efficiently and extend its life.",
      features: ["Deep cleaning", "Gas refilling", "Performance check", "Filter replacement"],
      price: "Starting from ₹800",
      link: "/services/ac-maintenance",
      image: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: MdAccessTime,
      title: "AMC Services",
      description: "Annual maintenance contracts for worry-free cooling with priority service and cost savings.",
      features: ["Priority service", "Cost savings", "Regular checkups", "Free minor repairs"],
      price: "Starting from ₹3,000/year",
      link: "/services/amc",
      image: "https://images.pexels.com/photos/6195120/pexels-photo-6195120.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const additionalServices = [
    {
      icon: MdBolt,
      title: "AC Gas Filling",
      description: "R32, R410A, R22 gas refilling service",
      price: "₹1,500 - ₹3,500"
    },
    {
      icon: MdWaterDrop,
      title: "AC Deep Cleaning",
      description: "Complete AC cleaning with chemical wash",
      price: "₹1,200 - ₹2,000"
    },
    {
      icon: MdBuildCircle,
      title: "AC Parts Replacement",
      description: "Genuine parts replacement service",
      price: "As per parts cost"
    },
    {
      icon: MdThermostat,
      title: "AC Uninstallation",
      description: "Safe AC removal and relocation service",
      price: "₹800 - ₹1,500"
    }
  ];

  const brands = [
    "LG", "Samsung", "Daikin", "Voltas", "Hitachi", "Carrier", 
    "Blue Star", "Godrej", "Whirlpool", "Panasonic", "O General", "Mitsubishi"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Complete AC Services in Delhi NCR
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional air conditioning installation, repair, maintenance, and AMC services 
              for all major brands across Delhi, Gurgaon, Noida, and Faridabad.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core AC Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive air conditioning solutions backed by 10+ years of experience 
              and certified technicians.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-48">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <service.icon className="absolute bottom-4 right-4 text-white" size={32} />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <MdCheckCircle className="text-primary-600 mr-2" size={20} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-semibold">{service.price}</span>
                    <Link 
                      to={service.link}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                    >
                      Learn More
                      <MdArrowForward className="ml-2" size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional AC Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a complete range of AC services to keep your cooling system running efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all">
                <div className="bg-primary-100 text-primary-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-primary-600 font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Brands We Service
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide expert service for all major AC brands available in India.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="text-gray-900 font-medium">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today for a free consultation and quote. Our expert team is ready to help you
              with all your AC service needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+919876543210"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-lg font-semibold"
              >
                <MdPhone className="mr-2" size={24} />
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

export default Services;