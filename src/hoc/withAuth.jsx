"use client";

import { useAuth } from "@/context";
import { redirect } from "next/navigation";
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
