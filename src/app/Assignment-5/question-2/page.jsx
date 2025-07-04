// here render the function which we craeted in Action,jsx 
import { FetchClient } from "@/components";
import { fetchUsers } from "../Action";

export default async function FetchData() {
  const error=null;
  const users = await fetchUsers();

  return (
    <>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
      {/* <FetchClient data={users} errors={error}/> */}
    </>
  );
}
