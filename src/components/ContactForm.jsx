import React, { useState } from 'react';
import { MdSend, MdCheckCircle, MdPerson, MdPhone, MdEmail, MdBuild, MdMessage } from 'react-icons/md';
import { motion } from 'framer-motion';

const ContactForm = ({ title = "Get in Touch", showTitle = true }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'AC Repair',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // // Option 1: Send to your backend API
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (!response.ok) {
      //   throw new Error('Failed to send message');
      // }

      // Option 2: Alternative - Send via EmailJS (uncomment if using EmailJS)
      /*
      const emailjs = await import('emailjs-com');
      await emailjs.default.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          to_email: 'your-email@example.com',
        },
        'YOUR_PUBLIC_KEY'
      );
      */
      
      const response = await fetch('https://formspree.io/f/mdkdzeqd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      

      // Success - show success message
      setFormSubmitted(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'AC Repair',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => setFormSubmitted(false), 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Failed to send message. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full blur-3xl opacity-50"></div>
      
      {showTitle && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent mb-2">
            {title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
        </motion.div>
      )}
      
      {formSubmitted && (
        <motion.div 
          className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-6 rounded-2xl flex items-center text-green-700 mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-green-500 text-white p-2 rounded-full mr-4">
            <MdCheckCircle size={24} />
          </div>
          <div>
            <p className="font-semibold">Message Sent Successfully!</p>
            <p className="text-sm text-green-600">We'll contact you within 30 minutes.</p>
          </div>
        </motion.div>
      )}

      {submitError && (
        <motion.div 
          className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 p-6 rounded-2xl flex items-center text-red-700 mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-red-500 text-white p-2 rounded-full mr-4">
            <MdCheckCircle size={24} />
          </div>
          <div>
            <p className="font-semibold">Error Sending Message</p>
            <p className="text-sm text-red-600">{submitError}</p>
          </div>
        </motion.div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-3 flex items-center">
              <MdPerson className="mr-2 text-blue-500" size={18} />
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300"
                placeholder="Enter your full name"
                required
              />
              <MdPerson className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-3 flex items-center">
              <MdPhone className="mr-2 text-blue-500" size={18} />
              Phone Number
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300"
                placeholder="+91-XXXXX XXXXX"
                required
              />
              <MdPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-3 flex items-center">
            <MdEmail className="mr-2 text-blue-500" size={18} />
            Email Address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300"
              placeholder="your.email@example.com"
              required
            />
            <MdEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <label htmlFor="service" className="block text-gray-700 font-semibold mb-3 flex items-center">
            <MdBuild className="mr-2 text-blue-500" size={18} />
            Service Required
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 appearance-none bg-white"
              required
            >
              <option value="AC Repair">AC Repair</option>
              <option value="AC Service">AC Service</option>
              <option value="AC Installation">AC Installation</option>
              <option value="AC Gas Filling">AC Gas Filling</option>
              <option value="AMC">Annual Maintenance Contract</option>
              <option value="Other">Other</option>
            </select>
            <MdBuild className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-3 flex items-center">
            <MdMessage className="mr-2 text-blue-500" size={18} />
            Message
          </label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 resize-none"
              placeholder="Please describe your AC issue or requirement in detail..."
              required
            />
            <MdMessage className="absolute left-4 top-4 text-gray-400" size={20} />
          </div>
        </motion.div>
        
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`group w-full py-4 px-8 rounded-xl text-lg font-bold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 hover:scale-[1.02]'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              Sending...
            </>
          ) : (
            <>
              <MdSend className="mr-3 group-hover:translate-x-1 transition-transform" size={22} />
              Send Message
            </>
          )}
        </motion.button>
      </form>
      
      {/* Contact info */}
      <motion.div 
        className="mt-8 pt-6 border-t border-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-center text-gray-600 text-sm">
          Need immediate assistance? Call us at{" "}
          <a href="tel:+919773754227" className="text-blue-600 font-semibold hover:text-blue-700">
            +91-97737 54227
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;