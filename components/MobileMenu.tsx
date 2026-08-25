// components/MobileMenu.tsx
'use client';

import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Menu panel – slides from left */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <span className="text-lg font-serif font-medium text-black">Menu</span>
          <button onClick={onClose} aria-label="Close menu">
            <svg
              className="w-6 h-6 text-black/60 hover:text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex-1 p-6 space-y-4">
          <Link
            href="/"
            onClick={onClose}
            className="block text-base font-medium text-black hover:text-gray-600 transition"
          >
            Home
          </Link>
          <Link
            href="/shop"
            onClick={onClose}
            className="block text-base font-medium text-black hover:text-gray-600 transition"
          >
            Shop
          </Link>
          <Link
            href="/about"
            onClick={onClose}
            className="block text-base font-medium text-black hover:text-gray-600 transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="block text-base font-medium text-black hover:text-gray-600 transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}