"use client";

import { ProductCard } from "@/components/ProductCard";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/Products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
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
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {products.map((product) => (
          <ProductCard
            key={product.productId}
            name={product.name}
            //imagePath={product.imagePath}
            price={product.price}
            description={product.description}
          >
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Add to Cart
            </button>
          </ProductCard>
        ))}
      </div>
    </div>
  );
}