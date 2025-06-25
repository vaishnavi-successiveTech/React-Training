"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCart=()=> {
  const { cartItems, removeFromCart, totalPrice } = useContext(CartContext);

  return (
    <div>
      <h3>Cart</h3>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.name} - Quantity: <button onClick={item.quantity+1}> +</button>{item.quantity} <button onClick={item.quantity-1}>-</button>| ₹{item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h4>Total: ₹{totalPrice}</h4>
    </div>
  );

}
export default ProductCart;
