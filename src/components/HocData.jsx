import withDataFetching from "./withDataFetching"

const HocData=(props)=>{
const {data}=props
return(
    <>
    {data?.map((items,index)=>
    
    <ul key={index}>
        <li>
        {items.name}
        </li>

    </ul>
    )}
    </>
)
}
export default withDataFetching(HocData);