'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Plus, 
  Edit, 
  Trash2, 
  Search, 
  Filter,
  MoreVertical,
  Star,
  MapPin,
  Building,
  UserCheck,
  UserX
} from 'lucide-react';

interface Doctor {
  _id: string;
  name: string;
  specialty: string;
  hospital: string;
  city: string;
  rating: number;
  image: string;
  isActive: boolean;
  experience: string;
  consultationFee: number;
  availableDays: string[];
  availableTime: string;
}

export default function ManageDoctors() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpecialty, setFilterSpecialty] = useState('');
  const [filterCity, setFilterCity] = useState('');

  useEffect(() => {
    if (status === 'loading') return;
    
    if (!session) {
      router.push('/login');
      return;
    }

    if (session.user.role !== 'admin') {
      router.push('/');
      return;
    }

    // Fetch doctors only once when component mounts
    fetchDoctors();
  }, [session, status, router]);

  const fetchDoctors = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/doctors');
      if (response.ok) {
        const data = await response.json();
        // Handle new response format
        if (data.adminDoctors) {
          setDoctors(data.adminDoctors);
        } else {
          // Fallback to old format
          setDoctors(data);
        }
      }
    } catch (error) {
      console.error('Error fetching doctors:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteDoctor = async (doctorId: string) => {
    if (typeof window !== 'undefined' && window.confirm('Are you sure you want to delete this doctor?')) {
      try {
        const response = await fetch(`/api/admin/doctors/${doctorId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          // Remove from state immediately after successful API call
          setDoctors(prevDoctors => prevDoctors.filter(doctor => doctor._id !== doctorId));
          
          // Refresh main website data
          await refreshMainWebsiteData();
          
          // Show success message
          alert('Doctor deleted successfully');
        } else {
          const errorData = await response.json();
          alert(`Failed to delete doctor: ${errorData.error || 'Unknown error'}`);
        }
      } catch (error) {
        console.error('Error deleting doctor:', error);
        alert('Error deleting doctor. Please try again.');
      }
    }
  };

  // Function to refresh main website data
  const refreshMainWebsiteData = async () => {
    try {
      // This will trigger a refresh of the main doctors page
      await fetch('/api/doctors', { method: 'GET' });
    } catch (error) {
      console.log('Main website refresh triggered');
    }
  };

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSpecialty = !filterSpecialty || doctor.specialty === filterSpecialty;
    const matchesCity = !filterCity || doctor.city === filterCity;
    
    return matchesSearch && matchesSpecialty && matchesCity;
  });

  const getSpecialties = () => {
    const specialties = [...new Set(doctors.map(doctor => doctor.specialty))];
    return specialties.sort();
  };

  const getCities = () => {
    const cities = [...new Set(doctors.map(doctor => doctor.city))];
    return cities.sort();
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading Doctors...</p>
        </div>
      </div>
    );
  }

  if (!session || session.user.role !== 'admin') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <Link
                href="/admin"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-3xl font-bold text-gray-900">Manage Doctors</h1>
            </div>
            
            <Link
              href="/admin/doctors/new"
              className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Plus className="h-5 w-5" />
              <span>Add New Doctor</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Specialty Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={filterSpecialty}
                onChange={(e) => setFilterSpecialty(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="">All Specialties</option>
                {getSpecialties().map(specialty => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>
            </div>

            {/* City Filter */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={filterCity}
                onChange={(e) => setFilterCity(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="">All Cities</option>
                {getCities().map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-center px-4 py-3 bg-gray-50 rounded-xl">
              <span className="text-sm text-gray-600">
                {filteredDoctors.length} of {doctors.length} doctors
              </span>
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <div key={doctor._id} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:scale-105">
              {/* Doctor Image and Status */}
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    doctor.isActive 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {doctor.isActive ? 'Active' : 'Inactive'}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-1 bg-white bg-opacity-90 px-2 py-1 rounded-lg">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-900">{doctor.rating}</span>
                  </div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <Building className="h-4 w-4" />
                    <span className="text-sm">{doctor.specialty}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{doctor.hospital}, {doctor.city}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <UserCheck className="h-4 w-4" />
                    <span className="text-sm">{doctor.experience} experience</span>
                  </div>
                </div>

                {/* Consultation Fee */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Consultation Fee:</span>
                    <span className="text-lg font-bold text-indigo-600">Rs. {doctor.consultationFee}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Link
                      href={`/admin/doctors/${doctor._id}/edit`}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                      <span className="text-sm font-medium">Edit</span>
                    </Link>
                    
                    <button
                      onClick={() => handleDeleteDoctor(doctor._id)}
                      className="flex items-center space-x-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="text-sm font-medium">Delete</span>
                    </button>
                  </div>
                  
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <UserX className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No doctors found</h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || filterSpecialty || filterCity 
                ? 'Try adjusting your search or filters'
                : 'Get started by adding your first doctor profile'
              }
            </p>
            {!searchTerm && !filterSpecialty && !filterCity && (
              <Link
                href="/admin/doctors/new"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
              >
                <Plus className="h-5 w-5" />
                <span>Add New Doctor</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 