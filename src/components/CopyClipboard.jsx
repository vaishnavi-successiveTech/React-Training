// src/components/CopyClipboard.jsx
"use client";

import useClipboard from "@/hooks/useClipboard";

export default function CopyClipboard() {
  const textToCopy = "This is copied using execCommand!";
  const { copied, copyToClipboard } = useClipboard(textToCopy);

  return (
    <div>
      <p>{textToCopy}</p>
      <button onClick={copyToClipboard}>Copy</button>
      {copied && <p style={{ color: "green" }}>Copied!</p>}
    </div>
  );
  
}
