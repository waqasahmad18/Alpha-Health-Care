'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

interface MobileMenuProps {
  currentPage: string;
}

export default function MobileMenu({ currentPage }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-900 hover:text-blue-600 p-2"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg border-t z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/doctors"
              className={`${
                currentPage === '/doctors'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-900 hover:text-blue-600 hover:bg-gray-100'
              } block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              Find Doctors
            </Link>
            <Link
              href="/lab-tests"
              className={`${
                currentPage === '/lab-tests'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-900 hover:text-blue-600 hover:bg-gray-100'
              } block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              Lab Tests
            </Link>
            <Link
              href="/medicines"
              className={`${
                currentPage === '/medicines'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-900 hover:text-blue-600 hover:bg-gray-100'
              } block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              Medicines
            </Link>
            <Link
              href="/health-blog"
              className={`${
                currentPage === '/health-blog'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-900 hover:text-blue-600 hover:bg-gray-100'
              } block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              Health Blog
            </Link>
            <div className="pt-2 border-t border-gray-200">
              <Link
                href="/login"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 block text-center"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}