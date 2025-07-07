// // 1. Create a Next.js component using the App Router that fetches data on the server side (SSR) 
// from a public API (e.g., JSONPlaceholder) and displays the results on the page.
const FetchData= async() => {
    let response;
    let data;
    try {
        data = await fetch("https://jsonplaceholder.typicode.com/users");
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
                        {message.name}
                        {/* JSON.stringify(message, null, 2)*/}
                    </li>
                ))}

            </ul>
        </>
    );
}

export default   FetchData;