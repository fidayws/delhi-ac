import React from 'react';
import { MdMilitaryTech, MdAccessTime, MdSecurity } from 'react-icons/md';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Rohit Sharma",
      position: "Senior AC Technician",
      experience: "12+ Years",
      specialization: "Installation & Repair",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Vikash Kumar",
      position: "Lead Service Engineer",
      experience: "10+ Years",
      specialization: "Maintenance & AMC",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Suresh Gupta",
      position: "Installation Specialist",
      experience: "8+ Years",
      specialization: "Commercial AC Systems",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Ramesh Singh",
      position: "Customer Service Manager",
      experience: "6+ Years",
      specialization: "Customer Relations",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  const stats = [
    {
      icon: MdMilitaryTech,
      number: "500+",
      label: "Happy Customers"
    },
    {
      icon: MdAccessTime,
      number: "24/7",
      label: "Emergency Service"
    },
    {
      icon: MdSecurity,
      number: "10+",
      label: "Years Experience"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Our certified and experienced technicians are committed to providing the best AC service in Delhi NCR.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our skilled professionals are certified, experienced, and dedicated to providing exceptional AC services across Delhi NCR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="service-card text-center">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary-100"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {member.experience}
                </div>
              </div>
              
              <h3 className="font-bold text-lg text-gray-800 mb-2">{member.name}</h3>
              <p className="text-primary-600 font-semibold mb-2">{member.position}</p>
              <p className="text-gray-600 text-sm">{member.specialization}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              All Our Technicians Are
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 text-green-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  ✓
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Certified</h4>
                <p className="text-gray-600 text-sm">Licensed and certified by leading AC manufacturers</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  ✓
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Insured</h4>
                <p className="text-gray-600 text-sm">Fully insured for your peace of mind</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  ✓
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Background Checked</h4>
                <p className="text-gray-600 text-sm">Thoroughly vetted and background verified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;