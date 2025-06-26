import { ChildComponent } from "@/components";

import { AuthContextProvider } from "@/context/AuthContext";
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

const Assignment3Layout=({ children })=> {
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
      <div>
        <div className="parent-button">
        <Link href="/Assignment-3/question-1">
          <button>Question-1</button>
        </Link>{"  "}
        <Link href="/Assignment-3/question-2">
          <button>Question-2</button>
        </Link>{"  "}
        <Link href="/Assignment-3/question-3">
          <button>Question-3</button>
        </Link>{"  "}
        {/* <Link href="/Assignment-3/question-4">
          <button>Question-4</button>
        </Link>{"  "}
        <Link href="/Assignment-3/dashboard">
          <button>Question-5</button>
        </Link>{"  "}
        <Link href="/Assignment-3/question-6">
          <button>Question-6</button>
        </Link>{"  "} */}
        
       </div>
         <hr style={{ marginBottom: "20px" }} />
        
              {children}
             
        
        </div>
    

    
    </div>
  );
}
export default Assignment3Layout;