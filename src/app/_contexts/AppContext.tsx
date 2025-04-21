"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import toast from "react-hot-toast";

export interface Product {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface AppContextType {
  cartOpen: boolean;
  setCartOpen: (value: boolean) => void;
  cartItems: CartItem[];
  addItemsToCart: (product: Product) => void;
  removeItemsFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppContextProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // add items to the cart
  const addItemsToCart = (product: Product) => {
    let shouldShowToast = false;

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        if (existingItem.quantity >= 10) {
          shouldShowToast = true;
          return prevItems;
        }

        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    if (shouldShowToast) {
      toast.dismiss();
      toast.error("Maximum quantity for one product is 10");
    }
  };

  // delete the product
  const removeItemsFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
    toast.dismiss();
    toast.success("Product Removed");
  };

  // increase and decrease product quantity
  const updateQuantity = (productId: number, quantity: number) => {
    toast.dismiss();

    if (quantity < 1) {
      toast.error("Minimum quantity is 1");
      return;
    }

    if (quantity > 10) {
      toast.error("Maximum quantity is 10");
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        cartOpen,
        setCartOpen,
        cartItems,
        addItemsToCart,
        removeItemsFromCart,
        updateQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppContextProvider");
  }
  return context;
};

export default AppContextProvider;
