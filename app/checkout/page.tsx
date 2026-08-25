// app/checkout/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';

// Helper: format Naira with commas
function formatNaira(amount: number): string {
  return '₦' + Math.round(amount).toLocaleString('en-US');
}

// Helper: parse Naira price from string (remove ₦ and commas)
function parseNaira(priceStr: string): number {
  return parseFloat(priceStr.replace(/[^0-9.]/g, ''));
}

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();
  const [shippingMethod, setShippingMethod] = useState<'ship' | 'pickup'>('ship');
  const [paymentMethod, setPaymentMethod] = useState<'paystack' | 'cod'>('paystack');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Redirect if cart is empty
  useEffect(() => {
    if (items.length === 0 && !orderPlaced) {
      router.push('/shop');
    }
  }, [items, router, orderPlaced]);

  // Shipping cost in Naira
  const shippingCost = shippingMethod === 'ship' ? 7500 : 0;
  const finalTotal = totalPrice + shippingCost;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      clearCart();
      setOrderPlaced(true);
      setIsSubmitting(false);
    }, 1500);
  };

  if (orderPlaced) {
    return (
      <section className="bg-white min-h-[60vh] flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-black text-white flex items-center justify-center text-3xl">
            ✓
          </div>
          <h1 className="text-3xl font-serif font-bold text-black">Order Placed!</h1>
          <p className="mt-2 text-gray-600 text-sm">
            {paymentMethod === 'paystack'
              ? 'Your payment was successful. We\'ll send you a confirmation email shortly.'
              : 'You\'ll pay on delivery. We\'ll send you a confirmation email shortly.'}
          </p>
          <Link
            href="/"
            className="inline-block mt-6 px-6 py-2.5 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-black mb-8">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Shipping Method Toggle */}
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-black/60 mb-4">
                  Delivery Method
                </h2>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setShippingMethod('ship')}
                    className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-md border transition ${
                      shippingMethod === 'ship'
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-gray-300 hover:border-black'
                    }`}
                  >
                    🚚 Ship
                  </button>
                  <button
                    type="button"
                    onClick={() => setShippingMethod('pickup')}
                    className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-md border transition ${
                      shippingMethod === 'pickup'
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-gray-300 hover:border-black'
                    }`}
                  >
                    📦 Pick up
                  </button>
                </div>
                {shippingMethod === 'pickup' && (
                  <p className="mt-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-md border border-gray-200">
                    Pickup available at our store: <br />
                    <strong>123 Fashion Avenue, Udu, Delta State, Nigeria</strong> <br />
                    <span className="text-xs text-gray-400">Mon–Fri, 10am – 7pm</span>
                  </p>
                )}
              </div>

              {/* Personal Information */}
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-black/60 mb-4">
                  Personal Information
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-medium text-black/70">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1 w-full px-3 py-2 border border-black/20 rounded-md focus:ring-2 focus:ring-black/30 focus:border-black/30 outline-none text-black text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-medium text-black/70">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mt-1 w-full px-3 py-2 border border-black/20 rounded-md focus:ring-2 focus:ring-black/30 focus:border-black/30 outline-none text-black text-sm"
                    />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-black/70">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 w-full px-3 py-2 border border-black/20 rounded-md focus:ring-2 focus:ring-black/30 focus:border-black/30 outline-none text-black text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-black/70">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 w-full px-3 py-2 border border-black/20 rounded-md focus:ring-2 focus:ring-black/30 focus:border-black/30 outline-none text-black text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address – only if "Ship" is selected */}
              {shippingMethod === 'ship' && (
                <div className="pt-4 border-t border-black/10">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-black/60 mb-4">
                    Shipping Address
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="address" className="block text-xs font-medium text-black/70">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="mt-1 w-full px-3 py-2 border border-black/20 rounded-md focus:ring-2 focus:ring-black/30 focus:border-black/30 outline-none text-black text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-xs font-medium text-black/70">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          className="mt-1 w-full px-3 py-2 border border-black/20 rounded-md focus:ring-2 focus:ring-black/30 focus:border-black/30 outline-none text-black text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-xs font-medium text-black/70">
                          State/Province *
                        </label>
                        <input
                          type="text"
                          name="state"
                          id="state"
                          required
                          value={formData.state}
                          onChange={handleChange}
                          className="mt-1 w-full px-3 py-2 border border-black/20 rounded-md focus:ring-2 focus:ring-black/30 focus:border-black/30 outline-none text-black text-sm"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="zip" className="block text-xs font-medium text-black/70">
                          ZIP / Postal Code *
                        </label>
                        <input
                          type="text"
                          name="zip"
                          id="zip"
                          required
                          value={formData.zip}
                          onChange={handleChange}
                          className="mt-1 w-full px-3 py-2 border border-black/20 rounded-md focus:ring-2 focus:ring-black/30 focus:border-black/30 outline-none text-black text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-xs font-medium text-black/70">
                          Country *
                        </label>
                        <input
                          type="text"
                          name="country"
                          id="country"
                          required
                          value={formData.country}
                          onChange={handleChange}
                          className="mt-1 w-full px-3 py-2 border border-black/20 rounded-md focus:ring-2 focus:ring-black/30 focus:border-black/30 outline-none text-black text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Method */}
              <div className="pt-4 border-t border-black/10">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-black/60 mb-4">
                  Payment Method
                </h2>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paystack')}
                    className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-md border transition ${
                      paymentMethod === 'paystack'
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-gray-300 hover:border-black'
                    }`}
                  >
                    💳 Paystack
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-md border transition ${
                      paymentMethod === 'cod'
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-gray-300 hover:border-black'
                    }`}
                  >
                    💵 Cash on Delivery
                  </button>
                </div>
                {paymentMethod === 'paystack' && (
                  <p className="mt-2 text-xs text-gray-500">
                    You'll be redirected to Paystack to complete your payment.
                  </p>
                )}
                {paymentMethod === 'cod' && (
                  <p className="mt-2 text-xs text-gray-500">
                    Pay when your order arrives. No extra fees.
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition disabled:opacity-50"
                >
                  {isSubmitting
                    ? 'Processing…'
                    : paymentMethod === 'paystack'
                    ? `Pay with Paystack — ${formatNaira(finalTotal)}`
                    : `Place Order — ${formatNaira(finalTotal)}`}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-black/60 mb-4">
                Order Summary
              </h2>
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {items.map((item) => {
                  const priceNum = parseNaira(item.price);
                  const itemTotal = priceNum * item.quantity;
                  return (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-700">
                        {item.name} × {item.quantity}
                      </span>
                      <span className="text-black font-medium">
                        {formatNaira(itemTotal)}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="border-t border-black/10 mt-4 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatNaira(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? 'Free' : formatNaira(shippingCost)}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-black pt-2 border-t border-black/10">
                  <span>Total</span>
                  <span>{formatNaira(finalTotal)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}