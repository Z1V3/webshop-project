"use client";

import { FilterBar } from "@/components/filter/FilterBar";
import { FilterSlide } from "@/components/filter/FilterSlide";
import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/lib/api";

import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="max-w-[100vw]">
      <FilterBar className="w-[1600px] -mt-8" />

      <div className="relative lg:px-64 flex ">
      <div className="relative z-10 flex-1 md:overflow-hidden lg:overflow-hidden">
  <div className="grid grid-cols-repeat-fit gap-8 mt-10">
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

<style jsx global>{`
  .grid-cols-repeat-fit {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`}</style>

        <FilterSlide className="ml-8 sm:hidden md:block" />
      </div>
    </div>
  );
}
