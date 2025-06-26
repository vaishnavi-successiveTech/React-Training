"use client";

import { ChildComponent } from "@/components";
import Setting from "@/components/Settings";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";


const Home = () => {
  const { loggedIn, login } = useAuth();
  return (
    <>
      {loggedIn ? (
        <>
          <div>
            <Setting />
          </div>
        </>
      ) : (
        redirect('/login')
      )}
    </>
  );
};
export default Home;