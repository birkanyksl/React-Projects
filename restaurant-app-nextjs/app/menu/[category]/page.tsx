import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="bg-gray-100 flex flex-wrap shadow-lg w-auto p-4 pt-24">
      {pizzas.map((item) => (
        <Link
          className="p-4 rounded-lg shadow-lg flex flex-col items-center justify-between h-[65vh] md:w-1/2 lg:w-1/3 hover:bg-gray-200 transition-transform duration-300  "
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* IMAGE */}
          <div className="w-full h-[400px] relative ">
            {item.img && (
              <Image
                src={item.img}
                alt=""
                layout="fill"
                objectFit="contain"
                className=" aspect-auto rounded-sm"
              />
            )}
          </div>

          {/* TEXT */}
          <div className="flex flex-col gap-2 text-left">
            <h1 className="text-xl font-bold text-gray-700">{item.title}</h1>

            <p className="text-sm  text-gray-600 mt-2">
              {item.desc || "No description available"}
            </p>
          </div>

          {/* PRICE AND BUTTON */}
          <div className="flex justify-center gap-16 mt-4 w-full items-center">
            <p className="text-xl text-gray-700 font-bold">${item.price}</p>
            <button className="px-3 py-1 bg-neutral-500 text-white rounded-lg font-normal  hover:scale-105 hover:bg-neutral-600 transition-transform duration-300 shadow-myshadow">
              Buy now
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
