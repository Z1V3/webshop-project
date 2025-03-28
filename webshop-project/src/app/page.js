"use client";

import { HomePageCard } from '@/components/design/HomePageCard';
import { getProductsRandom } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsRandom(6);
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
    <div className='flex justify-center'>
      <div className="w-[80vw] rounded-t-[200px] border-gray-600/10 py-16 shadow-md hover:ring-8 hover:ring-black/50 duration-300 z-10" style={{
        backgroundColor: " #e2fcff "
      }}>
        <div className='flex flex-col gap-8 items-center container'>
          <div className='flex h-[25vh] w-[70vw] items-center justify-center overflow-clip rounded-t-full relative border-8 border-black drop-shadow-md hover:drop-shadow-2xl duration-500 group'>
            <Image
              src={"/ui/highlight-1.jpg"}
              alt={"Picture header"}
              className="w-full absolute -top-[100px] group-hover:rotate-12 group-hover:scale-105 duration-1000 [mask-image:radial-gradient(10%_10%_at_left,transparent,black)]"
              width={1500}
              height={1500}
            />

            <h1 className='relative font-henotica hover:scale-105 duration-200' style={{ fontSize: 'calc(50px + 5vw)' }}>Webshop</h1>
          </div>
          <div className='relative grid grid-cols-5 gap-8 max-h-[450px] w-[70vw] overflow-clip'>
            <div className='col-span-2 text-8xl bg-white/70 p-8 font-shoal' style={{ fontSize: 'calc(2px + 3.5vw)' }}>
              <h1>
                <div className="hover:bg-transparent group inline-flex">
                  <span className="inline-flex mx-2 group-hover:scale-50 duration-300 shadow-xl group-hover:shadow-none">Welcome</span>
                </div>
                <div className="hover:bg-transparent group inline-flex">
                  <span className="inline-flex mx-2 group-hover:scale-50 duration-300 shadow-xl group-hover:shadow-none">to</span>
                </div>
                <div className="hover:bg-transparent group inline-flex">
                  <span className="inline-flex mx-2 group-hover:scale-50 duration-300 shadow-xl group-hover:shadow-none">artistic</span>
                </div>
                <div className="hover:bg-transparent group inline-flex">
                  <span className="inline-flex mx-2 group-hover:scale-50 duration-300 shadow-xl group-hover:shadow-none">webshop</span>
                </div>
                <div className="hover:bg-transparent group inline-flex">
                  <span className="inline-flex mx-2 group-hover:scale-50 duration-300 shadow-xl group-hover:shadow-none">that</span>
                </div>
                <div className="hover:bg-transparent group inline-flex">
                  <span className="inline-flex mx-2 group-hover:scale-50 duration-300 shadow-xl group-hover:shadow-none">sells</span>
                </div>
                <div className="hover:bg-transparent group inline-flex">
                  <span className="inline-flex mx-2 group-hover:scale-50 duration-300 shadow-xl group-hover:shadow-none">physical</span>
                </div>
                <div className="hover:bg-transparent group inline-flex">
                  <span className="inline-flex mx-2 group-hover:scale-50 duration-300 shadow-xl group-hover:shadow-none">art!</span>
                </div>
              </h1>
            </div>
            <div className='relative col-span-3 max-h-[450px] flex items-center overflow-clip border-8 border-orange-800/20 rounded-3xl group'>
              <Image
                src={"/ui/highlight-1.jpg"}
                alt={"Picture header"}
                className="group-hover:scale-105 duration-700"
                width={1500}
                height={1500}
              />

              <Link href="/products">
                <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-henotica text-white group-hover:scale-110 duration-700 text-center tracking-tight' style={{ fontSize: `calc(60px + 1vw)` }}>Explore Our Collections</h1>
              </Link>
            </div>
          </div>
          <div>
            <div className='h-[40vh] w-[70vw] overflow-clip relative drop-shadow-2xl group'>
              <Image
                src={"/ui/highlight-decorations.jpg"}
                alt={"Picture header"}
                className="w-full absolute group-hover:scale-105 duration-700"
                width={1500}
                height={1500}
              />
              <Link href="/products/decorations" className='inline-flex h-full'>
                  <h1 className='relative my-auto font-creatodisplay text-white ml-16 tracking-tight bg-black/80 p-1 hover:bg-white hover:text-black hover:shadow-2xl duration-300' style={{ fontSize: `calc(60px + 2vw)` }}>Handmade decorations</h1>
              </Link>
            </div>
          </div>
          <div className='grid grid-cols-6 relative bg-black/50 p-16 gap-8 h-[50vh] w-[70vw] shadow-2xl' style={{

          }}>
            {products.map((product) => (
              <HomePageCard
                key={product.productId}
                id={product.productId}
                name={product.name}
                imagePath={product.imagePath}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}