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
        fontFamily: "sans-serif", 
        padding: "20px",
      }}  >
      <h2 style={{ marginBottom: "16px", color: "#333" }}>
        Next.js Assignment-3
      </h2>
      <div style={{ marginBottom: "20px" }}>
      <div className="parent-button">
<div className="parent-button">
  <Link href="/Assignment-3/question-1">
    <button>Ques-1</button>
  </Link>
  <Link href="/Assignment-3/question-2">
    <button>Ques-2</button>
  </Link>
  <Link href="/Assignment-3/question-3">
    <button>Ques-3</button>
  </Link>
  <Link href="/Assignment-3/question-4">
    <button>Ques-4</button>
  </Link>
  <Link href="/Assignment-3/dashboard">
    <button>Ques-5</button>
  </Link>
  <Link href="/Assignment-3/question-6">
    <button>Ques-6</button>
  </Link>
</div>
</div>
      </div>
      <hr style={{ marginBottom: "20px" }} />
      {children}
    </div>
  );
};
export default Assignment3Layout;
