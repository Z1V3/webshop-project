export const ActionButton = ({ children, onClick, className = "" }) => {
    return (
      <button
        onClick={onClick}
        className={`sm:text-base sm:p-3 md:text-xl md:font-semibold rounded-full md:py-4 md:px-16 bg-gradient-to-r from-sky-300 to-teal-300 ${className}`}
      >
        {children}
      </button>
    );
  };