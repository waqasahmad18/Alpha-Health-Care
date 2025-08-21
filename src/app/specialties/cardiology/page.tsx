'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Search, 
  Filter,
  Star,
  MapPin,
  Clock,
  Phone,
  Calendar,
  Heart,
  Activity,
  User,
  Building
} from 'lucide-react';

export default function CardiologyPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCity, setFilterCity] = useState('');
  const [filterExperience, setFilterExperience] = useState('');

  const cardiologists = [
    {
      id: 1,
      name: 'Dr. Ahmad Ali',
      specialty: 'Cardiologist',
      hospital: 'Shaukat Khanum Memorial Hospital',
      city: 'Lahore',
      rating: 4.8,
      experience: '15+ years',
      consultationFee: 3000,
      image: '/doctors/cardiologist1.jpg',
      availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      availableTime: '9:00 AM - 5:00 PM',
      description: 'Expert in interventional cardiology and heart disease treatment'
    },
    {
      id: 2,
      name: 'Dr. Fatima Khan',
      specialty: 'Cardiologist',
      hospital: 'Aga Khan University Hospital',
      city: 'Karachi',
      rating: 4.9,
      experience: '12+ years',
      consultationFee: 3500,
      image: '/doctors/cardiologist2.jpg',
      availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      availableTime: '10:00 AM - 6:00 PM',
      description: 'Specialized in pediatric cardiology and congenital heart defects'
    },
    {
      id: 3,
      name: 'Dr. Tania Shaikh',
      specialty: 'Cardiologist',
      hospital: 'Pakistan Institute of Medical Sciences',
      city: 'Islamabad',
      rating: 4.7,
      experience: '18+ years',
      consultationFee: 2800,
      image: '/doctors/cardiologist3.jpg',
      availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      availableTime: '8:00 AM - 4:00 PM',
      description: 'Expert in cardiac imaging and diagnostic procedures'
    }
  ];

  const filteredDoctors = cardiologists.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = !filterCity || doctor.city === filterCity;
    const matchesExperience = !filterExperience || doctor.experience === filterExperience;
    
    return matchesSearch && matchesCity && matchesExperience;
  });

  const cities = [...new Set(cardiologists.map(doctor => doctor.city))];
  const experiences = [...new Set(cardiologists.map(doctor => doctor.experience))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center mr-4">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <h1 className="text-2xl font-bold text-blue-600">Alpha Health Care</h1>
              </Link>
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/doctors" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Find Doctors</Link>
                <Link href="/lab-tests" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Lab Tests</Link>
                <Link href="/medicines" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Medicines</Link>
                <Link href="/health-blog" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Health Blog</Link>
              </div>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-12 w-12 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Top Cardiologists in Pakistan
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Expert heart specialists providing comprehensive cardiac care
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search cardiologists..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* City Filter */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={filterCity}
                onChange={(e) => setFilterCity(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="">All Cities</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* Experience Filter */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={filterExperience}
                onChange={(e) => setFilterExperience(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="">All Experience</option>
                {experiences.map(exp => (
                  <option key={exp} value={exp}>{exp}</option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-center px-4 py-3 bg-gray-50 rounded-xl">
              <span className="text-sm text-gray-600">
                {filteredDoctors.length} cardiologists found
              </span>
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                {/* Doctor Image and Rating */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="h-10 w-10 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{doctor.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Building className="h-4 w-4" />
                    <span className="text-sm">{doctor.hospital}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{doctor.city}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Activity className="h-4 w-4" />
                    <span className="text-sm">{doctor.experience} experience</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{doctor.availableTime}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">{doctor.description}</p>

                {/* Consultation Fee */}
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Consultation Fee:</span>
                    <span className="text-lg font-bold text-blue-600">Rs. {doctor.consultationFee}</span>
                  </div>
                </div>

                {/* Available Days */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Available Days:</p>
                  <div className="flex flex-wrap gap-1">
                    {doctor.availableDays.map(day => (
                      <span key={day} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {day.slice(0, 3)}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Link
                    href={`/appointment?doctorId=${doctor.id}&date=Tomorrow&time=10:00 AM&type=in-person`}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-medium"
                  >
                    Book Appointment
                  </Link>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Phone className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No cardiologists found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filters
            </p>
          </div>
        )}

        {/* Why Choose Cardiology */}
        <div className="mt-16 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Cardiologists?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Care</h3>
              <p className="text-gray-600">Board-certified cardiologists with years of experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Advanced Technology</h3>
              <p className="text-gray-600">State-of-the-art diagnostic and treatment facilities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quick Access</h3>
              <p className="text-gray-600">Fast appointment booking and consultation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 