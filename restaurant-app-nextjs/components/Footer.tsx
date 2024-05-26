import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-5 md:h-10 p-4 text-xs text-black bg-white flex items-center justify-between">
      <Link href="/" className="font-bold text-sm">
        BETTER DAYS
      </Link>
      <p>© ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;
