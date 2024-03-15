"use client";

import { createContext, useContext } from "react";

import useLocalStorage from "@/hooks/use-local-storage";

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

interface ShoppingCartContext {
  getItemQuantity: (id: string) => number;
  increaseCartQuantity: (item: CartItem) => void;
  decreaseCartQuantity: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  cartQuantity: number;
  cartItems: CartItem[];
}

interface CartItem extends IMenu {
  quantity: number;
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getItemQuantity = (id: string) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const decreaseCartQuantity = (item: CartItem) => {
    setCartItems((currItems) => {
      const existingItem = currItems.find((i) => i.id === item.id);
      if (existingItem && existingItem.quantity > 1) {
        return currItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        );
      } else {
        return currItems.filter((i) => i.id !== item.id);
      }
    });
  };

  const increaseCartQuantity = (item: CartItem) => {
    setCartItems((currItems) => {
      const existingItem = currItems.find((i) => i.id === item.id);
      if (existingItem) {
        return currItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...currItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (item: CartItem) => {
    setCartItems((currItems) => {
      return currItems.filter((i) => i.id !== item.id);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        decreaseCartQuantity,
        increaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
