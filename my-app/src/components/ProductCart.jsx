"use client";

import { useContext } from "react";
import { CartContext } from "../app/assignment-2/question-11/CartContext";

export default function ProductCart() {
  const { cartItems, removeFromCart, totalPrice } = useContext(CartContext);

  return (
    <div>
      <h3>Cart</h3>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.name} - ₹{item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h4>Total: ₹{totalPrice}</h4>
    </div>
  );
}
