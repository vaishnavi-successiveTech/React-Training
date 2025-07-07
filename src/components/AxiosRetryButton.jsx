"use client";
import { useState, useEffect } from "react";
import fetchUsersAxios from "@/app/Assignment-5/actionAxios";

const AxiosRetryButton = ({ initialData = [] }) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    setLoading(true);
    setError(null);
      const response = await fetchUsersAxios();
        setData(response.data);
      setLoading(false);
  };

  useEffect(() => {
    if (initialData.length === 0) fetchData();
  }, [initialData]);

  return (
    <div>
      <h3>User List</h3>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && data.length > 0 ? (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>No users available.</p>
      )}
      <button onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Retry"}
      </button>
    </div>
  );
};

export default AxiosRetryButton;
