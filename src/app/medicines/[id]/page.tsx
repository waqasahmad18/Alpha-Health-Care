'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Star, 
  ArrowLeft,
  ShoppingCart,
  Heart,
  Share2,
  Shield,
  Truck,
  Clock,
  AlertTriangle,
  CheckCircle,
  Plus,
  Minus,
  Package,
  Calendar,
  ThermometerSun,
  Info,
  User,
  ChevronRight
} from 'lucide-react';
import { getMedicineById, getAllMedicines } from '@/data/medicines';

export default function MedicineDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState('description');
  const [isFavorite, setIsFavorite] = useState(false);
  const [medicineId, setMedicineId] = useState<number>(0);

  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      setMedicineId(parseInt(resolvedParams.id));
    };
    resolveParams();
  }, [params]);
  
  if (!medicineId) {
    return <div>Loading...</div>;
  }
  
  const medicine = getMedicineById(medicineId);

  if (!medicine) {
    notFound();
  }

  const allMedicines = getAllMedicines();
  const similarMedicines = allMedicines
    .filter(med => med.category === medicine.category && med.id !== medicine.id)
    .slice(0, 4);

  const reviews = [
    {
      id: 1,
      userName: 'Ahmed Hassan',
      rating: 5,
      date: '2 days ago',
      comment: 'Very effective medicine. Fast delivery and genuine product.',
      verified: true
    },
    {
      id: 2,
      userName: 'Fatima Ali',
      rating: 4,
      date: '1 week ago',
      comment: 'Good quality medicine. Works as expected.',
      verified: true
    },
    {
      id: 3,
      userName: 'Muhammad Khan',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Excellent service and authentic medicines.',
      verified: false
    }
  ];

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= medicine.stockQuantity) {
      setQuantity(newQuantity);
    }
  };

  const totalPrice = (medicine.discountedPrice || medicine.price) * quantity;
  const savingsAmount = medicine.discountedPrice ? (medicine.price - medicine.discountedPrice) * quantity : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/medicines" className="flex items-center mr-4">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <h1 className="text-2xl font-bold text-blue-600">Alpha Health Care</h1>
              </Link>
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/doctors" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Find Doctors</Link>
                <Link href="/lab-tests" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Lab Tests</Link>
                <Link href="/medicines" className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 text-sm font-medium">Medicines</Link>
                <Link href="/health-blog" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Health Blog</Link>
              </div>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-blue-600">
                <ShoppingCart className="h-6 w-6" />
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/medicines" className="hover:text-blue-600">Medicines</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900">{medicine.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Product Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Images and Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Image */}
                <div>
                  <div className="bg-gray-100 rounded-lg p-8 mb-4">
                    <Image
                      src={medicine.image}
                      alt={medicine.name}
                      width={300}
                      height={300}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  
                  {/* Share and Favorite */}
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className={`flex items-center px-4 py-2 rounded-md border ${
                        isFavorite 
                          ? 'border-red-300 bg-red-50 text-red-600' 
                          : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Heart className={`h-4 w-4 mr-2 ${isFavorite ? 'fill-current' : ''}`} />
                      {isFavorite ? 'Favorited' : 'Add to Favorites'}
                    </button>
                    <button className="flex items-center px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{medicine.name}</h1>
                  {medicine.genericName && (
                    <p className="text-lg text-gray-600 mb-2">Generic: {medicine.genericName}</p>
                  )}
                  <p className="text-lg text-blue-600 font-semibold mb-4">By {medicine.brand}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < Math.floor(medicine.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="ml-2 text-lg font-medium">{medicine.rating}</span>
                    <span className="ml-1 text-gray-600">({medicine.reviews} reviews)</span>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-3xl font-bold text-gray-900">
                        Rs. {medicine.discountedPrice || medicine.price}
                      </span>
                      {medicine.discountedPrice && (
                        <>
                          <span className="text-xl text-gray-500 line-through">
                            Rs. {medicine.price}
                          </span>
                          <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
                            {medicine.discount}% OFF
                          </span>
                        </>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">Per {medicine.packSize}</p>
                  </div>

                  {/* Prescription Warning */}
                  {medicine.prescriptionRequired && (
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                      <div className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-orange-800">Prescription Required</h3>
                          <p className="text-sm text-orange-700 mt-1">
                            This is a prescription medicine. Please upload a valid prescription to order.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Stock Status */}
                  <div className="mb-6">
                    {medicine.inStock ? (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span className="font-medium">In Stock ({medicine.stockQuantity} available)</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-red-600">
                        <AlertTriangle className="h-5 w-5 mr-2" />
                        <span className="font-medium">Out of Stock</span>
                      </div>
                    )}
                  </div>

                  {/* Key Information */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Pack Size:</span>
                      <span className="ml-2 font-medium">{medicine.packSize}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Manufacturer:</span>
                      <span className="ml-2 font-medium">{medicine.manufacturer}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Composition:</span>
                      <span className="ml-2 font-medium">{medicine.composition}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Dosage:</span>
                      <span className="ml-2 font-medium">{medicine.dosage}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-md">
              {/* Tab Headers */}
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {[
                    { id: 'description', label: 'Description' },
                    { id: 'uses', label: 'Uses & Benefits' },
                    { id: 'directions', label: 'Directions' },
                    { id: 'sideeffects', label: 'Side Effects' },
                    { id: 'reviews', label: 'Reviews' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${
                        selectedTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {selectedTab === 'description' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">About {medicine.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{medicine.description}</p>
                  </div>
                )}

                {selectedTab === 'uses' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Uses & Benefits</h3>
                    <ul className="space-y-2">
                      {medicine.uses.map((use, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-gray-600">{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedTab === 'directions' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">How to Use</h3>
                    <p className="text-gray-600 mb-4">{medicine.directions}</p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <Info className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-blue-800">Storage Instructions</h4>
                          <p className="text-blue-700 text-sm mt-1">{medicine.storage}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedTab === 'sideeffects' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Possible Side Effects</h3>
                    <ul className="space-y-2">
                      {medicine.sideEffects.map((effect, index) => (
                        <li key={index} className="flex items-center">
                          <AlertTriangle className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="text-gray-600">{effect}</span>
                        </li>
                      ))}
                    </ul>
                    {medicine.warnings.length > 0 && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-red-800 mb-2">Important Warnings</h4>
                        <ul className="space-y-1">
                          {medicine.warnings.map((warning, index) => (
                            <li key={index} className="text-red-700 text-sm">• {warning}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {selectedTab === 'reviews' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
                    <div className="space-y-4">
                      {reviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <User className="h-5 w-5 text-gray-400 mr-2" />
                              <span className="font-medium">{review.userName}</span>
                              {review.verified && (
                                <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                              )}
                            </div>
                            <div className="flex items-center">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600 ml-2">{review.date}</span>
                            </div>
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Purchase */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Order Now</h2>
              
              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="p-2 hover:bg-gray-50 disabled:text-gray-400"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 text-lg font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= medicine.stockQuantity}
                    className="p-2 hover:bg-gray-50 disabled:text-gray-400"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Maximum {medicine.stockQuantity} units available
                </p>
              </div>

              {/* Price Summary */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">Rs. {totalPrice}</span>
                </div>
                {savingsAmount > 0 && (
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-green-600">You Save:</span>
                    <span className="font-medium text-green-600">Rs. {savingsAmount}</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-lg font-bold border-t border-gray-300 pt-2">
                  <span>Total:</span>
                  <span>Rs. {totalPrice}</span>
                </div>
              </div>

              {/* Add to Cart Button */}
              {medicine.inStock ? (
                <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 mb-4 flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
              ) : (
                <button
                  disabled
                  className="w-full bg-gray-300 text-gray-500 py-3 rounded-md font-medium cursor-not-allowed mb-4"
                >
                  Out of Stock
                </button>
              )}

              {/* Delivery Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-green-600">
                  <Truck className="h-4 w-4 mr-2" />
                  <span>Free delivery on orders over Rs. 500</span>
                </div>
                <div className="flex items-center text-blue-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>2-hour delivery available</span>
                </div>
                <div className="flex items-center text-purple-600">
                  <Shield className="h-4 w-4 mr-2" />
                  <span>100% genuine medicines</span>
                </div>
              </div>

              {/* Prescription Upload */}
              {medicine.prescriptionRequired && (
                <div className="mt-6 p-4 border-2 border-dashed border-orange-300 rounded-lg">
                  <div className="text-center">
                    <Package className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                    <p className="text-sm text-orange-700 font-medium">Upload Prescription</p>
                    <p className="text-xs text-orange-600 mt-1">Required for this medicine</p>
                    <button className="mt-2 bg-orange-100 text-orange-700 px-3 py-1 rounded text-xs hover:bg-orange-200">
                      Choose File
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Similar Medicines */}
            {similarMedicines.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h3 className="text-lg font-semibold mb-4">Similar Medicines</h3>
                <div className="space-y-4">
                  {similarMedicines.map((med) => (
                    <Link
                      key={med.id}
                      href={`/medicines/${med.id}`}
                      className="block p-3 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center space-x-3">
                        <Image
                          src={med.image}
                          alt={med.name}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{med.name}</h4>
                          <p className="text-xs text-gray-600">{med.brand}</p>
                          <p className="text-sm font-semibold text-blue-600">
                            Rs. {med.discountedPrice || med.price}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}