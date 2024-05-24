import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-bg-gold flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">
        BETTER DAYS
      </Link>
      <p>© ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;