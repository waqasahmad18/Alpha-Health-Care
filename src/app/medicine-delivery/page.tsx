'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Truck, 
  Clock, 
  Shield, 
  Star,
  MapPin,
  Phone,
  Mail,
  Package,
  CreditCard,
  CheckCircle
} from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import GlobalNavbar from '@/components/GlobalNavbar';

export default function MedicineDeliveryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount } = useCart();

  const medicines = [
    {
      id: 1,
      name: 'Paracetamol 500mg',
      brand: 'GSK',
      price: 150,
      deliveryTime: '2-3 hours',
      image: '/medicines/paracetamol.jpg',
      description: 'Pain reliever and fever reducer',
      inStock: true
    },
    {
      id: 2,
      name: 'Amoxicillin 500mg',
      brand: 'Pfizer',
      price: 300,
      deliveryTime: '2-3 hours',
      image: '/medicines/amoxicillin.jpg',
      description: 'Antibiotic for bacterial infections',
      inStock: true
    },
    {
      id: 3,
      name: 'Omeprazole 20mg',
      brand: 'AstraZeneca',
      price: 450,
      deliveryTime: '2-3 hours',
      image: '/medicines/omeprazole.jpg',
      description: 'Reduces stomach acid production',
      inStock: true
    },
    {
      id: 4,
      name: 'Metformin 500mg',
      brand: 'Merck',
      price: 200,
      deliveryTime: '2-3 hours',
      image: '/medicines/metformin.jpg',
      description: 'Diabetes medication',
      inStock: true
    }
  ];

  const { addToCart } = useCart();

  const handleAddToCart = (medicine: any) => {
    addToCart({
      id: medicine.id,
      name: medicine.name,
      price: medicine.price,
      image: medicine.image,
      brand: medicine.brand
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Global Navbar */}
      <GlobalNavbar showBackButton={true} backHref="/" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fast & Reliable Medicine Delivery
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get your medicines delivered to your doorstep within 2-3 hours
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search medicines, brands, or symptoms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Get medicines delivered within 2-3 hours</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified Medicines</h3>
            <p className="text-gray-600">All medicines are authentic and verified</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Service</h3>
            <p className="text-gray-600">Order medicines anytime, day or night</p>
          </div>
        </div>

        {/* Popular Medicines */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Medicines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {medicines.map((medicine) => (
              <div key={medicine.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-4">
                  <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <Package className="h-12 w-12 text-gray-400" />
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-1">{medicine.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{medicine.brand}</p>
                  <p className="text-sm text-gray-500 mb-3">{medicine.description}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-blue-600">Rs. {medicine.price}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">4.5</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <Truck className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">{medicine.deliveryTime}</span>
                  </div>
                  
                  <button
                    onClick={() => handleAddToCart(medicine)}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Search</h3>
              <p className="text-gray-600">Find your medicine by name or symptoms</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Add to Cart</h3>
              <p className="text-gray-600">Select medicines and add to cart</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Checkout</h3>
              <p className="text-gray-600">Enter delivery details and pay</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Delivery</h3>
              <p className="text-gray-600">Get medicines at your doorstep</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-900">Call Us</p>
                <p className="text-gray-600">+92 311 1222 398</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Mail className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-900">Email Us</p>
                <p className="text-gray-600">support@alphahealth.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-900">Visit Us</p>
                <p className="text-gray-600">Lahore, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 