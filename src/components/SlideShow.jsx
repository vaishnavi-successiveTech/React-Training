
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const imageList = [
  "/Images/education.jpeg",
  "/Images/girl.jpg",
  "/Images/image-1.jpeg",
  "/Images/image-3.jpg",
  "/Images/image-4.jpg",
  "/Images/image-5.jpeg",
  "/Images/Image-7.jpeg",
  "/Images/image-8.jpeg",
  "/Images/images-9.jpeg",
];

const SlideShow = () => {
  const [index, setIndex] = useState(0);
  const [play, setPlay] = useState(true);

  useEffect(() => {
    let slideInterval;
    if (play) {
      slideInterval = setInterval(() => {
        setIndex((preIndex) => (preIndex < imageList.length - 1 ? preIndex + 1 : 0));
      }, 3000);
    }
    return () => clearInterval(slideInterval);
  }, [play]);

  return (
    <div style={{ width: "600px", margin: "0 auto" }}>
      <div style={{ position: "relative", width: "100%", height: "400px" }}>
        <Image
          src={imageList[index]}
          

          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button
          onClick={() => setPlay((prev) => !prev)}
          style={{
            padding: "8px 16px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "5px",
            border: "1px solid #333",
            backgroundColor: play ? "#f44336" : "#4caf50",
            color: "#fff",
          }}
        >
          {play ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default SlideShow;
