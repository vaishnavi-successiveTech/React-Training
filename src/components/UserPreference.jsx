"use client";

import { useLocalStorage } from "@/hooks";
import { useState } from "react";
const UserPreference=()=> {
  const [name, setNameInput] = useState("");
  const [storedName, setName, removeName] = useLocalStorage("username", "");
  return (
    <div>
      <h2>Store Data in Local storage</h2>
      <div style={{ display:"flex",justifyContent:"center",alignItems:"center",marginBottom: "10px" }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setNameInput(e.target.value)}
        placeholder="Enter your name"
      />
      </div>
     <div style={{ display:"flex",justifyContent:"center",alignItems:"center",marginBottom: "10px" }}>
     
      <button onClick={() => setName(name)}>Save Name</button>
      <button onClick={removeName}>Remove Name</button>
      </div>
      {storedName && (
        <p>
          Welcome back, <strong>{storedName}</strong>!
        </p>
      )}
    </div>
  );
}
export default  UserPreference;