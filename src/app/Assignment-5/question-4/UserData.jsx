"use client";

import fetchProducts from "@/app/Assignment-5/question-4/Action";
import { useEffect, useState } from "react";

const UserData=()=> {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const limit = 5;

  useEffect(() => {
    const load = async () => {
      const { products, total } = await fetchProducts({ page, limit });
      setProducts(products);
      setTotal(total);
    };
    load();
  }, [page]);

  const totalPages = Math.ceil(total / limit);
  return (
    <div style={{ padding: "20px" }}>
      <h2>Products (Page {page})</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong> - ${p.price}
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "10px" }}>
        <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {page} of {totalPages}
        </span>
        <button disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}
export default UserData;
