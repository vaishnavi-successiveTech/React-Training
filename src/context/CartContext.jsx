"use client";

import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev)=>{
      const exist=prev.find((items)=>items.id===product.id)

      if(exist){
        return prev.map((items)=>
          items.id===product.id
        ?{...items,quantity:items.quantity+1}:items
        )
      }
      else
      {
       return    [...prev,{...product,quantity:1}]
      }
       
    })

  };
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}
