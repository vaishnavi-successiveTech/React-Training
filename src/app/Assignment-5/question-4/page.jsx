const { UserData } = require("@/components");


const getData=async ()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await response.json();
    return data;
}

const HomePage=async()=>{
    const userData= await getData(); // here to use data async return promise if we does not use await it will return promise which is an object
    return(
        <>
        <h2> User Tables</h2>
           <UserData data={userData}/>
        </>
    )

}
export default HomePage;

