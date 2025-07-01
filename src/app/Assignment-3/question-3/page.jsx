"use client";
import AboutPage from "@/app/about/page";
import Link from "next/link";
import { redirect } from "next/navigation";
const Home = () => {
  return (
    <>
    <Link href={"/"} style={buttonStyle}> Home </Link>
    <Link href={"/about" } style={buttonStyle}> About </Link>
    </>
  );
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
export default Home;