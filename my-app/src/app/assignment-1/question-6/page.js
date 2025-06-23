import  Button  from "@/components/Button";
export default function ShowButton(){
    return(
        <>
        <div className="button-wrapper">
        <Button color={'green'} text={'Click Me'} />
        <Button color={'blue'} text={'User'} />   
        <Button color={'red'} text={'Alert'} />   
        </div>
        </>

    )
}