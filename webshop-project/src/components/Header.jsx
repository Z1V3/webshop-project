'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuWidth, setMenuWidth] = useState(0);
    const menuRef = useRef(null);

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

    return (
        <div className="text-white">
            <div>
                <div className="md:hidden p-4 absolute top-0 left-0 text-black">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
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
                            className="fixed top-0 right-0 h-full bg-neutral-900 p-4 z-50 w-fit min-w-max max-w-screen"
                        >
                            <div className="flex flex-col gap-4">
                                <div className='flex flex-col gap-4 my-6 items-end'>
                                    <Link href="./login" onClick={toggleMenu}>Login</Link>
                                    <Link href="./register" onClick={toggleMenu}>Register</Link>
                                </div>
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
            </div>

            <div className="hidden md:flex min-h-[200px] bg-neutral-950 text-white items-end">
                <div className="flex my-1 flex-grow">
                    <div className="flex gap-4 mx-4 items-center">
                        <Link href="./">Home</Link>
                        <Link href="./products">Browse all</Link>
                        <Link href="./products">Paintings</Link>
                        <Link href="./products">Decorations</Link>
                        <Link href="./products">Wearables</Link>
                        <Link href="./about">About</Link>
                        <Link href="./contact">Contact</Link>
                        <Link href="./posts">Posts</Link>
                    </div>
                    <div className='flex gap-8 mx-8 items-center flex-grow justify-end'>
                        <Link href="./login">Login</Link>
                        <Link href="./register">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};