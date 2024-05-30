import Image from "next/image";
import React from "react";

const Landing = () => {
  return (
    <div className="relative w-full h-screen">
      <Image src="/landingBg.jpg" alt="" fill objectFit="cover" />
    </div>
  );
};

export default Landing;
