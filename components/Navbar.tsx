// components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import CartDrawer from './CartDrawer';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      <nav className="bg-black text-white border-b border-white/10 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="group relative text-2xl font-serif font-bold tracking-widest uppercase"
              >
                CHOCOLATE
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 group-hover:w-full transition-all duration-300" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-10">
              <Link
                href="/"
                className="relative text-sm font-light tracking-wide uppercase hover:text-gray-300 transition-colors group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/60 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link
                href="/shop"
                className="relative text-sm font-light tracking-wide uppercase hover:text-gray-300 transition-colors group"
              >
                Shop
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/60 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link
                href="/about"
                className="relative text-sm font-light tracking-wide uppercase hover:text-gray-300 transition-colors group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/60 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link
                href="/contact"
                className="relative text-sm font-light tracking-wide uppercase hover:text-gray-300 transition-colors group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/60 group-hover:w-full transition-all duration-300" />
              </Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <button
                type="button"
                aria-label="Search"
                className="text-white/70 hover:text-white transition-colors p-1"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative text-white/70 hover:text-white transition-colors p-1"
                aria-label="Open cart"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="sm:hidden text-white/70 hover:text-white transition-colors p-1"
                aria-label="Open menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onOpenMobileMenu={() => {
          setIsCartOpen(false);
          setIsMenuOpen(true);
        }}
      />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}