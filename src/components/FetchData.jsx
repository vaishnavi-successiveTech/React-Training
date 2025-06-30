// // 1. Create a Next.js component using the App Router that fetches data on the server side (SSR) 
// from a public API (e.g., JSONPlaceholder) and displays the results on the page.


// const dataValue=()=>{
//     return fetch("https://jsonplaceholder.typicode.com/todos").then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// }
//  const FetchData=  async()=> {
//    try {
//     fetchResponse=await dataValue();
    
//    } catch (error) {
//       console.log("some error", error);
//    }
//    return (<>
//    <ul>
//      { response.map((message, index) => (
//                     <li key={index}>
//                         {message.title}
//                     </li>
//                 ))}

//    </ul>
//    </>)
//  }
// export default FetchData;


const FetchData= async() => {
    let response;
    let data;
    try {
        data = await fetch("https://jsonplaceholder.typicode.com/todos");
        console.log("calling");
        console.log(data);
        response = await data.json(); 
    } catch (error) {
        console.log("some error", error);
    }
    return (
        <>
            <ul>
                { response.map((message, index) => (
                    <li key={index}>
                        {message.title}
                    </li>
                ))}

            </ul>
        </>
    );
}

export default FetchData;