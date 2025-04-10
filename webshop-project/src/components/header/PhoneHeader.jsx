'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export const PhoneHeader = ({ className }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuWidth, setMenuWidth] = useState(0);
    const menuRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (menuRef.current && isMenuOpen) {
            setMenuWidth(menuRef.current.offsetWidth);
        }
    }, [isMenuOpen]);

    const menuVariants = {
        open: { x: 0 },
        closed: { x: menuWidth }
    };

    const handleSearchSubmit = () => {
        if (searchTerm) {
            router.push(`/products?search=${encodeURIComponent(searchTerm)}`);
            setSearchTerm("");
        }
    };

    return (
        <div>
            <div className={cn("absolute p-4 top-0 left-0 text-black", className)}>
                <button onClick={toggleMenu} className='relative z-30'>
                    <div className='fixed'>
                        {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </div>
                </button>
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        ref={menuRef}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 right-0 h-full bg-stone-100/90 p-4 z-50 w-fit min-w-max max-w-screen"
                    >
                        <div className="flex flex-col gap-4">
                            <div className='flex flex-col gap-4 my-6 items-end'>
                                <a href="/login" onClick={toggleMenu}>Login</a>
                                <a href="/register" onClick={toggleMenu}>Register</a>
                            </div>

                            <div className="w-full flex bg-stone-600 rounded-full p-1 text-sm">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-[50vw] p-3 rounded-full text-black outline-none"
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button
                                    className="ml-4 text-white hover:opacity-75 bg-stone-300 px-2 rounded-full"
                                    onClick={() => {
                                        handleSearchSubmit();
                                        toggleMenu();
                                    }}
                                >
                                    <FaSearch color="#918f87" size={30} />
                                </button>
                            </div>

                            <Link href="/" onClick={toggleMenu}>Home</Link>
                            <Link href="/products" onClick={toggleMenu}>Browse all</Link>
                            <Link href="/products" onClick={toggleMenu}>Paintings</Link>
                            <Link href="/products" onClick={toggleMenu}>Decorations</Link>
                            <Link href="/products" onClick={toggleMenu}>Wearables</Link>
                            <Link href="/about" onClick={toggleMenu}>About</Link>
                            <Link href="/contact" onClick={toggleMenu}>Contact</Link>
                            <Link href="/posts" onClick={toggleMenu}>Posts</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};