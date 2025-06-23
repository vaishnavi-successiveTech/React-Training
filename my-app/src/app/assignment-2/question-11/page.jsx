"use client";

import { CartProvider } from "./CartContext";
import ProductList from "@/components/ProductList";

import ProductCart from "@/components/ProductCart";

export default function Question11Page() {
  return (
    <CartProvider>
      <h2>Assignment-2: Question-11</h2>
      <ProductList />
      <hr />
      <ProductCart/>
    </CartProvider>
  );
}
