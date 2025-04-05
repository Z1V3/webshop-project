"use client";

import { ProductDisplay } from '@/components/product_display/ProductDisplay';
import Image from 'next/image';
import Link from 'next/link';

export const DesktopHome = () => {
    return (
        <div className="relative w-[70vw] min-w-[1100px] lg:rounded-t-[150px] md:rounded-t-[100px] border-gray-600/10 shadow-md hover:ring-[10px] hover:ring-black/60 duration-300 z-10" style={{
            backgroundColor: " #e2fcff "
        }}>
            <div className='flex flex-col gap-8 items-center py-12'>

                <div className='flex h-full w-5/6 items-center justify-center overflow-clip rounded-t-full relative border-8 border-black drop-shadow-md hover:drop-shadow-2xl duration-500 group'>
                    <Image
                        src={"/ui/highlight-1.jpg"}
                        alt={"Picture header"}
                        className="absolute -top-[110px] group-hover:rotate-12 group-hover:scale-105 duration-1000"
                        width={1600}
                        height={1600}
                    />

                    <h1 className='relative font-henotica hover:scale-105 duration-200' style={{ fontSize: 'calc(50px + 5vw)' }}>Welcome</h1>
                </div>


                {/*TODO Make each part of the home screen cut and into different divs */}


                <div className='relative grid grid-cols-5 gap-8 w-4/5 h-full'>
                    <div className='col-span-2 bg-gradient-to-tr from-[#e2fcff] rounded-3xl to-stone-400/20 p-8 font-shoal' style={{ fontSize: 'calc(-5px + 2.8vw)' }}>
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

                    <div className='relative col-span-3 max-h-[450px] flex items-center overflow-clip border-8 border-orange-800/20 rounded-3xl group aspect-w-16 aspect-h-9'>
                        <Image
                            src={"/ui/highlight-1.jpg"}
                            alt={"Picture header"}
                            className="group-hover:scale-105 duration-700"
                            width={1500}
                            height={1500}
                        />

                        <Link href="/products">
                            <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-henotica text-white group-hover:scale-110 duration-700 text-center tracking-tight' style={{ fontSize: `calc(40px + 1vw)` }}>Explore Our Collections</h1>
                        </Link>
                    </div>
                </div>

                <div className='w-5/6 h-[20vw]'>
                    <div className='h-full overflow-clip relative drop-shadow-2xl group'>
                        <Image
                            src={"/ui/highlight-decorations.jpg"}
                            alt={"Picture header"}
                            className="w-full absolute group-hover:scale-105 duration-700"
                            width={1500}
                            height={1500}
                        />
                        <div className='relative flex h-full w-full '>
                            <Link href="/products/decorations" className='flex items-center justify-start h-full w-full ml-16'>
                                <h1 className='relative flex h-3/8 items-center font-creatodisplay text-white tracking-tight bg-black/80 hover:bg-white hover:text-black hover:shadow-2xl duration-300 px-1' style={{ fontSize: `calc(30px + 2.5vw)` }}>Decorations</h1>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='w-5/6 h-[20vw]'>
                    <div className='h-full overflow-clip relative drop-shadow-2xl group'>
                        <Image
                            src={"/ui/highlight-background-eye.jpg"}
                            alt={"Picture header"}
                            className="w-full absolute group-hover:scale-105 duration-700"
                            width={1500}
                            height={1500}
                        />
                        <div className='relative h-full flex w-full border-8'>
                            <Link href="/products/wearables" className='flex items-center justify-end h-full w-full mr-16'>
                                <h1 className='relative flex h-3/8 items-center font-creatodisplay text-white tracking-tight bg-black/80 hover:bg-white hover:text-black hover:shadow-2xl duration-300 px-1' style={{ fontSize: `calc(30px + 2.5vw)` }}>Handmade Wearables</h1>
                            </Link>
                        </div>
                    </div>
                </div>

                <ProductDisplay className="w-4/5" />
            </div>
        </div>
    );
}