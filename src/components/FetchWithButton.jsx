import FetchClient from "@/components/FetchClient"; 

const FetchWithButton = async () => {
  let response = null;
  let error = null;

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/ures");
    if (!res.ok) {
      throw new Error("Fetch failed");
    }
    response = await res.json();
  } catch (err) {
    console.log("Some Error", err);
    error = "Failed to fetch data.";
  }

  return (
    <FetchClient initialData={response} initialError={error} />
  );
};

export default FetchWithButton;
