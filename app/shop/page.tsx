// app/shop/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { allProducts, getCategories } from '@/data/products';

function generateSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function getProductPath(product: { id: number; name: string }): string {
  const slug = generateSlug(product.name);
  return `/products/${slug}-${product.id}`;
}

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { addItem } = useCart();

  const categories = getCategories();
  const filteredProducts = selectedCategory
    ? allProducts.filter((p) => p.category === selectedCategory)
    : allProducts;

  const productCount = filteredProducts.length;

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-black">
            Shop All
          </h1>
          <p className="mt-2 text-gray-500 text-sm">
            {productCount} product{productCount !== 1 ? 's' : ''} available
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition ${
              selectedCategory === null
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-gray-300 hover:border-black'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-sm font-medium capitalize rounded-full border transition ${
                selectedCategory === cat
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-300 hover:border-black'
              }`}
            >
              {cat.replace('-', ' ')}
            </button>
          ))}
        </div>

        {productCount === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500">No products in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => {
              const isOutOfStock = product.inStock === false;
              return (
                <div key={product.id} className="group">
                  <Link href={getProductPath(product)}>
                    <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, 25vw"
                        unoptimized={true}
                      />
                      {isOutOfStock && (
                        <div className="absolute top-2 left-2 z-10">
                          <span className="inline-block px-2 py-0.5 text-[10px] font-medium text-red-700 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-red-200">
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
                      )}
                    </div>
                  </Link>
                  <div className="mt-2">
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{product.name}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{product.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}