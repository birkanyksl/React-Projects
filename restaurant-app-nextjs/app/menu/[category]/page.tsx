import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="bg-gray-100 flex flex-wrap shadow-lg">
      {pizzas.map((item) => (
        <Link
          className="p-4 rounded-lg shadow-lg flex flex-col items-center h-[30vh] w-full md:w-1/2 lg:w-1/3 hover:scale-102 transition-transform duration-300" // Added responsiveness styles
          href={`/product/${item.id}`}
          key={item.id}
        >
          <div className="flex flex-row h-full w-full items-center">
            {/* IMAGE */}
            <div className="w-1/2 h-60 relative ">
              {item.img && (
                <Image
                  src={item.img}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              )}
            </div>

            {/* TEXT */}
            <div className="flex flex-col gap-2 p-2 w-1/2 overflow-hidden h-48 items-center justify-center text-left">
              {" "}
              {/* Centered text for mobile */}
              <h1 className="text-xl font-bold text-gray-700 font-pacifico">
                {item.title}
              </h1>
              <h2 className="text-sm text-gray-600 uppercase tracking-wide font-pacifico">
                by birkan
              </h2>
              <button className="font-extralight px-3 py-1 mt-4 mb-4 bg-red-600 text-white  uppercase rounded-bl-3xl rounded-tr-3xl hover:scale-105  transition-transform duration-500 md:px-6 md:pxy-2">
                buy now
              </button>
              <p className="text-xl text-gray-700 font-bold font-mono">
                ${item.price}
              </p>
            </div>
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
