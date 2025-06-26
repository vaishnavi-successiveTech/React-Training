"use client";

import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";

import { useState } from "react";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loggedIn, login } = useAuth();
//   const router = useRouter();

  const onSubmitHandler = (e) => {
    e.preventDefault(); // prevent form default submit reload
    login(username, password);
    setPassword("");
      redirect("/about")
  };
  return (
    <div>
      <h1>Login</h1>
      <p>{loggedIn ? `User logged in ${username} ` : "Please login"}
      </p>
       {loggedIn && (
          <button onClick={goToAbout} style={{ marginLeft: "10px" }}>
            Go to About Page
          </button>
        )}
     
      {!loggedIn && (
        <form onSubmit={onSubmitHandler}>
          <div>
            <label>
              UserName:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter UserName"
              />
            </label>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />
            </label>
          </div>
          <button type="submit">Login</button>
        </form>
      )}
      {loggedIn && <p>Welcome, {username}!</p>}
    </div>
  );
};

export default Login;

// "use client";

// import { useAuth } from "@/context/AuthContext";
// import { redirect } from "next/dist/server/api-utils";
// import { useState } from "react";

// export const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const { loggedIn, login } = useAuth();

//   const onSubmitHandler = () => {
//     e.preventDefault();
//     login(username, password);
//     setPassword("");
//     redirect("/About");
//   };

//   return (
//     <>
//       <div>
//         <h1> Login</h1>
//         <p> {loggedIn ? `User logged in ${username}` : "Please login"}</p>
//         {!loggedIn && (
//           <form onSubmit={onSubmitHandler}>
//             <div>
//               <label>
//                 UserName:
//                 <input
//                   type="text"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   placeholder="Enter UserName"
//                 />
//               </label>
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 marginBottom: "10px",
//               }}
//             >
//               <label>
//                 Password:
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="password"
//                 />
//               </label>
//             </div>
//             <button type="submit">Login</button>
//           </form>
//         )}
//         {loggedIn && <p> Welcome ,{username}!</p>}
//       </div>
//     </>
//   );
// };
// export default Login;
