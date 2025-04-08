"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NavComponent } from "../NavComponent";
import { cn } from "@/lib/utils";
import { FaSearch, FaTimes, FaCheck } from "react-icons/fa";
import { useRouter } from "next/navigation";

export const DesktopHeader = ({ session, className }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
    setSearchTerm("");
  };

  const handleSearchSubmit = () => {
    if (searchTerm) {
      router.push(`/products?search=${encodeURIComponent(searchTerm)}`);
      setIsSearchOpen(false);
      setSearchTerm("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchSubmit();
    }
  };


  return (
    <div className={cn(`min-h-[15vh] text-white items-end mb-16`, className)}>
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: isSearchOpen ? "0%" : "-100%", opacity: isSearchOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-4/5 bg-stone-300/80 shadow-xl py-4 z-50 flex justify-center"
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-3/4 p-3 rounded-md text-black outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleCloseSearch}
          className="ml-4 text-white hover:opacity-75"
        >
          <FaTimes color="#918f87" size={30} />
        </button>
        <button
          onClick={handleSearchSubmit}
          className="ml-4 text-white hover:opacity-75"
        >
          <FaCheck color="#918f87" size={30} />
        </button>
      </motion.div>

      <div className="flex my-1 flex-grow shadow-2xl">
        <div className="absolute w-[50vw] h-[21vh] -top-16 bg-slate-600/40 ml-32 z-1 rounded-lg shadow-2xl"></div>
        <div className="absolute ml-24 w-full top-18 h-[9.5vh] bg-stone-400/60 shadow-2xl rounded-lg"></div>

        <div className="relative z-5 flex gap-6 ml-16 items-center flex-grow justify-center flex-wrap bg-[#363636]/95 p-4 rounded-l-lg overflow-visible">
          <div className="relative z-5 shadow-2xl flex gap-6 ml-16 items-center flex-grow justify-center flex-wrap bg-[#4a4a4a]/90 p-4 rounded-lg">
            <NavComponent href="/">Home</NavComponent>
            <NavComponent href="/products">Browse all</NavComponent>
            <NavComponent href="/products/paintings">Paintings</NavComponent>
            <NavComponent href="/products/decorations">Decorations</NavComponent>
            <NavComponent href="/products/wearables">Wearables</NavComponent>
            <NavComponent href="/about">About</NavComponent>
            <NavComponent href="/contact">Contact</NavComponent>
            <NavComponent href="/posts">Posts</NavComponent>
          </div>

          {/* Search Button */}
          <div className="ml-8">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="bg-stone-200/30 rounded-full p-2 hover:opacity-50 duration-100"
            >
              <FaSearch size={30} />
            </button>
          </div>

          {/* User Authentication Section */}
          <div className="flex gap-12 md:mx-8 lg:mx-32 items-center flex-grow justify-end text-2xl">
            {session?.user ? (
              <div>
                <p>Welcome, {session.user.name}!</p>
                <form action="/api/auth/signout">
                  <button type="submit" className="border-2 p-2 hover:scale-110 duration-200">
                    Sign out
                  </button>
                </form>
              </div>
            ) : (
              <div
                className="border-2 p-2 hover:scale-95 hover:bg-stone-800/30 duration-200"
                style={{ fontSize: "calc(1px + 1vw)" }}
              >
                <a href="/login">
                  <button>Sign In</button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
