// components/NewArrivals.tsx
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { getNewArrivals } from '@/data/products';

function generateSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function getProductPath(product: { id: number; name: string }): string {
  const slug = generateSlug(product.name);
  return `/products/${slug}-${product.id}`;
}

export default function NewArrivals() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();
  const products = getNewArrivals();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 260;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (products.length === 0) return null;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-base font-serif font-normal relative inline-block">
          New Arrivals
          <span className="absolute left-0 -bottom-0.5 w-full h-px bg-black" />
        </h2>

        <div className="flex items-center gap-3">
          <button onClick={() => scroll('left')} aria-label="Scroll left" className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={() => scroll('right')} aria-label="Scroll right" className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <Link href="/shop" className="ml-2 px-5 py-2 text-sm font-medium border border-black text-black rounded hover:bg-black hover:text-white transition-colors">
            View All
          </Link>
        </div>
      </div>

      <div ref={scrollContainerRef} className="flex overflow-x-auto gap-6 scroll-smooth snap-x snap-mandatory no-scrollbar">
        {products.map((product) => (
          <Link key={product.id} href={getProductPath(product)} className="min-w-[260px] sm:min-w-[280px] snap-start group flex-shrink-0 no-underline">
            <div className="relative w-full h-80 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 260px, 280px"
                unoptimized={true}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                  });
                }}
                className="absolute bottom-2 right-2 z-10 bg-black/80 text-white p-1.5 rounded-full hover:bg-black transition"
                aria-label="Add to cart"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
            <div className="mt-3">
              <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}