// components/ContactSection.tsx
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className="bg-white border-t border-b border-black/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left – Brand Statement */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-black leading-tight">
            Defy Ordinary.
            <br />
            <span className="text-gray-500 text-2xl sm:text-3xl font-light">Elevate your everyday.</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base max-w-md leading-relaxed">
            We believe style is a statement. Our pieces are crafted for those who dare to stand out — minimal, bold, and timeless.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="px-6 py-2.5 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition"
            >
              Explore Collection
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 border border-black text-black text-sm font-medium rounded-md hover:bg-black hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right – Contact Info & Social */}
        <div className="space-y-5 border-l-2 border-black/20 pl-6 md:pl-10">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black/60">
              Get in touch
            </h3>
            <p className="mt-1 text-lg font-medium text-black">
              <a href="mailto:hello@chocolate.com" className="hover:underline">
                hello@chocolate.com
              </a>
            </p>
            <p className="text-gray-500 text-sm mt-0.5">
              We reply within 24 hours.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black/60">
              Follow us
            </h3>
            <div className="flex gap-4 mt-2">
              <a
                href="#"
                className="text-black/60 hover:text-black transition"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-black/60 hover:text-black transition"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-black/60 hover:text-black transition"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="pt-2">
            <div className="w-12 h-0.5 bg-black/30" />
          </div>
        </div>
      </div>
    </section>
  );
}