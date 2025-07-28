import React from 'react';
import { MdMilitaryTech, MdGroup, MdAccessTime, MdSecurity, MdCheckCircle, MdTrackChanges, MdRemoveRedEye, MdFavorite } from 'react-icons/md';
import SEO from '../components/SEO';
import TeamSection from '../components/TeamSection';

const About = () => {
  const achievements = [
    {
      icon: MdGroup,
      number: "2500+",
      label: "Happy Customers",
      description: "Satisfied customers across Delhi NCR"
    },
    {
      icon: MdAccessTime,
      number: "20+",
      label: "Years Experience",
      description: "Decade of reliable AC service"
    },
    {
      icon: MdMilitaryTech,
      number: "50+",
      label: "Certified Technicians",
      description: "Skilled and certified professionals"
    },
    {
      icon: MdSecurity,
      number: "24/7",
      label: "Emergency Service",
      description: "Round-the-clock support"
    }
  ];

  const values = [
    {
      icon: MdTrackChanges,
      title: "Our Mission",
      description: "To provide reliable, efficient, and affordable air conditioning services that ensure comfort for every home and office in Delhi NCR."
    },
    {
      icon: MdRemoveRedEye,
      title: "Our Vision",
      description: "To be the most trusted AC service provider in Delhi NCR, known for excellence, innovation, and customer satisfaction."
    },
    {
      icon: MdFavorite,
      title: "Our Values",
      description: "Integrity, quality craftsmanship, customer-first approach, and continuous improvement in all our services."
    }
  ];

  const certifications = [
    "Licensed HVAC Contractor",
    "BEE Certified Technicians",
    "Manufacturer Authorized Service",
    "ISO 9001:2015 Quality Management",
    "Environmental Safety Certified",
    "Customer Service Excellence Award"
  ];

  // About page structured data
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "HVAC",
      "name": "Delhi AC Services",
      "description": "Delhi NCR's most trusted air conditioning service provider with over 20+ years of experience in delivering quality AC solutions for homes and businesses.",
      "foundingDate": "2000",
      "employee": [
        {
          "@type": "Person",
          "jobTitle": "Certified HVAC Technician",
          "memberOf": {
            "@type": "Organization", 
            "name": "Delhi AC Services"
          }
        }
      ],
      "hasCredential": [
        "Licensed HVAC Contractor",
        "BEE Certified Technicians", 
        "Manufacturer Authorized Service",
        "ISO 9001:2015 Quality Management"
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Delhi"
        },
        {
          "@type": "City", 
          "name": "Gurgaon"
        },
        {
          "@type": "City",
          "name": "Noida"
        }
      ]
    }
  };

  return (
    <div className="bg-white">
      <SEO 
        title="About Delhi AC Services - 20+ Years of Expert AC Repair & Installation in Delhi NCR"
        description="Learn about Delhi AC Services - Delhi NCR's most trusted air conditioning service provider since 2000. 20+ years experience, 2500+ happy customers, certified technicians, licensed HVAC contractor. Professional AC repair, installation & maintenance services."
        keywords="about Delhi AC services, Delhi AC company, experienced AC technician Delhi, licensed HVAC contractor Delhi, certified AC repair company Delhi, AC service provider Delhi NCR, professional AC installation company Delhi, trusted AC maintenance service Delhi"
        url="/about"
        structuredData={aboutStructuredData}
      />
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              About Delhi AC Services - Your Trusted AC Service Provider
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delhi NCR's most trusted air conditioning service provider with over 20+ years of experience 
              in delivering professional AC repair, installation, and maintenance solutions for residential and commercial properties across Delhi, Gurgaon, Noida, and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2000, CoolTech Services began as a small family business with a simple mission: 
                  to provide reliable and affordable air conditioning services to the people of Delhi NCR. 
                  What started with just two technicians and a van has grown into the region's most trusted AC service provider.
                </p>
                <p>
                  Over the years, we've expanded our services to cover installation, repair, maintenance, 
                  and AMC services across Delhi, Gurgaon, Noida, Faridabad, and surrounding areas. Our commitment 
                  to quality and customer satisfaction has earned us the trust of over 500 happy customers.
                </p>
                <p>
                  Today, we're proud to be Delhi NCR's leading AC service provider, backed by a team of 
                  certified technicians, modern equipment, and a customer-first approach that sets us apart 
                  from the competition.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Professional AC service team - Certified technicians providing expert air conditioner repair services in Delhi"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/8293690/pexels-photo-8293690.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Expert AC installation service in Delhi - Professional technician installing split air conditioner"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="bg-primary-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <achievement.icon size={24} />
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-2">{achievement.number}</div>
                <div className="font-semibold text-gray-900 mb-2">{achievement.label}</div>
                <div className="text-sm text-gray-600">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission, Vision & Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What drives us every day and guides our commitment to excellence in AC services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="bg-primary-100 text-primary-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Certifications & Credentials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards of professionalism through continuous training and certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <MdCheckCircle size={20} className="text-primary-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Delhi NCR Chooses CoolTech Services
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MdCheckCircle size={20} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully licensed HVAC contractor with comprehensive insurance coverage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MdCheckCircle size={20} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Transparent Pricing</h3>
                    <p className="text-gray-600">No hidden charges - clear, upfront pricing for all services</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MdCheckCircle size={20} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Genuine Parts</h3>
                    <p className="text-gray-600">Only authentic, manufacturer-approved parts and components</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MdCheckCircle size={20} className="text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Service Warranty</h3>
                    <p className="text-gray-600">1-year warranty on all repairs and installations</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Satisfaction</h3>
                <div className="text-5xl font-bold text-primary-600 mb-2">4.9/5</div>
                <p className="text-gray-600 mb-4">Average rating from 500+ customers</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">98%</div>
                    <div className="text-sm text-gray-600">Same Day Service</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">Customer Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;