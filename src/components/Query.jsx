"use client";
import { useState } from "react";

const Query = () => {
  const [searchWord, setSearchWord] = useState("");

  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes",
    "Watermelon",
    "Strawberry",
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h3>Search Filter</h3>
      
      <input
        type="text"
        placeholder="Search items..."
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        style={{
          padding: "8px",
          width: "100%",
          marginBottom: "16px",
        }}
      />

      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
};

export default Query;
