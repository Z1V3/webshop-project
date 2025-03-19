import Link from 'next/link';

export const NavComponent = ({ children, href, className = "" }) => {
    return (
        <Link href={href} className={`text-3xl ${className}`}>
            {children}
        </Link>
    );
};