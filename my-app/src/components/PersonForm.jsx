"use client"

import { useState } from "react";

const PersonForm=()=>{
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[age,setAge]=useState("");

      return (
    <>
    <div style={{display:"flex" , flexDirection:"column", maxWidth:400}}>
     <label >FirstName: </label> <input
        value={firstName} placeholder="enter your first name"
        onChange={e => setFirstName(e.target.value)}
      />
       <label >LastName: </label> 
      <input value={lastName} placeholder="enter your last name" onChange={e=>setLastName(e.target.value)}/> 
       <label >Age: </label> <input value={age} placeholder="enter your name" onChange={e=>setAge(e.target.value)}/>
      </div>
      <div>
        <h2> Enter User Details</h2>
        <h3>FirstName:{firstName}</h3>
        <h3>LastName:{lastName}</h3>
        <h3>Age:{age}</h3>
      </div>
      <p>Hello, My name is{firstName} and Surname is {lastName}. My age is {age}.</p>
    </>
  );

}
export default PersonForm;





