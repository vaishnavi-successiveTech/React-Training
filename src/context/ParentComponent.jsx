// create two components: a parent component that acts as a provider and a child component that consumes the context.
// Create a context to manage a user's authentication status (logged in or out).
// Implement a login button in the child component that, when clicked, updates the authentication status in the context to "logged in."
// Display a message in the child component based on the user's authentication status. If the user is logged in, show "Welcome, [username]!" Otherwise, display "Please log in."
"use client";
import {createContext, useState, useContext } from "react";

const loggInContext = createContext();

 const ParentContextProvider=({ children })=> {
  const [loggIn, setLoggIn] = useState(false);
  const name = "Nayan";
  const pass = "2486";

  const handleDetails = (username, password) => {
    if (username === name && password === pass) {
      setLoggIn(true);
    }else{
        setLoggIn(false);
    }
  };
  return (
    <loggInContext.Provider value={{ loggIn, handleDetails }}>
      {children}
    </loggInContext.Provider>
  );
}
export const useLogin = () => useContext(loggInContext);
export default ParentContextProvider;
