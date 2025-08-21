import Link from 'next/link';
import { ArrowLeft, Package } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Medicine Not Found</h1>
          <p className="text-gray-600 mb-6">
            The medicine you're looking for doesn't exist or may have been discontinued.
          </p>
          <div className="space-y-3">
            <Link 
              href="/medicines" 
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 inline-block"
            >
              Browse All Medicines
            </Link>
            <Link 
              href="/" 
              className="w-full flex items-center justify-center text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}