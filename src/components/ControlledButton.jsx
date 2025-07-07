"use client";
import { useState } from "react";

const ControlledButton = () => {
  const [inputValue, setInputValue] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    if (inputValue.toLowerCase() === "show") {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "50px auto" }}>
        <p> Please Type "show" to watch hidden message  </p>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter here Show"
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
      />
      <button onClick={handleClick} style={{ padding: "8px", width: "100%" }}>
        Submit
      </button>

      {showMessage && <p style={{ marginTop: "10px" }}> You typed "show"!</p>}
    </div>
  );
};

export default ControlledButton;
