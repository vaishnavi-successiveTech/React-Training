"use client"
import { useState } from "react"
const Counter=()=>{
    const [count,setCount]=useState(0);
    const handleClick=()=>{
        setCount(count-1);
    };
    return(<div>
        <p  style={{display:"flex",fontSize:30 ,justifyContent:"center",alignItems:"center",paddingTop:50
,margin:"auto", gap: 40}}> Count:{count}</p>
        <button onClick={()=>setCount(count+1)} className="btn-1">Increment</button>
        <button onClick={handleClick}  className="btn-1">Decrement</button>
    </div>
    )
   }
export default Counter;
