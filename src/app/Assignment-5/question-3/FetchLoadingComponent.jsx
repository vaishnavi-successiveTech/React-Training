'use client';

import { useState } from "react";
import { fetchUsers } from "../Action";

const FetchLoadingComponent = ({ initialData }) => {
  const [data, setData] = useState(initialData); 
  const [loading, setLoading] = useState(false);

  const retryButton = async () => {
    setLoading(true);
    try {
      const newData = await fetchUsers(); 
      setData(newData); 
    } catch (err) {
      console.error("Retry failed", err);
    }
    setLoading(false);
  };

  return (
    <>
    
      {!data?.length && (
        <button onClick={retryButton} disabled={loading}>
          {loading ? "Retrying..." : "Retry"}
        </button>
      )}

    
      {data?.length > 0 && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FetchLoadingComponent;

