// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div style={{ padding: "20px" }}>
          <h1>Next.js Assignment Portal</h1>
          <nav className="assignment-nav">
            <Link href="/Assignment-1">
              <button>Assignment-1</button>
            </Link>{" "}
            <Link href="/Assignment-2">
              <button>Assignment-2</button>
            </Link>{" "}
            <Link href="/Assignment-3">
              <button>Assignment-3</button>
            </Link>
            {/* Add more assignments as needed */}
          </nav>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
