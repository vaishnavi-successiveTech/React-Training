// const { useContext } = require("react");
// import { ThemeProvider,SwitchThemeContext } from "@/components/SwitchTheme";

// function ThemeSwitcher(){
//     const{theme,toggleTheme }=useContext(SwitchThemeContext);
//     return(<div>
//         <h1>Question-9:Switch Thme </h1>
//         <p> Current Theme :{theme}</p>
//         <button  onClick={toggleTheme}>Swutch The Theme</button>
//     </div>);
// }

// export default function Switch(){
//     return(
//         <ThemeProvider>
//             <ThemeSwitcher></ThemeSwitcher>
//         </ThemeProvider>
//     )
// }

"use client";
import { ThemeProvider } from "./ThemeContext";
import SwitchTheme from "../../../components/SwitchTheme";

export default function Question9() {
  return (
    <ThemeProvider>
      <h2>Assignment-2: Question-9</h2>
      <SwitchTheme />
    </ThemeProvider>
  );
}
