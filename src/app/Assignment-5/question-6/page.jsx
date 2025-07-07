import { AxiosRetryButton } from "@/components";
import fetchUsersAxios from "../actionAxios";

export default async function FetchData() {


    const users = await fetchUsersAxios();

  const hasUsers = users.length > 0;

  return (
    <div>
      <h2>User List</h2>

      {hasUsers ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p style={{ color: "red" }}>{error}</p>
      )}

      {!hasUsers && (
        <AxiosRetryButton initialData={users} />
      )}
    </div>
  );
}
