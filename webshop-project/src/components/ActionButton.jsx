export const ActionButton = ({ children, onClick, className = "" }) => {
    return (
        <button
            onClick={onClick}
            className={`text-xl font-semibold rounded-full py-4 px-16 bg-gradient-to-r from-sky-300 to-indigo-300 ${className}`}
        >
            {children}
        </button>
    );
};