import Image from "next/image";
import React from "react";

const Notification = () => {
  return (
    <div className="relative h-12 px-4 py-4 flex gap-2 items-center justify-center text-center text-xs md:text-sm cursor-pointer border-2">
      {/* <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Overlay for Content */}
      <div className="relative z-10 flex items-center">
        <span className=" p-1 rounded">
          İndirim ve etkinlikler için sosyal medya hesaplarımızı takip edin
        </span>
        <Image
          src="/notification.png"
          alt="Notification Icon"
          width={20}
          height={20}
          className="rounded p-1"
        />
      </div>
    </div>
  );
};

export default Notification;
