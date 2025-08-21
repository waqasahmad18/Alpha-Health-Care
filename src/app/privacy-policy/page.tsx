'use client';

import Link from 'next/link';
import { 
  ArrowLeft, 
  Shield, 
  Lock, 
  Eye, 
  Database,
  Users,
  FileText
} from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center mr-4">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <h1 className="text-2xl font-bold text-blue-600">Alpha Health Care</h1>
              </Link>
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/doctors" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Find Doctors</Link>
                <Link href="/lab-tests" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Lab Tests</Link>
                <Link href="/medicines" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Medicines</Link>
                <Link href="/health-blog" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Health Blog</Link>
              </div>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Your privacy and data security are our top priorities
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="h-6 w-6 mr-2 text-blue-600" />
              Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Alpha Health Care ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our healthcare platform and services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Database className="h-6 w-6 mr-2 text-blue-600" />
              Information We Collect
            </h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Name, email address, and phone number</li>
              <li>Date of birth and gender</li>
              <li>Medical history and health information</li>
              <li>Appointment preferences and schedules</li>
              <li>Payment and billing information</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Information</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Device information and IP addresses</li>
              <li>Browser type and operating system</li>
              <li>Pages visited and time spent on our platform</li>
              <li>Search queries and interactions</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Health Information</h3>
            <p className="text-gray-600 leading-relaxed">
              We may collect sensitive health information including medical conditions, medications, test results, and treatment plans. This information is collected only with your explicit consent and is protected under strict security measures.
            </p>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Eye className="h-6 w-6 mr-2 text-blue-600" />
              How We Use Your Information
            </h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Primary Uses</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Providing healthcare services and appointment booking</li>
              <li>Connecting you with healthcare providers</li>
              <li>Processing payments and managing accounts</li>
              <li>Improving our platform and user experience</li>
              <li>Sending important service notifications</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Secondary Uses</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Analyzing usage patterns to improve services</li>
              <li>Providing customer support and assistance</li>
              <li>Ensuring platform security and preventing fraud</li>
              <li>Complying with legal and regulatory requirements</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Users className="h-6 w-6 mr-2 text-blue-600" />
              Information Sharing and Disclosure
            </h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">We Do Not Sell Your Data</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Alpha Health Care does not sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Sharing with Healthcare Providers</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may share your information with healthcare providers to facilitate appointments and medical services, but only with your explicit consent.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Requirements</h3>
            <p className="text-gray-600 leading-relaxed">
              We may disclose your information when required by law, court order, or government regulation, or to protect our rights and the safety of our users.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Lock className="h-6 w-6 mr-2 text-blue-600" />
              Data Security
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Measures</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>End-to-end encryption for sensitive data</li>
              <li>Secure servers and data centers</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
            </ul>

            <p className="text-gray-600 leading-relaxed">
              While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but are committed to maintaining the highest standards of data protection.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Access and Control</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Access your personal information</li>
              <li>Update or correct inaccurate data</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Control data sharing preferences</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">How to Exercise Your Rights</h3>
            <p className="text-gray-600 leading-relaxed">
              To exercise your privacy rights, contact us at privacy@alphahealth.com or through our contact form. We will respond to your request within 30 days.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Types of Cookies</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li><strong>Essential Cookies:</strong> Required for basic platform functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our platform</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              <li><strong>Marketing Cookies:</strong> Deliver relevant content and advertisements</li>
            </ul>

            <p className="text-gray-600 leading-relaxed">
              You can control cookie settings through your browser preferences. However, disabling certain cookies may affect platform functionality.
            </p>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              Our platform may integrate with third-party services for payment processing, analytics, and other functionalities.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Privacy Policies</h3>
            <p className="text-gray-600 leading-relaxed">
              These services have their own privacy policies. We recommend reviewing their policies to understand how they handle your information.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            
            <p className="text-gray-600 leading-relaxed">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
            
            <p className="text-gray-600 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
            </p>
          </section>

          {/* Policy Updates */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Notification of Changes</h3>
            <p className="text-gray-600 leading-relaxed">
              We will notify you of any material changes by posting the updated policy on our platform and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-3">
                <div>
                  <strong>Email:</strong> privacy@alphahealth.com
                </div>
                <div>
                  <strong>Phone:</strong> +92 311 1222 398
                </div>
                <div>
                  <strong>Address:</strong> Alpha Health Care Tower, Gulberg III, Lahore, Pakistan
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Have questions about our privacy practices?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
} 