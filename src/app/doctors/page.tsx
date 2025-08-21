'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, 
  MapPin, 
  Star, 
  Filter,
  Calendar,
  Video,
  Clock,
  Stethoscope,
  Heart,
  Brain,
  Eye,
  Bone,
  Baby
} from 'lucide-react';
import { getAllDoctors, type Doctor } from '@/data/doctors';
import { getSearchSuggestions, getCitySuggestions, type SearchSuggestion } from '@/utils/searchSuggestions';
import GlobalNavbar from '@/components/GlobalNavbar';

function DoctorsPageContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState('');
  const [displayCount, setDisplayCount] = useState(6);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);

  useEffect(() => {
    // Get search parameters from URL
    const search = searchParams.get('search');
    const city = searchParams.get('city');
    
    if (search) setSearchQuery(search);
    if (city) setSelectedCity(city);
  }, [searchParams]);

  const handleSearchInput = (value: string) => {
    setSearchQuery(value);
    if (value.length > 0) {
      const newSuggestions = getSearchSuggestions(value);
      setSuggestions(newSuggestions);
      setShowSuggestions(newSuggestions.length > 0);
    } else {
      setShowSuggestions(false);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setSearchQuery(suggestion.value);
    setShowSuggestions(false);
    setSuggestions([]);
  };

  const specialties = [
    { name: 'All Specialties', value: '' },
    { name: 'Cardiology', value: 'cardiology', icon: Heart },
    { name: 'Neurology', value: 'neurology', icon: Brain },
    { name: 'Ophthalmology', value: 'ophthalmology', icon: Eye },
    { name: 'Orthopedic', value: 'orthopedic', icon: Bone },
    { name: 'Gynecology', value: 'gynecology', icon: Baby },
    { name: 'General Medicine', value: 'general', icon: Stethoscope },
  ];

  const cities = ['All Cities', ...getCitySuggestions()];

  const doctors = getAllDoctors();

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = searchQuery === '' || 
                         doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.qualifications.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.hospital.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCity = !selectedCity || selectedCity === 'All Cities' || doctor.city === selectedCity;
    const matchesSpecialty = !selectedSpecialty || doctor.specialty.toLowerCase().includes(selectedSpecialty);
    const matchesGender = !selectedGender || doctor.gender === selectedGender;
    
    return matchesSearch && matchesCity && matchesSpecialty && matchesGender;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Global Navbar */}
      <GlobalNavbar showBackButton={true} backHref="/" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Find Expert Doctors
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Search and book appointments with verified doctors across Pakistan</p>
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
                placeholder="Search doctors, specialties..."
                value={searchQuery}
                onChange={(e) => handleSearchInput(e.target.value)}
                onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
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
                className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
            <div className="relative">
              <Stethoscope className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select 
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
              >
                {specialties.map((specialty) => (
                  <option key={specialty.value} value={specialty.value}>{specialty.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Additional Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
              <select 
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
              <select 
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Any Time</option>
                <option value="today">Available Today</option>
                <option value="tomorrow">Available Tomorrow</option>
                <option value="week">Available This Week</option>
              </select>
            </div>
            <div className="flex items-end space-x-2">
              <button 
                onClick={() => {
                  // Clear all filters
                  setSearchQuery('');
                  setSelectedCity('');
                  setSelectedSpecialty('');
                  setSelectedGender('');
                  setSelectedAvailability('');
                  setDisplayCount(6);
                }}
                className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-200 flex items-center justify-center"
              >
                Clear Filters
              </button>
              <button 
                onClick={() => {
                  // Forces a re-render to apply all current filter states
                  setDisplayCount(6); // Reset display count when applying filters
                }}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 flex items-center justify-center"
              >
                <Filter className="h-4 w-4 mr-2" />
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {filteredDoctors.length} doctors found
          </h2>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
              <option>Relevance</option>
              <option>Rating</option>
              <option>Experience</option>
              <option>Fee (Low to High)</option>
              <option>Fee (High to Low)</option>
            </select>
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="space-y-6">
          {filteredDoctors.slice(0, displayCount).map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-102">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  <div className="w-20 h-20 rounded-full flex-shrink-0 overflow-hidden bg-gray-200">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                    <p className="text-blue-600 font-medium mb-1">{doctor.specialty}</p>
                    <p className="text-sm text-gray-600 mb-2">{doctor.qualifications}</p>
                    <p className="text-sm text-gray-600 mb-2">{doctor.experience} experience</p>
                    <p className="text-sm text-gray-600 mb-2">{doctor.hospital}, {doctor.city}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="font-medium">{doctor.rating}</span>
                        <span className="ml-1">({doctor.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{doctor.nextAvailable}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 mt-2">
                      {doctor.consultationTypes.map((type) => (
                        <span key={type} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {type === 'Video' && <Video className="h-3 w-3 mr-1" />}
                          {type === 'In-Person' && <Calendar className="h-3 w-3 mr-1" />}
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end space-y-3">
                  <div className="text-right">
                    <div className="flex items-center text-gray-600 mb-1">
                      <span className="text-sm">Consultation Fee</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">Rs. {doctor.fee}</p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <a href={`/doctors/${doctor.id}`} className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50 inline-block text-center">
                      View Profile
                    </a>
                    <a href={`/doctors/${doctor.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 inline-block text-center">
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {displayCount < filteredDoctors.length && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setDisplayCount(prev => prev + 6)}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Load More Doctors ({filteredDoctors.length - displayCount} remaining)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DoctorsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <DoctorsPageContent />
    </Suspense>
  );
}