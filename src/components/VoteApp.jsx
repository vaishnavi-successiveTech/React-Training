"use client"
import { useReducer } from "react";

// intialState of the useReducer
const initialState = {
  Minecraft: 0,
  SuperMario: 0,
  PubG: 0,
};
// create a reducer function for 
// this is reducer function whu=iuch the useRedyucer will use it
function reducer(state,action){
 switch (action.type) {
    case "Minecraft":
        return {...state,Minecraft:state.Minecraft+1};
    case "SuperMario" :
        return {...state,SuperMario:state.SuperMario+1};
    case "PubG" :
        return {...state,PubG:state.PubG+1};
    default:
        return state;     
 }
}
// function VoteApp
 const VoteApp=()=>{
    const [votes,dispatch]=useReducer(reducer,initialState);
    return (
        <>
        <h2
         style={{display:"flex",justifyContent:"center",alignContent:"center"}}> Vote for you favorite game </h2>
        <div  style={{display:"flex",justifyContent:"center",alignContent:"center" , marginBottom:"10px"}}> 
            <button style={{marginLeft:"10px",marginRight: "10px"}} onClick={()=>dispatch({type:"Minecraft"})}> MineCraft</button>
            <button   style={{ marginRight: "10px" }} onClick={()=>dispatch({type:"SuperMario"})}>SuperMario</button>
            <button    style={{ marginRight: "10px" }} onClick={()=>dispatch({type:"PubG"})}>PubG</button>
        </div>
        <div style={{ justifyContent:"center",alignContent:"center", boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.2)",
         transition: "0.3s",padding: "2px 16px", maxWidth: "300px", margin:"auto"}}>
        <h3 style={{display:"flex",justifyContent:"center",alignContent:"center"}}>  Results of Voting </h3>
        <p style={{display:"flex",justifyContent:"center",alignContent:"center"}}> MineCraft: {votes.Minecraft}</p>
         <p style={{display:"flex",justifyContent:"center",alignContent:"center"}}> SuperMario: {votes.SuperMario}</p>
         <p style={{display:"flex",justifyContent:"center",alignContent:"center"}}> PubG: {votes.PubG}</p>
             </div>
        </>
    )
}
export default VoteApp;