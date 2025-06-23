import UserCard from "@/components/UserCard";

export default function HomePage() {
  return (
    <>
    <div style={{display:"flex"}}>
     <UserCard  name="Nayan" email="nayan@gmail.com" avatarUrl="/Images/girl.jpg" /> 
     <UserCard  name="Raj" email="raj@gmail.com" avatarUrl="/Images/man.jpg" /> 
     </div>
     </>
  )
}