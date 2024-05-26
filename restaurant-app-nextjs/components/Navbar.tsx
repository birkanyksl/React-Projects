import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-16 md:h-24 font-bold bg-white text-black p-4 flex items-center justify-between uppercase lg:px-12 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/" className="hover:scale-105 transition-all duration-500">
          Homepage
        </Link>
        <Link
          href="/menu"
          className="hover:scale-105 transition-all duration-500"
        >
          Menu
        </Link>
        <Link href="/" className="hover:scale-105 transition-all duration-500">
          Contact
        </Link>
      </div>
      {/* LOGO */}
      <div className="flex-1 flex justify-start md:justify-center items-center">
        <Link href="/">
          <div className="h-full flex items-center">
            <Image
              src="/betterdayslogo.png"
              alt="Logo"
              width={100}
              height={100}
              className="h-auto w-auto max-h-12 md:max-h-24"
            />
            <span className="ml-2 text-lg md:hidden">BETTER DAYS</span>
          </div>
        </Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 right-2 lg:static flex items-center gap-2 cursor-pointer bg-red-600 px-1 rounded-md">
          <Image src="/phone.png" alt="Phone" width={20} height={20} />
          <span className="text-white">123 456 78</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
