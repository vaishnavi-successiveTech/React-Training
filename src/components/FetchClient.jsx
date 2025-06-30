"use client";

import { useState } from "react";
const FetchClient=()=> {
  const [userData, setUserData] = useState(  []);
  const [error, setError] = useState( null);
  const [loading, setLoading] = useState(false); // for lodaing  the data again 

  const retryFetch = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) {
        throw new Error("Fetch failed");
      }
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {/*optional chaning  */}
      {userData?.length > 0 && (
        <ul>
          {userData.map((user,index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      )}
      <button
        onClick={retryFetch}
        style={{
          marginTop: "1rem",
          padding: "8px 16px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "4px",
         
        }}
      >
        {loading ? "Loading..." : "Retry"} {/* do the conditional rendering ovee the Button */}
      </button>
    </div>
  );
}

export default FetchClient;