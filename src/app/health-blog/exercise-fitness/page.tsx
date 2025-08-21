'use client';

import Link from 'next/link';
import { 
  Activity,
  Heart,
  Shield,
  Clock,
  User,
  Eye,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  Brain,
  Droplets,
  Target,
  Zap
} from 'lucide-react';
import GlobalNavbar from '@/components/GlobalNavbar';

export default function ExerciseFitnessPage() {
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
          <span className="text-gray-900">Exercise & Fitness</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white p-8 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Activity className="h-8 w-8" />
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">Fitness</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Exercise & Fitness: Your Path to Better Health</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Discover the transformative power of regular exercise and learn how to build a sustainable fitness routine
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Exercise and fitness"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Article Meta */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>Dr. Ahmed Hassan, Sports Medicine Specialist</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>14 min read</span>
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
              <Activity className="h-6 w-6 mr-3 text-blue-500" />
              Why Exercise is Essential
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Regular physical activity is one of the most important things you can do for your health. Exercise 
              benefits every part of your body, from your heart and muscles to your brain and mood. It's never 
              too late to start, and the benefits begin immediately.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-3">Physical Benefits</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Stronger muscles and bones
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Better cardiovascular health
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Improved flexibility and balance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Weight management
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="font-semibold text-purple-800 mb-3">Mental Benefits</h3>
                <ul className="space-y-2 text-sm text-purple-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Reduced stress and anxiety
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Better sleep quality
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Enhanced mood and energy
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Improved cognitive function
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="h-6 w-6 mr-3 text-green-500" />
              Types of Exercise
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Cardiovascular Exercise</h3>
                <p className="text-gray-700 mb-4">
                  Cardio exercises strengthen your heart and lungs while burning calories. They include activities 
                  that get your heart rate up and keep it elevated for an extended period.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Running and jogging"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium text-gray-700">Running & Jogging</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Cycling"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium text-gray-700">Cycling</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Swimming"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium text-gray-700">Swimming</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Strength Training</h3>
                <p className="text-gray-700 mb-4">
                  Building muscle strength is crucial for overall health, metabolism, and injury prevention. 
                  Strength training can be done with weights, resistance bands, or bodyweight exercises.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Strength training"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Flexibility & Balance</h3>
                <p className="text-gray-700 mb-4">
                  Flexibility exercises improve your range of motion and reduce the risk of injury. Balance 
                  exercises help prevent falls, especially important as we age.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Flexibility and balance exercises"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Zap className="h-6 w-6 mr-3 text-yellow-500" />
              Getting Started
            </h2>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-yellow-800 mb-4">Beginner's Guide:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-700">
                <div>
                  <h4 className="font-medium mb-2">Start Slow:</h4>
                  <ul className="space-y-1">
                    <li>• Begin with 10-15 minutes daily</li>
                    <li>• Gradually increase duration</li>
                    <li>• Listen to your body</li>
                    <li>• Set realistic goals</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Build Consistency:</h4>
                  <ul className="space-y-1">
                    <li>• Schedule exercise time</li>
                    <li>• Find activities you enjoy</li>
                    <li>• Start with walking</li>
                    <li>• Track your progress</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Creating a Workout Plan</h2>
            <p className="text-gray-700 mb-6">
              A well-rounded workout plan should include different types of exercise throughout the week. 
              This ensures you're working all muscle groups and getting both cardio and strength benefits.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-3">Weekly Schedule Example</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>Monday: Cardio (30 min)</li>
                  <li>Tuesday: Strength training</li>
                  <li>Wednesday: Rest or light yoga</li>
                  <li>Thursday: Cardio (30 min)</li>
                  <li>Friday: Strength training</li>
                  <li>Weekend: Active recovery</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-3">Workout Components</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>Warm-up (5-10 min)</li>
                  <li>Main workout (20-45 min)</li>
                  <li>Cool-down (5-10 min)</li>
                  <li>Stretching (5-10 min)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nutrition & Exercise</h2>
            <p className="text-gray-700 mb-6">
              What you eat before, during, and after exercise can significantly impact your performance 
              and recovery. Proper nutrition supports your fitness goals and overall health.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pre-Workout Nutrition</h3>
                <p className="text-gray-700 mb-4">
                  Eat a light meal or snack 1-3 hours before exercise. Focus on carbohydrates for energy 
                  and a small amount of protein for muscle support.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Pre-workout nutrition"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Post-Workout Recovery</h3>
                <p className="text-gray-700 mb-4">
                  Within 30 minutes after exercise, consume protein and carbohydrates to help repair 
                  muscles and replenish energy stores.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Post-workout recovery"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Staying Motivated</h2>
            <p className="text-gray-700 mb-6">
              Maintaining motivation is often the biggest challenge in fitness. Finding what works for you 
              and building sustainable habits is key to long-term success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-3">Motivation Strategies</h3>
                <ul className="space-y-2 text-sm text-yellow-700">
                  <li>Set specific, measurable goals</li>
                  <li>Find a workout buddy</li>
                  <li>Track your progress</li>
                  <li>Reward yourself</li>
                  <li>Mix up your routine</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-3">Building Habits</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>Start with small changes</li>
                  <li>Be consistent</li>
                  <li>Plan ahead</li>
                  <li>Remove barriers</li>
                  <li>Celebrate wins</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Start Your Fitness Journey Today</h2>
          <p className="text-blue-100 mb-6">
            Take the first step towards better health. Our fitness specialists can help you create a 
            personalized exercise plan that fits your lifestyle and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/doctors?specialty=sports-medicine"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Find a Sports Medicine Specialist
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
                  <p className="text-sm text-gray-600 mt-1">Fuel your fitness journey</p>
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
                  <p className="text-sm text-gray-600 mt-1">Exercise for mental wellness</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
