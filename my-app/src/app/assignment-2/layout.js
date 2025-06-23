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

export default function Assignment2Layout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <h2>Next.js Assignment-2</h2>
        <div className="parent-button">
          <Link href="/assignment-2/question-1"><button>Ques-1</button></Link>
          <Link href="/assignment-2/question-2"><button>Ques-2</button></Link>
          <Link href="/assignment-2/question-3"><button>Ques-3</button></Link>
          <Link href="/assignment-2/question-4"><button>Ques-4</button></Link>
          <Link href="/assignment-2/question-5"><button>Ques-5</button></Link>
          <Link href="/assignment-2/question-6"><button>Ques-6</button></Link>
          <Link href="/assignment-2/question-7"><button>Ques-7</button></Link>
          <Link href="/assignment-2/question-8"><button>Ques-8</button></Link>
          <Link href="/assignment-2/question-9"><button>Ques-9</button></Link>
          <Link href="/assignment-2/question-10"><button>Ques-10</button></Link>
            <Link href="/assignment-2/question-11"><button>Ques-11</button></Link>{"  "}
             <Link href="/assignment-2/question-12"><button>Ques-12</button></Link>
              <Link href="/assignment-2/question-13"><button>Ques-13</button></Link>
               <Link href="/assignment-2/question-14"><button>Ques-14</button></Link>
                <Link href="/assignment-2/question-15"><button>Ques-15</button></Link>
                 <Link href="/assignment-2/question-16"><button>Ques-16</button></Link> 
                 <Link href="/assignment-2/question-17"><button>Ques-17</button></Link> 
                 <Link href="/assignment-2/question-18"><button>Ques-18</button></Link>
                  <Link href="/assignment-2/question-19"><button>Ques-19</button></Link>
        </div>
        <hr />
        {children}
      </body>
    </html>
  );
}
