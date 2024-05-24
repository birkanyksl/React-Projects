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
          alt=""
          width={32}
          height={32}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={24}
          height={24}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="bg-bg-gold text-white font-bold absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex gap-8 flex-col items-center justify-center text-3xl z-10 ">
          {links.map((item) => (
            <div
              key={item.id}
              className="hover:text-red-600 transition-colors duration-300"
            >
              <Link href={item.url} onClick={() => setOpen(false)}>
                {item.title}
              </Link>
            </div>
          ))}
          {!user ? (
            <div className="hover:text-red-600 hover: transition-colors duration-300">
              <Link href="/login" onClick={() => setOpen(false)}>
                Login
              </Link>
            </div>
          ) : (
            <div className="hover:text-red-600 transition-colors duration-300">
              <Link href="/orders" onClick={() => setOpen(false)}>
                Orders
              </Link>
            </div>
          )}

          <div
            className="hover:text-red-600 transition-colors duration-300"
            onClick={() => setOpen(false)}
          >
            {<CartIcon />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
