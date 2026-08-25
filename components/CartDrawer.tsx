// components/CartDrawer.tsx
'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenMobileMenu?: () => void; // optional for mobile menu toggle
}

export default function CartDrawer({
  isOpen,
  onClose,
  onOpenMobileMenu,
}: CartDrawerProps) {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } =
    useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-full sm:w-[420px] lg:w-[480px] flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-serif font-medium text-black">
            Your Cart ({totalItems})
          </h2>
          <div className="flex items-center gap-3">
            {/* Mobile menu button (only visible on mobile) */}
            {onOpenMobileMenu && (
              <button
                onClick={onOpenMobileMenu}
                className="sm:hidden text-black/60 hover:text-black transition"
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
            )}
            <button
              onClick={onClose}
              className="text-black/60 hover:text-black transition"
              aria-label="Close cart"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-gray-500 text-sm">Your cart is empty.</p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 text-sm font-medium bg-black text-white rounded-md hover:bg-gray-800 transition"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center border-b border-gray-100 pb-4"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-md flex-shrink-0 overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                      No img
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-black truncate">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500">{item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-7 h-7 rounded-full border border-gray-300 hover:border-black flex items-center justify-center text-black/60 hover:text-black transition"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm font-medium text-black">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-7 h-7 rounded-full border border-gray-300 hover:border-black flex items-center justify-center text-black/60 hover:text-black transition"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-2 text-gray-400 hover:text-red-600 transition"
                    aria-label="Remove item"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with total and checkout */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
            <div className="flex justify-between text-base font-medium text-black mb-2">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <Link
  href="/checkout"
  onClick={onClose}
  className="group relative w-full py-3.5 bg-black text-white text-sm font-medium rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2 no-underline"
>
  <span>Proceed to Checkout</span>
  <svg
    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
</Link>
            <button
              onClick={onClose}
              className="w-full mt-2 py-2 text-xs text-gray-500 hover:text-black transition"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}