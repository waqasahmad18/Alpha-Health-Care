'use client';

import Link from 'next/link';
import { 
  Apple,
  Heart,
  Shield,
  Activity,
  Clock,
  User,
  Eye,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  Brain,
  Droplets,
  Leaf
} from 'lucide-react';
import GlobalNavbar from '@/components/GlobalNavbar';

export default function HealthyDietTipsPage() {
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
          <span className="text-gray-900">Healthy Diet Tips</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl text-white p-8 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Apple className="h-8 w-8" />
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">Nutrition</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Healthy Diet Tips: Fuel Your Body Right</h1>
          <p className="text-xl text-green-100 leading-relaxed">
            Discover practical nutrition advice to improve your health, boost energy, and prevent chronic diseases
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1559839734-2e71eb9c6ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Healthy diet and nutrition"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Article Meta */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>Dr. Maria Khan, Nutritionist</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>12 min read</span>
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
              <Apple className="h-6 w-6 mr-3 text-green-500" />
              The Foundation of Good Health
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              A healthy diet is the cornerstone of good health. What you eat affects every aspect of your well-being, 
              from energy levels and mood to disease prevention and longevity. Making smart food choices can transform 
              your health and quality of life.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-3">Why Nutrition Matters</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Provides essential nutrients
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Boosts immune system
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Maintains healthy weight
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Prevents chronic diseases
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-3">Key Benefits</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Increased energy levels
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Better mental clarity
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Improved mood
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Enhanced physical performance
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Leaf className="h-6 w-6 mr-3 text-emerald-500" />
              Building a Balanced Plate
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Fruits and Vegetables</h3>
                <p className="text-gray-700 mb-4">
                  Aim to fill half your plate with colorful fruits and vegetables. They provide essential vitamins, 
                  minerals, fiber, and antioxidants that protect against disease.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Fresh vegetables"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium text-gray-700">Fresh Vegetables</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Colorful fruits"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium text-gray-700">Colorful Fruits</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Leafy greens"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium text-gray-700">Leafy Greens</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Whole Grains</h3>
                <p className="text-gray-700 mb-4">
                  Choose whole grains over refined grains. They provide fiber, B vitamins, and minerals that 
                  support digestive health and sustained energy.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Whole grains"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Lean Proteins</h3>
                <p className="text-gray-700 mb-4">
                  Include lean protein sources in every meal. Protein is essential for building and repairing 
                  tissues, supporting immune function, and maintaining muscle mass.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Lean proteins"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 mr-3 text-blue-500" />
              Smart Eating Strategies
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Portion Control</h3>
                <p className="text-gray-700 mb-4">
                  Learning to control portion sizes is crucial for maintaining a healthy weight. Use smaller plates, 
                  measure servings, and listen to your body's hunger cues.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Portion control"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Meal Timing</h3>
                <p className="text-gray-700 mb-4">
                  Eating at regular intervals helps maintain stable blood sugar levels and prevents overeating. 
                  Aim for 3 main meals and 2-3 healthy snacks per day.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Meal timing"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mindful Eating</h3>
                <p className="text-gray-700 mb-4">
                  Practice mindful eating by paying attention to your food, savoring each bite, and eating without 
                  distractions. This helps you enjoy your meals and recognize when you're full.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Mindful eating"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Foods to Limit</h2>
            <p className="text-gray-700 mb-6">
              While no food is completely off-limits, some should be consumed in moderation for optimal health.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-3">Limit These Foods</h3>
                <ul className="space-y-2 text-sm text-red-700">
                  <li>Added sugars and sweeteners</li>
                  <li>Processed and fried foods</li>
                  <li>Excessive salt and sodium</li>
                  <li>Refined carbohydrates</li>
                  <li>Trans fats and saturated fats</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-3">Moderation is Key</h3>
                <ul className="space-y-2 text-sm text-yellow-700">
                  <li>Enjoy treats occasionally</li>
                  <li>Choose healthier alternatives</li>
                  <li>Read nutrition labels</li>
                  <li>Cook at home more often</li>
                  <li>Plan your meals ahead</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hydration and Health</h2>
            <p className="text-gray-700 mb-6">
              Staying hydrated is essential for good health. Water supports digestion, nutrient absorption, 
              temperature regulation, and overall bodily functions.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Daily Water Intake</h3>
                <p className="text-gray-700 mb-4">
                  Aim to drink at least 8 glasses of water per day, more if you're active or in hot weather. 
                  Listen to your body's thirst signals.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Hydration"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hydration Tips</h3>
                <p className="text-gray-700 mb-4">
                  Carry a water bottle, set reminders, flavor water with fruits, and choose water over sugary drinks.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Hydration tips"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Special Dietary Considerations</h2>
            <p className="text-gray-700 mb-6">
              Different life stages and health conditions may require specific dietary adjustments. Always consult 
              with healthcare professionals for personalized advice.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-3">Life Stage Nutrition</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>Children and adolescents</li>
                  <li>Pregnancy and breastfeeding</li>
                  <li>Older adults</li>
                  <li>Athletes and active individuals</li>
                  <li>Vegetarians and vegans</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-3">Health Conditions</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>Diabetes management</li>
                  <li>Heart health</li>
                  <li>Digestive disorders</li>
                  <li>Food allergies</li>
                  <li>Weight management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Transform Your Health Through Nutrition</h2>
          <p className="text-green-100 mb-6">
            Consult with our nutritionists to create a personalized meal plan that fits your lifestyle and health goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/doctors?specialty=nutrition"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Find a Nutritionist
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
            
            <Link href="/health-blog/exercise-fitness" className="group">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Exercise and fitness"
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">Exercise & Fitness</h4>
                  <p className="text-sm text-gray-600 mt-1">Complement your diet with exercise</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
