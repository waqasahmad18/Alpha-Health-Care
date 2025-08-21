'use client';

import Link from 'next/link';
import { 
  ArrowLeft, 
  FileText, 
  Shield, 
  Users, 
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react';

export default function TermsOfServicePage() {
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
            <FileText className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600">
            Please read these terms carefully before using our services
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Welcome to Alpha Health Care. These Terms of Service ("Terms") govern your use of our healthcare platform, website, and services (collectively, the "Service").
            </p>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access the Service.
            </p>
          </section>

          {/* Definitions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definitions</h2>
            <div className="space-y-3">
              <div>
                <strong>"Service"</strong> refers to the Alpha Health Care platform, website, and mobile applications.
              </div>
              <div>
                <strong>"User," "you," and "your"</strong> refers to you, as the user of the Service.
              </div>
              <div>
                <strong>"Company," "we," "us," and "our"</strong> refers to Alpha Health Care.
              </div>
              <div>
                <strong>"Content"</strong> refers to text, graphics, images, and other material available on the Service.
              </div>
            </div>
          </section>

          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              By using our Service, you confirm that you have read, understood, and agree to be bound by these Terms. You also agree to comply with all applicable laws and regulations.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <div className="flex">
                <CheckCircle className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <p className="text-blue-800">
                  <strong>Important:</strong> These terms constitute a legally binding agreement between you and Alpha Health Care.
                </p>
              </div>
            </div>
          </section>

          {/* Service Description */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Service Description</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Alpha Health Care provides a digital healthcare platform that connects patients with healthcare providers, facilitates appointment booking, and offers various health-related services.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Services Include:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Doctor appointment booking and management</li>
              <li>Online consultation services</li>
              <li>Lab test booking and results</li>
              <li>Medicine delivery services</li>
              <li>Health information and resources</li>
            </ul>
          </section>

          {/* User Accounts */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Accounts</h2>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Creation</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              To access certain features of our Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Notify us immediately of any unauthorized use</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                <p className="text-yellow-800">
                  <strong>Security Note:</strong> Never share your account credentials with others.
                </p>
              </div>
            </div>
          </section>

          {/* Acceptable Use */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Acceptable Use</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You agree to use our Service only for lawful purposes and in accordance with these Terms.
            </p>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">You May Not:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Share false or misleading information</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">You Must:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Provide accurate and truthful information</li>
              <li>Respect the privacy and rights of other users</li>
              <li>Use the Service in a responsible manner</li>
              <li>Comply with all applicable healthcare regulations</li>
            </ul>
          </section>

          {/* Privacy and Data */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy.
            </p>
            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <div className="flex">
                <Shield className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <p className="text-green-800">
                  <strong>Privacy:</strong> We are committed to protecting your personal and health information in accordance with applicable laws.
                </p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">
              By using our Service, you consent to the collection and use of your information as described in our Privacy Policy.
            </p>
          </section>

          {/* Healthcare Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Healthcare Disclaimer</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
              <div className="flex">
                <XCircle className="h-5 w-5 text-red-400 mr-2 mt-0.5" />
                <p className="text-red-800">
                  <strong>Medical Disclaimer:</strong> Our Service is not a substitute for professional medical advice, diagnosis, or treatment.
                </p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Alpha Health Care is a platform that facilitates connections between patients and healthcare providers. We do not provide medical services, diagnosis, or treatment.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Limitations:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Always consult qualified healthcare professionals for medical advice</li>
              <li>In case of emergency, contact emergency services immediately</li>
              <li>Our platform is for informational and booking purposes only</li>
              <li>We are not responsible for medical outcomes or treatment results</li>
            </ul>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Payment Terms</h2>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Fees</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Some services on our platform may require payment. All fees are clearly displayed before you make a purchase.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Methods</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Credit and debit cards</li>
              <li>Digital wallets and mobile payments</li>
              <li>Bank transfers (where applicable)</li>
              <li>Cash on delivery (for certain services)</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Refund Policy</h3>
            <p className="text-gray-600 leading-relaxed">
              Refund policies vary by service type and provider. Please review specific refund terms before making a purchase.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Service and its original content, features, and functionality are owned by Alpha Health Care and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">You May Not:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Copy, modify, or distribute our content without permission</li>
              <li>Use our trademarks or branding without authorization</li>
              <li>Reverse engineer or attempt to extract source code</li>
              <li>Remove or alter any copyright notices</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To the maximum extent permitted by law, Alpha Health Care shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Liability is Limited To:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>The amount you paid for our services in the 12 months preceding the claim</li>
              <li>Direct damages caused by our gross negligence or willful misconduct</li>
              <li>Damages that cannot be excluded under applicable law</li>
            </ul>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Termination</h2>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Termination by You</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              You may terminate your account at any time by contacting our support team or using the account deletion feature in your settings.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Termination by Us</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or our Service.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Effect of Termination</h3>
            <p className="text-gray-600 leading-relaxed">
              Upon termination, your right to use the Service will cease immediately. We may delete your account and data in accordance with our data retention policies.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts in Lahore, Pakistan.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Your continued use of the Service after any changes constitutes acceptance of the new Terms. If you do not agree to the new terms, you should stop using the Service.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-3">
                <div>
                  <strong>Email:</strong> legal@alphahealth.com
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
            Have questions about our terms of service?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
              <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
            </Link>
            <Link
              href="/privacy-policy"
              className="inline-flex items-center border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 