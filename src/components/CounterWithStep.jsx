"use client"
import { useState } from "react"
const CounterWithStep=()=>{
    const[val,setVal]=useState(0);
    const[count,setCount]=useState(0);

    const handleClick=()=>{
        setCount(count+parseInt(val));

    }
    const decrementClick=()=>{
        setCount(count-parseInt(val));
    }
    return(
    <>
    <p > count :{count}</p>
     <button onClick={handleClick} >Increment</button>
     <button onClick={decrementClick } >Decrement</button>
     <input placeholder="enter the step" onChange={e=>setVal(e.target.value)}></input>
        </>

    )
}
export default CounterWithStep;

