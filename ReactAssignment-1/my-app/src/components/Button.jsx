"use client"
export function Button({ text, color }) {

  return (
    <>
      <button
        style={{ backgroundColor:color}} className="incbtn" >
        {text}
      </button>
    </>
  );
}

