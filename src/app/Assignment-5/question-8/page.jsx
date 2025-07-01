// "use client";
// import ResuableButton from "@/components/ResuableButton";

// export default function ButtonDemo() {
//   const handlePrimaryClick = () => {
//     alert("Primary button clicked!");
//   };

//   const handleSecondaryClick = () => {
//     alert("Secondary button clicked!");
//   };

//   const handleDangerClick = () => {
//     alert("Danger button clicked!");
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Reusable Button Demo</h2>
//       <ResuableButton variant="primary" onClick={handlePrimaryClick}>
//         Primary
//       </ResuableButton>
//       <ResuableButton variant="secondary" onClick={handleSecondaryClick}>
//         Secondary
//       </ResuableButton>
//       <ResuableButton variant="danger" onClick={handleDangerClick}>
//         Danger
//       </ResuableButton>
//     </div>
//   );
// }
"use client";

import ResuableButton from "@/components/ResuableButton";

const HomePage=()=> {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Reusable Button Demo</h2>
      <ResuableButton variant="primary" onClick={() => alert("Primary clicked!")}>
        Primary
      </ResuableButton>
      <ResuableButton variant="secondary" onClick={() => alert("Secondary clicked!")}>
        Secondary
      </ResuableButton>
      <ResuableButton variant="danger" onClick={() => alert("Danger clicked!")}>
        Danger
      </ResuableButton>
    </div>
  );
}
export default HomePage;
