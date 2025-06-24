
"use client";
import { SwitchTheme } from "@/components";
import { ThemeProvider } from "../../../context/ThemeContext";


export default function Question9() {
  return (
    <ThemeProvider>
      <h2>Assignment-2: Question-9</h2>
      <SwitchTheme />
    </ThemeProvider>
  );
}
