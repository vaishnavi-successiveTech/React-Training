// app/layout.js
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar"; 

// If you use any context, import it:
// import ThemeProvider from "@/context/ThemeContext";
// import { AuthContextProvider } from "@/context/AuthContext";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Next.js Assignments",
  description: "Multiple assignments using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "var(--font-geist-sans)",
          backgroundColor: "#f4f6f8",
        }}
      >
        {/* If you want to wrap with providers, uncomment these lines: */}
        {/* <ThemeProvider> */}
        {/* <AuthContextProvider> */}
        <div style={{ display: "flex", minHeight: "100vh" }}>
          <Sidebar />
          <main
            style={{
              flex: 1,
              padding: "24px",
              overflow: "auto",
            }}
          >
            {children}
          </main>
        </div>
        {/* </AuthContextProvider> */}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
