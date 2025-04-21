"use client";

import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { useAppContext } from "../_contexts/AppContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

interface ProductCardProps {
  id: number;
  imgUrl: string;
  name: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imgUrl,
  name,
  description,
  price,
}) => {
  const { addItemsToCart } = useAppContext();

  const handleaddItemsToCart = () => {
    const product = { id, name, price, imgUrl, description };
    addItemsToCart(product);
  };

  return (
    <div
      className={`${poppins.className} w-78 lg:w-94 lg:min-h-108 text-[var(--foreground)] bg-[var(--cardbg)] p-4 flex flex-col gap-6 rounded-xl shadow-lg hover:scale-102 ease-in-out backdrop-blur-xl backdrop-saturate-150`}
    >
      <Image
        src={imgUrl}
        height={100}
        width={200}
        alt={name}
        className="lg:w-88 lg:h-52 rounded-lg self-center"
      />

      <p className={`${montserrat.className} self-center -mt-2 font-bold`}>
        {name}
      </p>

      <p className="text-[12px] lg:text-[18px]">{description}</p>

      <div className="flex justify-between items-center font-semibold text-[12px] lg:text-[18px]">
        <p>₹{price}</p>
        <button
          onClick={handleaddItemsToCart}
          className="cursor-pointer rounded-lg p-2 text-white bg-[var(--buttonbg)]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
