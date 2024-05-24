"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Burası, gecenizin yıldızlarına ev sahipliği yapan eşsiz bir mekan.",
    image: "/slider1.jpg",
  },
  {
    id: 2,
    title:
      "Müziğin ritmiyle dans edin, lezzetin tadını çıkarın; her anı unutulmaz kılan bu özel yerdeyiz.",
    image: "/slider2.jpg",
  },
  {
    id: 3,
    title: "Lezzet, eğlence ve anıların buluşma noktası.",
    image: "/slider3.jpg",
  },
  {
    id: 4,
    title:
      "Eğlencenin kalbinin attığı, enerjisi yüksek, samimi bir ortamda buluşuyoruz.",
    image: "/slider4.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex gap-1 flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* TEXT CONTAINER  */}
      <div className=" flex flex-1 items-center justify-center flex-col gap-8 font-bold text-white ">
        <h1 className="text-3xl text-center uppercase p-4 md:p-10 md:text-5xl xl:text-6xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-white text-red-600 py-4 px-8 rounded-bl-3xl rounded-tr-3xl hover:scale-105 hover:text-bg-gold transition-all duration-500 ">
          Order Now
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative ">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
