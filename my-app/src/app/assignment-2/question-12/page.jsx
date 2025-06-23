"use client";

import { useReducer } from "react";

// Initial votes for each game
const initialState = {
  Minecraft: 0,
  "GTA V": 0,
  PUBG: 0,
};

// Reducer function to handle vote actions
function voteReducer(state, action) {
  switch (action.type) {
    case "VOTE_MINECRAFT":
      return { ...state, Minecraft: state.Minecraft + 1 };
    case "VOTE_GTA":
      return { ...state, "GTA V": state["GTA V"] + 1 };
    case "VOTE_PUBG":
      return { ...state, PUBG: state.PUBG + 1 };
    default:
      return state;
  }
}

export default function Question12Page() {
  const [votes, dispatch] = useReducer(voteReducer, initialState);

  return (
    <div>
      <h2>Assignment-2: Question-12</h2>
      <p>🎮 Vote for your favorite game:</p>

      <button onClick={() => dispatch({ type: "VOTE_MINECRAFT" })}>Minecraft</button>
      <button onClick={() => dispatch({ type: "VOTE_GTA" })}>GTA V</button>
      <button onClick={() => dispatch({ type: "VOTE_PUBG" })}>PUBG</button>

      <h3>Vote Results:</h3>
      <p>Minecraft: {votes.Minecraft} votes</p>
      <p>GTA V: {votes["GTA V"]} votes</p>
      <p>PUBG: {votes.PUBG} votes</p>
    </div>
  );
}
