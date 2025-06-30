// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css"; 

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
    <html >
      <body >
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            fontFamily: "var(--font-geist-sans)",
          }}
        >
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
            <h2 style={{ fontSize: "22px", marginBottom: "20px" }}>Assignments</h2>
            <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
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
              {/* <Link href="/Assignment-3">
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
        </div>
      </body>
    </html>
  );
}
