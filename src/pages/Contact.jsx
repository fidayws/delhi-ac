import React, { useState } from 'react';
import { MdPhone, MdEmail, MdLocationPin, MdAccessTime, MdSend, MdWhatsapp } from 'react-icons/md';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MdPhone size={24} />,
      title: "Phone",
      content: "+91-97737 54227",
      link: "tel:+919773754227",
      description: "24/7 Emergency Service Available"
    },
    {
      icon: <MdWhatsapp size={24} />,
      title: "WhatsApp",
      content: "+91-97737 54227",
      link: "https://wa.me/919773754227?text=Hi! I need AC service in Delhi",
      description: "Quick Response on WhatsApp"
    },
    {
      icon: <MdEmail size={24} />,
      title: "Email",
      content: "info@delhiairconditioner.com",
      link: "mailto:info@delhiairconditioner.com",
      description: "Send us your queries anytime"
    },
    {
      icon: <MdLocationPin size={24} />,
      title: "Address",
      content: "Shop no 789, Block k2, Tara Chand Colony, K-Block, Mahipalpur Village, Mahipalpur, New Delhi, Delhi 110037",
      link: "https://maps.google.com/?q=Shop no 789, Block k2, Tara Chand Colony, K-Block, Mahipalpur Village, Mahipalpur, New Delhi, Delhi 110037",
      description: "Visit our service center"
    }
  ];

  const businessHours = [
    { day: "Monday", hours: "9:00 AM - 8:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 8:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 8:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 8:00 PM" },
    { day: "Friday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 8:00 PM" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600">
              Get in touch with Delhi Air Conditioner for all your AC needs. We're here to help 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.title === "Address" ? "_blank" : "_self"}
                rel={info.title === "Address" ? "noopener noreferrer" : ""}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-primary-600 mb-4">{info.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600 mb-2">{info.content}</p>
                <p className="text-sm text-gray-500">{info.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Business Hours</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              {businessHours.map((schedule, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center p-4 ${
                    index !== businessHours.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <span className="font-medium text-gray-900">{schedule.day}</span>
                  <span className="text-gray-600">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Delhi Air Conditioner Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0234811606347!2d77.12183007607666!3d28.547999075632086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c7c4e00000f%3A0x9b2e2e4c000000!2sShop%20no%20789%2C%20Block%20k2%2C%20Tara%20Chand%20Colony%2C%20K-Block%2C%20Mahipalpur%20Village%2C%20Mahipalpur%2C%20New%20Delhi%2C%20Delhi%20110037!5e0!3m2!1sen!2sin!4v1710669600000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Emergency AC Service?
              </h2>
              <p className="text-lg text-primary-100">
                Our expert technicians are available 24/7 for your emergency AC repairs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+919773754227"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-primary-50 transition-all text-lg font-semibold"
              >
                <MdPhone className="mr-2" size={24} />
                Call Now
              </a>
              <a 
                href="https://wa.me/919773754227"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-all text-lg font-semibold"
              >
                <MdWhatsapp className="mr-2" size={24} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;