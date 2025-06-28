"use client";
import { ChildComponent } from "@/components";
import { AuthContextProvider } from "@/context/AuthContext";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";

const Home = () => {
  const { loggedIn, login } = useAuth();
  return (
    <>
      {loggedIn ? (
         redirect('/Assignment-3')
        
      ) : (
        <>
          <div>
              <p>
        UserName :"Nayan"
        Password:"2486"
      </p>
       <AuthContextProvider>
        <ChildComponent/>
      </AuthContextProvider>
          </div>
        </>
       
      )}
    </>
  );
};
export default Home;
