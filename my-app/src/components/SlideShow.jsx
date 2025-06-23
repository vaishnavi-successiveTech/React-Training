// // 8.Use the useEffect hook to manage the current slide and transition.
// Add few images atleast 10 in public folder to populate the slideshow.
// Allow users to pause, play the slideshow.
// Include a time interval option to control the automatic slideshow progression.

// "use client";
// const { useEffect, useState } = require("react");
// import Image from "next/image";
//  const imageList = [
//     "/Images/education.jpeg",
//     "/Images/girl.jpg",
//     "/Images/image-1.jpeg",
//     "/Images/image-3.jpg",
//     "/Images/image-4.jpg",
//     "/Images/image-5.jpeg",
//     "/Images/Image-7.jpeg",
//     "/Images/image-8.jpeg",
//     "/Images/images-9.jpeg",
//   ];
// const SlideShow = () => {
 
//   const [index, setIndex] = useState(0); // for tracking the current Image
//   const [play, setPlay] = useState(true);

//   const pleasPause =()=>setPlay(false);
//   const pleasePlay=()=>setPlay(true);

//   useEffect(() => {
//     let slideInterval;
//     if (play) {
//        // check whether play is true or false. for whether user press over the add or not
//       slideInterval = setInterval(() => {
//         setIndex((preIndex)=>{
//             if (preIndex < imageList.length - 1) {
//                 return preIndex+1;}
//             else {
//                 return 0;
//             }
//         });
//     },3000);
// }
//         return()=> clearInterval(slideInterval);
// },[play]);


//   return (
//     <div style={{ width: "600px", height: "400px", position: "relative" }}>
//       <Image
//         src={imageList[index]}
//         alt="Slideshow"
//         layout="fill"
//         objectFit="cover"
//       />
//       <button
//         onClick={() => setPlay((prev) => !prev)}
//         style={{ position: "absolute", top: 10, left: 10 }}
//       >
//         {play ? "Pause" : "Play"}
//       </button>
//     </div>
//   );
// };

// export default SlideShow;

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
