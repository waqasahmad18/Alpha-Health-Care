'use client';

import Link from 'next/link';
import { 
  Star,
  Heart,
  Brain,
  Eye,
  Stethoscope,
  Baby,
  Activity,
  User,
  Calendar,
  Clock,
  Eye as EyeIcon,
  TrendingUp,
  BookOpen,
  ArrowLeft
} from 'lucide-react';
import GlobalNavbar from '@/components/GlobalNavbar';

export default function FeaturedArticlesPage() {
  const featuredArticles = [
    {
      id: 1,
      title: '10 Warning Signs of Heart Disease You Should Never Ignore',
      excerpt: 'Learn about the early warning signs of heart disease that could save your life. From chest pain to shortness of breath, know when to seek medical attention.',
      category: 'Heart Health',
      categoryIcon: Heart,
      author: 'Dr. Ahmed Ali Khan',
      authorSpecialty: 'Cardiologist',
      publishDate: '2 days ago',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true,
      views: 15420,
      likes: 234,
      content: 'Heart disease remains the leading cause of death worldwide. Early detection is crucial for successful treatment and prevention of complications. This comprehensive guide covers the most important warning signs that should prompt immediate medical attention.'
    },
    {
      id: 2,
      title: 'Managing Diabetes: A Complete Guide to Healthy Living',
      excerpt: 'Comprehensive guide on managing diabetes through diet, exercise, and medication. Tips for monitoring blood sugar and preventing complications.',
      category: 'General Health',
      categoryIcon: Stethoscope,
      author: 'Dr. Fatima Nasir',
      authorSpecialty: 'Endocrinologist',
      publishDate: '5 days ago',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true,
      views: 12890,
      likes: 187,
      content: 'Diabetes management requires a comprehensive approach that combines medical treatment with lifestyle modifications. This guide provides evidence-based strategies for maintaining optimal blood sugar levels and preventing long-term complications.'
    },
    {
      id: 3,
      title: 'The Future of Mental Health Treatment: Breakthrough Therapies',
      excerpt: 'Exploring cutting-edge treatments and therapies that are revolutionizing mental health care and offering new hope to patients.',
      category: 'Mental Health',
      categoryIcon: Brain,
      author: 'Dr. Hassan Ali',
      authorSpecialty: 'Psychiatrist',
      publishDate: '1 week ago',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true,
      views: 11200,
      likes: 289,
      content: 'Mental health treatment is evolving rapidly with new therapeutic approaches, medications, and technologies. This article explores the latest developments that are changing how we understand and treat mental health conditions.'
    },
    {
      id: 4,
      title: 'Advanced Eye Care: Protecting Your Vision in the Digital Age',
      excerpt: 'Modern strategies for maintaining eye health in an era of increased screen time and digital device usage.',
      category: 'Eye Care',
      categoryIcon: Eye,
      author: 'Dr. Sarah Ahmed',
      authorSpecialty: 'Ophthalmologist',
      publishDate: '1 week ago',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true,
      views: 8750,
      likes: 156,
      content: 'Digital eye strain and blue light exposure are becoming significant concerns in our technology-driven world. Learn about protective measures, proper screen habits, and when to seek professional eye care.'
    },
    {
      id: 5,
      title: 'Pediatric Care Excellence: Building Healthy Foundations',
      excerpt: 'Essential guidelines for parents on providing the best healthcare foundation for their children from birth through adolescence.',
      category: 'Child Health',
      categoryIcon: Baby,
      author: 'Dr. Zara Khan',
      authorSpecialty: 'Pediatrician',
      publishDate: '2 weeks ago',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true,
      views: 9650,
      likes: 198,
      content: 'Early childhood healthcare sets the foundation for lifelong wellness. This comprehensive guide covers evidence-based strategies for maintaining optimal blood sugar levels and preventing long-term complications.'
    },
    {
      id: 6,
      title: 'Revolutionary Fitness: Science-Based Training Methods',
      excerpt: 'Discover evidence-based fitness approaches that maximize results while minimizing injury risk and optimizing recovery.',
      category: 'Fitness',
      categoryIcon: Activity,
      author: 'Dr. Ali Raza',
      authorSpecialty: 'Sports Medicine',
      publishDate: '2 weeks ago',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true,
      views: 7890,
      likes: 143,
      content: 'Modern fitness science has revolutionized how we approach exercise and training. Learn about periodization, recovery optimization, and how to design effective workout programs based on scientific principles.'
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
          <span className="text-gray-900">Featured Articles</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white p-8 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Star className="h-8 w-8" />
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">Featured</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Featured Health Articles</h1>
          <p className="text-xl text-purple-100 leading-relaxed">
            Curated collection of our most important and impactful health articles, written by leading medical professionals
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredArticles.map((article) => (
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
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Featured
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
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
                        <Heart className="h-4 w-4 mr-1" />
                        <span>{article.likes}</span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{article.authorSpecialty}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <Link
                  href={`/health-blog/article/${article.id}`}
                  className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Read Full Article
                  <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated with Health Insights</h2>
          <p className="text-blue-100 mb-6">
            Get notified about new featured articles and health tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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
