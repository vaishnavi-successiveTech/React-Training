import "./globals.css";
import dynamic from "next/dynamic";

// Dynamically import client components
//const Sidebar = dynamic(() => import("@/components/Sidebar"), { ssr: false });
// const ThemeSwitcher = dynamic(() => import("@/components/ThemeSwitcher"), { ssr: false });
import { Sidebar, ThemeSwitcher } from "@/components";

import ThemeProvider from "@/context/ThemeContext";
import { AuthContextProvider } from "@/context/AuthContext";

// export const metadata = {
//   title: "Next.js Assignments",
//   description: "Multiple assignments using Next.js",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          <Sidebar />
          <div style={{ flex: 1, padding: "20px" }}>
            <ThemeProvider>
              <ThemeSwitcher />
              <AuthContextProvider>{children}</AuthContextProvider>
            </ThemeProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
