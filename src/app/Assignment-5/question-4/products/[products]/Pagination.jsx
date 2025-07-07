"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({ currentPage, totalPages }) => {
  const router = useRouter();
  const current = parseInt(currentPage);

  const handleButton = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      router.push(`/Assignment-5/question-4/products/${pageNumber}`);
    }
  };

  const buttonStyle = {
    padding: "8px 16px",
    margin: "0 8px",
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#999",
    cursor: "not-allowed",
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    marginTop: "20px",

  };

  const pageInfoStyle = {
    fontSize: "16px",
    minWidth: "100px",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <button
        onClick={() => handleButton(current - 1)}
        disabled={current <= 1}
        style={current <= 1 ? disabledButtonStyle : buttonStyle}
      >
        Prev
      </button>

      <p style={pageInfoStyle}>
        {current} of {totalPages}
      </p>

      <button
        onClick={() => handleButton(current + 1)}
        disabled={current >= totalPages}
        style={current >= totalPages ? disabledButtonStyle : buttonStyle}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
