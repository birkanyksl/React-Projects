import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="fixed top-0 left-0 mb-16 w-full h-16 md:h-24 font-bold bg-transparent text-black p-4 flex items-center justify-between  lg:px-12 xl:px-40 border-b-2 z-50">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1 uppercase">
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
          Gallery
        </Link>
        <Link href="/" className="hover:scale-105 transition-all duration-500">
          Contact
        </Link>
      </div>
      {/* LOGO */}
      <div className="flex-1 flex justify-start md:justify-center items-center">
        <Link href="/">
          <div className="h-full flex items-center ">
            <Image
              src="/betterdayslogo.png"
              alt="Logo"
              width={100}
              height={100}
              className="h-auto w-auto max-h-12 md:max-h-24 p-1"
            />
            <span className="ml-2 text-md md:hidden">To Better Days...</span>
          </div>
        </Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1 uppercase">
        <div className=" hidden lg:flex items-center gap-2 cursor-pointer bg-black px-1 rounded-md">
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
