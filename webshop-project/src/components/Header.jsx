'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuVariants = {
        open: { x: 200 },
        closed: { x: '200%' },
    };

    return (
        <div className="text-white">
            <div className="md:hidden p-4 absolute top-0 left-0 text-black">
                <button onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 left-0 h-full w-64 bg-neutral-900 p-4 z-50"
                    >
                        <div className="flex flex-col gap-4">
                            <Link href="./" onClick={toggleMenu}>Home</Link>
                            <Link href="./products" onClick={toggleMenu}>Browse all</Link>
                            <Link href="./products" onClick={toggleMenu}>Paintings</Link>
                            <Link href="./products" onClick={toggleMenu}>Decorations</Link>
                            <Link href="./products" onClick={toggleMenu}>Wearables</Link>
                            <Link href="./about" onClick={toggleMenu}>About</Link>
                            <Link href="./contact" onClick={toggleMenu}>Contact</Link>
                            <Link href="./posts" onClick={toggleMenu}>Posts</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="hidden md:flex min-h-[200px] bg-neutral-950 text-white relative">
                <div className="hidden md:flex items-end">
                    <div className="flex gap-4 mx-4 my-1">
                        <Link href="./">Home</Link>
                        <Link href="./products">Browse all</Link>
                        <Link href="./products">Paintings</Link>
                        <Link href="./products">Decorations</Link>
                        <Link href="./products">Wearables</Link>
                        <Link href="./about">About</Link>
                        <Link href="./contact">Contact</Link>
                        <Link href="./posts">Posts</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};