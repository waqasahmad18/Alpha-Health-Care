'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Package,
  Plus,
  Eye,
  ShoppingCart
} from 'lucide-react';
import GlobalNavbar from '@/components/GlobalNavbar';

export default function DemoOrdersPage() {
  const [orders, setOrders] = useState([
    {
      id: 'ORD-1',
      customerName: 'Ahmed Khan',
      items: [
        { name: 'Paracetamol 500mg', brand: 'GSK', quantity: 2, price: 150 },
        { name: 'Vitamin C 1000mg', brand: 'Health Plus', quantity: 1, price: 300 }
      ],
      total: 600,
      status: 'confirmed'
    },
    {
      id: 'ORD-2',
      customerName: 'Fatima Ali',
      items: [
        { name: 'Omeprazole 20mg', brand: 'Getz Pharma', quantity: 1, price: 450 },
        { name: 'Metformin 500mg', brand: 'Searle', quantity: 2, price: 200 }
      ],
      total: 850,
      status: 'processing'
    },
    {
      id: 'ORD-3',
      customerName: 'Hassan Raza',
      items: [
        { name: 'Amlodipine 5mg', brand: 'Highnoon', quantity: 1, price: 180 },
        { name: 'Atorvastatin 20mg', brand: 'Getz Pharma', quantity: 1, price: 320 },
        { name: 'Aspirin 75mg', brand: 'Bayer', quantity: 1, price: 120 }
      ],
      total: 620,
      status: 'delivered'
    }
  ]);

  const createNewOrder = () => {
    const newOrder = {
      id: `ORD-${orders.length + 1}`,
      customerName: `Customer ${orders.length + 1}`,
      items: [
        { name: 'Sample Medicine', brand: 'Generic Brand', quantity: 1, price: 100 }
      ],
      total: 100,
      status: 'pending'
    };
    setOrders([...orders, newOrder]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <GlobalNavbar showBackButton={true} backHref="/" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Demo Orders</h1>
          <p className="text-gray-600">
            This page demonstrates how each order will have its own unique data instead of static information.
          </p>
        </div>

        {/* Create New Order Button */}
        <div className="mb-8">
          <button
            onClick={createNewOrder}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-5 w-5 mr-2" />
            Create New Demo Order
          </button>
        </div>

        {/* Orders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  order.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                  order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                  order.status === 'delivered' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {order.id}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Customer: {order.customerName}
              </p>

              {/* Order Items */}
              <div className="space-y-2 mb-4">
                <h4 className="text-sm font-medium text-gray-900">Items:</h4>
                {order.items.map((item, index) => (
                  <div key={index} className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                    {item.name} ({item.brand}) - Qty: {item.quantity} - Rs. {item.price * item.quantity}
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium text-gray-900">Total:</span>
                  <span className="text-lg font-bold text-blue-600">Rs. {order.total}</span>
                </div>

                <div className="flex space-x-2">
                  <Link
                    href={`/order-confirmation/${order.id}`}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Order
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">How It Works Now:</h2>
          <div className="space-y-3 text-blue-800">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <p><strong>Each order has unique data:</strong> Customer name, items, quantities, and prices are different for each order</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <p><strong>Dynamic order details:</strong> When you click "View Order", it fetches the specific order data from the API</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <p><strong>Real-time updates:</strong> Order status, delivery details, and payment methods are specific to each order</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <p><strong>No more static data:</strong> Every order shows its actual items, customer details, and pricing</p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Back to Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
