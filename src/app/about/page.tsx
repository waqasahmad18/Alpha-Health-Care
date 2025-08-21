'use client';

import Link from 'next/link';
import { 
  ArrowLeft, 
  Users, 
  Shield, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  Heart,
  Award,
  Globe,
  Target,
  CheckCircle
} from 'lucide-react';

export default function AboutPage() {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About Alpha Health Care
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pakistan's largest digital healthcare platform connecting patients with verified doctors, 
            providing comprehensive healthcare solutions at your fingertips.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              To democratize healthcare access in Pakistan by connecting patients with verified medical professionals, 
              making quality healthcare available to everyone, everywhere.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Vision</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              To become Pakistan's most trusted healthcare platform, revolutionizing how people access 
              medical care through technology and innovation.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in 2020, Alpha Health Care emerged from a simple yet powerful idea: healthcare should be accessible 
              to everyone, regardless of their location or circumstances. What started as a small team of healthcare 
              professionals and technologists has grown into Pakistan's leading digital healthcare platform.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We recognized the challenges that patients face in finding the right doctors, booking appointments, 
              and accessing quality healthcare services. Our platform was built to solve these problems by creating 
              a seamless bridge between patients and healthcare providers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we serve millions of patients across Pakistan, connecting them with over 35,000 verified doctors 
              and healthcare professionals. Our commitment to quality, transparency, and patient care remains at the 
              heart of everything we do.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Patient First</h3>
              <p className="text-gray-600">Every decision we make is guided by what's best for our patients</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trust & Quality</h3>
              <p className="text-gray-600">We maintain the highest standards of quality and trust in all our services</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">Building a strong healthcare community that supports and uplifts everyone</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-blue-600 rounded-xl text-white p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">35,000+</div>
              <div className="text-blue-200">Verified Doctors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10M+</div>
              <div className="text-blue-200">Patients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">155</div>
              <div className="text-blue-200">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-blue-200">Hospitals</div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dr. Ahmed Khan</h3>
              <p className="text-blue-600 mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">Former Chief Medical Officer with 20+ years of healthcare experience</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sarah Ahmed</h3>
              <p className="text-blue-600 mb-2">CTO</p>
              <p className="text-gray-600 text-sm">Technology leader with expertise in healthcare platforms</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dr. Fatima Hassan</h3>
              <p className="text-blue-600 mb-2">Chief Medical Officer</p>
              <p className="text-gray-600 text-sm">Leading our medical quality and safety initiatives</p>
            </div>
          </div>
        </div>

        {/* Awards */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Best Healthcare Platform 2024</h3>
              <p className="text-gray-600 text-sm">Pakistan Digital Awards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ISO 27001 Certified</h3>
              <p className="text-gray-600 text-sm">Information Security Management</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Trusted Platform</h3>
              <p className="text-gray-600 text-sm">Pakistan Medical Council</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Have questions about Alpha Health Care? We'd love to hear from you. 
            Our team is here to help and answer any questions you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/doctors"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Find Doctors
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 