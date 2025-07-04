// 
"use client";
import { createContext, useContext, useState } from "react";

const MyAuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const validUsername = "Nayan";
  const validPassword = "2486";
  const [loggedIn, setLoggedin] = useState(false);

  const login = (name, pass) => {
    console.log("Attempting login with", name, pass);
    if (name === validUsername && pass === validPassword) {
      console.log("Login successful");
      setLoggedin(true);
    
    } else {
      console.log("Invalid credentials");
      setLoggedin(false);
    }
  };

  return (
    <MyAuthContext.Provider value={{ loggedIn, login }}>
      {children}
    </MyAuthContext.Provider>
  );
};

export const useAuth = () => useContext(MyAuthContext);
