"use client";

import { useContext } from "react";
import { CartContext } from "../app/assignment-2/question-11/CartContext";

const products = [
  { id: 1, name: "Apple", price: 30 },
  { id: 2, name: "Banana", price: 10 },
  { id: 3, name: "Mango", price: 50 },
];

export default function ProductList() {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h3>Products</h3>
      {products.map((item) => (
        <div key={item.id}>
          <p>{item.name} - ₹{item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
