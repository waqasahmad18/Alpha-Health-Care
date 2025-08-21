'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Calendar, 
  User,
  Clock,
  Heart,
  Brain,
  Eye,
  Stethoscope,
  Baby,
  Activity,
  ChevronRight,
  BookOpen,
  TrendingUp
} from 'lucide-react';
import GlobalNavbar from '@/components/GlobalNavbar';

export default function HealthBlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { name: 'All Articles', value: '', icon: BookOpen },
    { name: 'Heart Health', value: 'heart', icon: Heart },
    { name: 'Mental Health', value: 'mental', icon: Brain },
    { name: 'Eye Care', value: 'eye', icon: Eye },
    { name: 'General Health', value: 'general', icon: Stethoscope },
    { name: 'Child Health', value: 'child', icon: Baby },
    { name: 'Fitness', value: 'fitness', icon: Activity },
  ];

  const featuredArticles = [
    {
      id: 1,
      title: '10 Warning Signs of Heart Disease You Should Never Ignore',
      excerpt: 'Learn about the early warning signs of heart disease that could save your life. From chest pain to shortness of breath, know when to seek medical attention.',
      category: 'heart',
      author: 'Dr. Ahmed Ali Khan',
      authorSpecialty: 'Cardiologist',
      publishDate: '2 days ago',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: true,
      views: 15420,
      likes: 234
    },
    {
      id: 2,
      title: 'Managing Diabetes: A Complete Guide to Healthy Living',
      excerpt: 'Comprehensive guide on managing diabetes through diet, exercise, and medication. Tips for monitoring blood sugar and preventing complications.',
      category: 'general',
      author: 'Dr. Fatima Nasir',
      authorSpecialty: 'Endocrinologist',
      publishDate: '5 days ago',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1559839734-2e71eb9c6ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: true,
      views: 12890,
      likes: 187
    }
  ];

  const articles = [
    {
      id: 3,
      title: 'The Importance of Regular Eye Checkups',
      excerpt: 'Why regular eye examinations are crucial for maintaining good vision and detecting eye diseases early.',
      category: 'eye',
      author: 'Dr. Sarah Ahmed',
      authorSpecialty: 'Ophthalmologist',
      publishDate: '1 week ago',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1559839734-2e71eb9c6ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      views: 8750,
      likes: 156
    },
    {
      id: 4,
      title: 'Mental Health: Breaking the Stigma',
      excerpt: 'Understanding mental health issues and the importance of seeking professional help when needed.',
      category: 'mental',
      author: 'Dr. Hassan Ali',
      authorSpecialty: 'Psychiatrist',
      publishDate: '1 week ago',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      views: 11200,
      likes: 289
    },
    {
      id: 5,
      title: 'Childhood Vaccinations: What Parents Need to Know',
      excerpt: 'Complete guide to childhood immunizations, their importance, and the vaccination schedule.',
      category: 'child',
      author: 'Dr. Zara Khan',
      authorSpecialty: 'Pediatrician',
      publishDate: '2 weeks ago',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1559839734-2e71eb9c6ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      views: 9650,
      likes: 198
    },
    {
      id: 6,
      title: '5 Simple Exercises for a Healthy Heart',
      excerpt: 'Easy cardiovascular exercises you can do at home to improve heart health and overall fitness.',
      category: 'fitness',
      author: 'Dr. Ali Raza',
      authorSpecialty: 'Sports Medicine',
      publishDate: '2 weeks ago',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      views: 7890,
      likes: 143
    },
    {
      id: 7,
      title: 'Understanding High Blood Pressure',
      excerpt: 'What you need to know about hypertension, its causes, symptoms, and management strategies.',
      category: 'heart',
      author: 'Dr. Ahmed Ali Khan',
      authorSpecialty: 'Cardiologist',
      publishDate: '3 weeks ago',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      views: 13450,
      likes: 267
    },
    {
      id: 8,
      title: 'Healthy Eating Habits for Better Digestion',
      excerpt: 'Tips for improving your digestive health through proper nutrition and eating habits.',
      category: 'general',
      author: 'Dr. Maria Khan',
      authorSpecialty: 'Gastroenterologist',
      publishDate: '3 weeks ago',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      views: 6780,
      likes: 124
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const trendingTopics = [
    'Heart Disease Prevention',
    'Diabetes Management',
    'Mental Health Awareness',
    'COVID-19 Updates',
    'Healthy Diet Tips',
    'Exercise and Fitness'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Global Navbar */}
      <GlobalNavbar showBackButton={true} backHref="/" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Health Blog & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Expert health advice and medical insights from verified doctors and healthcare professionals</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search health articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.value
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <category.icon className="h-4 w-4 mr-2" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Articles */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Featured Articles</h2>
                <Link 
                  href="/health-blog/featured"
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                >
                  View All Featured
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="space-y-6">
                {featuredArticles.map((article) => (
                  <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 md:h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                          }}
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center mb-2">
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium mr-2">
                            Featured
                          </span>
                          <span className="text-sm text-gray-600 capitalize">{article.category}</span>
                        </div>
                        <Link href={`/health-blog/featured`}>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
                            {article.title}
                          </h3>
                        </Link>
                        <p className="text-gray-600 mb-4">{article.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              <span>{article.author}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{article.publishDate}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span>{article.views.toLocaleString()} views</span>
                            <span>{article.likes} likes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Regular Articles */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Latest Articles</h2>
                <Link 
                  href="/health-blog/latest"
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                >
                  View All Latest
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map((article) => (
                  <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                      }}
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        <span className="text-sm text-gray-600 capitalize bg-gray-100 px-2 py-1 rounded-full">
                          {article.category}
                        </span>
                      </div>
                      <Link href={`/health-blog/latest`}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
                          {article.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span>{article.readTime}</span>
                          <span>•</span>
                          <span>{article.publishDate}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{article.views.toLocaleString()} views</span>
                          <span>{article.likes} likes</span>
                        </div>
                        <Link href={`/health-blog/latest`} className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                          Read More <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-300">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Quick Navigation */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Quick Navigation
                </h3>
                <div className="space-y-3">
                  <Link 
                    href="/health-blog/featured"
                    className="block bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-lg p-3 hover:from-red-100 hover:to-red-200 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-red-800">Featured Articles</span>
                      <ChevronRight className="h-4 w-4 text-red-600" />
                    </div>
                    <p className="text-xs text-red-600 mt-1">Curated top content</p>
                  </Link>
                  
                  <Link 
                    href="/health-blog/latest"
                    className="block bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-3 hover:from-green-100 hover:to-green-200 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-green-800">Latest Articles</span>
                      <ChevronRight className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-xs text-green-600 mt-1">Fresh health insights</p>
                  </Link>
                </div>
              </div>

              {/* Trending Topics */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Trending Topics
                </h3>
                <ul className="space-y-2">
                  {trendingTopics.map((topic, index) => {
                    // Custom slug mapping for specific topics
                    let topicSlug;
                    if (topic === 'Exercise and Fitness') {
                      topicSlug = 'exercise-fitness';
                    } else {
                      topicSlug = topic.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                    }
                    const topicLink = `/health-blog/${topicSlug}`;
                    
                    return (
                      <li key={index}>
                        <Link href={topicLink} className="text-blue-600 hover:text-blue-700 text-sm hover:underline">
                          {topic}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-blue-600 rounded-lg shadow-md p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Health Newsletter</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get the latest health tips and medical insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 rounded-md text-gray-900 placeholder-gray-500"
                  />
                  <button className="w-full bg-white text-blue-600 py-2 rounded-md font-medium hover:bg-gray-100">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Popular Articles */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Articles</h3>
                <div className="space-y-4">
                  {articles.slice(0, 3).map((article) => (
                    <div key={article.id} className="flex space-x-3">
                      <img 
                        src={article.image}
                        alt={article.title}
                        className="w-16 h-16 rounded object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <Link href={`/health-blog/latest`}>
                          <h4 className="text-sm font-medium text-gray-900 hover:text-blue-600 cursor-pointer line-clamp-2">
                            {article.title}
                          </h4>
                        </Link>
                        <p className="text-xs text-gray-600 mt-1">{article.publishDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}