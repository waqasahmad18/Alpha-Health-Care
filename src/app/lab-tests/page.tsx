'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  MapPin, 
  Filter,
  TestTube,
  Clock,
  DollarSign,
  Home,
  Building,
  Star,
  Heart,
  Eye,
  Brain,
  Droplets,
  Activity,
  Phone
} from 'lucide-react';
import GlobalNavbar from '@/components/GlobalNavbar';

export default function LabTestsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSampleType, setSelectedSampleType] = useState('');

  const categories = [
    { name: 'All Categories', value: '', icon: TestTube },
    { name: 'Blood Tests', value: 'blood', icon: Droplets },
    { name: 'Heart Tests', value: 'heart', icon: Heart },
    { name: 'Eye Tests', value: 'eye', icon: Eye },
    { name: 'Brain Tests', value: 'brain', icon: Brain },
    { name: 'General Health', value: 'general', icon: Activity },
  ];

  const cities = [
    'All Cities',
    'Karachi',
    'Lahore',
    'Islamabad',
    'Rawalpindi',
    'Faisalabad',
    'Multan',
    'Peshawar'
  ];

  const labTests = [
    {
      id: 1,
      name: 'Complete Blood Count (CBC)',
      category: 'blood',
      description: 'Comprehensive blood analysis including RBC, WBC, platelets, and hemoglobin levels',
      price: 800,
      originalPrice: 1000,
      discount: 20,
      sampleType: 'Blood',
      reportTime: '6 hours',
      homeCollection: true,
      labName: 'Chughtai Lab',
      rating: 4.8,
      reviews: 1245,
      preparation: 'No fasting required'
    },
    {
      id: 2,
      name: 'Lipid Profile',
      category: 'heart',
      description: 'Cholesterol and triglyceride levels to assess cardiovascular risk',
      price: 1200,
      originalPrice: 1500,
      discount: 20,
      sampleType: 'Blood',
      reportTime: '12 hours',
      homeCollection: true,
      labName: 'Aga Khan Laboratory',
      rating: 4.9,
      reviews: 987,
      preparation: '12 hours fasting required'
    },
    {
      id: 3,
      name: 'Thyroid Function Test (TFT)',
      category: 'general',
      description: 'T3, T4, and TSH levels to evaluate thyroid gland function',
      price: 1500,
      originalPrice: 1800,
      discount: 17,
      sampleType: 'Blood',
      reportTime: '24 hours',
      homeCollection: true,
      labName: 'Excel Lab',
      rating: 4.7,
      reviews: 756,
      preparation: 'No special preparation needed'
    },
    {
      id: 4,
      name: 'Diabetes Panel',
      category: 'blood',
      description: 'Fasting glucose, HbA1c, and post-meal glucose levels',
      price: 1000,
      originalPrice: 1200,
      discount: 17,
      sampleType: 'Blood',
      reportTime: '8 hours',
      homeCollection: true,
      labName: 'Chughtai Lab',
      rating: 4.8,
      reviews: 1567,
      preparation: '8-12 hours fasting required'
    },
    {
      id: 5,
      name: 'Liver Function Test (LFT)',
      category: 'general',
      description: 'Comprehensive liver enzyme analysis including ALT, AST, bilirubin',
      price: 900,
      originalPrice: 1100,
      discount: 18,
      sampleType: 'Blood',
      reportTime: '12 hours',
      homeCollection: true,
      labName: 'Shifa Laboratory',
      rating: 4.6,
      reviews: 432,
      preparation: 'No fasting required'
    },
    {
      id: 6,
      name: 'Kidney Function Test (KFT)',
      category: 'general',
      description: 'Creatinine, urea, and electrolyte levels to assess kidney health',
      price: 1100,
      originalPrice: 1300,
      discount: 15,
      sampleType: 'Blood',
      reportTime: '12 hours',
      homeCollection: true,
      labName: 'Aga Khan Laboratory',
      rating: 4.9,
      reviews: 654,
      preparation: 'No special preparation needed'
    },
    {
      id: 7,
      name: 'Eye Examination & Vision Test',
      category: 'eye',
      description: 'Comprehensive eye examination including visual acuity, eye pressure, and retinal imaging',
      price: 1500,
      originalPrice: 2000,
      discount: 25,
      sampleType: 'Non-invasive',
      reportTime: 'Immediate',
      homeCollection: false,
      labName: 'Al-Shifa Eye Hospital',
      rating: 4.7,
      reviews: 432,
      preparation: 'No special preparation needed'
    },
    {
      id: 8,
      name: 'Brain MRI Scan',
      category: 'brain',
      description: 'Detailed brain imaging using magnetic resonance to detect abnormalities and conditions',
      price: 8000,
      originalPrice: 10000,
      discount: 20,
      sampleType: 'Imaging',
      reportTime: '24 hours',
      homeCollection: false,
      labName: 'Shaukat Khanum Memorial Hospital',
      rating: 4.9,
      reviews: 298,
      preparation: 'No food 4 hours before scan'
    }
  ];

  const filteredTests = labTests.filter(test => {
    const matchesSearch = test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         test.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || test.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Global Navbar */}
      <GlobalNavbar showBackButton={true} backHref="/" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Lab Tests & Diagnostics
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Book diagnostic tests at reliable laboratories with convenient home collection across Pakistan</p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-10">
          {/* Search Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search lab tests..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select 
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
            <div className="relative">
              <TestTube className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>{category.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Additional Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sample Collection</label>
              <select 
                value={selectedSampleType}
                onChange={(e) => setSelectedSampleType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Types</option>
                <option value="home">Home Collection</option>
                <option value="lab">Lab Visit</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 flex items-center justify-center">
                <Filter className="h-4 w-4 mr-2" />
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        {/* Popular Categories */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {categories.slice(1).map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.value)}
                className={`p-4 rounded-lg border text-center hover:shadow-md transition-shadow ${
                  selectedCategory === category.value 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 bg-white'
                }`}
              >
                <category.icon className={`h-8 w-8 mx-auto mb-2 ${
                  selectedCategory === category.value ? 'text-blue-600' : 'text-gray-600'
                }`} />
                <span className={`text-sm font-medium ${
                  selectedCategory === category.value ? 'text-blue-600' : 'text-gray-900'
                }`}>
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {filteredTests.length} tests found
          </h2>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
              <option>Popularity</option>
              <option>Price (Low to High)</option>
              <option>Price (High to Low)</option>
              <option>Rating</option>
            </select>
          </div>
        </div>

        {/* Test Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTests.map((test) => (
            <div key={test.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-102">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{test.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{test.description}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <TestTube className="h-4 w-4 mr-1" />
                      <span>{test.sampleType}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{test.reportTime}</span>
                    </div>
                    {test.homeCollection && (
                      <div className="flex items-center text-green-600">
                        <Home className="h-4 w-4 mr-1" />
                        <span>Home Collection</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900">Rs. {test.price}</span>
                        <span className="text-sm text-gray-500 line-through">Rs. {test.originalPrice}</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          {test.discount}% OFF
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">{test.preparation}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Building className="h-4 w-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">{test.labName}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{test.rating}</span>
                    <span className="text-sm text-gray-600 ml-1">({test.reviews})</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Link 
                    href={`/lab-tests/${test.id}`}
                    className="flex-1 bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50 text-center"
                  >
                    View Details
                  </Link>
                  <button 
                    onClick={() => window.open(`tel:+923001234567`, '_self')}
                    className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 flex items-center justify-center"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call for Inquiry
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}