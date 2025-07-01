
//     const [title,setTitle]=useState("");
//     const[content,setContent]=useState("");
//     const[message,setMessage]=useState("");
//     const[error,setError]=useState(""); 
//     const handleSubmit= async(e)=>{
//         e.preventDefault();
//     setMessage("");
//     setError("");

//     try{
//        const response=await axios.post("https://jsonplaceholder.typicode.com/users",{
//         name:name,
//         email:email,
//        });

    
//     if(response.status){
//         setMessage("succe")

//     }
    
        
//     }}
    
//     return (<>
//     <h2> Create  User Details</h2>
//     <form onSubmit={handleSubmit}>
//      <div style={{display:"flex",justifyContent:"center" , alignItems:"center"}}>
//         <div style={{margin:"12px"}}>
//         <label> Name </label>
//         <input 
//         type="text" 
//         value ={name}
//         onChange={(e)=>setTitle(e.target.value)}
//         required
//         placeholder="Enter user name "/>
//         </div>
//          <div style={{margin:"12px"}}>
//         <label> Email</label>
//         <input 
//         type="email"
//         value={email}
//         required
//         onChange={(e)=>setContent(e.target.value)}
//         placeholder="Enter email "
//         /> 
//         </div>
//         <button type="submit"
//           style={{
//             padding: "10px 20px",
//             backgroundColor: "#2563eb",
//             color: "white",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//           }}> Submit User

//         </button>
//      </div>
     
//     </form>
//     {message && <p style={{ color: "green", marginTop: "10px" }}> {{message}}</p>}
//     {error && <p style={{color:"red" , marginTop:"10px"}}> {{error}}</p>}

//     </>);

// };
// export default PostForm;

"use client";

import { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/users", {
        name: name,
        email: email,
      });

      if (response.status === 201) {
        setMessage("User created successfully!");
        console.log("201");
        setName("");
        setEmail("");
      }
    } catch (err) {
      console.error("Error creating user:", err);
      setError("Failed to create user. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "12px" }}>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit 
        </button>
      </form>
      {message && <p style={{ color: "green", marginTop: "10px" }}>{message}</p>}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
};

export default PostForm;
