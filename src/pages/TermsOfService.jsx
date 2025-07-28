import React from 'react';
import { MdGavel, MdInfo, MdContactMail, MdUpdate } from 'react-icons/md';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <MdGavel size={64} className="mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-blue-100">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-blue-200 mt-4">
              <MdUpdate className="inline mr-2" />
              Last updated: January 2024
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <MdInfo className="mr-3 text-blue-600" />
                  Agreement to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you ("Customer," "you," or "your") and Delhi AC Services ("Company," "we," "us," or "our") regarding your use of our services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By accessing our website, scheduling services, or engaging with our company in any way, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
                </p>
              </section>

              {/* Services Description */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Delhi AC Services provides professional home appliance repair and maintenance services, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Air conditioner installation, repair, servicing, and maintenance</li>
                  <li>Refrigerator and freezer repair services</li>
                  <li>Water cooler and dispenser repair</li>
                  <li>Kitchen appliance repair (ovens, microwaves)</li>
                  <li>Washing machine repair and servicing</li>
                  <li>Annual Maintenance Contracts (AMC)</li>
                  <li>Genuine spare parts supply and installation</li>
                </ul>
              </section>

              {/* Booking and Scheduling */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Booking and Scheduling</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Requests</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Service requests can be made via phone, website, or in-person</li>
                  <li>All service requests are subject to technician availability</li>
                  <li>We will confirm appointments within 24 hours of your request</li>
                  <li>Emergency services may be available subject to additional charges</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Appointment Changes</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Customers may reschedule appointments with at least 2 hours advance notice</li>
                  <li>We reserve the right to reschedule due to unforeseen circumstances</li>
                  <li>Repeated no-shows may result in service refusal</li>
                </ul>
              </section>

              {/* Pricing and Payment */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing and Payment Terms</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Charges</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Service charges are determined based on the type and complexity of work</li>
                  <li>Diagnostic charges may apply for assessment of appliance issues</li>
                  <li>Travel charges may apply for locations outside our standard service area</li>
                  <li>All prices are inclusive of applicable taxes unless specified otherwise</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Terms</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Payment is due upon completion of services unless other arrangements are made</li>
                  <li>We accept cash, UPI, and other digital payment methods</li>
                  <li>For AMC services, payment terms will be specified in the contract</li>
                  <li>Parts and materials are charged separately unless included in service package</li>
                </ul>
              </section>

              {/* Warranties and Guarantees */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Warranties and Guarantees</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Warranty</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>We provide a 30-day warranty on all repair services</li>
                  <li>Parts installed by us carry manufacturer warranty</li>
                  <li>Warranty covers defects in workmanship, not normal wear and tear</li>
                  <li>Warranty is void if appliance is tampered with by unauthorized persons</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Warranty Limitations</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Warranty does not cover damage due to misuse or negligence</li>
                  <li>Environmental damage (water, fire, electrical surges) is not covered</li>
                  <li>Consumable parts (filters, batteries) have limited warranty</li>
                  <li>Warranty claims must be reported within the warranty period</li>
                </ul>
              </section>

              {/* Customer Responsibilities */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Responsibilities</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Provide accurate information about the appliance and issue</li>
                  <li>Ensure safe access to the appliance for our technicians</li>
                  <li>Be present during service appointments or authorize a representative</li>
                  <li>Follow maintenance instructions provided by our technicians</li>
                  <li>Use appliances according to manufacturer guidelines</li>
                  <li>Report warranty claims promptly and in good faith</li>
                  <li>Pay for services as agreed upon</li>
                </ul>
              </section>

              {/* Company Responsibilities */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Responsibilities</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Provide services with reasonable care and skill</li>
                  <li>Use genuine or compatible parts wherever possible</li>
                  <li>Maintain technician certification and training</li>
                  <li>Respect customer property and privacy</li>
                  <li>Provide clear pricing before commencing work</li>
                  <li>Honor warranties and guarantees as specified</li>
                  <li>Maintain insurance coverage for our operations</li>
                </ul>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <p className="text-yellow-800 font-medium">
                    Important: Please read this section carefully as it limits our liability.
                  </p>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Our liability is limited to the cost of the service provided</li>
                  <li>We are not liable for indirect, consequential, or punitive damages</li>
                  <li>We are not responsible for data loss on smart appliances</li>
                  <li>Pre-existing damage to appliances limits our liability</li>
                  <li>Customer must inspect work before technician departure</li>
                  <li>Claims must be reported within 7 days of service completion</li>
                </ul>
              </section>

              {/* Cancellation Policy */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cancellation and Refund Policy</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Cancellation</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Customers may cancel appointments with 2+ hours advance notice</li>
                  <li>Cancellations with less notice may incur travel charges</li>
                  <li>AMC cancellations are subject to contract terms</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Refund Policy</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Refunds are provided for unresolved warranty claims</li>
                  <li>Parts purchased are non-refundable unless defective</li>
                  <li>Service charges are refundable if work is not completed</li>
                  <li>Refund processing may take 7-14 business days</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All content on our website, including text, graphics, logos, and software, is the property of Delhi AC Services or its licensors and is protected by copyright and other intellectual property laws.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You may not reproduce, distribute, or create derivative works from our content without express written permission.
                </p>
              </section>

              {/* Privacy */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices regarding your personal information.
                </p>
              </section>

              {/* Modifications */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Modifications to Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes constitutes acceptance of the modified Terms.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We recommend reviewing these Terms periodically to stay informed of any changes.
                </p>
              </section>

              {/* Governing Law */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law and Jurisdiction</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms are governed by the laws of India. Any disputes arising from these Terms or our services will be subject to the exclusive jurisdiction of the courts in Delhi, India.
                </p>
              </section>

              {/* Severability */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Severability</h2>
                <p className="text-gray-700 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will remain in full force and effect.
                </p>
              </section>

              {/* Contact Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MdContactMail className="mr-3 text-blue-600" />
                  Contact Information
                </h2>
                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Delhi AC Services</strong></p>
                    <p>Shop no 789, Block k2, Tara Chand Colony, Mahipalpur, Delhi</p>
                    <p>Phone: +91-97737 54227</p>
                    <p>Email: legal@delhiac.com</p>
                    <p>Website: www.delhiac.com</p>
                  </div>
                </div>
              </section>

              {/* Acknowledgment */}
              <section className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Acknowledgment</h3>
                <p className="text-gray-700 leading-relaxed">
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These Terms constitute the entire agreement between you and Delhi AC Services regarding your use of our services.
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;