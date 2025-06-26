// app/assignment-3/dashboard/home/page.jsx
"use client"

const { default: Profile } = require("@/components/Profile")

const Home=()=>{
  return(
    <div>
  <Profile/>
  </div>
  )
}

export default Home;
// import Profile from "@/components/Profile";
// import { useAuth } from "@/context/AuthContext";
// import { redirect } from "next/navigation";

// const Home = () => {
//   const { loggedIn } = useAuth();

//   if (!loggedIn) {
//     redirect("/assignment-3/dashboard/login"); // server-side redirect
//   }

//   return (
//     <div>
//       <Profile />
//     </div>
//   );
// };

// export default Home;
