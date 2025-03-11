import grainImage from "@/assets/images/grain.jpg";

export const ProductCard = ({ name, imagePath, price, description, children }) => {
  return (
    <div className="bg-zinc-200 relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:outline-white/20 after:pointer-events-none">
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>

      <div className="p-4">
        {imagePath && (
          <img
            src={imagePath}
            alt={name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
        )}
        {name && <h2 className="text-xl font-semibold text-white mb-2">{name}</h2>}
        {price && <p className="text-lg text-green-400 mb-2">${price}</p>}
        {description && <p className="text-gray-300 mb-4">{description}</p>}
        {children}
      </div>
    </div>
  );
};