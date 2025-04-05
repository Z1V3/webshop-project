"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";


export const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");

    const handleSearch = async (event) => {
        event.preventDefault();
        setError("");

        const result = await search(search);

        if (result?.error) {
            setError(result.error);
        } else {
            window.location.href = "/";
        }
    };

    return (
        <form onSubmit={handleSearch} className="relative flex flex-col items-center gap-4 w-full">
            {error && <p className="text-red-500">{error}</p>}
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
                        className="text-center font-sans text-lg mt-1 p-2 border rounded-full w-full bg-stone-100/90 outline-none focus:ring-0 focus:border-transparent shadow-2xl"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        required
                    />
                    <button type="submit" className="flex bg-stone-500/70 py-4 w-[75px] rounded-full justify-center items-center shadow-2xl">
                        <FaSearch color="white"></FaSearch>
                    </button>
                </div>
            </div>
        </form>
    );
}