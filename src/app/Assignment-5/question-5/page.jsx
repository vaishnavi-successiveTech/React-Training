import fetchUsersAxios from '../actionAxios';

const HomePage = async () => {
  const users = await fetchUsersAxios();

  return (
    <>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
