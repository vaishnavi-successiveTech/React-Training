import FetchClient from "@/components/FetchClient";
import FetchWithButton from "@/components/FetchWithButton";

const HomePage=()=> {
  return (
    <main>
      <h1>Users List</h1>
      <FetchClient />
    </main>
  );
}

export default HomePage;