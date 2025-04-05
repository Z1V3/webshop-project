import grainImage from "@/assets/images/grain.jpg";
import Link from "next/link";

export const HomePageCard = ({
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
        <Link href={`/product/${id}`} className="flex justify-center">
            <div className="px-1 py-2 bg-stone-400/90 sm:rounded-md md:rounded-lg border-2 border-black hover:shadow-2xl">
                <div className="relative flex flex-col bg-[#363636]/95 p-2 sm:rounded-md md:rounded-lg text-white sm:w-[60vw] md:w-[7vw] sm:h-[38vh] md:h-[10vw]">
                    <div
                        className="absolute inset-0 z-1 opacity-10"
                        style={{
                            backgroundImage: `url(${grainImage.src})`,
                        }}
                    ></div>
                    <div className="relative w-full h-full bg-[#f0faff]/20 rounded-lg overflow-hidden">
                        <img
                            src={imagePath}
                            alt={name}
                            className="absolute h-full w-full object-cover"
                            onError={handleImageError}
                        />
                    </div>

                    <div className="relative z-10 flex justify-center mt-4 px-2">
                        {name && <h2 className="sm:text-[10px] md:text-sm font-thin">{name}</h2>}
                    </div>
                    <div className="relative z-10 mt-2 px-2">
                        {price && <p className="sm:text-[10px] md:text-md font-bold">{price} €</p>}
                        {children}
                    </div>
                </div>
            </div>
        </Link>
    );
};