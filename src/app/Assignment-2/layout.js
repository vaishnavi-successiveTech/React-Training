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
  title: "Assignment-2",
  description: "Next.js Assignment-2 Layout",
};

const Assignment2Layout = ({ children }) => {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "16px", color: "#333" }}>
        Next.js Assignment-2
      </h2>

      <div
        className="parent-button"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <div>
  {(() => { // iife is used.
    const links = [];
    for (let i = 1; i <= 19; i++) {
      links.push(
        <Link key={i} href={`/Assignment-2/question-${i}`}>
          <button>Ques-{i}</button> {"  "}
        </Link>
      );
    }
    return links;
  })()}
</div>

      </div>

      <hr style={{ marginBottom: "20px" }} />
      {children}
    </div>
  );
};

export default Assignment2Layout;
