import React from 'react';
import { MdSecurity, MdInfo, MdContactMail, MdUpdate } from 'react-icons/md';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Privacy Policy - Delhi AC Services | How We Protect Your Information"
        description="Learn about Delhi AC Services' privacy policy and how we collect, use, and protect your personal information. Your privacy is important to us. Updated January 2024."
        keywords="Delhi AC Services privacy policy, privacy policy, data protection, information privacy, customer privacy, AC service privacy"
        url="/privacy-policy"
      />
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <MdSecurity size={64} className="mx-auto mb-6 text-primary-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy - Delhi AC Services
            </h1>
            <p className="text-xl text-primary-100">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-primary-200 mt-4">
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
                  <MdInfo className="mr-3 text-primary-600" />
                  Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Delhi AC Services ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By using our services, you consent to the data practices described in this policy. If you do not agree with the practices described in this policy, please do not use our services.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect personally identifiable information that you provide directly to us, such as:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Name and contact information (phone number, email address, postal address)</li>
                  <li>Service requests and appointment details</li>
                  <li>Payment information for completed services</li>
                  <li>Communication preferences</li>
                  <li>Feedback and survey responses</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Non-Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may also collect non-personal information automatically, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>IP address and location data</li>
                  <li>Website usage patterns and preferences</li>
                  <li>Device information</li>
                </ul>
              </section>

              {/* How We Use Information */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>To provide and maintain our services</li>
                  <li>To schedule appointments and dispatch technicians</li>
                  <li>To process payments and maintain service records</li>
                  <li>To communicate with you about our services</li>
                  <li>To send service reminders and maintenance notifications</li>
                  <li>To improve our website and services</li>
                  <li>To respond to customer service requests</li>
                  <li>To comply with legal obligations</li>
                  <li>To send marketing communications (with your consent)</li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing and Disclosure</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                  <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
                </ul>
              </section>

              {/* Data Security */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Secure data transmission and storage</li>
                  <li>Regular security assessments</li>
                  <li>Employee training on data protection</li>
                  <li>Access controls and authentication measures</li>
                  <li>Regular backup and recovery procedures</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              {/* Your Rights */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights and Choices</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Access:</strong> You can request information about the personal data we hold about you</li>
                  <li><strong>Correction:</strong> You can request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> You can request deletion of your personal information (subject to legal requirements)</li>
                  <li><strong>Opt-out:</strong> You can opt-out of marketing communications at any time</li>
                  <li><strong>Data Portability:</strong> You can request a copy of your data in a portable format</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </section>

              {/* Cookies */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small files stored on your device that help us:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Improve website functionality and performance</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  You can control cookie settings through your browser preferences. However, disabling cookies may limit some website functionality.
                </p>
              </section>

              {/* Children's Privacy */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                </p>
              </section>

              {/* Changes to Policy */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically for any changes.
                </p>
              </section>

              {/* Contact Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MdContactMail className="mr-3 text-primary-600" />
                  Contact Us
                </h2>
                <div className="bg-primary-50 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Delhi AC Services</strong></p>
                    <p>Shop no 789, Block k2, Tara Chand Colony, Mahipalpur, Delhi</p>
                    <p>Phone: +91-97737 54227</p>
                    <p>Email: privacy@delhiac.com</p>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;