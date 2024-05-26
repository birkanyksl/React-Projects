"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt="Open Menu"
          width={32}
          height={32}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt="Close Menu"
          width={24}
          height={24}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="bg-white text-black font-bold absolute left-0 top-28 w-full h-[calc(100vh-7rem)] flex gap-8 flex-col items-center justify-center text-3xl z-20">
          {/* Background Image */}
          <div className="absolute inset-0 z-10">
            <Image
              src="/menubg.jpg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              className=" "
            />
          </div>
          {/* Menu Items */}
          <div className="relative z-20 flex flex-col items-center justify-center gap-8">
            {links.map((item) => (
              <div
                key={item.id}
                className="hover:scale-110 scale-95 transition-all  duration-300"
              >
                <Link href={item.url} onClick={() => setOpen(false)}>
                  {item.title}
                </Link>
              </div>
            ))}
            {!user ? (
              <div className=" transition-all duration-300 hover:scale-110 scale-95">
                <Link href="/login" onClick={() => setOpen(false)}>
                  Login
                </Link>
              </div>
            ) : (
              <div className=" transition-all duration-300 hover:scale-110 scale-95">
                <Link href="/orders" onClick={() => setOpen(false)}>
                  Orders
                </Link>
              </div>
            )}
            <div
              className=" transition-all duration-300 hover:scale-110 scale-95"
              onClick={() => setOpen(false)}
            >
              <CartIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
