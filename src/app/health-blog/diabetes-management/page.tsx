'use client';

import Link from 'next/link';
import { 
  Activity,
  Apple,
  Clock,
  User,
  Eye,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  Heart,
  Brain,
  Droplets
} from 'lucide-react';
import GlobalNavbar from '@/components/GlobalNavbar';

export default function DiabetesManagementPage() {
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
          <span className="text-gray-900">Diabetes Management</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-500 to-green-600 rounded-2xl text-white p-8 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Droplets className="h-8 w-8" />
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">Diabetes Care</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Diabetes Management: A Complete Guide to Healthy Living</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Comprehensive strategies for managing diabetes through diet, exercise, medication, and lifestyle changes
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Diabetes management and healthy living"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Article Meta */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>Dr. Fatima Nasir, Endocrinologist</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>10 min read</span>
              </div>
            </div>
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-2" />
              <span>Updated 1 day ago</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Droplets className="h-6 w-6 mr-3 text-blue-500" />
              Understanding Diabetes Types
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Diabetes is a chronic condition that affects how your body processes glucose. Understanding the different types 
              and their management approaches is crucial for effective treatment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-3">Type 1 Diabetes</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Autoimmune condition
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Insulin dependent
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Usually diagnosed in childhood
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Requires daily insulin
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-3">Type 2 Diabetes</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Most common type
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Often lifestyle-related
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Can be managed with diet/exercise
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    May require medication
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Apple className="h-6 w-6 mr-3 text-green-500" />
              Dietary Management
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Carbohydrate Counting</h3>
                <p className="text-gray-700 mb-4">
                  Understanding how carbohydrates affect blood sugar is essential for diabetes management. 
                  Learn to count carbs and balance your meals effectively.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Healthy carbohydrates"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium text-gray-700">Complex Carbs</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Vegetables"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium text-gray-700">Non-Starchy Veggies</p>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Glycemic Index</h3>
                <p className="text-gray-700 mb-4">
                  Choose foods with a low glycemic index to help maintain stable blood sugar levels throughout the day.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1512621776951-571b1f845b26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Low glycemic foods"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Meal Timing</h3>
                <p className="text-gray-700 mb-4">
                  Eating at regular intervals helps maintain stable blood sugar. Aim for 3 main meals and 2-3 snacks per day.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Meal planning"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Activity className="h-6 w-6 mr-3 text-purple-500" />
              Exercise and Physical Activity
            </h2>

            <p className="text-gray-700 mb-6">
              Regular physical activity is crucial for diabetes management. Exercise helps lower blood sugar, 
              improve insulin sensitivity, and maintain a healthy weight.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-3">Aerobic Exercise</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>Walking (30 minutes daily)</li>
                  <li>Swimming</li>
                  <li>Cycling</li>
                  <li>Dancing</li>
                  <li>Low-impact aerobics</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-3">Strength Training</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>Weight lifting</li>
                  <li>Resistance bands</li>
                  <li>Body weight exercises</li>
                  <li>Yoga</li>
                  <li>Pilates</li>
                </ul>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Exercise for diabetes management"
              className="w-full h-48 object-cover rounded-lg mb-8"
            />

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 mr-3 text-orange-500" />
              Blood Sugar Monitoring
            </h2>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-yellow-800 mb-4">Target Blood Sugar Levels:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-700">
                <div>
                  <p><strong>Before meals:</strong> 80-130 mg/dL</p>
                  <p><strong>2 hours after meals:</strong> Less than 180 mg/dL</p>
                </div>
                <div>
                  <p><strong>Bedtime:</strong> 90-150 mg/dL</p>
                  <p><strong>HbA1c:</strong> Less than 7%</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Medication Management</h2>
            <p className="text-gray-700 mb-6">
              Work closely with your healthcare team to find the right medication regimen. 
              Never adjust your medication without consulting your doctor.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-3">Common Medications</h3>
                <ul className="space-y-2 text-sm text-red-700">
                  <li>Metformin</li>
                  <li>Sulfonylureas</li>
                  <li>DPP-4 inhibitors</li>
                  <li>GLP-1 receptor agonists</li>
                  <li>Insulin (various types)</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="font-semibold text-purple-800 mb-3">Important Reminders</h3>
                <ul className="space-y-2 text-sm text-purple-700">
                  <li>Take medications as prescribed</li>
                  <li>Don't skip doses</li>
                  <li>Monitor for side effects</li>
                  <li>Keep regular appointments</li>
                  <li>Report any concerns</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Complications Prevention</h2>
            <p className="text-gray-700 mb-6">
              Long-term diabetes management focuses on preventing complications that can affect your heart, 
              kidneys, eyes, and nervous system.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-3">Regular Screenings</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>Eye examination (annually)</li>
                  <li>Foot examination (every visit)</li>
                  <li>Kidney function tests</li>
                  <li>Heart health monitoring</li>
                  <li>Dental checkups</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-3">Prevention Strategies</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>Maintain healthy blood pressure</li>
                  <li>Control cholesterol levels</li>
                  <li>Quit smoking</li>
                  <li>Limit alcohol consumption</li>
                  <li>Practice good foot care</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Take Control of Your Diabetes Today</h2>
          <p className="text-green-100 mb-6">
            Consult with our endocrinologists to create a personalized diabetes management plan that works for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/doctors?specialty=endocrinology"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Find an Endocrinologist
            </Link>
            <Link
              href="/health-blog"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
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
                  <p className="text-sm text-gray-600 mt-1">Stay active for better health</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
