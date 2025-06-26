// import { ChildComponent } from "@/components";


// import { AuthContextProvider } from "@/context/AuthContext";
// export default function Home() {
//   return (
//     <div>
//       <p>
//         1.create two components: a parent component that acts as a provider and
//         a child component that consumes the context. Create a context to manage
//         a user's authentication status logged in or out. Implement a login
//         button in the child component that, when clicked, updates the
//         authentication status in the context to "logged in." Display a message
//         in the child component based on the user's authentication status. If the
//         user is logged in, show "Welcome, username!" Otherwise, display "Please
//         log in."
//       </p>
//       <AuthContextProvider>
//         <ChildComponent/>
//       </AuthContextProvider>

//     </div>
//   );
// }

"use client";
import { AuthContextProvider } from "@/context/AuthContext"; // Adjust the path if needed
import ChildComponent from "@/components/ChildComponent"; // Adjust the path if needed
import Login from "@/components/Login";

const Page=()=> {
  return (
    <>
  
       <Login />
    
    </>
  );
}

export default Page;