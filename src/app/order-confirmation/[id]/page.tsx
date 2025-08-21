'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  CheckCircle,
  Truck,
  MapPin,
  Phone,
  Mail,
  Home,
  Package,
  Star,
  CreditCard,
  Shield
} from 'lucide-react';
import GlobalNavbar from '@/components/GlobalNavbar';

interface OrderDetails {
  orderId: string;
  items: any[];
  deliveryDetails: {
    fullName: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    postalCode: string;
  };
  paymentMethod: string;
  subtotal: number;
  deliveryFee: number;
  totalAmount: number;
  status: string;
  orderDate: string;
}

export default function OrderConfirmationPage() {
  const params = useParams();
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [showSmoke, setShowSmoke] = useState(false);
  const [carPosition, setCarPosition] = useState(-100);

  useEffect(() => {
    // Fetch actual order details from API
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`/api/orders/${params.id}`);
        if (response.ok) {
          const orderData = await response.json();
          setOrderDetails({
            orderId: orderData._id,
            items: orderData.items || [],
            deliveryDetails: orderData.deliveryDetails || {},
            paymentMethod: orderData.paymentMethod || 'Cash on Delivery',
            subtotal: orderData.subtotal || 0,
            deliveryFee: orderData.deliveryFee || 0,
            totalAmount: orderData.totalAmount || 0,
            status: orderData.status || 'pending',
            orderDate: orderData.orderDate || new Date().toISOString()
          });
        } else {
          console.error('Failed to fetch order details');
          // Fallback to basic order info if API fails
          setOrderDetails({
            orderId: params.id as string,
            items: [],
            deliveryDetails: {
              fullName: 'Loading...',
              phone: '',
              email: '',
              address: '',
              city: '',
              postalCode: ''
            },
            paymentMethod: 'Loading...',
            subtotal: 0,
            deliveryFee: 0,
            totalAmount: 0,
            status: 'loading',
            orderDate: new Date().toISOString()
          });
        }
      } catch (error) {
        console.error('Error fetching order details:', error);
        // Fallback to basic order info if API fails
        setOrderDetails({
          orderId: params.id as string,
          items: [],
          deliveryDetails: {
            fullName: 'Error loading order',
            phone: '',
            email: '',
            address: '',
            city: '',
            postalCode: ''
          },
          paymentMethod: 'Error loading payment method',
          subtotal: 0,
          deliveryFee: 0,
          totalAmount: 0,
          status: 'error',
          orderDate: new Date().toISOString()
        });
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();

    // Start car animation
    setTimeout(() => {
      setCarPosition(100);
      setTimeout(() => {
        setShowSmoke(true);
      }, 1000);
    }, 500);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading your order...</p>
        </div>
      </div>
    );
  }

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Order not found</h2>
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <GlobalNavbar showBackButton={true} backHref="/" />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Success Animation */}
        <div className="text-center mb-12">
          {/* Car Animation */}
          <div className="relative h-32 mb-8 overflow-hidden">
            {/* Car */}
            <div 
              className="absolute top-16 transform transition-all duration-3000 ease-out"
              style={{ left: `${carPosition}%` }}
            >
              <div className="relative">
                {/* Car Body */}
                <div className="w-24 h-12 bg-blue-600 rounded-lg relative">
                  {/* Car Windows */}
                  <div className="absolute top-1 left-2 w-6 h-4 bg-blue-300 rounded-sm"></div>
                  <div className="absolute top-1 right-2 w-6 h-4 bg-blue-300 rounded-sm"></div>
                  {/* Car Wheels */}
                  <div className="absolute -bottom-2 left-2 w-4 h-4 bg-gray-800 rounded-full border-2 border-gray-600"></div>
                  <div className="absolute -bottom-2 right-2 w-4 h-4 bg-gray-800 rounded-full border-2 border-gray-600"></div>
                  {/* Car Lights */}
                  <div className="absolute top-1 left-0 w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="absolute top-1 right-0 w-2 h-2 bg-red-400 rounded-full"></div>
                </div>
                
                {/* Smoke Effect */}
                {showSmoke && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="animate-pulse">
                      <div className="text-2xl font-bold text-blue-600 opacity-80">
                        Thank you for choosing us!
                      </div>
                      <div className="text-sm text-blue-500 mt-1">
                        🚗 Your order is on its way! 🚗
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Success Message */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Order Confirmed! 🎉
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Your order has been successfully placed and is being processed.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="text-blue-800 text-center">
                <div className="font-semibold text-lg mb-2">Order #{orderDetails.orderId}</div>
                <div className="text-sm mb-2">We'll send you updates via SMS and email</div>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Status: {orderDetails.status.charAt(0).toUpperCase() + orderDetails.status.slice(1)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Package className="h-5 w-5 mr-2 text-blue-600" />
              Order Summary
            </h2>
            <div className="text-sm text-gray-500 mb-4">
              Ordered on: {new Date(orderDetails.orderDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
            
            <div className="space-y-3 mb-4">
              {orderDetails.items && orderDetails.items.length > 0 ? (
                orderDetails.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.brand}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Qty: {item.quantity}</div>
                      <div className="font-medium text-gray-900">
                        Rs. {(item.discountedPrice || item.price) * item.quantity}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Package className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                  <p>No items found in this order</p>
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">Rs. {orderDetails.subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-medium">
                  {orderDetails.deliveryFee === 0 ? 'Free' : `Rs. ${orderDetails.deliveryFee}`}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold border-t border-gray-200 pt-2">
                <span>Total</span>
                <span className="text-blue-600">Rs. {orderDetails.totalAmount}</span>
              </div>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Truck className="h-5 w-5 mr-2 text-blue-600" />
              Delivery Details
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold text-sm">
                    {orderDetails.deliveryDetails.fullName ? orderDetails.deliveryDetails.fullName.charAt(0) : '?'}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">
                    {orderDetails.deliveryDetails.fullName || 'Name not provided'}
                  </div>
                  <div className="text-sm text-gray-500">
                    {orderDetails.deliveryDetails.phone || 'Phone not provided'}
                  </div>
                  {orderDetails.deliveryDetails.email && (
                    <div className="text-sm text-gray-500">{orderDetails.deliveryDetails.email}</div>
                  )}
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-gray-900">
                    {orderDetails.deliveryDetails.address || 'Address not provided'}
                  </div>
                  <div className="text-sm text-gray-500">
                    {orderDetails.deliveryDetails.city || 'City not provided'}
                    {orderDetails.deliveryDetails.postalCode && `, ${orderDetails.deliveryDetails.postalCode}`}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <CreditCard className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="text-sm text-gray-900">Payment Method</div>
                  <div className="text-sm text-gray-500">
                    {orderDetails.paymentMethod || 'Payment method not specified'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What happens next?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Order Confirmed</h3>
              <p className="text-sm text-gray-600">We've received your order and are preparing it for delivery</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold text-lg">2</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Processing</h3>
              <p className="text-sm text-gray-600">Our team is carefully packaging your medicines</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold text-lg">3</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">On the Way</h3>
              <p className="text-sm text-gray-600">Your order will be delivered within 2-4 hours</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/medicines"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              <Package className="h-5 w-5 mr-2" />
              Order More Medicines
            </Link>
            
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-700 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors"
            >
              <Home className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="text-sm text-gray-500">
            Need help? Contact us at{' '}
            <a href="tel:+923001234567" className="text-blue-600 hover:text-blue-700">+92 300 1234567</a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span className="text-sm">100% Genuine</span>
            </div>
            <div className="flex items-center space-x-2">
              <Truck className="h-5 w-5" />
              <span className="text-sm">Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5" />
              <span className="text-sm">Trusted Service</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 