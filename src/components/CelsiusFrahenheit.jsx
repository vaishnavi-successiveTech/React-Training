"use client";
import { useState } from "react";

const CelsiusFrahenheit = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value; // destructure the event.
    setCelsius(value);
    if (!isNaN(value) && value !== "") {
      setFahrenheit(((parseFloat(value) * 9) / 5 + 32).toFixed(2));
    } else {
      setFahrenheit("");
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (!isNaN(value) && value !== "") {
      setCelsius((((parseFloat(value) - 32) * 5) / 9).toFixed(2));
    } else {
      setCelsius("");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2> Temperature Converter</h2>

      <div style={{ marginBottom: "16px" }}>
        <label>Celsius: </label>
        <input
          type="text"
          value={celsius}
          onChange={handleCelsiusChange}
          placeholder="Enter Celsius"
          style={{ padding: "8px", width: "150px" }}
        />
      </div>

      <div>
        <label>Fahrenheit: </label>
        <input
          type="text"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          placeholder="Enter Frahenheit"
          style={{ padding: "8px", width: "150px" }}
        />
      </div>
    </div>
  );
};

export default CelsiusFrahenheit;
