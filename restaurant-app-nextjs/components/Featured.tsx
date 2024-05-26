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
      <div className="w-max flex bg-[url('/featuredbg.jpg')]">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            className="w-screen h-[70vh] flex flex-col items-center justify-around p-4 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
            key={item.id}
          >
            {/* IMG CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full h-1/2 sm:h-full">
                <Image
                  src={item.img}
                  alt=""
                  fill
                  className="object-cover rounded-2xl shadow-sm shadow-white"
                />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col gap-4 items-center justify-center text-center mt-1">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:Text-3xl text-red-600">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">{item.price}₺</span>
              <button className="bg-red-600 text-white font-bold py-2 px-5 rounded-bl-3xl rounded-tr-3xl hover:scale-105 transition-all duration-500">
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
