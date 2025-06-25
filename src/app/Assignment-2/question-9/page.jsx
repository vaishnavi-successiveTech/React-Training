
"use client";

import { SwitchTheme } from "@/components";
import { ThemeProvider } from "@/context/ThemeContext";

const Question9=()=> {
  return (
    <ThemeProvider>
      <h2>Assignment-2: Question-9</h2>
      <SwitchTheme />
    </ThemeProvider>
  );
}
export default Question9;