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
      <h2 style={{ marginBottom: "16px", color: "#333"  }}>
        Next.js Assignment-3
      </h2>
      <div style={{ marginBottom: "20px" , display:"flex", padding:"2px" }}>
      <div className="parent-button">
<div className="parent-button">
   {(() => { // iife is used.
    const links = [];
    for (let i = 1; i <= 6; i++) {
      links.push(
        <Link key={i} href={`/Assignment-3/question-${i}`}>
          <button style={{ marginRight:10}}>Ques-{i}</button> 
        </Link>
      );
    }
    return links;
  })()}
</div>
</div>
      </div>
      <hr style={{ marginBottom: "20px" }} />
      {children}
    </div>
  );
};
export default Assignment3Layout;
