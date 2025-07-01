"use client";

import { redirect } from "next/navigation";
import { useAuth } from "@/context/AuthContexts";


const withAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const { loggedIn } = useAuth();
   
    if (!loggedIn) {
     redirect("/login");
    }
    else {
       
    }
    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
