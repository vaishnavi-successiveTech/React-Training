// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
<<<<<<< HEAD
import "./globals.css";

import { ChildComponent, ThemeSwitcher } from "@/components";
import ThemeProvider from "@/context/ThemeContext";
import { AuthContextProvider } from "@/context/AuthContext";


=======
import "./globals.css"; 
>>>>>>> a329dfdc244b51c9ec3d98a3139c4efac550c8c2

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js Assignments",
  description: "Multiple assignments using Next.js",
};

export default function RootLayout({ children }) {
  return (
<<<<<<< HEAD
    <html>
      <body>
=======
    <html >
      <body >
>>>>>>> a329dfdc244b51c9ec3d98a3139c4efac550c8c2
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            fontFamily: "var(--font-geist-sans)",
          }}
        >
          {/* Sidebar */}
          <aside
            style={{
              width: "240px",
              backgroundColor: "#1e293b",
              color: "white",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
<<<<<<< HEAD
            <h2 style={{ fontSize: "22px", marginBottom: "20px" }}>
              Assignments
            </h2>
            <nav
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <Link href="/">
               <button
                  style={{
                    backgroundColor: "#3b82f6",
                    color: "white",
                    padding: "10px 16px",
                    border: "none",
                    borderRadius: "6px",
                    textAlign: "left",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}>Home</button>
              </Link>

             

=======
            <h2 style={{ fontSize: "22px", marginBottom: "20px" }}>Assignments</h2>
            <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
>>>>>>> a329dfdc244b51c9ec3d98a3139c4efac550c8c2
              <Link href="/Assignment-1">
                <button
                  style={{
                    backgroundColor: "#3b82f6",
                    color: "white",
                    padding: "10px 16px",
                    border: "none",
                    borderRadius: "6px",
                    textAlign: "left",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  Assignment 1
                </button>
              </Link>
              <Link href="/Assignment-2">
                <button
                  style={{
                    backgroundColor: "#3b82f6",
                    color: "white",
                    padding: "10px 16px",
                    border: "none",
                    borderRadius: "6px",
                    textAlign: "left",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  Assignment 2
                </button>
              </Link>
<<<<<<< HEAD
              <Link href="/Assignment-3">
=======
              {/* <Link href="/Assignment-3">
>>>>>>> a329dfdc244b51c9ec3d98a3139c4efac550c8c2
                <button
                  style={{
                    backgroundColor: "#3b82f6",
                    color: "white",
                    padding: "10px 16px",
                    border: "none",
                    borderRadius: "6px",
                    textAlign: "left",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  Assignment 3
<<<<<<< HEAD
                </button>
              </Link>
              <Link href="/about">
                <button
                  style={{
                    backgroundColor: "#3b82f6",
                    color: "white",
                    padding: "10px 16px",
                    border: "none",
                    borderRadius: "6px",
                    textAlign: "left",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  About
                </button>
              </Link>
              <Link href="/Assignment-3/dashboard">
  <button style={buttonStyle}>Dashboard</button>
</Link>

            </nav>
            
          </aside>
          <ThemeProvider>
           <ThemeSwitcher/>
           <AuthContextProvider>
      
       {children}
     </AuthContextProvider>
        
          </ThemeProvider>

         
=======
                </button> */}
              {/* </Link> */}
            </nav>
          </aside>

          {/* Main Content */}
          <main
            style={{
              flex: 1,
              padding: "40px",
              backgroundColor: "#f4f6f8",
            }}
          >
            {children}
          </main>
>>>>>>> a329dfdc244b51c9ec3d98a3139c4efac550c8c2
        </div>
      </body>
    </html>
  );
}
export const buttonStyle = {
  backgroundColor: "#3b82f6",
  color: "white",
  padding: "10px 16px",
  border: "none",
  borderRadius: "6px",
  textAlign: "left",
  fontWeight: "500",
  cursor: "pointer",
  marginBottom: "10px",
};

