"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";


export const PhoneSearchBarHome = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    const handleSearchSubmit = () => {
        if (searchTerm) {
            router.push(`/products?search=${encodeURIComponent(searchTerm)}`);
            setSearchTerm("");
        }
    };

    return (
        <form onSubmit={handleSearchSubmit} className="relative flex flex-col items-center gap-4 w-full">
            <div className="w-full group">
                <div className="flex w-full justify-center items-center">
                    <label htmlFor="search" className="inline-flex text-center justify-center rounded-full px-4 shadow-2xl shadow-stone-500 text-white text-3xl font-henotica group-hover:text-white duration-300">
                        Browse
                    </label>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <input
                        type="search"
                        id="search"
                        className="text-center font-sans text-lg p-2 border rounded-full w-full bg-stone-100/90 outline-none focus:ring-0 focus:border-transparent shadow-2xl"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        required
                    />
                    <button type="submit" className="flex bg-stone-300 py-4 px-6 rounded-full justify-center items-center shadow-2xl absolute right-0">
                        <FaSearch color="black"></FaSearch>
                    </button>
                </div>
            </div>
        </form>
    );
}