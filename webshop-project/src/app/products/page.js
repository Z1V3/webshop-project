"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getProducts } from "@/lib/api";
import { SortBar } from "@/components/filtering/SortBar";
import { ProductCard } from "@/components/ProductCard";
import { FilterBar } from "@/components/filtering/FilterBar";

export default function Products() {
  const searchParams = useSearchParams();
  const price = searchParams.get("price") || "";
  const dimension = searchParams.get("dimension") || "";
  const type = searchParams.get("type") || "";
  const sortBy = searchParams.get("sortBy") || "";
  const order = searchParams.get("order") || "";

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts({ price, dimension, type, sortBy, order });
        setProducts(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchProducts();
  }, [price, dimension, type, sortBy, order]);

  if (error) {
    return <div className="text-center text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="relative mx-12 p-4 -my-10">
      <div className="flex justify-between">
          <FilterBar className="w-4/5 max-h-[5vh]"/>
          <SortBar setterProducts={setProducts} setterError={setError} className="ml-8 max-h-[5vh]" />
      </div>
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
