// components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Image
        src="/hero_pic.avif"
        alt="Hero background"
        fill
        className="absolute inset-0 object-cover"
        priority
      />

      <div className="relative z-10 flex items-center h-full pl-4 sm:pl-6 lg:pl-8">
        <div className="text-white max-w-xl">
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3">
            Defy Ordinary
          </h1>
          <p className="font-sans text-sm sm:text-base text-gray-200 mb-6">
            A new standard of style.
          </p>
          <button className="bg-white text-black px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}