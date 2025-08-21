'use client';

import Link from 'next/link';
import { 
  Shield,
  Activity,
  Clock,
  User,
  Eye,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  Heart,
  Brain,
  Thermometer
} from 'lucide-react';
import GlobalNavbar from '@/components/GlobalNavbar';

export default function Covid19UpdatesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <GlobalNavbar showBackButton={true} backHref="/health-blog" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/health-blog" className="hover:text-blue-600">Health Blog</Link>
          <span>/</span>
          <span className="text-gray-900">COVID-19 Updates</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl text-white p-8 mb-8">
                     <div className="flex items-center space-x-3 mb-4">
             <AlertTriangle className="h-8 w-8" />
             <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">Pandemic Updates</span>
           </div>
          <h1 className="text-4xl font-bold mb-4">COVID-19 Updates: Latest Information & Guidelines</h1>
          <p className="text-xl text-red-100 leading-relaxed">
            Stay informed with the latest COVID-19 information, prevention strategies, and health guidelines
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="COVID-19 safety measures and prevention"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Article Meta */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>Dr. Sarah Ahmed, Infectious Disease Specialist</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>15 min read</span>
              </div>
            </div>
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-2" />
              <span>Updated today</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="prose prose-lg max-w-none">
                         <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
               <Activity className="h-6 w-6 mr-3 text-red-500" />
               Understanding COVID-19
             </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              COVID-19 is a respiratory illness caused by the SARS-CoV-2 virus. It spreads primarily through 
              respiratory droplets when an infected person coughs, sneezes, or talks. Understanding how the virus 
              spreads and how to protect yourself is crucial for staying safe.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-3">How It Spreads</h3>
                <ul className="space-y-2 text-sm text-red-700">
                  <li className="flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Respiratory droplets
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Close contact (within 6 feet)
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Contaminated surfaces
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Airborne transmission
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-3">Common Symptoms</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li className="flex items-center">
                    <Thermometer className="h-4 w-4 mr-2" />
                    Fever or chills
                  </li>
                                     <li className="flex items-center">
                     <Thermometer className="h-4 w-4 mr-2" />
                     Cough and sore throat
                   </li>
                  <li className="flex items-center">
                    <Brain className="h-4 w-4 mr-2" />
                    Fatigue and body aches
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 mr-2" />
                    Loss of taste or smell
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="h-6 w-6 mr-3 text-green-500" />
              Prevention Strategies
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Vaccination</h3>
                <p className="text-gray-700 mb-4">
                  COVID-19 vaccines are highly effective at preventing severe illness, hospitalization, and death. 
                  They also help reduce the spread of the virus in communities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="COVID-19 vaccination"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium text-gray-700">Get Vaccinated</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Booster shots"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium text-gray-700">Booster Shots</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Stay updated"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium text-gray-700">Stay Updated</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Personal Protective Measures</h3>
                <p className="text-gray-700 mb-4">
                  Simple everyday actions can help prevent the spread of COVID-19 and other respiratory viruses.
                </p>
                                 <img 
                   src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                   alt="Personal protective measures"
                   className="w-full h-48 object-cover rounded-lg"
                 />
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Hygiene Practices</h3>
                <p className="text-gray-700 mb-4">
                  Good hygiene practices are essential for preventing the spread of COVID-19 and other infections.
                </p>
                                 <img 
                   src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                   alt="Hygiene practices"
                   className="w-full h-48 object-cover rounded-lg"
                 />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 mr-3 text-blue-500" />
              Current Guidelines
            </h2>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-blue-800 mb-4">Latest Recommendations:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
                <div>
                  <h4 className="font-medium mb-2">For Everyone:</h4>
                  <ul className="space-y-1">
                    <li>• Stay up to date with vaccines</li>
                    <li>• Wear masks in crowded areas</li>
                    <li>• Maintain good ventilation</li>
                    <li>• Test when symptomatic</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">For High-Risk Individuals:</h4>
                  <ul className="space-y-1">
                    <li>• Consider additional precautions</li>
                    <li>• Consult healthcare providers</li>
                    <li>• Monitor symptoms closely</li>
                    <li>• Have treatment plan ready</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Testing and Diagnosis</h2>
            <p className="text-gray-700 mb-6">
              COVID-19 testing is crucial for identifying cases and preventing further spread. Understanding when 
              and how to get tested can help protect you and others.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-3">When to Get Tested</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>You have COVID-19 symptoms</li>
                  <li>You've been exposed to someone with COVID-19</li>
                  <li>You're planning to visit high-risk individuals</li>
                  <li>Required for travel or work</li>
                  <li>Before and after large gatherings</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-3">Types of Tests</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>PCR tests (most accurate)</li>
                  <li>Rapid antigen tests</li>
                  <li>At-home test kits</li>
                  <li>Antibody tests</li>
                  <li>Saliva tests</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Treatment Options</h2>
            <p className="text-gray-700 mb-6">
              While most people with COVID-19 have mild symptoms and recover at home, some may require 
              medical treatment. Early treatment can help prevent severe illness.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Home Care</h3>
                <p className="text-gray-700 mb-4">
                  Most people with COVID-19 can recover at home with rest, fluids, and over-the-counter medications.
                </p>
                                 <img 
                   src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                   alt="Home care for COVID-19"
                   className="w-full h-48 object-cover rounded-lg"
                 />
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Medical Treatment</h3>
                <p className="text-gray-700 mb-4">
                  For those with severe symptoms, medical treatment may include antiviral medications, 
                  monoclonal antibodies, and supportive care.
                </p>
                                 <img 
                   src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                   alt="Medical treatment for COVID-19"
                   className="w-full h-48 object-cover rounded-lg"
                 />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Long COVID</h2>
            <p className="text-gray-700 mb-6">
              Some people experience ongoing symptoms after recovering from COVID-19, known as long COVID. 
              Understanding these symptoms and seeking appropriate care is important.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-3">Common Long COVID Symptoms</h3>
                <ul className="space-y-2 text-sm text-yellow-700">
                  <li>Fatigue and weakness</li>
                  <li>Shortness of breath</li>
                  <li>Cognitive difficulties</li>
                  <li>Joint and muscle pain</li>
                  <li>Sleep problems</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-3">Management Strategies</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>Gradual return to activity</li>
                  <li>Pacing and energy management</li>
                  <li>Specialized rehabilitation</li>
                  <li>Mental health support</li>
                  <li>Regular medical follow-up</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Safe and Informed</h2>
          <p className="text-red-100 mb-6">
            Keep up with the latest COVID-19 information and consult our healthcare professionals for personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/doctors?specialty=infectious-disease"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Find an Infectious Disease Specialist
            </Link>
            <Link
              href="/health-blog"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Read More Articles
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/health-blog/heart-disease-prevention" className="group">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Heart disease prevention"
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">Heart Disease Prevention</h4>
                  <p className="text-sm text-gray-600 mt-1">Protect your cardiovascular health</p>
                </div>
              </div>
            </Link>
            
            <Link href="/health-blog/mental-health-awareness" className="group">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Mental health awareness"
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">Mental Health Awareness</h4>
                  <p className="text-sm text-gray-600 mt-1">Break the stigma, seek help</p>
                </div>
              </div>
            </Link>
            
            <Link href="/health-blog/healthy-diet-tips" className="group">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Healthy diet"
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">Healthy Diet Tips</h4>
                  <p className="text-sm text-gray-600 mt-1">Boost your immune system</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
