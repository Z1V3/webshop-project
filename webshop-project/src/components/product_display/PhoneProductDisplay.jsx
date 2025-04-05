import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { getProductsRandom } from "@/lib/api";
import { HomePageCard } from "@/components/product_display/HomePageCard";

export const PhoneProductDisplay = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProductsRandom(10);
                setProducts(data);
            } catch (error) {
                setError(error);
            }
        };

        fetchProducts();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1} // Adjust for visibility
            navigation
            pagination={true}
            modules={[Pagination]}
            className="w-full h-full mx-8 mt-4"
        >
            {products.map((product) => (
                <SwiperSlide key={product.productId} className="mb-8">
                    <HomePageCard
                        id={product.productId}
                        name={product.name}
                        imagePath={product.imagePath}
                        price={product.price}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

