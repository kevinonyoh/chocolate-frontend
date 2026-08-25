// components/Footer.tsx

'use client'; 

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand & Description */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-wider inline-block">
                            CHOCOLATE
                        </Link>
                        <p className="text-gray-400 text-sm mt-4 max-w-xs leading-relaxed">
                            Defy Ordinary. A new standard of style for the modern individual.
                        </p>
                    </div>

                    {/* Shop Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
                            Shop
                        </h4>
                        <ul className="space-y-2.5">
                            <li>
                                <Link href="/shop" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop?category=t-shirts" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    T-Shirts
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop?category=jackets" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Jackets
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop?category=pants" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Pants
                                </Link>
                            </li>
                            <li>
                                <Link href="/new-arrivals" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    New Arrivals
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
                            Support
                        </h4>
                        <ul className="space-y-2.5">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/returns" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Returns
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Social */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
                            Stay in touch
                        </h4>
                        <p className="text-gray-400 text-sm mb-3">
                            Subscribe for early access to drops and exclusive offers.
                        </p>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const input = e.currentTarget.querySelector('input');
                                if (input) {
                                    alert(`Thanks for subscribing with: ${input.value}`);
                                    input.value = '';
                                }
                            }}
                            className="flex flex-col sm:flex-row gap-2"
                        >
                            <input
                                type="email"
                                placeholder="Your email"
                                required
                                className="flex-1 px-4 py-2 text-sm rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 text-sm font-medium bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-5">
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                aria-label="Twitter"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                aria-label="YouTube"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} CHOCOLATE. All rights reserved.</p>
                    <div className="flex gap-5">
                        <Link href="/privacy" className="hover:text-gray-300 transition-colors">
                            Privacy
                        </Link>
                        <Link href="/terms" className="hover:text-gray-300 transition-colors">
                            Terms
                        </Link>
                        <Link href="/cookies" className="hover:text-gray-300 transition-colors">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}