// app/page.tsx
import Hero from '@/components/Hero';
import NewArrivals from '@/components/NewArrivals';
import CategoryTabs from '@/components/CategoryTabs';
import { allProducts } from '@/data/products';

// Group products by category for the sections
const tshirtsPantsJackets = allProducts.filter(p =>
  ['t-shirts', 'pants', 'jackets'].includes(p.category)
);
const shortsBags = allProducts.filter(p =>
  ['shorts', 'bags'].includes(p.category)
);
const vestsShirts = allProducts.filter(p =>
  ['vests', 'shirts'].includes(p.category)
);

export default function Home() {
  return (
    <>
      <Hero />
      <NewArrivals />
      <CategoryTabs
        categories={['t-shirts', 'pants', 'jackets']}
        products={tshirtsPantsJackets}
        viewAllBasePath="/shop"
      />
      <CategoryTabs
        categories={['shorts', 'bags']}
        products={shortsBags}
        viewAllBasePath="/shop"
      />
      <CategoryTabs
        categories={['vests', 'shirts']}
        products={vestsShirts}
        viewAllBasePath="/shop"
      />
    </>
  );
}