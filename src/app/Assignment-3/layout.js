// app/Assignment-3/layout.js
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Assignment-3",
  description: "Next.js Assignment-3 Layout",
};

const buttonStyle = {
  backgroundColor: "#3b82f6",
  color: "white",
  padding: "10px 16px",
  border: "none",
  borderRadius: "6px",
  textAlign: "left",
  fontWeight: "500",
  cursor: "pointer",
  marginRight: "10px",
  marginBottom: "10px",
};

const Assignment3Layout = ({ children }) => {
  return (
    <div
      style={{
        fontFamily: "sans-serif", // optional: or use geistSans.variable
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "16px", color: "#333" }}>
        Next.js Assignment-3
      </h2>
      <div style={{ marginBottom: "20px" }}>
        
        <div className="parent-button">
        <Link href="/Assignment-3/question-1">
          <button>Question-1</button>
        </Link>{"  "}
        <Link href="/Assignment-3/question-3">
          <button>Question-3</button>
        </Link>{"  "}
        <Link href="/Assignment-3/dashboard">
          <button>Question-3</button>
        </Link>{"  "}
        <Link href="/Assignment-3/question-6">
          <button>Question-6</button>
        </Link>{"  "}
        </div>
        
      </div>

      <hr style={{ marginBottom: "20px" }} />

      {children}
    </div>
  );
};

export default Assignment3Layout;
