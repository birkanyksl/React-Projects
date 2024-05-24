import { featuredProducts } from "@/data";
import Image from "next/image";
import styles from "./Featured.module.css";
import React from "react";

const Featured = () => {
  return (
    <div
      className={`w-screen text-red-500 bg-white border-t-2 border-t-bg-gold ${styles.customScrollbar}`}
    >
      {/* WRAPPER */}
      <div className="w-max flex ">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-red-100 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh] border-l border-bg-gold"
            key={item.id}
          >
            {/* IMG CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full ">
                <Image src={item.img} alt="" fill className="object-cover" />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col gap-4 items-center justify-center text-center mt-1">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:Text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">{item.price}₺</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
