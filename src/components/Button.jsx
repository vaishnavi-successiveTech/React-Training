"use client"
const Button=({ text, color })=> {
  return (
    <>
      <button
        style={{ backgroundColor:color}} className="incbtn" >
        {text}
      </button>
    </>
  );
}
export default Button;
