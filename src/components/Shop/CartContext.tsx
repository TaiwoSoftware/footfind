import React, { createContext, useContext, useState } from "react";
import { ProductProps } from "./ProductInterface";

interface CartContextType {
  cartItems: ProductProps[];
  addToCart: (product: ProductProps) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ProductProps[]>([]);

  const addToCart = (product: ProductProps) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
