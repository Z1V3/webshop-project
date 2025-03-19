import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

export const FilterBar = ({ className }) => {
    return (
        <div className={` text-slate-800/90 items-end text-lg mb-16 -mt-8 ml-8 ${className}`}>
            <div className="flex my-1 flex-grow">
                <div className="relative z-5 flex gap-6 ml-16 flex-grow flex-wrap bg-slate-400/80 p-4 rounded-lg">
                    <Link href="./">
                        <div className="flex items-center gap-1">
                            Sort by
                            <FaArrowDown size={12}></FaArrowDown>
                        </div>
                    </Link>
                    <Link href="./">
                        <div className="flex items-center gap-1">
                            Price
                            <FaArrowDown size={12}></FaArrowDown>
                        </div>
                    </Link>
                    <Link href="./">
                        <div className="flex items-center gap-1">
                            Type
                            <FaArrowDown size={12}></FaArrowDown>
                        </div>
                    </Link>
                    <Link href="./">
                        <div className="flex items-center gap-1">
                            Dimensions
                            <FaArrowDown size={12}></FaArrowDown>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};