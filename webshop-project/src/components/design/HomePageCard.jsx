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
            <Link href={`/product/${id}`}>
        <div className=" bg-[#363636]/95 p-2 sm:rounded-md md:rounded-lg text-white hover:scale-95 duration-100">
                <div className="flex flex-col bg-[#f0faff]/20 rounded-lg relative z-0 overflow-hidden">
                    <div
                        className="absolute inset-0 -z-10 opacity-5"
                        style={{
                            backgroundImage: `url(${grainImage.src})`,
                        }}
                    ></div>

                    <div className="px-4 pt-4 pb-2">
                        {imagePath && (
                            <img
                                src={imagePath}
                                alt={name}
                                className="w-[10vw] sm:rounded-sm md:rounded-md mb-2"
                                onError={handleImageError}
                            />
                        )}
                    </div>
                {name && <h2 className="text-md font-thin mb-2 ml-5">{name}</h2>}
                </div>
                {price && <p className="text-sm font-bold mt-2 ml-5">{price} €</p>}
                {children}
        </div>
            </Link>
    );
};