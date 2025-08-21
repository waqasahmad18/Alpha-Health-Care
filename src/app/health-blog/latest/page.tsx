'use client';

import Link from 'next/link';
import { 
  Clock,
  Heart,
  Brain,
  Eye,
  Stethoscope,
  Baby,
  Activity,
  User,
  Calendar,
  Eye as EyeIcon,
  TrendingUp,
  BookOpen,
  ArrowLeft,
  Star
} from 'lucide-react';
import GlobalNavbar from '@/components/GlobalNavbar';

export default function LatestArticlesPage() {
  const latestArticles = [
    {
      id: 1,
      title: 'The Importance of Regular Eye Checkups',
      excerpt: 'Why regular eye examinations are crucial for maintaining good vision and detecting eye diseases early.',
      category: 'Eye Care',
      categoryIcon: Eye,
      author: 'Dr. Sarah Ahmed',
      authorSpecialty: 'Ophthalmologist',
      publishDate: '1 week ago',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1559839734-2e71eb9c6ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      views: 8750,
      likes: 156,
      content: 'Regular eye checkups are essential for maintaining optimal vision and detecting potential eye problems before they become serious. This article explains why these examinations are crucial for people of all ages.'
    },
    {
      id: 2,
      title: 'Mental Health: Breaking the Stigma',
      excerpt: 'Understanding mental health issues and the importance of seeking professional help when needed.',
      category: 'Mental Health',
      categoryIcon: Brain,
      author: 'Dr. Hassan Ali',
      authorSpecialty: 'Psychiatrist',
      publishDate: '1 week ago',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: 11200,
      likes: 289,
      content: 'Mental health stigma continues to prevent many people from seeking the help they need. This article discusses how to recognize mental health issues and the importance of professional treatment.'
    },
    {
      id: 3,
      title: 'Childhood Vaccinations: What Parents Need to Know',
      excerpt: 'Complete guide to childhood immunizations, their importance, and the vaccination schedule.',
      category: 'Child Health',
      categoryIcon: Baby,
      author: 'Dr. Zara Khan',
      authorSpecialty: 'Pediatrician',
      publishDate: '2 weeks ago',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1559839734-2e71ebc6ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: 9650,
      likes: 198,
      content: 'Childhood vaccinations are one of the most effective ways to protect children from serious diseases. This comprehensive guide covers everything parents need to know about immunization schedules and safety.'
    },
    {
      id: 4,
      title: '5 Simple Exercises for a Healthy Heart',
      excerpt: 'Easy cardiovascular exercises you can do at home to improve heart health and overall fitness.',
      category: 'Fitness',
      categoryIcon: Activity,
      author: 'Dr. Ali Raza',
      authorSpecialty: 'Sports Medicine',
      publishDate: '2 weeks ago',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: 7890,
      likes: 143,
      content: 'Heart health is crucial for overall wellness. This article provides simple, effective exercises that can be performed at home to strengthen your cardiovascular system and improve fitness levels.'
    },
    {
      id: 5,
      title: 'Understanding High Blood Pressure',
      excerpt: 'What you need to know about hypertension, its causes, symptoms, and management strategies.',
      category: 'Heart Health',
      categoryIcon: Heart,
      author: 'Dr. Ahmed Ali Khan',
      authorSpecialty: 'Cardiologist',
      publishDate: '3 weeks ago',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: 13450,
      likes: 267,
      content: 'High blood pressure affects millions of people worldwide and is a major risk factor for heart disease and stroke. Learn about prevention, detection, and management strategies.'
    },
    {
      id: 6,
      title: 'Healthy Eating Habits for Better Digestion',
      excerpt: 'Tips for improving your digestive health through proper nutrition and eating habits.',
      category: 'General Health',
      categoryIcon: Stethoscope,
      author: 'Dr. Maria Khan',
      authorSpecialty: 'Gastroenterologist',
      publishDate: '3 weeks ago',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: 6780,
      likes: 124,
      content: 'Good digestive health is fundamental to overall wellness. This article provides practical tips for improving digestion through dietary choices and eating habits.'
    },
    {
      id: 7,
      title: 'Sleep Hygiene: The Foundation of Good Health',
      excerpt: 'Essential practices for improving sleep quality and establishing healthy sleep patterns.',
      category: 'General Health',
      categoryIcon: Stethoscope,
      author: 'Dr. Fatima Nasir',
      authorSpecialty: 'Sleep Specialist',
      publishDate: '4 weeks ago',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1584036561566-bf8f5a0b0b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: 5430,
      likes: 98,
      content: 'Quality sleep is essential for physical and mental health. Learn about sleep hygiene practices that can help you achieve better rest and improve your overall wellbeing.'
    },
    {
      id: 8,
      title: 'Stress Management Techniques for Modern Life',
      excerpt: 'Effective strategies for managing stress in today\'s fast-paced world.',
      category: 'Mental Health',
      categoryIcon: Brain,
      author: 'Dr. Hassan Ali',
      authorSpecialty: 'Psychiatrist',
      publishDate: '4 weeks ago',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: 8920,
      likes: 167,
      content: 'Chronic stress can have serious health consequences. This article provides evidence-based techniques for managing stress and maintaining mental wellness in challenging times.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <GlobalNavbar showBackButton={true} backHref="/health-blog" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/health-blog" className="hover:text-blue-600">Health Blog</Link>
          <span>/</span>
          <span className="text-gray-900">Latest Articles</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl text-white p-8 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="h-8 w-8" />
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">Latest</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Latest Health Articles</h1>
          <p className="text-xl text-green-100 leading-relaxed">
            Stay updated with the most recent health insights, research findings, and medical advice from our expert contributors
          </p>
        </div>

        {/* Latest Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {latestArticles.map((article, index) => (
            <div key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Article Image */}
              <div className="relative">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Latest
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
                {index < 3 && (
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Trending
                    </span>
                  </div>
                )}
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <article.categoryIcon className="h-5 w-5 text-blue-500" />
                  <span className="text-sm text-gray-600">{article.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Article Meta */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{article.publishDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <EyeIcon className="h-4 w-4 mr-1" />
                        <span>{article.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        <span>{article.likes}</span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{article.authorSpecialty}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <Link
                  href={`/health-blog/article/${article.id}`}
                  className="inline-flex items-center justify-center w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Read Full Article
                  <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                </Link>
              </div>
            </div>
          ))}
        </div>



        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Never Miss an Update</h2>
          <p className="text-green-100 mb-6">
            Subscribe to our newsletter and get the latest health articles delivered directly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-8 text-center">
          <Link
            href="/health-blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Health Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
