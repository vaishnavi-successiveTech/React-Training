"use client"
import { useState } from "react"
import withLogger from "../hoc/withLogger";
const Counter=()=>{
    const [count,setCount]=useState(0);
    const handleClick=()=>{
        setCount(count-1);
    };
    return(<div>
        <p  > Count:{count}</p>
        <button onClick={()=>setCount(count+1)} className="btn-1">Increment</button>
        <button onClick={handleClick}  className="btn-1">Decrement</button>
    </div>
    )
   }
export default withLogger(Counter);
