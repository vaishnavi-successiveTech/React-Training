"use client";

import { createContext, useState } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };


  const removeFromCart = (id) => {
    const index = cartItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      const updatedItems = [...cartItems];
      updatedItems.splice(index, 1);
      setCartItems(updatedItems);
    }
  };


  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
