import { cn } from '@/lib/utils';
import Link from 'next/link';

export const NavComponent = ({ children, href, className }) => {
    return (
        <Link href={href} className={cn(`mx-1`, className)} style={{ fontSize: "calc(1px + 1vw)" }}>
            <div className=' group 0  '>
                <div className='hover:bg-stone-800/30 rounded-sm inline-flex border-b-2  group-hover:scale-110 group-hover:-rotate-1 duration-300 border-white/50'>
                    <span className='inline-flex group-hover:-translate-y-2  duration-100'>
                        {children}
                    </span>
                </div>
            </div>
        </Link>
    );
};