"use client";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const Footer = () => {
  return (
    <div className="w-full h-full text-[var(--foreground)] px-12 pb-8 lg:pt-12 mt-0 lg:mt-8 shadow-md">
      <div className={`${inter.className}flex flex-col border-t border-black items-center py-4 text-[12px]`}>
        <p>© 2025 Crat-On. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
