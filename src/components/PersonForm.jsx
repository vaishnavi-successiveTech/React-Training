"use client";

import { useState } from "react";

const PersonForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "300px",
          margin: "20px auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          gap: "10px",
        }}
      >
        <label>First Name:</label>
        <input
          value={firstName}
          placeholder="Enter your first name"
          onChange={(e) => setFirstName(e.target.value)}
          style={{ padding: "6px", borderRadius: "4px", border: "1px solid #aaa" }}
        />

        <label>Last Name:</label>
        <input
          value={lastName}
          placeholder="Enter your last name"
          onChange={(e) => setLastName(e.target.value)}
          style={{ padding: "6px", borderRadius: "4px", border: "1px solid #aaa" }}
        />

        <label>Age:</label>
        <input
          value={age}
          placeholder="Enter your age"
          onChange={(e) => setAge(e.target.value)}
          style={{ padding: "6px", borderRadius: "4px", border: "1px solid #aaa" }}
        />
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Enter User Details</h2>
        <h3>First Name: {firstName}</h3>
        <h3>Last Name: {lastName}</h3>
        <h3>Age: {age}</h3>
        <p>
          Hello, my name is <strong>{firstName}</strong> and surname is{" "}
          <strong>{lastName}</strong>. My age is <strong>{age}</strong>.
        </p>
      </div>
    </>
  );
  
};

export default PersonForm;






