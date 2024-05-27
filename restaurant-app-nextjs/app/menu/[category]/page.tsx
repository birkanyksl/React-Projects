import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="bg-gray-100 flex flex-wrap shadow-lg">
      {pizzas.map((item) => (
        <Link
          className="p-8 rounded-lg shadow-lg flex flex-col w-full md:w-1/2 lg:w-1/3 h-[40vh] "
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* IMAGE */}
          <div className="flex flex-row h-full gap-2">
            {item.img && (
              <div className="w-1/2 relative aspect-w-1 aspect-h-1">
                <Image
                  src={item.img}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            )}
            {/* TEXT */}
            <div className=" mt-3 flex flex-col justify-between w-1/2">
              <div className="flex flex-col gap-5 ">
                <h1 className="text-xl font-bold text-gray-700">
                  {item.title}
                </h1>
                <h2 className="text-sm text-gray-600 uppercase tracking-wide">
                  by birkan
                </h2>
                <p className="text-sm text-gray-700 mt-2">
                  BİRKAN BİRKAN BİRKAN
                </p>
              </div>
            </div>
          </div>
          {/* PRICE AND BUTTON */}
          <div className="flex justify-between mt-4 w-full">
            <p className="text-xl text-gray-700 font-bold">${item.price}</p>
            <button className="px-2 py-1 bg-red-600 text-white font-semibold uppercase rounded-bl-3xl rounded-tr-3xl hover:scale-105 transition-transform duration-500">
              buy now
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;

// <div className="flex flex-wrap  ">
//   {pizzas.map((item) => (
//     <Link
//       className="w-full h-[60vh] shadow-lg sm:w-1/2 lg:w-1/3 p-4 flex items-center "
//       href={`/product/${item.id}`}
//       key={item.id}
//     >
//       <div className="flex flex-row w-screen h-full gap-1 bg-slate-600">
//         {/* TEXT CONTAINER */}
//         <div className="flex flex-col items-start justify-center gap-5 w-1/3 ">
//           <h1 className="text-base uppercase p-2 font-pacifico font-medium text-gray-800">
//             {item.title}
//           </h1>
//           <h2 className="group-hover:hidden text-lg text-gray-800 font-pacifico">
//             ${item.price}
//           </h2>
//           <button>Click</button>
//         </div>
//         {/* IMAGE */}
//         {item.img && (
//           <div className="relative w-full h-[80%]">
//             <Image src={item.img} alt="" fill className="object-contain" />
//           </div>
//         )}
//       </div>
//     </Link>
//   ))}
// </div>
