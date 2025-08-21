'use client';

import { 
  Search, 
  Calendar, 
  Video, 
  MapPin, 
  Star, 
  Users, 
  Stethoscope,
  Heart,
  Brain,
  Eye,
  Bone,
  Baby,
  Pill,
  TestTube,
  Phone,
  MessageSquare,
  Shield,
  Clock
} from 'lucide-react';
import MobileMenu from '../components/MobileMenu';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSearchSuggestions, getCitySuggestions, type SearchSuggestion } from '@/utils/searchSuggestions';
import GlobalNavbar from '@/components/GlobalNavbar';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const router = useRouter();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.append('search', searchQuery);
    if (selectedCity && selectedCity !== 'Select City') params.append('city', selectedCity);
    
    setShowSuggestions(false);
    router.push(`/doctors?${params.toString()}`);
  };

  const handleSearchInput = (value: string) => {
    console.log('handleSearchInput called with:', value);
    setSearchQuery(value);
    if (value.length > 0) {
      const newSuggestions = getSearchSuggestions(value);
      console.log('Search value:', value, 'Suggestions:', newSuggestions);
      
      // Test with hardcoded suggestions if no results
      const testSuggestions: SearchSuggestion[] = newSuggestions.length > 0 ? newSuggestions : [
        { value: 'cardiology', type: 'specialty', label: 'Cardiology (2 doctors)' },
        { value: 'Dr. Ahmed', type: 'doctor', label: 'Dr. Ahmed - Cardiology' }
      ];
      
      setSuggestions(testSuggestions);
      setShowSuggestions(testSuggestions.length > 0);
    } else {
      setShowSuggestions(false);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setSearchQuery(suggestion.value);
    setShowSuggestions(false);
    setSuggestions([]);
    
    const params = new URLSearchParams();
    params.append('search', suggestion.value);
    if (selectedCity && selectedCity !== 'Select City') params.append('city', selectedCity);
    
    router.push(`/doctors?${params.toString()}`);
  };
  const specialties = [
    { name: 'Cardiology', icon: Heart, color: 'bg-red-100 text-red-600' },
    { name: 'Neurology', icon: Brain, color: 'bg-purple-100 text-purple-600' },
    { name: 'Ophthalmology', icon: Eye, color: 'bg-blue-100 text-blue-600' },
    { name: 'Orthopedic', icon: Bone, color: 'bg-green-100 text-green-600' },
    { name: 'Gynecology', icon: Baby, color: 'bg-pink-100 text-pink-600' },
    { name: 'General Medicine', icon: Stethoscope, color: 'bg-indigo-100 text-indigo-600' },
  ];

  const services = [
    {
      title: 'Find Doctors',
      description: 'Search and book appointments with verified doctors',
      icon: Search,
      color: 'bg-blue-500'
    },
    {
      title: 'Online Consultation',
      description: 'Video consultations with medical experts',
      icon: Video,
      color: 'bg-green-500'
    },
    {
      title: 'Lab Tests',
      description: 'Book diagnostic tests at reliable laboratories',
      icon: TestTube,
      color: 'bg-purple-500'
    },
    {
      title: 'Medicine Delivery',
      description: 'Order medicines and get them delivered',
      icon: Pill,
      color: 'bg-orange-500'
    }
  ];

  const topDoctors = [
    {
      name: 'Dr. Ahmed Ali',
      specialty: 'Cardiologist',
      experience: '15 years',
      rating: 4.8,
      fee: 'Rs. 2000',
      image: '/vecteezy_ai-generated-doctor-png-isolated-on-transparent-background_35681213.png'
    },
    {
      name: 'Dr. Fatima Khan',
      specialty: 'Gynecologist',
      experience: '12 years',
      rating: 4.9,
      fee: 'Rs. 1800',
      image: '/vecteezy_ai-generated-a-female-doctor-with-a-stethoscope-isolated-on_41409059-removebg-preview.png'
    },
         {
       name: 'Dr. Muhammad Hassan',
       specialty: 'Neurologist',
       experience: '18 years',
       rating: 4.7,
       fee: 'Rs. 2500',
       image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face'
     }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Global Navbar */}
      <GlobalNavbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Find the 
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Best Doctors
              </span>
              Near You
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Pakistan's largest digital healthcare platform for appointment booking and online consultations
            </p>
            
                        {/* Search Bar */}
            <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search doctors, specialties..."
                    value={searchQuery}
                    onChange={(e) => handleSearchInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base transition-all duration-200 hover:border-gray-400"
                  />
                  
                  {/* Search Suggestions Dropdown */}
                  {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 max-h-64 overflow-y-auto">
                      {suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 flex items-center space-x-3 transition-colors"
                        >
                          <div className={`p-2 rounded-lg ${
                            suggestion.type === 'doctor' ? 'bg-blue-100 text-blue-600' :
                            suggestion.type === 'specialty' ? 'bg-green-100 text-green-600' :
                            'bg-orange-100 text-orange-600'
                          }`}>
                            {suggestion.type === 'doctor' ? (
                              <Stethoscope className="h-4 w-4" />
                            ) : suggestion.type === 'specialty' ? (
                              <Heart className="h-4 w-4" />
                            ) : (
                              <MapPin className="h-4 w-4" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{suggestion.value}</div>
                            <div className="text-sm text-gray-500">{suggestion.label}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select 
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base transition-all duration-200 hover:border-gray-400">
                    <option value="">Select City</option>
                    {getCitySuggestions().map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                <button 
                  onClick={handleSearch}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 flex items-center justify-center text-sm md:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <Search className="h-5 w-5 mr-2" />
                  Search Doctors
                </button>
        </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Complete healthcare solutions at your fingertips with Pakistan's most trusted medical platform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-4 text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                  Learn More →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Medical Specialties</h2>
            <p className="text-lg text-gray-600">Find doctors from various medical specialties</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {specialties.map((specialty, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className={`${specialty.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <specialty.icon className="h-8 w-8" />
                </div>
                <h3 className="text-sm font-medium text-gray-900">{specialty.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Doctors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Rated Doctors</h2>
            <p className="text-lg text-gray-600">Consult with Pakistan's most trusted medical professionals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topDoctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full mr-4 overflow-hidden bg-gray-200">
          <Image
                      src={doctor.image}
                      alt={doctor.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
                    <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                    <p className="text-sm text-gray-600">{doctor.experience} experience</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{doctor.rating}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">{doctor.fee}</p>
                    <a href={`/doctors/${index + 1}`} className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 mt-2 inline-block text-center">
                      Book Appointment
          </a>
        </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">35,000+</div>
              <div className="text-blue-200">Verified Doctors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10M+</div>
              <div className="text-blue-200">Patients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">155</div>
              <div className="text-blue-200">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-blue-200">Hospitals</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Alpha Health Care?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Doctors</h3>
              <p className="text-gray-600">All doctors are PMC verified and experienced professionals</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Booking</h3>
              <p className="text-gray-600">Book appointments 24/7 with instant confirmation</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Get help anytime with our dedicated customer support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Alpha Health Care</h3>
              <p className="text-gray-400 mb-4">Pakistan's largest digital healthcare platform connecting patients with verified doctors.</p>
              <div className="flex space-x-4">
                <Phone className="h-5 w-5" />
                <span className="text-sm">+92 311 1222 398</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/doctors" className="hover:text-white">Find Doctors</a></li>
                <li><a href="/doctors" className="hover:text-white">Online Consultation</a></li>
                <li><a href="/lab-tests" className="hover:text-white">Lab Tests</a></li>
                <li><a href="/medicine-delivery" className="hover:text-white">Medicine Delivery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Specialties</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/specialties/cardiology" className="hover:text-white">Cardiology</a></li>
                <li><a href="/specialties/neurology" className="hover:text-white">Neurology</a></li>
                <li><a href="/specialties/gynecology" className="hover:text-white">Gynecology</a></li>
                <li><a href="/specialties/pediatrics" className="hover:text-white">Pediatrics</a></li>
              </ul>
            </div>
                         <div>
               <h4 className="text-lg font-semibold mb-4">Company</h4>
               <ul className="space-y-2 text-gray-400">
                 <li><a href="/about" className="hover:text-white">About Us</a></li>
                 <li><a href="/contact" className="hover:text-white">Contact</a></li>
                 <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
                 <li><a href="/terms-of-service" className="hover:text-white">Terms of Service</a></li>
               </ul>
             </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Alpha Health Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
      

    </div>
  );
}