"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import { CardContainer, CardBody, CardItem } from "@/components/Card3D";
import { ActionButton } from "@/components/ActionButton";

export default function Product({ params }) {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const { id } = React.use(params);

  useEffect(() => {
    if (!id) return;

    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/Products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchProductDetails();
    window.scrollTo(0, 0)
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <div className="flex">
      <div className="sm:bg-transparent md:absolute flex md:w-[2000px] md:bg-teal-500/30 border-slate-700/20 rounded-r-2xl text-slate-700/80">
        <div className="flex flex-col gap-8 relative z-10">
          <h1 className="flex md:text-5xl justify-center md:m-8 md:mt-16 md:pb-4 border-b-8">{product.name}</h1>
          <h3 className="font-thin sm:mx-8 md:mr-8 text-white bg-teal-900/70 md:text-3xl md:p-8 md:rounded-r-3xl">{product.description}</h3>
          <div className="relative flex flex-grow items-end sm:justify-center sm:gap-4 md:ml-16 md:my-16 md:gap-8">
            <ActionButton className="text-black font-normal md:bottom-1 sm:border-4 border-md:border-8">Buy now</ActionButton>
            <ActionButton className="text-black font-normal sm:border-4 md:border-8 ">Add to card</ActionButton>
          </div>
        </div>
        <div className="sm:hidden md:block flex flex-grow justify-end">
          <CardContainer className="inter-var md:-mr-32 md:ml-32">
            <CardBody className="bg-[#363636]/95 relative group/card  dark:hover:shadow-2xl w-auto sm:w-[30rem] h-auto rounded-lg p-6">
              <CardBody className="bg-[#f0faff]/20 relative group/card w-auto h-auto p-2 rounded-lg">

                <CardItem
                  translateZ="300"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  <h1 className="md:text-3xl">{product.name}</h1>
                  <h3 className="font-normal md:text-lg mt-4 text-white">Price: {product.price}€</h3>
                </CardItem>
                <CardItem translateZ="300" className="w-full mt-4">
                  <Image
                    src={product.imagePath}
                    height="1000"
                    width="1000"
                    className="w-full h-full object-contain rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </div>
  );
}
