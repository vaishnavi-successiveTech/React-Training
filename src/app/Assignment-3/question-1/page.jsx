import { ChildComponent } from "@/components";


import { AuthContextProvider } from "@/context/AuthContext";
export default function Home() {
  return (
    <div>
      <p>
        UserName :"Nayan"
        Password:"2486"
      </p>
      <AuthContextProvider>
        <ChildComponent/>
      </AuthContextProvider>

    </div>
  );
}

