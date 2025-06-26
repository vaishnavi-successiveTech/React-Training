"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "@/context/ParentComponent";

export default function AboutPage() {
  const { loggIn } = useLogin();
  const router = useRouter();

  useEffect(() => {
    if (!loggIn) {
      router.push("/Assignment-3/question-4/login");
    }
  }, [loggIn]);

  if (!loggIn) return null;

  return (
    <div>
      <h2>About Page</h2>
      <p>This page is protected. Only visible after logging in.</p>
    </div>
  );
}
