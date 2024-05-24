import Image from "next/image";
import React from "react";

const Notification = () => {
  return (
    <div className="h-12 bg-gold text-white px-4 py-4 flex gap-2 items-center justify-center text-center text-sm md:text-base cursor-pointer">
      <Image src="/notification.png" alt="" width={20} height={20} />
      <span>Enjoy exclusive discounts on your favorite items today</span>
    </div>
  );
};

export default Notification;
