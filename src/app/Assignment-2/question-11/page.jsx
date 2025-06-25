"use client";

import { ProductCart, ProductList } from "@/components";
import CartProvider from "@/context/CartContext";
const Question11Page=()=> {
  return (
    <CartProvider>
      <h2>Assignment-2: Question-11</h2>
      <ProductList />
      <hr />
      <ProductCart/>
    </CartProvider>
  );
}
export default  Question11Page;
