import { featuredProducts } from "@/data";
import Image from "next/image";
import styles from "./Featured.module.css";
import React from "react";

const Featured = () => {
  return (
    <div
      className={`w-screen bg-navbar-gradient text-white ${styles.customScrollbar}`}
    >
      {/* WRAPPER */}
      <div className="w-max flex bg-black">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            className="w-screen flex flex-col items-center justify-around p-3 md:w-[50vw] xl:w-[33vw] h-[60vh]"
            key={item.id}
          >
            {/* IMG CONTAINER */}
            {item.img && (
              <div className="relative flex-2 w-full h-full ">
                <Image src={item.img} alt="" fill className="object-cover  " />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col gap-4 items-center justify-center text-center mt-1">
              <h1 className="text-lg font-bold uppercase xl:text-xl 2xl:Text-2xl text-red-600">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-6 text-sm">{item.desc}</p>
              {/* <span className="text-xl font-bold">{item.price}₺</span>
              <button className="bg-red-600 text-white font-bold py-2 px-5 rounded-bl-3xl rounded-tr-3xl hover:scale-105 transition-all duration-500">
                Add to Cart
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
