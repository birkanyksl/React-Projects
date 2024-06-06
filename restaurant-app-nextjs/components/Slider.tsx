"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: " BETTERDAYS BETTERDAYS BETTERDAYS BETTERDAYS BETTERDAYS BETTERDAYS",
    image: "/slider-1.jpg",
  },
  {
    id: 2,
    title: "Müziğin ritmiyle dans edin, lezzetin tadını çıkarın. ",
    image: "/slider-2.jpg",
  },
  {
    id: 3,
    title: "Lezzet, eğlence ve anıların buluşma noktası.",
    image: "/slider-3.jpg",
  },
  {
    id: 4,
    title:
      "Eğlencenin kalbinin attığı, enerjisi yüksek bir ortamda buluşuyoruz.",
    image: "/slider-4.jpg",
  },
  {
    id: 5,
    title: "BETTER DAYS BETTER DAYS ",
    image: "/slider-5.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-16 md:mt-24">
      {/* Slider Content */}
      <div className="relative  flex gap-1 flex-col h-[calc(100vh-4rem)] md:h-[calc(100vh-6rem)] lg:flex-row">
        {/* TEXT CONTAINER */}
        <div className="flex flex-1 items-center justify-center flex-col gap-8 font-extrabold text-yellow-100 relative">
          {/* Video Container */}
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 z-0 object-cover w-full h-full"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className=" z-10 text-3xl text-center uppercase p-4 md:p-10 md:text-4xl xl:text-5xl">
            {data[currentSlide].title}
          </h1>
          <button className="z-10 bg-red-600 text-white font-bold py-2 px-3 rounded-bl-3xl rounded-tr-3xl hover:scale-105 transition-all duration-500">
            Menü için tıklayınız
          </button>
        </div>

        {/* IMAGE CONTAINER */}
        <div className="w-full flex-1 relative">
          <Image
            src={data[currentSlide].image}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
