"use client"
import { useEffect, useState } from "react";

const Notification=()=>{
    const[message,setMessage]=useState("hey! It's Me");
    useEffect(()=>{
        setTimeout(()=>{
            const mail=" ";
            console.log("5 SECONDS");
            setMessage(mail);
        },5000)
    },[message]);

    return(<div>
    <p> the message is :{message}</p></div>);

}
export default Notification;