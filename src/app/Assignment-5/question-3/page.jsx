import { fetchUsers } from "../Action";

import FetchLoadingComponent from "./FetchLoadingComponent";

export default async function FetchData() {
  let users = [];
  let error = null;

  // Try to fetch data via SSR
  try {
    users = await fetchUsers();
  } catch (err) {
    error = "Failed to load users, please try again.";
  }

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
        <FetchLoadingComponent initialData={users} />
      )}
    </div>
  );
}
