'use client';

import Link from 'next/link';
import { 
  ArrowLeft,
  Heart,
  Shield,
  Activity,
  Apple,
  Clock,
  User,
  Eye,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  BookOpen
} from 'lucide-react';
import GlobalNavbar from '@/components/GlobalNavbar';

export default function HeartDiseasePreventionPage() {
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
          <span className="text-gray-900">Heart Disease Prevention</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl text-white p-8 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Heart className="h-8 w-8" />
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">Heart Health</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Heart Disease Prevention: Your Complete Guide</h1>
          <p className="text-xl text-red-100 leading-relaxed">
            Learn the essential strategies to protect your heart and maintain cardiovascular health for life
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Heart health and prevention"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Article Meta */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>Dr. Ahmed Ali Khan, Cardiologist</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>8 min read</span>
              </div>
            </div>
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-2" />
              <span>Updated 2 days ago</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="h-6 w-6 mr-3 text-red-500" />
              Understanding Heart Disease Risk Factors
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Heart disease remains the leading cause of death worldwide, but the good news is that most cases are preventable. 
              Understanding your risk factors is the first step toward protecting your heart health.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-3">Modifiable Risk Factors</h3>
                <ul className="space-y-2 text-sm text-red-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    High blood pressure
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    High cholesterol
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Smoking and tobacco use
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Physical inactivity
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Poor diet
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-3">Non-Modifiable Risk Factors</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li className="flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Age (65+ years)
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Family history
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Gender (men at higher risk)
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Ethnicity
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Activity className="h-6 w-6 mr-3 text-green-500" />
              Prevention Strategies
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Heart-Healthy Diet</h3>
                <p className="text-gray-700 mb-4">
                  A balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats can significantly 
                  reduce your risk of heart disease.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Fruits and vegetables"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium text-gray-700">Fruits & Vegetables</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Whole grains"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium text-gray-700">Whole Grains</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Lean proteins"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium text-gray-700">Lean Proteins</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Regular Exercise</h3>
                <p className="text-gray-700 mb-4">
                  Aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous activity each week.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Cardiovascular exercise"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Stress Management</h3>
                <p className="text-gray-700 mb-4">
                  Chronic stress can contribute to heart disease. Practice relaxation techniques like meditation, yoga, or deep breathing.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Meditation and relaxation"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 mr-3 text-purple-500" />
              Warning Signs to Watch For
            </h2>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-yellow-800 mb-4">Seek Immediate Medical Attention If You Experience:</h3>
              <ul className="space-y-2 text-yellow-700">
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 mr-2 mt-0.5 text-yellow-600" />
                  <span>Chest pain or discomfort</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 mr-2 mt-0.5 text-yellow-600" />
                  <span>Shortness of breath</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 mr-2 mt-0.5 text-yellow-600" />
                  <span>Pain in arms, neck, jaw, or back</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 mr-2 mt-0.5 text-yellow-600" />
                  <span>Nausea, lightheadedness, or cold sweats</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Regular Health Checkups</h2>
            <p className="text-gray-700 mb-6">
              Regular checkups with your healthcare provider are essential for monitoring your heart health. 
              These visits help detect potential issues early and allow for timely intervention.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-3">Recommended Tests</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>Blood pressure measurement</li>
                  <li>Cholesterol screening</li>
                  <li>Blood glucose testing</li>
                  <li>Body mass index (BMI)</li>
                  <li>Electrocardiogram (ECG)</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-3">Frequency</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>Annual checkup for adults</li>
                  <li>More frequent if high risk</li>
                  <li>Blood pressure: Every 2 years</li>
                  <li>Cholesterol: Every 4-6 years</li>
                  <li>Diabetes screening: Every 3 years</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Take Control of Your Heart Health Today</h2>
          <p className="text-blue-100 mb-6">
            Schedule a consultation with our cardiologists to assess your heart health and create a personalized prevention plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/doctors?specialty=cardiology"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Find a Cardiologist
            </Link>
            <Link
              href="/health-blog"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Read More Articles
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/health-blog/diabetes-management" className="group">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Diabetes management"
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">Diabetes Management</h4>
                  <p className="text-sm text-gray-600 mt-1">Complete guide to managing diabetes</p>
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
                  <p className="text-sm text-gray-600 mt-1">Nutrition advice for better health</p>
                </div>
              </div>
            </Link>
            
            <Link href="/health-blog/exercise-fitness" className="group">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Exercise and fitness"
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">Exercise & Fitness</h4>
                  <p className="text-sm text-gray-600 mt-1">Stay active for heart health</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
