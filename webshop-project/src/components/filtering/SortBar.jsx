"use client";

import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { FaArrowDown, FaArrowUp } from "react-icons/fa"; // Import FaArrowUp

export const SortBar = ({ className }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSortBy = searchParams.get("sortBy") || "name";
  const currentOrder = searchParams.get("order") || "asc";

  const handleSortChange = (newSortBy) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("sortBy", newSortBy);
    newSearchParams.set("order", currentOrder === "asc" ? "desc" : "asc");

    router.push(`/products?${newSearchParams.toString()}`, { scroll: false });
  };

  return (
    <div className={cn("flex items-center justify-end gap-6 p-4 bg-gray-100 rounded-md", className)}>
      <span className="font-semibold">Sort by:</span>
      {["name", "price", "type"].map((option) => (
        <button
          key={option}
          onClick={() => handleSortChange(option)}
          className={`flex items-center gap-1 hover:scale-105 ${currentSortBy === option ? "text-blue-600 font-semibold" : ""}`}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
          {currentSortBy === option && currentOrder === "asc" && <FaArrowUp size={12} />}
          {currentSortBy === option && currentOrder === "desc" && <FaArrowDown size={12} />}
        </button>
      ))}
    </div>
  );
};