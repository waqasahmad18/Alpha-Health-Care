'use client';

import Link from 'next/link';
import { 
  Brain,
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
  MessageSquare,
  Sun,
  Moon
} from 'lucide-react';
import GlobalNavbar from '@/components/GlobalNavbar';

export default function MentalHealthAwarenessPage() {
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
          <span className="text-gray-900">Mental Health Awareness</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl text-white p-8 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Brain className="h-8 w-8" />
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">Mental Wellness</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Mental Health Awareness: Breaking the Stigma</h1>
          <p className="text-xl text-purple-100 leading-relaxed">
            Understanding mental health, recognizing warning signs, and knowing when to seek professional help
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Mental health awareness and wellness"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Article Meta */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>Dr. Hassan Ali, Psychiatrist</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>12 min read</span>
              </div>
            </div>
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-2" />
              <span>Updated 3 days ago</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Brain className="h-6 w-6 mr-3 text-purple-500" />
              Understanding Mental Health
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Mental health is just as important as physical health. It affects how we think, feel, and act, 
              influencing how we handle stress, relate to others, and make choices. Mental health is important 
              at every stage of life, from childhood through adulthood.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="font-semibold text-purple-800 mb-3">What is Mental Health?</h3>
                <ul className="space-y-2 text-sm text-purple-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Emotional well-being
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Psychological well-being
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Social well-being
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Cognitive functioning
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-3">Why It Matters</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Affects daily life
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Impacts relationships
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Influences work performance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Affects physical health
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertTriangle className="h-6 w-6 mr-3 text-yellow-500" />
              Common Mental Health Conditions
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Anxiety Disorders</h3>
                <p className="text-gray-700 mb-4">
                  Anxiety disorders involve excessive fear or worry that interferes with daily activities. 
                  They can include generalized anxiety disorder, panic disorder, and social anxiety disorder.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Meditation and relaxation"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium text-gray-700">Stress Management</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Exercise for mental health"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium text-gray-700">Physical Activity</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Healthy lifestyle"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium text-gray-700">Healthy Lifestyle</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Depression</h3>
                <p className="text-gray-700 mb-4">
                  Depression is more than just feeling sad. It's a persistent feeling of sadness and loss of interest 
                  that can affect how you feel, think, and behave.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Depression awareness"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Bipolar Disorder</h3>
                <p className="text-gray-700 mb-4">
                  Bipolar disorder causes extreme mood swings that include emotional highs (mania or hypomania) 
                  and lows (depression).
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Bipolar disorder awareness"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 mr-3 text-green-500" />
              Warning Signs to Watch For
            </h2>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-yellow-800 mb-4">When to Seek Professional Help:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-700">
                <div>
                  <h4 className="font-medium mb-2">Emotional Changes:</h4>
                  <ul className="space-y-1">
                    <li>• Persistent sadness or hopelessness</li>
                    <li>• Extreme mood swings</li>
                    <li>• Excessive worry or fear</li>
                    <li>• Irritability or anger</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Behavioral Changes:</h4>
                  <ul className="space-y-1">
                    <li>• Withdrawal from activities</li>
                    <li>• Changes in sleep patterns</li>
                    <li>• Changes in eating habits</li>
                    <li>• Difficulty concentrating</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Breaking the Stigma</h2>
            <p className="text-gray-700 mb-6">
              Mental health stigma prevents many people from seeking help. It's important to understand that 
              mental health conditions are medical conditions, not personal weaknesses or character flaws.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-3">What is Stigma?</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>Negative attitudes and beliefs</li>
                  <li>Discrimination and prejudice</li>
                  <li>Social exclusion</li>
                  <li>Internalized shame</li>
                  <li>Barriers to treatment</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-3">How to Combat Stigma</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>Educate yourself and others</li>
                  <li>Use respectful language</li>
                  <li>Share personal experiences</li>
                  <li>Support mental health organizations</li>
                  <li>Challenge negative stereotypes</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Self-Care Strategies</h2>
            <p className="text-gray-700 mb-6">
              Taking care of your mental health is essential. Here are some strategies that can help improve 
              your overall well-being.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Physical Health</h3>
                <p className="text-gray-700 mb-4">
                  Regular exercise, adequate sleep, and a balanced diet can significantly improve mental health.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Physical health for mental wellness"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mindfulness and Relaxation</h3>
                <p className="text-gray-700 mb-4">
                  Practices like meditation, deep breathing, and yoga can help reduce stress and improve mental clarity.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Mindfulness practices"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Social Connection</h3>
                <p className="text-gray-700 mb-4">
                  Maintaining strong relationships and social connections is crucial for mental health.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Social connections"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">When to Seek Professional Help</h2>
            <p className="text-gray-700 mb-6">
              It's important to seek professional help when mental health symptoms interfere with your daily life, 
              relationships, or work performance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-3">Immediate Help Needed</h3>
                <ul className="space-y-2 text-sm text-red-700">
                  <li>Thoughts of self-harm</li>
                  <li>Thoughts of harming others</li>
                  <li>Severe panic attacks</li>
                  <li>Psychotic symptoms</li>
                  <li>Substance abuse issues</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-3">Professional Support</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>Psychiatrists</li>
                  <li>Psychologists</li>
                  <li>Licensed therapists</li>
                  <li>Mental health counselors</li>
                  <li>Support groups</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Your Mental Health Matters</h2>
          <p className="text-purple-100 mb-6">
            Don't hesitate to reach out for help. Our mental health professionals are here to support you 
            on your journey to better mental wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/doctors?specialty=psychiatry"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Find a Psychiatrist
            </Link>
            <Link
              href="/health-blog"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
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
          </div>
        </div>
      </div>
    </div>
  );
}
