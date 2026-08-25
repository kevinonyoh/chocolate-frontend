// components/CategoryTabs.tsx
'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image?: string | null;
  inStock?: boolean;
}

interface CategoryTabsProps {
  categories: string[];
  products: Product[];
  title?: string;
  viewAllBasePath?: string;
}

function generateSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function getProductPath(product: Product): string {
  const slug = generateSlug(product.name);
  return `/products/${slug}-${product.id}`;
}

export default function CategoryTabs({
  categories,
  products,
  title,
  viewAllBasePath = '/shop',
}: CategoryTabsProps) {
  const fallbackCategory = categories.length > 0 ? categories[0] : 'all';
  const [activeTab, setActiveTab] = useState<string>(fallbackCategory);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();

  const filteredProducts = products.filter(
    (product) => product.category === activeTab
  );

  const getCardWidth = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 640) return 184;
    return 284;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = getCardWidth();
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {title && <h2 className="text-base font-serif font-normal mb-4">{title}</h2>}

      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8">
        <div className="flex gap-4 sm:gap-8 overflow-x-auto no-scrollbar pb-2 sm:pb-0 relative z-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              type="button"
              className={`whitespace-nowrap pb-1 text-sm font-medium capitalize transition-colors ${
                activeTab === cat
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-400 hover:text-gray-600 border-b-2 border-transparent'
              }`}
            >
              {cat.replace('-', ' ')}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-0 sm:ml-auto">
          <button onClick={() => scroll('left')} aria-label="Scroll left" className="p-1.5 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={() => scroll('right')} aria-label="Scroll right" className="p-1.5 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <Link href={`${viewAllBasePath}?category=${activeTab}`} className="ml-1 sm:ml-2 px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium border border-black text-black rounded hover:bg-black hover:text-white transition-colors">
            View All
          </Link>
        </div>
      </div>

      <div ref={scrollContainerRef} className="flex overflow-x-auto gap-4 sm:gap-6 scroll-smooth snap-x snap-mandatory no-scrollbar">
        {filteredProducts.map((product) => {
          const isOutOfStock = product.inStock === false;
          return (
            <Link key={product.id} href={getProductPath(product)} className="min-w-[160px] w-[160px] sm:min-w-[260px] sm:w-[260px] snap-start group flex-shrink-0 no-underline">
              <div className="relative w-full h-48 sm:h-80 overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src={product.image || ''}
                  alt={product.name}
                  fill
                  className={`object-cover transition-all duration-300 ${isOutOfStock ? 'grayscale opacity-50' : 'group-hover:scale-105'}`}
                  sizes="(max-width: 640px) 160px, 260px"
                  unoptimized={true}
                />
                {isOutOfStock && (
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-20">
                    <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium text-red-700 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-red-200">
                      Sold Out
                    </span>
                  </div>
                )}
                {!isOutOfStock && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image || null,
                      });
                    }}
                    className="absolute bottom-2 right-2 z-10 bg-black/80 text-white p-1.5 rounded-full hover:bg-black transition"
                    aria-label="Add to cart"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                )}
              </div>
              <div className="mt-2 sm:mt-3">
                <h3 className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-1">{product.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">{product.price}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}