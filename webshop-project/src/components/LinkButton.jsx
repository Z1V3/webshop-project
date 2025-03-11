import Link from 'next/link';

export const LinkButton = ({ children, href, className = "" }) => {
    return (
        <Link href={href} className={`text-xl font-semibold rounded-full py-4 px-16 bg-gradient-to-r from-sky-300 to-indigo-300 inline-block ${className}`}>
            {children}
        </Link>
    );
};