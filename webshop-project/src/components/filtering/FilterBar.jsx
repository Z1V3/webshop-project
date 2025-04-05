'use client';

import { cn } from "@/lib/utils";

export const FilterBar = ({ className }) => {


    return (
        <div className={cn("flex gap-8 items-center bg-stone-100/80 rounded-md", className)}>
            <div className="flex h-full flex-grow">
                {["Type", "Price", "Dimensions"].map((option) => (
                    <button
                        key={option}
                        className={`flex items-center gap-1 border-2 border-black/50 h-full px-8 hover:scale-105`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};
