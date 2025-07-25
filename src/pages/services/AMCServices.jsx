import React from 'react';
import { MdCheckCircle, MdSecurity, MdAccessTime, MdStar, MdGroup, MdBuildCircle, MdCalendarMonth, MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AMCServices = () => {
  const amcPlans = [
    {
      name: "Basic AMC",
      price: "₹3,000/year",
      popular: false,
      features: [
        "2 free service visits per year",
        "Basic cleaning & inspection",
        "Filter cleaning",
        "Performance check",
        "Priority booking",
        "10% discount on repairs"
      ]
    },
    {
      name: "Standard AMC",
      price: "₹5,000/year",
      popular: true,
      features: [
        "4 free service visits per year",
        "Deep cleaning service",
        "Gas top-up (if required)",
        "Minor parts replacement",
        "24/7 emergency support",
        "20% discount on repairs",
        "Free diagnosis"
      ]
    },
    {
      name: "Premium AMC",
      price: "₹8,000/year",
      popular: false,
      features: [
        "6 free service visits per year",
        "Chemical wash cleaning",
        "Complete gas refilling",
        "All minor repairs included",
        "Emergency service within 4 hours",
        "30% discount on major repairs",
        "Free annual health report",
        "Extended warranty"
      ]
    }
  ];

  const amcBenefits = [
    {
      icon: MdAccessTime,
      title: "Priority Service",
      description: "Get priority booking and faster response times for all service requests"
    },
    {
      icon: MdSecurity,
      title: "Cost Savings",
      description: "Save up to 40% on annual AC maintenance costs with our AMC plans"
    },
    {
      icon: MdBuildCircle,
      title: "Preventive Care",
      description: "Regular maintenance prevents major breakdowns and extends AC life"
    },
    {
      icon: MdGroup,
      title: "Expert Care",
      description: "Dedicated technician assigned for consistent and quality service"
    },
    {
      icon: MdCalendarMonth,
      title: "Scheduled Service",
      description: "Automatic scheduling ensures your AC is serviced on time"
    },
    {
      icon: MdStar,
      title: "Quality Assurance",
      description: "Guaranteed service quality with performance tracking and reports"
    }
  ];

  const whatsCovered = [
    "Regular AC cleaning and maintenance",
    "Filter cleaning and replacement",
    "Coil cleaning (evaporator & condenser)",
    "Drain line cleaning",
    "Gas level checking and top-up",
    "Electrical connections inspection",
    "Thermostat calibration",
    "Performance optimization",
    "Minor repairs and adjustments",
    "Emergency breakdown support",
    "Annual health report",
    "Expert consultation"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Annual Maintenance Contract (AMC) Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AC maintenance plans for worry-free cooling all year round.
              Save money and extend your AC's life with our AMC services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a 
                href="tel:+919876543210"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-lg font-semibold"
              >
                Get AMC: +91-9876543210
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors text-lg font-semibold"
              >
                Compare Plans
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
                <span>500+ Active AMCs</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdAccessTime className="text-primary-600" size={20} />
                <span>Priority Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMC Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your AMC Plan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select from our range of comprehensive AMC plans designed to meet your needs
              and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {amcPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl p-6 shadow-lg relative ${
                  plan.popular ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-primary-600 font-semibold text-2xl mb-6">{plan.price}</div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <MdCheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="tel:+919876543210"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg transition-colors font-semibold ${
                    plan.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                  <MdArrowForward className="ml-2" size={20} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits of Our AMC Service
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enjoy peace of mind and significant cost savings with our comprehensive
              AMC services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {amcBenefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
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

      {/* What's Covered */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What's Covered in AMC?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive AMC plans include all essential services to keep your
              AC running efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {whatsCovered.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg">
                <MdCheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Choose an AMC plan today and enjoy worry-free AC maintenance all year round.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+919876543210"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-lg font-semibold"
              >
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

export default AMCServices;