"use client";

import { ProductCard } from "@/components/ProductCard";
import { getDecorations } from "@/lib/api";
import { useEffect, useState } from "react";

export default function DecorationsPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDecorations = async () => {
      try {
        const data = await getDecorations();
        setProducts(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchDecorations();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="max-w-[100vw]">
      <div className="container relative lg:px-64 flex">
        <div className="relative z-10 flex-1 md:overflow-hidden lg:overflow-hidden">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:gap-16 md:gap-x-8 md:gap-y-24 mt-10">
            {products.map((product) => (
              <ProductCard
                key={product.productId}
                id={product.productId}
                name={product.name}
                imagePath={product.imagePath}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}