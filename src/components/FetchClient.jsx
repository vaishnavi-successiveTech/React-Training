"use client"

import { fetchUsers } from "@/app/Assignment-5/action";
import { useState } from "react";

const FetchClient= ({data=[]})=>{
  const [users,setUsers]=useState(data);
  
  const [isLoading,setLoading]=useState(false);
 const retryFetch=async()=>{
   setLoading(true);
  const user=await fetchUsers();
  setUsers(user);
  setLoading(false);
 }
  return (
    <>
      <button onClick={retryFetch} disabled={isLoading}>
        {isLoading ? 'Retrying...' : 'Retry'}
      </button>
      <ul>
      {
        users.map((user)=>
        <li key={user.id}>
          {user.name}
          
        </li>
        )
      }
      </ul>
    </>
  )
}
export default FetchClient;