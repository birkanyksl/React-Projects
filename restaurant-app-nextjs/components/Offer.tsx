import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="  flex flex-row md:justify-between bg-[url('/offerBg.png')] h-[50vh] md:h-[70vh] ">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 p-6">
        <h1 className="text-white text-3xl font-bold xl:text-4xl">
          Exclusive Beer Sale: Chill with Up to 50% Off!
        </h1>
        <p className="text-white xl:text-xl">
          Cool down this summer with our special discounts on beers! Do not miss
          out
        </p>
        <CountDown />
        <button className="bg-red-600 text-white font-bold py-2 px-4 md:py-4 md:px-8 rounded-bl-3xl rounded-tr-3xl hover:scale-105 transition-all duration-500">
          Order Now
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="relative flex-1 w-full h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
