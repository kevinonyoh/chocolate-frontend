// data/products.ts
export interface Product {
  id: number;
  name: string;
  price: string;      // in Naira, e.g. "₦73,500"
  category: string;
  image: string;      // local path starting with "/"
  inStock?: boolean;
  newArrival?: boolean;
  description?: string;
}

// The 5 available local images (in public folder)
const productImages = [
  '/new_arrivals1.avif',
  '/new_arrivals2.avif',
  '/new_arrivals3.avif',
  '/new_arrivals4.avif',
  '/new_arrivals5.avif',
];

// Helper to assign images cyclically based on product index
function assignImage(index: number): string {
  return productImages[index % productImages.length];
}

export const allProducts: Product[] = [
  // T-shirts, Pants, Jackets
  {
    id: 101,
    name: 'Premium Cotton Tee',
    price: '₦73,500',
    category: 't-shirts',
    image: assignImage(0),
    newArrival: true,
  },
  {
    id: 102,
    name: 'Graphic Print Tee',
    price: '₦88,500',
    category: 't-shirts',
    image: assignImage(1),
    inStock: false,
  },
  {
    id: 103,
    name: 'Oversized Tee',
    price: '₦82,500',
    category: 't-shirts',
    image: assignImage(2),
  },
  {
    id: 201,
    name: 'Slim Fit Chinos',
    price: '₦178,500',
    category: 'pants',
    image: assignImage(3),
    newArrival: true,
  },
  {
    id: 202,
    name: 'Relaxed Trousers',
    price: '₦208,500',
    category: 'pants',
    image: assignImage(4),
    inStock: false,
  },
  {
    id: 301,
    name: 'Denim Jacket',
    price: '₦283,500',
    category: 'jackets',
    image: assignImage(0), // cycles back
    newArrival: true,
  },
  {
    id: 302,
    name: 'Bomber Jacket',
    price: '₦328,500',
    category: 'jackets',
    image: assignImage(1),
  },

  // Shorts, Bags
  {
    id: 401,
    name: 'Cargo Shorts',
    price: '₦103,500',
    category: 'shorts',
    image: assignImage(2),
  },
  {
    id: 402,
    name: 'Linen Shorts',
    price: '₦118,500',
    category: 'shorts',
    image: assignImage(3),
    inStock: false,
  },
  {
    id: 501,
    name: 'Canvas Tote',
    price: '₦133,500',
    category: 'bags',
    image: assignImage(4),
    newArrival: true,
  },
  {
    id: 502,
    name: 'Leather Backpack',
    price: '₦298,500',
    category: 'bags',
    image: assignImage(0),
  },
  {
    id: 503,
    name: 'Crossbody Bag',
    price: '₦223,500',
    category: 'bags',
    image: assignImage(1),
    inStock: false,
  },

  // Vests, Shirts
  {
    id: 601,
    name: 'Denim Vest',
    price: '₦193,500',
    category: 'vests',
    image: assignImage(2),
  },
  {
    id: 602,
    name: 'Puffer Vest',
    price: '₦238,500',
    category: 'vests',
    image: assignImage(3),
    inStock: false,
  },
  {
    id: 701,
    name: 'Oxford Shirt',
    price: '₦148,500',
    category: 'shirts',
    image: assignImage(4),
    newArrival: true,
  },
  {
    id: 702,
    name: 'Linen Shirt',
    price: '₦163,500',
    category: 'shirts',
    image: assignImage(0),
  },
  {
    id: 703,
    name: 'Flannel Shirt',
    price: '₦178,500',
    category: 'shirts',
    image: assignImage(1),
  },
];

// Helper to get unique categories
export const getCategories = (): string[] => {
  const cats = allProducts.map((p) => p.category);
  return Array.from(new Set(cats));
};

// Helper to get new arrivals
export const getNewArrivals = (): Product[] => {
  return allProducts.filter((p) => p.newArrival === true);
};