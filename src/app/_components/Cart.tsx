import { MdClose } from "react-icons/md";
import { useAppContext } from "../_contexts/AppContext";
import { MdDelete } from "react-icons/md";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const Cart = () => {
  const { setCartOpen, cartItems, updateQuantity, removeItemsFromCart } =
    useAppContext();

  const handleCloseCart = () => {
    setCartOpen(false);
  };

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div
      className={`${poppins.className} z-50 p-8 flex flex-col gap-12 bg-[var(--cartbg)] text-[var(--foreground)] backdrop-saturate-150 max-w-xl w-full shadow-2xl rounded-2xl absolute top-17 lg:top-15 right-0 ease-in-out"`}
    >
      <div className="flex justify-between items-center pb-2">
        <h2 className="text-lg lg:text-xl font-semibold">Shopping Cart</h2>
        <button
          onClick={handleCloseCart}
          className="text-xl lg:text-2xl cursor-pointer"
        >
          <MdClose />
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-lg lg:text-xl">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 max-h-[250px] lg:max-h-[405px] overflow-y-auto">
            {cartItems.map((item) => (
              <div
                key={`item-${item.id}`}
                className="flex items-center justify-between pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-[14px] lg:text-[18px] font-medium">
                      {item.name}
                    </h3>
                    <p className="text-[12px] lg:text-[14px]">
                      ₹{item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center lg:gap-2 text-[12px] lg:text-[18px] ml-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="px-2 py-1 border border-[var(--foreground)] rounded-lg"
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    disabled={item.quantity >= 10}
                    className="px-2 py-1 border border-[var(--foreground)] rounded-lg"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItemsFromCart(item.id)}
                    className="ml-4 text-red-500 text-lg lg:text-2xl"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center pt-4 border-t font-semibold">
            <span>Total:</span>
            <span>₹{getTotal().toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
