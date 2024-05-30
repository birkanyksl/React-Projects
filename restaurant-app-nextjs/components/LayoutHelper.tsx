"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

const LayoutHelper = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return !isHomePage ? <Navbar /> : null;
};

export default LayoutHelper;
