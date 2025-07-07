import Link from "next/link";

const ErrorPage404=()=>{
    return( <div
      style={{
        display:"flex",
        
        fontFamily: "sans-serif",
        padding: "20px",
      }}
    >
     <h1> Error 404</h1>
     <Link  href={"/"}> Back to Home </Link>
    </div>)
}

export default ErrorPage404;
