"use client"
import { Box } from "@mui/material";
import { useState } from "react";

const TicTac=()=>{

    const [board,setBoard]=useState(Array(9).fill(null));
    const[player,setPlayer]=useState('X'); // isko by default X dedo 
    const [win,setWin]=useState(null); // not anyone

    // matrix create krte hai  
    // pattern winner ke liye 
      const patterns = [
    [0, 1, 2],
     [3, 4, 5],
      [6, 7, 8], 
    [0, 3, 6],
     [1, 4, 7], 
     [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]            
  ];
  const check=(newBoard)=>{ // check for winner 
    for(let p of patterns){
        const [a,b,c]=p; // 1 array 1 time pr 
        if(newBoard[a] && newBoard[a]===newBoard[b] && newBoard[a]===newBoard[c]){
            return newBoard[a];
        }
    }
  if(!newBoard.includes(null)) return 'Draw'; 
  return null;
}

const handleClick=(index)=>{
    if( win) return ;
    const newBoard =[...board]; 
    newBoard[index]=player; // player =0 to that particular index and vice versa
    setBoard(newBoard);
    const result=check(newBoard); // yaha pr board ko check kro
    if(result){
        setWin(result);
    }

    else{
        setPlayer(player==='X'?'0':'X'); //   setPlayer(player==='X'?<Component/>:'X');
         // player wise set krdo x to ) next chal
    }
}
const resetBoard=()=>{
    setBoard(Array(9).fill(null)); // refill to null
    setPlayer('X');
    setWin(null);

};

return (<>
  <h2> Tic Tac</h2>
<div  >  
     <div className="container" >
      
     {board.map((item,index)=>(
            <button key ={index} 
                onClick={()=>handleClick(index)}
                className="button-container"
                >
                   {item}
            </button>
        ))}
    </div>
         <div>
            {win ?(
                win==='Draw'? <p> draw </p>:<p> win :{win}</p>
            ): (
                <p> Current player :{player}</p>
            )}
            </div>

              <button onClick={resetBoard} >Restart</button>
            </div>
  
</>)
}
export default TicTac;