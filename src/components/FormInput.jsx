"use client"
import { useState } from "react";

const FormInput=()=>{
    const [firstName,setFirstName]=useState("");
    const [lastname,setLastName]=useState("");
    const[gender , setGender]=useState();
    const[coupon,setCoupon]=useState(false);

    const handleSubmit=(e)=>{
         // Prevent the browser from reloading the page
          e.preventDefault();
        const formData={
            firstName,
            lastname,
            gender,
            coupon
        }
        console.log(formData);
    }
    const resetData=()=>{
           setFirstName("" );
           setLastName("");
           setGender("");
           setCoupon(false);
    }
    // const checkboxHandler=(e)=>{
    //     const{name,checked}=e.target;
    //     setCoupon((prev)=>{
    //         [...prev],
    //         name:checked;
    //     })


    // }

    return(<>
        <div style={{ justifyContent:"center",alignContent:"center", boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.2)",
         transition: "0.3s",padding: "2px 16px", maxWidth: "300px", margin:"auto"}}>
        <form method = "post" onSubmit={handleSubmit}>
            <label> FirstName</label>
            <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
            <label>LastName</label>
            <input type="text" value={lastname} onChange={(e)=>setLastName(e.target.value)}></input>
            <label>Gender</label>
            <input type="radio"   
          name="gender"
          value="male"
          checked={gender === "male"} onChange={(e)=>setGender(e.target.value)} />
            <label>Male</label>
            <input type="radio" name="gender" value="female" checked={gender == "female"} onChange={handleSubmit} />
            <label>Female</label>
            
            <br/>
            <input type="checkbox"  value="FoodCoupon" checked={coupon==="FoodCoupon"} onChange={e=>setCoupon(e.target.value)} />
            <label>FoodCoupon</label>
            <input type="checkbox" value="DinnerCoupon"checked={coupon==="DinnerCoupon"} onChange={e=>setCoupon(e.target.value)}/>
            <label> DinnerCoupon</label>
           <hr />
            <button type="reset" onClick={resetData}>Reset form</button>
      <button type="submit">Submit form</button>

        </form>
     </div>
    </>
    )
}
export default FormInput;

