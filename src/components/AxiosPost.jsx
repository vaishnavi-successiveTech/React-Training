import axios from "axios";

const AxiosPost=async()=>{
   
   
     const   response=await axios.get("https://jsonplaceholder.typicode.com/users");
      const   list=response.data;

      return (<>
      <h1> Name</h1>
      <ul>
{ list.map((message,index)=>
        <li key={index}>
           { message.name}
        </li>

      )
     
}  </ul>
      </>)
}
export default AxiosPost;