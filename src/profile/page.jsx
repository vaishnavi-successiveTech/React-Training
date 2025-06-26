"use client";
import Profile from "@/components/Profile";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";


const Home = () => {
  const { loggedIn, login } = useAuth();
  return (
    <>
      {loggedIn ? (
        <>
          <div>
            <Profile />
          </div>
        </>
      ) : (
        redirect('/login')
      )}
    </>
  );
};
export default Home;