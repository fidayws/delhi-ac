import React from 'react';
import { MdWork, MdPeople, MdTrendingUp, MdLocationOn, MdEmail, MdPhone, MdSchedule, MdHandshake, MdSchool, MdBuild, MdCheckCircle } from 'react-icons/md';

const Careers = () => {
  const benefits = [
    {
      icon: MdTrendingUp,
      title: "Career Growth",
      description: "Opportunities for advancement and professional development in a growing company."
    },
    {
      icon: MdHandshake,
      title: "Competitive Package",
      description: "Attractive salary with performance-based incentives and bonuses."
    },
    {
      icon: MdSchool,
      title: "Training & Certification",
      description: "Regular training programs and certification courses to enhance your skills."
    },
    {
      icon: MdSchedule,
      title: "Flexible Hours",
      description: "Work-life balance with flexible working hours and team support."
    }
  ];

  const openPositions = [
    {
      title: "AC Technician",
      type: "Full Time",
      experience: "2+ Years",
      location: "Delhi NCR",
      requirements: [
        "Diploma in Electrical/Electronics or equivalent",
        "Experience in AC installation, repair, and maintenance",
        "Knowledge of different AC brands and models",
        "Good communication skills",
        "Valid driving license preferred"
      ]
    },
    {
      title: "Refrigerator Service Engineer",
      type: "Full Time", 
      experience: "1-3 Years",
      location: "Delhi NCR",
      requirements: [
        "ITI in Electronics/Electrical or similar qualification",
        "Experience in refrigerator and freezer repairs",
        "Understanding of cooling systems and gas filling",
        "Customer service oriented approach",
        "Ability to work independently"
      ]
    },
    {
      title: "Customer Service Executive",
      type: "Full Time",
      experience: "1+ Years", 
      location: "Mahipalpur, Delhi",
      requirements: [
        "Graduate in any stream",
        "Excellent communication skills in Hindi and English",
        "Customer service experience preferred",
        "Basic computer knowledge",
        "Pleasant personality and problem-solving skills"
      ]
    },
    {
      title: "Field Sales Executive",
      type: "Full Time",
      experience: "2+ Years",
      location: "Delhi NCR",
      requirements: [
        "Graduate with sales experience",
        "Experience in home appliance or service industry",
        "Own vehicle and valid driving license",
        "Target-oriented and self-motivated",
        "Good knowledge of Delhi NCR area"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <MdWork size={64} className="mx-auto mb-6 text-primary-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Build your career with Delhi's most trusted AC service company. We're looking for dedicated professionals who share our passion for excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a company that values its employees and provides opportunities for growth and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <benefit.icon size={48} className="text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600">
              Explore our current job opportunities and apply today!
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <MdWork className="mr-1" />
                        {position.type}
                      </span>
                      <span className="flex items-center">
                        <MdBuild className="mr-1" />
                        {position.experience}
                      </span>
                      <span className="flex items-center">
                        <MdLocationOn className="mr-1" />
                        {position.location}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    Apply Now
                  </button>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start text-gray-700">
                        <MdCheckCircle className="text-primary-500 mr-2 mt-1 flex-shrink-0" size={16} />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Apply?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Send us your resume or contact us for more information about career opportunities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <MdEmail size={48} className="text-primary-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">careers@delhiac.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MdPhone size={48} className="text-primary-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">+91-97737 54227</p>
              </div>
              <div className="flex flex-col items-center">
                <MdLocationOn size={48} className="text-primary-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 text-center">Shop no 789, Block k2<br />Tara Chand Colony, Mahipalpur</p>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-6">
              <p className="text-primary-800 font-medium">
                💡 <strong>Application Tip:</strong> Include your relevant experience, certifications, and why you want to join Delhi AC Services in your application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;