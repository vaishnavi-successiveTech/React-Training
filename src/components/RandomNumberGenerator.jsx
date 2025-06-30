// Create a functional component called RandomNumberGenerator.
// Use the useState hook to manage a state variable named randomNumber, initialized to a random number between 1 and 100.
// Render the current value of randomNumber.
"use client"
import { useState } from "react";

// Add a button that generates a new random number and updates the state when clicked.
const RandomNumberGenerator=()=>{

    const [randomNumber,setRandomNumber]=useState(0);

    const  generateNumber=()=>{
        let num=Math.floor((Math.random()*100)+1);
        console.log(num);
        setRandomNumber(num);
    }
    
return (
    <div>
        <h2> Random Number is generated:{randomNumber}</h2>
        <button onClick={generateNumber}>Generate</button>

    </div>
)
} 
export default RandomNumberGenerator;