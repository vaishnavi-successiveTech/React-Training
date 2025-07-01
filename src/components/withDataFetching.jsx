
import axios from "axios";

const withDataFetching=(WrappedComponent)=> async  (props)=>{

    const response=await axios.get("https://jsonplaceholder.typicode.com/users");
    const data=response.data

  
   return  <WrappedComponent {...props} data={data}/>; 

}
export default withDataFetching;