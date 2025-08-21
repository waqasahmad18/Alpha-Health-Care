'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, 
  Filter,
  Star,
  Grid3X3,
  List,
  SortAsc,
  MapPin,
  Truck,
  Shield,
  Clock,
  Heart,
  Plus,
  Minus,
  Tag,
  AlertTriangle
} from 'lucide-react';
import { getAllMedicines, medicineCategories, getPopularMedicines, type Medicine } from '@/data/medicines';
import { useCart } from '@/contexts/CartContext';
import GlobalNavbar from '@/components/GlobalNavbar';

export default function MedicinesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [prescriptionFilter, setPrescriptionFilter] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { addToCart, cartCount } = useCart();

  const allMedicines = getAllMedicines();
  const popularMedicines = getPopularMedicines();

  // Get unique brands
  const brands = [...new Set(allMedicines.map(med => med.brand))].sort();

  const filteredMedicines = allMedicines.filter(medicine => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         medicine.genericName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         medicine.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         medicine.uses.some(use => use.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = !selectedCategory || medicine.category === selectedCategory;
    const matchesBrand = !selectedBrand || medicine.brand === selectedBrand;
    const matchesStock = !inStockOnly || medicine.inStock;
    const matchesPrescription = !prescriptionFilter || 
      (prescriptionFilter === 'prescription' && medicine.prescriptionRequired) ||
      (prescriptionFilter === 'otc' && !medicine.prescriptionRequired);
    
    let matchesPrice = true;
    if (priceRange) {
      const price = medicine.discountedPrice || medicine.price;
      switch (priceRange) {
        case 'under-100':
          matchesPrice = price < 100;
          break;
        case '100-500':
          matchesPrice = price >= 100 && price <= 500;
          break;
        case '500-1000':
          matchesPrice = price >= 500 && price <= 1000;
          break;
        case 'over-1000':
          matchesPrice = price > 1000;
          break;
      }
    }
    
    return matchesSearch && matchesCategory && matchesBrand && matchesStock && matchesPrescription && matchesPrice;
  });

  // Sort medicines
  const sortedMedicines = [...filteredMedicines].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return (a.discountedPrice || a.price) - (b.discountedPrice || b.price);
      case 'price-high':
        return (b.discountedPrice || b.price) - (a.discountedPrice || a.price);
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return b.isPopular ? 1 : -1;
    }
  });

  const handleAddToCart = (medicine: Medicine) => {
    addToCart({
      id: medicine.id,
      name: medicine.name,
      price: medicine.price,
      discountedPrice: medicine.discountedPrice,
      image: medicine.image,
      brand: medicine.brand
    });
  };



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Global Navbar */}
      <GlobalNavbar showBackButton={true} backHref="/" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Medicines & Healthcare Products
            </h1>
            <p className="text-xl text-gray-600 mb-6">Order medicines online with fast delivery across Pakistan</p>
          </div>
          
          {/* Enhanced Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-green-800 mb-1">100% Genuine</h3>
              <p className="text-sm text-green-600">Verified & authentic medicines from licensed suppliers</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Truck className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-blue-800 mb-1">Free Delivery</h3>
              <p className="text-sm text-blue-600">Free shipping on orders above Rs. 500</p>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-6 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-orange-800 mb-1">Fast Delivery</h3>
              <p className="text-sm text-orange-600">2-hour delivery in major cities</p>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse by Category</h2>
            <p className="text-gray-600">Find medicines by health condition or type</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {medicineCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 shadow-md hover:shadow-lg border border-gray-100'
                }`}
              >
                {/* Background decoration */}
                <div className={`absolute inset-0 opacity-10 ${
                  selectedCategory === category.id 
                    ? 'bg-white' 
                    : 'bg-gradient-to-br from-blue-50 to-indigo-50'
                }`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-white/20 backdrop-blur-sm'
                      : 'bg-gradient-to-br from-blue-50 to-indigo-100 group-hover:from-blue-100 group-hover:to-indigo-200'
                  }`}>
                    <Image 
                      src={category.image} 
                      alt={category.name} 
                      width={32} 
                      height={32}
                      className={`transition-all duration-300 ${
                        selectedCategory === category.id ? 'brightness-0 invert' : ''
                      }`}
                    />
                  </div>
                  <h3 className={`font-bold text-base mb-2 transition-colors ${
                    selectedCategory === category.id ? 'text-white' : 'text-gray-900 group-hover:text-blue-700'
                  }`}>
                    {category.name}
                  </h3>
                  <p className={`text-sm mb-3 transition-colors ${
                    selectedCategory === category.id ? 'text-blue-100' : 'text-gray-600'
                  }`}>
                    {category.description}
                  </p>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-blue-100 text-blue-700 group-hover:bg-blue-200'
                  }`}>
                    {category.medicineCount} medicines
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 to-indigo-400/0 group-hover:from-blue-400/5 group-hover:to-indigo-400/5 transition-all duration-300"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-10">
          {/* Search Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search medicines, brands, health conditions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Enter delivery location"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Brands</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Prices</option>
                <option value="under-100">Under Rs. 100</option>
                <option value="100-500">Rs. 100 - 500</option>
                <option value="500-1000">Rs. 500 - 1000</option>
                <option value="over-1000">Over Rs. 1000</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                value={prescriptionFilter}
                onChange={(e) => setPrescriptionFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Types</option>
                <option value="otc">Over the Counter</option>
                <option value="prescription">Prescription Required</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm">In Stock Only</span>
              </label>
            </div>
            <div className="flex items-end">
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('');
                  setSelectedBrand('');
                  setPriceRange('');
                  setPrescriptionFilter('');
                  setInStockOnly(false);
                }}
                className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-300"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {sortedMedicines.length} medicines found
          </h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm"
              >
                <option value="popularity">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
            <div className="flex border border-gray-300 rounded-md">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Medicine Cards */}
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
          {sortedMedicines.map((medicine) => (
            <div
              key={medicine.id}
              className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow ${
                viewMode === 'list' ? 'flex items-center p-4' : 'p-4'
              }`}
            >
              <div className={viewMode === 'list' ? 'flex w-full' : ''}>
                {/* Image and Basic Info - Clickable */}
                <Link href={`/medicines/${medicine.id}`} className={`${viewMode === 'list' ? 'flex flex-1' : 'block'}`}>
                  <div className={viewMode === 'list' ? 'flex-shrink-0 mr-4' : ''}>
                    <div className={`bg-gray-100 rounded-lg flex items-center justify-center ${
                      viewMode === 'list' ? 'w-20 h-20' : 'w-full h-40 mb-4'
                    }`}>
                      <Image
                        src={medicine.image}
                        alt={medicine.name}
                        width={viewMode === 'list' ? 60 : 120}
                        height={viewMode === 'list' ? 60 : 120}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className={viewMode === 'list' ? 'flex-1' : ''}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{medicine.name}</h3>
                    {medicine.genericName && (
                      <p className="text-sm text-gray-600 mb-1">{medicine.genericName}</p>
                    )}
                    <p className="text-sm text-blue-600 font-medium mb-2">{medicine.brand}</p>
                    <p className="text-sm text-gray-600 mb-2">{medicine.packSize}</p>
                    
                    {/* Prescription indicator */}
                    {medicine.prescriptionRequired && (
                      <div className="flex items-center text-orange-600 text-xs mb-2">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        <span>Prescription Required</span>
                      </div>
                    )}
                    
                    {/* Rating */}
                    <div className="flex items-center mb-2">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{medicine.rating}</span>
                      <span className="text-sm text-gray-600 ml-1">({medicine.reviews})</span>
                    </div>
                    
                    {/* Price */}
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-xl font-bold text-gray-900">
                        Rs. {medicine.discountedPrice || medicine.price}
                      </span>
                      {medicine.discountedPrice && (
                        <>
                          <span className="text-sm text-gray-500 line-through">
                            Rs. {medicine.price}
                          </span>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            {medicine.discount}% OFF
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </Link>
                
                {/* Add to Cart Button */}
                <div className={`${viewMode === 'list' ? 'ml-4 flex-shrink-0' : 'mt-4'}`}>
                  {medicine.inStock ? (
                    <button
                      onClick={() => handleAddToCart(medicine)}
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 flex items-center justify-center transition-colors"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add to Cart
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-full bg-gray-300 text-gray-500 px-4 py-2 rounded-md text-sm font-medium cursor-not-allowed"
                    >
                      Out of Stock
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}