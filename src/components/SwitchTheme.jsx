//  9.Create a theme switcher application using the useContext hook.
// Create a context to manage the current theme (e.g., light or dark).
// Provide a button to toggle between the two themes.
// Use the useContext hook to access the theme value and update it.
// Apply different styles and colors to components based on the selected theme.

"use client";
import { useContext } from "react";
import { ThemeContext } from "../app/Assignment-2/question-9/ThemeContext";


export default function SwitchTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white",
    minHeight: "100vh",
    padding: "20px",}}>
      <h3>Current Theme: {theme}</h3>
      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  );
}
