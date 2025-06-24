//6.Create a functional component called Clock.
// Use the useState hook to manage a state variable named time initialized to the current time.
// Use the useEffect hook to update the time state every second to display the current time.
// Render the current time in a <p> element.
// When the component unmounts, clear the interval to stop updating the time.
"use client"
import { useEffect, useState } from "react";
const Clock=()=>{
    const[time,setTime]=useState(new Date().toLocaleTimeString());
    useEffect(() => {
     const id= setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
            console.log(id);
        },1000)

        return ()=>clearInterval(id) // useEffect return  

    },[]);

    return(
        <>
          <p> clock</p>
          <p>{time}</p>
        </>
    );
};

export default Clock;



