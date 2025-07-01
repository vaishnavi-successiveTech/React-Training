"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const AxiosRetryButton = () => {
  const [data, setUserData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3>User List</h3>

      {loading && <p>Loading...</p>}

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}
      {!loading && !error && (
        <div style={{ marginBottom: "12px" }}>
          {data.map((user) => (
            <div key={user.id}>{user.name}</div>
          ))}
        </div>
      )}
      <button
        onClick={fetchData}
        disabled={loading}
        style={{
          marginTop: "12px",
          padding: "8px 16px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Loading..." : "Retry"}
      </button>
    </div>
  );
};

export default AxiosRetryButton;
