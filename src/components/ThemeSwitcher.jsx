//  9.Create a theme switcher application using the useContext hook.
// Create a context to manage the current theme (e.g., light or dark).
// Provide a button to toggle between the two themes.
// Use the useContext hook to access the theme value and update it.
// Apply different styles and colors to components based on the selected theme.

"use client";
import { ThemeContext } from "@/context";
import { useContext, useEffect } from "react";
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div style={{ padding: "16px" }}>
      {/* <h3 style={{ marginBottom: "10px" }}>Current Theme: {theme}</h3> */}
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: "#0ea5e9",
          color: "white",
          padding: "10px 16px",
          border: "none",
          borderRadius: "6px",
          fontWeight: "500",
          cursor: "pointer",
          width: "auto",
          textAlign: "left",

          maxWidth:"100"


        }}
      >
        Switch Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
