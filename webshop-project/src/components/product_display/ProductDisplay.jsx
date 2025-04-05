"use client";

import { HomePageCard } from '@/components/product_display/HomePageCard';
import { getProductsRandom } from '@/lib/api';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export const ProductDisplay = ({ className }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsRandom(6);
        setProducts(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={cn("grid grid-cols-6 relative bg-black/50 p-16 gap-8 shadow-2xl", className)}>
      {products.map((product) => (
        <HomePageCard
          key={product.productId}
          id={product.productId}
          name={product.name}
          imagePath={product.imagePath}
          price={product.price}
        />
      ))}
    </div>
  );
};