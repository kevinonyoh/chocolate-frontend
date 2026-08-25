// app/products/[slug]/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { allProducts } from '@/data/products';

// List of your 5 local images (must be in public folder)
const localImages = [
  '/new_arrivals1.avif',
  '/new_arrivals2.avif',
  '/new_arrivals3.avif',
  '/new_arrivals4.avif',
  '/new_arrivals5.avif',
];

// For a given product, we show all 5 local images as the gallery
const getProductGallery = (product: { id: number; image: string }) => {
  // You can optionally put the product's own image first, or just use the local set.
  // Here we use all 5 local images in order.
  return localImages.map((url, index) => ({
    id: index,
    url,
  }));
};

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { addItem } = useCart();

  const idMatch = slug.match(/-(\d+)$/);
  const productId = idMatch ? parseInt(idMatch[1], 10) : null;
  const product = productId ? allProducts.find((p) => p.id === productId) : null;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isCarouselActive, setIsCarouselActive] = useState(true);
  const carouselRef = useRef<NodeJS.Timeout | null>(null);

  // Build gallery images (all local images)
  const images = product ? getProductGallery(product) : [];

  // Auto‑rotate every 3 seconds
  useEffect(() => {
    if (images.length <= 1) return;
    if (isCarouselActive) {
      carouselRef.current = setInterval(() => {
        setSelectedImageIndex((prev) => (prev + 1) % images.length);
      }, 3000); // 3 seconds
    } else {
      if (carouselRef.current) clearInterval(carouselRef.current);
    }
    return () => {
      if (carouselRef.current) clearInterval(carouselRef.current);
    };
  }, [isCarouselActive, images.length]);

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsCarouselActive(false); // stop auto‑rotate on user interaction
  };

  const handleAddToCart = () => {
    if (!product) return;
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image, // use the product's own image for cart
      });
    }
    setQuantity(1);
  };

  if (!product) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-black">Product not found</h1>
          <Link href="/shop" className="mt-4 inline-block text-sm underline">
            Back to Shop
          </Link>
        </div>
      </section>
    );
  }

  const isOutOfStock = product.inStock === false;
  const mainImageUrl = images[selectedImageIndex]?.url || '';

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex flex-row sm:flex-col gap-2 sm:gap-3 order-2 sm:order-1 overflow-x-auto sm:overflow-x-visible">
              {images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => handleThumbnailClick(idx)}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden border-2 transition ${
                    selectedImageIndex === idx
                      ? 'border-black'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <Image
                    src={img.url}
                    alt={`${product.name} view ${idx + 1}`}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 order-1 sm:order-2 bg-gray-100 rounded-lg overflow-hidden relative">
              <div className="aspect-square sm:aspect-[4/5] w-full">
                <Image
                  src={mainImageUrl}
                  alt={product.name}
                  width={600}
                  height={700}
                  className="w-full h-full object-cover"
                />
                {isOutOfStock && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-red-700 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-red-200">
                      Sold Out
                    </span>
                  </div>
                )}
                {/* Carousel dots */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleThumbnailClick(idx)}
                        className={`w-2 h-2 rounded-full transition ${
                          selectedImageIndex === idx ? 'bg-black' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Info (unchanged) */}
          <div className="flex flex-col">
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/shop" className="hover:text-black">Shop</Link>
              <span className="mx-2">/</span>
              <span className="text-black">{product.name}</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-black">
              {product.name}
            </h1>
            <p className="text-xl text-gray-700 mt-2">{product.price}</p>

            <div className="mt-4 border-t border-gray-200 pt-4">
              <p className="text-sm text-gray-600">
                {isOutOfStock
                  ? 'This item is currently out of stock.'
                  : 'A timeless piece crafted with premium materials. Free shipping on orders over ₦200,000.'}
              </p>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-sm font-medium text-black">Availability:</span>
                <span className={`text-sm ${isOutOfStock ? 'text-red-600' : 'text-green-600'}`}>
                  {isOutOfStock ? 'Out of Stock' : 'In Stock'}
                </span>
              </div>
            </div>

            {!isOutOfStock && (
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:text-black hover:bg-gray-100 transition"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="w-12 text-center text-sm font-medium text-black">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:text-black hover:bg-gray-100 transition"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 sm:flex-none px-8 py-3 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
              </div>
            )}

            <Link
              href="/shop"
              className="mt-6 text-sm text-gray-500 hover:text-black underline underline-offset-2 transition"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}