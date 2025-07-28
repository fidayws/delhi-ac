import React, { useState } from 'react';
import { MdQuestionAnswer, MdExpandMore, MdExpandLess, MdHelp, MdStar } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = ({ title = "Frequently Asked Questions", showTitle = true, onAskQuestion }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "How quickly can you respond to an emergency AC service?",
      answer: "We offer 24/7 emergency services and typically respond within 1-2 hours for urgent cases within Delhi NCR. Our rapid response team is equipped with all necessary tools and parts for immediate repairs.",
      popular: true
    },
    {
      question: "What is included in your regular AC service?",
      answer: "Our comprehensive AC service includes deep cleaning of filters, condenser coil, evaporator coil, checking refrigerant levels, inspecting electrical components, testing thermostat functionality, and overall performance optimization.",
      popular: true
    },
    {
      question: "Do you provide AMC (Annual Maintenance Contract) services?",
      answer: "Yes, we offer flexible AMC packages that include regular maintenance visits, priority service calls, discounted rates on repairs and parts, and extended warranty coverage.",
      popular: false
    },
    {
      question: "How much does AC gas refilling cost?",
      answer: "AC gas refilling costs depend on your AC model, gas type (R22, R32, R410A), and quantity required. We provide transparent pricing with no hidden charges. Contact us for a personalized quote.",
      popular: true
    },
    {
      question: "Do you provide warranty on your services?",
      answer: "Yes, we provide a comprehensive warranty on all our repair work. Service warranty ranges from 30 days to 1 year depending on the type of service and parts used. All genuine parts come with manufacturer warranty.",
      popular: false
    },
    {
      question: "What areas do you cover in Delhi NCR?",
      answer: "We provide services across Delhi NCR including Mahipalpur, Vasant Kunj, Gurgaon, South Delhi, IGI Airport Area, Dwarka, Vasant Vihar, Hauz Khas, Saket, and all surrounding areas within 25km radius.",
      popular: false
    }
  ];

  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-full blur-3xl opacity-50"></div>
      
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
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index}
            className="group border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -2 }}
          >
            <button
              onClick={() => toggleExpanded(index)}
              className="w-full p-6 text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 flex items-center justify-between"
            >
              <div className="flex items-start flex-1">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MdQuestionAnswer className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </h3>
                    {faq.popular && (
                      <span className="bg-gradient-to-r from-orange-400 to-red-400 text-white text-xs px-2 py-1 rounded-full font-semibold flex items-center gap-1">
                        <MdStar size={12} />
                        Popular
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 ml-4"
              >
                <div className="bg-blue-100 group-hover:bg-blue-200 p-2 rounded-xl transition-colors">
                  <MdExpandMore className="text-blue-600" size={24} />
                </div>
              </motion.div>
            </button>
            
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl ml-12">
                      <p className="text-gray-700 leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      
      {onAskQuestion && (
        <motion.div 
          className="pt-8 border-t border-gray-200 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center mb-6">
            <MdHelp className="mx-auto text-gray-400 mb-3" size={48} />
            <p className="text-gray-600 font-medium">Still have questions?</p>
            <p className="text-gray-500 text-sm">We're here to help you 24/7</p>
          </div>
          <motion.button
            onClick={onAskQuestion}
            className="group w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-6 rounded-2xl text-lg font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <MdQuestionAnswer className="mr-3 group-hover:scale-110 transition-transform" size={22} />
            Ask Your Question
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FAQ;