"use client";

import { useAuth } from "@/context/AuthContext";

import { memo, useState } from "react";

const ChildAuth =(() => {
  const { loggedIn, login } = useAuth();
  const [name, setName] = useState("");
  const [password, setPassword] = useState(0);
  const onClickHandler=()=>{
    login(name, password)
   // setName("")
    setPassword(0);
  }
  return (
    <>
     <p>{loggedIn ? ` user loged in ${name}` : "please login"}</p>
      {
      loggedIn?"welcome":<> <label>username</label>
          <div style={{ justifyContent:"center",alignContent:"center", boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.2)",
         transition: "0.3s",padding: "2px 16px", maxWidth: "300px", margin:"auto"}}></div>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <label>password</label>
      <input
        value={password}
        type="number"
        onChange={(e) => setPassword(e.target.value)}
      />

      <div>
        <button onClick={onClickHandler}>login</button>
      </div>
      </>
      }
    </>
  );
});
export default ChildAuth;