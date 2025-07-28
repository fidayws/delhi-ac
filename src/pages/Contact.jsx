import React, { useState } from 'react';
import { 
  MdPhone, 
  MdEmail, 
  MdLocationPin, 
  MdAccessTime, 
  MdWhatsapp,
  MdCheckCircle,
  MdStar,
  MdAir,
  MdAcUnit,
  MdSupport
} from 'react-icons/md';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('form');

  const contactInfo = [
    {
      icon: <MdPhone size={28} />,
      title: "Phone",
      content: "+91-97737 54227",
      link: "tel:+919773754227",
      description: "24/7 Emergency Service Available"
    },
    {
      icon: <MdWhatsapp size={28} />,
      title: "WhatsApp",
      content: "+91-97737 54227",
      link: "https://wa.me/919773754227?text=Hi! I need AC service in Delhi",
      description: "Quick Response on WhatsApp"
    },
    {
      icon: <MdEmail size={28} />,
      title: "Email",
      content: "info@delhiairconditioner.com",
      link: "mailto:info@delhiairconditioner.com",
      description: "Send us your queries anytime"
    },
    {
      icon: <MdLocationPin size={28} />,
      title: "Address",
      content: "Shop no 789, Block k2, Tara Chand Colony, K-Block, Mahipalpur Village, Mahipalpur, New Delhi, Delhi 110037",
      link: "https://maps.google.com/?q=Shop no 789, Block k2, Tara Chand Colony, K-Block, Mahipalpur Village, Mahipalpur, New Delhi, Delhi 110037",
      description: "Visit our service center"
    }
  ];

  const businessHours = [
    { day: "Monday", hours: "9:00 AM - 8:00 PM", isOpen: true },
    { day: "Tuesday", hours: "9:00 AM - 8:00 PM", isOpen: true },
    { day: "Wednesday", hours: "9:00 AM - 8:00 PM", isOpen: true },
    { day: "Thursday", hours: "9:00 AM - 8:00 PM", isOpen: true },
    { day: "Friday", hours: "9:00 AM - 8:00 PM", isOpen: true },
    { day: "Saturday", hours: "9:00 AM - 8:00 PM", isOpen: true },
    { day: "Sunday", hours: "9:00 AM - 8:00 PM", isOpen: true }
  ];

  const serviceAreas = [
    "Mahipalpur", "Vasant Kunj", "Gurgaon", "South Delhi", "IGI Airport Area",
    "Dwarka", "Vasant Vihar", "Hauz Khas", "Saket", "Greater Kailash",
    "Lajpat Nagar", "Delhi Cantonment", "RK Puram", "Chanakyapuri"
  ];



  const testimonials = [
    {
      name: "Raj Sharma",
      area: "Vasant Kunj",
      rating: 5,
      text: "Excellent service! The technician arrived within an hour of my call and fixed my AC issue promptly. Very professional and knowledgeable."
    },
    {
      name: "Priya Malhotra",
      area: "Mahipalpur",
      rating: 5,
      text: "I've been using Delhi Air Conditioner's services for 3 years now. Their AMC service is reliable and the staff is always courteous."
    },
    {
      name: "Amit Kumar",
      area: "Dwarka",
      rating: 4,
      text: "Quick response time and good service. Fixed my AC during peak summer when other services were unavailable."
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 ">Contact Delhi's AC Experts</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              We're ready to solve your air conditioning needs 24/7 with prompt, professional service
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
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-800 text-green-500 rounded-lg hover:bg-blue-900 transition-all text-lg font-semibold shadow-lg"
              >
                <MdWhatsapp className="mr-2" size={24} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.title === "Address" || info.title === "WhatsApp" ? "_blank" : "_self"}
                rel={info.title === "Address" || info.title === "WhatsApp" ? "noopener noreferrer" : ""}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-blue-600 mb-4 bg-blue-50 p-3 rounded-full inline-block">{info.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-700 font-medium mb-2">{info.content}</p>
                <p className="text-sm text-gray-500">{info.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <div className="mb-6">
                <div className="flex border-b bg-white rounded-t-xl">
                  <button 
                    className={`px-4 py-2 text-lg font-medium ${activeTab === 'form' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('form')}
                  >
                    Send Message
                  </button>
                  <button 
                    className={`px-4 py-2 text-lg font-medium ${activeTab === 'faq' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('faq')}
                  >
                    FAQs
                  </button>
                </div>
              </div>
              
              {activeTab === 'form' ? (
                <ContactForm showTitle={false} />
              ) : (
                <FAQ 
                  showTitle={false} 
                  onAskQuestion={() => setActiveTab('form')} 
                />
              )}
            </div>
            
            {/* Map & Hours */}
            <div className="lg:w-1/2">
              <motion.div 
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 h-full flex flex-col"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex-1 min-h-[300px]">
                  <iframe
                    title="Delhi Air Conditioner Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0234811606347!2d77.12183007607666!3d28.547999075632086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c7c4e00000f%3A0x9b2e2e4c000000!2sShop%20no%20789%2C%20Block%20k2%2C%20Tara%20Chand%20Colony%2C%20K-Block%2C%20Mahipalpur%20Village%2C%20Mahipalpur%2C%20New%20Delhi%2C%20Delhi%20110037!5e0!3m2!1sen!2sin!4v1710669600000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "300px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <MdAccessTime className="mr-2 text-blue-600" size={24} />
                    Business Hours
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2">
                        <span className="font-medium text-gray-900">{schedule.day}</span>
                        <span className={`text-sm font-medium ${schedule.isOpen ? 'text-green-600' : 'text-red-600'}`}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-green-600 font-medium flex items-center">
                      <MdCheckCircle className="mr-2" />
                      24/7 Emergency Service Available
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Areas in Delhi NCR</h2>
            <p className="text-gray-600">
              We provide prompt AC repair and service across these locations in Delhi NCR with an average response time of 30-60 minutes.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ staggerChildren: 0.1 }}
          >
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 rounded-lg p-3 text-center text-blue-700 font-medium hover:bg-blue-100 transition-colors"
                variants={fadeIn}
              >
                <MdLocationPin className="inline-block mr-1 text-blue-600" />
                {area}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">
              We pride ourselves on delivering excellent service to our customers across Delhi NCR
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex text-amber-400 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <MdStar key={i} size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.area}</p>
                  </div>
                  <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    Verified Customer
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <MdAir className="text-4xl mr-3 text-blue-300" />
                <MdAcUnit className="text-4xl text-blue-300" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Emergency AC Service?
              </h2>
              <p className="text-xl text-blue-100">
                Our expert technicians are available 24/7 for your emergency AC repairs. 
                One call away from cool comfort!
              </p>
              <div className="mt-6 flex items-center text-blue-100">
                <MdSupport size={24} className="mr-2" />
                <span>Average response time: 30-60 minutes</span>
              </div>
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
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-900 text-green-500 rounded-lg hover:bg-blue-950 transition-all text-lg font-semibold shadow-lg"
              >
                <MdWhatsapp className="mr-2" size={24} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;