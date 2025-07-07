"use client";

import React from "react";
import Button from "@mui/material/Button";
const ReusableButton = ({ children, colors = "primary", onClick }) => {
  const changeColors = {
    primary: "primary", 
    secondary: "secondary",
    danger: "error",       
  };
  return (
    <Button
      variant="contained"
      color={changeColors[colors] || "primary"}
      onClick={onClick}
      sx={{ marginRight: 1 }} // for inline styling
    >
      {children}
    </Button>
  );
};

export default ReusableButton;
