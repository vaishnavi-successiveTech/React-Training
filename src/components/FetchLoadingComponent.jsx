"use client";

const { useState, useEffect } = require("react");

const FetchLoadingComponent = () => {
  const [data, setUserData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
const fetchData= async ()=>{
    setError(null);
    setLoading(true);
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new Error("Something error is here");
        }
        const data=await response.json();
        setUserData(data);// here data is set to the userData
            }
        catch(err){
            console.error(err)
           setError("Something went wrong. Please try again.");
           
        }
         finally {
      await new Promise((resolve) => setTimeout(resolve, 2000));
  setLoading(false);
           }
        };
     
        return (<>
       {loading && <p>Loading .....</p>}
       {error && !loading && <p style={{ color: "red" }}>{error}</p>}
        {!loading && data.length > 0 && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}

      <button
        onClick={fetchData}
        style={{
          marginTop: "1rem",
          padding: "8px 16px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Loading..." : "Retry"}
      </button>
        </>)
    };
    export default FetchLoadingComponent;
