import React from 'react';
import {
  MdArrowForward,
  MdCheckCircle,
  MdPhone,
  MdStar,
  MdThermostat,
  MdBuildCircle,
  MdSecurity,
  MdAccessTime
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import GoogleReviews from '../components/GoogleReviews';
import ServiceCategories from '../components/ServiceCategories';

const Home = () => {
  const features = [
    "Licensed & Insured Technicians",
    "24/7 Emergency Service",
    "Genuine Parts & Components",
    "Transparent Pricing",
    "1 Year Service Warranty",
    "Same Day Service Available"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1527689638836-411945a2b57c?q=80&w=2340&auto=format&fit=crop"
            alt="AC Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white pt-36 md:pt-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Expert AC Services<br />
              <span className="text-primary-400">For Your Comfort</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Professional AC installation, repair, and maintenance services in Delhi.
              Available 24/7 for all your cooling needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:+919773754227"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 bg-gray-100 text-black rounded-lg shadow-lg hover:from-primary-600 hover:to-primary-700 transition-all text-base md:text-lg font-semibold transform hover:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-primary-500"
              >
                <MdPhone className="mr-2" size={24} />
                Call Now: +91-97737 54227
              </a>
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 bg-gray-100 text-gray-900 rounded-lg shadow-lg hover:bg-white hover:text-primary-600 transition-all text-base md:text-lg font-semibold transform hover:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-primary-500"
              >
                All Services
                <MdArrowForward className="ml-2" size={24} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-primary-400 font-bold text-3xl mb-2">15+</div>
                <div className="text-gray-200">Years Experience</div>
              </div>
              <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-primary-400 font-bold text-3xl mb-2">10k+</div>
                <div className="text-gray-200">Happy Customers</div>
              </div>
              <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-primary-400 font-bold text-3xl mb-2">24/7</div>
                <div className="text-gray-200">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServiceCategories />

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                With over a decade of experience in AC services, we provide reliable and professional solutions for all your cooling needs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <MdCheckCircle className="text-primary-500 mt-1 mr-3 flex-shrink-0" size={24} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2338&auto=format&fit=crop"
                alt="AC Service Team"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-6 rounded-lg hidden md:block">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <GoogleReviews />

      {/* CTA Section */}
      <section className="bg-primary-600 text-black py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-col items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                Ready to Experience Our Service?
              </h2>
              <p className="text-lg text-primary-100">
                Book your AC service today and enjoy professional, reliable, and affordable solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919773754227"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-lg shadow-lg hover:bg-gray-100 transition-all text-lg font-semibold transform hover:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-primary-500"
              >
                <MdPhone className="mr-2" size={24} />
                Call Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-lg shadow-lg hover:bg-gray-100 transition-all text-lg font-semibold transform hover:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-primary-500"
              >
                Book Online
                <MdArrowForward className="ml-2" size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
