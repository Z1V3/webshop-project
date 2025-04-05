"use client";

import { SortBar } from "@/components/filtering/SortBar";
import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/lib/api";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

export default function TypePage() {
  const { type } = useParams();
  const searchParams = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  const order = searchParams.get("order") || "";

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts({ type, sortBy, order });
        setProducts(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchProducts();
  }, [type, sortBy, order]);

  if (error) {
    return <div className="text-center text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="relative mx-12 p-4">
      <SortBar setterProducts={setProducts} setterError={setError} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
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
  );
}
