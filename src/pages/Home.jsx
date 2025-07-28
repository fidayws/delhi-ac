import React from 'react';
import {
  MdArrowForward,
  MdCheckCircle,
  MdPhone,
  MdStar,
  MdThermostat,
  MdBuildCircle,
  MdSecurity,
  MdAccessTime,
  MdVerified,
  MdSupportAgent,
  MdFlashOn,
  MdTrendingUp,
  MdThumbUp,
  MdShield
} from 'react-icons/md';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import GoogleReviews from '../components/GoogleReviews';
import ServiceCategories from '../components/ServiceCategories';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';

const Home = () => {
  const features = [
    "Licensed & Insured Technicians",
    "24/7 Emergency Service",
    "Genuine Parts & Components",
    "Transparent Pricing",
    "1 Year Service Warranty",
    "Same Day Service Available"
  ];

  // Home page structured data
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Delhi AC Services",
    "alternateName": "Delhi Air Conditioner Services",
    "url": "https://delhiacservices.com",
    "logo": "https://res.cloudinary.com/dw1sh368y/image/upload/v1753519612/266_bgmeao.jpg",
    "description": "Delhi's most trusted AC service provider offering professional air conditioner installation, repair, maintenance, and emergency services in Delhi NCR. Available 24/7 with certified technicians.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi",
      "addressRegion": "Delhi",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-97737-54227",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["Hindi", "English"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1000+",
      "bestRating": "5"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AC Services Delhi",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Emergency AC Repair Delhi",
          "serviceType": "AC Repair",
          "areaServed": "Delhi NCR"
        },
        {
          "@type": "Service", 
          "name": "Split AC Installation Delhi",
          "serviceType": "AC Installation",
          "areaServed": "Delhi NCR"
        },
        {
          "@type": "Service",
          "name": "Window AC Service Delhi", 
          "serviceType": "AC Maintenance",
          "areaServed": "Delhi NCR"
        }
      ]
    }
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <SEO 
        title="Delhi AC Services - Best AC Repair & Installation Service in Delhi | 24/7 Emergency AC Service"
        description="Delhi's #1 AC service provider offering professional air conditioner repair, installation, maintenance & emergency services in Delhi NCR. 20+ years experience, certified technicians, same day service. Call +91-97737-54227 for immediate AC repair in Delhi."
        keywords="AC repair Delhi, air conditioner service Delhi, AC installation Delhi, emergency AC repair Delhi, split AC repair Delhi, window AC service Delhi, AC maintenance Delhi, commercial AC service Delhi, residential AC repair Delhi, AC gas refilling Delhi, AC cleaning service Delhi, 24/7 AC repair Delhi, best AC service Delhi, affordable AC repair Delhi, AC technician Delhi, HVAC services Delhi, central AC repair Delhi, ducted AC service Delhi, AC AMC Delhi, branded AC repair Delhi"
        url="/"
        structuredData={homeStructuredData}
      />
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-[80px] sm:pt-[100px]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dw1sh368y/image/upload/v1753519612/266_bgmeao.jpg"
            alt="Professional AC repair and installation service in Delhi - Expert technicians working on air conditioner maintenance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-blue-900/50" />
          
          {/* Animated Background Elements */}
          <div className="absolute top-10 left-4 sm:top-20 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-8 sm:bottom-32 sm:right-16 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute top-1/2 right-10 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 bg-blue-300/30 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            className="max-w-4xl text-white py-16 sm:py-20 md:py-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 px-4 py-2 rounded-full text-blue-200 text-sm font-medium mb-6"
            >
              <MdVerified size={16} className="text-blue-400" />
              Delhi's Most Trusted AC Service Provider
            </motion.div>
            
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Best AC Repair & Installation<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Service in Delhi
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-200 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Delhi's most trusted AC service provider offering emergency AC repair, split AC installation, window AC service, and preventive AC maintenance across Delhi NCR. Licensed technicians available 24/7 for immediate air conditioner repair and installation with same-day service guarantee.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-10 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="tel:+919773754227"
                className="group flex-1 sm:flex-none inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-sm sm:text-base font-semibold transform hover:scale-105 hover:from-blue-700 hover:to-blue-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MdPhone className="mr-2 group-hover:animate-pulse" size={18} />
                <span className="truncate">Call: +91-97737 54227</span>
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 sm:flex-none"
              >
                <Link
                  to="/services"
                  className="group w-full inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl shadow-xl hover:bg-white hover:text-blue-600 transition-all duration-300 text-sm sm:text-base font-semibold transform hover:scale-105"
                >
                  All Services
                  <MdArrowForward className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-10 max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div 
                className="group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/10 p-3 sm:p-6 rounded-xl sm:rounded-2xl text-center hover:from-blue-600/30 hover:to-blue-400/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <MdTrendingUp className="mx-auto mb-2 sm:mb-3 text-blue-400 group-hover:text-blue-300" size={24} />
                <div className="text-blue-400 font-bold text-xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2 group-hover:text-blue-300">20+</div>
                <div className="text-gray-200 text-xs sm:text-sm lg:text-base font-medium">Years Experience</div>
              </motion.div>
              <motion.div 
                className="group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/10 p-3 sm:p-6 rounded-xl sm:rounded-2xl text-center hover:from-blue-600/30 hover:to-blue-400/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
                transition={{ delay: 0.1 }}
              >
                <MdThumbUp className="mx-auto mb-2 sm:mb-3 text-blue-400 group-hover:text-blue-300" size={24} />
                <div className="text-blue-400 font-bold text-xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2 group-hover:text-blue-300">10k+</div>
                <div className="text-gray-200 text-xs sm:text-sm lg:text-base font-medium">Happy Customers</div>
              </motion.div>
              <motion.div 
                className="group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md border border-white/10 p-3 sm:p-6 rounded-xl sm:rounded-2xl text-center hover:from-blue-600/30 hover:to-blue-400/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
                transition={{ delay: 0.2 }}
              >
                <MdSupportAgent className="mx-auto mb-2 sm:mb-3 text-blue-400 group-hover:text-blue-300" size={24} />
                <div className="text-blue-400 font-bold text-xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2 group-hover:text-blue-300">24/7</div>
                <div className="text-gray-200 text-xs sm:text-sm lg:text-base font-medium">Emergency Service</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <ServiceCategories />

      {/* Features Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              >
                <MdShield size={16} />
                Quality Assured Services
              </motion.div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                Why Choose Us?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                With over two decades of experience in AC services, we provide reliable and professional solutions for all your cooling needs with certified expertise.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="group flex items-start p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-blue-100"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      <MdCheckCircle className="text-white" size={20} />
                    </div>
                    <div>
                      <span className="text-gray-800 font-medium text-base sm:text-lg group-hover:text-blue-600 transition-colors">
                        {feature}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="relative mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2338&auto=format&fit=crop"
                  alt="Professional AC technician team providing expert air conditioner repair and installation services in Delhi"
                  className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <MdFlashOn className="text-white mb-2" size={32} />
                <div className="text-3xl sm:text-4xl font-bold mb-2">15+</div>
                <div className="text-blue-100 font-medium">Years of Excellence</div>
              </motion.div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                <MdVerified className="text-blue-600" size={24} />
              </div>
              <div className="absolute bottom-20 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                <MdSupportAgent size={20} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <GoogleReviews />

      {/* FAQ and Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6"
            >
              <MdSupportAgent size={20} />
              24/7 Customer Support Available
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Get Your Questions Answered
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Find answers to common questions or get in touch with our experts directly for personalized assistance
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
                <FAQ title="Common Questions" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl"></div>
                <ContactForm title="Quick Contact" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300/5 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="flex flex-col items-center justify-center gap-8 sm:gap-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-white/90 text-sm font-semibold mb-6"
              >
                <MdFlashOn size={16} className="text-yellow-300" />
                Get Instant Service Booking
              </motion.div>

              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Ready to Experience Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Premium Service?
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Book your AC service today and enjoy professional, reliable, and affordable solutions with same-day service guarantee.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="tel:+919773754227"
                className="group flex-1 inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-white text-blue-700 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-base sm:text-lg font-bold transform hover:scale-105 hover:bg-yellow-50"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <MdPhone className="mr-2 sm:mr-3 group-hover:animate-pulse" size={20} />
                <span className="truncate">Call: +91-97737 54227</span>
              </motion.a>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <Link
                  to="/contact"
                  className="group w-full inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl shadow-2xl hover:shadow-3xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-base sm:text-lg font-bold transform"
                >
                  <span className="truncate">Book Online Service</span>
                  <MdArrowForward className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform flex-shrink-0" size={20} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-8 mt-8 text-blue-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <MdVerified size={20} className="text-green-400" />
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <MdStar size={20} className="text-yellow-400" />
                <span className="text-sm font-medium">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <MdShield size={20} className="text-blue-400" />
                <span className="text-sm font-medium">1-Year Warranty</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
