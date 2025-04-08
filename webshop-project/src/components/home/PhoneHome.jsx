"use client";

import Image from "next/image";
import Link from "next/link";
import { PhoneProductDisplay } from "../product_display/PhoneProductDisplay";
import { PhoneSearchBarHome } from "../PhoneSearchBarHome";

export const PhoneHome = () => {
    return (
        <div className="flex flex-col items-center w-[100vw] relative">
            <div className="fixed w-full">
                <div className="absolute h-[55vh] w-full overflow-hidden -mb-56">
                    <Image
                        src={"/ui/highlight-1.jpg"}
                        alt={"Picture header"}
                        className="absolute w-full h-full object-cover [mask-image:radial-gradient(80%_90%_at_top,black,transparent)]"
                        width={1600}
                        height={1600}
                        style={{
                            maskImage: "radial-gradient(80% 90% at top, black , rgba(0, 0, 0, 1) 80%, transparent 100%)",
                            WebkitMaskImage: "radial-gradient(80% 90% at top, black , rgba(0, 0, 0, 1) 80%, transparent 100%)"
                        }}
                    />
                </div>
            </div>

            <div className="flex relative w-full justify-center mt-32 mb-12 font-henotica text-5xl">
                <h1 className="shadow-2xl rounded-xl px-8 border-b-1">Welcome</h1>
            </div>

            <div className="relative mb-16 w-10/12">
                <PhoneSearchBarHome />
            </div>

            <div className="relative w-10/12 overflow-hidden">
                <Link href="/products" className="flex items-center justify-center relative shadow-2xl overflow-hidden rounded-t-3xl border-t-4 border-stone-300/80">
                    <Image
                        src={"/ui/highlight-1.jpg"}
                        alt={"Picture header"}
                        className="absolute "
                        width={1600}
                        height={1600}
                        style={{
                            maskImage: "radial-gradient(80% 90% at top, black , rgba(0, 0, 0, 1) 80%, transparent 100%)",
                            WebkitMaskImage: "radial-gradient(80% 90% at top, black , rgba(0, 0, 0, 1) 80%, transparent 100%)"
                        }}
                    />
                    <h1 className=" text-white relative my-16 mx-4 text-3xl text-center">Explore our collections</h1>
                </Link>
            </div>

            <div className="relative w-10/12 overflow-hidden mt-4">
                <Link href="/products/paintings" className="flex items-center justify-center relative shadow-2xl overflow-hidden rounded-t-3xl border-t-4 border-stone-300/80">
                    <Image
                        src={"/ui/bg-ph-4.jpg"}
                        alt={"Picture header"}
                        className="absolute w-full h-full object-cover"
                        width={1600}
                        height={1600}
                        style={{
                            maskImage: "radial-gradient(80% 90% at top, black , rgba(0, 0, 0, 1) 80%, transparent 100%)",
                            WebkitMaskImage: "radial-gradient(80% 90% at top, black , rgba(0, 0, 0, 1) 80%, transparent 100%)"
                        }}
                    />

                    <h1 className=" text-white relative my-16 mx-4 text-3xl text-center">Paintings</h1>
                </Link>
            </div>

            <div className="w-10/12">
                <PhoneProductDisplay />
            </div>
        </div>
    );
};
