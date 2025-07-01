"use client";

import { useState } from "react";

const ResuableButton=({
  children,
  variant = "primary",
  onClick,
}) =>{
  const [clicked, setClicked] = useState(false);

  const styles = {
    primary: {
      backgroundColor: clicked ? "#1d4ed8" : "#2563eb",
      color: "white",
      border: "none",
    },
    secondary: {
      backgroundColor: clicked ? "#d1d5db" : "#e5e7eb",
      color: "#111827",
      border: "1px solid #d1d5db",
    },
    danger: {
      backgroundColor: clicked ? "#b91c1c" : "#dc2626",
      color: "white",
      border: "none",
    },
  };

  const handleClick = (e) => {
    setClicked(true);
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        ...styles[variant],
        padding: "10px 16px",
        borderRadius: "4px",
        cursor: "pointer",
        fontWeight: "500",
        marginRight: "8px",
      }}
    >
      {children}
    </button>
  );
}

export default ResuableButton;