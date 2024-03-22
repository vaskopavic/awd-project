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
  cartTotal: number;
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
    (quantity: number, item: CartItem) => item.quantity + quantity,
    0
  );

  const cartTotal = cartItems
    .reduce(
      (total: number, item: CartItem) => item.price * item.quantity + total,
      2.49
    )
    .toFixed(2) as unknown as number;

  const getItemQuantity = (id: string): number => {
    return cartItems.find((item: CartItem) => item.id === id)?.quantity || 0;
  };

  const decreaseCartQuantity = (item: CartItem): void => {
    setCartItems((currItems: CartItem[]) => {
      const existingItem = currItems.find((i: CartItem) => i.id === item.id);
      if (existingItem && existingItem.quantity > 1) {
        return currItems.map((i: CartItem) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        );
      } else {
        return currItems.filter((i: CartItem) => i.id !== item.id);
      }
    });
  };

  const increaseCartQuantity = (item: CartItem): void => {
    setCartItems((currItems: CartItem[]) => {
      const existingItem = currItems.find((i: CartItem) => i.id === item.id);
      if (existingItem) {
        return currItems.map((i: CartItem) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...currItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (item: CartItem): void => {
    setCartItems((currItems: CartItem[]) => {
      return currItems.filter((i: CartItem) => i.id !== item.id);
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
        cartTotal,
        cartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
