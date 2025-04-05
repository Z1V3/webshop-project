'use client';

import { useState, useRef, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const FilterSlide = ({ className }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuWidth, setMenuWidth] = useState(400);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (menuRef.current) {
            setMenuWidth(menuRef.current.offsetWidth);
        }
    }, []);

    const menuVariants = {
        open: { x: 0 },
        closed: { x: menuWidth - 50 }
    };

    return (
        <div>
            <motion.div
                ref={menuRef}
                animate={isMenuOpen ? "open" : "closed"}
                variants={menuVariants}
                transition={{ duration: 0.3 }}
                className={cn(`fixed right-0 h-[2000px] w-[400px] bg-slate-600/60 z-10 rounded-xl`, className)}
            >
                <div className="absolute p-4 left-[-40px]">
                    <button onClick={toggleMenu} className="relative z-30 bg-white rounded-full p-2 shadow-lg">
                        {isMenuOpen ? <FaArrowRight size={30} /> : <FaArrowLeft size={30} />}
                    </button>
                </div>
            </motion.div>
        </div>
    );
};
