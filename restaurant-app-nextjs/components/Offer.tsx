"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import CountDown from "./CountDown";

const Offer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:justify-between bg-[url('/offerBg.png')] h-[60vh] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 p-6 order-1 ">
        <div className="flex flex-col items-center gap-6 ">
          <h1 className="text-white text-xl font-bold xl:text-5xl md:text-4xl max-w-72 md:max-w-[500px]">
            Exclusive Beer Sale: Chill with Up to 50% Off!
          </h1>
          <p className="text-white text-xs xl:text-xl md:text-xl max-w-56 md:max-w-96">
            Cool down this summer with our special discounts on beers! Do not
            miss out
          </p>
        </div>
        <div className="order-3">
          <CountDown />
        </div>
        <div className="order-4">
          <button className=" bg-red-600 text-white text-xs font-bold py-3 px-16 md:py-4 md:px-8 rounded-bl-3xl rounded-tr-3xl hover:scale-105 transition-all duration-500">
            Order Now
          </button>
        </div>

        {/* IMAGE CONTAINER (MEDIA QUERY AND TERNARY OPERATOR) */}
        {isMobile && (
          <div className={"relative flex-1 w-full h-full order-2 "}>
            <Image
              src="/temporary/p9.png"
              alt="Offer product image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        )}
      </div>

      {/* IMAGE CONTAINER (MEDIA QUERY AND TERNARY OPERATOR) */}
      {!isMobile && (
        <div className={"relative flex-1 w-full h-full "}>
          <Image
            src="/temporary/p9.png"
            alt="Offer product image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}
    </div>
  );
};

export default Offer;
