// app/contact/page.tsx
import Link from 'next/link';

export default function ContactPage() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-black">
            Let's Connect
          </h1>
          <div className="w-12 h-0.5 bg-black/30 mx-auto mt-4" />
          <p className="mt-4 text-gray-600 text-base">
            Reach out through any of the channels below – we're here to help.
          </p>
        </div>

        {/* Contact methods grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email */}
          <div className="bg-white border border-black/10 rounded-lg p-6 hover:border-black/30 transition">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/5 mb-4 mx-auto">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black/60 text-center">
              Email
            </h3>
            <a
              href="mailto:hello@chocolate.com"
              className="block mt-2 text-center text-black font-medium hover:underline"
            >
              hello@chocolate.com
            </a>
            <p className="text-xs text-gray-400 text-center mt-1">We reply within 24h</p>
          </div>

          {/* Phone */}
          <div className="bg-white border border-black/10 rounded-lg p-6 hover:border-black/30 transition">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/5 mb-4 mx-auto">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black/60 text-center">
              Phone
            </h3>
            <a
              href="tel:+1234567890"
              className="block mt-2 text-center text-black font-medium hover:underline"
            >
              +1 (234) 567-890
            </a>
            <p className="text-xs text-gray-400 text-center mt-1">Mon–Fri, 10am – 7pm</p>
          </div>

          {/* WhatsApp */}
          <div className="bg-white border border-black/10 rounded-lg p-6 hover:border-black/30 transition">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/5 mb-4 mx-auto">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.89.534 3.66 1.464 5.174L2 22l5.015-1.197A9.95 9.95 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.745 0-3.362-.574-4.663-1.538l-.334-.225-3.021.723.72-2.953-.232-.346A8.05 8.05 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black/60 text-center">
              WhatsApp
            </h3>
            <a
              href="https://wa.me/1234567890?text=Hi%20CHOCOLATE%20–%20I%20have%20a%20question!"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-center text-black font-medium hover:underline"
            >
              +1 (234) 567-890
            </a>
            <p className="text-xs text-gray-400 text-center mt-1">Chat with us instantly</p>
          </div>

          {/* Instagram */}
          <div className="bg-white border border-black/10 rounded-lg p-6 hover:border-black/30 transition">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/5 mb-4 mx-auto">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black/60 text-center">
              Instagram
            </h3>
            <a
              href="https://instagram.com/chocolate"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-center text-black font-medium hover:underline"
            >
              @chocolate
            </a>
            <p className="text-xs text-gray-400 text-center mt-1">Follow us for daily inspo</p>
          </div>

          {/* Visit Us */}
          <div className="bg-white border border-black/10 rounded-lg p-6 hover:border-black/30 transition sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/5 mb-4 mx-auto">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black/60 text-center">
              Visit Us
            </h3>
            <address className="not-italic mt-2 text-center text-black font-medium">
              123 Fashion Avenue<br />
              New York, NY 10001
            </address>
            <p className="text-xs text-gray-400 text-center mt-1">Mon–Fri, 10am – 7pm</p>
          </div>
        </div>

        {/* Optional bottom note */}
        <p className="text-center text-gray-400 text-sm mt-12">
          We look forward to hearing from you.
        </p>
      </div>
    </section>
  );
}