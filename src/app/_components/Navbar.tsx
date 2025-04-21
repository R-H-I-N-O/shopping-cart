"use client";

import { Inter } from "next/font/google";
import { FaCartShopping } from "react-icons/fa6";
import { useAppContext } from "../_contexts/AppContext";
import Cart from "./Cart";
import { Poetsen_One } from "next/font/google";
import ThemeSwitcher from "./ThemeSwitcher";

const poetsenOne = Poetsen_One({
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const Navbar = () => {
  const { cartItems, cartOpen, setCartOpen } = useAppContext();

  const handleOpenCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className="w-full flex justify-center items-center pt-6">
      <div
        className={`${poetsenOne.className} w-[90%] fixed flex top-4 z-100 justify-between px-10 py-2 bg-[var(--navbackground)] backdrop-blur-md backdrop-saturate-150 text-[var(--foreground)] items-center shadow-sm tracking-tight text-2xl rounded-full`}
      >
        <p>Cart-On</p>

        <div className="flex gap-8">
          <ThemeSwitcher />
          <button
            className={`${inter.className} cursor-pointer text-2xl relative`}
            onClick={handleOpenCart}
          >
            <span className="absolute left-5 bottom-4 bg-[#FF0000] rounded-full p-1 flex items-center justify-center text-[8px]">
              {cartItems.length}
            </span>
            <FaCartShopping />
          </button>
        </div>

        {cartOpen && <Cart />}
      </div>
    </div>
  );
};

export default Navbar;
