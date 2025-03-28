import grainImage from "@/assets/images/grain.jpg";
import Link from "next/link";

export const ProductCard = ({
  id,
  name,
  imagePath = "/default-picture.jpg",
  price,
  children,
}) => {
  const handleImageError = (event) => {
    event.target.src = "/default-picture.jpg";
  };

  return (
    <Link href={`/product/${id}`} className="hover:scale-95 duration-100">
      <div className="flex flex-col gap-2 bg-[#363636]/95 p-2 sm:rounded-md md:rounded-lg text-white w-[12vw]">
        <div className="bg-[#f0faff]/20 rounded-lg relative z-0 overflow-hidden w-full">
          <div
            className="absolute inset-0 -z-10 opacity-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>

          <div className="p-2">
            {imagePath && (
              <img
                src={imagePath}
                alt={name}
                className="object-contain w-full sm:rounded-sm md:rounded-md mb-2 object-center"
                onError={handleImageError}
              />
            )}
          </div>
          {name && <h2 className="md:text-sm lg:text-md font-thin mb-2 mt-1 ml-5">{name}</h2>}
        </div>
        {price && <p className="text-lg font-bold mb-2 ml-5">{price} €</p>}
        {children}
      </div>
    </Link>
  );
};